"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Image from "next/image";

const navLinks = [
  { label: "Overview", href: "#company" },
  { label: "Audit", href: "#audit" },
  { label: "Solution", href: "#solution" },
  { label: "Investment", href: "#investment" },
  { label: "Next Steps", href: "#cta" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", () => {
    setScrolled(window.scrollY > 80);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-red z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Nav */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-bg/90 border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          {/* CQ Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <Image
              src="/images/cq-logo-white.png"
              alt="CQ Marketing"
              width={140}
              height={32}
              className="h-7 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-[13px] tracking-wide text-gray-3 hover:text-offwhite transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <span className="font-heading text-[11px] tracking-[0.08em] uppercase text-gray-3">
              March 2026
            </span>
            <span className="w-px h-4 bg-border" />
            <span className="font-heading text-[11px] tracking-[0.08em] uppercase text-gray-3">
              Confidential
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-offwhite block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-offwhite block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-offwhite block"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-30 bg-bg/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-3xl text-offwhite hover:text-red-light transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}
