export const PUBLIC_SITE_URL = "https://hrynusiwdaniel.com";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? PUBLIC_SITE_URL;

export const absoluteSiteUrl = (path: string): string => {
  const url = new URL(path, SITE_URL).toString();

  return url.endsWith("/") ? url.slice(0, -1) : url;
};

export const TUNNEL_ROUTE = "/monitoring";
