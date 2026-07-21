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
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 ring-4 ring-primary-light group-hover:ring-accent transition-all duration-300">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 160px, 192px"
        />
      </div>
      <h3 className="text-xl font-bold text-accent">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{role}</p>
    </motion.div>
  );
}