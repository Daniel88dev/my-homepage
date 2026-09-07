import { describe, expect, it } from "vitest";
import { SITE_URL } from "@/lib/site";
import { getCaseStudySlugs, projects } from "@/content/projects";
import sitemap from "./sitemap";

const SITE = SITE_URL;

describe("sitemap", () => {
  // The URLs are the ones the pages declare canonical, character for
  // character — including the home page, which the framework resolves without
  // a trailing slash.
  it("lists every published page in every Language", () => {
    expect(sitemap().map((entry) => entry.url)).toEqual([
      `${SITE}`,
      `${SITE}/cs`,
      `${SITE}/projects/flexi-day`,
      `${SITE}/cs/projects/flexi-day`,
    ]);
  });

  it("declares each entry's translations, whichever Language it is in", () => {
    const alternates = sitemap().map((entry) => entry.alternates?.languages);

    expect(alternates.slice(0, 2)).toEqual([
      { en: `${SITE}`, cs: `${SITE}/cs`, "x-default": `${SITE}` },
      { en: `${SITE}`, cs: `${SITE}/cs`, "x-default": `${SITE}` },
    ]);
    expect(alternates.slice(2)).toEqual([
      {
        en: `${SITE}/projects/flexi-day`,
        cs: `${SITE}/cs/projects/flexi-day`,
        "x-default": `${SITE}/projects/flexi-day`,
      },
      {
        en: `${SITE}/projects/flexi-day`,
        cs: `${SITE}/cs/projects/flexi-day`,
        "x-default": `${SITE}/projects/flexi-day`,
      },
    ]);
  });

  // The AC that a hand-maintained list would fail the moment a Case Study is
  // written: the URLs come from the Projects data, so a Project without a Case
  // Study has no page and no entry, and one with a Case Study has both.
  it("takes its Case Study URLs from the Projects data", () => {
    const urls = sitemap().map((entry) => entry.url);

    for (const slug of getCaseStudySlugs()) {
      expect(urls).toContain(`${SITE}/projects/${slug}`);
      expect(urls).toContain(`${SITE}/cs/projects/${slug}`);
    }

    const withoutCaseStudy = projects.filter((p) => p.caseStudy === undefined);
    expect(withoutCaseStudy.length).toBeGreaterThan(0);
    for (const project of withoutCaseStudy) {
      expect(urls.filter((url) => url.includes(project.slug))).toEqual([]);
    }
  });
});
