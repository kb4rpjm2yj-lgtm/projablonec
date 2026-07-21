"use client";

import { useEffect } from "react";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/constants";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menu panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo + zavřít */}
          <div className="flex items-center justify-between mb-12">
            <Image
              src="/loga/kompakt.webp"
              alt="Správná cesta pro Jablonec – kompaktní logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
            <button
              onClick={onClose}
              className="text-primary p-2"
              aria-label="Zavřít menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigace */}
          <nav className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Footer v menu */}
          <div className="mt-auto pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Správná cesta pro Jablonec
            </p>
          </div>
        </div>
      </div>
    </>
  );
}