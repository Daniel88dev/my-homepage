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
    title: "CFT Problem List",
    imgSrc: "/project-imgs/cft_problem_list.png",
    code: "https://github.com/Daniel88dev/cft-problem-lists",
    projectLink: "https://cft-problem-lists.vercel.app/",
    tech: ["React", "Javascript", "HTML", "CSS Modules"],
    description:
      "Project to manage CFT (Cross Functional Team) Problems on new Vehicle model Development",
    modalContent: (
      <>
        <p>UNFINISHED</p>
        <p>
          Project was made to help managing problems during new vehicle
          development. Later on we started to use M365 in work, and different
          approach was decided to manage problems.
        </p>
        <p>It was one of first project I started to work on.</p>
      </>
    ),
  },
  {
    title: "E-Plant Shopping",
    imgSrc: "/project-imgs/e-plant_shopping.png",
    code: "https://github.com/Daniel88dev/e-plantShopping",
    projectLink: "https://github.com/Daniel88dev/e-plantShopping",
    tech: ["React", "Javascript", "HTML", "CSS", "Redux"],
    description:
      "Forked Project from IBM Fullstack course, to make React App using Redux",
    modalContent: (
      <>
        <p>
          This was Project, which was part of IBM Fullstack course, to make
          Frontend App with usage of React, CSS and Redux.
        </p>
        <p>
          Application is not deployed, it anyone can run it locally, if want to
          see finished project.
        </p>
      </>
    ),
  },
  {
    title: "express book review",
    imgSrc: "/project-imgs/express-book-review.png",
    code: "https://github.com/Daniel88dev/expressBookReviews",
    projectLink: "https://github.com/Daniel88dev/expressBookReviews",
    tech: ["Node.js", "Express", "Axios"],
    description:
      "Project for IBM Fullstack course to manage Book Reviews, and also to display reviews of other users",
    modalContent: (
      <>
        <p>
          Project for IBM Fullstack course to manage Book Reviews, and also to
          display reviews of other users
        </p>
        <p>
          Target of course was to show skills using Node.js Express backend API,
          with simple authentication of user using json web token on every
          request.
        </p>
        <p>
          Its just simple CRUD API service with no HTML front end. Can be tested
          using Postman, CRUD or by any other API testing tool.
        </p>
      </>
    ),
  },
  {
    title: "DTC List",
    imgSrc: "/project-imgs/next-dtc-list.png",
    code: "https://github.com/Daniel88dev/next-dtc-list",
    projectLink: "https://next-dtc-list.vercel.app",
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
