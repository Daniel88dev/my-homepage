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
  const language = toLanguage(lang);
  const { caseStudy, copy } = resolveCaseStudy(slug, language);

  const title = `Daniel Hrynusiw | ${copy.title}`;
  // A path, resolved against the layout's metadata base rather than made
  // absolute here. English stays unprefixed, so the English canonical is
  // byte-identical to the one that has been published all along; Czech
  // declares its own. See docs/adr/0001-unprefixed-english-urls.md.
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

  // The hero is the first section, and it anchors like the rest of them.
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
