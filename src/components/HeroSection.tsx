"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HERO } from "@/lib/constants";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[#1e4a78] to-primary">
      {/* Dekorativní pozadí */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
      </div>

      {/* Obsah */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/loga/hlavni.webp"
            alt="Správná cesta pro Jablonec – hlavní logo"
            width={500}
            height={125}
            className="mx-auto mb-8 w-auto h-auto max-w-[90vw] md:max-w-[500px]"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#program"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-4 px-10 rounded-full text-lg tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105"
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
          <ArrowDown className="text-white/60" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}