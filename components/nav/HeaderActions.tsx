import Link from "next/link";
import type { ReactNode } from "react";
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
      className={`font-mono text-2xs uppercase tracking-[0.06em] transition-colors duration-200 ${
        isInBlog(path) ? "text-brand" : "text-text-muted hover:text-text"
      }`}
    >
      {dict.chrome.blog}
    </Link>
    <LanguagePicker lang={lang} path={path} label={dict.languagePicker.label} />
    {action ?? (
      <OutlineButton href={languagePath(lang, RESUME_PATH)}>
        {dict.chrome.resume}
      </OutlineButton>
    )}
  </div>
);
