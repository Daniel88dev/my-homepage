import type { ReactNode } from "react";

export const EN_DICTIONARY = {
  meta: {
    title: "Daniel Hrynusiw | Web Developer",
    description:
      "Full-stack web developer based in Brno, Czech Republic. Projects, experience, and contact.",
  },

  chrome: {
    skipToContent: "Skip to content",
    resume: "Resume",

    homeLink: "Daniel Hrynusiw, back to the homepage",
    backToTop: "Back to top",

    sections: "Sections",
  },

  languagePicker: {
    label: "Language",
  },

  sidebar: {
    about: "About",
    projects: "Projects",
    experience: "Exp.",
    contact: "Contact",
  },

  hero: {
    eyebrow: "Full-stack developer · Brno, Czech Republic",

    greeting: "Hey, I'm Daniel",

    roleIntro: "I'm a",

    roles: [
      "Full Stack Developer",
      "Back-end Developer",
      "Manufacturing Engineer",
      "Project Manager",
    ],
    intro:
      "I build web apps end to end, from Postgres schemas to the last pixel. Since August 2025 I've been a back-end developer at Figure, working on Node.js microservices in AWS. Before that I spent twelve years in automotive manufacturing at Hyundai, where the tools I wrote on the side ended up running on the plant floor.",
    contact: "Contact me",
    seeProjects: "See projects",
  },

  about: {
    title: "About",

    lead: "If you haven't figured it out yet, I specialize in full stack web development. Both frontend and backend are within my expertise. My primary focus is React with Next.js, but I started with Node.js and Express on the backend. Learning new frameworks and tools comes naturally to me, much like speaking fluent English alongside my native Czech.",
    paragraphs: [
      "For twelve years I worked at Hyundai Motor Manufacturing Czech, where web development was never part of the job description. I started coding as a hobby in my free time, and it grew into a passion. The internal tools I built there improved workflows for real teams, and that is what convinced me to make it my profession.",
      "Outside of work, I love hiking and occasionally enjoy playing board games with friends.",
      "I'm open to opportunities where I can merge my passion for coding with impactful projects. I'm also available for freelance web development, so if you have a project in mind, let's talk.",
    ],
    findMe: "Find me",
  },

  stats: {
    frontend: "Frontend",
    backend: "Backend",
    tooling: "Tooling",
    offTheClock: "Off the clock",

    spokenLanguages: ["English"],

    hobbies: [
      "Hiking",
      "Board games",
      "Gym",
      "Electric cars",
      "New technology",
      "Shisha",
      "Learning",
    ],
  },

  projects: {
    title: "Projects",

    readMore: "Read more",
    readCaseStudy: "Read the case study",
    openDetails: (title: string) => `Open details for ${title}`,
    screenshotAlt: (title: string) => `Screenshot of the ${title} project.`,
    sourceOnGitHub: (title: string) => `${title} source code on GitHub`,
    openLive: (title: string) => `Open the live ${title} project`,
    closeDialog: "Close project details",
    sourceCode: "Source code",
    liveProject: "Live project",
    repositories: "Repositories",
  },

  experience: {
    title: "Experience",
    roles: {
      figure: {
        title: "Back end developer at Figure",
        position: "Back end developer",
        time: "August 2025 - present",
        location: "Brno - Czech Republic",
        description:
          "Developer and maintainer of Figure - working on back end microservices in AWS",
      },
      hmmcManufacturing: {
        title: "Manufacturing Engineer at HMMC",
        position: "Manufacturing Engineer",
        time: "January 2021 - July 2025",
        location: "Nošovice - Czech Republic",
        description:
          "Manufacturing Engineer on Assembly factory of Hyundai Motor Manufacturing Czech s.r.o. In charge of development, and deployment of new vehicles in Manufacturing factory. Leading Cross Functional Team for vehicle Electrical parts. Also in charge for modifying, and installing equipment for manufacturing processes, and setting new technology on vehicles. HVDT (High Voltage Diagnosis Technician) to control High Voltage vehicle processes, and factory safety rules for High Voltage Electrical vehicles. And Trainer for HVT (High Voltage Technicians) to maintain High Voltage safety, and processes to other technicians.",
      },
      hmmcProcess: {
        title: "Process Engineer at HMMC",
        position: "Process Engineer",
        time: "September 2013 - December 2020",
        location: "Nošovice - Czech Republic",
        description:
          "Process Engineer on Assembly factory of Hyundai Motor Manufacturing Czech s.r.o. Responsible for electrical processes of Manufacturing Vehicles. Managing coding equipment, new equipment installation, and improvements of installed equipment, to install larger components.",
      },
      pegatron: {
        title: "PEGATRON Czech s.r.o",
        position: "Industrial Engineer",
        time: "July 2008 - August 2013",
        location: "Ostrava - Czech Republic",
        description:
          "Industrial Engineer in Manufacturing of settopbox, TV, Personal Computers. My initial work, during studying High School. Responsible for allocating processes, and maintain layout of all manufacturing lines in AutoCAD.",
      },
    },
  },

  contact: {
    eyebrow: "04 · Get in touch",
    heading: "Let's build something",

    body: (linkedIn: ReactNode, facebook: ReactNode): ReactNode => (
      <>
        Email is the fastest way to reach me. You can also find me on {linkedIn}{" "}
        or {facebook} if that&apos;s more your speed.
      </>
    ),

    linkedIn: "LinkedIn",
    facebook: "Facebook",
  },

  footer: {
    email: "Email",
    siteSource: "Site source",
  },

  caseStudy: {
    eyebrow: "Case study",

    onThisPage: "On this page",
    allProjects: "All projects",
    backToAllProjects: "Back to all projects",

    openLive: (host: string) => `Open ${host}`,
    sourceOnGitHub: "Source on GitHub",

    enlargeScreenshot: "Enlarge screenshot",
    closeEnlargedScreenshot: "Close enlarged screenshot",
  },
};

export type Dictionary = typeof EN_DICTIONARY;
