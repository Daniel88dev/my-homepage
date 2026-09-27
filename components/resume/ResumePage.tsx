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
      <div className="mx-auto max-w-[1150px] px-[9.6rem] max-md:px-[2.4rem] lg:grid lg:grid-cols-[minmax(0,1fr)_30rem] lg:gap-x-[6.4rem] print:block print:px-0">
        <div className="min-w-0">
          <ResumeExperience
            lang={lang}
            resume={resume}
            labels={labels}
            now={now}
          />
          <ResumeLearning resume={resume} labels={labels} />
        </div>
        <ResumeSkills resume={resume} labels={labels} />
      </div>
      <ResumeContact resume={resume} labels={labels} />
    </ResumeLayout>
  );
};
