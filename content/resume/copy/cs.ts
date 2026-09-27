import type { ResumeCopy } from "../types";

export const CS_RESUME_COPY: ResumeCopy = {
  meta: {
    title: "Daniel Hrynusiw | Životopis",
    description:
      "Backend developer ve Figure, kde stavím Node.js služby na AWS, po dvanácti letech strojírenství v Hyundai. Praxe, dovednosti, kurzy a ocenění.",
  },
  eyebrow: "Životopis · Brno, Česká republika",
  headline:
    "Backend developer ve Figure. Node.js, TypeScript a AWS, a za tím dvanáct let inženýřiny v automotive.",
  summary:
    "Stavím event-driven služby a frontendy, které je používají. Před softwarem jsem dvanáct let zaváděl nové modely aut v Hyundai, kde nástroje psané po večerech skončily v ostrém provozu na lince.",
  portraitAlt: "Daniel Hrynusiw venku za slunečného dne.",
  roles: {
    figure: {
      title: "Backend developer",
      shortTitle: "Backend dev",
      summary:
        "Figure vyvíjí pokladní platformu pro střední firmy v USA: online objednávky, POS, kuchyňské displeje a mobilní aplikace.",
      highlights: [
        "Vyvíjím a udržuji event-driven mikroslužby na AWS, které spolu komunikují přes SQS.",
        "Navrhuji REST endpointy a asynchronní eventy a ladím SQL dotazy pod nimi.",
        "S architektonickým týmem jsem zlepšil error handling, generické TypeScript utility a wide-event logování.",
        "Přispívám do frontendu v Reactu a Tailwindu a revieuju pull requesty kolegů.",
      ],
    },
    freelance: {
      title: "Full-stack webový vývojář",
      shortTitle: "Full-stack dev",
      summary:
        "Webový vývoj začal jako koníček a stal se profesí. Většinu tvořily interní nástroje pro Hyundai psané mimo pracovní dobu, plus projekty na tomto webu.",
      highlights: [
        "Interní webové nástroje, které se denně používají na výrobní lince.",
        "Vlastní produkty a vedlejší projekty, mezi nimi flexiday.",
      ],
    },
    hmmcManufacturing: {
      title: "Manufacturing engineer, montáž",
      shortTitle: "Manufacturing eng.",
      summary:
        "Zavádění nových modelů vozů do výroby na montážní lince, od úprav zařízení po náběh sériové výroby.",
      highlights: [
        "Vedl jsem cross-functional tým pro elektrické díly vozu při řešení problémů před náběhem výroby.",
        "Upravoval a instaloval jsem linková zařízení a před každým náběhem kontroloval vybavení závodu proti 3D výkresům.",
        "Certifikovaný technik vysokonapěťové diagnostiky; školil jsem vysokonapěťové techniky závodu.",
      ],
    },
    hmmcProcess: {
      title: "Procesní inženýr, montáž",
      shortTitle: "Procesní inž.",
      summary:
        "Odpovědnost za elektrické procesy na montážní lince: kódování řídicích jednotek vozu, instalace zařízení a zlepšování linky.",
      highlights: [
        "Udržoval jsem vysokou efektivitu linky úpravami procesů a modernizací zařízení.",
        "Spravoval jsem kódovací zařízení a instalace potřebné pro montáž větších komponent.",
      ],
    },
    pegatron: {
      title: "Průmyslový inženýr",
      shortTitle: "Průmyslový inž.",
      summary:
        "První práce, ještě při studiu. Set-top boxy, televize a osobní počítače.",
      highlights: [
        "Rozděloval jsem procesy mezi linky a udržoval aktuální layouty všech linek v AutoCADu.",
        "Připravoval jsem zlepšení linek, která zvýšila produktivitu.",
      ],
    },
  },
  education: {
    spsOstrava: { field: "Elektrotechnika a informatika" },
  },
  awards: {
    hmmcEmployee2023: { title: "Zaměstnanec roku" },
    hmmcAppreciation2020: {
      title: "Ocenění za přínos",
      note: "Náběh sériové výroby Kony Electric",
    },
    hmmcGold2016: { title: "Zlatý zaměstnanec roku" },
    pegatronEmployee2011: { title: "Zaměstnanec roku" },
  },
  skillGroups: {
    backend: "Backend",
    frontend: "Frontend",
    cloud: "Cloud a nástroje",
    engineering: "Strojírenství",
  },
  spokenLanguages: {
    czech: { name: "Čeština", level: "Rodilý mluvčí" },
    english: { name: "Angličtina", level: "Plynule" },
  },
  links: {
    site: "Osobní web",
    linkedIn: "LinkedIn",
    gitHub: "GitHub",
  },
  country: "Česká republika",
};
