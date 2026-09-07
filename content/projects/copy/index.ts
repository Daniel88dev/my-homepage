import type { Language } from "@/lib/language";
import type { ProjectCopy, ProjectCopyBySlug } from "../types";
import { CS_PROJECT_COPY } from "./cs";
import { EN_PROJECT_COPY } from "./en";

export const PROJECT_COPY: Record<Language, ProjectCopyBySlug> = {
  en: EN_PROJECT_COPY,
  cs: CS_PROJECT_COPY,
};

export const PROJECT_COPY_AWAITING_TRANSLATION: readonly Language[] = [];

export const getProjectCopy = (
  lang: Language,
  slug: string
): ProjectCopy | undefined => PROJECT_COPY[lang][slug];
