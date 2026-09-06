import Link from "next/link";
import { ReactNode } from "react";
import { PiArrowLeft } from "react-icons/pi";
import { Footer } from "@/components/nav/Footer";
import { HeaderShell } from "@/components/nav/HeaderShell";
import { MyLinks } from "@/components/nav/components/MyLinks";
import { OutlineButton } from "@/components/buttons/OutlineButton";
import type { CaseStudyNavItem } from "@/content/projects/types";
import { SectionNav } from "./SectionNav";

interface Props {
  sections: CaseStudyNavItem[];
  /** Full-width hero rendered above the two-column body. */
  hero: ReactNode;
  children: ReactNode;
}

/**
 * Page chrome for a Case Study: the shared header carrying the way back to the
 * homepage, a section list from the medium breakpoint up, and the shared
 * footer. The homepage sidebar is deliberately absent; its anchors only exist
 * on the homepage.
 */
export const CaseStudyLayout = ({ sections, hero, children }: Props) => {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <HeaderShell
        left={
          <div className="flex items-center gap-[2.4rem] max-md:gap-[0.8rem]">
            <Link
              href="/"
              aria-label="Daniel Hrynusiw, back to the homepage"
              className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[4px] bg-background text-md font-bold leading-none tracking-[-0.04em] transition-colors duration-200 hover:bg-background-light"
            >
              DH<span className="text-brand">.</span>
            </Link>
            <Link
              href="/#projects"
              aria-label="Back to all projects"
              className="group inline-flex items-center gap-[0.8rem] rounded-[4px] font-mono text-2xs uppercase tracking-[0.06em] text-text-muted transition-colors duration-200 hover:text-text"
            >
              <PiArrowLeft
                aria-hidden
                className="transition-transform duration-200 group-hover:-translate-x-[2px]"
              />
              {/* The label is the first thing to go on a phone: the header
                  carries the same social links and Resume as the homepage. */}
              <span className="max-md:hidden">All projects</span>
            </Link>
          </div>
        }
        right={
          <div className="flex items-center gap-[2.4rem] max-md:gap-[1.6rem]">
            <MyLinks />
            <OutlineButton href="/Resume_DanielHrynusiw.pdf" target="_blank" rel="noopener">
              Resume
            </OutlineButton>
          </div>
        }
      />

      <main id="main" className="relative z-[var(--z-base)]">
        {hero}
        <div className="mx-auto grid max-w-[1150px] gap-x-[3.2rem] px-[9.6rem] max-md:px-[2.4rem] md:grid-cols-[13rem_minmax(0,1fr)] lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-x-[6.4rem]">
          <div className="relative max-md:hidden">
            <div className="sticky top-[calc(45px_+_3.6rem_+_6.4rem)] pt-[6.4rem]">
              <SectionNav sections={sections} />
            </div>
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};
