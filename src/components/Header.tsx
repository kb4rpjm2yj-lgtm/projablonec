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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/loga/hlavni.webp"
              alt="Správná cesta pro Jablonec – hlavní logo"
              width={240}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop navigace */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-primary hover:text-accent transition-colors duration-200 uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-primary p-2"
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