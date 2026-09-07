"use client";

import { Reveal } from "@/components/utils/Reveal";
import type { RelatedRepository } from "@/content/projects/types";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactElement } from "react";
import {
  PiGithubLogo,
  PiArrowUpRight,
  PiCaretRight,
  PiBookOpenText,
  PiArrowRight,
} from "react-icons/pi";
import { ProjectDialog } from "./ProjectDialog";

export interface ProjectLabels {
  openDetails: string;
  screenshotAlt: string;
  sourceOnGitHub: string;
  openLive: string;
  readMore: string;
  readCaseStudy: string;
  closeDialog: string;
  sourceCode: string;
  liveProject: string;
  repositories: string;
}

interface Props {
  labels: ProjectLabels;
  title: string;
  description: string;
  imgSrc: string;
  code: string;
  liveUrl: string;
  tech: string[];

  dialogContent: ReactElement;
  relatedRepositories?: RelatedRepository[];

  caseStudyHref?: string;
}

const iconLink =
  "text-text-muted transition-[color,transform] duration-200 hover:-translate-y-px hover:text-text";

export const Project = ({
  labels,
  dialogContent,
  liveUrl,
  description,
  imgSrc,
  title,
  code,
  tech,
  relatedRepositories,
  caseStudyHref,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const hasLiveLink = liveUrl !== "" && liveUrl !== code;

  return (
    <>
      <motion.article
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 64 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          aria-label={labels.openDetails}
          className="group relative block aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[0.8rem] border border-border bg-background-light bg-[radial-gradient(120%_80%_at_50%_100%,rgb(46_229_157/0.12),transparent_60%)] transition-[border-color,box-shadow] duration-300 hover:border-[rgb(46_229_157/0.35)] hover:shadow-[0_24px_40px_-20px_rgb(3_8_6/0.9)]"
        >
          <Image
            width={400}
            height={300}
            src={imgSrc}
            alt={labels.screenshotAlt}
            sizes="(max-width: 768px) 90vw, 480px"
            className="absolute bottom-0 left-1/2 rounded-t-[0.4rem] shadow-[0_-8px_24px_-12px_rgb(3_8_6/0.8)] transition-[width,rotate] duration-300 ease-out [translate:-50%_18%]"
            style={{
              width: hovered ? "90%" : "85%",
              height: "auto",
              rotate: hovered ? "1.5deg" : "0deg",
            }}
          />
        </button>
        <div className="my-[1.6rem]">
          <Reveal width="100%">
            <div className="flex items-center gap-[1.2rem]">
              <h3 className="max-w-[calc(100%_-_120px)] shrink-0 text-md font-semibold">
                {title}
              </h3>
              <div className="h-px w-full bg-border" />

              <Link
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={labels.sourceOnGitHub}
                className={iconLink}
              >
                <PiGithubLogo size="2.4rem" aria-hidden />
              </Link>

              {hasLiveLink && (
                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={labels.openLive}
                  className={iconLink}
                >
                  <PiArrowUpRight size="2.4rem" aria-hidden />
                </Link>
              )}
            </div>
          </Reveal>
          <Reveal>
            <p className="my-[0.8rem] font-mono text-2xs text-brand">
              {tech.join(" · ")}
            </p>
          </Reveal>
          <Reveal>
            <p className="text-sm text-text-muted">
              {description}{" "}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex cursor-pointer items-center gap-[0.2rem] align-baseline text-xs font-medium text-text transition-colors duration-200 hover:text-brand"
              >
                {labels.readMore}
                <PiCaretRight aria-hidden />
              </button>
            </p>
          </Reveal>
          {caseStudyHref && (
            <Reveal>
              <Link
                href={caseStudyHref}
                className="group mt-[1.6rem] inline-flex items-center gap-[0.8rem] rounded-[4px] border border-brand bg-brand-soft px-[1.6rem] py-[0.9rem] text-xs font-medium text-brand transition-[background-color,color,transform] duration-200 hover:-translate-y-px hover:bg-brand hover:text-background-dark active:translate-y-0 active:scale-[0.98]"
              >
                <PiBookOpenText size="1.8rem" aria-hidden />
                {labels.readCaseStudy}
                <PiArrowRight
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-[2px]"
                />
              </Link>
            </Reveal>
          )}
        </div>
      </motion.article>
      <ProjectDialog
        labels={labels}
        dialogContent={dialogContent}
        liveUrl={hasLiveLink ? liveUrl : ""}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
        relatedRepositories={relatedRepositories}
        caseStudyHref={caseStudyHref}
      />
    </>
  );
};
