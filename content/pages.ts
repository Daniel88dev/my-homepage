import {
  LANGUAGES,
  languageAlternates,
  type Language,
  type LanguageAlternates,
} from "@/lib/language";
import { getCaseStudySlugs } from "./projects";
import { getProjectCopy } from "./projects/copy";
import { loadCaseStudyContent } from "./projects/case-studies";

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

export interface PublishedPage {
  path: string;
  languages: Language[];
}

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

export const pageAlternates = (path: string): LanguageAlternates =>
  languageAlternates(
    path,
    publishedPages().find((page) => page.path === path)?.languages ?? []
  );
