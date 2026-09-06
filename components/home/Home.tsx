import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import { Heading } from "../nav/Heading";
import { Footer } from "../nav/Footer";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";

export const Home = () => {
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
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};
