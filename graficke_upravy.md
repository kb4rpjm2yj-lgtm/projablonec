# 🎨 GRAFICKÉ ÚPRAVY & UI/UX UPGRADE
**Projekt**: SPRÁVNÁ CESTA PRO JABLONEC (Komunální volby 2026)  
**Role**: Art Director & Lead UI/UX Designer  
**Cíl**: Zvýšit estetickou hodnotu webu, zajistit vynikající kontrast, moderní proporce prvků a plynulé, vizuálně atraktivní přechody vyjadřující dynamiku hnutí.

---

## 1. DESIGN SYSTÉM & TYPOGRAFIE

### Typografická hierarchie
*   **Hlavní písmo pro nadpisy**: `Montserrat` (Google Fonts) – silný, geometrický, autoritativní a moderní bezpatkový font.
    *   *Řezy*: `font-extrabold` (800) pro H2/H1, `font-bold` (700) pro H3.
*   **Písmo pro tělo textu**: `Inter` (Google Fonts) – vysoce čitelný, neutrální, skvělý pro delší textové pasáže.
    *   *Řezy*: `font-normal` (400) pro běžný text, `font-semibold` (600) pro zvýraznění a podnadpisy.

### Aktualizované barvy (Tailwind config)
| Název | Hex | Použití | UX Význam |
|---|---|---|---|
| `primary` | `#1B3A5C` | Tělo textu, tmavé nadpisy | Důvěra, stabilita, profesionalita |
| `primary-dark` | `#0B1528` | Pozadí Hero, tmavé sekce | Hloubka, serióznost, prémiovost |
| `primary-light` | `#F1F5F9` | Pozadí sekcí, jemný podklad | Čistota, vzdušnost, čitelnost |
| `accent` | `#F07D2B` | CTA, ikony, klíčové akcenty | Energie, optimismus, změna, pohyb |
| `accent-dark` | `#D96418` | Hover stavy u CTA | Propojení, akce |
| `accent-light` | `#FFF5EB` | Podklad pod zvýrazněným textem | Pozornost, čitelnost |

---

## 2. DETAILNÍ ÚKOLY PRO KODÉRA (KROK ZA KROKEM)

### Krok 2.1: Header & Navigace (Svěží Glassmorphism)
- **Problém**: Bílé texty splývají s logem a světlými částmi Hero sekce.
- **Zadání**:
    1.  Nastavit výchozí stav na jemný podklad `bg-primary-dark/40 backdrop-blur-md border-b border-white/5`.
    2.  Při scrollu plynule transformovat na `bg-white/95 backdrop-blur-md shadow-lg border-b border-accent/10`.
    3.  Upravit barvu textu navigace: ve výchozím stavu na bílou s hoverem do oranžové, při scrollu na tmavě modrou (`text-primary`) s hoverem do oranžové.
    4.  Zvětšit max-width loga v headeru na 280px pro lepší čitelnost textu "SPRÁVNÁ CESTA" přímo v logu.

### Krok 2.2: Hero Sekce (Čistota & Odstranění "Krabicového" efektu)
- **Problém**: Logo v poloprůhledném šedém obdélníku působí levně a neesteticky.
- **Zadání**:
    1.  **Odstranit** celý poloprůhledný box `bg-white/10` i s jeho paddingem.
    2.  Logo umístit **přímo** na tmavé pozadí.
    3.  Prosvětlit pozadí za logem pomocí sofistikovaného radiálního gradientu (záře): hluboká modrá prolínající se s teplým oranžovým tónem s opacitou nastavenou na 15 %.
    4.  Nadpis a podtitulek zarovnat s perfektním optickým středem loga.
    5.  Zvětšit velikost loga na desktopu na šířku `max-w-[420px]` a na mobilu na `max-w-[280px]`.

### Krok 2.3: Programové karty (Hloubka & Mikro-interakce)
- **Problém**: Karty působí ploše a staticky. Body programu splývají.
- **Zadání**:
    1.  Přidat plynulou transformaci na hover: nadzvednutí o 6px (`group-hover:-translate-y-1.5`) a změna stínu na rozptýlený stín s oranžovým nádechem (`shadow-[0_20px_50px_rgba(240,125,43,0.08)]`).
    2.  Zmenšit ikony na 24px a zasadit je do jemného kruhu se "skleněným" efektem (`bg-accent/10 border border-accent/20 rounded-full w-12 h-12 flex items-center justify-center`).
    3.  Zvýraznit klíčové finanční hodnoty (např. **15 000 Kč**) v textu pomocí jemného oranžového podbarvení (`px-1.5 py-0.5 bg-accent-light text-accent-dark rounded font-bold`).

### Krok 2.4: Kandidáti (Organický, Neotřelý vzhled)
- **Problém**: Klasické kruhové portréty působí nudně a neosobně.
- **Zadání**:
    1.  Změnit tvar portrétů z dokonalého kruhu na elegantní zaoblený čtverec (`rounded-[2rem]`).
    2.  Přidat hover efekt: při najetí myší se portrét mírně pootočí o 2 stupně a zvětší o 4 % (`group-hover:scale-104 group-hover:rotate-2`).
    3.  Vytvořit pod jménem kandidáta tenkou, elegantní horizontální linku s gradientem od oranžové do ztracena.

### Krok 2.5: Plynulé přechody mezi sekcemi (Dynamika pohybu)
- **Problém**: Ostré, horizontální řezy mezi barvami sekcí působí šablonovitě.
- **Zadání**:
    1.  Naimplementovat asymetrické šikmé předěly sekcí pod úhlem **1.5 stupně** pomocí moderních CSS clip-path nebo SVG cest.
    2.  Tento šikmý směr vyjadřuje metaforu "pohybu vpřed / správné cesty" a dodává webu unikátní dynamiku.

### Krok 2.6: Footer (Brandová celistvost)
- **Problém**: Kompaktní logo v poloprůhledné krabičce opět narušuje čistotu patičky.
- **Zadání**:
    1.  Odstranit pozadí `bg-white/10` pod kompaktním logem ve footeru.
    2.  Zajistit perfektní kontrast loga s pozadím pomocí 100% bílé barvy (brightness-0 invert).
    3.  Sjednotit barvy ikon sociálních sítí do čistého oranžového odstínu `#F07D2B`.
