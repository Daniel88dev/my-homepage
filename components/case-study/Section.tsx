import { ReactNode } from "react";
import { Reveal } from "@/components/utils/Reveal";

interface SectionProps {
  /** The invariant section id the section navigation links to. */
  id: string;
  title: string;
  /** One short paragraph under the heading. Keep it under 30 words. */
  lede?: ReactNode;
  children: ReactNode;
}

export const CaseStudySection = ({ id, title, lede, children }: SectionProps) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-[calc(45px_+_3.6rem_+_2.4rem)] border-t border-border pt-[6.4rem] pb-[8rem] first:border-t-0 max-md:pt-[4.8rem] max-md:pb-[5.6rem]"
    >
      <div className="mb-[4rem] max-w-[62ch] max-md:mb-[3.2rem]">
        <Reveal>
          <h2 id={`${id}-title`} className="text-lg font-semibold max-md:text-md">
            {title}
            <span className="text-brand">.</span>
          </h2>
        </Reveal>
        {lede && <p className="mt-[1.6rem] text-sm text-text-muted">{lede}</p>}
      </div>
      {children}
    </section>
  );
};

/** Running text. Constrained to a reading measure. */
export const Prose = ({ children }: { children: ReactNode }) => (
  <div className="flex max-w-[62ch] flex-col gap-[1.6rem] text-sm text-text-muted [&_strong]:font-medium [&_strong]:text-text">
    {children}
  </div>
);
