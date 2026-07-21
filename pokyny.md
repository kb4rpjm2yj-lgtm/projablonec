# 🗳️ POKYNY PRO VIRTUÁLNÍ TÝM – SPRÁVNÁ CESTA PRO JABLONEC

## 1. ARCHITEKTURA (Kodér)

### Tech Stack
| Vrstva | Technologie |
|---|---|
| Runtime | Node.js |
| Framework | Next.js 14 (App Router) |
| Jazyk | TypeScript |
| Styling | Tailwind CSS 3 + plugin `tailwindcss-animated` |
| Animace | Framer Motion |
| Font | Inter (Google Fonts) |
| Ikony | Lucide React |
| Deploy | Vercel (doména projablonec.cz) |

### Struktura projektu
```
projablonec/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── og-image.webp
│   ├── loga/
│   │   ├── hlavni.webp
│   │   ├── kompakt.webp
│   │   └── piktogram.webp
│   └── placeholders/
│       ├── kandidat-1.webp
│       ├── kandidat-2.webp
│       └── kandidat-3.webp
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── HeroSection.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── ProgramCard.tsx
│   │   ├── CandidateCard.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── WaveDecoration.tsx
│   └── lib/
│       └── constants.ts
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

### Komponentový strom
```
layout.tsx
├── Header (fixed, hlavní logo vlevo, navigace vpravo)
│   └── MobileMenu (slide-in, kompaktní logo nahoře)
├── <main>
│   ├── HeroSection
│   ├── SectionWrapper → O nás
│   ├── SectionWrapper → Mladé rodiny
│   ├── SectionWrapper → Bezpečí
│   ├── SectionWrapper → Daň z nemovitosti
│   ├── SectionWrapper → Nemocnice
│   ├── SectionWrapper → Kandidáti
│   └── SectionWrapper → Kontakt / Podpoř nás
├── Footer (kompaktní logo)
└── ScrollToTop
```

### Data flow
- `constants.ts` – jediný zdroj pravdy (všechny texty, barvy, konfigurace)
- Všechny sekce jsou **serverové komponenty** (Next.js App Router)
- Pouze `MobileMenu` používá `'use client'` kvůli stavu otevřeno/zavřeno
- Animace řešeny přes Framer Motion v klientských wrapperech

---

## 2. DESIGNOVÁ SPECIFIKACE (Webdesignér)

### Barevná paleta (Tailwind)
| Název | Hex | Tailwind třída | Použití |
|---|---|---|---|
| Primární modrá | `#1B3A5C` | `primary` | Pozadí hero, nadpisy, header |
| Akcentová oranžová | `#F07D2B` | `accent` | CTA tlačítka, důležité prvky, linky |
| Světle modrá | `#F0F4F8` | `primary-light` | Střídavé pozadí sekcí |
| Bílá | `#FFFFFF` | `white` | Text na tmavém, karty |
| Černá | `#111111` | `black` | Hlavní text |
| Tmavě šedá | `#4A5568` | `gray-600` | Doplňkový text |
| Světle oranžová | `#FDE8D8` | `accent-light` | Zvýrazněné boxy, badge |

### Typografie
- **Nadpisy**: Inter Bold 800 (H1: text-4xl md:text-5xl, H2: text-3xl md:text-4xl, H3: text-2xl)
- **Tělo**: Inter Regular 400 (text-lg, leading-relaxed)
- **CTA, navigace**: Inter SemiBold 600
- **Speciální claim**: Inter ExtraBold s oranžovým gradientem

### Layout
- **Max-width**: `max-w-7xl` (1280px) s paddingem `px-4 sm:px-6 lg:px-8`
- **Hero**: Full-screen (`min-h-screen`), hlavní logo centrované, jemný gradient pozadí
- **Sekce**: Střídání bílého a `primary-light` pozadí
- **Programové karty**: Grid 2 sloupce na desktopu / 1 na mobilu, bílá karta s `border-l-4 border-accent`
- **Kandidáti**: Grid 3 sloupce → 2 → 1, kruhové fotky, oranžová jména

### Vizuální prvky
- Dekorativní SVG vlny mezi sekcemi (modro-oranžový gradient)
- Ikonky Lucide pro každé téma
- Důležité hodnoty (15 000 Kč) v oranžové, tučně

---

## 3. TEXTACE (Copywriter)

### SEO Metadata
```json
Title: "Správná cesta pro Jablonec – Bezpečí. Bydlení. Rodina. Zdraví."
Description: "Volební uskupení pro komunální volby 2026 v Jablonci nad Nisou. Bezpečné ulice, dostupné bydlení, podpora mladých rodin a městská nemocnice."
```

### Navigace
- Program | Kandidáti | Kontakt

### Hero Section
```
Nadpis: SPRÁVNÁ CESTA PRO JABLONEC
Podtitulek: Aby byl Jablonec bezpečným domovem pro všechny generace.
CTA: NÁŠ PROGRAM
```

### Sekce 1 – O nás
```
Nadpis: Proč jdeme do voleb

Text:
Jablonec nad Nisou je krásné město s obrovským potenciálem. Nádherná příroda, přehrada, skvělí lidé. Přesto cítíme, že spousta věcí může být lepší. Bezpečnější ulice, dostupnější bydlení, větší podpora rodinám i jistota, že naše nemocnice zůstane v rukou města.

Nejsme profesionální politici. Jsme sousedé, rodiče, živnostníci. Lidé, kterým na Jablonci záleží. Chceme město, ze kterého naše děti nebudou muset odcházet za lepším. Protože to nejlepší vybudujeme tady.

To je správná cesta. Pro Jablonec.
```

### Sekce 2 – Mladé rodiny (PRIORITA)
```
Nadpis: Život pro mladé a budoucí rodiny
Ikona: Baby

Claim: "Vydělejte peníze kdekoli, ale rodinu založte tam, kde to dává smysl. Jablonec je správná cesta pro vaši budoucnost."

Body:
1. 15 000 KČ DO KOLÉBKY
   Každý nový jablonecký občánek, jehož rodiče zde mají trvalé bydliště a pracují nebo studují, dostane od města jednorázový finanční dar 15 000 Kč na nákup kočárku, výbavičky nebo plen.

2. POPELNICE ZDARMA PRO RODINY S DĚTMI
   Jakmile se vám narodí miminko, až do jeho 3 let za něj neplatíte městu ani korunu za odpad. Pleny a věci kolem dětí stojí dost – město vám tímto uleví.

3. FIXACE DANĚ Z NEMOVITOSTI PRO MLADÉ RODINY
   Mladý pár, který se kvůli rodině zadluží na 30 let hypotékou, nesmí město trestat dalším zdražováním. Peníze mají mladí investovat do dětí, ne je odevzdávat na radnici.
```

### Sekce 3 – Bezpečí
```
Nadpis: Bezpečí v našem městě
Ikona: Shield

Claim: Pustit děti samotné na hřiště? Projít se večer kolem přehrady nebo u autobusového nádraží bez nepříjemného pocitu? To by v Jablonci neměl být luxus, ale naprostá samozřejmost.

Body:
1. POSÍLENÍ HLÍDEK
   Posílíme hlídky městské policie a asistenty prevence kriminality v rizikových oblastech a během letní sezóny u přehrady.

2. PROSVĚTLENÍ TEMNÝCH MÍST
   Prosvětlíme temná zákoutí, parky a přístupové cesty k zastávkám. Bezpečí začíná u viditelnosti.

3. NULOVÁ TOLERANCE VANDALISMU
   Nulová tolerance k vandalismu a drobné kriminalitě, která znepříjemňuje život na našich sídlištích.
```

### Sekce 4 – Daň z nemovitosti
```
Nadpis: Bydlení v Jablonci nesmí být luxus
Ikona: Home

Claim: Koupit si byt, postavit dům nebo se starat o zděděný majetek po rodičích stojí v dnešní době obrovské úsilí a peníze. Stát i město lidem v minulých letech život zrovna neulehčily.

Body:
1. STOP DALŠÍMU ZVYŠOVÁNÍ DANÍ
   Říkáme jasné NE dalšímu ždímání peněženek jabloneckých rodin, mladých párů i seniorů. Správná cesta není zachraňovat městskou kasu z kapes vlastníků bydlení.

2. NÁŠ SLIB
   Zafixujeme koeficient daně z nemovitosti a budeme hledat cesty k jeho snížení pro trvale hlášené občany. Chceme, aby se v Jablonci dobře žilo, ne abychom lidi trestali za to, že investovali do vlastního domova.
```

### Sekce 5 – Nemocnice
```
Nadpis: Naše zdraví není na prodej
Ikona: HeartPulse

Claim: Jablonecká nemocnice je klenotem našeho města. Každý z nás – od narození dětí až po péči o naše prarodiče – se na ni v těžkých chvílích spoléhá.

Úvod: V poslední době se objevují snahy o její privatizaci nebo převod pod kraj. Pro nás je to nepřekročitelná červená linie.

Sliby:
1. 🏥 Nemocnice zůstane 100% v majetku města
2. 🔬 Budeme investovat do modernizace přístrojů a budov
3. 👨‍⚕️ Podpoříme zdravotnický personál tak, aby od nás neodcházeli špičkoví lékaři a sestřičky

Závěr: O zdraví Jablonečáků nebudeme licitovat. Nemocnice je naše a tak to zůstane.
```

### Sekce 6 – Kandidáti
```
Nadpis: Kdo za tím stojí
Podtitulek: Poznejte náš tým
[3 placeholder fotografie]
```

### Sekce 7 – Kontakt / Podpoř nás
```
Nadpis: Podpořte správnou cestu
Text: Chcete se zapojit, pomoci nebo máte dotaz? Ozvěte se nám.
Email: info@projablonec.cz
Facebook: /projablonec
Instagram: @projablonec
```

### Footer
```
© 2026 Správná cesta pro Jablonec. Všechna práva vyhrazena.
```

---

## 4. GRAFICKÉ ZADÁNÍ (Grafik)

| Úkol | Specifikace | Výstup |
|---|---|---|
| Loga – optimalizace | Hlavní → max 300px š, kompaktní → max 120px š, WebP kvalita 85% | `public/loga/*.webp` |
| Favicon | Piktogram → `.ico` (16/32/48) + `icon.svg` | `public/favicon.ico`, `public/favicon.svg` |
| Placeholder kandidáti | 3× fotka, 1:1, 400×400px, WebP, neutrální portrét | `public/placeholders/kandidat-*.webp` |
| Open Graph | 1200×630px, logo na modro-oranžovém gradientu, piktogram | `public/og-image.webp` |
| Dekorativní SVG | SVG vlna pro přechody mezi sekcemi | `src/components/WaveDecoration.tsx` |

---

## 5. SEO SPECIFIKACE (SEO Specialista)

| Prvek | Hodnota |
|---|---|
| Canonical | `https://projablonec.cz` |
| OG title | Správná cesta pro Jablonec |
| OG description | Aby byl Jablonec bezpečným domovem pro všechny generace. |
| OG image | `https://projablonec.cz/og-image.webp` (1200×630) |
| Twitter card | `summary_large_image` |
| Jazyk | `cs` |
| Strukturovaná data | JSON-LD: `Organization` s politickou tématikou |
| Heading hierarchy | H1 → H2 → H3 |
| Alt texty | Všechna loga: "Správná cesta pro Jablonec – [varianta] logo" |

---

## ✅ HARMONOGRAM TÝMU

| Krok | Role | Úkol | Stav |
|---|---|---|---|
| 1 | Grafik | Optimalizovat 3 loga do WebP, favicon | ✅ Hotovo (dodáno) |
| 2 | Grafik | Placeholder fotky kandidátů | ⬜ |
| 3 | Grafik | OG image | ⬜ |
| 4 | Kodér | Inicializace Next.js + Tailwind + Framer Motion | ⬜ |
| 5 | Kodér | Konfigurace barev, fontů, globálních stylů | ⬜ |
| 6 | Kodér | Layout, Header, MobileMenu, Footer | ⬜ |
| 7 | Kodér | HeroSection | ⬜ |
| 8 | Kodér | SectionWrapper, ProgramCard, CandidateCard | ⬜ |
| 9 | Copywriter | Texty do constants.ts | ⬜ |
| 10 | Kodér | Všechny sekce + integrace textů | ⬜ |
| 11 | SEO | Metadata, strukturovaná data, sitemap, robots.txt | ⬜ |
| 12 | Kodér | Deploy na Vercel + doména | ⬜ |