import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://43f5244df94b6925bd6b2c8da629ab56@o4507832619237376.ingest.de.sentry.io/4507873408385104",

  integrations: [Sentry.replayIntegration()],

  tracesSampleRate: 1,

  replaysSessionSampleRate: 0.1,

  replaysOnErrorSampleRate: 1.0,

  debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
