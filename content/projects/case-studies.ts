import dynamic from "next/dynamic";
import type { ComponentType } from "react";

/**
 * The long-form content of each Case Study, by slug. Adding a Case Study is a
 * content change: write the content module, add the line here. The Case Study
 * route is the only importer, and each module is a chunk of its own, so the
 * homepage bundle never pulls a case study or its building blocks.
 */
export const CASE_STUDY_CONTENT: Record<string, ComponentType> = {
  "flexi-day": dynamic(() => import("./flexi-day/case-study-content")),
};
