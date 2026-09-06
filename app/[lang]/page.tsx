import type { Metadata } from "next";
import { Home } from "@/components/home/Home";

const title = "Daniel Hrynusiw | Web Developer";
const description =
  "Full-stack web developer based in Brno, Czech Republic. Projects, experience, and contact.";

export const metadata: Metadata = {
  title,
  description,
  // English is reachable both unprefixed and at /en, and the unprefixed form is
  // the one that is published. See docs/adr/0001-unprefixed-english-urls.md.
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Daniel Hrynusiw",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  icons: { icon: "/favicon.ico" },
};

export default function HomePage() {
  return <Home />;
}
