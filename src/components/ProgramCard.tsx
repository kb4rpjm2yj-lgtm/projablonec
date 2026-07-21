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
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-accent overflow-hidden"
    >
      <div className="p-6 md:p-8">
        {/* Header karty */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 bg-accent-light rounded-full flex items-center justify-center">
            {IconComponent && <IconComponent className="text-accent" size={24} />}
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">
              {program.subtitle}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-primary mt-1">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Claim */}
        <p className="text-gray-600 italic mb-6 leading-relaxed border-l-2 border-gray-200 pl-4">
          {program.claim}
        </p>

        {/* Body */}
        <div className="space-y-5">
          {program.points.map((point, i) => (
            <div key={i}>
              <h4 className="font-bold text-primary text-sm uppercase tracking-wide mb-1">
                {point.label}
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}