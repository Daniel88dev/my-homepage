import type { ReactNode } from "react";
import type { Dictionary } from "./en";

/**
 * The Czech Dictionary. Typed against the English one, so a missing or
 * misspelled key fails the typecheck rather than leaving a gap on the page.
 *
 * Two rules held throughout, so the whole site reads as one voice:
 *
 * 1. **Vykání.** The visitor is addressed formally — "napište mi", "najdete
 *    mě" — as a professional site aimed at employers and clients in Brno
 *    would. Never switches to tykání, including in the greeting.
 * 2. **Technical vocabulary stays English.** Job titles (full-stack developer,
 *    Back end developer, Manufacturing Engineer), technologies, frameworks,
 *    product names and repository names are left as they are, because that is
 *    how people in this industry speak here. Everything else is Czech, and
 *    idiomatic Czech rather than English word order in Czech words.
 */
export const CS_DICTIONARY: Dictionary = {
  meta: {
    title: "Daniel Hrynusiw | Web Developer",
    description:
      "Full-stack web developer z Brna. Projekty, praxe a kontakt.",
  },

  chrome: {
    skipToContent: "Přeskočit na obsah",
    resume: "Životopis",
    homeLink: "Daniel Hrynusiw, zpět na úvodní stránku",
    backToTop: "Zpět nahoru",
    sections: "Sekce",
  },

  languagePicker: {
    label: "Jazyk",
  },

  sidebar: {
    about: "O mně",
    projects: "Projekty",
    experience: "Praxe",
    contact: "Kontakt",
  },

  hero: {
    eyebrow: "Full-stack developer · Brno, Česká republika",
    greeting: "Zdravím, jsem Daniel",
    roleIntro: "Jsem",
    roles: [
      "Full Stack Developer",
      "Back-end Developer",
      "Manufacturing Engineer",
      "Project Manager",
    ],
    intro:
      "Stavím webové aplikace od začátku do konce, od schémat v Postgresu až po poslední pixel. Od srpna 2025 pracuji jako back-end developer ve firmě Figure, kde dělám na Node.js mikroslužbách v AWS. Předtím jsem strávil dvanáct let v automobilové výrobě v Hyundai, kde nástroje, které jsem psal ve volném čase, nakonec běžely přímo ve výrobní hale.",
    contact: "Napište mi",
    seeProjects: "Prohlédnout projekty",
  },

  about: {
    title: "O mně",
    lead: "Pokud to ještě není zřejmé, specializuji se na full-stack vývoj webových aplikací. Zvládám frontend i backend. Nejvíc se soustředím na React s Next.js, ale začínal jsem na backendu s Node.js a Expressem. Učit se nové frameworky a nástroje mi jde přirozeně, podobně jako mluvit plynně anglicky vedle rodné češtiny.",
    paragraphs: [
      "Dvanáct let jsem pracoval v Hyundai Motor Manufacturing Czech, kde vývoj webů nikdy nebyl součástí náplně práce. Programovat jsem začal ve volném čase jako koníček a postupně z toho byla vášeň. Interní nástroje, které jsem tam postavil, reálně zlepšily práci celým týmům — a právě to mě přesvědčilo, abych se tím začal živit.",
      "Mimo práci rád chodím na túry a občas si s přáteli zahraju deskovky.",
      "Jsem otevřený příležitostem, kde můžu spojit programování s projekty, které dávají smysl. Kromě toho jsem k dispozici i pro freelance vývoj webů — pokud máte v hlavě nějaký projekt, pojďme si o něm promluvit.",
    ],
    findMe: "Najdete mě",
  },

  stats: {
    frontend: "Frontend",
    backend: "Backend",
    tooling: "Nástroje",
    offTheClock: "Mimo práci",
    spokenLanguages: ["Angličtina"],
    hobbies: [
      "Turistika",
      "Deskové hry",
      "Posilovna",
      "Elektromobily",
      "Nové technologie",
      "Vodní dýmka",
      "Vzdělávání",
    ],
  },

  projects: {
    title: "Projekty",
    readMore: "Číst dál",
    readCaseStudy: "Přečíst případovou studii",
    openDetails: (title: string) => `Zobrazit detail projektu ${title}`,
    screenshotAlt: (title: string) => `Snímek obrazovky projektu ${title}.`,
    sourceOnGitHub: (title: string) =>
      `Zdrojový kód projektu ${title} na GitHubu`,
    openLive: (title: string) => `Otevřít živou verzi projektu ${title}`,
    closeDialog: "Zavřít detail projektu",
    sourceCode: "Zdrojový kód",
    liveProject: "Živá verze",
    repositories: "Repozitáře",
  },

  experience: {
    title: "Praxe",
    roles: {
      figure: {
        title: "Back end developer ve Figure",
        position: "Back end developer",
        time: "srpen 2025 – současnost",
        location: "Brno – Česká republika",
        description:
          "Vývoj a údržba produktu Figure – práce na back end mikroslužbách v AWS",
      },
      hmmcManufacturing: {
        title: "Manufacturing Engineer v HMMC",
        position: "Manufacturing Engineer",
        time: "leden 2021 – červenec 2025",
        location: "Nošovice – Česká republika",
        description:
          "Manufacturing Engineer na montážní hale Hyundai Motor Manufacturing Czech s.r.o. Měl jsem na starost vývoj a náběh nových vozů ve výrobě. Vedl jsem Cross Functional Team pro elektrické díly vozů. Staral jsem se také o úpravy a instalace zařízení pro výrobní procesy a o zavádění nových technologií na vozech. Jako HVDT (High Voltage Diagnosis Technician) jsem dohlížel na procesy u vysokonapěťových vozů a na bezpečnostní pravidla v hale. Zároveň jsem jako trenér HVT (High Voltage Technicians) učil ostatní techniky, jak u vysokého napětí dodržovat bezpečnost a správné postupy.",
      },
      hmmcProcess: {
        title: "Process Engineer v HMMC",
        position: "Process Engineer",
        time: "září 2013 – prosinec 2020",
        location: "Nošovice – Česká republika",
        description:
          "Process Engineer na montážní hale Hyundai Motor Manufacturing Czech s.r.o. Zodpovídal jsem za elektrické procesy při výrobě vozů. Spravoval jsem kódovací zařízení, zajišťoval instalace nových zařízení a vylepšoval ta stávající tak, aby zvládla montáž větších komponent.",
      },
      pegatron: {
        title: "PEGATRON Czech s.r.o",
        position: "Industrial Engineer",
        time: "červenec 2008 – srpen 2013",
        location: "Ostrava – Česká republika",
        description:
          "Industrial Engineer ve výrobě set-top boxů, televizí a osobních počítačů. Moje úplně první práce, ještě při studiu na střední škole. Zodpovídal jsem za rozdělení procesů a za údržbu layoutu všech výrobních linek v AutoCADu.",
      },
    },
  },

  contact: {
    eyebrow: "04 · Ozvěte se",
    heading: "Pojďme něco vytvořit",
    body: (linkedIn: ReactNode, facebook: ReactNode): ReactNode => (
      <>
        Nejrychleji mě zastihnete e-mailem. Najdete mě ale i na {linkedIn} nebo{" "}
        {facebook}, pokud je vám to bližší.
      </>
    ),
    linkedIn: "LinkedInu",
    facebook: "Facebooku",
  },

  footer: {
    email: "E-mail",
    siteSource: "Zdrojový kód webu",
  },

  caseStudy: {
    eyebrow: "Případová studie",
    onThisPage: "Na této stránce",
    allProjects: "Všechny projekty",
    backToAllProjects: "Zpět na všechny projekty",
    openLive: (host: string) => `Otevřít ${host}`,
    sourceOnGitHub: "Zdrojový kód na GitHubu",
    enlargeScreenshot: "Zvětšit snímek obrazovky",
    closeEnlargedScreenshot: "Zavřít zvětšený snímek obrazovky",
  },
};
