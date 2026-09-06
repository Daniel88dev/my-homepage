import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { getCaseStudySlugs, getProjectBySlug, projects } from "./index";
import { CASE_STUDY_CONTENT } from "./case-studies";
import { SECTIONS, shots } from "./flexi-day/case-study";

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
      const load = CASE_STUDY_CONTENT[slug];
      expect(load, `no content module for ${slug}`).toBeDefined();
      const { default: Content } = await load!();
      // Any ComponentType will do; a plain function, a memo and a forwardRef
      // are all legal here. What this guards is that the module resolves at
      // all, which the `next/dynamic` wrapper used to hide until render time.
      expect(Content, `${slug} has no default export`).toBeDefined();
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
      const ids = project.caseStudy.sections.map((s) => s.id);
      expect(ids.length).toBeGreaterThan(0);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it("navigates the seven flexiday sections, hero first", () => {
    const flexi = getProjectBySlug("flexi-day");
    expect(flexi?.caseStudy?.sections.map((s) => s.id)).toEqual([
      "hero",
      "problem",
      "features",
      "architecture",
      "stack",
      "status",
      "learnings",
    ]);
    expect(flexi?.caseStudy?.sections[0]).toBe(SECTIONS.hero);
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
    const list = readFileSync(join(__dirname, "index.tsx"), "utf8");
    expect(list).not.toContain("case-study-content");
  });
});
