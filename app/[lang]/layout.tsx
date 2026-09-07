import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { LANGUAGES, toLanguage } from "@/lib/language";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export const viewport: Viewport = {
  themeColor: "#0f1311",
};

export const generateStaticParams = () =>
  LANGUAGES.map((lang) => ({ lang }));

export const dynamicParams = false;

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;

  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={toLanguage(lang)}>
      <body>
        <div id="root" className={`${geist.variable} ${geistMono.variable}`}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
