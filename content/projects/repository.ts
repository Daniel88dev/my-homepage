import type { RelatedRepository } from "./types";

const GITHUB_PREFIX = "https://github.com/";

/** "owner/name", for places with room for the full path. */
export const repositoryPath = (repo: RelatedRepository): string =>
  repo.url.replace(GITHUB_PREFIX, "");

/** "name" alone, for narrow columns where the owner is already implied. */
export const repositoryName = (repo: RelatedRepository): string =>
  repositoryPath(repo).split("/").pop() ?? repo.url;
