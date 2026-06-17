import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const linkBase =
  "flex h-[100px] w-full shrink-0 items-center justify-center border-r border-transparent text-sm font-extralight opacity-50 transition-all duration-100 [writing-mode:vertical-lr] hover:border-brand hover:bg-background hover:opacity-100";
const linkSelected = "border-brand bg-background opacity-100";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky left-0 top-0 z-20 flex h-screen flex-col items-center overflow-y-scroll bg-background-dark [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <span className="my-[1.8rem] flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[4px] bg-background text-md font-black leading-none">
        DH<span className="text-brand">.</span>
      </span>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href="#about"
        onClick={() => {
          setSelected("about");
        }}
        className={`${linkBase} ${selected === "about" ? linkSelected : ""}`}
      >
        About
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#projects"
        onClick={() => setSelected("projects")}
        className={`${linkBase} ${selected === "projects" ? linkSelected : ""}`}
      >
        Projects
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href="#experience"
        onClick={() => setSelected("experience")}
        className={`${linkBase} ${
          selected === "experience" ? linkSelected : ""
        }`}
      >
        Exp.
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="#contact"
        onClick={() => setSelected("contact")}
        className={`${linkBase} ${selected === "contact" ? linkSelected : ""}`}
      >
        Contact
      </motion.a>
    </motion.nav>
  );
};
