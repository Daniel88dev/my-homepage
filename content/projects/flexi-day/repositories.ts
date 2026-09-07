import type { RelatedRepository } from "@/content/projects/types";

/**
 * The flexiday repositories. URLs and labels are invariant — defined once, so
 * a link can never be updated in one Language and not the other. What each
 * repository is *for* is a sentence a visitor reads, so it comes from the
 * Language's own content module through `withNotes`.
 */
const REPOSITORIES = [
  { url: "https://github.com/Daniel88dev/flexi-day", label: "Web app" },
  { url: "https://github.com/Daniel88dev/flexi-day-be", label: "Backend" },
  { url: "https://github.com/Daniel88dev/flexi-day-emails", label: "Emails" },
  { url: "https://github.com/Daniel88dev/flexi-day-workspace", label: "Workspace" },
] as const satisfies readonly Omit<RelatedRepository, "note">[];

/** The label of each repository, and the key its note is written under. */
export type FlexiDayRepositoryLabel = (typeof REPOSITORIES)[number]["label"];

/**
 * Pairs the invariant repositories with one Language's notes. Keyed by label,
 * so a Language that omits a repository, or misspells one, is a compile error.
 */
export const withNotes = (
  notes: Record<FlexiDayRepositoryLabel, string>
): RelatedRepository[] =>
  REPOSITORIES.map((repo) => ({ ...repo, note: notes[repo.label] }));

/** What each repository is for, in English. */
const EN_REPOSITORY_NOTES: Record<FlexiDayRepositoryLabel, string> = {
  "Web app":
    "Next.js static-export SPA: the landing page and the signed-in product.",
  "Backend":
    "Express 5 API, background jobs, and the Terraform for AWS.",
  "Emails":
    "react-email templates rendered at build time and synced to AWS SES.",
  "Workspace":
    "The shell around the three repos: shared AI agent skills, a local dev CLI, an MCP server and cross-repo docs, so tests and tooling run from one place. Plain sibling clones rather than submodules, so each repo still releases on its own schedule.",
};

/**
 * The list carried by the Project, and the one the English Case Study renders.
 * The Project Dialog reads its notes from here in every Language, so they stay
 * English there for now; the Case Study builds its own list per Language.
 */
export const FLEXI_DAY_REPOSITORIES: RelatedRepository[] = withNotes(EN_REPOSITORY_NOTES);
