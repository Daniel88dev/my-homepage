import { renderToBuffer } from "@react-pdf/renderer";
import type { Language } from "@/lib/language";
import { absoluteSiteUrl } from "@/lib/site";
import { getDictionary } from "@/content/dictionary";
import { getResume } from "@/content/resume";
import type { ResumeDate } from "@/content/resume/types";
import { registerResumeFonts } from "./fonts";
import { ResumePdf } from "./ResumePdf";

export const renderResumePdf = (lang: Language, asOf: ResumeDate) => {
  registerResumeFonts();
  return renderToBuffer(
    <ResumePdf
      lang={lang}
      resume={getResume(lang)}
      labels={getDictionary(lang).resume}
      siteUrl={absoluteSiteUrl("/")}
      asOf={asOf}
    />
  );
};
