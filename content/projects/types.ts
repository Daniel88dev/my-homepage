import type { ReactElement } from "react";

/**
 * A repository that belongs to a Project. Projects with several repositories
 * list them in the Project Dialog and the Case Study; the Project Card links
 * only to `code`.
 */
export interface RelatedRepository {
  url: string;
  /** Short role label: "Web app", "Backend", "Emails", "Workspace". */
  label: string;
  /** One sentence on what the repository is for. */
  note?: string;
}

/** One entry in a Case Study's section navigation. */
export interface CaseStudyNavItem {
  id: string;
  label: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * The invariant half of a Case Study: the parts that are the same whatever
 * Language it is read in. Its prose lives in Project Copy, and its long-form
 * content in a per-Language content module, so the Projects list can carry
 * this without pulling either into the homepage bundle.
 */
export interface CaseStudy {
  /** Screenshot beside the pitch in the hero. */
  heroImage: CaseStudyImage;
  /** Open Graph image, at least 1200x630, path under /public. */
  ogImage: string;
  /** Every screenshot path the content renders, so a test can check they exist. */
  images: string[];
  /**
   * The section anchors, in page order. Invariant because the navigation links
   * to them and a translation that renamed one would break it silently. Each
   * Language's content module supplies the labels.
   */
  sectionIds: string[];
}

/**
 * The invariant half of a Project: the facts, which are the same in every
 * Language. Its prose is Project Copy, keyed by the same slug.
 */
export interface Project {
  /** URL-safe identifier. Unique across projects. Keys Project Copy. */
  slug: string;
  /** The product's own name, which is not translated. */
  title: string;
  imgSrc: string;
  /** Main source repository, linked from the Project Card. */
  code: string;
  /** Public address of the deployed project. Empty string when there is none. */
  liveUrl: string;
  /** The Tech List, joined into one line on the Project Card. */
  tech: string[];
  relatedRepositories?: RelatedRepository[];
  caseStudy?: CaseStudy;
}

/** The prose of a Case Study that is short enough to live outside its content module. */
export interface CaseStudyCopy {
  /** Page <title> and Open Graph title. */
  title: string;
  /** One-line pitch shown in the hero, beside the title. */
  pitch: string;
  /** Meta description, under 160 characters. */
  description: string;
}

/**
 * Project Copy: the half of a Project's content that differs by Language.
 * Everything a visitor reads and nothing a visitor clicks — repository URLs,
 * the Live URL and the Tech List stay on the Project, so they cannot be
 * updated in one Language and not the other.
 */
export interface ProjectCopy {
  description: string;
  /** Short content for the Project Dialog. */
  dialogContent: ReactElement;
  /** Present exactly when the Project has a Case Study. */
  caseStudy?: CaseStudyCopy;
}

/** One Language's Project Copy, keyed by Project slug. */
export type ProjectCopyBySlug = Record<string, ProjectCopy>;
