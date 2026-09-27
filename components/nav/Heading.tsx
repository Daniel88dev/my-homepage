import type { Language } from "@/lib/language";
import type { Dictionary } from "@/content/dictionary";
import { MyLinks } from "./components/MyLinks";
import { HeaderShell } from "./HeaderShell";
import { HeaderActions } from "./HeaderActions";

interface Props {
  lang: Language;
  dict: Dictionary;
}

export const Heading = ({ lang, dict }: Props) => {
  return (
    <HeaderShell
      left={
        <div>
          <div className="max-sm:hidden">
            <MyLinks />
          </div>
        </div>
      }
      right={<HeaderActions lang={lang} path="/" dict={dict} />}
    />
  );
};
