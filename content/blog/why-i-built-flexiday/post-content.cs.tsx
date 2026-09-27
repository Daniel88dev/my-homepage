import Link from "next/link";
import { PostProse } from "@/components/blog/PostProse";
import { languagePath } from "@/lib/language";

const WhyIBuiltFlexidayPostCs = () => (
  <PostProse>
    <h2>Tabulka</h2>
    <p>
      V každém malém týmu, ve kterém jsem pracoval, se volno evidovalo ve
      sdílené tabulce. Držela dny, které si někdo zapsal, a nic s nimi
      nedělala: žádná žádost, žádné schválení, žádná připomínka, žádné
      varování, že jsou dva lidé ze stejného týmu pryč ve stejném týdnu.
    </p>
    <p>
      Otázka, která lidi opravdu zajímala — <strong>kdo má příští týden volno?</strong>{" "}
      — se pořád musela položit nahlas a každé volno se domlouvalo osobně. To
      stojí čas oba dva, a to pokaždé.
    </p>

    <h2>Proč ne hotový nástroj</h2>
    <p>
      Nástroje, které tohle řeší pořádně, jsou stavěné pro HR oddělení. Chtějí
      organizační strukturu, napojení na mzdy a smlouvu na počet uživatelů
      dřív, než si pětičlenný tým stihne vzít volný pátek. Na to, co má být
      kalendář, je to pro malý tým až příliš mnoho ceremonií.
    </p>

    <h2>Proč si ho postavit sám</h2>
    <p>
      Chtěl jsem klidný sdílený kalendář: žádost během pár vteřin, schválení
      jedním kliknutím, celý měsíc na jeden pohled. A chtěl jsem postavit celý
      produkt, ne jen funkci v produktu někoho jiného. flexiday znamenal
      vlastnit každou vrstvu — databázové schéma, API, statickou webovou
      aplikaci, e-mailovou pipeline i Terraform kolem nich — a provozovat to
      v produkci jako OSVČ.
    </p>
    <p>
      Je to taky starý zvyk. V Hyundai nástroje, které jsem psal ve volném
      čase, nakonec běžely přímo ve výrobní hale pro skutečné týmy, a právě to
      mě přesvědčilo, abych se softwarem začal živit. flexiday je stejný
      instinkt, jen namířený na problém, který má každý tým.
    </p>

    <h2>Co z toho vzniklo</h2>
    <p>
      flexiday běží na{" "}
      <Link href="https://www.flexi-day.com" target="_blank" rel="noopener noreferrer">
        flexi-day.com
      </Link>
      , mluví anglicky i česky a pro první uživatele je zdarma. Jak je
      postavený — tři repozitáře, statická Next.js aplikace, Express API na AWS
      a e-maily kompilované při buildu — popisuji v{" "}
      <Link href={languagePath("cs", "/projects/flexi-day")}>
        případové studii flexiday
      </Link>
      .
    </p>
  </PostProse>
);

export default WhyIBuiltFlexidayPostCs;
