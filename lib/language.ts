import { TUNNEL_ROUTE } from "./site";

export const LANGUAGES = ["en", "cs"] as const;

export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  cs: "Čeština",
};

export const DEFAULT_LANGUAGE: Language = "en";

export const isLanguage = (value: string): value is Language =>
  (LANGUAGES as readonly string[]).includes(value);

export const toLanguage = (value: string): Language =>
  isLanguage(value) ? value : DEFAULT_LANGUAGE;

export const languagePath = (lang: Language, path: string): string => {
  if (lang === DEFAULT_LANGUAGE) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
};

const X_DEFAULT = "x-default";

export type LanguageAlternates = Partial<
  Record<Language | typeof X_DEFAULT, string>
>;

export const languageAlternates = (
  path: string,
  publishedIn: readonly Language[],
  toUrl: (path: string) => string = (p) => p
): LanguageAlternates => {
  const alternates: LanguageAlternates = {};
  for (const lang of publishedIn) {
    alternates[lang] = toUrl(languagePath(lang, path));
  }
  alternates[X_DEFAULT] = toUrl(languagePath(DEFAULT_LANGUAGE, path));
  return alternates;
};

const unprefixedPath = (pathname: string): string => {
  const [, firstSegment = "", ...rest] = pathname.split("/");
  if (!isLanguage(firstSegment)) return pathname;
  return rest.length > 0 ? `/${rest.join("/")}` : "/";
};

export const languageSwitchTarget = (
  pathname: string,
  target: Language,
  counterparts: readonly string[]
): string => {
  const path = unprefixedPath(pathname);
  return languagePath(target, counterparts.includes(path) ? path : "/");
};

export const languageRewriteTarget = (pathname: string): string | null => {
  const [, firstSegment = ""] = pathname.split("/");
  if (isLanguage(firstSegment)) return null;

  if (pathname.startsWith("/_next/") || pathname === TUNNEL_ROUTE) return null;

  if (pathname.split("/").pop()?.includes(".")) return null;

  return pathname === "/"
    ? `/${DEFAULT_LANGUAGE}`
    : `/${DEFAULT_LANGUAGE}${pathname}`;
};
