import { useEffect, useRef, ReactElement, Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PiGithubLogo, PiArrowUpRight, PiX } from "react-icons/pi";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: ReactElement;
}

const modalLink =
  "inline-flex items-center gap-[0.6rem] rounded-[4px] border border-border px-[1.4rem] py-[0.8rem] text-xs text-text transition-[border-color,color] duration-200 hover:border-brand hover:text-brand";

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflowY = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  const root = document.getElementById("root");
  if (!root) return null;

  const content = (
    <div
      className="fixed inset-0 z-[var(--z-modal)] flex h-dvh cursor-pointer justify-center overflow-y-auto bg-bg-opaque px-[1.2rem] py-[4.8rem] backdrop-blur-md"
      onClick={() => setIsOpen(false)}
    >
      <button
        ref={closeRef}
        type="button"
        aria-label="Close project details"
        onClick={() => setIsOpen(false)}
        className="fixed right-[1.6rem] top-[1.6rem] flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-[4px] border border-border bg-background text-md text-text transition-colors duration-200 hover:border-brand hover:text-brand"
      >
        <PiX aria-hidden />
      </button>

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ y: 48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="h-fit w-full max-w-[720px] cursor-auto overflow-hidden rounded-[1.2rem] bg-background-light shadow-[var(--shadow-lg)]"
      >
        <Image
          height={400}
          width={720}
          className="w-full border-b border-border"
          src={imgSrc}
          alt={`Screenshot of the ${title} project.`}
        />
        <div className="p-[3.2rem] max-md:p-[2.4rem]">
          <h3 id="project-modal-title" className="text-lg font-semibold">
            {title}
          </h3>
          <p className="mb-[2.4rem] mt-[0.6rem] font-mono text-2xs text-brand">
            {tech.join(" · ")}
          </p>

          <div className="flex max-w-[62ch] flex-col gap-[1.2rem] text-xs text-text-muted">
            {modalContent}
          </div>

          <div className="mt-[3.2rem] flex flex-wrap items-center gap-[1.2rem]">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={code}
              className={modalLink}
            >
              <PiGithubLogo aria-hidden /> Source code
            </Link>
            {projectLink !== "" && (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={projectLink}
                className={modalLink}
              >
                <PiArrowUpRight aria-hidden /> Live project
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );

  return ReactDOM.createPortal(content, root);
};
