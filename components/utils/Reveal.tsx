"use client";

import { ReactElement } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Props {
  children: ReactElement;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div style={{ width }}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      style={{ position: "relative", width, overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 48 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        variants={{
          hidden: { x: "0%" },
          visible: { x: "101%" },
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--brand)",
          zIndex: 20,
          willChange: "transform",
        }}
      />
    </motion.div>
  );
};
