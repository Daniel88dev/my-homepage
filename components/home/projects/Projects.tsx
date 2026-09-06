import { SectionHeader } from "@/components/utils/SectionHeader";
import { projects } from "@/content/projects";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" index="02" dir="r" />

      <div className="grid grid-cols-2 gap-x-[4.8rem] gap-y-[6.4rem] max-md:grid-cols-1 max-md:gap-y-[4.8rem] md:[&>*:nth-child(even)]:mt-[6.4rem]">
        {projects.map((project) => {
          return (
            <Project
              key={project.slug}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              code={project.code}
              liveUrl={project.liveUrl}
              tech={project.tech}
              dialogContent={project.dialogContent}
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
