import Link from "next/link";
import type { ReactNode } from "react";
import { PiArrowLeft, PiDownloadSimple } from "react-icons/pi";
import { OutlineButton } from "@/components/buttons/OutlineButton";
import { Footer } from "@/components/nav/Footer";
import { HeaderActions } from "@/components/nav/HeaderActions";
import { HeaderShell } from "@/components/nav/HeaderShell";
import { MyLinks } from "@/components/nav/components/MyLinks";
import type { Dictionary } from "@/content/dictionary";
import { RESUME_PATH } from "@/content/resume";
import { languagePath, type Language } from "@/lib/language";

interface Props {
  lang: Language;
  dict: Dictionary;
  pdfHref: string;
  children: ReactNode;
}

export const ResumeLayout = ({ lang, dict, pdfHref, children }: Props) => {
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
              href={home}
              aria-label={dict.resume.backToHome}
              className="group inline-flex items-center gap-[0.8rem] rounded-[4px] font-mono text-2xs uppercase tracking-[0.06em] text-text-muted transition-colors duration-200 hover:text-text"
            >
              <PiArrowLeft
                aria-hidden
                className="transition-transform duration-200 group-hover:-translate-x-[2px]"
              />
              <span className="max-md:hidden">{dict.resume.home}</span>
            </Link>
          </div>
        }
        right={
          <div className="flex items-center gap-[2.4rem] max-md:gap-[1.6rem]">
            <div className="max-md:hidden">
              <MyLinks />
            </div>
            <HeaderActions
              lang={lang}
              path={RESUME_PATH}
              dict={dict}
              action={
                <OutlineButton href={pdfHref} target="_blank" rel="noopener">
                  <span className="inline-flex items-center gap-[0.8rem]">
                    {dict.resume.download}
                    <PiDownloadSimple aria-hidden />
                  </span>
                </OutlineButton>
              }
            />
          </div>
        }
      />
      <main id="main" className="resume-page relative z-[var(--z-base)]">
        {children}
      </main>
      <Footer dict={dict.footer} />
    </>
  );
};
