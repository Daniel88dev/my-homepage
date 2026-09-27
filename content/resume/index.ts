import type { Language } from "@/lib/language";
import type { Resume } from "./types";
import { EN_RESUME } from "./en";

export type { Resume } from "./types";

export const RESUME_PATH = "/resume";

export const RESUME_PDF_PATH = "/Resume_DanielHrynusiw.pdf";

export const RESUMES: Partial<Record<Language, Resume>> = {
  en: EN_RESUME,
};

export const RESUMES_AWAITING_TRANSLATION: readonly Language[] = ["cs"];

export const getResume = (lang: Language): Resume | undefined => RESUMES[lang];
