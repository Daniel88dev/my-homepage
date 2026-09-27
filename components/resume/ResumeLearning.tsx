import { PiCertificate, PiGraduationCap, PiMedal } from "react-icons/pi";
import type { Dictionary } from "@/content/dictionary";
import type { Resume } from "@/content/resume";
import { formatYear } from "@/content/resume/format";
import { ResumeHeading } from "./ResumeHeading";
import { Rise } from "./Rise";

interface Props {
  resume: Resume;
  labels: Dictionary["resume"];
}

const groupTitle =
  "mb-[2rem] flex items-center gap-[1rem] text-xs font-semibold print:mb-[1.2rem]";

export const ResumeLearning = ({ resume, labels }: Props) => {
  const { facts, copy } = resume;

  return (
    <section
      aria-labelledby="resume-learning"
      className="mx-auto max-w-[1150px] px-[9.6rem] pb-[8.8rem] max-md:px-[2.4rem] max-md:pb-[6.4rem] print:px-0 print:pb-[2.4rem]"
    >
      <ResumeHeading id="resume-learning" title={labels.learning} />
      <div className="mt-[4rem] grid gap-x-[6.4rem] gap-y-[4.8rem] max-md:mt-[3.2rem] md:grid-cols-[3fr_2fr] print:mt-[2rem] print:grid-cols-[3fr_2fr] print:gap-x-[3.2rem]">
        <Rise>
          <h3 className={groupTitle}>
            <PiCertificate size="2rem" className="text-brand" aria-hidden />
            <span>{labels.courses}</span>
          </h3>
          <ol className="flex flex-col gap-[1.6rem] print:gap-[0.8rem]">
            {facts.courses.map((course) => (
              <li
                data-print-keep
                key={course.id}
                className="grid grid-cols-[6rem_minmax(0,1fr)] gap-x-[1.6rem] max-md:grid-cols-[5rem_minmax(0,1fr)]"
              >
                <span className="pt-[0.3rem] font-mono text-2xs text-text-muted">
                  {formatYear(course.date)}
                </span>
                <div>
                  <p className="text-sm text-text print:text-xs">
                    {course.title}
                  </p>
                  <p className="mt-[0.2rem] font-mono text-2xs text-text-muted">
                    {course.provider}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Rise>
        <div className="flex flex-col gap-[4.8rem] print:gap-[2.4rem]">
          <Rise delay={0.1}>
            <h3 className={groupTitle}>
              <PiMedal size="2rem" className="text-brand" aria-hidden />
              <span>{labels.awards}</span>
            </h3>
            <ol className="flex flex-col gap-[1.6rem] print:gap-[0.8rem]">
              {facts.awards.map((award) => (
                <li
                  data-print-keep
                  key={award.id}
                  className="grid grid-cols-[6rem_minmax(0,1fr)] gap-x-[1.6rem] max-md:grid-cols-[5rem_minmax(0,1fr)]"
                >
                  <span className="pt-[0.3rem] font-mono text-2xs text-text-muted">
                    {formatYear(award.date)}
                  </span>
                  <div>
                    <p className="text-sm text-text print:text-xs">
                      {copy.awards[award.id].title}
                    </p>
                    <p className="mt-[0.2rem] font-mono text-2xs text-text-muted">
                      {award.issuer}
                    </p>
                    {copy.awards[award.id].note && (
                      <p className="mt-[0.4rem] text-xs text-text-muted print:text-2xs">
                        {copy.awards[award.id].note}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Rise>
          <Rise delay={0.2}>
            <h3 className={groupTitle}>
              <PiGraduationCap size="2rem" className="text-brand" aria-hidden />
              <span>{labels.education}</span>
            </h3>
            <ul className="flex flex-col gap-[1.6rem]">
              {facts.education.map((entry) => (
                <li
                  data-print-keep
                  key={entry.id}
                  className="grid grid-cols-[6rem_minmax(0,1fr)] gap-x-[1.6rem] max-md:grid-cols-[5rem_minmax(0,1fr)]"
                >
                  <span className="pt-[0.3rem] font-mono text-2xs text-text-muted">
                    {formatYear(entry.start)}
                  </span>
                  <div>
                    <p className="text-sm text-text print:text-xs">
                      {copy.education[entry.id].field}
                    </p>
                    <p className="mt-[0.2rem] font-mono text-2xs text-text-muted">
                      {entry.school}, {formatYear(entry.start)}-
                      {formatYear(entry.end)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Rise>
        </div>
      </div>
    </section>
  );
};
