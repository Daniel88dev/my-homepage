import { describe, expect, it } from "vitest";
import { SITE_URL, TUNNEL_ROUTE } from "@/lib/site";
import robots from "./robots";

const SITE = SITE_URL;

describe("robots", () => {
  it("points at the sitemap", () => {
    expect(robots().sitemap).toBe(`${SITE}/sitemap.xml`);
  });

  it("keeps crawlers out of the error-reporting tunnel and nowhere else", () => {
    const rules = robots().rules;
    expect(Array.isArray(rules)).toBe(false);
    expect(rules).toEqual({
      userAgent: "*",
      allow: "/",
      disallow: TUNNEL_ROUTE,
    });
  });
});
