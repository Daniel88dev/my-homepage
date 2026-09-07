import type { ReactElement } from "react";

export interface RelatedRepository {
  url: string;

  label: string;

  note?: string;
}

export interface CaseStudyNavItem {
  id: string;
  label: string;
}

export interface CaseStudyFigure {
  src: string;
  width: number;
  height: number;
}

export interface CaseStudyImage extends CaseStudyFigure {
  alt: string;
}

export interface CaseStudy {
  heroImage: CaseStudyFigure;

  ogImage: string;

  images: string[];

  sectionIds: string[];
}

export interface Project {
  slug: string;

  title: string;
  imgSrc: string;

  code: string;

  liveUrl: string;

  tech: string[];
  relatedRepositories?: RelatedRepository[];
  caseStudy?: CaseStudy;
}

export interface CaseStudyCopy {
  title: string;

  pitch: string;

  description: string;

  heroImageAlt: string;
}

export interface ProjectCopy {
  description: string;

  dialogContent: ReactElement;

  caseStudy?: CaseStudyCopy;
}

export type ProjectCopyBySlug = Record<string, ProjectCopy>;
