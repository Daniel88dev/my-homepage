import type { Metadata } from "next";
import Link from "next/link";
import { languagePath, toLanguage } from "@/lib/language";
import { pageAlternates } from "@/content/pages";
import { getDictionary } from "@/content/dictionary";
import {
  RESUME_PATH,
  RESUME_PDF_PATH,
  getResume,
  resumePdfFilename,
} from "@/content/resume";
import { HeaderShell } from "@/components/nav/HeaderShell";
import { HeaderActions } from "@/components/nav/HeaderActions";
import { Footer } from "@/components/nav/Footer";
import { ResumeDocument } from "@/components/resume/ResumeDocument";

interface Props {
  params: Promise<{ lang: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { lang } = await params;
  const language = toLanguage(lang);
  const resume = getResume(language);
  const { chrome, resume: labels } = getDictionary(language);

  const title = `${resume.name} | ${chrome.resume}`;
  const url = languagePath(language, RESUME_PATH);

  return {
    title,
    description: labels.metaDescription,
    alternates: {
      canonical: url,
      languages: pageAlternates(RESUME_PATH),
    },
    openGraph: {
      type: "profile",
      siteName: "Daniel Hrynusiw",
      url,
      title,
      description: labels.metaDescription,
    },
    twitter: {
      card: "summary",
      title,
      description: labels.metaDescription,
    },
    icons: { icon: "/favicon.ico" },
  };
};

export default async function ResumePage({ params }: Props) {
  const { lang } = await params;
  const language = toLanguage(lang);
  const resume = getResume(language);
  const dict = getDictionary(language);

  return (
    <>
      <a href="#main" className="skip-link">
        {dict.chrome.skipToContent}
      </a>
      <HeaderShell
        left={
          <Link
            href={languagePath(language, "/")}
            aria-label={dict.chrome.homeLink}
            className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[4px] bg-background text-md font-bold leading-none tracking-[-0.04em] transition-colors duration-200 hover:bg-background-light"
          >
            DH<span className="text-brand">.</span>
          </Link>
        }
        right={<HeaderActions lang={language} path={RESUME_PATH} dict={dict} />}
      />
      <main id="main" className="relative z-[var(--z-base)]">
        <ResumeDocument
          lang={language}
          resume={resume}
          labels={dict.resume}
          pdfHref={languagePath(language, RESUME_PDF_PATH)}
          pdfFilename={resumePdfFilename(language)}
        />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
