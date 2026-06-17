import { MouseEventHandler, ReactElement } from "react";

interface Props {
  children: string | ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const StandardButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="relative z-20 cursor-pointer overflow-hidden rounded-[4px] border-none bg-brand px-[2.4rem] py-[1.2rem] text-sm text-background-dark outline-none transition-opacity duration-200 hover:opacity-90"
    >
      {children}
    </button>
  );
};
