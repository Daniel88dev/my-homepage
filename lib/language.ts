/**
 * The Languages the site is published in. Adding one here publishes it: the
 * root layout generates a static param for it, and the Dictionary and Project
 * Copy registries stop typechecking until they carry an entry for it.
 */
export const LANGUAGES = ["en", "cs"] as const;

export type Language = (typeof LANGUAGES)[number];

/**
 * Each Language named in itself, as a Language Picker names it. Invariant, in
 * the same way a product name is: "Čeština" reads the same to an English
 * visitor as to a Czech one, and a Dictionary entry per Language would only
 * invite one of them to be translated.
 */
export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  cs: "Čeština",
};

/** The Language whose URLs carry no prefix. See docs/adr/0001. */
export const DEFAULT_LANGUAGE: Language = "en";

export const isLanguage = (value: string): value is Language =>
  (LANGUAGES as readonly string[]).includes(value);

/**
 * Narrows a route param to a Language. The framework's route validator rejects
 * a `params` type narrower than its own, so every page receives `lang` as a
 * `string`; `dynamicParams = false` is what guarantees the value is published.
 * The fallback exists so that guarantee does not have to be restated as a
 * non-null assertion at every call site.
 */
export const toLanguage = (value: string): Language =>
  isLanguage(value) ? value : DEFAULT_LANGUAGE;

/**
 * The path a page is published at in `lang`, given the path it is written at —
 * which is the same in every Language, because the site translates prose and
 * not URL segments. English carries no prefix, so for English this is the
 * identity. See docs/adr/0001-unprefixed-english-urls.md.
 *
 * This is the one place that knows how a Language and a path make a URL: the
 * Language Picker, and any canonical or alternate link, go through it.
 */
export const languagePath = (lang: Language, path: string): string => {
  if (lang === DEFAULT_LANGUAGE) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
};

/**
 * The path beneath any Language prefix — the path as it is written, which is
 * what the two Languages have in common. English is reachable both unprefixed
 * and at `/en`, so both forms answer the same.
 */
const unprefixedPath = (pathname: string): string => {
  const [, firstSegment = "", ...rest] = pathname.split("/");
  if (!isLanguage(firstSegment)) return pathname;
  return rest.length > 0 ? `/${rest.join("/")}` : "/";
};

/**
 * Where the Language Picker points: the page currently being read, in
 * `target`. `counterparts` is the paths `target` actually publishes — see
 * `publishedPaths` in content/pages.ts — so a page with no counterpart lands
 * on that Language's home page instead of on a 404.
 *
 * Pure, and given every input it needs, so the Picker itself is markup and
 * this is the part with a test.
 */
export const languageSwitchTarget = (
  pathname: string,
  target: Language,
  counterparts: readonly string[]
): string => {
  const path = unprefixedPath(pathname);
  return languagePath(target, counterparts.includes(path) ? path : "/");
};

/** The Sentry tunnel, which serves no page. */
const TUNNEL_ROUTE = "/monitoring";

/**
 * The routing half of the rewrite that keeps English URLs unprefixed: given a
 * request path, the path to rewrite it to, or `null` to leave the request
 * alone.
 *
 * The proxy's matcher already keeps assets and internals out of here. This
 * repeats those exclusions rather than trusting it, because a matcher mistake
 * would rewrite every stylesheet and image on the site into a page route, and
 * the matcher is a single regex literal that no test can reach.
 */
export const languageRewriteTarget = (pathname: string): string | null => {
  const [, firstSegment = ""] = pathname.split("/");
  if (isLanguage(firstSegment)) return null;

  if (pathname.startsWith("/_next/") || pathname === TUNNEL_ROUTE) return null;

  // Anything with an extension is a file. That covers everything under
  // public/, and the sitemap and robots file once they are generated.
  if (pathname.split("/").pop()?.includes(".")) return null;

  return pathname === "/"
    ? `/${DEFAULT_LANGUAGE}`
    : `/${DEFAULT_LANGUAGE}${pathname}`;
};
