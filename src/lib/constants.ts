export const SITE = {
  title: "Správná cesta pro Jablonec",
  shortTitle: "SPRÁVNÁ CESTA PRO JABLONEC",
  description:
    "Volební uskupení pro komunální volby 2026 v Jablonci nad Nisou. Bezpečné ulice, dostupné bydlení, podpora mladých rodin a městská nemocnice.",
  url: "https://projablonec.cz",
  lang: "cs",
  email: "info@projablonec.cz",
  facebook: "/projablonec",
  instagram: "@projablonec",
  year: new Date().getFullYear(),
};

export const NAV_ITEMS = [
  { label: "Program", href: "#program" },
  { label: "Kandidáti", href: "#kandidati" },
  { label: "Kontakt", href: "#kontakt" },
];

export const HERO = {
  title: "SPRÁVNÁ CESTA PRO JABLONEC",
  subtitle: "Aby byl Jablonec bezpečným domovem pro všechny generace.",
  cta: "NÁŠ PROGRAM",
};

export const ABOUT = {
  title: "Proč jdeme do voleb",
  body: [
    "Jablonec nad Nisou je krásné město s obrovským potenciálem. Nádherná příroda, přehrada, skvělí lidé. Přesto cítíme, že spousta věcí může být lepší. Bezpečnější ulice, dostupnější bydlení, větší podpora rodinám i jistota, že naše nemocnice zůstane v rukou města.",
    "Nejsme profesionální politici. Jsme sousedé, rodiče, živnostníci. Lidé, kterým na Jablonci záleží. Chceme město, ze kterého naše děti nebudou muset odcházet za lepším. Protože to nejlepší vybudujeme tady.",
    "To je správná cesta. Pro Jablonec.",
  ],
};

export interface ProgramItem {
  title: string;
  subtitle: string;
  claim: string;
  icon: string;
  points: { label: string; text: string }[];
}

export const PROGRAMS: ProgramItem[] = [
  {
    title: "Život pro mladé a budoucí rodiny",
    subtitle: "Priorita číslo 1",
    claim:
      '"Vydělejte peníze kdekoli, ale rodinu založte tam, kde to dává smysl. Jablonec je správná cesta pro vaši budoucnost."',
    icon: "Baby",
    points: [
      {
        label: "15 000 KČ DO KOLÉBKY",
        text: "Každý nový jablonecký občánek, jehož rodiče zde mají trvalé bydliště a pracují nebo studují, dostane od města jednorázový finanční dar 15 000 Kč na nákup kočárku, výbavičky nebo plen.",
      },
      {
        label: "POPELNICE ZDARMA PRO RODINY S DĚTMI",
        text: "Jakmile se vám narodí miminko, až do jeho 3 let za něj neplatíte městu ani korunu za odpad. Pleny a věci kolem dětí stojí dost – město vám tímto uleví.",
      },
      {
        label: "FIXACE DANĚ Z NEMOVITOSTI PRO MLADÉ RODINY",
        text: "Mladý pár, který se kvůli rodině zadluží na 30 let hypotékou, nesmí město trestat dalším zdražováním. Peníze mají mladí investovat do dětí, ne je odevzdávat na radnici.",
      },
    ],
  },
  {
    title: "Bezpečí v našem městě",
    subtitle: "Nulová tolerance kriminalitě",
    claim:
      "Pustit děti samotné na hřiště? Projít se večer kolem přehrady nebo u autobusového nádraží bez nepříjemného pocitu? To by v Jablonci neměl být luxus, ale naprostá samozřejmost.",
    icon: "Shield",
    points: [
      {
        label: "POSÍLENÍ HLÍDEK",
        text: "Posílíme hlídky městské policie a asistenty prevence kriminality v rizikových oblastech a během letní sezóny u přehrady.",
      },
      {
        label: "PROSVĚTLENÍ TEMNÝCH MÍST",
        text: "Prosvětlíme temná zákoutí, parky a přístupové cesty k zastávkám. Bezpečí začíná u viditelnosti.",
      },
      {
        label: "NULOVÁ TOLERANCE VANDALISMU",
        text: "Nulová tolerance k vandalismu a drobné kriminalitě, která znepříjemňuje život na našich sídlištích.",
      },
    ],
  },
  {
    title: "Bydlení v Jablonci nesmí být luxus",
    subtitle: "Stop zdražování daně z nemovitosti",
    claim:
      "Koupit si byt, postavit dům nebo se starat o zděděný majetek po rodičích stojí v dnešní době obrovské úsilí a peníze. Stát i město lidem v minulých letech život zrovna neulehčily.",
    icon: "Home",
    points: [
      {
        label: "STOP DALŠÍMU ZVYŠOVÁNÍ DANÍ",
        text: "Říkáme jasné NE dalšímu ždímání peněženek jabloneckých rodin, mladých párů i seniorů. Správná cesta není zachraňovat městskou kasu z kapes vlastníků bydlení.",
      },
      {
        label: "NÁŠ SLIB",
        text: "Zafixujeme koeficient daně z nemovitosti a budeme hledat cesty k jeho snížení pro trvale hlášené občany. Chceme, aby se v Jablonci dobře žilo, ne abychom lidi trestali za to, že investovali do vlastního domova.",
      },
    ],
  },
  {
    title: "Naše zdraví není na prodej",
    subtitle: "Nemocnice musí zůstat městská",
    claim:
      "Jablonecká nemocnice je klenotem našeho města. Každý z nás – od narození dětí až po péči o naše prarodiče – se na ni v těžkých chvílích spoléhá.",
    icon: "HeartPulse",
    points: [
      {
        label: "🚫 ČERVENÁ LINIE",
        text: "V poslední době se objevují snahy o její privatizaci nebo převod pod kraj. Pro nás je to nepřekročitelná červená linie.",
      },
      {
        label: "🏥 100% V MAJETKU MĚSTA",
        text: "Nemocnice zůstane 100% v majetku města. Budeme investovat do modernizace přístrojů a budov.",
      },
      {
        label: "👨‍⚕️ PODPORA PERSONÁLU",
        text: "Podpoříme zdravotnický personál tak, aby od nás neodcházeli špičkoví lékaři a sestřičky.",
      },
    ],
  },
];

export const CANDIDATES = [
  {
    name: "Jméno Příjmení",
    role: "Lídr kandidátky",
    img: "/placeholders/kandidat-1.svg",
  },
  {
    name: "Jméno Příjmení",
    role: "Kandidát",
    img: "/placeholders/kandidat-2.svg",
  },
  {
    name: "Jméno Příjmení",
    role: "Kandidát",
    img: "/placeholders/kandidat-3.svg",
  },
];

export const CONTACT = {
  title: "Podpořte správnou cestu",
  text: "Chcete se zapojit, pomoci nebo máte dotaz? Ozvěte se nám.",
};