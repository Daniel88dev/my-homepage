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
  // Czech is published, its Project Copy is not yet written. #37 replaces this
  // with `cs: CS_PROJECT_COPY` and removes "cs" below, in the same commit.
  cs: EN_PROJECT_COPY,
};

/**
 * The Languages whose entry above is still English rather than their own
 * prose. Declared rather than inferred: English under another Language's flag
 * renders perfectly, so nothing else can tell a placeholder from a
 * translation. `projects.test.ts` holds this list to what the registry
 * actually does, in both directions — which is what makes the alias
 * impossible to forget and impossible to leave declared once it is gone.
 */
export const PROJECT_COPY_AWAITING_TRANSLATION: readonly Language[] = ["cs"];

/**
 * One Project's Copy in one Language. Every Project has Copy in every
 * published Language — `projects.test.ts` asserts it — so `undefined` here
 * means a content bug, not a state to render around.
 */
export const getProjectCopy = (
  lang: Language,
  slug: string
): ProjectCopy | undefined => PROJECT_COPY[lang][slug];
