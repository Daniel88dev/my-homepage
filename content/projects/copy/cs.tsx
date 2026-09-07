import type { ProjectCopyBySlug } from "../types";

/**
 * The Czech Project Copy. A translation of `./en.tsx`, keyed by the same
 * Project slugs; the facts each entry describes live on the Project itself,
 * in `../index.ts`, and are not repeated here in either Language.
 *
 * Written to the same two rules as `content/dictionary/cs.tsx`, so the whole
 * site reads as one voice:
 *
 * 1. **Vykání.** Where the copy addresses the visitor at all it does so
 *    formally. Most of it is Daniel writing about his own work in the first
 *    person, as the English does.
 * 2. **Technical vocabulary stays English.** Technologies, frameworks,
 *    product names, repository names and plant terms of art — full-stack,
 *    backend, frontend, APS, DTC, TRQ — are left as they are, because that is
 *    how people in this industry speak here. Everything else is idiomatic
 *    Czech rather than English word order in Czech words.
 */
export const CS_PROJECT_COPY: ProjectCopyBySlug = {
  "flexi-day": {
    description:
      "Produkt pro správu dovolených a volna v týmech, který běží v ostrém provozu: sdílený kalendář, schvalování na jedno kliknutí, přehled zůstatků a synchronizace s kalendářem. Pro první uživatele zdarma.",
    dialogContent: (
      <>
        <p>
          flexiday je sdílený týmový kalendář pro volno. Lidé si během pár
          vteřin zažádají o dovolenou, home office nebo sick day, manažer to
          schválí jedním kliknutím a všichni vidí, kdo je v práci a kdo je pryč.
        </p>
        <p>
          Běží v ostrém provozu na AWS jako tři samostatně nasazované
          repozitáře: statická webová aplikace v Next.js, Express API nad
          PostgreSQL a pipeline pro transakční e-maily. Provozuji ho jako OSVČ
          z Brna a pro první uživatele je zdarma.
        </p>
      </>
    ),
    caseStudy: {
      title: "flexiday, kalendář pro týmové volno",
      pitch:
        "Sdílený kalendář pro týmové volno. Žádost během pár vteřin, schválení jedním kliknutím a stálý přehled o tom, kdo je v práci a kdo je pryč.",
      description:
        "Jak jsem postavil a provozuji flexiday: produkt pro správu volna v týmech – statická Next.js aplikace, Express API a e-mailová pipeline na AWS.",
      heroImageAlt:
        "Týmový kalendář flexiday: přehled jednoho měsíce s dovolenými, home office a sick days pro čtyři lidi, zobrazenými v různých barvách.",
    },
  },
  "grpc-swagger-case-study": {
    description:
      "Studijní projekt, ve kterém jsem si vyzkoušel nové technologie s cílem se je pořádně naučit (gRPC, Swagger, OpenAPI).",
    dialogContent: (
      <>
        <p>
          Cílem projektu bylo naučit se propojit dvě aplikace v Node.js přes
          gRPC.
        </p>
        <p>
          Serverová aplikace se stará o práci s databází a poskytuje data
          klientské aplikaci. Na klientovi jsem přes pug připravil i zobrazení
          dat v prohlížeči. Klient navíc obsahuje inicializační úlohy, které
          naplní databázi na straně serveru.
        </p>
        <p>
          Ke klientské aplikaci jsem přidal i OpenAPI dokumentaci ve Swaggeru,
          přes kterou se dá volat její REST API a získat data ke každému
          požadavku.
        </p>
      </>
    ),
  },
  "task-master": {
    description:
      "VE VÝVOJI – full-stack webová aplikace pro správu úkolů přihlášeného uživatele",
    dialogContent: (
      <>
        <p>VE VÝVOJI od února 2025</p>
        <p>
          Uživatel si může spravovat a filtrovat vlastní úkoly nebo si přidávat
          položky do nákupního seznamu na příští nákup.
        </p>
        <p>
          Smyslem projektu je naučit se pořádně pracovat s TanStack data
          tables, které se mi budou hodit i v dalších projektech.
        </p>
      </>
    ),
  },
  "dtc-list": {
    description:
      "Full-stack webová aplikace pro vyhledávání a zobrazování DTC kódů k závadám na vozidlech",
    dialogContent: (
      <>
        <p>
          Aplikace obsahuje velké množství DTC kódů a umí je filtrovat podle
          zadaného kódu.
        </p>
        <p>
          DTC znamená Diagnostic Trouble Code – kód, který označuje konkrétní
          závadu na některé jednotce vozidla.
        </p>
        <p>
          Každá jednotka ve voze může hlásit vlastní chyby, hlavně ve výrobě, a
          seznam kódů je opravdu dlouhý. Aplikace pomáhá rychle zjistit, o jaký
          DTC kód jde.
        </p>
        <p>
          Přidal jsem i přihlašování přes Clerk, které odemyká další funkce –
          podrobnější detail ke kódu a možnost nahlásit, že nějaký DTC kód
          v databázi chybí.
        </p>
      </>
    ),
  },
  "new-web-ots": {
    description:
      "Full-stack webová aplikace pro řízení procesů montáže vozů – rozdělení práce, obsazení pracovníky, efektivita a správa utahovacích operací",
    dialogContent: (
      <>
        <p>
          Full-stack webová aplikace pro řízení procesů montáže vozů –
          rozdělení práce, obsazení pracovníky, efektivita a správa utahovacích
          operací.
        </p>
        <p>
          Moje největší aplikace vyvinutá pro zaměstnavatele. Přidáváním nových
          funkcí jsem v ní strávil už přes 800 hodin. Celkem má 25 různých
          stránek a každá pokrývá jinou část funkcionality.
        </p>
        <p>
          Projekt je zcela odříznutý od internetu a běží jen na firemním
          intranetu pod vlastním firemním DNS záznamem, takže má i svoji
          doménu.
        </p>
        <p>
          Autentizaci i autorizaci jsem si napsal sám, s pomocí Lucia auth.
          Každý uživatel může mít jiná oprávnění k jednotlivým stránkám.
        </p>
        <p>
          Aplikace posílá uživatelům e-maily přes SMTP server pomocí
          Nodemaileru, kdykoli na ně směřuje nějaký požadavek. Stejně funguje
          i obnova hesla, kdy uživatel musí zadat ověřovací kód z doručeného
          e-mailu.
        </p>
        <p>
          Naposledy přibyla správa TRQ, která řídí utahovací operace: u každé
          z nich hlídá předepsaný utahovací moment a ověřuje, že použitý
          utahovací nástroj odpovídá požadavkům dané operace.
        </p>
        <p>
          Databáze celého projektu je poměrně rozsáhlá, má 25 tabulek. Všechna
          data jsou v Postgresu, který běží lokálně na stejném serveru jako
          webová aplikace. Dotazy jsem psal v čistém SQL bez ORM, protože jsem
          se chtěl SQL naučit důkladněji. Některé z nich jsou hodně velké, ten
          největší má 90 řádků, protože spojuje několik tabulek najednou.
        </p>
        <p>
          Výsledky efektivity a využití lidí se zobrazují v několika grafech
          postavených na knihovně shadcn/ui (která staví na Recharts) a ukazují
          vývoj po měsících.
        </p>
        <p>
          NENÍ VEŘEJNĚ DOSTUPNÉ. Musel jsem podepsat smlouvu o ochraně kódu a
          aplikace je majetkem zaměstnavatele, i když jsem ji celou vyvinul,
          nasadil a spravuji sám.
        </p>
      </>
    ),
  },
  "little-lemon-frontend-capstone-project": {
    description:
      "Závěrečný frontend projekt kurzu Meta Frontend Course: Little Lemon – statický web pro rezervaci stolu v restauraci",
    dialogContent: (
      <>
        <p>
          Závěrečný frontend projekt kurzu Meta Frontend Course: Little
          Lemon, statický web pro rezervaci stolu v restauraci.
        </p>
        <p>
          Úkolem bylo postavit aplikaci podle šablony ve Figmě, doplnit ji
          o animace a vytvořit formulář pro rezervaci stolu, bez volání
          backendu.
        </p>
        <p>
          Aplikace je responzivní, takže se dá pohodlně prohlížet i na mobilu
          nebo na tabletu.
        </p>
        <p>
          Žádnou další funkcionalitu stránka nemá, cílem bylo ukázat práci
          podle zadané šablony a dodaných podkladů.
        </p>
        <p>Aplikace je nasazená na Vercelu.</p>
      </>
    ),
  },
  "web-ots-interface": {
    description:
      "Rozhraní pro rozdělení práce, obsazení pracovníky a efektivitu procesů na montážní hale HMMC.",
    dialogContent: (
      <>
        <p>
          Web OTS je nástroj, který v reálném čase řídí procesy montáže vozů
          a jejich obsazení pracovníky a pomáhá počítat efektivitu práce.
        </p>
        <p>
          Je to full-stack webová aplikace – frontend v Reactu, backend na
          Node.js s Expressem, Sequelize a databází Postgres.
        </p>
        <p>
          Umí zobrazit APS (Assembly Process Sheets) jako PDF v modálním okně
          nebo v novém okně prohlížeče.
        </p>
        <p>
          Frontend je vícestránková aplikace, která vypisuje APS do řádků
          tabulky; všechna data přicházejí z backendového API. Dají se filtrovat
          podle linky, stanice i strany pozice na lince. K tomu je připojeno
          několik nástrojů: u každého záznamu APS se dá poslat požadavek
          odpovědné osobě, zobrazit historie změn a spočítat výkon jednotlivých
          lidí v celém Web OTS.
        </p>
        <p>
          Web OTS vznikl především pro potřeby HMMC a zvenčí není přístupný.
          Pokud by měl někdo zájem o podobné řešení, rád se o tom pobavím.
        </p>
      </>
    ),
  },
  "cft-problem-list": {
    description:
      "Projekt pro evidenci problémů CFT (Cross Functional Team) při vývoji nového modelu vozu",
    dialogContent: (
      <>
        <p>NEDOKONČENO</p>
        <p>
          Aplikace měla pomáhat s řešením problémů při vývoji nového vozu.
          Později jsme ve firmě přešli na M365 a evidence problémů se začala
          řešit jinak.
        </p>
        <p>
          Byl to jeden z prvních projektů, do kterých jsem se pustil. Původně
          vznikl v Reactu, JavaScriptu a Node.js, později jsem ho přepsal do
          Next.js a TypeScriptu – tehdy jsem přišel na to, co obojí přináší a
          jak moc Next.js jako full-stack framework zjednodušuje vývoj.
        </p>
      </>
    ),
  },
  "e-plant-shopping": {
    description:
      "Forknutý projekt z kurzu IBM Fullstack: aplikace v Reactu postavená na Reduxu",
    dialogContent: (
      <>
        <p>
          Projekt z kurzu IBM Fullstack, ve kterém šlo o frontendovou aplikaci
          v Reactu, CSS a Reduxu.
        </p>
        <p>
          Aplikace není nasazená, ale kdo si ji chce prohlédnout, může si ji
          spustit lokálně.
        </p>
      </>
    ),
  },
  "express-book-review": {
    description:
      "Projekt z kurzu IBM Fullstack pro správu recenzí knih a zobrazení recenzí od ostatních uživatelů",
    dialogContent: (
      <>
        <p>
          Projekt z kurzu IBM Fullstack pro správu recenzí knih a zobrazení
          recenzí od ostatních uživatelů.
        </p>
        <p>
          Úkolem bylo ukázat práci s backendovým API na Node.js a Expressu, kde
          se uživatel u každého požadavku ověřuje jednoduchým JSON Web Tokenem.
        </p>
        <p>
          Jde jen o jednoduchou CRUD API službu bez HTML frontendu. Otestovat se
          dá v Postmanu, přes cURL nebo jakýmkoli jiným nástrojem na testování
          API.
        </p>
      </>
    ),
  },
  "gift-link": {
    description:
      "Závěrečný full-stack projekt kurzu IBM: Gift Link – aplikace pro sdílení darů a příspěvků k jednotlivým položkám mezi uživateli.",
    dialogContent: (
      <>
        <p>
          Závěrečný full-stack projekt kurzu IBM: postavit aplikaci s databází
          (MongoDB).
        </p>
        <p>
          Uživatelé mohou nabízet a nahrávat dary, bez ukládání obrázků,
          protože pro ně není úložiště, a přihlašovat se přes JWT token. Dary
          i příspěvky k jednotlivým položkám se ukládají do MongoDB.
        </p>
        <p>
          Součástí zadání byla i mikroslužba – REST API, které se staralo
          o logování a pomocí SentimentAnalyzeru z knihovny Natural (s
          PorterStemmerem a datovou sadou AFINN) vyhodnocovalo sentiment.
          Výsledkem je skóre, tedy číslo vyjadřující, jak pozitivní nebo
          negativní věta je.
        </p>
        <p>
          Aplikace není nasazená, měla jen prokázat schopnost postavit
          full-stack aplikaci.
        </p>
      </>
    ),
  },
  "node-file-server": {
    description: "Velmi jednoduchá mikroslužba souborového serveru v Node.js",
    dialogContent: (
      <>
        <p>
          Velmi jednoduchá mikroslužba souborového serveru v Node.js. (Opravdu
          velmi jednoduchá, má asi sto řádků kódu.)
        </p>
        <p>
          Vznikla hlavně kvůli mému hlavnímu projektu Web OTS, kde se stará
          o nahrávání PDF souborů a na vyžádání je posílá zpět.
        </p>
        <p>
          Díky tomu můžu náhled každého nahraného PDF zobrazit rovnou ve Web
          OTS.
        </p>
        <p>Aplikace není veřejně nasazená.</p>
      </>
    ),
  },
  "asteroids-python-game": {
    description: "Velmi jednoduchá hra v Pythonu – Asteroids",
    dialogContent: (
      <>
        <p>Velmi jednoduchá hra v Pythonu – Asteroids.</p>
        <p>
          Vznikla podle návodu na boot.dev jako jeden z projektů kurzu Pythonu.
        </p>
        <p>Cílem hry je střílet asteroidy a vyhnout se srážce s nimi.</p>
      </>
    ),
  },
  "maze-solver-python": {
    description:
      "Aplikace v Pythonu, která vygeneruje bludiště a pak se v něm pokusí najít cestu ven",
    dialogContent: (
      <>
        <p>
          Aplikace v Pythonu, která vygeneruje bludiště a následně v něm hledá
          cestu ven.
        </p>
        <p>
          Vznikla podle návodu na boot.dev jako jeden z projektů kurzu Pythonu.
        </p>
        <p>
          Uživatel do ničeho nezasahuje, vygenerování i vyřešení proběhne
          automaticky.
        </p>
      </>
    ),
  },
};
