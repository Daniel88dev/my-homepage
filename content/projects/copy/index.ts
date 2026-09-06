import type { Language } from "@/lib/language";
import type { ProjectCopy, ProjectCopyBySlug } from "../types";
import { EN_PROJECT_COPY } from "./en";

/**
 * Project Copy for every published Language. Adding a Language to
 * `lib/language.ts` makes this a compile error until it gains an entry, rather
 * than a page with no description on it.
 *
 * A Language may be published before its prose is written — pointing its entry
 * at `EN_PROJECT_COPY` renders English under it, which is a deliberate,
 * temporary state and NOT something to leave here. The Language's own module
 * replaces the alias.
 */
export const PROJECT_COPY: Record<Language, ProjectCopyBySlug> = {
  en: EN_PROJECT_COPY,
};

/**
 * One Project's Copy in one Language. Every Project has Copy in every
 * published Language — `projects.test.ts` asserts it — so `undefined` here
 * means a content bug, not a state to render around.
 */
export const getProjectCopy = (
  lang: Language,
  slug: string
): ProjectCopy | undefined => PROJECT_COPY[lang][slug];
