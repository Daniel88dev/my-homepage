import type { MetadataRoute } from "next";
import { languageAlternates, languagePath } from "@/lib/language";
import { absoluteSiteUrl } from "@/lib/site";
import { publishedPages } from "@/content/pages";

/**
 * Every URL the site publishes, generated from the Projects data rather than
 * maintained by hand: a Case Study that exists is in here, and one that is not
 * written yet is not.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return publishedPages().flatMap(({ path, languages }) => {
    // Every URL of a page carries the same set of translations, itself
    // included, so a crawler that finds any one of them finds all of them.
    const alternates = {
      languages: languageAlternates(path, languages, absoluteSiteUrl),
    };
    return languages.map((lang) => ({
      url: absoluteSiteUrl(languagePath(lang, path)),
      alternates,
    }));
  });
}
