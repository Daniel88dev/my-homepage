import type { MetadataRoute } from "next";
import { TUNNEL_ROUTE, absoluteSiteUrl } from "@/lib/site";

/**
 * Everything on the site is meant to be found, so the only exclusion is the
 * error-reporting tunnel, which serves no content to a crawler. `Disallow` is
 * a prefix match, so the one line covers whatever the Sentry SDK hangs beneath
 * that route.
 *
 * The sitemap is named absolutely, which the robots format requires.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: TUNNEL_ROUTE,
    },
    sitemap: absoluteSiteUrl("/sitemap.xml"),
  };
}
