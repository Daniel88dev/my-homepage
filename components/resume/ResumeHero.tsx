import Image from "next/image";
import { PiArrowUpRight, PiDownloadSimple } from "react-icons/pi";
import { StandardButton } from "@/components/buttons/StandardButton";
import type { Dictionary } from "@/content/dictionary";
import type { Resume } from "@/content/resume";
import { HeroTitle } from "./HeroTitle";
import { Rise } from "./Rise";

interface Props {
  resume: Resume;
  labels: Dictionary["resume"];
  pdfHref: string;
}

export const ResumeHero = ({ resume, labels, pdfHref }: Props) => {
  const { facts, copy } = resume;

  return (
    <section
      aria-labelledby="resume-title"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[15%] top-[-10%] z-0 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(closest-side,rgb(46_229_157/0.09),transparent)] blur-2xl print:hidden"
      />
      <div className="relative z-10 mx-auto grid max-w-[1150px] items-center gap-x-[6.4rem] gap-y-[4rem] px-[9.6rem] pb-[8rem] pt-[6.4rem] max-md:px-[2.4rem] max-md:pb-[5.6rem] max-md:pt-[4rem] md:grid-cols-[7fr_5fr] print:grid-cols-[minmax(0,1fr)_14rem] print:gap-x-[3.2rem] print:px-0 print:pb-[3.2rem] print:pt-0">
        <div>
          <Rise>
            <p className="eyebrow mb-[2rem]">{copy.eyebrow}</p>
          </Rise>
          <HeroTitle name={facts.name} />
          <Rise delay={0.35}>
            <p className="mt-[2.4rem] max-w-[42ch] text-md font-light text-text-muted max-md:text-sm print:text-sm">
              {copy.headline}
            </p>
          </Rise>
          <Rise delay={0.45}>
            <p className="mt-[2rem] max-w-[58ch] text-sm text-text-muted print:text-xs">
              {copy.summary}
            </p>
          </Rise>
          <Rise delay={0.55}>
            <div
              data-print-hide
              className="mt-[3.2rem] flex flex-wrap items-center gap-[2.4rem]"
            >
              <StandardButton href={pdfHref} target="_blank" rel="noopener">
                {labels.download}
                <PiDownloadSimple aria-hidden />
              </StandardButton>
              <a
                href={`mailto:${facts.email}`}
                className="group inline-flex items-center gap-[0.8rem] text-sm text-text-muted transition-colors duration-200 hover:text-text"
              >
                {labels.emailMe}
                <PiArrowUpRight
                  aria-hidden
                  className="transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
                />
              </a>
            </div>
          </Rise>
          <address className="mt-[2.4rem] hidden not-italic print:block">
            <p className="font-mono text-2xs text-text-muted">
              {facts.email} · {facts.city}, {copy.country}
            </p>
            <p className="mt-[0.4rem] font-mono text-2xs text-text-muted">
              {facts.links
                .map((link) => link.url.replace(/^https?:\/\/(www\.)?/, ""))
                .join(" · ")}
            </p>
          </address>
        </div>
        <Rise
          delay={0.2}
          className="w-full max-w-[34rem] justify-self-center md:justify-self-end print:max-w-[14rem]"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-[1.6rem] translate-y-[1.6rem] rounded-[4px] border border-brand/40 print:translate-x-[0.8rem] print:translate-y-[0.8rem]"
            />
            <Image
              src={facts.portrait.src}
              width={facts.portrait.width}
              height={facts.portrait.height}
              alt={copy.portraitAlt}
              priority
              sizes="(max-width: 768px) 80vw, 340px"
              className="relative h-auto w-full rounded-[4px] shadow-[var(--shadow-lg)]"
            />
          </div>
        </Rise>
      </div>
    </section>
  );
};
