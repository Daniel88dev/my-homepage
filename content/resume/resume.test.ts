import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { LANGUAGES } from "@/lib/language";
import { publishedPaths } from "@/content/pages";
import {
  RESUME_PATH,
  RESUME_PDF_PATH,
  RESUMES_AWAITING_TRANSLATION,
  getResume,
} from "./index";
import { formatPeriod, formatResumeDate, resumeDateTime } from "./format";

describe("resume content", () => {
  it("has a Resume for every Language not awaiting translation", () => {
    for (const lang of LANGUAGES) {
      expect(getResume(lang) !== undefined, lang).toBe(
        !RESUMES_AWAITING_TRANSLATION.includes(lang)
      );
    }
  });

  it("publishes the resume route exactly where a Resume exists", () => {
    for (const lang of LANGUAGES) {
      expect(publishedPaths(lang).includes(RESUME_PATH), lang).toBe(
        getResume(lang) !== undefined
      );
    }
  });

  it("serves the downloadable PDF from /public", () => {
    expect(existsSync(join(__dirname, "..", "..", "public", RESUME_PDF_PATH))).toBe(true);
  });

  it("lists employment newest first, with only the ongoing roles open-ended", () => {
    const employment = getResume("en")!.employment;
    const starts = employment.map(({ period: { start } }) => start.year * 12 + (start.month ?? 1));
    expect(starts).toEqual([...starts].sort((a, b) => b - a));
    for (const { period } of employment) {
      if (!period.end) continue;
      expect(period.end.year * 12 + (period.end.month ?? 12)).toBeGreaterThanOrEqual(
        period.start.year * 12 + (period.start.month ?? 1)
      );
    }
  });

  it("uses absolute https links and unique skill names", () => {
    const resume = getResume("en")!;
    for (const { url } of resume.links) expect(url).toMatch(/^https:\/\//);
    const names = [...resume.skills, ...resume.languages].map((s) => s.name);
    expect(new Set(names).size).toBe(names.length);
  });
});

describe("resume dates", () => {
  it("shows a bare year when no month is known", () => {
    expect(formatResumeDate("en", { year: 2011 })).toBe("2011");
    expect(resumeDateTime({ year: 2011 })).toBe("2011");
  });

  it("formats a month in the reader's Language", () => {
    expect(formatResumeDate("en", { year: 2025, month: 8 })).toBe("Aug 2025");
    expect(formatResumeDate("cs", { year: 2025, month: 8 })).not.toBe("Aug 2025");
    expect(resumeDateTime({ year: 2025, month: 8 })).toBe("2025-08");
  });

  it("labels an ongoing period with the present label", () => {
    expect(formatPeriod("en", { start: { year: 2021, month: 9 } }, "Present")).toBe(
      "Sep 2021 – Present"
    );
    expect(
      formatPeriod("en", { start: { year: 2004 }, end: { year: 2008 } }, "Present")
    ).toBe("2004 – 2008");
  });
});
