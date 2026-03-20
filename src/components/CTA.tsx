"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function CTA() {
  return (
    <>
      {/* CTA Section */}
      <section className="relative py-24 md:py-32" id="cta">
        <div className="absolute top-0 left-0 right-0 h-px bg-border" />

        {/* Red glow background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(196,30,42,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="w-8 h-[2px] bg-red-600 rounded-full" />
            <span className="font-heading text-xs tracking-[0.2em] uppercase text-red font-bold">
              Next Steps
            </span>
            <span className="w-8 h-[2px] bg-red-600 rounded-full" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] mb-6"
          >
            Ready to build the site your
            <br />
            <span className="italic text-red-light">operation</span>{" "}
            deserves?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-xl md:text-2xl text-gray-2 max-w-[520px] mx-auto mb-10 leading-relaxed"
          >
            Give us the green light and we&apos;ll have a kickoff meeting
            scheduled within the week. Your first draft is 4–6 weeks away.
          </motion.p>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            href="mailto:cesar@creativequalitymarketing.com?subject=Paving%20Solutions%20Website%20—%20Let's%20Go"
            className="inline-flex items-center gap-3 bg-red text-offwhite font-heading font-bold text-lg px-10 py-4 rounded-full hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(196,30,42,0.4)] transition-all duration-300"
          >
            Let&apos;s Get Started
            <span className="text-xl">→</span>
          </motion.a>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-6 text-sm text-gray-3"
          >
            Or call Cesar directly: (845) 555-0123
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Image
                src="/images/cq-logo-white.png"
                alt="CQ Marketing"
                width={140}
                height={32}
                className="h-7 w-auto opacity-80"
              />
              <span className="text-gray-4">|</span>
              <Image
                src="/images/ps-logo-modern.png"
                alt="Paving Solutions Inc."
                width={120}
                height={40}
                className="h-8 w-auto opacity-70"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-3">
                Prepared exclusively for Paving Solutions Inc. by{" "}
                <a
                  href="https://creativequalitymarketing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red hover:text-red-light transition-colors"
                >
                  CQ Marketing
                </a>
              </p>
              <p className="text-xs text-gray-4 mt-1">
                Hudson Valley, NY ·{" "}
                <a
                  href="mailto:cesar@creativequalitymarketing.com"
                  className="text-gray-3 hover:text-red transition-colors"
                >
                  cesar@creativequalitymarketing.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
