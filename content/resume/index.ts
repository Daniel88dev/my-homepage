import type { Language } from "@/lib/language";
import { getResumeCopy } from "./copy";
import { RESUME_FACTS } from "./resume";
import type { Resume } from "./types";

export { RESUME_PATH, RESUME_PDF_PATH } from "./resume";
export type * from "./types";

export const getResume = (lang: Language): Resume => ({
  facts: RESUME_FACTS,
  copy: getResumeCopy(lang),
});
