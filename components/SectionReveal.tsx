"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section
      className={className}
      initial={false}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-90px" }}
      whileInView={reduceMotion ? undefined : { opacity: [0.94, 1], y: [12, 0] }}
    >
      {children}
    </motion.section>
  );
}
