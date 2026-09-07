import { describe, expect, it } from "vitest";
import { isValidElement, type ComponentType, type ReactNode } from "react";
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

  it("renders every flexiday screenshot it declares, in every Language", () => {
    const dir = join(__dirname, "flexi-day");

    const modules = readdirSync(dir).filter((file) =>
      /^case-study-content(\.[a-z]{2})?\.tsx$/.test(file)
    );
    expect(modules.length, "no flexiday content modules found").toBeGreaterThan(0);
    for (const file of modules) {
      const content = readFileSync(join(dir, file), "utf8");
      for (const name of Object.keys(shots)) {
        expect(
          content,
          `${file}: shots.${name} is declared but never rendered`
        ).toContain(`shots.${name}`);
      }
    }
  });

  it("keeps case study content out of the projects list", () => {
    const list = readFileSync(join(__dirname, "index.ts"), "utf8");
    expect(list).not.toContain("case-study-content");
  });
});

const NON_PROSE_PROPS = new Set([
  "alt",
  "className",
  "groups",
  "height",
  "href",
  "id",
  "preload",
  "quality",
  "rel",
  "repositories",
  "reverse",
  "sizes",
  "src",
  "target",
  "url",
  "width",
]);

const elementText = (node: unknown): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(elementText).join("");
  if (isValidElement(node)) return elementText(node.props);
  if (node !== null && typeof node === "object") {
    return Object.entries(node)
      .filter(([name]) => !NON_PROSE_PROPS.has(name))
      .map(([, value]) => elementText(value))
      .join("");
  }
  return "";
};

const caseStudySectionText = (Content: ComponentType): Map<string, string> => {
  expect(typeof Content, "the content module is not a function component").toBe(
    "function"
  );
  const found = new Map<string, string>();
  const walk = (node: ReactNode) => {
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    if (!isValidElement(node)) return;
    const props = node.props as { id?: unknown; children?: ReactNode };

    if (typeof props.id === "string") {
      found.set(props.id, elementText(node));
      return;
    }
    walk(props.children);
  };
  walk((Content as () => ReactNode)());
  return found;
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
          elementText(copy?.dialogContent),
          `${lang}: ${project.slug}'s Project Dialog is still English`
        ).not.toBe(elementText(english?.dialogContent));
      }
    }
  });

  it("writes the hero screenshot's alt text anew in every translated Language", () => {
    const translated = LANGUAGES.filter(
      (lang) => lang !== "en" && !PROJECT_COPY_AWAITING_TRANSLATION.includes(lang)
    );
    for (const lang of translated) {
      for (const project of projects) {
        if (!project.caseStudy) continue;
        const copy = getProjectCopy(lang, project.slug)?.caseStudy;
        const english = getProjectCopy("en", project.slug)?.caseStudy;
        expect(copy?.heroImageAlt, `${lang}: ${project.slug} hero alt is missing`).toBeTruthy();
        expect(
          copy?.heroImageAlt,
          `${lang}: ${project.slug} hero alt is still English`
        ).not.toBe(english?.heroImageAlt);
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

        expect(caseStudy?.description.length, `${lang}: ${slug} description`).toBeLessThan(160);
      }
    }
  });

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

  it("renders the same anchors in every Language, in that Language's words", async () => {
    const translated = LANGUAGES.filter(
      (lang) => lang !== "en" && !CASE_STUDIES_AWAITING_TRANSLATION.includes(lang)
    );
    for (const slug of getCaseStudySlugs()) {
      const sectionIds = getProjectBySlug(slug)?.caseStudy?.sectionIds ?? [];
      const english = await loadCaseStudyContent("en", slug)!();
      const englishText = caseStudySectionText(english.default);
      expect(englishText.size, `en: ${slug} renders no sections`).toBeGreaterThan(0);
      for (const id of englishText.keys()) {
        expect(sectionIds, `en: ${slug} renders unlisted anchor #${id}`).toContain(id);
      }

      for (const lang of translated) {
        const content = await loadCaseStudyContent(lang, slug)!();
        const text = caseStudySectionText(content.default);
        expect(
          [...text.keys()],
          `${lang}: ${slug} renders different anchors from English`
        ).toEqual([...englishText.keys()]);

        for (const [id, section] of text) {
          expect(section.length, `${lang}: ${slug} #${id} is empty`).toBeGreaterThan(0);
          expect(section, `${lang}: ${slug} #${id} is still English`).not.toBe(
            englishText.get(id)
          );
        }

        expect(
          content.sections.map((navItem) => navItem.label).join("|"),
          `${lang}: ${slug} navigates in English`
        ).not.toBe(english.sections.map((navItem) => navItem.label).join("|"));
      }
    }
  });

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
