import type { Language } from "@/lib/language";
import type { PostSlug } from "./posts";
import type { PostContentLoader } from "./types";

export const POST_CONTENT: Record<PostSlug, Record<Language, PostContentLoader>> = {
  "why-i-built-flexiday": {
    en: () => import("./why-i-built-flexiday/post-content"),
    cs: () => import("./why-i-built-flexiday/post-content.cs"),
  },
};

export const loadPostContent = (
  lang: Language,
  slug: PostSlug
): PostContentLoader => POST_CONTENT[slug][lang];
