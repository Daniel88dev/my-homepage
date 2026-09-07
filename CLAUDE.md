@AGENTS.md

## Agent skills

### Issue tracker

Issues are tracked as GitHub Issues on `Daniel88dev/my-homepage` via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## Code style

**No comments in code.** Not JSDoc, not inline, not section banners. Name things
so the code reads without them, and put anything that still needs explaining in
this file, in `CONTEXT.md`, or in an ADR under `docs/adr/`.

## Constraints that are not visible in the code

These cost real time to rediscover, and none of them can be inferred from
reading the file they affect.

**This is not the Next.js in your training data.** Version 16. Read the bundled
docs at `node_modules/next/dist/docs/` before writing code against a framework
API. `middleware.ts` is now `proxy.ts`, runs on the Node runtime, and its
`runtime` config option throws.

**CI never builds.** `.github/workflows/ci.yml` runs lint, typecheck and tests
only. `.next/` is gitignored, so Next's generated route types do not exist
there: `LayoutProps`, `PageProps` and the typed exports of `next/root-params`
all fail typecheck in CI. Route props are hand-written for that reason.

**`next build` rejects a `params` type narrower than the framework's.** The
route validator wants `Promise<{ lang: string }>`, not `Promise<{ lang: Language }>`.
Widening is deliberate; `dynamicParams = false` is what narrows the values that
actually reach a route. Run `npx next build` before committing — CI will not
catch either of these.

**`proxy.ts` is wrapped in `Sentry.wrapMiddlewareWithSentry` by hand.** The SDK
applies that wrapper only from its webpack config; its Turbopack config
registers no wrapping rule, and Next 16 builds with Turbopack, so without the
manual call an error thrown in the proxy reaches Sentry through nothing.
Measured on `@sentry/nextjs` 10.73.0. Before removing it, check whether the
installed version's `config/turbopack/constructTurbopackConfig.js` has gained a
wrapping rule — see issue #40.

**The proxy matcher is the only thing keeping the rewrite off static assets.**
It excludes `_next/static`, `_next/image`, the Sentry tunnel, the sitemap, the
robots file and anything containing a dot. A mistake there rewrites every
stylesheet and image on the site into a page route, and no test can reach a
regex literal in `export const config`. `lib/language.ts` repeats the same
exclusions in a pure function, which is what the tests cover.

**`app/global-error.tsx` loads no stylesheet, font or shared component.** It
renders when the app itself is broken, so it must not depend on it.

**Translation completeness is enforced by the type system.** A Language's
Dictionary is typed against the English one; per-Language alt text is keyed off
the invariant figures; repository notes are keyed off the invariant labels. A
missing or misspelled key is a compile error rather than a blank space on the
live site. `content/projects/projects.test.ts` covers what types cannot: that a
translation is not a copy of the English.
