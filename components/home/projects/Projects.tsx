import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Web OTS interface",
    imgSrc: "/project-imgs/ots-project.png",
    code: "https://github.com/Daniel88dev/HMMC_OTS_interface-main",
    projectLink: "",
    tech: [
      "React",
      "Javascript",
      "Node.js",
      "Express",
      "Postgres",
      "Sequelize",
    ],
    description:
      "A interface for job allocation of HMMC Assembly hall processes, job allocation, Manpower, and efficiency.",
    modalContent: (
      <>
        <p>
          Web OTS is a real-time tool for managing vehicle assembly processes,
          Manpower, and helps calculating work Efficiency.
        </p>
        <p>
          Its Fullstack web application build with React Framework for Frontend.
          And for backend is used Nodejs, Express, Sequelize, and Postgres db.
        </p>
        <p>
          It can serve APS (Assembly Process Sheets) as PDF file opened in Modal
          pop-up windows, or as new window in Web browser.
        </p>
        <p>
          Frontend is build as multi-page web app, which serves APS in table
          rows, where all data are provided from backend API. All data provided
          can be filtered by line, station, and side of position on the line.
          Several tools are attached, so for each APS record can be made request
          to responsible person, can be displayed history of changes, and also
          calculated performance of each person in whole Web OTS project.
        </p>
        <p>
          Web OTS was mainly build for HMMC needs, and can&apros;t be accessed
          outside. In case, of someone would like to Purchase similar developed
          project, i am opened to talk about it.
        </p>
      </>
    ),
  },
  {
    title: "DTC List",
    imgSrc: "/project-imgs/next-dtc-list.png",
    code: "https://github.com/Daniel88dev/next-dtc-list",
    projectLink: "https://next-dtc-list.vercel.app\n",
    tech: [
      "React",
      "Typescript",
      "Tailwind",
      "Next.js",
      "Drizzle",
      "Clerk",
      "Postgres",
    ],
    description: "Web app to search, and display DTC",
    modalContent: (
      <>
        <p>
          Added large amount of DTC codes, with Filtering based on entered DTC
          code.
        </p>
        <p>
          DTC means Diagnosis Trouble Code, which are codes displaying some type
          of Vehicle unit error.
        </p>
        <p>
          Every vehicle unit can have some error mainly in production, and its
          quiet large list. This App helps easily identify type of DTC code.
        </p>
        <p>
          Applied also Authentication through Clerk to enable more
          functionality, like displaying more DTC details, and also report, if
          DTC code is missing in database..
        </p>
      </>
    ),
  },
];
