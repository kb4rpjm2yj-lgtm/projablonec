"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HERO } from "@/lib/constants";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* Plynulé gradientní pozadí - hluboká modrá s jemným oranžovým odleskem bez ohraničení */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(240,125,43,0.12)_0%,_rgba(11,21,40,0)_70%)] rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(27,58,92,0.4)_0%,_rgba(11,21,40,0)_70%)] rounded-full blur-3xl" />
      </div>

      {/* Dekorativní tenké linky / kružnice na pozadí */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/3 rounded-full" />
      </div>

      {/* Obsah */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo - bez šedé krabice, čistě zasazené s dostatečným white-space */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/loga/hlavni.webp"
            alt="Správná cesta pro Jablonec – hlavní logo"
            width={450}
            height={112}
            className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
            priority
          />
        </motion.div>

        {/* Podtitulek s novým fontem Inter a lepším kontrastem */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/80 font-normal max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide"
        >
          {HERO.subtitle}
        </motion.p>

        {/* Akcentní tlačítko */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <a
            href="#program"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white font-bold py-4 px-12 rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-[0_15px_30px_rgba(240,125,43,0.35)] hover:scale-105 active:scale-98"
          >
            {HERO.cta}
            <ArrowDown size={18} className="animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indikátor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <ArrowDown className="text-white" size={24} />
      </motion.div>
    </section>
  );
}
