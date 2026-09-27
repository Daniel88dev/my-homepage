import type { Language } from "@/lib/language";
import type { ResumeCopy } from "../types";
import { CS_RESUME_COPY } from "./cs";
import { EN_RESUME_COPY } from "./en";

export const RESUME_COPY: Record<Language, ResumeCopy> = {
  en: EN_RESUME_COPY,
  cs: CS_RESUME_COPY,
};

export const getResumeCopy = (lang: Language): ResumeCopy => RESUME_COPY[lang];
