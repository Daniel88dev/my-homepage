import type { ComponentType } from "react";

export type IsoDate = `${number}-${number}-${number}`;

export interface Post {
  slug: string;

  publishedOn: IsoDate;

  ogImage?: string;
}

export interface PostCopy {
  title: string;

  description: string;
}

export interface PostContentModule {
  default: ComponentType;
}

export type PostContentLoader = () => Promise<PostContentModule>;
