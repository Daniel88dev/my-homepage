import type { Post } from "./types";

export const BLOG_PATH = "/blog";

export const POSTS = [
  {
    slug: "why-i-built-flexiday",
    publishedOn: "2026-09-27",
    ogImage: "/project-imgs/flexi-day/og.png",
  },
] as const satisfies readonly Post[];

export type PostSlug = (typeof POSTS)[number]["slug"];

export const postPath = (slug: PostSlug): string => `${BLOG_PATH}/${slug}`;
