import { PUBLIC_SITE_URL } from "@/lib/site";
import type { ResumeFacts } from "./types";

export const RESUME_PATH = "/resume";

export const RESUME_PDF_PATH = "/resume/pdf";

export const RESUME_FACTS: ResumeFacts = {
  name: "Daniel Hrynusiw",
  email: "daniel@hrynusiw.cz",
  city: "Brno",
  portrait: { src: "/resume/portrait.webp", width: 400, height: 400 },
  links: [
    { id: "site", url: PUBLIC_SITE_URL },
    { id: "linkedIn", url: "https://www.linkedin.com/in/daniel-hrynusiw" },
    { id: "gitHub", url: "https://github.com/Daniel88dev" },
  ],
  roles: [
    {
      id: "figure",
      employer: "Figure",
      location: "Brno",
      track: "software",
      start: { year: 2025, month: 8 },
      end: null,
      tech: [
        "Node.js",
        "TypeScript",
        "AWS",
        "SQS",
        "PostgreSQL",
        "REST",
        "React",
        "Tailwind",
      ],
    },
    {
      id: "freelance",
      employer: "Freelance",
      location: "Brno",
      track: "freelance",
      start: { year: 2021, month: 9 },
      end: null,
      tech: ["Next.js", "React", "Node.js", "Express", "PostgreSQL", "Docker"],
    },
    {
      id: "hmmcManufacturing",
      employer: "Hyundai Motor Manufacturing Czech",
      location: "Nošovice",
      track: "manufacturing",
      start: { year: 2021, month: 1 },
      end: { year: 2025, month: 7 },
      tech: ["AutoCAD", "Catia", "MS Access", "Excel + VBA", "Jira", "HVDT"],
    },
    {
      id: "hmmcProcess",
      employer: "Hyundai Motor Manufacturing Czech",
      location: "Nošovice",
      track: "manufacturing",
      start: { year: 2013, month: 9 },
      end: { year: 2020, month: 12 },
      tech: ["AutoCAD", "MS Access", "Excel + VBA"],
    },
    {
      id: "pegatron",
      employer: "PEGATRON Czech",
      location: "Ostrava",
      track: "manufacturing",
      start: { year: 2008, month: 7 },
      end: { year: 2013, month: 8 },
      tech: ["AutoCAD", "Office"],
    },
  ],
  education: [
    {
      id: "spsOstrava",
      school: "SPŠ elektrotechniky a informatiky Ostrava",
      start: { year: 2004, month: 9 },
      end: { year: 2008, month: 6 },
    },
  ],
  awards: [
    {
      id: "hmmcEmployee2023",
      issuer: "Hyundai Motor Manufacturing Czech",
      date: { year: 2023, month: 12 },
    },
    {
      id: "hmmcAppreciation2020",
      issuer: "Hyundai Motor Manufacturing Czech",
      date: { year: 2020, month: 5 },
    },
    {
      id: "hmmcGold2016",
      issuer: "Hyundai Motor Manufacturing Czech",
      date: { year: 2016, month: 12 },
    },
    {
      id: "pegatronEmployee2011",
      issuer: "PEGATRON Czech",
      date: { year: 2011, month: 12 },
    },
  ],
  courses: [
    {
      id: "kubernetesGopas",
      title: "Kubernetes: introduction to infrastructure",
      provider: "GOPAS",
      date: { year: 2025, month: 2 },
    },
    {
      id: "dockerDca",
      title: "Docker Certified Associate (DCA) Specialization",
      provider: "Coursera",
      date: { year: 2025, month: 1 },
    },
    {
      id: "metaFrontEnd",
      title: "Meta Front-End Developer Specialization",
      provider: "Coursera",
      date: { year: 2024, month: 10 },
    },
    {
      id: "ibmFullStack",
      title: "IBM Full-Stack JavaScript Developer Specialization",
      provider: "Coursera",
      date: { year: 2024, month: 9 },
    },
    {
      id: "nodeCompleteGuide",
      title: "NodeJS: The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      provider: "Udemy",
      date: { year: 2023, month: 6 },
    },
    {
      id: "reactTypescriptGuide",
      title: "React & TypeScript: The Practical Guide",
      provider: "Udemy",
      date: { year: 2023, month: 3 },
    },
  ],
  skillGroups: [
    {
      id: "backend",
      items: [
        "Node.js",
        "TypeScript",
        "Express",
        "PostgreSQL",
        "SQL",
        "Drizzle ORM",
        "Sequelize",
        "MongoDB",
        "REST",
        "GraphQL",
        "gRPC",
        "OpenAPI",
        "Python",
        "Deno",
      ],
    },
    {
      id: "frontend",
      items: [
        "React",
        "Next.js",
        "Tailwind",
        "Redux",
        "HTML & CSS",
        "shadcn/ui",
      ],
    },
    {
      id: "cloud",
      items: [
        "AWS",
        "SQS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub",
        "Sentry",
        "OWASP",
        "Jira",
      ],
    },
    {
      id: "engineering",
      items: [
        "AutoCAD",
        "Catia",
        "MS Access",
        "Excel + VBA",
        "Office 365",
        "Project management",
        "Data analysis",
        "High-voltage safety (HVDT)",
      ],
    },
  ],
};
