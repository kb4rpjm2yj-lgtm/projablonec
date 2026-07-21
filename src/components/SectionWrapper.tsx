"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  slope?: "none" | "up" | "down";
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  dark = false,
  slope = "none",
}: SectionWrapperProps) {
  const ref = useRef(null);

  // Vytvoření dynamického stylu ořezu (clip-path) pro asymetrický šikmý přechod
  let clipPathClass = "";
  if (slope === "up") {
    clipPathClass = "[clip-path:polygon(0_4vw,_100%_0,_100%_100%,_0_100%)] mt-[-4vw]";
  } else if (slope === "down") {
    clipPathClass = "[clip-path:polygon(0_0,_100%_4vw,_100%_100%,_0_100%)] mt-[-4vw]";
  }

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-24 md:py-32 ${
        dark ? "bg-primary-light" : "bg-white"
      } ${clipPathClass} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
