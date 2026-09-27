import { describe, expect, it } from "vitest";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { LANGUAGES } from "@/lib/language";
import {
  POSTS,
  formatPostDate,
  getPostSlugs,
  getPostsNewestFirst,
  isPostSlug,
} from "./index";
import { POST_COPY } from "./copy";
import { POST_CONTENT, loadPostContent } from "./post-content";

const publicDir = join(__dirname, "..", "..", "public");

const renderedText = async (
  lang: (typeof LANGUAGES)[number],
  slug: (typeof POSTS)[number]["slug"]
): Promise<string> => {
  const { default: Content } = await loadPostContent(lang, slug)();
  return renderToStaticMarkup(createElement(Content))
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

describe("posts", () => {
  it("has a unique, URL-safe slug for every Post", () => {
    const slugs = getPostSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it("dates every Post with a real calendar day", () => {
    for (const post of POSTS) {
      const parsed = new Date(`${post.publishedOn}T00:00:00Z`);
      expect(parsed.toISOString().slice(0, 10), post.slug).toBe(post.publishedOn);
    }
  });

  it("references Open Graph images that exist under /public", () => {
    for (const post of POSTS) {
      if (!("ogImage" in post)) continue;
      expect(existsSync(join(publicDir, post.ogImage)), post.slug).toBe(true);
    }
  });

  it("lists Posts newest first", () => {
    const dates = getPostsNewestFirst("en").map((post) => post.publishedOn);
    expect(dates).toEqual([...dates].sort().reverse());
  });

  it("recognises only published slugs", () => {
    expect(isPostSlug("why-i-built-flexiday")).toBe(true);
    expect(isPostSlug("does-not-exist")).toBe(false);
  });

  it("formats the publication date in the reader's Language", () => {
    expect(formatPostDate("en", "2026-09-27")).toBe("September 27, 2026");
    expect(formatPostDate("cs", "2026-09-27")).toBe("27. září 2026");
  });

  it("keeps Post Copy and content out of the invariant Post list", () => {
    const list = readFileSync(join(__dirname, "posts.ts"), "utf8");
    expect(list).not.toContain("title:");
    expect(list).not.toContain("post-content");
  });
});

describe("the invariant/Post Copy split", () => {
  it("has Post Copy and a content module for exactly the published Posts", () => {
    const slugs = [...getPostSlugs()].sort();
    for (const lang of LANGUAGES) {
      expect(Object.keys(POST_COPY[lang]).sort(), lang).toEqual(slugs);
    }
    expect(Object.keys(POST_CONTENT).sort()).toEqual(slugs);
  });

  it("gives every Post a title and a short description in every Language", () => {
    for (const lang of LANGUAGES) {
      for (const slug of getPostSlugs()) {
        const copy = POST_COPY[lang][slug];
        expect(copy.title.length, `${lang}: ${slug}`).toBeGreaterThan(0);
        expect(copy.description.length, `${lang}: ${slug}`).toBeGreaterThan(0);
        expect(copy.description.length, `${lang}: ${slug}`).toBeLessThan(160);
      }
    }
  });

  it("writes every Post anew in every translated Language", async () => {
    for (const slug of getPostSlugs()) {
      const english = await renderedText("en", slug);
      expect(english.length, `en: ${slug} renders nothing`).toBeGreaterThan(0);
      for (const lang of LANGUAGES.filter((l) => l !== "en")) {
        expect(POST_COPY[lang][slug].title, `${lang}: ${slug} title`).not.toBe(
          POST_COPY.en[slug].title
        );
        expect(
          POST_COPY[lang][slug].description,
          `${lang}: ${slug} description`
        ).not.toBe(POST_COPY.en[slug].description);
        expect(await renderedText(lang, slug), `${lang}: ${slug} body`).not.toBe(
          english
        );
      }
    }
  });
});
