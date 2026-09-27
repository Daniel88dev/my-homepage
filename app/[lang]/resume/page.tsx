import type { Metadata } from "next";
import { languagePath, toLanguage } from "@/lib/language";
import { pageAlternates } from "@/content/pages";
import { getResume, RESUME_PATH } from "@/content/resume";
import { ResumePage } from "@/components/resume/ResumePage";

interface Props {
  params: Promise<{ lang: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { lang } = await params;
  const language = toLanguage(lang);
  const { title, description } = getResume(language).copy.meta;

  return {
    title,
    description,
    alternates: {
      canonical: languagePath(language, RESUME_PATH),
      languages: pageAlternates(RESUME_PATH),
    },
    openGraph: {
      type: "profile",
      siteName: "Daniel Hrynusiw",
      url: languagePath(language, RESUME_PATH),
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

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <ResumePage lang={toLanguage(lang)} />;
}
