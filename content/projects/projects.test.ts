import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { LANGUAGES } from "@/lib/language";
import { getCaseStudySlugs, getProjectBySlug, projects } from "./index";
import { getProjectCopy } from "./copy";
import { CASE_STUDY_CONTENT, loadCaseStudyContent } from "./case-studies";
import { SECTION_IDS, shots } from "./flexi-day/case-study";

const publicDir = join(__dirname, "..", "..", "public");
const existsInPublic = (src: string) => existsSync(join(publicDir, src));

describe("project content", () => {
  it("shows flexiday first", () => {
    expect(projects[0]?.slug).toBe("flexi-day");
    expect(projects[0]?.title).toBe("flexiday");
  });

  it("has a unique, URL-safe slug for every project", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it("references card images that exist under /public", () => {
    for (const project of projects) {
      expect(existsInPublic(project.imgSrc), `${project.slug}: ${project.imgSrc}`).toBe(true);
    }
  });

  it("references case study images that exist under /public", () => {
    for (const project of projects) {
      if (!project.caseStudy) continue;
      expect(
        existsInPublic(project.caseStudy.ogImage),
        `${project.slug} og: ${project.caseStudy.ogImage}`
      ).toBe(true);
      for (const src of project.caseStudy.images) {
        expect(existsInPublic(src), `${project.slug}: ${src}`).toBe(true);
      }
    }
  });

  it("generates a static path for exactly the projects with a case study", () => {
    const expected = projects.filter((p) => p.caseStudy !== undefined).map((p) => p.slug);
    expect(getCaseStudySlugs()).toEqual(expected);
    expect(expected).toContain("flexi-day");
  });

  it("has content for every case study slug, and a slug for every content module", () => {
    expect(Object.keys(CASE_STUDY_CONTENT).sort()).toEqual([...getCaseStudySlugs()].sort());
  });

  it("loads a content module with a default export for every case study slug", async () => {
    for (const slug of getCaseStudySlugs()) {
      for (const lang of LANGUAGES) {
        const load = loadCaseStudyContent(lang, slug);
        expect(load, `no ${lang} content module for ${slug}`).toBeDefined();
        const { default: Content } = await load!();
        // Any ComponentType will do; a plain function, a memo and a forwardRef
        // are all legal here. What this guards is that the module resolves at
        // all, which the `next/dynamic` wrapper used to hide until render time.
        expect(Content, `${slug} has no default export`).toBeDefined();
      }
    }
  });

  it("resolves nothing for an unknown slug", () => {
    expect(getProjectBySlug("does-not-exist")).toBeUndefined();
    expect(getProjectBySlug("does-not-exist")?.caseStudy).toBeUndefined();
  });

  it("points flexiday at its production URL and all four repositories", () => {
    const flexi = getProjectBySlug("flexi-day");
    expect(flexi?.liveUrl).toBe("https://www.flexi-day.com");
    expect(flexi?.relatedRepositories?.map((r) => r.url)).toEqual([
      "https://github.com/Daniel88dev/flexi-day",
      "https://github.com/Daniel88dev/flexi-day-be",
      "https://github.com/Daniel88dev/flexi-day-emails",
      "https://github.com/Daniel88dev/flexi-day-workspace",
    ]);
  });

  it("gives every case study a section list with unique ids", () => {
    for (const project of projects) {
      if (!project.caseStudy) continue;
      const ids = project.caseStudy.sectionIds;
      expect(ids.length).toBeGreaterThan(0);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it("navigates the seven flexiday sections, hero first", () => {
    const flexi = getProjectBySlug("flexi-day");
    expect(flexi?.caseStudy?.sectionIds).toEqual([
      "hero",
      "problem",
      "features",
      "architecture",
      "stack",
      "status",
      "learnings",
    ]);
    expect(flexi?.caseStudy?.sectionIds[0]).toBe(SECTION_IDS.hero);
  });

  it("renders every flexiday screenshot it declares", () => {
    const content = readFileSync(
      join(__dirname, "flexi-day", "case-study-content.tsx"),
      "utf8"
    );
    for (const name of Object.keys(shots)) {
      expect(content, `shots.${name} is declared but never rendered`).toContain(
        `shots.${name}`
      );
    }
  });

  it("keeps case study content out of the projects list", () => {
    const list = readFileSync(join(__dirname, "index.ts"), "utf8");
    expect(list).not.toContain("case-study-content");
  });
});

/**
 * The invariant half of a Project is the half that is the same in every
 * Language. These are the guarantees that make a second Language a content
 * change rather than a restructuring: nothing translatable is left in the
 * shared data, and nothing invariant is duplicated per Language.
 */
describe("the invariant/Project Copy split", () => {
  it("has Project Copy for every Project in every published Language", () => {
    for (const lang of LANGUAGES) {
      for (const project of projects) {
        const copy = getProjectCopy(lang, project.slug);
        expect(copy, `${lang}: ${project.slug}`).toBeDefined();
        expect(copy?.description.length, `${lang}: ${project.slug}`).toBeGreaterThan(0);
        expect(copy?.dialogContent, `${lang}: ${project.slug}`).toBeDefined();
      }
    }
  });

  it("has Case Study Copy for exactly the Projects that have a Case Study", () => {
    for (const lang of LANGUAGES) {
      for (const project of projects) {
        const copy = getProjectCopy(lang, project.slug);
        expect(copy?.caseStudy !== undefined, `${lang}: ${project.slug}`).toBe(
          project.caseStudy !== undefined
        );
      }
    }
  });

  it("gives every Case Study a title, a pitch and a description in every Language", () => {
    for (const lang of LANGUAGES) {
      for (const slug of getCaseStudySlugs()) {
        const caseStudy = getProjectCopy(lang, slug)?.caseStudy;
        expect(caseStudy?.title.length, `${lang}: ${slug} title`).toBeGreaterThan(0);
        expect(caseStudy?.pitch.length, `${lang}: ${slug} pitch`).toBeGreaterThan(0);
        expect(caseStudy?.description.length, `${lang}: ${slug} description`).toBeGreaterThan(0);
        // The meta description is the one with a hard limit.
        expect(caseStudy?.description.length, `${lang}: ${slug} description`).toBeLessThan(160);
      }
    }
  });

  // The drift guard for per-Language Case Study content. Section ids are
  // invariant and the navigation links to them; a Language whose content
  // labels a different set, or the same set in a different order, would leave
  // the sticky section navigation pointing at anchors that are not there.
  it("labels exactly the invariant section ids, in page order, in every Language", async () => {
    for (const slug of getCaseStudySlugs()) {
      const sectionIds = getProjectBySlug(slug)?.caseStudy?.sectionIds;
      for (const lang of LANGUAGES) {
        const { sections } = await loadCaseStudyContent(lang, slug)!();
        expect(
          sections.map((section) => section.id),
          `${lang}: ${slug}`
        ).toEqual(sectionIds);
        for (const section of sections) {
          expect(section.label.length, `${lang}: ${slug} #${section.id}`).toBeGreaterThan(0);
        }
      }
    }
  });

  it("keeps Project Dialog content out of the invariant data module", () => {
    const list = readFileSync(join(__dirname, "index.ts"), "utf8");
    expect(list).not.toContain("dialogContent");
    expect(list).not.toContain("<p>");
  });

  it("defines a Tech List, a Live URL and Related Repositories exactly once", () => {
    // Not per Language: they live on the Project, and there is one Project.
    const copyModule = readFileSync(join(__dirname, "copy", "en.tsx"), "utf8");
    for (const invariant of ["tech:", "liveUrl", "relatedRepositories", "https://github.com/"]) {
      expect(copyModule, `Project Copy must not carry ${invariant}`).not.toContain(invariant);
    }
  });
});
