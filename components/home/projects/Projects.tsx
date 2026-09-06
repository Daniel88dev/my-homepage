import { SectionHeader } from "@/components/utils/SectionHeader";
import type { Language } from "@/lib/language";
import { projects } from "@/content/projects";
import { getProjectCopy } from "@/content/projects/copy";
import { Project } from "./Project";

interface Props {
  /** The Language whose Project Copy each Project Card is written from. */
  lang: Language;
}

export const Projects = ({ lang }: Props) => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" index="02" dir="r" />

      <div className="grid grid-cols-2 gap-x-[4.8rem] gap-y-[6.4rem] max-md:grid-cols-1 max-md:gap-y-[4.8rem] md:[&>*:nth-child(even)]:mt-[6.4rem]">
        {projects.map((project) => {
          const copy = getProjectCopy(lang, project.slug);
          if (!copy) {
            // Every Project has Copy in every published Language, and
            // projects.test.ts asserts it. Failing the static build is louder
            // than shipping a Project Card with no description on it.
            throw new Error(`No ${lang} Project Copy for "${project.slug}"`);
          }

          return (
            <Project
              key={project.slug}
              title={project.title}
              description={copy.description}
              imgSrc={project.imgSrc}
              code={project.code}
              liveUrl={project.liveUrl}
              tech={project.tech}
              dialogContent={copy.dialogContent}
              relatedRepositories={project.relatedRepositories}
              caseStudyHref={
                project.caseStudy ? `/projects/${project.slug}` : undefined
              }
            />
          );
        })}
      </div>
    </section>
  );
};
