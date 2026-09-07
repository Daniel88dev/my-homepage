# Case Study content is duplicated per Language, not assembled from fragments

Everything else translatable on the site is a value in a record. The Dictionary
is one module of interface strings per Language, typed against English; Project
Copy is one module of descriptions and Project Dialogs per Language, keyed by
slug. A Case Study is not: each Language gets its own complete content module —
a component that renders the whole page body, plus the section navigation that
names its own sections.

The deciding factor is that a Case Study's prose and its layout are the same
object. Its words are not a list of paragraphs: they are section titles and
ledes, figure captions, feature headings beside a screenshot, lesson titles with
their bodies, and sentences that carry inline emphasis and a link to the live
product. At the time of writing, roughly seventeen hundred words arranged
across seven anchored sections, three kinds of feature block, ten figures and a
diagram.

Two alternatives were considered and rejected.

**A dictionary of fragments** — the shape used for the Dictionary and Project
Copy — would key every one of those strings and leave the layout in a shared
skeleton. It fails on both halves of the trade. The reviewer, who is the one
person who has to judge whether the Czech reads well, would be reading a list of
several hundred keyed fragments instead of the page; and the skeleton would have
to grow a parameter for every structural difference a translation wants, because
a translated sentence does not reliably keep the same emphasis, the same link
position or the same clause order. The layout ends up duplicated inside the
skeleton's conditionals anyway, only less visibly.

**A markup-based format** — MDX, or Markdown with a component registry — moves
the prose out of TypeScript so it reads as a document. It buys the reviewable
prose, but at the cost of a build-time toolchain, a component-in-Markdown
convention, and a second way for content to exist in a repository whose whole
content layer is otherwise plain typed modules. The Case Study is
component-first rather than prose-first: it is mostly figures, splits and tiles
with text inside them, so most of the file would be JSX in a Markdown file. It
stays worth revisiting for a blog, where the ratio is the other way round.

## Consequences

- Structure can drift between Languages, and only a test can see it. The
  section anchors are invariant (`SECTION_IDS`), and the sticky section
  navigation links to them; a translation that dropped a section, renamed an
  anchor or reordered the navigation would leave the navigation pointing at
  anchors that are not on the page, and nothing else would fail. That risk is
  paid for in `content/projects/projects.test.ts`, which asserts, per Language,
  that the navigation labels exactly the invariant ids in page order, and that
  every Language's module renders the same anchors as English's. It does not
  assert that a section exists at all: the hero anchor is rendered by the route
  rather than by any content module, and a section dropped from every Language
  at once is a content decision, not drift. This is a guarantee held by test
  rather than by structure, and that is the deliberate trade.
- The same test has to tell a translation from a copy. Duplication makes `cp` a
  plausible first step, and a copied module is indistinguishable from a
  translated one by identity — it builds a fresh element tree either way. The
  test therefore compares the *text* walked out of that tree, per section, so
  translating six sections of seven fails by name. It proves no more than that:
  a section translated word for word except one sentence still passes, and
  catching that is review's job.
- A fact corrected in one Language can be left wrong in the other. Nothing
  structural prevents it, because there is no shared source for the sentences.
  What is shared is everything a fact usually lives in: the Tech List, the
  repositories, the Live URL and the screenshots are on the Project, and the
  section anchors are invariant. Prose that states a fact twice is reviewed, not
  enforced.
- Adding a Language to a Case Study is a copy, a translation and one registry
  line. `CASE_STUDY_CONTENT` is a total `Record<Language, ...>`, so forgetting
  the line is a compile error, and `CASE_STUDIES_AWAITING_TRANSLATION` makes the
  temporary state of pointing a Language at English impossible to leave behind.
- Prose that lives in a shared component has to be lifted out of it. The
  architecture diagram is drawn in a component; its caption is running prose in
  the page's flow, so it became a prop supplied by each Language's module. Its
  node labels did not, being technology names. Nor did its `<title>` and
  `<desc>`, which are the drawing's alt text and follow the invariant `alt` of
  every screenshot — though that reading sits awkwardly beside the glossary's
  Dictionary, which claims "the accessible names that are never shown". The two
  readings disagree and this decision follows the screenshots; moving those two
  strings into the Dictionary is a small change if the glossary is meant to
  win.
