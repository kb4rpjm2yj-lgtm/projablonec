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

export default function ProgramCard({ program, index }: ProgramCardProps) {
  const IconComponent = iconMap[program.icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Oranžový pruh nahoře */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent to-accent-dark" />

      {/* Oranžový kruh na pozadí (dekorace) */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-light rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

      <div className="relative p-6 md:p-8 z-10">
        {/* Header karty */}
        <div className="flex items-start gap-4 mb-5">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/30 transition-shadow duration-300">
            {IconComponent && <IconComponent className="text-white" size={26} />}
          </div>
          <div className="flex-1 pt-1">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">
              {program.subtitle}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-primary mt-0.5 leading-tight">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Claim */}
        <p className="text-gray-500 italic mb-6 leading-relaxed border-l-3 border-accent/30 pl-4 text-sm">
          {program.claim}
        </p>

        {/* Body */}
        <div className="space-y-5">
          {program.points.map((point, i) => (
            <div key={i} className="relative pl-0">
              <h4 className="font-bold text-primary text-sm uppercase tracking-wide mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                {point.label}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}