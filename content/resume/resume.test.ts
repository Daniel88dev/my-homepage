import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { LANGUAGES } from "@/lib/language";
import { getResume } from "./index";
import { RESUME_FACTS, RESUME_PDF_PATH } from "./resume";
import { isValidYearMonth, monthIndex } from "./timeline";
import { ROLE_IDS } from "./types";

const publicDir = join(__dirname, "..", "..", "public");

describe("resume facts", () => {
  it("lists roles newest first", () => {
    const starts = RESUME_FACTS.roles.map((role) => monthIndex(role.start));
    expect(starts).toEqual([...starts].sort((a, b) => b - a));
  });

  it("has one role per role id, in the declared order", () => {
    expect(RESUME_FACTS.roles.map((role) => role.id)).toEqual([...ROLE_IDS]);
  });

  it("uses valid dates that end after they start", () => {
    for (const role of RESUME_FACTS.roles) {
      expect(isValidYearMonth(role.start), role.id).toBe(true);
      if (role.end) {
        expect(isValidYearMonth(role.end), role.id).toBe(true);
        expect(monthIndex(role.end)).toBeGreaterThanOrEqual(
          monthIndex(role.start),
        );
      }
    }
    for (const entry of [...RESUME_FACTS.awards, ...RESUME_FACTS.courses]) {
      expect(isValidYearMonth(entry.date), entry.id).toBe(true);
    }
  });

  it("references a portrait that exists under /public", () => {
    expect(existsSync(join(publicDir, RESUME_FACTS.portrait.src))).toBe(true);
  });

  it("serves the PDF from a route with no dot, so the proxy rewrites it", () => {
    expect(RESUME_PDF_PATH).toBe("/resume/pdf");
    expect(RESUME_PDF_PATH.split("/").pop()).not.toContain(".");
  });

  it("keeps courses and awards newest first", () => {
    for (const list of [RESUME_FACTS.courses, RESUME_FACTS.awards]) {
      const dates = list.map((entry) => monthIndex(entry.date));
      expect(dates).toEqual([...dates].sort((a, b) => b - a));
    }
  });
});

describe("resume copy", () => {
  it("is translated, not copied, for every role", () => {
    const english = getResume("en").copy;
    for (const lang of LANGUAGES.filter((l) => l !== "en")) {
      const copy = getResume(lang).copy;
      expect(copy.summary).not.toBe(english.summary);
      for (const id of ROLE_IDS) {
        expect(copy.roles[id].summary, `${lang} ${id}`).not.toBe(
          english.roles[id].summary,
        );
        expect(copy.roles[id].highlights, `${lang} ${id}`).not.toEqual(
          english.roles[id].highlights,
        );
      }
    }
  });

  it("keeps every highlight short enough to scan", () => {
    for (const lang of LANGUAGES) {
      for (const id of ROLE_IDS) {
        const { highlights } = getResume(lang).copy.roles[id];
        expect(highlights.length, `${lang} ${id}`).toBeLessThanOrEqual(4);
        for (const highlight of highlights) {
          expect(
            highlight.length,
            `${lang} ${id}: ${highlight}`,
          ).toBeLessThanOrEqual(140);
        }
      }
    }
  });

  it("uses no dash characters the page design forbids", () => {
    for (const lang of LANGUAGES) {
      expect(JSON.stringify(getResume(lang).copy)).not.toMatch(/[–—]/);
    }
  });
});
