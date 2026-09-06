// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a user loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
//
// This must live in `instrumentation-client.ts` rather than `sentry.client.config.ts`:
// Next.js 16 builds with Turbopack by default, and the Sentry SDK only injects the
// client-side init through the `instrumentation-client.*` file convention there.

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://43f5244df94b6925bd6b2c8da629ab56@o4507832619237376.ingest.de.sentry.io/4507873408385104",

  // Add optional integrations for additional features
  integrations: [Sentry.replayIntegration()],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

// Required by the Sentry SDK to instrument navigations. This hook fires for App
// Router navigations only, so it is live for the first time now that the Pages
// Router is gone.
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
