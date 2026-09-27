import type { Language } from "@/lib/language";
import type { PostSlug } from "../posts";
import type { PostCopy } from "../types";
import { CS_POST_COPY } from "./cs";
import { EN_POST_COPY } from "./en";

export const POST_COPY: Record<Language, Record<PostSlug, PostCopy>> = {
  en: EN_POST_COPY,
  cs: CS_POST_COPY,
};

export const getPostCopy = (lang: Language, slug: PostSlug): PostCopy =>
  POST_COPY[lang][slug];
