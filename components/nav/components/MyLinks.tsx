import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

const linkClasses =
  "relative z-20 opacity-50 hover:text-brand hover:opacity-100";

export const MyLinks = () => {
  return (
    <div className="flex gap-[1.6rem] pt-[10px]">
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://www.linkedin.com/in/daniel-hrynusiw"
          target="_blank"
          rel="nofollow"
          className={linkClasses}
        >
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://github.com/Daniel88dev"
          target="_blank"
          rel="nofollow"
          className={linkClasses}
        >
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="https://www.facebook.com/danielhrynusiw/"
          target="_blank"
          rel="nofollow"
          className={linkClasses}
        >
          <AiFillFacebook size="2.4rem" />
        </Link>
      </motion.span>
    </div>
  );
};
