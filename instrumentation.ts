import type { Instrumentation } from "next";
import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

/**
 * Reports server-side request errors — Server Component renders, Route
 * Handlers, Server Actions — to Sentry. The framework calls this for every
 * error it catches on the server, so it covers the half that never reaches a
 * React error boundary. Together with app/global-error.tsx it replaces the
 * Pages Router `_error` page deleted in #33.
 *
 * Annotated against the framework's own contract rather than left to infer
 * Sentry's signature, because CI never builds and so nothing else here would
 * notice the two drifting apart.
 */
export const onRequestError: Instrumentation.onRequestError =
  Sentry.captureRequestError;
