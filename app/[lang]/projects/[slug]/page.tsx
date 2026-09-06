import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toLanguage, type Language } from "@/lib/language";
import { getCaseStudySlugs, getProjectBySlug } from "@/content/projects";
import { getProjectCopy } from "@/content/projects/copy";
import { loadCaseStudyContent } from "@/content/projects/case-studies";
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
 * The invariant data, this Language's Copy and this Language's content are
 * three separate modules, so a Project can carry a Case Study without one
 * being written yet. That slug is a 404, never a blank page.
 */
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
  const { caseStudy, copy } = resolveCaseStudy(slug, toLanguage(lang));

  const title = `Daniel Hrynusiw | ${copy.title}`;
  // The published URL is the unprefixed English one, and every URL below is a
  // path resolved against the layout's metadata base. See
  // docs/adr/0001-unprefixed-english-urls.md. Adding Czech makes these
  // Language-dependent.
  const url = `/projects/${slug}`;

  return {
    title,
    description: copy.description,
    alternates: { canonical: url },
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
  const { project, caseStudy, copy, loadContent } = resolveCaseStudy(
    slug,
    toLanguage(lang)
  );
  const { default: Content, sections } = await loadContent();

  // The hero is the first section, and it anchors like the rest of them.
  const heroSection = sections[0];
  if (!heroSection) notFound();

  return (
    <CaseStudyLayout
      sections={sections}
      hero={
        <CaseStudyHero
          project={project}
          heroImage={caseStudy.heroImage}
          pitch={copy.pitch}
          sectionId={heroSection.id}
        />
      }
    >
      <Content />
    </CaseStudyLayout>
  );
}
