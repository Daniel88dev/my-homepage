import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className={`${geist.variable} ${geistMono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
