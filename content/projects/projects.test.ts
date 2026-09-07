import { describe, expect, it } from "vitest";
import { isValidElement, type ReactNode } from "react";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { LANGUAGES, type Language } from "@/lib/language";
import { getCaseStudySlugs, getProjectBySlug, projects } from "./index";
import {
  PROJECT_COPY,
  PROJECT_COPY_AWAITING_TRANSLATION,
  getProjectCopy,
} from "./copy";
import {
  CASE_STUDIES_AWAITING_TRANSLATION,
  CASE_STUDY_CONTENT,
  loadCaseStudyContent,
} from "./case-studies";
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
/**
 * Every string in a Project Dialog's element tree, in order. Comparing this
 * rather than the element itself is what lets a test tell a translation from a
 * copied module. Walks the tree instead of rendering it, so the test needs no
 * DOM.
 */
const dialogText = (node: ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(dialogText).join("");
  if (isValidElement(node)) {
    return dialogText((node.props as { children?: ReactNode }).children);
  }
  return "";
};

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

  /**
   * The half-translated guard. The test above passes as soon as a Language has
   * *some* Copy for every Project, which an alias to English satisfies — so it
   * cannot tell a translation from a placeholder. This one can: once a
   * Language has left `PROJECT_COPY_AWAITING_TRANSLATION`, every Project it
   * carries must be written in that Language rather than borrowed from
   * English. A Project added to `index.ts` and described in `copy/en.tsx`
   * alone therefore fails here, per Language, by name.
   *
   * The Dialog is compared by its text rather than by identity: it is JSX, so
   * a copied module builds a fresh element tree every time and any identity
   * check would pass on a file that has not been translated at all.
   */
  it("writes every Project's prose anew in every translated Language", () => {
    const translated = LANGUAGES.filter(
      (lang) => lang !== "en" && !PROJECT_COPY_AWAITING_TRANSLATION.includes(lang)
    );
    for (const lang of translated) {
      for (const project of projects) {
        const copy = getProjectCopy(lang, project.slug);
        const english = getProjectCopy("en", project.slug);
        expect(copy, `${lang}: ${project.slug} has no Project Copy`).toBeDefined();
        expect(copy?.description, `${lang}: ${project.slug} is still English`).not.toBe(
          english?.description
        );
        expect(
          dialogText(copy?.dialogContent),
          `${lang}: ${project.slug}'s Project Dialog is still English`
        ).not.toBe(dialogText(english?.dialogContent));
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

  /**
   * A Language may be published before its prose is written, by pointing its
   * registry entry at English. Nothing about a total `Record<Language, ...>`
   * can tell that apart from a real translation — English under a Czech flag
   * renders perfectly — so each registry declares which Languages are still
   * reading English, and these two tests hold the declaration to the truth.
   *
   * That makes the placeholder impossible to forget in either direction: a
   * translation that lands without its Language leaving the list fails here,
   * and so does a list entry for a Language that is already translated.
   * Emptying both lists is what finishes #37 and #38.
   */
  it("declares exactly the Languages whose Project Copy is still English", () => {
    const aliased = LANGUAGES.filter(
      (lang) => lang !== "en" && PROJECT_COPY[lang] === PROJECT_COPY.en
    );
    expect([...aliased].sort()).toEqual([...PROJECT_COPY_AWAITING_TRANSLATION].sort());
  });

  it("declares exactly the Languages whose Case Study content is still English", async () => {
    const aliased: Language[] = [];
    for (const lang of LANGUAGES) {
      if (lang === "en") continue;
      // Module identity, not loader identity: two `import()` calls for the
      // same specifier resolve to the same module, however they are written.
      const readsEnglish = await Promise.all(
        getCaseStudySlugs().map(async (slug) => {
          const [translated, english] = await Promise.all([
            loadCaseStudyContent(lang, slug)!(),
            loadCaseStudyContent("en", slug)!(),
          ]);
          return translated.default === english.default;
        })
      );
      if (readsEnglish.some(Boolean)) aliased.push(lang);
    }
    expect([...aliased].sort()).toEqual([...CASE_STUDIES_AWAITING_TRANSLATION].sort());
  });

  it("keeps Project Dialog content out of the invariant data module", () => {
    const list = readFileSync(join(__dirname, "index.ts"), "utf8");
    expect(list).not.toContain("dialogContent");
    expect(list).not.toContain("<p>");
  });

  it("defines a Tech List, a Live URL and Related Repositories exactly once", () => {
    // Not per Language: they live on the Project, and there is one Project.
    // Every Copy module is held to this, not just English — a Tech List or a
    // repository URL retyped into a translation is exactly how the facts start
    // disagreeing between Languages.
    const copyDir = join(__dirname, "copy");
    const copyModules = readdirSync(copyDir).filter((file) => file.endsWith(".tsx"));
    expect(copyModules.length, "no Project Copy modules found").toBeGreaterThan(0);
    for (const file of copyModules) {
      const copyModule = readFileSync(join(copyDir, file), "utf8");
      for (const invariant of ["tech:", "liveUrl", "relatedRepositories", "https://github.com/"]) {
        expect(copyModule, `copy/${file} must not carry ${invariant}`).not.toContain(invariant);
      }
    }
  });
});
