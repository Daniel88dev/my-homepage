import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Stats } from "./Stats";
import { PiArrowRight } from "react-icons/pi";
import type { Dictionary } from "@/content/dictionary";

const paragraph = "mb-[2.4rem] max-w-[62ch] text-sm text-text-muted";

interface Props {
  dict: Dictionary["about"];
  stats: Dictionary["stats"];
}

export const About = ({ dict, stats }: Props) => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title={dict.title} index="01" dir="l" />
      <div className="grid grid-cols-[minmax(0,1fr)_320px] gap-[6.4rem] max-[900px]:grid-cols-[minmax(0,1fr)] max-[900px]:gap-[4rem]">
        <div>
          <Reveal>
            <p
              className={`${paragraph} text-text first-letter:float-left first-letter:mr-[1rem] first-letter:mt-[0.6rem] first-letter:rounded-[0.4rem] first-letter:bg-background-light first-letter:px-[1.2rem] first-letter:py-[0.6rem] first-letter:font-mono first-letter:text-lg first-letter:font-semibold first-letter:text-brand`}
            >
              {dict.lead}
            </p>
          </Reveal>
          {dict.paragraphs.map((text) => (
            <Reveal key={text}>
              <p className={paragraph}>{text}</p>
            </Reveal>
          ))}
          <Reveal>
            <div className="flex items-center gap-[1.6rem]">
              <div className="flex items-center gap-[0.8rem] font-mono text-2xs uppercase text-brand">
                <span>{dict.findMe}</span>
                <PiArrowRight aria-hidden />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats dict={stats} />
      </div>
    </section>
  );
};
