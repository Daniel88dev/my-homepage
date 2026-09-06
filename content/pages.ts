import type { Language } from "@/lib/language";
import { getCaseStudySlugs } from "./projects";
import { getProjectCopy } from "./projects/copy";
import { loadCaseStudyContent } from "./projects/case-studies";

/**
 * Every page published in `lang`, as the path it is written at — the path
 * without a Language prefix, which is the same in every Language.
 *
 * A page exists in a Language only when everything it renders from does. The
 * homepage always does, since the Dictionary is complete by construction; a
 * Case Study needs both its Project Copy and its content module, and the route
 * 404s without them. That is what lets the Language Picker fall back to the
 * home page instead of pointing at a page that is not there.
 */
export const publishedPaths = (lang: Language): string[] => [
  "/",
  ...getCaseStudySlugs()
    .filter(
      (slug) =>
        getProjectCopy(lang, slug) !== undefined &&
        loadCaseStudyContent(lang, slug) !== undefined
    )
    .map((slug) => `/projects/${slug}`),
];
