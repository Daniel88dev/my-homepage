import type { CaseStudy, CaseStudyFigure, CaseStudyImage } from "@/content/projects/types";

const dir = "/project-imgs/flexi-day";

const desktopShot = (name: string): CaseStudyFigure => ({
  src: `${dir}/${name}.webp`,
  width: 2880,
  height: 1800,
});

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

export const withAlt = (
  alt: Record<keyof typeof shots, string>
): Record<keyof typeof shots, CaseStudyImage> =>
  Object.fromEntries(
    Object.entries(shots).map(([name, figure]) => [
      name,
      { ...figure, alt: alt[name as keyof typeof shots] },
    ])
  ) as Record<keyof typeof shots, CaseStudyImage>;
