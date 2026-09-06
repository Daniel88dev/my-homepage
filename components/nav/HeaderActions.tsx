import type { Language } from "@/lib/language";
import type { Dictionary } from "@/content/dictionary";
import { OutlineButton } from "../buttons/OutlineButton";
import { LanguagePicker } from "./LanguagePicker";

interface Props {
  lang: Language;
  /** The current page's path, without a Language prefix. */
  path: string;
  dict: Dictionary;
}

/**
 * The right-hand end of the shared header: the Language Picker, then the way
 * to the resume. One component rather than two copies, so the Picker is in the
 * same place on the homepage and on a Case Study by construction rather than
 * by both of them happening to agree.
 */
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
