import type { IconType } from "react-icons";
import {
  PiBrowsers,
  PiCloud,
  PiFactory,
  PiHardDrives,
  PiTranslate,
} from "react-icons/pi";
import type { Dictionary } from "@/content/dictionary";
import type { Resume } from "@/content/resume";
import { SPOKEN_LANGUAGE_IDS, type SkillGroupId } from "@/content/resume/types";
import { ResumeHeading } from "./ResumeHeading";
import { Rise } from "./Rise";

interface Props {
  resume: Resume;
  labels: Dictionary["resume"];
}

const cell =
  "flex h-full flex-col rounded-[4px] border border-border p-[2.4rem] transition-[border-color,transform] duration-200 hover:-translate-y-[2px] hover:border-[rgb(235_241_238/0.22)] print:p-[1.6rem]";

const cellsById: Record<
  SkillGroupId,
  { Icon: IconType; span: string; surface: string }
> = {
  backend: {
    Icon: PiHardDrives,
    span: "md:col-span-4 print:col-span-4",
    surface:
      "bg-brand-soft bg-[radial-gradient(color-mix(in_srgb,var(--brand)_28%,transparent)_1px,transparent_1px)] bg-[length:14px_14px]",
  },
  frontend: {
    Icon: PiBrowsers,
    span: "md:col-span-2 print:col-span-2",
    surface: "bg-background-light",
  },
  cloud: {
    Icon: PiCloud,
    span: "md:col-span-2 print:col-span-2",
    surface:
      "bg-[linear-gradient(160deg,var(--background-light),var(--background-dark))]",
  },
  engineering: {
    Icon: PiFactory,
    span: "md:col-span-2 print:col-span-2",
    surface: "bg-background",
  },
};

const CellHeading = ({ Icon, title }: { Icon: IconType; title: string }) => (
  <h3 className="mb-[1.6rem] flex items-center gap-[1rem] text-xs font-semibold">
    <Icon size="2rem" className="text-brand" aria-hidden />
    <span>{title}</span>
  </h3>
);

export const ResumeSkills = ({ resume, labels }: Props) => {
  const { facts, copy } = resume;

  return (
    <section
      aria-labelledby="resume-skills"
      className="mx-auto max-w-[1150px] px-[9.6rem] pb-[8.8rem] max-md:px-[2.4rem] max-md:pb-[6.4rem] print:px-0 print:pb-[2.4rem]"
    >
      <ResumeHeading id="resume-skills" title={labels.skills} />
      <div className="mt-[4rem] grid gap-[1.6rem] max-md:mt-[3.2rem] md:grid-cols-6 print:mt-[2rem] print:grid-cols-6 print:gap-[1.2rem]">
        {facts.skillGroups.map((group, i) => {
          const { Icon, span, surface } = cellsById[group.id];
          return (
            <Rise key={group.id} delay={i * 0.08} className={span}>
              <div className={`${cell} ${surface}`}>
                <CellHeading Icon={Icon} title={copy.skillGroups[group.id]} />
                <ul className="flex flex-wrap gap-[0.8rem]">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Rise>
          );
        })}
        <Rise delay={0.32} className="md:col-span-2 print:col-span-2">
          <div className={`${cell} bg-brand-soft`}>
            <CellHeading Icon={PiTranslate} title={labels.spokenLanguages} />
            <ul className="flex flex-col gap-[1.2rem]">
              {SPOKEN_LANGUAGE_IDS.map((id) => (
                <li
                  key={id}
                  className="flex items-baseline justify-between gap-[1.6rem]"
                >
                  <span className="text-sm font-medium">
                    {copy.spokenLanguages[id].name}
                  </span>
                  <span className="font-mono text-2xs text-text-muted">
                    {copy.spokenLanguages[id].level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Rise>
      </div>
    </section>
  );
};
