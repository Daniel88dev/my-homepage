"use client";

import { createContext, useContext, type ReactNode } from "react";

/**
 * The two accessible names a framed screenshot needs, already resolved to
 * plain strings. Functions cannot cross the server/client boundary, so a
 * Dictionary entry with a placeholder in it is composed from a prefix here
 * rather than passed as a template.
 */
export interface ScreenshotLabels {
  /** Prefixes a screenshot's alt text: "<this>: <alt>". */
  enlargeScreenshot: string;
  closeEnlargedScreenshot: string;
}

const ScreenshotLabelsContext = createContext<ScreenshotLabels | null>(
  null
);

/**
 * Carries those labels to the interactive leaves inside a Case Study.
 *
 * Context rather than props because the leaves that need them — a framed
 * screenshot and the Lightbox it opens — are rendered by the Case Study
 * content module, which the route renders with no props at all. Threading two
 * accessible names through every figure in a 460-line content module, in every
 * Language, is the alternative.
 */
export const ScreenshotLabelsProvider = ({
  labels,
  children,
}: {
  labels: ScreenshotLabels;
  children: ReactNode;
}) => (
  <ScreenshotLabelsContext.Provider value={labels}>
    {children}
  </ScreenshotLabelsContext.Provider>
);

/**
 * Throws rather than falling back to English: a silent English default is the
 * exact failure this whole Language split exists to make impossible.
 */
export const useScreenshotLabels = (): ScreenshotLabels => {
  const labels = useContext(ScreenshotLabelsContext);
  if (!labels) {
    throw new Error(
      "Screenshot labels are missing. Render this inside CaseStudyLayout."
    );
  }
  return labels;
};
