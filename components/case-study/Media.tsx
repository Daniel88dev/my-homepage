"use client";

import Image from "next/image";
import { ReactNode, useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PiArrowsOutSimple } from "react-icons/pi";
import type { CaseStudyImage } from "@/content/projects/types";
import { Lightbox, SHOT_QUALITY } from "./Lightbox";
import { useScreenshotLabels } from "./screenshot-labels";

const frame =
  "overflow-hidden rounded-[0.8rem] border border-border bg-background-light shadow-[0_32px_64px_-32px_rgb(3_8_6/0.9),0_0_0_1px_rgb(3_8_6/0.4)]";

interface ShotProps {
  shot: CaseStudyImage;
  caption?: ReactNode;

  preload?: boolean;
  sizes: string;
  className?: string;
}

export const Zoomable = ({ shot, caption, preload, sizes, className }: ShotProps) => {
  const labels = useScreenshotLabels();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${labels.enlargeScreenshot}: ${shot.alt}`}
        className={`group relative block w-full cursor-zoom-in text-left transition-[border-color,transform] duration-300 hover:border-[rgb(46_229_157/0.35)] ${frame} ${className ?? ""}`}
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          preload={preload}
          sizes={sizes}
          quality={SHOT_QUALITY}
          className="block h-auto w-full"
        />
        <span
          aria-hidden
          className="absolute right-[1.2rem] top-[1.2rem] flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-[4px] border border-border bg-bg-opaque text-text opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <PiArrowsOutSimple size="1.6rem" />
        </span>
      </button>
      {open && <Lightbox shot={shot} caption={caption} onClose={close} />}
    </>
  );
};

type FigureProps = Omit<ShotProps, "sizes"> & { sizes?: string };

export const Figure = ({ shot, caption, preload, sizes, className }: FigureProps) => {
  const reduceMotion = useReducedMotion();
  return (
    <motion.figure
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <Zoomable
        shot={shot}
        caption={caption}
        preload={preload}
        sizes={sizes ?? "(max-width: 768px) 100vw, 1150px"}
      />
      {caption && (
        <figcaption className="mt-[1.2rem] max-w-[62ch] font-mono text-2xs text-text-muted">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
};

interface FeatureSplitProps {
  title: string;
  children: ReactNode;
  shot: CaseStudyImage;
  caption?: ReactNode;

  reverse?: boolean;
}

export const FeatureSplit = ({ title, children, shot, caption, reverse }: FeatureSplitProps) => {
  return (
    <div
      className={`grid items-center gap-x-[6.4rem] gap-y-[2.4rem] md:grid-cols-[2fr_3fr] ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <h3 className="text-md font-semibold">{title}</h3>
        <div className="mt-[1.2rem] flex flex-col gap-[1.2rem] text-sm text-text-muted">
          {children}
        </div>
      </div>
      <Figure shot={shot} caption={caption} sizes="(max-width: 768px) 100vw, 690px" />
    </div>
  );
};

interface FeatureTileProps {
  title: string;
  children: ReactNode;
  shot: CaseStudyImage;
}

export const FeatureTile = ({ title, children, shot }: FeatureTileProps) => (
  <div className="flex flex-col gap-[2rem]">
    <Figure shot={shot} sizes="(max-width: 768px) 100vw, 560px" />
    <div>
      <h3 className="text-md font-semibold">{title}</h3>
      <div className="mt-[0.8rem] flex flex-col gap-[1.2rem] text-sm text-text-muted">
        {children}
      </div>
    </div>
  </div>
);
