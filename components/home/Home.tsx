import React from "react";
import type { Language } from "@/lib/language";
import { getDictionary } from "@/content/dictionary";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import { Heading } from "../nav/Heading";
import { Footer } from "../nav/Footer";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";

interface Props {
  /**
   * The Language being rendered. The whole page is written from it: its
   * Dictionary for the interface, and its Project Copy for the Projects.
   */
  lang: Language;
}

export const Home = ({ lang }: Props) => {
  const dict = getDictionary(lang);

  return (
    <>
      <a href="#main" className="skip-link">
        {dict.chrome.skipToContent}
      </a>
      <div className="grid grid-cols-[60px_1fr]">
        <SideBar
          labels={dict.sidebar}
          navLabel={dict.chrome.sections}
          backToTop={dict.chrome.backToTop}
        />
        <div className="min-w-0">
          <Heading lang={lang} dict={dict} />
          <main id="main">
            <Hero dict={dict.hero} />
            <About dict={dict.about} stats={dict.stats} />
            <Projects lang={lang} dict={dict.projects} />
            <Experience dict={dict.experience} />
            <Contact dict={dict.contact} />
          </main>
          <Footer dict={dict.footer} />
        </div>
      </div>
    </>
  );
};
