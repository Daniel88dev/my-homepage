import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { languagePath, toLanguage, type Language } from "@/lib/language";
import { pageAlternates } from "@/content/pages";
import { getCaseStudySlugs, getProjectBySlug, liveHost } from "@/content/projects";
import { getProjectCopy } from "@/content/projects/copy";
import { loadCaseStudyContent } from "@/content/projects/case-studies";
import { getDictionary } from "@/content/dictionary";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export const generateStaticParams = () =>
  getCaseStudySlugs().map((slug) => ({ slug }));

export const dynamicParams = false;

const resolveCaseStudy = (slug: string, lang: Language) => {
  const project = getProjectBySlug(slug);
  const caseStudy = project?.caseStudy;
  const copy = getProjectCopy(lang, slug)?.caseStudy;
  const loadContent = loadCaseStudyContent(lang, slug);
  if (!project || !caseStudy || !copy || !loadContent) notFound();
  return { project, caseStudy, copy, loadContent };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { lang, slug } = await params;
  const language = toLanguage(lang);
  const { caseStudy, copy } = resolveCaseStudy(slug, language);

  const title = `Daniel Hrynusiw | ${copy.title}`;

  const path = `/projects/${slug}`;
  const url = languagePath(language, path);

  return {
    title,
    description: copy.description,
    alternates: {
      canonical: url,
      languages: pageAlternates(path),
    },
    openGraph: {
      type: "article",
      siteName: "Daniel Hrynusiw",
      url,
      title,
      description: copy.description,
      images: [{ url: caseStudy.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: copy.description,
      images: [caseStudy.ogImage],
    },
    icons: { icon: "/favicon.ico" },
  };
};

export default async function CaseStudyPage({ params }: Props) {
  const { lang, slug } = await params;
  const language = toLanguage(lang);
  const { project, caseStudy, copy, loadContent } = resolveCaseStudy(
    slug,
    language
  );
  const { default: Content, sections } = await loadContent();
  const dict = getDictionary(language);

  const heroSection = sections[0];
  if (!heroSection) notFound();

  return (
    <CaseStudyLayout
      lang={language}
      dict={dict}
      path={`/projects/${slug}`}
      sections={sections}
      hero={
        <CaseStudyHero
          project={project}
          labels={{
            eyebrow: dict.caseStudy.eyebrow,
            openLive: dict.caseStudy.openLive(liveHost(project)),
            sourceOnGitHub: dict.caseStudy.sourceOnGitHub,
          }}
          heroImage={{ ...caseStudy.heroImage, alt: copy.heroImageAlt }}
          pitch={copy.pitch}
          sectionId={heroSection.id}
        />
      }
    >
      <Content />
    </CaseStudyLayout>
  );
}
