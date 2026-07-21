import Image from "next/image";
import { SITE, NAV_ITEMS } from "@/lib/constants";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      {/* Dekorativní oranžový akcent v pozadí */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + popis */}
          <div className="md:col-span-1">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
              <Image
                src="/loga/kompakt.webp"
                alt="Správná cesta pro Jablonec – kompaktní logo"
                width={100}
                height={40}
                className="h-auto w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Volební uskupení pro komunální volby 2026 v Jablonci nad Nisou. Bojujeme za bezpečné město, dostupné bydlení a spokojené rodiny.
            </p>
          </div>

          {/* Rychlé odkazy */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">
              Menu
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-accent transition-colors duration-200 text-sm font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-white/70 hover:text-accent transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <Mail size={16} className="text-accent" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="text-white/70 text-sm flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="#F07D2B">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  {SITE.facebook}
                </span>
              </li>
              <li>
                <span className="text-white/70 text-sm flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="#F07D2B">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                  {SITE.instagram}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Spodní lišta */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {SITE.year} {SITE.title}. Všechna práva vyhrazena.
          </p>
          <p className="text-white/20 text-xs">
            Vytvořeno pro komunální volby 2026
          </p>
        </div>
      </div>
    </footer>
  );
}