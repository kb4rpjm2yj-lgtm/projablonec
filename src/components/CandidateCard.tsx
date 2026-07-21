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
      className="flex flex-col items-center text-center group cursor-pointer"
    >
      {/* Portrét s hravým organickým tvarem (zaoblený čtverec) a interakcí */}
      <div className="relative mb-6">
        {/* Dvojitý rotující gradientní lem na pozadí */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-accent to-primary opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105 blur-[2px] group-hover:rotate-6 pointer-events-none" />
        
        <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-[2rem] overflow-hidden border border-slate-100 shadow-md group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-103 group-hover:rotate-2">
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 160px, 176px"
          />
        </div>
      </div>

      <h3 className="text-xl font-extrabold text-primary group-hover:text-accent transition-colors duration-300 font-display">
        {name}
      </h3>
      
      {/* Elegantní gradient linka */}
      <div className="w-10 h-0.5 bg-gradient-to-r from-accent to-transparent my-2.5" />
      
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest block font-display">
        {role}
      </p>
    </motion.div>
  );
}
