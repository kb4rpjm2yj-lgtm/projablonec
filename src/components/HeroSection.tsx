"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HERO } from "@/lib/constants";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradientní pozadí - oranžový akcent v centru */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1E34] via-[#1B3A5C] to-[#0F1E34]">
        {/* Oranžový radiální gradient ve středu */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-from-[#F07D2B] bg-radial-to-[#F07D2B]/0 rounded-full blur-3xl" />
      </div>

      {/* Dekorativní geometrické tvary */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 border-2 border-white/10 rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 border-2 border-white/10 rounded-full" />
      </div>

      {/* Obsah */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo s oranžovým podkladem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-3xl p-6 mb-6">
            <Image
              src="/loga/hlavni.webp"
              alt="Správná cesta pro Jablonec – hlavní logo"
              width={350}
              height={88}
              className="mx-auto h-auto w-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Podtitulek */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/85 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {HERO.subtitle}
        </motion.p>

        {/* CTA tlačítko s oranžovým akcentem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <a
            href="#program"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/95 text-white font-bold py-4 px-12 rounded-full text-lg tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-accent/40 hover:scale-105"
          >
            {HERO.cta}
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indikátor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-white/50" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}