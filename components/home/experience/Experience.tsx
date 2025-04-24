import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Freelancer in Fullstack Web Development",
    position: "Web Developer",
    time: "September 2021 - present",
    location: "Frýdek Místek - Czech Republic",
    description:
      "Working as developer is my hobby, and passion. Learned many tools for both Frontend, and Backend. Focusing mainly for React for Frontend, and Nodejs for Backend development.",
    tech: [
      "Javascript",
      "Typescript",
      "React",
      "Node.js",
      "Express",
      "Tailwind",
      "SCSS",
      "Postgres",
      "Sequelize",
      "Next.js",
      "Deno",
      "Docker",
      "OWASP",
      "HTML5",
      "CSS",
      "GIT",
      "Github",
      "Drizzle ORM",
      "Shadcn/ui",
      "Sentry",
      "Clerk",
      "Python",
      "Mongo DB",
      "Bootstrap",
      "Axios",
      "Redux",
      "Kubernetes",
    ],
  },
  {
    title: "Manufacturing Engineer at HMMC",
    position: "Manufacturing Engineer",
    time: "January 2021 - present",
    location: "Nošovice - Czech Republic",
    description:
      "Manufacturing Engineer on Assembly factory of Hyundai Motor Manufacturing Czech s.r.o. In charge of development, and deployment of new vehicles in Manufacturing factory. Leading Cross Functional Team for vehicle Electrical parts. Also in charge for modifying, and installing equipment for manufacturing processes, and setting new technology on vehicles. HVDT (High Voltage Diagnosis Technician) to control High Voltage vehicle processes, and factory safety rules for High Voltage Electrical vehicles. And Trainer for HVT (High Voltage Technicians) to maintain High Voltage safety, and processes to other technicians.",
    tech: [
      "Office 365",
      "AutoCAD",
      "Catia",
      "MS Access",
      "VBA + Excel",
      "Jira",
      "HVDT",
    ],
  },
  {
    title: "Process Engineer at HMMC",
    position: "Process Engineer",
    time: "September 2013 - December 2020",
    location: "Nošovice - Czech Republic",
    description:
      "Process Engineer on Assembly factory of Hyundai Motor Manufacturing Czech s.r.o. Responsible for electrical processes of Manufacturing Vehicles. Managing coding equipment, new equipment installation, and improvements of installed equipment, to install larger components.",
    tech: ["Office", "AutoCAD", "MS Access", "VBA + Excel"],
  },
  {
    title: "PEGATRON Czech s.r.o",
    position: "Industrial Engineer",
    time: "July 2008 - August 2013",
    location: "Ostrava - Czech Republic",
    description:
      "Industrial Engineer in Manufacturing of settopbox, TV, Personal Computers. My initial work, during studying High School. Responsible for allocating processes, and maintain layout of all manufacturing lines in AutoCAD.",
    tech: ["AutoCAD", "Office"],
  },
];
