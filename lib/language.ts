/**
 * The Languages the site is published in. Czech joins the list when its
 * content lands; until then a `/cs` URL is just an unknown path.
 */
export const LANGUAGES = ["en"] as const;

export type Language = (typeof LANGUAGES)[number];

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
