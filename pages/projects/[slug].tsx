import Head from "next/head";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getCaseStudySlugs, getProjectBySlug } from "@/content/projects";
import { CASE_STUDY_CONTENT } from "@/content/projects/case-studies";
import { absoluteUrl } from "@/lib/site";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";

/**
 * Case Study route. Statically generated for every Project that has Case
 * Study content; any other slug is a 404. Only the slug crosses the
 * getStaticProps boundary because the content is JSX and not serialisable.
 */
export const getStaticPaths = (async () => {
  return {
    paths: getCaseStudySlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const slug = params?.slug;
  // Metadata and content are separate modules, so a Project can carry a Case
  // Study without one being written yet. That slug is a 404, never a blank page.
  if (
    typeof slug !== "string" ||
    getProjectBySlug(slug)?.caseStudy === undefined ||
    CASE_STUDY_CONTENT[slug] === undefined
  ) {
    return { notFound: true };
  }
  return { props: { slug } };
}) satisfies GetStaticProps<{ slug: string }>;

export default function CaseStudyPage({
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const project = getProjectBySlug(slug);
  const caseStudy = project?.caseStudy;
  const Content = CASE_STUDY_CONTENT[slug];
  const heroNav = caseStudy?.sections[0];
  if (!project || !caseStudy || !Content || !heroNav) return null;

  const pageTitle = `Daniel Hrynusiw | ${caseStudy.title}`;
  const url = absoluteUrl(`/projects/${project.slug}`);
  const ogImage = absoluteUrl(caseStudy.ogImage);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={caseStudy.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Daniel Hrynusiw" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={caseStudy.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={caseStudy.description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CaseStudyLayout
        sections={caseStudy.sections}
        hero={<CaseStudyHero project={project} caseStudy={caseStudy} nav={heroNav} />}
      >
        <Content />
      </CaseStudyLayout>
    </>
  );
}
