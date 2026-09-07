"use client";

import { createContext, useContext, type ReactNode } from "react";

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
  <ScreenshotLabelsContext.Provider value={labels}>
    {children}
  </ScreenshotLabelsContext.Provider>
);

export const useScreenshotLabels = (): ScreenshotLabels => {
  const labels = useContext(ScreenshotLabelsContext);
  if (!labels) {
    throw new Error(
      "Screenshot labels are missing. Render this inside CaseStudyLayout."
    );
  }
  return labels;
};
