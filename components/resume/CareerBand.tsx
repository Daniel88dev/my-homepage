import type { Dictionary } from "@/content/dictionary";
import type { Resume } from "@/content/resume";
import {
  buildTimeline,
  yearsOnTrack,
  yearsWorked,
} from "@/content/resume/timeline";
import { TRACKS, type RoleId, type YearMonth } from "@/content/resume/types";
import { CareerTimeline } from "./CareerTimeline";
import { ResumeHeading } from "./ResumeHeading";
import { Rise } from "./Rise";

interface Props {
  resume: Resume;
  labels: Dictionary["resume"];
  now: YearMonth;
}

export const CareerBand = ({ resume, labels, now }: Props) => {
  const { facts, copy } = resume;
  const timeline = buildTimeline(facts.roles, now);
  const spanLabels = Object.fromEntries(
    facts.roles.map((role) => [role.id, copy.roles[role.id].shortTitle]),
  ) as Record<RoleId, string>;

  return (
    <section
      aria-labelledby="resume-timeline"
      className="relative border-y border-border bg-background-dark/60 print:border-0 print:bg-transparent"
    >
      <div className="mx-auto max-w-[1150px] px-[9.6rem] py-[6.4rem] max-md:px-[2.4rem] max-md:py-[4.8rem] print:px-0 print:py-[2.4rem]">
        <ResumeHeading
          id="resume-timeline"
          title={labels.timelineTitle}
          lede={labels.timelineLede(
            yearsWorked(facts.roles, now),
            yearsOnTrack(facts.roles, "freelance", now),
          )}
        />
        <Rise delay={0.15} className="mt-[4rem] max-md:mt-[3.2rem]">
          <CareerTimeline
            timeline={timeline}
            lanes={TRACKS.map((track) => ({
              track,
              label: labels.tracks[track],
            }))}
            spanLabels={spanLabels}
            nowLabel={labels.now}
          />
        </Rise>
      </div>
    </section>
  );
};
