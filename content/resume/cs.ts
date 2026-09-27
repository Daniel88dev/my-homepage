import type { Resume } from "./types";

export const CS_RESUME: Resume = {
  name: "Daniel Hrynusiw",
  headline: "Softwarový vývojář, backend engineer",
  location: "Brno, Česká republika",
  email: "daniel@hrynusiw.cz",
  summary:
    "Od srpna 2025 backend vývojář ve startupu Figure, kde stavím architekturu mikroslužeb a přispívám do frontendových aplikací. Webovému vývoji se věnuji od roku 2021, a to frontendu, backendu i full-stacku. Dříve jsem pracoval jako výrobní inženýr v Hyundai Motor Manufacturing, kde jsem vyvíjel interní webové aplikace, které zefektivnily provoz. Mám za sebou výsledky v řízení projektů, optimalizaci procesů a řešení technických problémů. Neustále se učím a vývoji se věnuji každý den.",

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
      role: "Backend vývojář",
      employer: "Figure Inc.",
      location: "Brno",
      period: { start: { year: 2025, month: 8 } },
      description:
        "Naším hlavním produktem je pokladní (POS) aplikace pro americký trh, která středně velkým podnikům poskytuje kompletní prodejní služby: online objednávky, pokladnu, kuchyňský displej a mobilní aplikace. Pracuji na backendových mikroslužbách, které spolu komunikují přes události; celá architektura běží v AWS a komunikuje přes SQS. Optimalizuji SQL dotazy, stavím HTTP REST endpointy a události pro asynchronní komunikaci služeb. Přináším také vylepšení do našich frontendových aplikací díky dobré znalosti Reactu a Tailwindu. V týmu se aktivně zapojuji do každodenní komunikace a dávám kolegům užitečnou zpětnou vazbu v code review. S naším architektonickým týmem jsem navrhl a pomohl zavést vylepšení kódu, mimo jiné zpracování chyb, generické funkce v TypeScriptu a logování pomocí wide events.",
    },
    {
      role: "Full-stack webový vývojář",
      employer: "Freelance",
      location: "Frýdek-Místek",
      period: { start: { year: 2021, month: 9 } },
      description:
        "Webový vývoj je můj koníček a vášeň. Pracuji na různých webových projektech, na kterých se zdokonaluji, většinou pro Hyundai Motor Manufacturing Czech mimo pracovní dobu, protože to nespadalo do mé běžné pracovní náplně. Ve webovém vývoji chci pokračovat a každý den se v něm zlepšuji.",
    },
    {
      role: "Inženýr výroby montáže",
      employer: "Hyundai Motor Manufacturing Czech s.r.o.",
      location: "Nošovice",
      period: { start: { year: 2021, month: 1 }, end: { year: 2025, month: 7 } },
      description:
        "Zavádění nových modelů vozů do výroby: úpravy zařízení a řízení jejich instalace pro každý nový vůz. Vedení mezioborového týmu, který řešil problémy nových modelů před zahájením sériové výroby. Práce s 3D výkresy při kontrole výrobního zařízení před uvedením modelu.",
    },
    {
      role: "Procesní inženýr montáže",
      employer: "Hyundai Motor Manufacturing Czech s.r.o.",
      location: "Nošovice",
      period: { start: { year: 2013, month: 9 }, end: { year: 2020, month: 12 } },
      description:
        "Zlepšování procesu montáže vozů a úpravy procesů na lince pro udržení vysoké efektivity. Správa zařízení linky a jeho vylepšování. Odpovědnost za elektrické části vozů a kódování řídicích jednotek.",
    },
    {
      role: "Průmyslový inženýr",
      employer: "PEGATRON Czech s.r.o.",
      location: "Ostrava",
      period: { start: { year: 2008, month: 7 }, end: { year: 2013, month: 8 } },
      description:
        "Navrhování montážních procesů set-top boxů, osobních počítačů a televizorů. Kreslení layoutů linek v AutoCADu a příprava zlepšení pro vyšší produktivitu a efektivitu. Moje první práce, kterou jsem začal ještě při studiu.",
    },
  ],

  education: [
    {
      school: "SPŠ elektrotechniky a informatiky Ostrava",
      location: "Ostrava",
      period: { start: { year: 2004 }, end: { year: 2008 } },
    },
  ],

  awards: [
    {
      title: "Zaměstnanec roku",
      issuer: "PEGATRON Czech s.r.o.",
      date: { year: 2011 },
    },
    {
      title: "Zlatý zaměstnanec roku",
      issuer: "Hyundai Motor Manufacturing Czech s.r.o.",
      date: { year: 2016 },
    },
    {
      title: "Ocenění za zásluhy",
      issuer: "Hyundai Motor Manufacturing Czech s.r.o.",
      date: { year: 2020, month: 5 },
      note: "Úspěšné zahájení sériové výroby Kona Electric v HMMC",
    },
    {
      title: "Zaměstnanec roku",
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
      title: "Kubernetes - úvod do infrastruktury",
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
    { name: "Programování", level: 4 },
    { name: "AWS", level: 3 },
    { name: "Terraform", level: 2 },
    { name: "Python", level: 2 },
    { name: "Analýza dat", level: 5 },
    { name: "Řízení projektů", level: 3 },
    { name: "Office 365", level: 5 },
    { name: "Microsoft Excel", level: 5 },
    { name: "VBA", level: 5 },
    { name: "AutoCAD", level: 5 },
    { name: "Catia", level: 4 },
  ],

  languages: [
    { name: "Čeština", level: 5 },
    { name: "Angličtina", level: 4 },
  ],

  hobbies: [
    "Počítače",
    "Programování",
    "Produkty Apple",
    "Turistika",
    "Cestování",
    "Automobily",
    "Nové technologie",
    "Učení se novým věcem",
  ],
};
