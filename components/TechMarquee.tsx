"use client";

import { motion } from "motion/react";
import { Cpu, Layers, Wrench } from "lucide-react";
import {
  SKILL_GROUPS,
  TECH_MARQUEE,
  type TechMarqueeItem,
} from "@/data/portfolio";

function TechIcon({ iconKey }: { iconKey: TechMarqueeItem["iconKey"] }) {
  switch (iconKey) {
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.8 14.9L9.6 8.8v6.7H8.2V7h1.6l6.2 8.2V7h1.4v9.9h-1.6z" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-blue-400" aria-hidden="true">
          <path d="M3 3h18v18H3V3zm10.7 10.6h2v-1.4h-5.6v1.4h2v5.4h1.6v-5.4zm5.7 2.8c0-1.1-.7-1.6-1.9-2l-.5-.2c-.6-.2-.9-.4-.9-.8 0-.4.4-.7 1-.7.6 0 1 .2 1.3.7l1-.7c-.5-.8-1.3-1.2-2.3-1.2-1.5 0-2.5.8-2.5 2 0 1.1.7 1.7 1.9 2l.5.2c.6.2.9.4.9.8 0 .5-.5.8-1.2.8-.7 0-1.3-.3-1.7-.9l-1 .8c.5.9 1.5 1.4 2.7 1.4 1.6 0 2.7-.8 2.7-2.2z" />
        </svg>
      );
    case "fastapi":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-cyan-400" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-.6 15.6v-4.2H8.2l4.4-7v4.2h3.2z" />
        </svg>
      );
    case "postgresql":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current text-sky-400" strokeWidth="1.8" aria-hidden="true">
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
          <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-blue-400" aria-hidden="true">
          <path d="M13 7h2v2h-2V7zm-3 0h2v2h-2V7zm-3 0h2v2H7V7zm3-3h2v2h-2V4zm3 0h2v2h-2V4zm7.4 6.2c-.6-.4-1.7-.5-2.6-.2-.2-1-.9-1.9-1.7-2.5l-.4-.3-.3.4c-.4.6-.5 1.7-.2 2.5.2.4.4.8.8 1.1H3.2l-.1.7c-.2 2.2.5 4.4 2 5.9 1.4 1.4 3.4 2.1 5.7 2.1 4.6 0 8.1-2.1 9.8-6 .7 0 2.1 0 2.8-1.4.1-.2.3-.7.4-.9l-.4-.4z" />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-amber-300" aria-hidden="true">
          <path d="M11.9 2C8.6 2 8.8 3.4 8.8 3.4v1.5h3.2v.5H6.5S4 5.1 4 8.4s2.2 3.2 2.2 3.2h1.3v-1.6s-.1-2.2 2.1-2.2h3.8s2 0 2-2V3.9S15.7 2 11.9 2zm-1.6 1.2a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4zM12.1 22c3.3 0 3.1-1.4 3.1-1.4v-1.5H12v-.5h5.5s2.5.3 2.5-3-2.2-3.2-2.2-3.2h-1.3V14s.1 2.2-2.1 2.2h-3.8s-2 0-2 2v1.9S8.3 22 12.1 22zm1.6-1.2a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z" />
        </svg>
      );
    case "tensorflow":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-orange-400" aria-hidden="true">
          <path d="M12 2L3 7v4l5-2.8V20l4 2V9.8L16 12v4l4-2.2V10l-8-4.5V2z" />
        </svg>
      );
    case "pytorch":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-rose-400" aria-hidden="true">
          <path d="M16.2 7.8l-1.4 1.4a4.5 4.5 0 1 1-6.4 0L12 5.6V2.8L7 7.8a7 7 0 1 0 9.2 0zM14.5 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </svg>
      );
    case "pgvector":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current text-blue-300" strokeWidth="1.8" aria-hidden="true">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="12" cy="18" r="2.5" />
          <path d="M8 7.5l3 8.5M16 7.5l-3 8.5M8.5 6h7" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-cyan-400" aria-hidden="true">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.39 10.84 14.52 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.16 14.48 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.84 9.52 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.16 9.48 12 7 12z" />
        </svg>
      );
  }
}

const GROUP_ICONS = [Layers, Cpu, Wrench];

export function TechMarquee() {
  const repeated = [...TECH_MARQUEE, ...TECH_MARQUEE];

  return (
    <section
      id="tech"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
          Tech Stack & Keahlian
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Teknologi yang saya gunakan sehari-hari
        </h2>
        <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
          Kombinasi framework web modern, backend API berkinerja tinggi, dan
          ekosistem machine learning untuk membawa ide hingga produksi.
        </p>
      </motion.div>

      {/* Infinite Marquee */}
      <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] py-5 backdrop-blur-md">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#050507] to-transparent sm:w-24"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#050507] to-transparent sm:w-24"
          aria-hidden="true"
        />
        <div className="animate-marquee gap-4 px-4">
          {repeated.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex shrink-0 items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 transition-colors hover:border-blue-500/35 hover:bg-blue-500/[0.06]"
            >
              <TechIcon iconKey={item.iconKey} />
              <div>
                <div className="text-sm font-medium text-white">{item.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bento Grid Skill Groups */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {SKILL_GROUPS.map((group, idx) => {
          const Icon = GROUP_ICONS[idx % GROUP_ICONS.length];
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-md transition-colors hover:border-blue-500/35 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {group.subtitle}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-300 transition-colors group-hover:border-white/[0.14]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
