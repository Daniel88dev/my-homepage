import type { ReactNode } from "react";
import type { Language } from "@/lib/language";
import type { Dictionary } from "@/content/dictionary";
import type { Resume } from "@/content/resume";
import type { Skill } from "@/content/resume/types";
import {
  formatPeriod,
  formatResumeDate,
  resumeDateTime,
} from "@/content/resume/format";

interface Props {
  lang: Language;
  resume: Resume;
  labels: Dictionary["resume"];
  pdfHref: string;
  pdfFilename: string;
}

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => (
  <section aria-labelledby={id} className="border-t border-border pt-[3.2rem]">
    <h2
      id={id}
      className="mb-[2.4rem] font-mono text-2xs uppercase tracking-[0.06em] text-brand"
    >
      {title}
    </h2>
    {children}
  </section>
);

const SkillList = ({
  skills,
  describe,
}: {
  skills: Skill[];
  describe: Props["labels"]["proficiency"];
}) => (
  <ul className="grid gap-[1.2rem]">
    {skills.map(({ name, level }) => (
      <li key={name} className="flex items-center justify-between gap-[1.6rem]">
        <span className="text-xs">{name}</span>
        <meter
          min={0}
          max={5}
          value={level}
          aria-label={`${name}: ${describe(level)}`}
          className="h-[0.6rem] w-[9rem] shrink-0"
        />
      </li>
    ))}
  </ul>
);

export const ResumeDocument = ({
  lang,
  resume,
  labels,
  pdfHref,
  pdfFilename,
}: Props) => (
  <article className="mx-auto max-w-[1150px] px-[9.6rem] py-[6.4rem] max-md:px-[2.4rem]">
    <header className="mb-[4.8rem] flex flex-wrap items-end justify-between gap-[2.4rem]">
      <div>
        <h1 className="text-xl font-semibold">
          {resume.name}
          <span className="text-brand">.</span>
        </h1>
        <p className="mt-[1.2rem] text-md text-text-muted">{resume.headline}</p>
        <p className="mt-[0.8rem] font-mono text-2xs text-text-muted">
          {resume.location} ·{" "}
          <a href={`mailto:${resume.email}`} className="hover:text-text">
            {resume.email}
          </a>
        </p>
      </div>
      <a
        href={pdfHref}
        download={pdfFilename}
        className="inline-flex items-center rounded-[4px] border border-brand px-[2rem] py-[1rem] text-xs font-medium text-brand transition-colors duration-200 hover:bg-brand hover:text-background-dark"
      >
        {labels.downloadPdf}
      </a>
    </header>

    <div className="grid gap-[4.8rem] md:grid-cols-[minmax(0,1fr)_26rem] md:gap-[6.4rem]">
      <div className="grid content-start gap-[4.8rem]">
        <Section id="summary" title={labels.summary}>
          <p className="max-w-[68ch] text-sm text-text-muted">{resume.summary}</p>
        </Section>

        <Section id="employment" title={labels.employment}>
          <ol className="grid gap-[3.2rem]">
            {resume.employment.map((position) => (
              <li key={`${position.employer}-${position.role}`}>
                <h3 className="text-md font-semibold">{position.role}</h3>
                <p className="mt-[0.2rem] text-xs text-brand">
                  {position.employer}, {position.location}
                </p>
                <p className="mt-[0.4rem] font-mono text-2xs text-text-muted">
                  <time dateTime={resumeDateTime(position.period.start)}>
                    {formatPeriod(lang, position.period, labels.present)}
                  </time>
                </p>
                <p className="mt-[1.2rem] max-w-[68ch] text-xs text-text-muted">
                  {position.description}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="education" title={labels.education}>
          <ul className="grid gap-[1.6rem]">
            {resume.education.map((entry) => (
              <li key={entry.school}>
                <h3 className="text-sm font-semibold">{entry.school}</h3>
                <p className="font-mono text-2xs text-text-muted">
                  {entry.location} ·{" "}
                  {formatPeriod(lang, entry.period, labels.present)}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="courses" title={labels.courses}>
          <ul className="grid gap-[1.2rem]">
            {resume.courses.map((course) => (
              <li key={course.title} className="text-xs">
                <span>{course.title}</span>
                <span className="text-text-muted">, {course.provider} · </span>
                <time
                  dateTime={resumeDateTime(course.date)}
                  className="font-mono text-2xs text-text-muted"
                >
                  {formatResumeDate(lang, course.date)}
                </time>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="awards" title={labels.awards}>
          <ul className="grid gap-[1.6rem]">
            {resume.awards.map((award) => (
              <li key={`${award.title}-${award.date.year}`} className="text-xs">
                <p>
                  {award.title}
                  <span className="text-text-muted">, {award.issuer} · </span>
                  <time
                    dateTime={resumeDateTime(award.date)}
                    className="font-mono text-2xs text-text-muted"
                  >
                    {formatResumeDate(lang, award.date)}
                  </time>
                </p>
                {award.note && (
                  <p className="text-2xs text-text-muted">{award.note}</p>
                )}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <aside className="grid content-start gap-[4.8rem]">
        <Section id="skills" title={labels.skills}>
          <SkillList skills={resume.skills} describe={labels.proficiency} />
        </Section>

        <Section id="languages" title={labels.languages}>
          <SkillList skills={resume.languages} describe={labels.proficiency} />
        </Section>

        <Section id="links" title={labels.links}>
          <ul className="grid gap-[0.8rem] text-xs">
            {resume.links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted transition-colors duration-200 hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="hobbies" title={labels.hobbies}>
          <ul className="flex flex-wrap gap-[0.8rem]">
            {resume.hobbies.map((hobby) => (
              <li key={hobby} className="chip">
                {hobby}
              </li>
            ))}
          </ul>
        </Section>
      </aside>
    </div>
  </article>
);
