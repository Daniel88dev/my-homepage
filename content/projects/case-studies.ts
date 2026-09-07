import type { ComponentType } from "react";
import type { Language } from "@/lib/language";
import type { CaseStudyNavItem } from "./types";

export interface CaseStudyContentModule {
  default: ComponentType;

  sections: CaseStudyNavItem[];
}

export type CaseStudyContentLoader = () => Promise<CaseStudyContentModule>;

export const CASE_STUDY_CONTENT: Record<
  string,
  Record<Language, CaseStudyContentLoader>
> = {
  "flexi-day": {
    en: () => import("./flexi-day/case-study-content"),
    cs: () => import("./flexi-day/case-study-content.cs"),
  },
};

export const CASE_STUDIES_AWAITING_TRANSLATION: readonly Language[] = [];

export const loadCaseStudyContent = (
  lang: Language,
  slug: string
): CaseStudyContentLoader | undefined => CASE_STUDY_CONTENT[slug]?.[lang];
