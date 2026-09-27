export interface YearMonth {
  year: number;
  month: number;
}

export const TRACKS = ["software", "freelance", "manufacturing"] as const;

export type Track = (typeof TRACKS)[number];

export const ROLE_IDS = [
  "figure",
  "freelance",
  "hmmcManufacturing",
  "hmmcProcess",
  "pegatron",
] as const;

export type RoleId = (typeof ROLE_IDS)[number];

export interface Role {
  id: RoleId;
  employer: string;
  location: string;
  track: Track;
  start: YearMonth;
  end: YearMonth | null;
  tech: string[];
}

export const EDUCATION_IDS = ["spsOstrava"] as const;

export type EducationId = (typeof EDUCATION_IDS)[number];

export interface Education {
  id: EducationId;
  school: string;
  start: YearMonth;
  end: YearMonth;
}

export const AWARD_IDS = [
  "hmmcEmployee2023",
  "hmmcAppreciation2020",
  "hmmcGold2016",
  "pegatronEmployee2011",
] as const;

export type AwardId = (typeof AWARD_IDS)[number];

export interface Award {
  id: AwardId;
  issuer: string;
  date: YearMonth;
}

export const COURSE_IDS = [
  "kubernetesGopas",
  "dockerDca",
  "metaFrontEnd",
  "ibmFullStack",
  "nodeCompleteGuide",
  "reactTypescriptGuide",
] as const;

export type CourseId = (typeof COURSE_IDS)[number];

export interface Course {
  id: CourseId;
  title: string;
  provider: string;
  date: YearMonth;
}

export const SKILL_GROUP_IDS = [
  "backend",
  "frontend",
  "cloud",
  "engineering",
] as const;

export type SkillGroupId = (typeof SKILL_GROUP_IDS)[number];

export interface SkillGroup {
  id: SkillGroupId;
  items: string[];
}

export const SPOKEN_LANGUAGE_IDS = ["czech", "english"] as const;

export type SpokenLanguageId = (typeof SPOKEN_LANGUAGE_IDS)[number];

export interface ResumeLink {
  id: "site" | "linkedIn" | "gitHub";
  url: string;
}

export interface ResumeFacts {
  name: string;
  email: string;
  city: string;
  portrait: { src: string; width: number; height: number };
  links: ResumeLink[];
  roles: Role[];
  education: Education[];
  awards: Award[];
  courses: Course[];
  skillGroups: SkillGroup[];
}

export interface RoleCopy {
  title: string;
  shortTitle: string;
  summary: string;
  highlights: string[];
}

export interface ResumeCopy {
  meta: { title: string; description: string };
  eyebrow: string;
  headline: string;
  summary: string;
  portraitAlt: string;
  roles: Record<RoleId, RoleCopy>;
  education: Record<EducationId, { field: string }>;
  awards: Record<AwardId, { title: string; note?: string }>;
  skillGroups: Record<SkillGroupId, string>;
  spokenLanguages: Record<SpokenLanguageId, { name: string; level: string }>;
  links: Record<ResumeLink["id"], string>;
  country: string;
}

export interface Resume {
  facts: ResumeFacts;
  copy: ResumeCopy;
}
