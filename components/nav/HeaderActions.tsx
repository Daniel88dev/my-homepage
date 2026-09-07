import type { Language } from "@/lib/language";
import type { Dictionary } from "@/content/dictionary";
import { OutlineButton } from "../buttons/OutlineButton";
import { LanguagePicker } from "./LanguagePicker";

interface Props {
  lang: Language;

  path: string;
  dict: Dictionary;
}

export const HeaderActions = ({ lang, path, dict }: Props) => (
  <div className="flex items-center gap-[2.4rem] max-md:gap-[1.6rem]">
    <LanguagePicker lang={lang} path={path} label={dict.languagePicker.label} />
    <OutlineButton
      href="/Resume_DanielHrynusiw.pdf"
      target="_blank"
      rel="noopener"
    >
      {dict.chrome.resume}
    </OutlineButton>
  </div>
);
