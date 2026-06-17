import { MouseEventHandler, ReactElement } from "react";

interface Props {
  children: string | ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const OutlineButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="relative z-20 cursor-pointer overflow-hidden rounded-[4px] border border-brand bg-transparent px-[2.4rem] py-[1.2rem] text-sm text-brand outline-none transition-colors duration-200 hover:text-background-dark before:absolute before:-left-full before:-top-full before:-z-10 before:h-full before:w-full before:bg-brand before:transition-[left,top] before:duration-200 before:content-[''] hover:before:left-0 hover:before:top-0"
    >
      {children}
    </button>
  );
};
