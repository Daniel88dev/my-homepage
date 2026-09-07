import type { RelatedRepository } from "./types";

const GITHUB_PREFIX = "https://github.com/";

export const repositoryPath = (repo: RelatedRepository): string =>
  repo.url.replace(GITHUB_PREFIX, "");

export const repositoryName = (repo: RelatedRepository): string =>
  repositoryPath(repo).split("/").pop() ?? repo.url;
