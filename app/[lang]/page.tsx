import type { Metadata } from "next";
import { languagePath, toLanguage } from "@/lib/language";
import { pageAlternates } from "@/content/pages";
import { getDictionary } from "@/content/dictionary";
import { Home } from "@/components/home/Home";

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

    alternates: {
      canonical: languagePath(language, "/"),
      languages: pageAlternates("/"),
    },
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
