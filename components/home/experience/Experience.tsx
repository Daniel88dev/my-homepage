import { SectionHeader } from "@/components/utils/SectionHeader";
import type { Dictionary } from "@/content/dictionary";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = ({ dict }: { dict: Dictionary["experience"] }) => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={dict.title} index="03" dir="l" />
      <ol className="list-none">
        {roles.map(({ key, tech }) => (
          <ExperienceItem key={key} {...dict.roles[key]} tech={tech} />
        ))}
      </ol>
    </section>
  );
};

/**
 * The invariant half of the timeline: which roles it lists, in which order,
 * and the technologies each one used. The prose — title, position, dates and
 * description — is in the Dictionary, keyed by the same `key`.
 */
const roles: { key: keyof Dictionary["experience"]["roles"]; tech: string[] }[] = [
  {
    key: "figure",
    tech: [
      "Javascript",
      "Typescript",
      "Node.js",
      "Express",
      "Postgres",
      "Docker",
      "AWS",
      "GIT",
      "Github",
    ],
  },
  {
    key: "hmmcManufacturing",
    tech: [
      "Office 365",
      "AutoCAD",
      "Catia",
      "MS Access",
      "VBA + Excel",
      "Jira",
      "HVDT",
    ],
  },
  {
    key: "hmmcProcess",
    tech: ["Office", "AutoCAD", "MS Access", "VBA + Excel"],
  },
  {
    key: "pegatron",
    tech: ["AutoCAD", "Office"],
  },
];
