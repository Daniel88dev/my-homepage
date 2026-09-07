import Link from "next/link";
import { ReactNode } from "react";
import { PiArrowLeft } from "react-icons/pi";
import { Footer } from "@/components/nav/Footer";
import { HeaderShell } from "@/components/nav/HeaderShell";
import { HeaderActions } from "@/components/nav/HeaderActions";
import { MyLinks } from "@/components/nav/components/MyLinks";
import type { CaseStudyNavItem } from "@/content/projects/types";
import { languagePath, type Language } from "@/lib/language";
import type { Dictionary } from "@/content/dictionary";
import { ScreenshotLabelsProvider } from "./screenshot-labels";
import { SectionNav } from "./SectionNav";

interface Props {
  lang: Language;
  dict: Dictionary;

  path: string;
  sections: CaseStudyNavItem[];

  hero: ReactNode;
  children: ReactNode;
}

export const CaseStudyLayout = ({
  lang,
  dict,
  path,
  sections,
  hero,
  children,
}: Props) => {
  const home = languagePath(lang, "/");

  return (
    <>
      <a href="#main" className="skip-link">
        {dict.chrome.skipToContent}
      </a>
      <HeaderShell
        left={
          <div className="flex items-center gap-[2.4rem] max-md:gap-[0.8rem]">
            <Link
              href={home}
              aria-label={dict.chrome.homeLink}
              className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[4px] bg-background text-md font-bold leading-none tracking-[-0.04em] transition-colors duration-200 hover:bg-background-light"
            >
              DH<span className="text-brand">.</span>
            </Link>
            <Link
              href={`${home}#projects`}
              aria-label={dict.caseStudy.backToAllProjects}
              className="group inline-flex items-center gap-[0.8rem] rounded-[4px] font-mono text-2xs uppercase tracking-[0.06em] text-text-muted transition-colors duration-200 hover:text-text"
            >
              <PiArrowLeft
                aria-hidden
                className="transition-transform duration-200 group-hover:-translate-x-[2px]"
              />

              <span className="max-md:hidden">
                {dict.caseStudy.allProjects}
              </span>
            </Link>
          </div>
        }
        right={
          <div className="flex items-center gap-[2.4rem] max-md:gap-[1.6rem]">

            <div className="max-md:hidden">
              <MyLinks />
            </div>
            <HeaderActions lang={lang} path={path} dict={dict} />
          </div>
        }
      />

      <ScreenshotLabelsProvider
        labels={{
          enlargeScreenshot: dict.caseStudy.enlargeScreenshot,
          closeEnlargedScreenshot: dict.caseStudy.closeEnlargedScreenshot,
        }}
      >
        <main id="main" className="relative z-[var(--z-base)]">
          {hero}
          <div className="mx-auto grid max-w-[1150px] gap-x-[3.2rem] px-[9.6rem] max-md:px-[2.4rem] md:grid-cols-[13rem_minmax(0,1fr)] lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-x-[6.4rem]">
            <div className="relative max-md:hidden">
              <div className="sticky top-[calc(45px_+_3.6rem_+_6.4rem)] pt-[6.4rem]">
                <SectionNav
                  sections={sections}
                  label={dict.caseStudy.onThisPage}
                />
              </div>
            </div>
            <div className="min-w-0">{children}</div>
          </div>
        </main>
      </ScreenshotLabelsProvider>
      <Footer dict={dict.footer} />
    </>
  );
};
