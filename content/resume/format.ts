import type { Language } from "@/lib/language";
import type { Period, ResumeDate } from "./types";

export const formatResumeDate = (lang: Language, date: ResumeDate): string =>
  date.month === undefined
    ? String(date.year)
    : new Intl.DateTimeFormat(lang, {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      }).format(Date.UTC(date.year, date.month - 1, 1));

export const formatPeriod = (
  lang: Language,
  period: Period,
  presentLabel: string
): string =>
  `${formatResumeDate(lang, period.start)} – ${
    period.end ? formatResumeDate(lang, period.end) : presentLabel
  }`;

export const resumeDateTime = (date: ResumeDate): string =>
  date.month === undefined
    ? String(date.year)
    : `${date.year}-${String(date.month).padStart(2, "0")}`;
