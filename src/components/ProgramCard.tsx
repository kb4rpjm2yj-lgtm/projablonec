"use client";

import { motion } from "framer-motion";
import { ProgramItem } from "@/lib/constants";
import { Baby, Shield, Home, HeartPulse } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Baby,
  Shield,
  Home,
  HeartPulse,
};

interface ProgramCardProps {
  program: ProgramItem;
  index: number;
}

// Funkce, která převede klíčové finanční nebo textové hodnoty na zvýrazněné HTML
function renderFormattedText(text: string) {
  // Regulární výraz pro nalezení hodnot jako 15 000 Kč, popelnice zdarma, 100%, 3 let
  const regex = /(15\s*000\s*Kč|zdarma|100\s*%|nulovou toleranci|červená linie)/gi;
  const parts = text.split(regex);

  if (parts.length === 1) return text;

  return parts.map((part, i) => {
    if (part.match(regex)) {
      return (
        <span
          key={i}
          className="px-1.5 py-0.5 bg-accent-light text-accent-dark rounded font-bold text-[0.95em]"
        >
          {part}
        </span>
      );
    }
    return part;
  });
}

export default function ProgramCard({ program, index }: ProgramCardProps) {
  const IconComponent = iconMap[program.icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-[0_20px_50px_rgba(240,125,43,0.08)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden border border-slate-100"
    >
      {/* Oranžový gradientní pruh nahoře */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent to-accent-dark" />

      {/* Oranžový zářící kruh na pozadí při hoveru */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-light rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl pointer-events-none" />

      <div className="relative p-6 md:p-8 z-10">
        {/* Header karty */}
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 w-12 h-12 bg-accent-light border border-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {IconComponent && <IconComponent className="text-accent" size={22} />}
          </div>
          <div className="flex-1 pt-1">
            <span className="text-[10px] font-extrabold text-accent uppercase tracking-widest block font-display">
              {program.subtitle}
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-primary mt-0.5 leading-tight font-display">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Claim */}
        <p className="text-slate-500 italic mb-6 leading-relaxed border-l-2 border-accent/30 pl-4 text-sm font-medium">
          {program.claim}
        </p>

        {/* Body */}
        <div className="space-y-6">
          {program.points.map((point, i) => (
            <div key={i} className="relative pl-0 group/item">
              <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-2 flex items-center gap-2 font-display transition-colors duration-300 group-hover/item:text-accent">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                {point.label}
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-normal">
                {renderFormattedText(point.text)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
