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
    title: "gRPC_Swagger-case-study",
    imgSrc: "/project-imgs/grpc_case_study.png",
    code: "https://github.com/Daniel88dev/gRPC_Swagger-case-study",
    projectLink: "https://github.com/Daniel88dev/gRPC_Swagger-case-study",
    tech: [
      "Node.js",
      "Express",
      "Typescript",
      "gRPC",
      "Swagger",
      "OpenAPI",
      "json-server",
      "axios",
      "pug",
    ],
    description:
      "Case study project with using new technologies with focus to learn them (gRPC, Swagger, OpenAPI). ",
    modalContent: (
      <>
        <p>
          Focus of project was to learn using gRPC communication of 2 node
          applications between each other.
        </p>
        <p>
          Server app to handle DB logic, and provide data for client app. On
          client created also viewable content through pug, to display data in
          browser. There are on client side also initialisation tasks to load
          data in to DB (at server side).
        </p>
        <p>
          On client app created also open API documentation using swagger, to
          make REST API calls to client app, and return required data for each
          call.
        </p>
      </>
    ),
  },
  {
    title: "Task Master",
    imgSrc: "/project-imgs/task-master.png",
    code: "https://github.com/Daniel88dev/next-task-list",
    projectLink: "https://www.task-master.cz/",
    tech: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind",
      "Postgres",
      "Drizzle ORM",
      "Clerk",
      "Shadcn/ui",
      "Tanstack/table",
    ],
    description:
      "IN DEVELOPMENT - Fullstack web application for managing tasks of authenticated user",
    modalContent: (
      <>
        <p>IN DEVELOPMENT From February 2025</p>
        <p>
          User can manage, and filter hiw own tasks, or add items shopping list,
          for future shopping event.
        </p>
        <p>
          Purpose of project is to learn more closely work with Tanstack data
          tables, which i find very useful for future projects.
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
      "Shadcn/ui",
      "Sentry",
    ],
    description:
      "Fullstack Web app to search, and display DTC codes for vehicle problems",
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
  {
    title: "New WEB OTS",
    imgSrc: "/project-imgs/new-ots.png",
    code: "https://github.com/Daniel88dev/ots-next",
    projectLink: "https://github.com/Daniel88dev/ots-next",
    tech: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind",
      "Postgres",
      "Shadcn/ui",
      "Lucia auth",
      "Node mailer",
    ],
    description:
      "Fullstack web application for managing vehicle assembly processes, Job Allocation, Manpower, Efficiency, and Tightening Management",
    modalContent: (
      <>
        <p>
          Fullstack web application for managing vehicle assembly processes, Job
          Allocation, Manpower, Efficiency, and Tightening Management
        </p>
        <p>
          My largest application developed for my Employer. Spend already over
          800 hours of adding new features. There are Totally 25 different route
          pages, each controlling different functionality.
        </p>
        <p>
          Project is totally cut from internet access, and running only on
          intranet on its own company DNS (so domain for service is set).
        </p>
        <p>
          I build my own authentication, and Authorisation logic (with help of
          Lucia auth). Each user can have different permission to access
          specific pages.
        </p>
        <p>
          Application is sending emails to users (through SMTP server, with
          usage of Node mailer), when some specific request is made to specific
          user. Same as user password request, which require user to enter
          verification code from recieved email.
        </p>
        <p>
          Lastly was implemented TRQ Management functionality, to manage
          tightening jobs, and control each tightening job TRQ tightening
          requirement with verification if used tightening tool matches
          tightening job requirements.
        </p>
        <p>
          Database for whole project is quite large (25 tables). All data are
          stored in Postgres DB running locally on same server as web
          application. To query DB i used standard SQL query without any ORM
          usage (Wanted to learn SQL more closely). Some SQL query are very
          large (biggest has 90 lines of SQL code), as several tables are joined
          in single query.
        </p>
        <p>
          Efficiency results as Manpower usage is displayed on several
          charts,with help of shadcn/ui library (built on top of Recharts
          library) to display changes on Monthly basis.
        </p>
        <p>
          NOT PUBLICLY AVAILABLE. As I had to sign contract to secure
          application code, and it is now property of my Employer, even its
          developed, deployed, and managed fully by me.
        </p>
      </>
    ),
  },
  {
    title: "Little Lemon Frontend Capstone Project",
    imgSrc: "/project-imgs/little-lemon.png",
    code: "https://github.com/Daniel88dev/meta-frontend-capstone-project",
    projectLink: "https://meta-frontend-capstone-project-pi.vercel.app/",
    tech: ["React", "SASS CSS", "Framer Motion", "Figma"],
    description:
      "Frontend Capstone project of Meta Frontend Course for building Little Lemon - static website to reserve table in restaurant",
    modalContent: (
      <>
        <p>
          Frontend Capstone project of Meta Frontend Course for building Little
          Lemon - static website to reserve table in restaurant.
        </p>
        <p>
          Target of Project was to simply deploy application from Figma
          template, add to it some animations and to make form to reserve Table
          in Restaurant (no backend API call).
        </p>
        <p>
          Application is also responsive for resolution to be viewable on Mobile
          device, or tablet.
        </p>
        <p>
          No any other special functionality on the page, just to demonstrate
          building application from provided template and assets.
        </p>
        <p>Application is deployed on Vercel.</p>
      </>
    ),
  },
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
    code: "https://github.com/Daniel88dev/cft-next",
    projectLink: "https://cft-problem-lists.vercel.app/",
    tech: [
      "Next.js",
      "React",
      "Typescript",
      "HTML",
      "Tailwind CSS",
      "Postgres",
    ],
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
        <p>
          It was one of first project I started to work on. Originally building
          only in React/Javascript/Node.js, later on being rebuild on
          Next.js/Typescript, as I learned at that time benefits of Typescript,
          as well as Next.js, which was great Fullstack framework simplifying
          development.
        </p>
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
    title: "Gift Link",
    imgSrc: "/project-imgs/gift-link.png",
    code: "https://github.com/Daniel88dev/fullstack-capstone-project",
    projectLink: "https://github.com/Daniel88dev/fullstack-capstone-project",
    tech: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
    description:
      "Fullstack IBM Final Capstone Project for building Gift Link - application to share gifts, and to share posts for each item for other users.",
    modalContent: (
      <>
        <p>
          Final Fullstack Capstone project of IBM course for building a
          Fullstack application with DB (mongo)
        </p>
        <p>
          Users are able to share/upload gifts (without storing picture - no
          storage for it), possibility to Authenticate user (through JWT token),
          storing it in to Mongo DB, same as posts on each item added to Gift
          Link.
        </p>
        <p>
          Part of the project was to build also microservice, which was REST API
          service managing logging. Using Natural’s SentimentAnalyzer (with
          PorterStemmer and AFINN dataset) to analyze sentiment and give it a
          sentiment score (a number indicating how positive/negative the
          sentence is)
        </p>
        <p>
          Application is not deployed, as it was only to demonstrate skill
          working on Fullstack application.
        </p>
      </>
    ),
  },
  {
    title: "Flexi Day",
    imgSrc: "/project-imgs/flexi-day.png",
    code: "https://github.com/Daniel88dev/flexi-day",
    projectLink: "https://flexi-day.vercel.app/",
    tech: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind",
      "Postgres",
      "Drizzle ORM",
      "Shadcn/ui",
      "Clerk",
      "Sentry",
    ],
    description:
      "Fullstack web application for managing company Vacation, or Home Office. Unfortunately unfinished, but lot of functionality was finished",
    modalContent: (
      <>
        <p>UNFINISHED</p>
        <p>
          Fullstack web application for managing company Vacation, or Home
          Office.
        </p>
        <p>
          Built with Next.js, tailwind. For First time I started to use Drizzle
          ORM (with Vercel/Neon Postgres SQL DB), which i found great to query
          and manage DB records. Started to use Shadcn/ui, which has large
          library of perfectly designed components. Also found Great service for
          Authentication - Clerk, which saves lot of time of building own
          authentication logic for each project. For Clerk I made also webhook,
          to store, and update user details in my Postgres DB, because all users
          records needs to be available for managing their vacation.
        </p>
        <p>
          In Application is possible to Create Company/Team, and manage their
          vacation over the Year. Manager can approve/reject their Vacation, or
          home office requests.
        </p>
        <p>
          As part of Project, I started to use also sentry to monitor errors,
          and report them to me. Added also button to report bug/error by user
          (bottom right corner).
        </p>
        <p>
          Application is nearly finished, and I wanted to make preview of my
          programming skills, and maybe start to use it in our company. Didnt
          finish it, because I had to focus on Development of WEB OTS for my
          company. Maybe one day I will return to it, and make it fully
          functional.
        </p>
        <p>
          Even not fully finished, application preview is available on Vercel,
          with all described Function. For test it, it is necessary to register
          as new user.
        </p>
      </>
    ),
  },
  {
    title: "Node File Server",
    imgSrc: "/project-imgs/node-file-server.png",
    code: "https://github.com/Daniel88dev/ots-node-file-server",
    projectLink: "https://github.com/Daniel88dev/ots-node-file-server",
    tech: ["Node.js", "Express", "Multer"],
    description: "Very simple Node.js File Server microservice",
    modalContent: (
      <>
        <p>
          Very simple Node.js File Server microservice. (Really very simple,
          just about 100 lines of code)
        </p>
        <p>
          Made it mainly for my Main project - WEB OTS for managing pdf file
          uploads, as well as providing related file back, if requited.
        </p>
        <p>
          By providing file back, I can then display preview of each uploaded
          PDF file directly on WEB OTS Website.
        </p>
        <p>No public deployment of app available.</p>
      </>
    ),
  },
  {
    title: "Asteroids - Python Game",
    imgSrc: "/project-imgs/asteroids-python.png",
    code: "https://github.com/Daniel88dev/asteroids-python-game",
    projectLink: "https://github.com/Daniel88dev/asteroids-python-game",
    tech: ["Python", "Pygame"],
    description: "Very simple Python Game - Asteroids",
    modalContent: (
      <>
        <p>Very simple Python Game - Asteroids</p>
        <p>
          Made with guidance of boot.dev as part of one Project made for Python
          course.
        </p>
        <p>
          Game target, is to shoot asteroids, and prevent collision with them.
        </p>
      </>
    ),
  },
  {
    title: "Maze Solver - Python",
    imgSrc: "/project-imgs/maze-solver.png",
    code: "https://github.com/Daniel88dev/maze-solver",
    projectLink: "https://github.com/Daniel88dev/maze-solver",
    tech: ["Python"],
    description:
      "Python application, which generates Maze labyrinth, and then attempts to solve it, by searching way through labyrinth",
    modalContent: (
      <>
        <p>
          Python application, generating Maze labyrinth, and afterwards trying
          to find way from labyrinth.
        </p>
        <p>
          Made with guidance of boot.dev as part of one Project made for Python
          course.
        </p>
        <p>
          There is no user interaction, all as creating and solving it done
          automatically.
        </p>
      </>
    ),
  },
];
