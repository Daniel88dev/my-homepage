"use client";

import { useEffect, useRef, ReactNode } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PiX } from "react-icons/pi";
import type { CaseStudyImage } from "@/content/projects/types";
import { useScreenshotLabels } from "./screenshot-labels";

/**
 * Screenshots are dense UI text, so they are optimised above the site default
 * of 75. Allowed by `images.qualities` in next.config.ts.
 */
export const SHOT_QUALITY = 90;

interface Props {
  shot: CaseStudyImage;
  caption?: ReactNode;
  onClose: () => void;
}

/**
 * Enlarged view of one screenshot. Same portal, scroll lock, focus and Escape
 * handling as the Project Dialog, so the two feel like one system.
 */
export const Lightbox = ({ shot, caption, onClose }: Props) => {
  const labels = useScreenshotLabels();
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const previousOverflow = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflowY = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const root = document.getElementById("root");
  if (!root) return null;

  const portrait = shot.height > shot.width;

  const content = (
    <div
      className="fixed inset-0 z-[var(--z-modal)] flex h-dvh cursor-zoom-out flex-col items-center justify-center bg-bg-opaque px-[2.4rem] py-[6.4rem] backdrop-blur-md max-md:px-[1.2rem]"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        aria-label={labels.closeEnlargedScreenshot}
        onClick={onClose}
        className="fixed right-[1.6rem] top-[1.6rem] flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-[4px] border border-border bg-background text-md text-text transition-colors duration-200 hover:border-brand hover:text-brand"
      >
        <PiX aria-hidden />
      </button>

      <motion.figure
        role="dialog"
        aria-modal="true"
        aria-label={shot.alt}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full w-full cursor-auto flex-col items-center gap-[1.6rem]"
        style={{ maxWidth: portrait ? "min(92vw, 48rem)" : "min(96vw, 1600px)" }}
      >
        <div className="min-h-0 overflow-hidden rounded-[0.8rem] border border-border bg-background-light shadow-[var(--shadow-lg)]">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes="96vw"
            quality={SHOT_QUALITY}
            className="block h-auto max-h-[calc(100dvh_-_16rem)] w-auto max-w-full object-contain"
          />
        </div>
        {caption && (
          <figcaption className="max-w-[72ch] text-center font-mono text-2xs text-text-muted">
            {caption}
          </figcaption>
        )}
      </motion.figure>
    </div>
  );

  return ReactDOM.createPortal(content, root);
};
