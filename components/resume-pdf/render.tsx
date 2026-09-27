import { renderToBuffer } from "@react-pdf/renderer";
import type { Language } from "@/lib/language";
import { getDictionary } from "@/content/dictionary";
import { getResume, type YearMonth } from "@/content/resume";
import { registerResumeFonts } from "./fonts";
import { ResumePdf } from "./ResumePdf";

export const renderResumePdf = (lang: Language, now: YearMonth) => {
  registerResumeFonts();
  return renderToBuffer(
    <ResumePdf
      lang={lang}
      resume={getResume(lang)}
      labels={getDictionary(lang).resume}
      now={now}
    />
  );
};
