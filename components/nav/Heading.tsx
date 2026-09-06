import type { Language } from "@/lib/language";
import type { Dictionary } from "@/content/dictionary";
import { MyLinks } from "./components/MyLinks";
import { HeaderShell } from "./HeaderShell";
import { HeaderActions } from "./HeaderActions";

interface Props {
  lang: Language;
  dict: Dictionary;
}

/** The homepage's header. Its path is the home page's, in every Language. */
export const Heading = ({ lang, dict }: Props) => {
  return (
    <HeaderShell
      left={<MyLinks />}
      right={<HeaderActions lang={lang} path="/" dict={dict} />}
    />
  );
};
