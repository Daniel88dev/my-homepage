import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";
import type { Dictionary } from "@/content/dictionary";
import type { Resume } from "@/content/resume";
import { PrintLink } from "./PrintLink";
import { Rise } from "./Rise";

interface Props {
  resume: Resume;
  labels: Dictionary["resume"];
}

const secondaryLink =
  "group inline-flex items-center gap-[0.6rem] font-mono text-2xs uppercase tracking-[0.06em] text-text-muted transition-colors duration-200 hover:text-text";

export const ResumeContact = ({ resume, labels }: Props) => {
  const { facts, copy } = resume;

  return (
    <section
      aria-labelledby="resume-contact"
      data-print-hide
      className="border-t border-border"
    >
      <div className="mx-auto max-w-[1150px] px-[9.6rem] py-[8.8rem] max-md:px-[2.4rem] max-md:py-[6.4rem]">
        <Rise>
          <h2
            id="resume-contact"
            className="text-xl font-semibold max-md:text-lg"
          >
            {labels.contactTitle}
            <span className="text-brand">.</span>
          </h2>
          <p className="mt-[1.6rem] max-w-[52ch] text-sm text-text-muted">
            {labels.contactLede}
          </p>
        </Rise>
        <Rise delay={0.1}>
          <a
            href={`mailto:${facts.email}`}
            className="mt-[3.2rem] inline-block border-b-2 border-border pb-[0.4rem] text-lg font-semibold transition-[color,border-color] duration-200 hover:border-brand hover:text-brand max-md:text-md"
          >
            {facts.email}
          </a>
        </Rise>
        <Rise delay={0.2}>
          <ul className="mt-[3.2rem] flex flex-wrap items-center gap-x-[3.2rem] gap-y-[1.2rem]">
            {facts.links
              .filter((link) => link.id !== "site")
              .map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={secondaryLink}
                  >
                    {copy.links[link.id]}
                    <PiArrowUpRight
                      aria-hidden
                      className="transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
                    />
                  </Link>
                </li>
              ))}
            <li>
              <PrintLink label={labels.print} className={secondaryLink} />
            </li>
          </ul>
        </Rise>
      </div>
    </section>
  );
};
