import type { Language } from "@/lib/language";
import type { Dictionary } from "@/content/dictionary";
import type { Resume } from "@/content/resume";
import { formatYearMonth } from "@/content/resume/format";
import { roleDuration } from "@/content/resume/timeline";
import type { Role, RoleCopy, YearMonth } from "@/content/resume/types";
import { ExperienceRail } from "./ExperienceRail";
import { ResumeHeading } from "./ResumeHeading";
import { Rise } from "./Rise";

interface Props {
  lang: Language;
  resume: Resume;
  labels: Dictionary["resume"];
  now: YearMonth;
}

interface EntryProps {
  lang: Language;
  role: Role;
  copy: RoleCopy;
  labels: Dictionary["resume"];
  now: YearMonth;
}

const RoleEntry = ({ lang, role, copy, labels, now }: EntryProps) => {
  const { years, months } = roleDuration(role, now);
  const range = `${formatYearMonth(lang, role.start)} - ${
    role.end ? formatYearMonth(lang, role.end) : labels.present
  }`;

  return (
    <li className="relative pb-[6.4rem] pl-[3.2rem] last:pb-0 max-md:pl-[2.4rem] print:pb-[2.4rem]">
      <span
        aria-hidden
        className="absolute left-0 top-[0.9rem] h-[9px] w-[9px] rounded-full bg-brand shadow-[0_0_0_4px_var(--background)]"
      />
      <Rise>
        <div data-print-keep>
          <p className="flex flex-wrap items-baseline gap-x-[1.6rem] gap-y-[0.4rem] font-mono text-2xs text-text-muted">
            <span className="text-text">{range}</span>
            <span>{labels.duration(years, months)}</span>
            <span>{role.location}</span>
          </p>
          <h3 className="mt-[1.2rem] text-md font-semibold print:text-sm">
            {copy.title}
          </h3>
          <p className="mt-[0.2rem] text-xs font-medium text-brand">
            {role.employer}
          </p>
          <p className="mt-[1.6rem] max-w-[62ch] text-sm text-text-muted print:text-xs">
            {copy.summary}
          </p>
        </div>
        <ul className="mt-[1.6rem] flex max-w-[62ch] flex-col gap-[0.8rem] text-sm text-text print:text-xs">
          {copy.highlights.map((highlight) => (
            <li
              key={highlight}
              className="relative pl-[2rem] before:absolute before:left-0 before:top-[0.85em] before:h-px before:w-[1.2rem] before:bg-brand before:content-['']"
            >
              {highlight}
            </li>
          ))}
        </ul>
        <ul className="mt-[2rem] flex flex-wrap gap-[0.8rem]">
          {role.tech.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </Rise>
    </li>
  );
};

export const ResumeExperience = ({ lang, resume, labels, now }: Props) => {
  const { facts, copy } = resume;

  return (
    <section
      aria-labelledby="resume-experience"
      className="mx-auto grid max-w-[1150px] gap-x-[6.4rem] gap-y-[4rem] px-[9.6rem] py-[8.8rem] max-md:px-[2.4rem] max-md:py-[6.4rem] lg:grid-cols-[18rem_minmax(0,1fr)] print:block print:px-0 print:py-[2.4rem]"
    >
      <div className="relative">
        <div className="lg:sticky lg:top-[calc(45px_+_3.6rem_+_4rem)] print:static print:mb-[2rem]">
          <ResumeHeading
            id="resume-experience"
            title={labels.experience}
            lede={labels.experienceLede}
          />
        </div>
      </div>
      <ExperienceRail>
        <ol className="list-none">
          {facts.roles.map((role) => (
            <RoleEntry
              key={role.id}
              lang={lang}
              role={role}
              copy={copy.roles[role.id]}
              labels={labels}
              now={now}
            />
          ))}
        </ol>
      </ExperienceRail>
    </section>
  );
};
