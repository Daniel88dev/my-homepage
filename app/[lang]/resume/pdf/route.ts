import { LANGUAGES, toLanguage } from "@/lib/language";
import { resumePdfFilename } from "@/content/resume";
import { renderResumePdf } from "@/components/resume-pdf/render";

export const dynamic = "force-static";

export const dynamicParams = false;

export const generateStaticParams = () => LANGUAGES.map((lang) => ({ lang }));

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string }> }
) {
  const language = toLanguage((await params).lang);
  const now = new Date();
  const pdf = await renderResumePdf(language, {
    year: now.getUTCFullYear(),
    month: now.getUTCMonth() + 1,
  });

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${resumePdfFilename(language)}"`,
    },
  });
}
