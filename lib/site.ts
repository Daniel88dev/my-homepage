/**
 * Public origin of this site. It is the root layout's metadata base, which is
 * what turns the paths pages write in their metadata into absolute URLs.
 * The fallback is the repository's declared homepage; set NEXT_PUBLIC_SITE_URL
 * in the deployment when the site moves to its own domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-homepage-one.vercel.app";

/**
 * An absolute URL for a path on this site.
 *
 * Pages do not need this: every URL-valued field in their metadata is written
 * as a path and absolutised against the root layout's `metadataBase`. The
 * sitemap is not page metadata — it is generated on its own, with no metadata
 * base in scope — so it is the one place that has to say the origin out loud.
 */
export const absoluteSiteUrl = (path: string): string => {
  const url = new URL(path, SITE_URL).toString();
  // The framework strips the trailing slash when it resolves a canonical, so
  // the home page declares `https://host`. A sitemap that named
  // `https://host/` would be naming a different string for the same page.
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

/**
 * The route the Sentry SDK tunnels browser error reports through, so an ad
 * blocker cannot swallow them. Configured as `tunnelRoute` in next.config.ts,
 * which imports this; the proxy leaves it alone and the robots file tells
 * crawlers to, because it serves no content.
 */
export const TUNNEL_ROUTE = "/monitoring";
