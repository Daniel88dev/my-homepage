import { languagePath, DEFAULT_LANGUAGE, type Language } from "@/lib/language";
import type { Dictionary } from "@/content/dictionary";
import { RESUME_PATH, getResume } from "@/content/resume";
import { OutlineButton } from "../buttons/OutlineButton";
import { LanguagePicker } from "./LanguagePicker";

interface Props {
  lang: Language;

  path: string;
  dict: Dictionary;
}

const resumeHref = (lang: Language): string =>
  languagePath(getResume(lang) ? lang : DEFAULT_LANGUAGE, RESUME_PATH);

export const HeaderActions = ({ lang, path, dict }: Props) => (
  <div className="flex items-center gap-[2.4rem] max-md:gap-[1.6rem]">
    <LanguagePicker lang={lang} path={path} label={dict.languagePicker.label} />
    <OutlineButton
      href={resumeHref(lang)}
      aria-current={path === RESUME_PATH ? "page" : undefined}
    >
      {dict.chrome.resume}
    </OutlineButton>
  </div>
);
