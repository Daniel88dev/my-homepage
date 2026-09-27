import Link from "next/link";
import type { ReactNode } from "react";
import { PiArrowLeft } from "react-icons/pi";
import { Footer } from "@/components/nav/Footer";
import { HeaderActions } from "@/components/nav/HeaderActions";
import { HeaderShell } from "@/components/nav/HeaderShell";
import { MyLinks } from "@/components/nav/components/MyLinks";
import type { Dictionary } from "@/content/dictionary";
import { languagePath, type Language } from "@/lib/language";

interface Props {
  lang: Language;
  dict: Dictionary;

  path: string;

  back: {
    href: string;
    text: string;
    label: string;
  };
  children: ReactNode;
}

export const BlogLayout = ({ lang, dict, path, back, children }: Props) => (
  <div className="flex min-h-dvh flex-col">
    <a href="#main" className="skip-link">
      {dict.chrome.skipToContent}
    </a>
    <HeaderShell
      left={
        <div className="flex items-center gap-[2.4rem] max-md:gap-[0.8rem]">
          <Link
            href={languagePath(lang, "/")}
            aria-label={dict.chrome.homeLink}
            className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[4px] bg-background text-md font-bold leading-none tracking-[-0.04em] transition-colors duration-200 hover:bg-background-light"
          >
            DH<span className="text-brand">.</span>
          </Link>
          <Link
            href={back.href}
            aria-label={back.label}
            className="group inline-flex items-center gap-[0.8rem] rounded-[4px] font-mono text-2xs uppercase tracking-[0.06em] text-text-muted transition-colors duration-200 hover:text-text"
          >
            <PiArrowLeft
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-x-[2px]"
            />
            <span className="max-md:hidden">{back.text}</span>
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
    <main id="main" className="relative z-[var(--z-base)] flex-1">
      <div className="mx-auto max-w-[1150px] px-[9.6rem] pb-[9.6rem] pt-[8rem] max-md:px-[2.4rem] max-md:pb-[6.4rem] max-md:pt-[4.8rem]">
        {children}
      </div>
    </main>
    <Footer dict={dict.footer} />
  </div>
);
