import type { Language } from "@/lib/language";
import { EN_DICTIONARY, type Dictionary } from "./en";
import { CS_DICTIONARY } from "./cs";

export type { Dictionary } from "./en";

/**
 * Every Language's Dictionary. Unlike Project Copy and Case Study content,
 * this one is never aliased to another Language: a Dictionary is small enough
 * to translate in the commit that publishes the Language, and the type makes
 * an incomplete one a compile error, so there is nothing here to defer.
 */
const DICTIONARIES: Record<Language, Dictionary> = {
  en: EN_DICTIONARY,
  cs: CS_DICTIONARY,
};

/**
 * The Dictionary a page is written from. Server-side only in practice: pages
 * and layouts read it and hand interactive leaves the strings they need, so
 * no Client Component ever pulls the whole thing into the browser bundle.
 */
export const getDictionary = (lang: Language): Dictionary => DICTIONARIES[lang];
