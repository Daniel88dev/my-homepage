import { notFound } from "next/navigation";

/**
 * This route exists only to route unmatched paths into the not-found boundary.
 * It renders nothing; it throws immediately, and `../not-found.tsx` is what the
 * visitor sees — inside the real root layout, with the real fonts and styles.
 *
 * Without it, an unmatched path has no segment to resolve to and the framework
 * serves its own bare default. The alternative is the `globalNotFound`
 * experimental flag, which would mean a second entry point re-declaring `html`,
 * `body`, the fonts and the stylesheet. This file is the cheaper half of that
 * trade and needs no flag.
 *
 * Deliberately no `metadata` export: the title belongs to the not-found page
 * itself, because a 404 also arrives here from `dynamicParams = false` on the
 * Case Study route, which never renders this module.
 *
 * Do not add `loading.tsx` here or await anything before `notFound()`: the
 * status code can only be set before the response body starts streaming, and
 * this route's whole point is to produce a real 404 rather than a soft one.
 */
export default function UnmatchedPath(): never {
  notFound();
}
