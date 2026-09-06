"use client";

import { PiLinkedinLogo, PiGithubLogo, PiFacebookLogo } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    href: "https://www.linkedin.com/in/daniel-hrynusiw",
    label: "LinkedIn",
    Icon: PiLinkedinLogo,
  },
  {
    href: "https://github.com/Daniel88dev",
    label: "GitHub",
    Icon: PiGithubLogo,
  },
  {
    href: "https://www.facebook.com/danielhrynusiw/",
    label: "Facebook",
    Icon: PiFacebookLogo,
  },
];

const linkClasses =
  "relative z-20 block text-text-muted transition-[color,transform] duration-200 hover:-translate-y-px hover:text-brand active:translate-y-0";

export const MyLinks = () => {
  return (
    <ul className="flex items-center gap-[1.6rem]">
      {links.map(({ href, label, Icon }, i) => (
        <motion.li
          key={href}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 * i }}
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={linkClasses}
          >
            <Icon size="2.4rem" aria-hidden />
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};
