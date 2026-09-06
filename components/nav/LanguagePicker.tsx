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
  /** The Language being read, which is the one marked as current. */
  lang: Language;
  /** The current page's path, without a Language prefix. */
  path: string;
  /** Accessible name of the Picker, from the Dictionary. */
  label: string;
}

/**
 * Switches Language without leaving the page. Every Language is a plain link
 * to the same page in that Language, so the Picker works with no JavaScript,
 * and a Language that does not publish the current page links to its home page
 * rather than to a 404 — see `languageSwitchTarget`.
 *
 * A Server Component on purpose, unlike the other leaves in the header: it has
 * no state, and taking the path from the page rather than from `usePathname`
 * both keeps it off the client and sidesteps the question of what a hook
 * reports on a route the proxy rewrote.
 *
 * The visible label is the Language's code, which reads the same in every
 * Language; its name in its own language follows, for assistive technology
 * only.
 */
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
            // React 19 serialises this attribute name verbatim, so the markup
            // reads `hrefLang` rather than `hreflang`. HTML attribute names are
            // case-insensitive, so it parses as the standard attribute; it is
            // not a typo to "fix" into a string literal.
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
            {/* The accessible name has to start with the visible label, or
                voice control cannot act on what it says (WCAG 2.5.3), so the
                Language's full name is appended rather than replacing it via
                aria-label. `lang` above makes a screen reader pronounce it. */}
            <span className="sr-only"> {LANGUAGE_NAMES[language]}</span>
          </Link>
        </Fragment>
      );
    })}
  </nav>
);
