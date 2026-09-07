import Link from "next/link";
import { Fragment } from "react";
import {
  LANGUAGES,
  LANGUAGE_NAMES,
  languageSwitchTarget,
  type Language,
} from "@/lib/language";
import { publishedPaths } from "@/content/pages";

interface Props {
  lang: Language;

  path: string;

  label: string;
}

export const LanguagePicker = ({ lang, path, label }: Props) => (
  <nav
    aria-label={label}
    className="flex items-center gap-[0.6rem] font-mono text-2xs uppercase tracking-[0.06em]"
  >
    {LANGUAGES.map((language, i) => {
      const current = language === lang;
      return (
        <Fragment key={language}>
          {i > 0 && (
            <span aria-hidden className="text-border">
              /
            </span>
          )}
          <Link
            href={languageSwitchTarget(path, language, publishedPaths(language))}

            hrefLang={language}
            lang={language}
            aria-current={current ? "true" : undefined}
            className={
              current
                ? "text-brand"
                : "text-text-muted transition-colors duration-200 hover:text-text"
            }
          >
            {language}

            <span className="sr-only"> {LANGUAGE_NAMES[language]}</span>
          </Link>
        </Fragment>
      );
    })}
  </nav>
);
