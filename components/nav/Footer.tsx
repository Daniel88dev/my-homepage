import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";

const footerLink =
  "inline-flex items-center gap-[0.4rem] text-text-muted transition-colors duration-200 hover:text-text";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border bg-[linear-gradient(180deg,var(--background),var(--background-dark))]">
      <div className="mx-auto flex max-w-[1150px] flex-wrap items-center justify-between gap-[1.6rem] px-[9.6rem] py-[4rem] font-mono text-2xs text-text-muted max-md:px-[2.4rem]">
        <p>
          © {year} Daniel Hrynusiw
          <span className="text-brand">.</span>
        </p>
        <ul className="flex flex-wrap items-center gap-[2.4rem]">
          <li>
            <Link href="mailto:daniel@hrynusiw.cz" className={footerLink}>
              Email
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/daniel-hrynusiw"
              target="_blank"
              rel="noopener noreferrer"
              className={footerLink}
            >
              LinkedIn <PiArrowUpRight aria-hidden />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Daniel88dev/my-homepage"
              target="_blank"
              rel="noopener noreferrer"
              className={footerLink}
            >
              Site source <PiArrowUpRight aria-hidden />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
