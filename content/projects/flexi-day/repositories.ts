import type { RelatedRepository } from "@/content/projects/types";

const REPOSITORIES = [
  { url: "https://github.com/Daniel88dev/flexi-day", label: "Web app" },
  { url: "https://github.com/Daniel88dev/flexi-day-be", label: "Backend" },
  { url: "https://github.com/Daniel88dev/flexi-day-emails", label: "Emails" },
  { url: "https://github.com/Daniel88dev/flexi-day-workspace", label: "Workspace" },
] as const satisfies readonly Omit<RelatedRepository, "note">[];

export type FlexiDayRepositoryLabel = (typeof REPOSITORIES)[number]["label"];

export const withNotes = (
  notes: Record<FlexiDayRepositoryLabel, string>
): RelatedRepository[] =>
  REPOSITORIES.map((repo) => ({ ...repo, note: notes[repo.label] }));

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

export const FLEXI_DAY_REPOSITORIES: RelatedRepository[] = withNotes(EN_REPOSITORY_NOTES);
