"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">

      <title>Something went wrong | Daniel Hrynusiw</title>
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          padding: "0 clamp(24px, 8vw, 96px)",
          background: "#0f1311",
          color: "#ebf1ee",
          font: '400 18px/1.6 ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div style={{ maxWidth: "60ch" }}>
          <p
            style={{
              margin: 0,
              color: "#2ee59d",
              fontSize: 13,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            }}
          >
            Error
          </p>
          <h1 style={{ margin: "20px 0 0", fontSize: 56, lineHeight: 1.05 }}>
            Something went wrong<span style={{ color: "#2ee59d" }}>.</span>
          </h1>
          <p style={{ margin: "32px 0", color: "#9aa8a1" }}>
            The page failed to render. The problem has been reported.
          </p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              background: "none",
              border: "none",
              borderBottom: "2px solid rgb(235 241 238 / 0.1)",
              padding: "0 0 4px",
              color: "#ebf1ee",
              font: "16px ui-monospace, SFMono-Regular, Menlo, monospace",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
