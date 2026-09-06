import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import { TypedRoles } from "./TypedRoles";
import { PiArrowDown, PiArrowRight } from "react-icons/pi";
import type { Dictionary } from "@/content/dictionary";

export const Hero = ({ dict }: { dict: Dictionary["hero"] }) => {
  return (
    <section className="section-wrapper min-h-[calc(100dvh_-_45px_-_3.6rem)] mb-[4.8rem] flex items-center max-md:mb-0">
      {/* Ambient light behind the headline. Radial, not a linear AI fade. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[20%] top-[10%] z-0 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(closest-side,rgb(46_229_157/0.09),transparent)] blur-2xl"
      />
      <div className="relative z-10 w-fit py-[4.8rem]">
        <Reveal>
          <p className="eyebrow mb-[2rem]">{dict.eyebrow}</p>
        </Reveal>
        <Reveal>
          <h1 className="text-2xl font-bold max-md:text-xl">
            {dict.greeting}
            <span className="text-brand">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="mb-[1rem] mt-[2rem] text-lg font-light text-text-muted max-md:text-md [&_span]:font-medium [&_span]:text-brand">
            {dict.roleIntro} <TypedRoles roles={dict.roles} />
          </p>
        </Reveal>
        <Reveal>
          <p className="my-[3.2rem] max-w-[58ch] text-sm text-text-muted">
            {dict.intro}
          </p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap items-center gap-[2.4rem]">
            <StandardButton href="#contact">
              {dict.contact}
              <PiArrowRight aria-hidden />
            </StandardButton>
            <a
              href="#projects"
              className="group inline-flex items-center gap-[0.8rem] text-sm text-text-muted transition-colors duration-200 hover:text-text"
            >
              {dict.seeProjects}
              <PiArrowDown
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-y-[2px]"
              />
            </a>
          </div>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
