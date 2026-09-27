export interface ResumeDate {
  year: number;
  month?: number;
}

export interface Period {
  start: ResumeDate;
  end?: ResumeDate;
}

export type Proficiency = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  level: Proficiency;
}

export interface ResumeLink {
  label: string;
  url: string;
}

export interface Position {
  role: string;
  employer: string;
  location: string;
  period: Period;
  description: string;
}

export interface Education {
  school: string;
  location: string;
  period: Period;
}

export interface Award {
  title: string;
  issuer: string;
  date: ResumeDate;
  note?: string;
}

export interface Course {
  title: string;
  provider: string;
  date: ResumeDate;
}

export interface Resume {
  name: string;
  headline: string;
  location: string;
  email: string;
  summary: string;
  links: ResumeLink[];
  employment: Position[];
  education: Education[];
  awards: Award[];
  courses: Course[];
  skills: Skill[];
  languages: Skill[];
  hobbies: string[];
}
