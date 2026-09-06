import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { LANGUAGES } from "@/lib/language";
import { SITE_URL } from "@/lib/site";

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-mono",
  display: "swap",
});

/**
 * Every URL-valued metadata field below this layout is written as a path and
 * resolved against this base, so no page builds an absolute URL itself.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export const viewport: Viewport = {
  themeColor: "#0f1311",
};

export const generateStaticParams = () =>
  LANGUAGES.map((lang) => ({ lang }));

/** Only a published Language is a page; anything else is a 404, not a render. */
export const dynamicParams = false;

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  // Written out rather than taken from the generated `LayoutProps` helper,
  // because typecheck runs in CI without a build and the generated types are
  // not there. `string` rather than `Language` because the framework's own
  // route validator requires the wider type; `dynamicParams` is what narrows
  // the values that actually reach here.
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body>
        <div id="root" className={`${geist.variable} ${geistMono.variable}`}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
