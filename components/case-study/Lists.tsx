import Link from "next/link";
import { ReactNode } from "react";
import { PiArrowUpRight, PiGithubLogo } from "react-icons/pi";
import type { RelatedRepository } from "@/content/projects/types";
import { repositoryPath } from "@/content/projects/repository";

export const Callout = ({ children }: { children: ReactNode }) => (
  <aside className="my-[0.8rem] max-w-[62ch] border-l-2 border-brand bg-brand-soft/40 py-[1.6rem] pl-[2.4rem] pr-[2rem] text-sm text-text [&_p+p]:mt-[1.2rem]">
    {children}
  </aside>
);

export const RepositoryList = ({ repositories }: { repositories: RelatedRepository[] }) => (
  <ul className="grid gap-[1.6rem] md:grid-cols-2">
    {repositories.map((repo) => (
      <li key={repo.url}>
        <Link
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full items-start gap-[1.6rem] rounded-[0.8rem] border border-border bg-background-light p-[2rem] transition-[border-color,transform] duration-200 hover:-translate-y-px hover:border-[rgb(46_229_157/0.35)]"
        >
          <PiGithubLogo
            size="2.2rem"
            aria-hidden
            className="mt-[0.2rem] shrink-0 text-text-muted transition-colors duration-200 group-hover:text-brand"
          />
          <span className="flex min-w-0 flex-col gap-[0.4rem]">
            <span className="flex items-center gap-[0.6rem] text-xs font-medium text-text">
              {repo.label}
              <PiArrowUpRight
                aria-hidden
                className="text-text-muted transition-[color,transform] duration-200 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-brand"
              />
            </span>
            <span className="font-mono text-2xs text-text-muted">{repositoryPath(repo)}</span>
            {repo.note && <span className="mt-[0.4rem] text-2xs text-text-muted">{repo.note}</span>}
          </span>
        </Link>
      </li>
    ))}
  </ul>
);

export interface TechListGroup {
  name: string;
  items: string[];
}

export const TechListGroups = ({ groups }: { groups: TechListGroup[] }) => (
  <div className="grid gap-x-[4.8rem] gap-y-[4rem] md:grid-cols-2">
    {groups.map((group) => (
      <div key={group.name}>
        <h3 className="mb-[1.6rem] text-xs font-medium text-text">{group.name}</h3>
        <ul className="flex flex-wrap gap-[0.8rem]">
          {group.items.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

interface NumberedItem {
  title: string;
  body: ReactNode;
}

export const LessonList = ({ items }: { items: NumberedItem[] }) => (
  <ol className="flex max-w-[72ch] flex-col">
    {items.map((item, i) => (
      <li
        key={item.title}
        className="grid grid-cols-[4rem_1fr] gap-x-[2.4rem] border-t border-border py-[2.8rem] first:border-t-0 first:pt-0 max-md:grid-cols-1 max-md:gap-y-[0.8rem]"
      >
        <span className="font-mono text-2xs text-brand">{String(i + 1).padStart(2, "0")}</span>
        <div>
          <h3 className="text-md font-semibold">{item.title}</h3>
          <div className="mt-[0.8rem] flex flex-col gap-[1.2rem] text-sm text-text-muted">
            {item.body}
          </div>
        </div>
      </li>
    ))}
  </ol>
);
