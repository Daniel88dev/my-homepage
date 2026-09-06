import { describe, expect, it } from "vitest";
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  isLanguage,
  languagePath,
  languageRewriteTarget,
  languageSwitchTarget,
  toLanguage,
} from "./language";

describe("LANGUAGES", () => {
  it("publishes English and Czech", () => {
    expect(LANGUAGES).toContain("en");
    expect(LANGUAGES).toContain("cs");
  });

  it("leaves English URLs unprefixed", () => {
    expect(DEFAULT_LANGUAGE).toBe("en");
  });

  it("recognises only published Languages", () => {
    expect(isLanguage("en")).toBe(true);
    expect(isLanguage("de")).toBe(false);
  });
});

describe("toLanguage", () => {
  it("keeps a published Language", () => {
    expect(toLanguage("en")).toBe("en");
  });

  // `dynamicParams = false` means only a published Language ever reaches a
  // page, but the route param is typed `string`, so the narrowing needs an
  // answer for the case the router has already ruled out.
  it("falls back to the default Language for anything else", () => {
    expect(toLanguage("de")).toBe(DEFAULT_LANGUAGE);
    expect(toLanguage("")).toBe(DEFAULT_LANGUAGE);
  });
});

describe("languagePath", () => {
  it("leaves English paths unprefixed", () => {
    expect(languagePath("en", "/")).toBe("/");
    expect(languagePath("en", "/projects/flexi-day")).toBe(
      "/projects/flexi-day",
    );
  });

  it("prefixes every other Language", () => {
    expect(languagePath("cs", "/")).toBe("/cs");
    expect(languagePath("cs", "/projects/flexi-day")).toBe(
      "/cs/projects/flexi-day",
    );
  });
});

describe("languageSwitchTarget", () => {
  // Where the Language Picker points. `counterparts` is the paths the target
  // Language actually publishes, so a page with no counterpart is a fallback
  // rather than a link into a 404.
  const both = ["/", "/projects/flexi-day"];

  it("preserves the current path, in the other Language", () => {
    expect(languageSwitchTarget("/projects/flexi-day", "cs", both)).toBe(
      "/cs/projects/flexi-day",
    );
    expect(languageSwitchTarget("/cs/projects/flexi-day", "en", both)).toBe(
      "/projects/flexi-day",
    );
  });

  it("preserves the home page in both directions", () => {
    expect(languageSwitchTarget("/", "cs", both)).toBe("/cs");
    expect(languageSwitchTarget("/cs", "en", both)).toBe("/");
  });

  it("falls back to the target Language's home page with no counterpart", () => {
    expect(languageSwitchTarget("/projects/flexi-day", "cs", ["/"])).toBe("/cs");
    expect(languageSwitchTarget("/cs/projects/flexi-day", "en", ["/"])).toBe(
      "/",
    );
  });

  // The Picker never punishes a visitor for using it, so an unmatched URL —
  // where it is the only way out that is not the browser's back button —
  // falls back like anything else with no counterpart.
  it("falls back from a path that is not a page at all", () => {
    expect(languageSwitchTarget("/nope", "cs", both)).toBe("/cs");
    expect(languageSwitchTarget("/cs/nope", "en", both)).toBe("/");
  });

  // English is reachable both unprefixed and at /en; the Picker answers the
  // same for either, since it is the same page.
  it("reads an explicit English prefix as the path beneath it", () => {
    expect(languageSwitchTarget("/en/projects/flexi-day", "cs", both)).toBe(
      "/cs/projects/flexi-day",
    );
    expect(languageSwitchTarget("/en", "cs", both)).toBe("/cs");
  });

  it("points at the current Language's own path, so the Picker is never dead", () => {
    expect(languageSwitchTarget("/projects/flexi-day", "en", both)).toBe(
      "/projects/flexi-day",
    );
  });
});

describe("languageRewriteTarget", () => {
  it("rewrites the unprefixed home page into the English segment", () => {
    expect(languageRewriteTarget("/")).toBe("/en");
  });

  it("rewrites a deeper unprefixed path into the English segment", () => {
    expect(languageRewriteTarget("/resume")).toBe("/en/resume");
  });

  it("does not prefix an English path twice", () => {
    expect(languageRewriteTarget("/en")).toBeNull();
    expect(languageRewriteTarget("/en/resume")).toBeNull();
  });

  it("passes a Czech path through, because Czech carries its own prefix", () => {
    expect(languageRewriteTarget("/cs")).toBeNull();
    expect(languageRewriteTarget("/cs/resume")).toBeNull();
    expect(languageRewriteTarget("/cs/projects/flexi-day")).toBeNull();
  });

  // Until a Language is published it is just an unknown path, so it is
  // rewritten like any other and the Language segment answers with a 404.
  it("rewrites an unpublished Language prefix, so it 404s rather than passing through", () => {
    expect(languageRewriteTarget("/de/resume")).toBe("/en/de/resume");
  });

  it("rewrites a Case Study path into the English segment", () => {
    expect(languageRewriteTarget("/projects/flexi-day")).toBe(
      "/en/projects/flexi-day",
    );
  });

  it("leaves framework internals alone", () => {
    expect(languageRewriteTarget("/_next/static/chunks/main.js")).toBeNull();
    expect(languageRewriteTarget("/_next/image")).toBeNull();
  });

  it("leaves the error-reporting tunnel alone", () => {
    expect(languageRewriteTarget("/monitoring")).toBeNull();
  });

  it("leaves public files alone", () => {
    expect(languageRewriteTarget("/favicon.ico")).toBeNull();
    expect(languageRewriteTarget("/Resume_DanielHrynusiw.pdf")).toBeNull();
    expect(languageRewriteTarget("/project-imgs/flexi-day/og.png")).toBeNull();
  });

  it("leaves the sitemap and the robots file alone", () => {
    expect(languageRewriteTarget("/sitemap.xml")).toBeNull();
    expect(languageRewriteTarget("/robots.txt")).toBeNull();
  });
});
