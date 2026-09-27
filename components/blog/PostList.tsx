import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import { formatPostDate, postPath, type PostSummary } from "@/content/blog";
import { languagePath, type Language } from "@/lib/language";

interface Props {
  lang: Language;
  posts: PostSummary[];

  label: string;
}

export const PostList = ({ lang, posts, label }: Props) => (
  <ul aria-label={label} className="border-t border-border">
    {posts.map((post) => (
      <li key={post.slug} className="border-b border-border">
        <Link
          href={languagePath(lang, postPath(post.slug))}
          className="group grid gap-x-[4.8rem] gap-y-[0.8rem] py-[3.2rem] md:grid-cols-[16rem_minmax(0,1fr)_auto]"
        >
          <time
            dateTime={post.publishedOn}
            className="font-mono text-2xs uppercase tracking-[0.06em] text-text-muted md:pt-[0.6rem]"
          >
            {formatPostDate(lang, post.publishedOn)}
          </time>
          <span className="flex max-w-[62ch] flex-col gap-[0.8rem]">
            <span className="text-md font-semibold text-text transition-colors duration-200 group-hover:text-brand">
              {post.copy.title}
            </span>
            <span className="text-sm text-text-muted">{post.copy.description}</span>
          </span>
          <PiArrowRight
            aria-hidden
            className="mt-[0.6rem] text-text-muted transition-[color,transform] duration-200 group-hover:translate-x-[2px] group-hover:text-brand max-md:hidden"
            size="2rem"
          />
        </Link>
      </li>
    ))}
  </ul>
);
