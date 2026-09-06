import type { RelatedRepository } from "@/content/projects/types";

export const FLEXI_DAY_REPOSITORIES: RelatedRepository[] = [
  {
    url: "https://github.com/Daniel88dev/flexi-day",
    label: "Web app",
    note: "Next.js static-export SPA: the landing page and the signed-in product.",
  },
  {
    url: "https://github.com/Daniel88dev/flexi-day-be",
    label: "Backend",
    note: "Express 5 API, background jobs, and the Terraform for AWS.",
  },
  {
    url: "https://github.com/Daniel88dev/flexi-day-emails",
    label: "Emails",
    note: "react-email templates rendered at build time and synced to AWS SES.",
  },
  {
    url: "https://github.com/Daniel88dev/flexi-day-workspace",
    label: "Workspace",
    note: "The shell around the three repos: shared AI agent skills, a local dev CLI, an MCP server and cross-repo docs, so tests and tooling run from one place. Plain sibling clones rather than submodules, so each repo still releases on its own schedule.",
  },
];
