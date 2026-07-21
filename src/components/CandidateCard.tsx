"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CandidateCardProps {
  name: string;
  role: string;
  img: string;
  index: number;
}

export default function CandidateCard({
  name,
  role,
  img,
  index,
}: CandidateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col items-center text-center group"
    >
      {/* Foto s oranžovým lemem */}
      <div className="relative mb-5">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-105" />
        <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-primary-light group-hover:ring-4 group-hover:ring-accent transition-all duration-300 shadow-lg">
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 160px, 176px"
          />
        </div>
      </div>
      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
        {name}
      </h3>
      <div className="w-8 h-0.5 bg-accent/40 my-2" />
      <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
        {role}
      </p>
    </motion.div>
  );
}