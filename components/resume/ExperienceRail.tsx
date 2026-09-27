"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";

export const ExperienceRail = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.7"],
  });

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden
        className="absolute bottom-0 left-[4px] top-[0.9rem] w-px bg-border"
      />
      <motion.div
        aria-hidden
        data-rise
        className="absolute bottom-0 left-[4px] top-[0.9rem] w-px origin-top bg-brand"
        style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
      />
      {children}
    </div>
  );
};
