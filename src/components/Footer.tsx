import Image from "next/image";
import { SITE, NAV_ITEMS } from "@/lib/constants";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + popis */}
          <div className="md:col-span-1">
            <Image
              src="/loga/kompakt.webp"
              alt="Správná cesta pro Jablonec – kompaktní logo"
              width={120}
              height={48}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Volební uskupení pro komunální volby 2026 v Jablonci nad Nisou.
            </p>
          </div>

          {/* Rychlé odkazy */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">
              Menu
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-white/70 hover:text-accent transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <Mail size={16} />
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="text-white/70 text-sm">
                  Facebook: {SITE.facebook}
                </span>
              </li>
              <li>
                <span className="text-white/70 text-sm">
                  Instagram: {SITE.instagram}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Spodní lišta */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            &copy; {SITE.year} {SITE.title}. Všechna práva vyhrazena.
          </p>
          <p className="text-white/30 text-xs">
            Vytvořeno pro komunální volby 2026
          </p>
        </div>
      </div>
    </footer>
  );
}