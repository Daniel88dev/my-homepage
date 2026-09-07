import {
  LANGUAGES,
  languageAlternates,
  type Language,
  type LanguageAlternates,
} from "@/lib/language";
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

/** One page of the site, and every Language it is published in. */
export interface PublishedPage {
  /** The path the page is written at, without a Language prefix. */
  path: string;
  languages: Language[];
}

/**
 * Every page the site publishes, once per page rather than once per URL, each
 * carrying the Languages it exists in — which is what a sitemap entry needs to
 * declare its own translations.
 *
 * Pages appear in the order the default Language publishes them, so the list
 * reads the way the site is written; a page some other Language publishes and
 * English does not would follow, rather than be dropped.
 */
export const publishedPages = (): PublishedPage[] => {
  const pages = new Map<string, Language[]>();
  for (const lang of LANGUAGES) {
    for (const path of publishedPaths(lang)) {
      const languages = pages.get(path);
      if (languages) languages.push(lang);
      else pages.set(path, [lang]);
    }
  }
  return [...pages].map(([path, languages]) => ({ path, languages }));
};

/**
 * The translations one page declares, as paths — a page's own
 * `alternates.languages`. Paths rather than absolute URLs, because the root
 * layout's `metadataBase` absolutises them; the sitemap, which has no metadata
 * base, calls `languageAlternates` itself with a URL builder.
 */
export const pageAlternates = (path: string): LanguageAlternates =>
  languageAlternates(
    path,
    publishedPages().find((page) => page.path === path)?.languages ?? []
  );
