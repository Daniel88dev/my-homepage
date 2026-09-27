import "@/styles/resume.css";
import { languagePath, type Language } from "@/lib/language";
import { getDictionary } from "@/content/dictionary";
import { getResume, RESUME_PDF_PATH } from "@/content/resume";
import { currentMonth } from "@/content/resume/timeline";
import { CareerBand } from "./CareerBand";
import { ResumeContact } from "./ResumeContact";
import { ResumeExperience } from "./ResumeExperience";
import { ResumeHero } from "./ResumeHero";
import { ResumeLayout } from "./ResumeLayout";
import { ResumeLearning } from "./ResumeLearning";
import { ResumeSkills } from "./ResumeSkills";

export const ResumePage = ({ lang }: { lang: Language }) => {
  const dict = getDictionary(lang);
  const resume = getResume(lang);
  const labels = dict.resume;
  const now = currentMonth();
  const pdfHref = languagePath(lang, RESUME_PDF_PATH);

  return (
    <ResumeLayout lang={lang} dict={dict} pdfHref={pdfHref}>
      <ResumeHero resume={resume} labels={labels} pdfHref={pdfHref} />
      <CareerBand resume={resume} labels={labels} now={now} />
      <ResumeExperience lang={lang} resume={resume} labels={labels} now={now} />
      <ResumeSkills resume={resume} labels={labels} />
      <ResumeLearning resume={resume} labels={labels} />
      <ResumeContact resume={resume} labels={labels} />
    </ResumeLayout>
  );
};
