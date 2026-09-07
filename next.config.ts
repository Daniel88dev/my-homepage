import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs/config";
import { TUNNEL_ROUTE } from "./lib/site";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  images: {
    qualities: [75, 90],
  },
};

export default withSentryConfig(nextConfig, {
  org: "freelancer-ldp",
  project: "my-homepage",

  silent: !process.env.CI,

  widenClientFileUpload: true,

  tunnelRoute: TUNNEL_ROUTE,

  sourcemaps: {
    disable: true,
  },
});
