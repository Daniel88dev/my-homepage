"use client";

import { motion, useReducedMotion } from "framer-motion";

const stack = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const line = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const HeroTitle = ({ name }: { name: string }) => {
  const reduceMotion = useReducedMotion();
  const words = name.split(" ");

  return (
    <motion.h1
      id="resume-title"
      className="text-2xl font-bold max-md:text-xl print:text-lg"
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      variants={stack}
    >
      {words.map((word, i) => (
        <span
          key={word}
          className="-mb-[0.14em] block overflow-hidden pb-[0.14em]"
        >
          <motion.span data-rise className="block" variants={line}>
            {word}
            {i === words.length - 1 && <span className="text-brand">.</span>}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
};
