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
 * Everything about a Case Study except its long-form content. This half is
 * plain data, so the Projects list can carry it without pulling the content
 * module, and its building blocks, into the homepage bundle. The content is
 * loaded by the Case Study route instead.
 */
export interface CaseStudy {
  /** One-line pitch shown in the hero, beside the title. */
  pitch: string;
  /** Screenshot beside the pitch in the hero. */
  heroImage: CaseStudyImage;
  /** Page <title> and Open Graph title. */
  title: string;
  /** Meta description, under 160 characters. */
  description: string;
  /** Open Graph image, at least 1200x630, path under /public. */
  ogImage: string;
  /** Every screenshot path the content renders, so a test can check they exist. */
  images: string[];
  sections: CaseStudyNavItem[];
}

export interface Project {
  /** URL-safe identifier. Unique across projects. */
  slug: string;
  title: string;
  imgSrc: string;
  /** Main source repository, linked from the Project Card. */
  code: string;
  /** Public address of the deployed project. Empty string when there is none. */
  liveUrl: string;
  /** The Tech List, joined into one line on the Project Card. */
  tech: string[];
  description: string;
  /** Short content for the Project Dialog. */
  dialogContent: ReactElement;
  relatedRepositories?: RelatedRepository[];
  caseStudy?: CaseStudy;
}
