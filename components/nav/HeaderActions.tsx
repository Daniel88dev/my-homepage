import Link from "next/link";
import type { ReactNode } from "react";
import { PiArticle } from "react-icons/pi";
import { languagePath, type Language } from "@/lib/language";
import type { Dictionary } from "@/content/dictionary";
import { BLOG_PATH } from "@/content/blog/posts";
import { RESUME_PATH } from "@/content/resume/resume";
import { OutlineButton } from "../buttons/OutlineButton";
import { LanguagePicker } from "./LanguagePicker";

interface Props {
  lang: Language;

  path: string;
  dict: Dictionary;

  action?: ReactNode;
}

const isInBlog = (path: string) =>
  path === BLOG_PATH || path.startsWith(`${BLOG_PATH}/`);

export const HeaderActions = ({ lang, path, dict, action }: Props) => (
  <div className="flex items-center gap-[2.4rem] max-md:gap-[1.6rem]">
    <Link
      href={languagePath(lang, BLOG_PATH)}
      aria-current={path === BLOG_PATH ? "page" : undefined}
      className={`group inline-flex items-center gap-[0.6rem] text-xs font-medium underline-offset-[0.6rem] transition-colors duration-200 ${
        isInBlog(path)
          ? "text-brand underline decoration-brand decoration-2"
          : "text-text hover:text-brand"
      }`}
    >
      <PiArticle
        aria-hidden
        size="1.8rem"
        className="text-brand transition-transform duration-200 group-hover:-translate-y-px max-sm:hidden"
      />
      {dict.chrome.blog}
    </Link>
    <span aria-hidden className="h-[2rem] w-px bg-border" />
    <LanguagePicker lang={lang} path={path} label={dict.languagePicker.label} />
    {action ?? (
      <OutlineButton href={languagePath(lang, RESUME_PATH)}>
        {dict.chrome.resume}
      </OutlineButton>
    )}
  </div>
);
