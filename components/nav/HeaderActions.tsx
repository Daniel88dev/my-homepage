import type { ReactNode } from "react";
import { languagePath, type Language } from "@/lib/language";
import type { Dictionary } from "@/content/dictionary";
import { RESUME_PATH } from "@/content/resume/resume";
import { OutlineButton } from "../buttons/OutlineButton";
import { LanguagePicker } from "./LanguagePicker";

interface Props {
  lang: Language;

  path: string;
  dict: Dictionary;

  action?: ReactNode;
}

export const HeaderActions = ({ lang, path, dict, action }: Props) => (
  <div className="flex items-center gap-[2.4rem] max-md:gap-[1.6rem]">
    <LanguagePicker lang={lang} path={path} label={dict.languagePicker.label} />
    {action ?? (
      <OutlineButton href={languagePath(lang, RESUME_PATH)}>
        {dict.chrome.resume}
      </OutlineButton>
    )}
  </div>
);
