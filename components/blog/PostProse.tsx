import type { ReactNode } from "react";

export const PostProse = ({ children }: { children: ReactNode }) => (
  <div className="flex max-w-[66ch] flex-col gap-[2rem] text-sm text-text-muted [&_a]:text-text [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 [&_a]:transition-colors [&_a]:duration-200 [&_a:hover]:text-brand [&_a:hover]:decoration-brand [&_h2]:mt-[3.2rem] [&_h2:first-child]:mt-0 [&_h2]:text-md [&_h2]:font-semibold [&_h2]:text-text [&_li]:pl-[0.4rem] [&_strong]:font-medium [&_strong]:text-text [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-[0.8rem] [&_ul]:pl-[2.4rem] [&_blockquote]:border-l [&_blockquote]:border-brand [&_blockquote]:pl-[2rem] [&_blockquote]:text-text">
    {children}
  </div>
);
