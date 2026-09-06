/**
 * Public origin of this site. It is the root layout's metadata base, which is
 * what turns the paths pages write in their metadata into absolute URLs.
 * The fallback is the repository's declared homepage; set NEXT_PUBLIC_SITE_URL
 * in the deployment when the site moves to its own domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-homepage-one.vercel.app";

