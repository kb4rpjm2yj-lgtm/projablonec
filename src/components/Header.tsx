"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-accent/15 py-3"
            : "bg-primary-dark/40 backdrop-blur-md border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/loga/hlavni.webp"
              alt="Správná cesta pro Jablonec – hlavní logo"
              width={280}
              height={70}
              className={`h-auto w-auto transition-all duration-300 ${
                scrolled ? "max-h-9" : "max-h-11"
              }`}
              priority
            />
          </a>

          {/* Desktop navigace */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                  scrolled
                    ? "text-primary hover:text-accent"
                    : "text-white/90 hover:text-accent"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
            aria-label="Otevřít menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}