import { describe, expect, it } from "vitest";
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  isLanguage,
  languageRewriteTarget,
} from "./language";

describe("LANGUAGES", () => {
  it("publishes English", () => {
    expect(LANGUAGES).toContain("en");
  });

  it("leaves English URLs unprefixed", () => {
    expect(DEFAULT_LANGUAGE).toBe("en");
  });

  it("recognises only published Languages", () => {
    expect(isLanguage("en")).toBe(true);
    expect(isLanguage("de")).toBe(false);
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

  // Until a Language is published it is just an unknown path, so it is
  // rewritten like any other and the Language segment answers with a 404.
  it("rewrites an unpublished Language prefix, so it 404s rather than passing through", () => {
    expect(languageRewriteTarget("/cs/resume")).toBe("/en/cs/resume");
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
