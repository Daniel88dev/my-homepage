import type { ResumeCopy } from "../types";

export const EN_RESUME_COPY: ResumeCopy = {
  meta: {
    title: "Daniel Hrynusiw | Resume",
    description:
      "Backend developer at Figure, building Node.js services on AWS, after twelve years of manufacturing engineering at Hyundai. Experience, skills, courses and awards.",
  },
  eyebrow: "Resume · Brno, Czech Republic",
  headline:
    "Backend developer at Figure. Node.js, TypeScript and AWS, with twelve years of automotive engineering behind it.",
  summary:
    "I build event-driven services and the front ends that use them. Before software I spent twelve years launching cars at Hyundai, where the tools I wrote on the side ended up running on the plant floor.",
  portraitAlt: "Daniel Hrynusiw, outdoors on a sunny day.",
  roles: {
    figure: {
      title: "Backend developer",
      shortTitle: "Backend dev",
      summary:
        "Figure builds a point-of-sale platform for mid-size US businesses: online ordering, POS, kitchen display and mobile apps.",
      highlights: [
        "Build and maintain event-driven microservices on AWS that talk to each other through SQS.",
        "Design REST endpoints and asynchronous events, and tune the SQL underneath them.",
        "Worked with the architecture team on error handling, generic TypeScript utilities and wide-event logging.",
        "Contribute to the React and Tailwind front end and review colleagues' pull requests.",
      ],
    },
    freelance: {
      title: "Full-stack web developer",
      shortTitle: "Full-stack dev",
      summary:
        "Web development started as a hobby and became the profession. Most of it was internal tooling for Hyundai, written outside working hours, plus the projects on this site.",
      highlights: [
        "Internal web tools that ended up in daily use on the production line.",
        "Own products and side projects, flexiday among them.",
      ],
    },
    hmmcManufacturing: {
      title: "Manufacturing engineer, Assembly",
      shortTitle: "Manufacturing eng.",
      summary:
        "Brought new vehicle models into production on the assembly line, from equipment changes to the start of series production.",
      highlights: [
        "Led the cross-functional team for vehicle electrical parts through pre-launch problem solving.",
        "Modified and installed line equipment, and checked plant equipment against 3D drawings before each launch.",
        "Certified high-voltage diagnosis technician; trained the plant's high-voltage technicians.",
      ],
    },
    hmmcProcess: {
      title: "Process engineer, Assembly",
      shortTitle: "Process eng.",
      summary:
        "Owned the electrical processes on the assembly line: coding of vehicle control units, equipment installation and line improvements.",
      highlights: [
        "Kept line efficiency high through process adjustments and equipment upgrades.",
        "Managed the coding equipment and the installations needed to fit larger components.",
      ],
    },
    pegatron: {
      title: "Industrial engineer",
      shortTitle: "Industrial eng.",
      summary:
        "First job, taken while still studying. Set-top boxes, TVs and personal computers.",
      highlights: [
        "Allocated processes across the lines and kept every line layout current in AutoCAD.",
        "Prepared line improvements that raised productivity.",
      ],
    },
  },
  education: {
    spsOstrava: { field: "Electrical engineering and IT" },
  },
  awards: {
    hmmcEmployee2023: { title: "Employee of the Year" },
    hmmcAppreciation2020: {
      title: "Award of Appreciation",
      note: "Launch of Kona Electric mass production",
    },
    hmmcGold2016: { title: "Gold Employee of the Year" },
    pegatronEmployee2011: { title: "Employee of the Year" },
  },
  skillGroups: {
    backend: "Backend",
    frontend: "Frontend",
    cloud: "Cloud and tooling",
    engineering: "Engineering",
  },
  spokenLanguages: {
    czech: { name: "Czech", level: "Native" },
    english: { name: "English", level: "Fluent" },
  },
  links: {
    site: "Personal site",
    linkedIn: "LinkedIn",
    gitHub: "GitHub",
  },
  country: "Czech Republic",
};
