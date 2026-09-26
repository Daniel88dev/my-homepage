"use client";

import { createContext, use, type ReactNode } from "react";

export interface ScreenshotLabels {
  enlargeScreenshot: string;
  closeEnlargedScreenshot: string;
}

const ScreenshotLabelsContext = createContext<ScreenshotLabels | null>(
  null
);

export const ScreenshotLabelsProvider = ({
  labels,
  children,
}: {
  labels: ScreenshotLabels;
  children: ReactNode;
}) => (
  <ScreenshotLabelsContext value={labels}>{children}</ScreenshotLabelsContext>
);

export const useScreenshotLabels = (): ScreenshotLabels => {
  const labels = use(ScreenshotLabelsContext);
  if (!labels) {
    throw new Error(
      "Screenshot labels are missing. Render this inside CaseStudyLayout."
    );
  }
  return labels;
};
