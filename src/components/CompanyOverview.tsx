"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import SectionTag from "./SectionTag";

const divisions = [
  {
    num: "01",
    name: "Paving Solutions",
    revenue: "~20–25% of Revenue · 15 Employees",
    image: "/images/IMG_0080.jpg",
    services: [
      "Commercial & Residential Paving",
      "Road Restoration & Reclaiming",
      "New Road Installation",
      "Sealcoating & Crack Sealing",
      "Parking Lot Striping & Marking",
      "Asphalt Repairs & Maintenance",
    ],
    highlight:
      '"The best paving crew I\'ve ever seen in 40 years. Poetry in motion." - Scott, Paving Division Lead',
  },
  {
    num: "02",
    name: "Pro Site Work",
    revenue: "~65% of Revenue · 100+ Employees",
    image: "/images/IMG_0002.jpg",
    services: [
      "Full Site Excavation",
      "Underground Utilities",
      "Storm Water & Drainage",
      "Sewer & Water Lines",
      "Land Clearing & Demolition",
      "Earthwork & Grading",
      "Retention Ponds & Pump Stations",
    ],
    highlight:
      "Your heavyweight division. 10 crews, everything from underground utilities to full road building.",
  },
  {
    num: "03",
    name: "PS Concrete Works",
    revenue: "~10–15% of Revenue · 25–30 Employees",
    image: "/images/IMG_0051.jpg",
    services: [
      "Foundations",
      "Flatwork, Sidewalks & Curbs",
      "Exterior Stairwells",
      "Retaining Walls",
      "ADA Compliance Work",
      "Structural Concrete",
    ],
    highlight:
      "Started in-house because you needed concrete for your site work. Now it's a full division.",
  },
];

export default function CompanyOverview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTag label="The Company We See" id="company" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] mb-4"
        >
          Three divisions. One
          <br />
          <span className="italic">commanding operation.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-xl md:text-2xl text-gray-2 max-w-[600px] leading-relaxed mb-14"
        >
          From asphalt to underground utilities to structural concrete, PS
          Companies delivers full-site infrastructure across the Tri-State
          area. That scope deserves to be visible online.
        </motion.p>

        {/* Division Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {divisions.map((div) => (
            <motion.div
              key={div.num}
              variants={fadeUp}
              className="group relative bg-bg-3 border border-border rounded-2xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={div.image}
                  alt={div.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-3 via-bg-3/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="font-serif text-5xl text-offwhite/10 italic">
                    {div.num}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="font-heading text-xl font-bold mb-1">
                  {div.name}
                </h3>
                <p className="font-heading text-base text-red font-semibold tracking-wide mb-4">
                  {div.revenue}
                </p>
                <ul className="space-y-2 mb-5">
                  {div.services.map((s) => (
                    <li
                      key={s}
                      className="text-base text-gray-2 flex items-start gap-2"
                    >
                      <span className="text-gray-4 mt-1 text-sm">→</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="text-base text-gray-3 italic border-t border-border pt-4">
                  {div.highlight}
                </p>
              </div>

              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Photo strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 rounded-2xl overflow-hidden"
        >
          {[
            "/images/IMG_0101.jpg",
            "/images/IMG_0037.jpg",
            "/images/IMG_0169.jpg",
            "/images/IMG_0613.jpg",
          ].map((src, i) => (
            <div key={i} className="relative h-40 md:h-52 overflow-hidden group">
              <Image
                src={src}
                alt="PS Companies job site"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-bg/30 group-hover:bg-bg/10 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
