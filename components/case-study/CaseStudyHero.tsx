"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PiArrowUpRight, PiGithubLogo } from "react-icons/pi";
import { Reveal } from "@/components/utils/Reveal";
import type { CaseStudy, CaseStudyNavItem, Project } from "@/content/projects/types";
import { repositoryName } from "@/content/projects/repository";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Zoomable } from "./Media";

interface Props {
  project: Project;
  caseStudy: CaseStudy;
  /** The hero's own navigation entry, so it anchors like every other section. */
  nav: CaseStudyNavItem;
}

const ctaSecondary =
  "group inline-flex items-center gap-[0.8rem] rounded-[4px] text-sm text-text-muted transition-colors duration-200 hover:text-text";

/**
 * Split hero: the pitch and the way into the product on the left, the hero
 * screenshot on the right. Stacks under 768px.
 */
export const CaseStudyHero = ({ project, caseStudy, nav }: Props) => {
  const reduceMotion = useReducedMotion();
  const repositories = project.relatedRepositories ?? [];

  return (
    <section
      id={nav.id}
      aria-labelledby="case-study-title"
      className="relative scroll-mt-[calc(45px_+_3.6rem)] overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[15%] top-[-10%] z-0 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(closest-side,rgb(46_229_157/0.09),transparent)] blur-2xl"
      />
      <div className="relative z-10 mx-auto grid max-w-[1150px] items-center gap-x-[6.4rem] gap-y-[4rem] px-[9.6rem] pb-[8rem] pt-[8rem] max-md:px-[2.4rem] max-md:pb-[5.6rem] max-md:pt-[4.8rem] md:grid-cols-[5fr_7fr]">
        <div>
          <Reveal>
            <p className="eyebrow mb-[2rem]">Case study</p>
          </Reveal>
          <Reveal>
            <h1 id="case-study-title" className="text-xl font-bold max-md:text-lg">
              {project.title}
              <span className="text-brand">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-[2rem] max-w-[38ch] text-md font-light text-text-muted max-md:text-sm">
              {caseStudy.pitch}
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-[3.2rem] flex flex-wrap items-center gap-[2.4rem]">
              {project.liveUrl !== "" && (
                <StandardButton
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open flexi-day.com
                  <PiArrowUpRight aria-hidden />
                </StandardButton>
              )}
              <Link
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaSecondary}
              >
                <PiGithubLogo size="2rem" aria-hidden />
                Source on GitHub
                <PiArrowUpRight
                  aria-hidden
                  className="transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
                />
              </Link>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32, rotate: 0.6 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="rounded-[0.8rem] shadow-[0_40px_80px_-40px_rgb(3_8_6/0.95)]"
        >
          <Zoomable
            shot={caseStudy.heroImage}
            caption={caseStudy.heroImage.alt}
            preload
            sizes="(max-width: 768px) 100vw, 660px"
          />
        </motion.div>
      </div>

      {repositories.length > 0 && (
        <div className="relative z-10 border-y border-border bg-background-dark/60">
          <ul className="mx-auto grid max-w-[1150px] grid-cols-4 divide-x divide-border px-[9.6rem] max-md:grid-cols-2 max-md:px-[2.4rem] max-md:[&>*:nth-child(n+3)]:border-t max-md:[&>*:nth-child(odd)]:border-l-0 max-md:[&>*:nth-child(3)]:border-l-0">
            {repositories.map((repo) => (
              <li key={repo.url} className="min-w-0">
                <Link
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-[0.4rem] px-[2.4rem] py-[2rem] transition-colors duration-200 hover:bg-background-light/60 max-md:px-[1.6rem]"
                >
                  <span className="font-mono text-2xs uppercase tracking-[0.06em] text-text-muted">
                    {repo.label}
                  </span>
                  <span className="flex items-center gap-[0.6rem] truncate text-xs text-text transition-colors duration-200 group-hover:text-brand">
                    {repositoryName(repo)}
                    <PiArrowUpRight aria-hidden className="shrink-0" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
