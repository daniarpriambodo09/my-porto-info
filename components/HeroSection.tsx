"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  Download,
  GraduationCap,
  Database,
  MapPin,
} from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative mx-auto w-full max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3.5 py-1.5 text-xs font-medium text-blue-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
            </span>
            {PROFILE.availability}
          </div>

          <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-[4rem] lg:leading-[1.06]">
            {PROFILE.name}
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl lg:text-4xl">
              {PROFILE.tagline}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {PROFILE.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#proyek"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(59,130,246,0.4)] transition-all hover:scale-[1.02] hover:bg-blue-400 active:scale-[0.98]"
            >
              Lihat Proyek
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={PROFILE.cvUrl}
              download="CV-Daniar-Priambodo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-medium text-zinc-200 backdrop-blur-md transition-all hover:border-blue-400/40 hover:bg-white/[0.08]"
            >
              <Download className="h-4 w-4 text-blue-400" aria-hidden="true" />
              Unduh CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
              <GraduationCap
                className="h-3.5 w-3.5 text-blue-400"
                aria-hidden="true"
              />
              {PROFILE.institution}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
              <Database
                className="h-3.5 w-3.5 text-cyan-400"
                aria-hidden="true"
              />
              Applied Data Science
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
              <MapPin
                className="h-3.5 w-3.5 text-blue-400"
                aria-hidden="true"
              />
              {PROFILE.location}
            </span>
          </div>
        </motion.div>

        {/* Right Portrait Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
        >
          {/* Ambient glow behind portrait */}
          <div
            className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-blue-600/25 via-cyan-400/15 to-indigo-500/20 blur-2xl"
            aria-hidden="true"
          />

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.03] p-2.5 shadow-[0_24px_64px_rgba(0,0,0,0.65)] backdrop-blur-xl">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-[#090b10]">
              <Image
                src={PROFILE.heroPhotoUrl}
                alt={`Foto ${PROFILE.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 384px, 440px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/20 to-transparent"
                aria-hidden="true"
              />

              {/* Floating info pill inside portrait */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/[0.12] bg-[#080a10]/80 px-4 py-3 backdrop-blur-md">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    {PROFILE.name}
                  </p>
                  <p className="truncate font-mono text-[11px] text-blue-300">
                    Applied Data Science · PENS
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] font-medium text-emerald-300">
                  Open to Work
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
