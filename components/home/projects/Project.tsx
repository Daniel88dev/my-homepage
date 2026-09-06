import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, ReactElement } from "react";
import { PiGithubLogo, PiArrowUpRight, PiCaretRight } from "react-icons/pi";
import { ProjectModal } from "./ProjectModal";

interface Props {
  modalContent: ReactElement;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
}

const iconLink =
  "text-text-muted transition-[color,transform] duration-200 hover:-translate-y-px hover:text-text";

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
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

  const hasLiveLink = projectLink !== "" && projectLink !== code;

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
          aria-label={`Open details for ${title}`}
          className="group relative block aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[0.8rem] border border-border bg-background-light bg-[radial-gradient(120%_80%_at_50%_100%,rgb(46_229_157/0.12),transparent_60%)] transition-[border-color,box-shadow] duration-300 hover:border-[rgb(46_229_157/0.35)] hover:shadow-[0_24px_40px_-20px_rgb(3_8_6/0.9)]"
        >
          <Image
            width={400}
            height={300}
            src={imgSrc}
            alt={`Screenshot of the ${title} project.`}
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
                aria-label={`${title} source code on GitHub`}
                className={iconLink}
              >
                <PiGithubLogo size="2.4rem" aria-hidden />
              </Link>

              {hasLiveLink && (
                <Link
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open the live ${title} project`}
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
                Read more
                <PiCaretRight aria-hidden />
              </button>
            </p>
          </Reveal>
        </div>
      </motion.article>
      <ProjectModal
        modalContent={modalContent}
        projectLink={hasLiveLink ? projectLink : ""}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
