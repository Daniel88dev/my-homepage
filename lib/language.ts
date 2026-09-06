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
 * Paths still served by the Pages Router. They have no App Router route to be
 * rewritten into, so rewriting them would 404 a live page. Delete this list,
 * and the branch that reads it, when the Case Study moves routers.
 */
const PAGES_ROUTER_PREFIXES = ["/projects"];

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

  if (
    PAGES_ROUTER_PREFIXES.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
    )
  ) {
    return null;
  }

  if (pathname.startsWith("/_next/") || pathname === TUNNEL_ROUTE) return null;

  // Anything with an extension is a file. That covers everything under
  // public/, and the sitemap and robots file once they are generated.
  if (pathname.split("/").pop()?.includes(".")) return null;

  return pathname === "/"
    ? `/${DEFAULT_LANGUAGE}`
    : `/${DEFAULT_LANGUAGE}${pathname}`;
};
