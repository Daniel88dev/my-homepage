import type { ComponentType } from "react";
import type { Language } from "@/lib/language";
import type { CaseStudyNavItem } from "./types";

/**
 * What a Case Study content module exports. Prose and layout are inseparable
 * here, so a Language gets a whole module rather than a skeleton filled from a
 * dictionary — including the section labels, which name the sections the same
 * module renders.
 */
export interface CaseStudyContentModule {
  default: ComponentType;
  /** The section navigation, in page order. Ids are invariant; labels are prose. */
  sections: CaseStudyNavItem[];
}

export type CaseStudyContentLoader = () => Promise<CaseStudyContentModule>;

/**
 * The long-form content of each Case Study, by slug and then by Language.
 * Adding a Case Study is a content change: write the content module, add the
 * line here. Adding a Language to one is a second line beside the first, and
 * the type makes forgetting it a compile error. As with Project Copy, a
 * Language may be published before its prose is written by pointing at
 * another Language's module — temporary, and replaced by its own. The Case
 * Study route awaits the loader, so the homepage bundle never pulls a case
 * study or its building blocks.
 *
 * These are plain dynamic imports rather than `next/dynamic`. Under the App
 * Router a Server Component importing a Client Component already splits at the
 * boundary, so the wrapper bought no code splitting — only a client-side
 * loading state this page never used.
 */
export const CASE_STUDY_CONTENT: Record<
  string,
  Record<Language, CaseStudyContentLoader>
> = {
  "flexi-day": {
    en: () => import("./flexi-day/case-study-content"),
  },
};

/**
 * One Case Study's content in one Language, or `undefined` when there is none
 * — a Project may carry Case Study data before anyone has written the page.
 */
export const loadCaseStudyContent = (
  lang: Language,
  slug: string
): CaseStudyContentLoader | undefined => CASE_STUDY_CONTENT[slug]?.[lang];
