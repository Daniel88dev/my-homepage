import { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const StandardButton = ({ children, onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative z-20 inline-flex cursor-pointer items-center gap-[0.8rem] rounded-[4px] border-none bg-brand px-[2.4rem] py-[1.2rem] text-sm font-medium text-background-dark shadow-[0_8px_24px_-8px_rgb(46_229_157/0.45)] outline-none transition-[transform,box-shadow,filter] duration-200 hover:-translate-y-px hover:shadow-[0_12px_28px_-8px_rgb(46_229_157/0.55)] hover:brightness-105 active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brand"
    >
      {children}
    </button>
  );
};
