import type { Language } from "@/lib/language";
import type { Resume } from "./types";
import { EN_RESUME } from "./en";
import { CS_RESUME } from "./cs";

export type { Resume } from "./types";

export const RESUME_PATH = "/resume";

export const RESUME_PDF_PATH = "/resume/pdf";

export const RESUMES: Record<Language, Resume> = {
  en: EN_RESUME,
  cs: CS_RESUME,
};

export const getResume = (lang: Language): Resume => RESUMES[lang];

export const resumePdfFilename = (lang: Language): string =>
  `Resume_DanielHrynusiw_${lang}.pdf`;
