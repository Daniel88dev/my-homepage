import type { ReactNode } from "react";
import { Rise } from "./Rise";

interface Props {
  id: string;
  title: string;
  lede?: ReactNode;
}

export const ResumeHeading = ({ id, title, lede }: Props) => (
  <Rise>
    <h2 id={id} className="text-lg font-semibold max-md:text-md">
      {title}
      <span className="text-brand">.</span>
    </h2>
    {lede && (
      <p className="mt-[1.2rem] max-w-[62ch] text-sm text-text-muted">{lede}</p>
    )}
  </Rise>
);
