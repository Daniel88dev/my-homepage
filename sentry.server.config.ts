import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://43f5244df94b6925bd6b2c8da629ab56@o4507832619237376.ingest.de.sentry.io/4507873408385104",

  tracesSampleRate: 1,

  debug: false,
});
