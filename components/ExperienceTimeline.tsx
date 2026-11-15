"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { EXPERIENCES, type ExperienceItem } from "@/data/portfolio";

function TimelineIcon({ type }: { type: ExperienceItem["type"] }) {
  if (type === "Magang Industri") {
    return <Briefcase className="h-4 w-4 text-blue-400" aria-hidden="true" />;
  }
  if (type === "Akademik") {
    return (
      <GraduationCap className="h-4 w-4 text-cyan-400" aria-hidden="true" />
    );
  }
  return <Sparkles className="h-4 w-4 text-indigo-300" aria-hidden="true" />;
}

export function ExperienceTimeline() {
  return (
    <section
      id="pengalaman"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
          Pengalaman & Perjalanan
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Timeline Pengalaman
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
          Rekam jejak magang industri, riset tugas akhir, dan pengembangan proyek
          mandiri.
        </p>
      </motion.div>

      <div className="relative mt-12 pl-6 sm:pl-8">
        {/* Vertical gradient line */}
        <div
          className="absolute top-2 bottom-2 left-2.5 w-px bg-gradient-to-b from-blue-500 via-cyan-400/50 to-white/[0.06] sm:left-3.5"
          aria-hidden="true"
        />

        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative"
            >
              {/* Node dot */}
              <div
                className={`absolute -left-[22px] top-6 flex h-5 w-5 items-center justify-center rounded-full border sm:-left-[26px] ${
                  exp.current
                    ? "border-blue-400 bg-blue-500/20 shadow-[0_0_16px_rgba(59,130,246,0.7)]"
                    : "border-white/20 bg-[#0b0d14]"
                }`}
                aria-hidden="true"
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    exp.current ? "bg-blue-400" : "bg-zinc-500"
                  }`}
                />
              </div>

              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-md transition-colors hover:border-blue-500/35 hover:bg-white/[0.04]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-200">
                    <TimelineIcon type={exp.type} />
                    {exp.type}
                  </div>
                  <span className="font-mono text-xs text-blue-300">
                    {exp.period}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {exp.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-zinc-400">
                  {exp.organization}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {exp.description}
                </p>

                <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4">
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-zinc-400"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
