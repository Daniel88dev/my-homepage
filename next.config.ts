import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs/config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  images: {
    // 75 is the default everywhere. Case Study screenshots are dense UI text,
    // and the enlarged view serves the full 2880px source, where 75 rings
    // around small glyphs; those images ask for 90.
    qualities: [75, 90],
  },
};

export default withSentryConfig(nextConfig, {
  org: "freelancer-ldp",
  project: "my-homepage",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  sourcemaps: {
    disable: true,
  },
});
