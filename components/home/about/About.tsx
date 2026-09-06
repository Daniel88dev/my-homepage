import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Stats } from "./Stats";
import { PiArrowRight } from "react-icons/pi";

const paragraph = "mb-[2.4rem] max-w-[62ch] text-sm text-text-muted";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" index="01" dir="l" />
      <div className="grid grid-cols-[minmax(0,1fr)_320px] gap-[6.4rem] max-[900px]:grid-cols-[minmax(0,1fr)] max-[900px]:gap-[4rem]">
        <div>
          <Reveal>
            <p
              className={`${paragraph} text-text first-letter:float-left first-letter:mr-[1rem] first-letter:mt-[0.6rem] first-letter:rounded-[0.4rem] first-letter:bg-background-light first-letter:px-[1.2rem] first-letter:py-[0.6rem] first-letter:font-mono first-letter:text-lg first-letter:font-semibold first-letter:text-brand`}
            >
              If you haven&apos;t figured it out yet, I specialize in full
              stack web development. Both frontend and backend are within my
              expertise. My primary focus is React with Next.js, but I started
              with Node.js and Express on the backend. Learning new frameworks
              and tools comes naturally to me, much like speaking fluent English
              alongside my native Czech.
            </p>
          </Reveal>
          <Reveal>
            <p className={paragraph}>
              For twelve years I worked at Hyundai Motor Manufacturing Czech,
              where web development was never part of the job description. I
              started coding as a hobby in my free time, and it grew into a
              passion. The internal tools I built there improved workflows for
              real teams, and that is what convinced me to make it my
              profession.
            </p>
          </Reveal>
          <Reveal>
            <p className={paragraph}>
              Outside of work, I love hiking and occasionally enjoy playing
              board games with friends.
            </p>
          </Reveal>
          <Reveal>
            <p className={paragraph}>
              I&apos;m open to opportunities where I can merge my passion for
              coding with impactful projects. I&apos;m also available for
              freelance web development, so if you have a project in mind,
              let&apos;s talk.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-[1.6rem]">
              <div className="flex items-center gap-[0.8rem] font-mono text-2xs uppercase text-brand">
                <span>Find me</span>
                <PiArrowRight aria-hidden />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
