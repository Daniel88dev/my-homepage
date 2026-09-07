import type { MetadataRoute } from "next";
import { languageAlternates, languagePath } from "@/lib/language";
import { absoluteSiteUrl } from "@/lib/site";
import { publishedPages } from "@/content/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return publishedPages().flatMap(({ path, languages }) => {
    const alternates = {
      languages: languageAlternates(path, languages, absoluteSiteUrl),
    };
    return languages.map((lang) => ({
      url: absoluteSiteUrl(languagePath(lang, path)),
      alternates,
    }));
  });
}
