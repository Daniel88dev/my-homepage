import type { ReactNode } from "react";

/**
 * The English Dictionary: every interface string on the site that is not part
 * of a Project's own content. Navigation, section headings, button labels, the
 * running prose of the homepage, and the accessible names that never appear on
 * screen.
 *
 * What is NOT here, deliberately:
 * - Project descriptions and Project Dialog content, which are Project Copy.
 * - The flexiday Case Study's long-form content, which is its own module per
 *   Language.
 * - Technologies, repository names, Live URLs and product names, which are
 *   invariant and live on the Project.
 * - The 404 page, whose copy stays English in both Languages by design.
 *
 * This module is the shape every other Language is typed against: `Dictionary`
 * below is `typeof EN_DICTIONARY`, so a Language missing a key, or misspelling
 * one, is a compile error rather than a blank space on the live site. Nothing
 * here is `as const` — the values have to widen to `string` for that to work.
 */
export const EN_DICTIONARY = {
  /** The homepage's own metadata. A Case Study's is its Project Copy. */
  meta: {
    title: "Daniel Hrynusiw | Web Developer",
    description:
      "Full-stack web developer based in Brno, Czech Republic. Projects, experience, and contact.",
  },

  /** The shared header and the homepage sidebar. */
  chrome: {
    skipToContent: "Skip to content",
    resume: "Resume",
    /** Accessible name of the DH monogram on a Case Study. */
    homeLink: "Daniel Hrynusiw, back to the homepage",
    backToTop: "Back to top",
    /** Accessible name of the homepage's section sidebar. */
    sections: "Sections",
  },

  languagePicker: {
    /** Accessible name of the Picker itself; the links name the Languages. */
    label: "Language",
  },

  /** The homepage sidebar's anchors. Kept short: the sidebar is 60px wide. */
  sidebar: {
    about: "About",
    projects: "Projects",
    experience: "Exp.",
    contact: "Contact",
  },

  hero: {
    eyebrow: "Full-stack developer · Brno, Czech Republic",
    /** The brand full stop after this is markup, not copy. */
    greeting: "Hey, I'm Daniel",
    /** Runs straight into the role that types itself out after it. */
    roleIntro: "I'm a",
    /** Job titles, left in English in every Language. */
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
    /** The paragraph with the drop cap, so its first letter carries weight. */
    lead: "If you haven't figured it out yet, I specialize in full stack web development. Both frontend and backend are within my expertise. My primary focus is React with Next.js, but I started with Node.js and Express on the backend. Learning new frameworks and tools comes naturally to me, much like speaking fluent English alongside my native Czech.",
    paragraphs: [
      "For twelve years I worked at Hyundai Motor Manufacturing Czech, where web development was never part of the job description. I started coding as a hobby in my free time, and it grew into a passion. The internal tools I built there improved workflows for real teams, and that is what convinced me to make it my profession.",
      "Outside of work, I love hiking and occasionally enjoy playing board games with friends.",
      "I'm open to opportunities where I can merge my passion for coding with impactful projects. I'm also available for freelance web development, so if you have a project in mind, let's talk.",
    ],
    findMe: "Find me",
  },

  /**
   * The four chip groups beside the About text. Only the headings and the
   * chips that are prose are here — the technologies themselves are invariant
   * and live in the component, so adding one is a single edit.
   */
  stats: {
    frontend: "Frontend",
    backend: "Backend",
    tooling: "Tooling",
    offTheClock: "Off the clock",
    /** Appended to the Tooling chips: languages spoken, not technologies. */
    spokenLanguages: ["English"],
    /** The whole of the Off the clock group. */
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
    /** Ends the description on a Project Card and opens the Project Dialog. */
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

  /**
   * The Experience timeline. Keyed rather than a list, so a Language cannot
   * quietly reorder it or drop an entry — the order and the technologies of
   * each role are invariant and live in the component.
   */
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
    /** The section index is part of the string; every other section splits it. */
    eyebrow: "04 · Get in touch",
    heading: "Let's build something",
    /**
     * One sentence with two links in it. A function rather than three
     * fragments, so it stays readable as prose and a Language is free to put
     * the links wherever its word order wants them.
     */
    body: (linkedIn: ReactNode, facebook: ReactNode): ReactNode => (
      <>
        Email is the fastest way to reach me. You can also find me on {linkedIn}{" "}
        or {facebook} if that&apos;s more your speed.
      </>
    ),
    /** Link text, so a Language can decline the product name it links to. */
    linkedIn: "LinkedIn",
    facebook: "Facebook",
  },

  footer: {
    email: "Email",
    siteSource: "Site source",
  },

  caseStudy: {
    eyebrow: "Case study",
    /** Accessible name of the sticky section list. */
    onThisPage: "On this page",
    allProjects: "All projects",
    backToAllProjects: "Back to all projects",
    /** `host` is the Live URL's host, so the label names where it goes. */
    openLive: (host: string) => `Open ${host}`,
    sourceOnGitHub: "Source on GitHub",
    /**
     * Prefixes a screenshot's own alt text: "<this>: <alt>". A prefix rather
     * than a whole label because the frame that uses it is a Client Component
     * and a function cannot be handed to one.
     */
    enlargeScreenshot: "Enlarge screenshot",
    closeEnlargedScreenshot: "Close enlarged screenshot",
  },
};

/**
 * The shape every Language's Dictionary has to fill. Taken from the English
 * one rather than declared separately, so there is one place to add a string
 * and the compiler carries it to every other Language.
 */
export type Dictionary = typeof EN_DICTIONARY;
