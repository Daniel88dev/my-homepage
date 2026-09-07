import { SectionHeader } from "@/components/utils/SectionHeader";
import { languagePath, type Language } from "@/lib/language";
import { projects } from "@/content/projects";
import { getProjectCopy } from "@/content/projects/copy";
import type { Dictionary } from "@/content/dictionary";
import { Project } from "./Project";

interface Props {
  lang: Language;
  dict: Dictionary["projects"];
}

export const Projects = ({ lang, dict }: Props) => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title={dict.title} index="02" dir="r" />

      <div className="grid grid-cols-2 gap-x-[4.8rem] gap-y-[6.4rem] max-md:grid-cols-1 max-md:gap-y-[4.8rem] md:[&>*:nth-child(even)]:mt-[6.4rem]">
        {projects.map((project) => {
          const copy = getProjectCopy(lang, project.slug);
          if (!copy) {
            throw new Error(`No ${lang} Project Copy for "${project.slug}"`);
          }

          return (
            <Project
              key={project.slug}
              labels={{
                openDetails: dict.openDetails(project.title),
                screenshotAlt: dict.screenshotAlt(project.title),
                sourceOnGitHub: dict.sourceOnGitHub(project.title),
                openLive: dict.openLive(project.title),
                readMore: dict.readMore,
                readCaseStudy: dict.readCaseStudy,
                closeDialog: dict.closeDialog,
                sourceCode: dict.sourceCode,
                liveProject: dict.liveProject,
                repositories: dict.repositories,
              }}
              title={project.title}
              description={copy.description}
              imgSrc={project.imgSrc}
              code={project.code}
              liveUrl={project.liveUrl}
              tech={project.tech}
              dialogContent={copy.dialogContent}
              relatedRepositories={project.relatedRepositories}
              caseStudyHref={
                project.caseStudy
                  ? languagePath(lang, `/projects/${project.slug}`)
                  : undefined
              }
            />
          );
        })}
      </div>
    </section>
  );
};
