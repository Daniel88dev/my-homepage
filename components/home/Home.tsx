import React from "react";
import type { Language } from "@/lib/language";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import { Heading } from "../nav/Heading";
import { Footer } from "../nav/Footer";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";

interface Props {
  /** The Language being rendered, for the sections that carry Project Copy. */
  lang: Language;
}

export const Home = ({ lang }: Props) => {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="grid grid-cols-[60px_1fr]">
        <SideBar />
        <div className="min-w-0">
          <Heading />
          <main id="main">
            <Hero />
            <About />
            <Projects lang={lang} />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};
