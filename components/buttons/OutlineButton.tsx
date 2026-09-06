import { AnchorHTMLAttributes, ReactNode } from "react";

const classes =
  "relative z-20 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-[4px] border border-brand bg-transparent px-[2rem] py-[1rem] text-xs font-medium text-brand outline-none transition-[color,transform] duration-200 before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-brand before:transition-transform before:duration-200 before:ease-out before:content-[''] hover:text-background-dark hover:before:scale-x-100 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brand";

type Props = {
  children: ReactNode;
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

export const OutlineButton = ({ children, ...rest }: Props) => (
  <a {...rest} className={classes}>
    {children}
  </a>
);
