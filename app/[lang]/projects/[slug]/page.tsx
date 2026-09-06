import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudySlugs, getProjectBySlug } from "@/content/projects";
import { CASE_STUDY_CONTENT } from "@/content/projects/case-studies";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";

// Written out rather than taken from the generated `PageProps` helper, because
// typecheck runs in CI without a build and the generated types are not there.
// `string` rather than `Language` because the framework's own route validator
// rejects a params type narrower than its own; `dynamicParams` is what narrows
// the values that actually reach here.
interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

/**
 * Statically generated for every Project that has Case Study content. Runs once
 * per Language the layout above generates, and returns only this segment.
 */
export const generateStaticParams = () =>
  getCaseStudySlugs().map((slug) => ({ slug }));

/** Any other slug is a 404, not a page rendered on demand. */
export const dynamicParams = false;

/**
 * Metadata and content are separate modules, so a Project can carry a Case
 * Study without one being written yet. That slug is a 404, never a blank page.
 */
const resolveCaseStudy = (slug: string) => {
  const project = getProjectBySlug(slug);
  const caseStudy = project?.caseStudy;
  const loadContent = CASE_STUDY_CONTENT[slug];
  const heroNav = caseStudy?.sections[0];
  if (!project || !caseStudy || !loadContent || !heroNav) notFound();
  return { project, caseStudy, loadContent, heroNav };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const { caseStudy } = resolveCaseStudy(slug);

  const title = `Daniel Hrynusiw | ${caseStudy.title}`;
  // The published URL is the unprefixed English one, and every URL below is a
  // path resolved against the layout's metadata base. See
  // docs/adr/0001-unprefixed-english-urls.md. Adding Czech makes these
  // Language-dependent.
  const url = `/projects/${slug}`;

  return {
    title,
    description: caseStudy.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: "Daniel Hrynusiw",
      url,
      title,
      description: caseStudy.description,
      images: [{ url: caseStudy.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: caseStudy.description,
      images: [caseStudy.ogImage],
    },
    icons: { icon: "/favicon.ico" },
  };
};

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const { project, caseStudy, loadContent, heroNav } = resolveCaseStudy(slug);
  const { default: Content } = await loadContent();

  return (
    <CaseStudyLayout
      sections={caseStudy.sections}
      hero={<CaseStudyHero project={project} caseStudy={caseStudy} nav={heroNav} />}
    >
      <Content />
    </CaseStudyLayout>
  );
}
