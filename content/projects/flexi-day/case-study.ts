import type { CaseStudy, CaseStudyFigure, CaseStudyImage } from "@/content/projects/types";

const dir = "/project-imgs/flexi-day";

/**
 * Desktop captures are taken at a 1440x900 viewport on a 2x display, so the
 * intrinsic size is twice the layout size and the enlarged view still has
 * pixels to spare.
 */
const desktopShot = (name: string): CaseStudyFigure => ({
  src: `${dir}/${name}.webp`,
  width: 2880,
  height: 1800,
});

/**
 * Every screenshot the content renders, captured from a seeded local stack.
 * Invariant: the same files in every Language. The alt text is supplied by
 * the content module doing the rendering, through `withAlt` below.
 */
export const shots = {
  calendar: desktopShot("calendar"),
  dashboard: desktopShot("dashboard"),
  requests: desktopShot("requests"),
  groups: desktopShot("groups"),
  report: desktopShot("report"),
  calendarSync: desktopShot("calendar-sync"),
  holidays: desktopShot("holidays"),
  localisation: desktopShot("localisation"),
  landing: desktopShot("landing"),
  mobile: {
    src: `${dir}/mobile-request.webp`,
    width: 1170,
    height: 2532,
  } satisfies CaseStudyFigure,
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

/**
 * Pairs the invariant figures with one Language's alt text. The parameter is
 * keyed by `shots`, so a Language that forgets a screenshot, or misspells one,
 * is a compile error rather than an image no screen reader can describe.
 */
export const withAlt = (
  alt: Record<keyof typeof shots, string>
): Record<keyof typeof shots, CaseStudyImage> =>
  Object.fromEntries(
    Object.entries(shots).map(([name, figure]) => [
      name,
      { ...figure, alt: alt[name as keyof typeof shots] },
    ])
  ) as Record<keyof typeof shots, CaseStudyImage>;
