import type { Metadata } from "next";
import { languagePath, toLanguage } from "@/lib/language";
import { getDictionary } from "@/content/dictionary";
import { Home } from "@/components/home/Home";

// Written out rather than taken from the generated `PageProps` helper, because
// typecheck runs in CI without a build and the generated types are not there.
// `string` rather than `Language` because the framework's own route validator
// rejects a params type narrower than its own; `dynamicParams` is what narrows
// the values that actually reach here.
interface Props {
  params: Promise<{ lang: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { lang } = await params;
  const language = toLanguage(lang);
  const { title, description } = getDictionary(language).meta;

  return {
    title,
    description,
    // English is reachable both unprefixed and at /en, and the unprefixed form
    // is the one that is published; every other Language declares its own
    // prefixed URL. See docs/adr/0001-unprefixed-english-urls.md.
    alternates: { canonical: languagePath(language, "/") },
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
};

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  return <Home lang={toLanguage(lang)} />;
}
