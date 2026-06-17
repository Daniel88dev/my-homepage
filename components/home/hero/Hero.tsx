import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import { ReactTyped } from "react-typed";
// TODO count years of experience
export const Hero = () => {
  return (
    <section className="section-wrapper mb-[9.6rem] max-md:mb-[4.8rem]">
      <div className="relative z-10 my-[4.8rem] w-fit">
        <Reveal>
          <h1 className="text-2xl font-black leading-[1.1] max-md:text-xl">
            Hey, I&apos;m Daniel<span className="text-brand">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="mb-[1rem] mt-[1.6rem] text-lg font-extralight leading-[1.1] max-md:text-sm [&_span]:font-bold [&_span]:text-brand">
            I&apos;m a{" "}
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Full Stack Engineer",
                "Manufacturing Engineer",
                "Project Manager",
              ]}
              typeSpeed={50}
              loop
              backSpeed={20}
              cursorChar="_"
              showCursor={true}
            />
          </h2>
        </Reveal>
        <Reveal>
          <p className="my-[2.4rem] max-w-[700px] font-extralight">
            I’ve been passionate about web development since September 2021,
            continuously learning and honing my skills in frontend, backend, and
            full-stack development through various courses and hands-on
            projects.
            <br />
            Currently, I work as a Manufacturing Engineer at Hyundai Motor
            Manufacturing s.r.o., where I am responsible for equipment
            preparation for new vehicle models, solving manufacturing
            challenges, and implementing new models into production.
            <br />
            What started as a hobby soon turned into a valuable asset—outside of
            my main role, I have developed several web applications that have
            been successfully implemented within the company, receiving positive
            feedback for improving efficiency and workflow.
            <br />
            Beyond development, I also have experience in project management,
            leading initiatives aimed at optimizing processes, enhancing
            productivity, and achieving long-term cost savings in manufacturing.
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
