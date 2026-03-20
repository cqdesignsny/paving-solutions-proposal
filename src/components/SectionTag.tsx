"use client";

import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface SectionTagProps {
  label: string;
  id?: string;
}

export default function SectionTag({ label, id }: SectionTagProps) {
  return (
    <motion.div
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="flex items-center gap-3 mb-5"
    >
      <span className="w-8 h-[2px] bg-red-600 rounded-full" />
      <span className="font-heading text-sm tracking-[0.2em] uppercase text-red-500 font-bold">
        {label}
      </span>
    </motion.div>
  );
}
