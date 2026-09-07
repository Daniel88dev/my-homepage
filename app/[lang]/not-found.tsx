import Link from "next/link";
import { PiArrowLeft } from "react-icons/pi";

export default function NotFound() {
  return (
    <>
      <title>Page not found | Daniel Hrynusiw</title>
      <main className="relative flex min-h-dvh items-center overflow-hidden px-[9.6rem] max-md:px-[2.4rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[10%] top-[20%] z-0 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(closest-side,rgb(46_229_157/0.09),transparent)] blur-2xl"
        />
        <div className="relative z-10 max-w-[60ch]">
          <p className="eyebrow mb-[2rem]">Error 404</p>
          <h1 className="text-2xl font-bold max-md:text-xl">
            Nothing here<span className="text-brand">.</span>
          </h1>
          <p className="my-[3.2rem] text-sm text-text-muted">
            The page you asked for doesn&apos;t exist or has moved. Everything
            worth seeing lives on the home page.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-[0.8rem] border-b-2 border-border pb-[0.4rem] font-mono text-xs text-text transition-[color,border-color] duration-200 hover:border-brand hover:text-brand"
          >
            <PiArrowLeft
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-x-[2px]"
            />
            Back to home
          </Link>
        </div>
      </main>
    </>
  );
}
