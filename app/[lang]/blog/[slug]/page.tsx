import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { languagePath, toLanguage, type Language } from "@/lib/language";
import { pageAlternates } from "@/content/pages";
import { getDictionary } from "@/content/dictionary";
import {
  BLOG_PATH,
  formatPostDate,
  getPost,
  getPostSlugs,
  isPostSlug,
  postPath,
} from "@/content/blog";
import { loadPostContent } from "@/content/blog/post-content";
import { BlogLayout } from "@/components/blog/BlogLayout";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export const generateStaticParams = () =>
  getPostSlugs().map((slug) => ({ slug }));

export const dynamicParams = false;

const resolvePost = (slug: string, lang: Language) => {
  if (!isPostSlug(slug)) notFound();
  return getPost(lang, slug);
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { lang, slug } = await params;
  const language = toLanguage(lang);
  const post = resolvePost(slug, language);

  const title = `Daniel Hrynusiw | ${post.copy.title}`;
  const path = postPath(post.slug);
  const url = languagePath(language, path);
  const images = post.ogImage
    ? [{ url: post.ogImage, width: 1200, height: 630 }]
    : undefined;

  return {
    title,
    description: post.copy.description,
    alternates: {
      canonical: url,
      languages: pageAlternates(path),
    },
    openGraph: {
      type: "article",
      siteName: "Daniel Hrynusiw",
      url,
      title,
      description: post.copy.description,
      publishedTime: post.publishedOn,
      authors: ["Daniel Hrynusiw"],
      images,
    },
    twitter: {
      card: post.ogImage ? "summary_large_image" : "summary",
      title,
      description: post.copy.description,
      images: post.ogImage ? [post.ogImage] : undefined,
    },
    icons: { icon: "/favicon.ico" },
  };
};

export default async function PostPage({ params }: Props) {
  const { lang, slug } = await params;
  const language = toLanguage(lang);
  const post = resolvePost(slug, language);
  const { default: Content } = await loadPostContent(language, post.slug)();
  const dict = getDictionary(language);

  return (
    <BlogLayout
      lang={language}
      dict={dict}
      path={postPath(post.slug)}
      back={{
        href: languagePath(language, BLOG_PATH),
        text: dict.blog.allPosts,
        label: dict.blog.backToAllPosts,
      }}
    >
      <article aria-labelledby="post-title">
        <header className="mb-[4.8rem] max-w-[66ch] border-b border-border pb-[4.8rem] max-md:mb-[3.2rem] max-md:pb-[3.2rem]">
          <p className="eyebrow mb-[2rem]">
            <span className="sr-only">{dict.blog.publishedOn} </span>
            <time dateTime={post.publishedOn}>
              {formatPostDate(language, post.publishedOn)}
            </time>
          </p>
          <h1 id="post-title" className="text-xl font-bold max-md:text-lg">
            {post.copy.title}
            <span className="text-brand">.</span>
          </h1>
          <p className="mt-[2rem] text-md font-light text-text-muted max-md:text-sm">
            {post.copy.description}
          </p>
        </header>
        <Content />
      </article>
    </BlogLayout>
  );
}
