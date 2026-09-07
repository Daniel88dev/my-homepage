import type { Language } from "@/lib/language";
import { EN_DICTIONARY, type Dictionary } from "./en";
import { CS_DICTIONARY } from "./cs";

export type { Dictionary } from "./en";

const DICTIONARIES: Record<Language, Dictionary> = {
  en: EN_DICTIONARY,
  cs: CS_DICTIONARY,
};

export const getDictionary = (lang: Language): Dictionary => DICTIONARIES[lang];
