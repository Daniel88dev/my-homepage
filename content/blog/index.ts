import type { Language } from "@/lib/language";
import { getPostCopy } from "./copy";
import { POSTS, type PostSlug } from "./posts";
import type { Post, PostCopy } from "./types";

export { BLOG_PATH, POSTS, postPath, type PostSlug } from "./posts";
export type * from "./types";

export interface PostSummary extends Post {
  slug: PostSlug;
  copy: PostCopy;
}

export const isPostSlug = (value: string): value is PostSlug =>
  POSTS.some((post) => post.slug === value);

export const getPostSlugs = (): PostSlug[] => POSTS.map((post) => post.slug);

export const getPost = (lang: Language, slug: PostSlug): PostSummary => {
  const post = POSTS.find((candidate) => candidate.slug === slug)!;
  return { ...post, copy: getPostCopy(lang, slug) };
};

export const getPostsNewestFirst = (lang: Language): PostSummary[] =>
  [...POSTS]
    .sort((a, b) => b.publishedOn.localeCompare(a.publishedOn))
    .map((post) => getPost(lang, post.slug));

export const formatPostDate = (lang: Language, date: Post["publishedOn"]): string =>
  new Intl.DateTimeFormat(lang, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
