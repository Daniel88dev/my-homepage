import type { Language } from "@/lib/language";
import type { YearMonth } from "./types";

export const formatYearMonth = (
  lang: Language,
  { year, month }: YearMonth,
): string =>
  new Intl.DateTimeFormat(lang, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(Date.UTC(year, month - 1, 1));

export const formatYear = ({ year }: YearMonth): string => String(year);
