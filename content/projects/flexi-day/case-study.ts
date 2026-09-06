import type { CaseStudy, CaseStudyImage, CaseStudyNavItem } from "@/content/projects/types";

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
 * The sections, in page order. The content module builds each section from the
 * entry here, so an id can never drift from the one the navigation links to.
 */
export const SECTIONS = {
  hero: { id: "hero", label: "Overview" },
  problem: { id: "problem", label: "The problem" },
  features: { id: "features", label: "What it does" },
  architecture: { id: "architecture", label: "Architecture" },
  stack: { id: "stack", label: "Tech list" },
  status: { id: "status", label: "Status" },
  learnings: { id: "learnings", label: "What I learned" },
} satisfies Record<string, CaseStudyNavItem>;

export const flexiDayCaseStudy: CaseStudy = {
  title: "flexiday, a calm calendar for team time off",
  pitch:
    "The shared calendar for team time off. Request in seconds, approve in a click, and always know who is in and who is away.",
  description:
    "How I built and run flexiday: a vacation and day-off product for teams, shipped as a static Next.js app, an Express API and an email pipeline on AWS.",
  heroImage: shots.calendar,
  ogImage: `${dir}/og.png`,
  images: Object.values(shots).map((shot) => shot.src),
  sections: Object.values(SECTIONS),
};
