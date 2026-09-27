import { describe, expect, it } from "vitest";
import { LANGUAGES } from "@/lib/language";
import { publishedPaths } from "@/content/pages";
import { RESUME_PATH, RESUMES, getResume } from "./index";
import { formatPeriod, formatResumeDate, resumeDateTime } from "./format";
import type { Resume } from "./types";

const toMonths = (year: number, month: number | undefined, fallback: number) =>
  year * 12 + (month ?? fallback);

const invariants = (resume: Resume) => ({
  links: resume.links.map((link) => link.url),
  employment: resume.employment.map(({ employer, period }) => ({ employer, period })),
  education: resume.education.map(({ period }) => period),
  awards: resume.awards.map(({ issuer, date }) => ({ issuer, date })),
  courses: resume.courses.map(({ provider, date }) => ({ provider, date })),
  skillLevels: resume.skills.map(({ level }) => level),
  languageLevels: resume.languages.map(({ level }) => level),
});

describe("resume content", () => {
  it("publishes the resume route in every Language", () => {
    for (const lang of LANGUAGES) {
      expect(publishedPaths(lang), lang).toContain(RESUME_PATH);
    }
  });

  it("lists employment newest first, with every closed period ending after it starts", () => {
    for (const lang of LANGUAGES) {
      const employment = getResume(lang).employment;
      const starts = employment.map(({ period: { start } }) => toMonths(start.year, start.month, 1));
      expect(starts, lang).toEqual([...starts].sort((a, b) => b - a));
      for (const { period } of employment) {
        if (!period.end) continue;
        expect(toMonths(period.end.year, period.end.month, 12)).toBeGreaterThanOrEqual(
          toMonths(period.start.year, period.start.month, 1)
        );
      }
    }
  });

  it("uses absolute https links and unique skill names", () => {
    for (const lang of LANGUAGES) {
      const resume = getResume(lang);
      for (const { url } of resume.links) expect(url).toMatch(/^https:\/\//);
      const names = [...resume.skills, ...resume.languages].map((s) => s.name);
      expect(new Set(names).size, lang).toBe(names.length);
    }
  });

  it("keeps dates, employers, links and levels identical across Languages", () => {
    for (const lang of LANGUAGES) {
      expect(invariants(RESUMES[lang]), lang).toEqual(invariants(RESUMES.en));
    }
  });

  it("translates the prose rather than copying the English", () => {
    for (const lang of LANGUAGES) {
      if (lang === "en") continue;
      const resume = getResume(lang);
      expect(resume.summary).not.toBe(RESUMES.en.summary);
      expect(resume.headline).not.toBe(RESUMES.en.headline);
      resume.employment.forEach((position, i) => {
        expect(position.description, `${lang} employment ${i}`).not.toBe(
          RESUMES.en.employment[i]?.description
        );
      });
    }
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
