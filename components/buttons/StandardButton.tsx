import Link from "next/link";
import { AnchorHTMLAttributes, MouseEventHandler, ReactNode } from "react";

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

type Common = {
  children: ReactNode;
  size?: keyof typeof sizes;
};

type ButtonProps = Common & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: undefined;
};

type LinkProps = Common & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

type Props = ButtonProps | LinkProps;

export const StandardButton = (props: Props) => {
  const className = `${classes} ${sizes[props.size ?? "md"]}`;

  if (props.href !== undefined) {
    const { children, size: _size, ...rest } = props;
    return (
      <Link {...rest} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={props.onClick} className={className}>
      {props.children}
    </button>
  );
};
