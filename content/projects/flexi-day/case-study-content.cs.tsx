import Link from "next/link";
import { CaseStudySection, Prose } from "@/components/case-study/Section";
import { FeatureSplit, FeatureTile, Figure } from "@/components/case-study/Media";
import {
  Callout,
  LessonList,
  RepositoryList,
  TechListGroups,
} from "@/components/case-study/Lists";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";
import { withNotes } from "./repositories";
import type { CaseStudyNavItem } from "@/content/projects/types";
import { SECTION_IDS, withAlt } from "./case-study";

const SHOT_ALT = {
  calendar:
    "Týmový kalendář flexiday: přehled jednoho měsíce s dovolenými, home office a sick days pro čtyři lidi, zobrazenými v různých barvách.",
  dashboard:
    "Úvodní stránka flexiday: žádosti na schválení, kdo je dnes mimo práci, nadcházející absence, kalendář měsíce a stav kvóty.",
  requests:
    "Stránka žádostí dovolených zobrazuje typ každé žádosti, datum, stav a zda je žádost schválená.",
  groups:
    "Členové skupiny s náhledem na oprávnění každé osoby a záložky pro kvóty, pozvánky, nastavení a zrcadlení skupin.",
  report:
    "Report stránka s přehledem čerpání členů v daném roce a Excel export dat.",
  calendarSync:
    "Nový dialog pro správu kalendáře: vyberte, které záznamy a jaké typy dovolených chcete zahrnout, s živým náhledem měsíce.",
  holidays:
    "Nastavení skupiny: pracovní dny, státní svátky nastavené na Českou republiku.",
  localisation:
    "Stejná úvodní stránka v češtině, se státním svátkem v České republice k datu 28. září.",
  landing:
    "Veřejná úvodní stránka flexiday v tmavém režimu.",
  mobile:
    "Formulář žádosti o volno na telefonu: typ absence, výběr data a poznámka.",
};

const shots = withAlt(SHOT_ALT);

const REPOSITORY_NOTES = {
  "Web app":
    "Next.js SPA se statickým exportem: úvodní stránka a přihlášená část produktu.",
  Backend:
    "Express 5 API, úlohy na pozadí a Terraform pro AWS.",
  Emails:
    "Šablony react-email vykreslené při buildu a synchronizované do AWS SES.",
  Workspace:
    "Shell pro tři repozitáře: sdílené dovednosti agentů AI, lokální vývojářské CLI, MCP server a dokumentace napříč repozitáři, takže testy a nástroje běží z jednoho místa. Jednoduché sourozenecké klony spíše než submoduly, takže každý repozitář je stále vydáván podle vlastního plánu.",
};

const repositories = withNotes(REPOSITORY_NOTES);

export const sections: CaseStudyNavItem[] = [
  { id: SECTION_IDS.hero, label: "Přehled" },
  { id: SECTION_IDS.problem, label: "Problém" },
  { id: SECTION_IDS.features, label: "Co umí" },
  { id: SECTION_IDS.architecture, label: "Architektura" },
  { id: SECTION_IDS.stack, label: "Technologie" },
  { id: SECTION_IDS.status, label: "Stav" },
  { id: SECTION_IDS.learnings, label: "Co jsem se naučil" },
];

const FlexiDayCaseStudyContentCs = () => (
  <>
    <CaseStudySection
      id={SECTION_IDS.problem}
      title="Excelová tabulka, která potřebovala více života"
      lede="V každém malém týmu, ve kterém jsem pracoval, se volno evidovalo ve sdílené tabulce. Žádná z nich ale nikdy neodpověděla na otázku, která lidi opravdu zajímá."
    >
      <Prose>
        <p>
          Ta otázka je vždycky stejná: <strong>kdo má příští týden volno?</strong>{" "}
          Na její zodpovězení tabulka nestačí. Data v ní jsou statická: drží
          dny, které si někdo zapsal, a nic s nimi nedělá — žádná žádost, žádné
          schválení, žádná připomínka, žádná kontrola, že nejsou dva lidé pryč
          ve stejném týdnu. Každé volno se musí domluvit osobně, a to stojí čas
          oba dva.
        </p>
        <p>
          Nástroje, které tohle řeší pořádně, jsou stavěné pro HR oddělení.
          Chtějí organizační strukturu, napojení na mzdy a smlouvu na počet
          uživatelů dřív, než si pětičlenný tým stihne vzít volný pátek.
        </p>
        <p>
          flexiday sedí přesně v téhle mezeře. Je to klidný sdílený kalendář pro
          týmy od několika lidí po několik stovek: žádost během pár vteřin,
          schválení jedním kliknutím, celý měsíc na jeden pohled. Zůstatky,
          státní svátky i kalendářové feedy si hlídá sám a nic z toho
          nepotřebuje HR oddělení.
        </p>
      </Prose>
      <Callout>
        <p>
          Určeno pro malé a rostoucí týmy v EU. Data leží v AWS ve Frankfurtu,
          rozhraní vychází v angličtině a češtině a celý produkt funguje ve
          světlém i tmavém režimu.
        </p>
      </Callout>
    </CaseStudySection>

    <CaseStudySection
      id={SECTION_IDS.features}
      title="Co flexiday umí"
      lede="Všechno visí na jednom kalendáři. Zbytek existuje proto, aby ten kalendář vždycky seděl."
    >
      <div className="flex flex-col gap-[8rem] max-md:gap-[5.6rem]">
        <div>
          <Figure
            shot={shots.calendar}
            caption="Měsíční pohled v režimu Group. Devět typů volna, každý s vlastní barvou, filtrovatelných po typu."
          />
          <div className="mt-[3.2rem] grid gap-x-[6.4rem] gap-y-[2.4rem] md:grid-cols-2">
            <div>
              <h3 className="text-md font-semibold">Sdílený týmový kalendář</h3>
              <p className="mt-[1.2rem] text-sm text-text-muted">
                Jeden barevně odlišený pohled na to, kdo má kdy volno. Přepnete
                mezi vlastními záznamy a celou skupinou, vyfiltrujete podle typu
                volna a kliknutím na kterýkoli den odtud rovnou založíte žádost.
              </p>
            </div>
            <div>
              <h3 className="text-md font-semibold">Devět druhů volna</h3>
              <p className="mt-[1.2rem] text-sm text-text-muted">
                Dovolená, home office, sick days, nemocenská, placené i
                neplacené volno, studijní volno, státní svátky a jedna
                univerzální položka. Kvótu ubírají jen první tři; ostatní tam
                jsou proto, aby kalendář říkal pravdu.
              </p>
            </div>
          </div>
        </div>

        <FeatureSplit
          title="Schvalování na jedno kliknutí"
          shot={shots.requests}
          caption="Fronta žádostí: typ, termíny, stav a schválení nebo zamítnutí přímo z řádku."
        >
          <p>
            Žádost přistane ve frontě schvalovatele i s termíny, typem a
            poznámkou. Schválit nebo zamítnout se dá jedním ťuknutím. Žadatel
            tak jako tak dostane e-mail a notifikaci v aplikaci, a při zamítnutí
            i důvod.
          </p>
          <p>
            Každá změna stavu se ukládá jako událost, takže historie žádosti
            není nikdy záhada.
          </p>
        </FeatureSplit>

        <FeatureSplit
          reverse
          title="Kdo je pryč, na jeden pohled"
          shot={shots.dashboard}
          caption="Dashboard manažera: fronta ke schválení, kdo je dnes pryč, nadcházející volno a celý měsíc na jedné obrazovce."
        >
          <p>
            Dashboard odpovídá na každodenní otázku dřív, než ji někdo stihne
            položit: kdo je dnes pryč, kdo bude pryč jako další a co čeká na mě.
            Hned vedle jsou zůstatky, takže manažer při schvalování rovnou vidí,
            jestli na to dny vůbec jsou.
          </p>
        </FeatureSplit>

        <FeatureSplit
          title="Skupiny, schvalovatelé a pokrytí"
          shot={shots.groups}
          caption="Členové skupiny a to, kdo smí zobrazovat, spravovat a schvalovat. Kvóty, pozvánky a nastavení jsou v dalších záložkách."
        >
          <p>
            Tým, pobočka nebo projekt — to všechno je skupina. Každá skupina má
            vlastního manažera, schvalovatele, pracovní dny a zemi, podle které
            se řídí svátky, takže kolega v Praze i kolega ve Vídni vidí každý ty
            správné červené dny.
          </p>
          <p>
            Pokrytí je otázka, na kterou odpovídá pohled na skupinu:
            schvalovatel před schválením vidí, kdo další ze skupiny už v daných
            dnech chybí, takže se na slabý týden přijde dopředu, a ne až v něm.
          </p>
          <p>
            Pozvánky jsou jednorázové odkazy vázané na e-mailovou adresu.
            Manažer může spravovat kalendář člena týmu, když si někdo zapomene
            zadat vlastní sick day.
          </p>
        </FeatureSplit>

        <div className="grid gap-x-[4.8rem] gap-y-[5.6rem] md:grid-cols-2">
          <FeatureTile title="Zůstatky, které sedí" shot={shots.report}>
            <p>
              Roční nároky, převod nevyčerpaných dnů i benefit sick days v
              placených tarifech se sledují na člověka a na skupinu.
              Naplánovaná úloha překlopí kvóty do nového roku. Report se
              exportuje do Excelu pro každého, kdo tabulku pořád ještě
              potřebuje.
            </p>
          </FeatureTile>
          <FeatureTile title="Žije ve vašem vlastním kalendáři" shot={shots.calendarSync}>
            <p>
              Soukromý ICS feed dostane nepřítomnosti týmu do Google kalendáře,
              Outlooku nebo Apple kalendáře hned vedle vašich schůzek. Žádný
              plugin, žádné potvrzování OAuth; jednou se přihlásíte k odběru a
              dál se to udržuje samo.
            </p>
          </FeatureTile>
        </div>

        <div className="grid items-center gap-x-[6.4rem] gap-y-[3.2rem] md:grid-cols-[1fr_minmax(0,32rem)]">
          <div className="flex flex-col gap-[3.2rem]">
            <div>
              <h3 className="text-md font-semibold">Žádost za pár vteřin, na jakékoli obrazovce</h3>
              <p className="mt-[1.2rem] text-sm text-text-muted">
                Vyberete typ, vyberete rozsah, přidáte poznámku, hotovo.
                Vícedenní žádosti zůstávají pohromadě, takže schvalovatel vidí
                jednu položku, ne pět. V placených tarifech může žádost nést
                přílohu, třeba potvrzení od lékaře, která se nahraje rovnou do
                S3 a zpracuje ji Lambda.
              </p>
            </div>
            <div>
              <h3 className="text-md font-semibold">Soukromé ve výchozím nastavení</h3>
              <p className="mt-[1.2rem] text-sm text-text-muted">
                Členové vidí svou skupinu. Schvalovatelé vidí to, co schvalují.
                Citlivé typy volna se všem kromě lidí, kteří to potřebují vědět,
                zobrazují diskrétně. Přihlášení podporuje Google, Microsoft a
                dvoufaktorové ověření.
              </p>
            </div>
          </div>
          <Figure
            shot={shots.mobile}
            sizes="(max-width: 768px) 60vw, 320px"
            className="mx-auto w-full max-w-[32rem]"
            caption="Formulář nové žádosti na telefonu."
          />
        </div>

        <div className="grid gap-x-[4.8rem] gap-y-[5.6rem] md:grid-cols-2">
          <FeatureTile title="Státní svátky podle země" shot={shots.holidays}>
            <p>
              Každá skupina si zvolí zemi, jejíž svátky sleduje, a pracovní dny,
              které se počítají. Svátky se dohledávají podle země a roku, takže
              nikdo neudržuje seznam červených dnů ručně a rozsah, který přes
              svátek přechází, potichu neubere den z něčího nároku.
            </p>
          </FeatureTile>
          <FeatureTile title="Angličtina a čeština" shot={shots.localisation}>
            <p>
              Rozhraní, e-maily i veřejný web vycházejí v obou jazycích a volba
              jde za člověkem, ne za týmem. Řídí se jí i formát data, začátek
              týdne a názvy svátků, na čemž záleží víc než na samotném znění
              textů.
            </p>
          </FeatureTile>
        </div>
      </div>
    </CaseStudySection>

    <CaseStudySection
      id={SECTION_IDS.architecture}
      title="Tři repozitáře, jeden produkt"
      lede="Webová aplikace, API a e-mailové šablony se verzují a nasazují každé podle svého."
    >
      <div className="flex flex-col gap-[4.8rem]">
        <ArchitectureDiagram
          caption="Plné čáry jsou provoz za běhu. Přerušované se dějí při buildu nebo nasazení. Webová aplikace nikdy neběží na serveru: všechno dynamické jde přes API."
        />
        <Prose>
          <p>
            <strong>Webová aplikace je statický export.</strong> Next.js ji
            sestaví do obyčejných souborů, které leží na S3 za CloudFrontem.
            Žádný serverový runtime, žádné route handlery, žádný middleware.
            Všechno dynamické je JSON volání na API, díky čemuž je hosting
            levný a útočná plocha malá.
          </p>
          <p>
            <strong>API používá Express 5</strong> na App Runneru s
            přísně jednosměrným vrstvením: routy volají controllery, controllery
            volají services a services sahají do databáze přes Drizzle.
            Kontroly oprávnění bydlí ve vrstvě services, takže na ně routa
            nemůže zapomenout. Cron úlohy ve stejném procesu překlápějí kvóty na
            přelomu roku a uklízejí prošlé přílohy.
          </p>
          <p>
            <strong>E-maily se kompilují, nerenderují.</strong> Repozitář emails
            vykreslí react-email komponenty do HTML už při buildu a publikuje je
            do SES jako nativní šablony. API pak odesílá podle názvu šablony a s
            hrstkou proměnných. Rozbitá šablona shodí build e-mailů, nikdy ne
            požadavek uživatele.
          </p>
          <p>
            <strong>Infrastruktura je Terraform</strong>: App Runner, RDS, VPC,
            S3, Secrets Manager, IAM a Route 53. Aplikování změn je vědomý ruční
            krok, nikdy nic, co by CI udělalo po zeleném buildu.
          </p>
        </Prose>
        <div>
          <h3 className="mb-[1.6rem] text-md font-semibold">Repozitáře</h3>
          <RepositoryList repositories={repositories} />
          <p className="mt-[2.4rem] max-w-[62ch] text-sm text-text-muted">
            Repozitář workspace existuje proto, že tři nezávislé repozitáře se
            stejně musí vyvíjet společně. Drží agent skills, které používám s
            Claude Code, CLI, které nastartuje celý stack a naplní ho
            realistickým týmem, MCP server nabízející stejné operace agentům, a
            dokumentaci, která dává smysl jen napříč všemi třemi. Produktové
            repozitáře v něm leží jako obyčejné sesterské klony, a to záměrně:
            submoduly připnou konkrétní commit, a připínání je pravý opak toho,
            co nezávisle vydávané repozitáře potřebují.
          </p>
        </div>
      </div>
    </CaseStudySection>

    <CaseStudySection id={SECTION_IDS.stack} title="Technologie podle repozitářů">
      <TechListGroups
        groups={[
          {
            name: "Web app",
            items: [
              "Next.js 16",
              "React 19",
              "TypeScript",
              "Tailwind v4",
              "shadcn/ui",
              "TanStack Query",
              "better-auth",
              "Zod",
              "Recharts",
              "Paddle",
              "S3 + CloudFront",
              "Vitest",
              "Sentry",
            ],
          },
          {
            name: "Backend",
            items: [
              "Node 24",
              "Express 5",
              "Drizzle ORM",
              "PostgreSQL",
              "better-auth",
              "Google OAuth",
              "Microsoft OAuth",
              "AWS SDK (SES, S3)",
              "App Runner",
              "RDS",
              "Lambda",
              "Terraform",
              "croner",
              "date-holidays",
              "ExcelJS",
              "sharp",
              "Vitest",
              "Sentry",
            ],
          },
          {
            name: "Emails",
            items: ["react-email", "React 19", "AWS SES templates", "tsx"],
          },
          {
            name: "Workspace",
            items: [
              "Node scripts",
              "MCP server",
              "Claude agent skills",
              "GitHub Actions",
              "CodeQL",
              "actionlint",
              "shellcheck",
              "ESLint",
              "Prettier",
            ],
          },
        ]}
      />
    </CaseStudySection>

    <CaseStudySection
      id={SECTION_IDS.status}
      title="Jak to teď stojí"
      lede="Běží v ostrém provozu a pro první uživatele je zdarma."
    >
      <div className="grid gap-x-[6.4rem] gap-y-[4rem] md:grid-cols-2">
        <Prose>
          <p>
            flexiday běží na adrese{" "}
            <Link
              href="https://www.flexi-day.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-brand hover:decoration-brand"
            >
              flexi-day.com
            </Link>{" "}
            na infrastruktuře popsané výše. Platby stojí na Paddle jako
            merchant of record; tarify Free, Pro a Enterprise se liší tím, kolik
            skupin a lidí unesou. První uživatelé ho mají zdarma, dokud se
            produkt neusadí.
          </p>
          <p>
            Provozuji ho jako OSVČ z Brna. Začalo to jako tabulka na evidenci
            dovolených, kterou jsem pořád rozbíjel, a dneska je z toho nástroj,
            jaký jsem si přál.
          </p>
        </Prose>
        <div>
          <h3 className="text-xs font-medium text-text">Co bude dál</h3>
          <ul className="mt-[1.6rem] flex flex-col gap-[2rem] text-sm text-text-muted">
            <li className="border-l border-border pl-[2rem]">
              <strong className="block font-medium text-text">Přímá synchronizace s Google Calendarem</strong>
              Zapisovat schválené volno rovnou do kalendářů lidí místo ICS
              feedu, který si dnes přidávají k odběru.
            </li>
            <li className="border-l border-border pl-[2rem]">
              <strong className="block font-medium text-text">Mobilní aplikace</strong>
              Nativní aplikace na dvě věci, které lidé na telefonu opravdu
              dělají: zadat si volno a schválit ho někomu jinému.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[5.6rem]">
        <Figure
          shot={shots.landing}
          caption="Veřejný web na flexi-day.com, ze kterého pochází i vlastní texty produktu."
        />
      </div>
    </CaseStudySection>

    <CaseStudySection id={SECTION_IDS.learnings} title="Co jsem se naučil">
      <LessonList
        items={[
          {
            title: "Statický frontend je přednost",
            body: (
              <p>
                Odstranění serveru z webové aplikace donutilo všechnu logiku
                bydlet na jednom místě, v API. Frontend je díky tomu
                levný na hosting a nemá odkud vynést tajemství, a poctivější je
                i lokální vývoj: co funguje proti localhost:8080, funguje i v
                produkci.
              </p>
            ),
          },
          {
            title: "Kontroly oprávnění patří do vrstvy services",
            body: (
              <p>
                Zpočátku kontroly oprávnění bydlely v route handlerech a
                rozjížděly se. Jakmile se přesunuly vedle byznysové logiky,
                nový endpoint už je nemohl obejít a testy je mohly ověřovat bez
                HTTP.
              </p>
            ),
          },
          {
            title: "E-mail je artefakt buildu",
            body: (
              <p>
                Vykreslení šablon při buildu a jejich synchronizace do SES
                proměnily e-mail z rizika za běhu v ověřený artefakt. Zástupné
                proměnné se kontrolují ještě před publikováním, takže šablona
                nemůže odejít s proměnnou, kterou nikdo nevyplní.
              </p>
            ),
          },
          {
            title: "Naseedovat celý příběh, ne jeden řádek",
            body: (
              <p>
                Vývojářský příkaz, který vytvoří tým, kvóty a žádosti ve stavech
                pending, approved i rejected, udělal z každé obrazovky něco, co
                se dá vyzkoušet během pár vteřin. Snímky obrazovky na této
                stránce pocházejí právě z těchto dat.
              </p>
            ),
          },
          {
            title: "Agenti potřebují sdílený workspace",
            body: (
              <p>
                Práce napříč třemi repozitáři s kódovacími agenty začala jít
                hladce až ve chvíli, kdy skills, vývojářské CLI a doménový
                slovník bydlely na jednom místě. Repozitář workspace je malý, a
                přesto z něj pochází většina užitku.
              </p>
            ),
          },
        ]}
      />
    </CaseStudySection>
  </>
);

export default FlexiDayCaseStudyContentCs;
