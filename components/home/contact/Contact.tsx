import { Reveal } from "@/components/utils/Reveal";
import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";

const inlineLink =
  "text-text underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-brand hover:decoration-brand";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[48rem] w-[80rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(46_229_157/0.08),transparent)] blur-2xl"
      />
      <div className="relative z-10 mx-auto max-w-[720px] text-center">
        <Reveal width="100%">
          <p className="eyebrow mb-[2rem]">04 · Get in touch</p>
        </Reveal>
        <Reveal width="100%">
          <h2 className="text-2xl font-bold max-md:text-xl">
            Let&apos;s build something
            <span className="text-brand">.</span>
          </h2>
        </Reveal>
        <Reveal width="100%">
          <p className="mx-auto my-[3.2rem] max-w-[52ch] text-sm text-text-muted">
            Email is the fastest way to reach me. You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/daniel-hrynusiw"
              target="_blank"
              rel="noopener noreferrer"
              className={inlineLink}
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link
              href="https://www.facebook.com/danielhrynusiw/"
              target="_blank"
              rel="noopener noreferrer"
              className={inlineLink}
            >
              Facebook
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link
            href="mailto:daniel@hrynusiw.cz"
            className="group mx-auto inline-flex items-center gap-[1rem] border-b-2 border-border pb-[0.6rem] font-mono text-md text-text transition-[color,border-color] duration-200 hover:border-brand hover:text-brand max-md:text-sm"
          >
            daniel@hrynusiw.cz
            <PiArrowUpRight
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
