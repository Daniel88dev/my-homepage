"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  /** The section anchors' labels, keyed by the invariant section id. */
  labels: {
    about: string;
    projects: string;
    experience: string;
    contact: string;
  };
  /** Accessible name of the sidebar itself. */
  navLabel: string;
  /** Accessible name of the monogram, which scrolls back to the top. */
  backToTop: string;
}

const linkBase =
  "flex h-[100px] w-full shrink-0 items-center justify-center border-r border-transparent font-mono text-2xs uppercase text-text-muted transition-[color,border-color,background-color] duration-200 [writing-mode:vertical-lr] hover:border-brand hover:bg-background hover:text-text focus-visible:outline-offset-[-4px]";
const linkSelected = "border-brand bg-background text-text";

export const SideBar = ({ labels, navLabel, backToTop }: Props) => {
  // Section ids are invariant; only the labels change with the Language.
  const links = [
    { id: "about", label: labels.about },
    { id: "projects", label: labels.projects },
    { id: "experience", label: labels.experience },
    { id: "contact", label: labels.contact },
  ];
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".section-wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelected(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      aria-label={navLabel}
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky left-0 top-0 z-20 flex h-dvh flex-col items-center overflow-y-auto border-r border-border bg-background-dark [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <a
        href="#main"
        aria-label={backToTop}
        className="my-[1.8rem] flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[4px] bg-background text-md font-bold leading-none tracking-[-0.04em] transition-colors duration-200 hover:bg-background-light"
      >
        DH<span className="text-brand">.</span>
      </a>
      {links.map((link, i) => (
        <motion.a
          key={link.id}
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
          href={`#${link.id}`}
          aria-current={selected === link.id ? "location" : undefined}
          onClick={() => setSelected(link.id)}
          className={`${linkBase} ${selected === link.id ? linkSelected : ""}`}
        >
          {link.label}
        </motion.a>
      ))}
    </motion.nav>
  );
};
