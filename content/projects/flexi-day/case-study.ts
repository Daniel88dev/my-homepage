import type { CaseStudy, CaseStudyImage } from "@/content/projects/types";

const dir = "/project-imgs/flexi-day";

/**
 * Desktop captures are taken at a 1440x900 viewport on a 2x display, so the
 * intrinsic size is twice the layout size and the enlarged view still has
 * pixels to spare.
 */
const desktopShot = (name: string, alt: string): CaseStudyImage => ({
  src: `${dir}/${name}.webp`,
  alt,
  width: 2880,
  height: 1800,
});

/** Every screenshot the content renders. Captured from a seeded local stack. */
export const shots = {
  calendar: desktopShot(
    "calendar",
    "The flexiday team calendar for one month, with vacation, home office and sick days for four people shown as colour-coded chips."
  ),
  dashboard: desktopShot(
    "dashboard",
    "The flexiday dashboard: pending approvals, who is out today, upcoming leave, the month calendar and a balance summary."
  ),
  requests: desktopShot(
    "requests",
    "The requests page listing each request with its type, dates, state and the approve and decline actions."
  ),
  groups: desktopShot(
    "groups",
    "A group's member list with each person's view, admin and approver permissions, and tabs for quotas, invites, settings and mirroring."
  ),
  report: desktopShot(
    "report",
    "The report page with per-person balances for the year and an Excel export."
  ),
  calendarSync: desktopShot(
    "calendar-sync",
    "The new calendar feed dialog: choose whose records and which leave types to include, with a live month preview."
  ),
  holidays: desktopShot(
    "holidays",
    "A group's settings: the working days of the week, and public holidays set to the Czech Republic."
  ),
  localisation: desktopShot(
    "localisation",
    "The same dashboard in Czech, with the Czech state holiday marked on 28 September."
  ),
  landing: desktopShot("landing", "The public flexiday landing page in dark mode."),
  mobile: {
    src: `${dir}/mobile-request.webp`,
    alt: "The new request form on a phone: leave type, date range and a note.",
    width: 1170,
    height: 2532,
  } satisfies CaseStudyImage,
};

/**
 * The section anchors, in page order. Invariant: the sticky section navigation
 * links to these ids and every Language's content module builds its sections
 * from them, so an id can never drift from the one being linked to. The labels
 * are prose, and live in the content module beside the sections they name.
 */
export const SECTION_IDS = {
  hero: "hero",
  problem: "problem",
  features: "features",
  architecture: "architecture",
  stack: "stack",
  status: "status",
  learnings: "learnings",
} as const satisfies Record<string, string>;

export const flexiDayCaseStudy: CaseStudy = {
  heroImage: shots.calendar,
  ogImage: `${dir}/og.png`,
  images: Object.values(shots).map((shot) => shot.src),
  sectionIds: Object.values(SECTION_IDS),
};
