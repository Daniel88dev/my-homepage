import type { ComponentType } from "react";

/**
 * The long-form content of each Case Study, by slug. Adding a Case Study is a
 * content change: write the content module, add the line here. The Case Study
 * route awaits the loader, so the homepage bundle never pulls a case study or
 * its building blocks.
 *
 * These are plain dynamic imports rather than `next/dynamic`. Under the App
 * Router a Server Component importing a Client Component already splits at the
 * boundary, so the wrapper bought no code splitting — only a client-side
 * loading state this page never used.
 */
export const CASE_STUDY_CONTENT: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  "flexi-day": () => import("./flexi-day/case-study-content"),
};
