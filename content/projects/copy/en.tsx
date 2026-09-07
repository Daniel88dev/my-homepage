import type { ProjectCopyBySlug } from "../types";

export const EN_PROJECT_COPY: ProjectCopyBySlug = {
  "flexi-day": {
    description:
      "A live vacation and day-off management product for teams: shared calendar, one-click approvals, balances and calendar sync, free for early adopters.",
    dialogContent: (
      <>
        <p>
          flexiday is a shared team calendar for time off. People request
          vacation, home office or sick days in seconds, managers approve them
          in a click, and everyone sees who is in and who is away.
        </p>
        <p>
          It runs in production on AWS as three independently deployed
          repositories: a static Next.js web app, an Express API on PostgreSQL,
          and a transactional email pipeline. I run it as a sole trader from
          Brno, and it is free for early adopters.
        </p>
      </>
    ),
    caseStudy: {
      title: "flexiday, a calm calendar for team time off",
      pitch:
        "The shared calendar for team time off. Request in seconds, approve in a click, and always know who is in and who is away.",
      description:
        "How I built and run flexiday: a vacation and day-off product for teams, shipped as a static Next.js app, an Express API and an email pipeline on AWS.",
      heroImageAlt:
        "The flexiday team calendar for one month, with vacation, home office and sick days for four people shown as colour-coded chips.",
    },
  },
  "grpc-swagger-case-study": {
    description:
      "Case study project with using new technologies with focus to learn them (gRPC, Swagger, OpenAPI). ",
    dialogContent: (
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
  "task-master": {
    description:
      "IN DEVELOPMENT - Fullstack web application for managing tasks of authenticated user",
    dialogContent: (
      <>
        <p>IN DEVELOPMENT From February 2025</p>
        <p>
          User can manage, and filter hiw own tasks, or add items shopping list,
          for future shopping event.
        </p>
        <p>
          Purpose of project is to learn more closely work with TanStack data
          tables, which i find very useful for future projects.
        </p>
      </>
    ),
  },
  "dtc-list": {
    description:
      "Fullstack Web app to search, and display DTC codes for vehicle problems",
    dialogContent: (
      <>
        <p>
          Added large amount of DTC codes, with Filtering based on entered DTC
          code.
        </p>
        <p>
          DTC means Diagnostic Trouble Code, which are codes displaying some type
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
  "new-web-ots": {
    description:
      "Fullstack web application for managing vehicle assembly processes, Job Allocation, Manpower, Efficiency, and Tightening Management",
    dialogContent: (
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
  "little-lemon-frontend-capstone-project": {
    description:
      "Frontend Capstone project of Meta Frontend Course for building Little Lemon - static website to reserve table in restaurant",
    dialogContent: (
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
  "web-ots-interface": {
    description:
      "A interface for job allocation of HMMC Assembly hall processes, job allocation, Manpower, and efficiency.",
    dialogContent: (
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
  "cft-problem-list": {
    description:
      "Project to manage CFT (Cross Functional Team) Problems on new Vehicle model Development",
    dialogContent: (
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
  "e-plant-shopping": {
    description:
      "Forked Project from IBM Fullstack course, to make React App using Redux",
    dialogContent: (
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
  "express-book-review": {
    description:
      "Project for IBM Fullstack course to manage Book Reviews, and also to display reviews of other users",
    dialogContent: (
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
          using Postman, cURL or by any other API testing tool.
        </p>
      </>
    ),
  },
  "gift-link": {
    description:
      "Fullstack IBM Final Capstone Project for building Gift Link - application to share gifts, and to share posts for each item for other users.",
    dialogContent: (
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
  "node-file-server": {
    description: "Very simple Node.js File Server microservice",
    dialogContent: (
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
  "asteroids-python-game": {
    description: "Very simple Python Game - Asteroids",
    dialogContent: (
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
  "maze-solver-python": {
    description:
      "Python application, which generates Maze labyrinth, and then attempts to solve it, by searching way through labyrinth",
    dialogContent: (
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
};
