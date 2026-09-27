import type { Resume } from "./types";

export const EN_RESUME: Resume = {
  name: "Daniel Hrynusiw",
  headline: "Software Developer, Backend Engineer",
  location: "Brno, Czech Republic",
  email: "daniel@hrynusiw.cz",
  summary:
    "Backend developer at Figure (startup) since August 2025, building microservices architecture and contributing to frontend applications. Passionate about web development since 2021, with experience spanning frontend, backend and full-stack development. Previously a Manufacturing Engineer at Hyundai Motor Manufacturing, where I developed internal web applications that improved operational efficiency. Proven track record in project management, process optimization and technical problem-solving. Dedicated to continuous learning and daily development work.",

  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/daniel-hrynusiw" },
    { label: "GitHub", url: "https://github.com/Daniel88dev" },
    { label: "DTC List", url: "https://www.dtc-list.cz/" },
    {
      label: "Little Lemon",
      url: "https://meta-frontend-capstone-project-pi.vercel.app/",
    },
  ],

  employment: [
    {
      role: "Backend Developer",
      employer: "Figure Inc.",
      location: "Brno",
      period: { start: { year: 2025, month: 8 } },
      description:
        "Our main product is a POS application for the US market, supporting medium-sized businesses with a full set of selling services: online ordering, POS, kitchen display and mobile apps. I work on back-end microservices that communicate through events; the whole architecture runs on AWS and talks over SQS. I improve SQL queries, build HTTP REST endpoints and the events services use to communicate asynchronously. I also deliver improvements to our front-end applications, drawing on strong React and Tailwind skills. I am active in daily team communication and review my colleagues' pull requests with useful feedback. Together with our architecture team I proposed and helped implement improvements across the code base, including error handling, generic TypeScript functions and wide-event logging.",
    },
    {
      role: "Full-Stack Web Developer",
      employer: "Freelance",
      location: "Frýdek-Místek",
      period: { start: { year: 2021, month: 9 } },
      description:
        "Web development is my hobby and passion. I work on a variety of web projects to sharpen my skills, mostly for Hyundai Motor Manufacturing Czech outside working hours, as it sat outside my standard job scope. Web development is where I want to continue, improving my skills every day.",
    },
    {
      role: "Assembly Manufacturing Engineer",
      employer: "Hyundai Motor Manufacturing Czech s.r.o.",
      location: "Nošovice",
      period: { start: { year: 2021, month: 1 }, end: { year: 2025, month: 7 } },
      description:
        "Implementing new vehicle models into production: changing equipment and managing its installation for each new vehicle. Leading a cross-functional team that resolved new-model problems before the start of production. Working with 3D drawings to check factory equipment before each model launch.",
    },
    {
      role: "Assembly Process Engineer",
      employer: "Hyundai Motor Manufacturing Czech s.r.o.",
      location: "Nošovice",
      period: { start: { year: 2013, month: 9 }, end: { year: 2020, month: 12 } },
      description:
        "Improving the vehicle assembly process and adjusting processes on the line to keep efficiency high. Managing line equipment and applying improvements to it. Responsible for the electrical parts of vehicles and the coding process of vehicle units.",
    },
    {
      role: "Industrial Engineer",
      employer: "PEGATRON Czech s.r.o.",
      location: "Ostrava",
      period: { start: { year: 2008, month: 7 }, end: { year: 2013, month: 8 } },
      description:
        "Designing assembly processes for set-top boxes, personal computers and TVs. Drawing line layouts in AutoCAD and preparing line improvements to increase productivity and efficiency. My first job, which I started while still studying.",
    },
  ],

  education: [
    {
      school: "SPŠ Elektrotechniky a informatiky Ostrava",
      location: "Ostrava",
      period: { start: { year: 2004 }, end: { year: 2008 } },
    },
  ],

  awards: [
    {
      title: "Employee of the Year",
      issuer: "PEGATRON Czech s.r.o.",
      date: { year: 2011 },
    },
    {
      title: "Gold Employee of the Year",
      issuer: "Hyundai Motor Manufacturing Czech s.r.o.",
      date: { year: 2016 },
    },
    {
      title: "Award of Appreciation",
      issuer: "Hyundai Motor Manufacturing Czech s.r.o.",
      date: { year: 2020, month: 5 },
      note: "Successful launch of Kona Electric mass production at HMMC",
    },
    {
      title: "Employee of the Year",
      issuer: "Hyundai Motor Manufacturing Czech s.r.o.",
      date: { year: 2023 },
    },
  ],

  courses: [
    {
      title: "React & TypeScript - The Practical Guide",
      provider: "Udemy",
      date: { year: 2023 },
    },
    {
      title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      provider: "Udemy",
      date: { year: 2023 },
    },
    {
      title: "IBM Full-Stack JavaScript Developer Specialization",
      provider: "Coursera",
      date: { year: 2024, month: 9 },
    },
    {
      title: "Meta Front-End Developer Specialization",
      provider: "Coursera",
      date: { year: 2024, month: 10 },
    },
    {
      title: "Docker Certified Associate (DCA) Specialization",
      provider: "Coursera",
      date: { year: 2025, month: 1 },
    },
    {
      title: "Kubernetes - Introduction to Infrastructure",
      provider: "GOPAS",
      date: { year: 2025, month: 2 },
    },
  ],

  skills: [
    { name: "Node.js", level: 5 },
    { name: "TypeScript", level: 5 },
    { name: "JavaScript", level: 5 },
    { name: "React", level: 5 },
    { name: "Next.js", level: 5 },
    { name: "SQL", level: 5 },
    { name: "HTML & CSS", level: 5 },
    { name: "Git", level: 5 },
    { name: "Programming", level: 4 },
    { name: "AWS", level: 3 },
    { name: "Terraform", level: 2 },
    { name: "Python", level: 2 },
    { name: "Data analysis", level: 5 },
    { name: "Project Management", level: 3 },
    { name: "Office 365", level: 5 },
    { name: "Microsoft Excel", level: 5 },
    { name: "VBA", level: 5 },
    { name: "AutoCAD", level: 5 },
    { name: "Catia", level: 4 },
  ],

  languages: [
    { name: "Czech", level: 5 },
    { name: "English", level: 4 },
  ],

  hobbies: [
    "Computers",
    "Programming",
    "Apple products",
    "Hiking",
    "Traveling",
    "Automotive",
    "New technologies",
    "Learning new things",
  ],
};
