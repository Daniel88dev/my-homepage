import type { Metadata } from "next";
import { toLanguage } from "@/lib/language";
import { Home } from "@/components/home/Home";

// Written out rather than taken from the generated `PageProps` helper, because
// typecheck runs in CI without a build and the generated types are not there.
// `string` rather than `Language` because the framework's own route validator
// rejects a params type narrower than its own; `dynamicParams` is what narrows
// the values that actually reach here.
interface Props {
  params: Promise<{ lang: string }>;
}

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

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  return <Home lang={toLanguage(lang)} />;
}
