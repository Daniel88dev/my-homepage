import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * The site's filled brand button, in the two sizes it is used at: the page
 * size for heroes, and a compact one for actions inside a Project Dialog.
 */
const sizes = {
  md: "px-[2.4rem] py-[1.2rem] text-sm",
  sm: "px-[1.6rem] py-[0.9rem] text-xs",
} as const;

const classes =
  "relative z-20 inline-flex cursor-pointer items-center gap-[0.8rem] rounded-[4px] border-none bg-brand font-medium text-background-dark shadow-[0_8px_24px_-8px_rgb(46_229_157/0.45)] transition-[transform,box-shadow,filter] duration-200 hover:-translate-y-px hover:shadow-[0_12px_28px_-8px_rgb(46_229_157/0.55)] hover:brightness-105 active:translate-y-0 active:scale-[0.98]";

type Props = {
  children: ReactNode;
  size?: keyof typeof sizes;
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

export const StandardButton = ({ children, size = "md", ...rest }: Props) => (
  <Link {...rest} className={`${classes} ${sizes[size]}`}>
    {children}
  </Link>
);
