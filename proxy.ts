import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { languageRewriteTarget } from "@/lib/language";

/**
 * Keeps English URLs unprefixed by rewriting them into the Language segment,
 * rather than redirecting to a prefixed default as the framework documents.
 * See docs/adr/0001-unprefixed-english-urls.md.
 */
export function proxy(request: NextRequest) {
  const rewritten = languageRewriteTarget(request.nextUrl.pathname);
  if (rewritten === null) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = rewritten;
  return NextResponse.rewrite(url);
}

export const config = {
  /*
   * Without a matcher this runs on every request, including static files,
   * optimized images and everything under public/. Excluded here:
   * - _next/static, _next/image  framework internals
   * - monitoring                 the Sentry tunnel, which serves no page
   * - sitemap.xml, robots.txt    named ahead of the routes that generate
   *                              them; the dot rule below already covers both
   * - anything with a dot        every file under public/
   */
  matcher: [
    "/((?!_next/static|_next/image|monitoring|sitemap\\.xml|robots\\.txt|.*\\.).*)",
  ],
};
