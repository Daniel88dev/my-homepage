"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const Rise = ({ children, delay = 0, className }: Props) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      data-rise
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};
