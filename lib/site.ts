/**
 * Public origin of this site, used to build absolute URLs for Open Graph tags.
 * The fallback is the repository's declared homepage; set NEXT_PUBLIC_SITE_URL
 * in the deployment when the site moves to its own domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-homepage-one.vercel.app";

export const absoluteUrl = (path: string): string =>
  new URL(path, SITE_URL).toString();
