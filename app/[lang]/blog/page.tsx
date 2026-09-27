import type { Metadata } from "next";
import { languagePath, toLanguage } from "@/lib/language";
import { pageAlternates } from "@/content/pages";
import { getDictionary } from "@/content/dictionary";
import { BLOG_PATH, getPostsNewestFirst } from "@/content/blog";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { PostList } from "@/components/blog/PostList";

interface Props {
  params: Promise<{ lang: string }>;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { lang } = await params;
  const language = toLanguage(lang);
  const { title, description } = getDictionary(language).blog.meta;
  const url = languagePath(language, BLOG_PATH);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: pageAlternates(BLOG_PATH),
    },
    openGraph: {
      type: "website",
      siteName: "Daniel Hrynusiw",
      url,
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    icons: { icon: "/favicon.ico" },
  };
};

export default async function BlogPage({ params }: Props) {
  const { lang } = await params;
  const language = toLanguage(lang);
  const dict = getDictionary(language);

  return (
    <BlogLayout
      lang={language}
      dict={dict}
      path={BLOG_PATH}
      back={{
        href: languagePath(language, "/"),
        text: dict.blog.home,
        label: dict.blog.backToHome,
      }}
    >
      <header className="mb-[6.4rem] max-w-[62ch] max-md:mb-[4.8rem]">
        <p className="eyebrow mb-[2rem]">{dict.blog.eyebrow}</p>
        <h1 className="text-xl font-bold max-md:text-lg">
          {dict.blog.title}
          <span className="text-brand">.</span>
        </h1>
        <p className="mt-[2rem] text-md font-light text-text-muted max-md:text-sm">
          {dict.blog.lede}
        </p>
      </header>
      <PostList
        lang={language}
        posts={getPostsNewestFirst(language)}
        label={dict.blog.posts}
      />
    </BlogLayout>
  );
}
