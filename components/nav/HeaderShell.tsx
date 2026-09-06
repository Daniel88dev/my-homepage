import { ReactNode } from "react";

interface Props {
  left: ReactNode;
  right: ReactNode;
}

/**
 * The site's sticky top bar. The homepage and every Case Study share it, so
 * height, blur and the border under it stay identical between them.
 */
export const HeaderShell = ({ left, right }: Props) => (
  <header className="sticky top-0 z-[var(--z-nav)] flex h-[calc(45px_+_3.6rem)] items-center justify-between border-b border-border bg-bg-opaque px-[3.6rem] backdrop-blur-md max-md:px-[2.4rem]">
    {left}
    {right}
  </header>
);
