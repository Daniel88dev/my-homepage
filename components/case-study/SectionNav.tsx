import { useEffect, useState } from "react";
import type { CaseStudyNavItem } from "@/content/projects/types";

interface Props {
  sections: CaseStudyNavItem[];
}

/**
 * The Case Study's sections, from the medium breakpoint up. Highlights the
 * section currently in view, in the same spirit as the homepage sidebar.
 */
export const SectionNav = ({ sections }: Props) => {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // A band across the upper third of the viewport decides which section is
    // "current", so a long section stays highlighted while it is being read.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="On this page" className="max-md:hidden">
      <ol className="flex flex-col border-l border-border">
        {sections.map((section) => {
          const isActive = section.id === active;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActive(section.id)}
                className={`-ml-px block border-l py-[0.8rem] pl-[1.6rem] font-mono text-2xs transition-[color,border-color] duration-200 hover:text-text ${
                  isActive ? "border-brand text-text" : "border-transparent text-text-muted"
                }`}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
