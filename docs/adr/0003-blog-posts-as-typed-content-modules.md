# Blog Posts are typed content modules, published in every Language

ADR-0002 kept Case Study content as one TypeScript content module per Language
and rejected MDX, but named the blog as the place to revisit that: a blog is
prose-first, where a Case Study is mostly figures and tiles with text inside
them. The blog is here, and the decision is to keep the same shape anyway. A
Post is invariant facts in `content/blog/posts.ts` (slug, publication date,
Open Graph image), Post Copy per Language keyed by slug (title and
description), and one Post content module per Language that renders the body.

The deciding factor is that the repository still has exactly one way for
content to exist. MDX would make a Post read as a document, and it would buy
that with `@next/mdx`, an MDX transform for Vitest, a component-in-Markdown
convention, and a build step that CI does not run. For a first Post of a few
hundred words that trade does not pay. The prose cost is held down instead by
`PostProse`: a Post content module writes plain `<h2>`, `<p>`, `<ul>`,
`<blockquote>` and links, and the styling comes from one wrapper, so the file
is close to the HTML a Markdown renderer would have produced.

Every Post is published in every Language, enforced by the type system rather
than by a list of exceptions. `POST_COPY` is `Record<Language, Record<PostSlug,
PostCopy>>` and `POST_CONTENT` is `Record<PostSlug, Record<Language, ...>>`,
where `PostSlug` is derived from the invariant list, so adding a Post without
its Czech copy or body is a compile error. There is no
`POSTS_AWAITING_TRANSLATION`: the Language Picker, the sitemap and the
`hreflang` alternates can assume that every Post path exists in every Language.

Posts are published when they are merged. There is no draft state; a Post that
is not ready stays on a branch.

## Consequences

- A Post must be written in English and Czech before it can be merged. That is
  the price of the Language Picker never landing on a missing page.
- The same drift risk as a Case Study: a fact corrected in one Language can be
  left wrong in the other. `content/blog/blog.test.ts` proves only that each
  translated Post renders different text from the English one.
- Revisit MDX when writing Posts in TSX becomes the thing that stops them from
  being written. Moving is mechanical: the loader in `content/blog/post-content.ts`
  returns a component either way, and nothing outside it knows the format.
