import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { languageRewriteTarget } from "@/lib/language";

/**
 * Keeps English URLs unprefixed by rewriting them into the Language segment,
 * rather than redirecting to a prefixed default as the framework documents.
 * See docs/adr/0001-unprefixed-english-urls.md.
 */
function handleRequest(request: NextRequest) {
  const rewritten = languageRewriteTarget(request.nextUrl.pathname);
  if (rewritten === null) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = rewritten;
  return NextResponse.rewrite(url);
}

/**
 * Wrapped by hand, and it has to be. The Sentry SDK applies this wrapper
 * itself — but only from its webpack config, which looks for `middleware.*`
 * and `proxy.*` alike. Its Turbopack config registers no wrapping loader at
 * all, and Next 16 builds with Turbopack, so nothing wraps this file and an
 * error thrown here reaches Sentry through nothing: the request 500s, Next's
 * own OpenTelemetry span records `error.type`, and the exception is dropped.
 * `onRequestError` in `instrumentation.ts` does not cover it either.
 *
 * Measured on @sentry/nextjs 10.73.0. Delete this wrapper only after checking
 * that the installed version's `config/turbopack/constructTurbopackConfig.js`
 * has gained a wrapping rule — see #40.
 */
export const proxy = Sentry.wrapMiddlewareWithSentry(handleRequest);

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
