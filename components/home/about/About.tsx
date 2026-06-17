import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-[1fr_300px] gap-[2.4rem] max-[900px]:grid-cols-[1fr]">
        <div>
          <Reveal>
            <p className="mb-[2.4rem] font-extralight first-letter:float-left first-letter:mr-[0.6rem] first-letter:rounded-[0.4rem] first-letter:bg-background-light first-letter:p-[1rem] first-letter:text-md first-letter:font-bold">
              If you haven’t figured it out yet—I specialize in Full Stack Web
              Development. Both frontend and backend development are within my
              expertise. My primary focus is on React with Next.js, but I
              originally started with Node.js and Express for backend
              development. Learning new frameworks and tools comes naturally to
              me, just like speaking fluent English alongside my native Czech.
            </p>
          </Reveal>
          <Reveal>
            <p className="mb-[2.4rem] font-extralight">
              Currently, I work at Hyundai Motor Manufacturing Czech s.r.o.,
              where web development wasn’t originally my main focus. I started
              coding as a hobby in my free time, but over time, it became a
              passion. Now, I’m increasingly involved in web development, as I
              find it both fascinating and a valuable skill to improve workflows
              and efficiency.
            </p>
          </Reveal>
          <Reveal>
            <p className="mb-[2.4rem] font-extralight">
              Outside of work, I love hiking and occasionally enjoy playing
              board games with friends.
            </p>
          </Reveal>
          <Reveal>
            <p className="mb-[2.4rem] font-extralight">
              I’m open to new opportunities where I can merge my passion for
              coding with impactful projects. I’m also available for freelance
              web development—so if you have a project in mind, let’s connect!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-[1.6rem]">
              <div className="flex items-center gap-[0.8rem] text-sm text-brand">
                <span>My links</span>
                <AiOutlineArrowRight />
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
