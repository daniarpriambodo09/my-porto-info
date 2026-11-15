"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "Tech Stack", href: "#tech" },
  { label: "Proyek", href: "#proyek" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-4 sm:px-6">
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Navigasi utama"
        className="flex items-center justify-between rounded-full border border-white/[0.08] bg-[#090b10]/75 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-6"
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white"
        >
          <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.45)] transition-all duration-300 group-hover:scale-105 group-hover:ring-cyan-400/70">
            <Image
              src={PROFILE.avatarUrl}
              alt={PROFILE.name}
              fill
              sizes="32px"
              className="object-cover object-top"
              priority
            />
          </span>
          <span className="hidden sm:inline">{PROFILE.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#kontak"
            className="hidden items-center gap-1.5 rounded-full bg-blue-500 px-4 py-1.5 text-xs font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.4)] transition-all hover:bg-blue-400 sm:inline-flex"
          >
            Hubungi Saya
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-zinc-200 transition-colors hover:bg-white/[0.08] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mt-2 rounded-2xl border border-white/[0.08] bg-[#0b0d14]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
