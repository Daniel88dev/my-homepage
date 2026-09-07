import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { languageRewriteTarget } from "@/lib/language";

function handleRequest(request: NextRequest) {
  const rewritten = languageRewriteTarget(request.nextUrl.pathname);
  if (rewritten === null) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = rewritten;
  return NextResponse.rewrite(url);
}

export const proxy = Sentry.wrapMiddlewareWithSentry(handleRequest);

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|monitoring|sitemap\\.xml|robots\\.txt|.*\\.).*)",
  ],
};
