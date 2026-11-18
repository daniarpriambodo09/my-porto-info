"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  X,
} from "lucide-react";
import {
  PROJECT_FILTERS,
  PROJECTS,
  type ProjectFilter,
  type ProjectItem,
} from "@/data/portfolio";

const CATEGORY_STYLE: Record<ProjectItem["category"], string> = {
  Magang: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  Akademik: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  Personal: "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
};

export function ProjectsBento() {
  const [filter, setFilter] = useState<ProjectFilter>("semua");
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  const visibleProjects = PROJECTS.filter(
    (project) => filter === "semua" || project.filter === filter
  );

  return (
    <section
      id="proyek"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
            Proyek Unggulan
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Karya terpilih & studi kasus
          </h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-400 sm:text-base">
            Mulai dari aplikasi operasional pabrik, sistem RAG klinis, hingga
            platform trading dan analisis spasial.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter kategori proyek"
          className="inline-flex flex-wrap gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5 backdrop-blur-md"
        >
          {PROJECT_FILTERS.map((item) => {
            const count = PROJECTS.filter(
              (p) => item.id === "semua" || p.filter === item.id
            ).length;
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  active
                    ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}{" "}
                <span className="ml-1 font-mono opacity-75">{count}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Bento Grid */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.25) }}
              whileHover={{ scale: 1.012 }}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-md transition-colors hover:border-blue-500/40 hover:bg-white/[0.045]"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-zinc-500">
                      {project.index}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                        CATEGORY_STYLE[project.category]
                      }`}
                    >
                      {project.category}
                    </span>
                    {project.status && (
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                          project.status === "Live"
                            ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                            : "border-amber-400/30 bg-amber-400/10 text-amber-300"
                        }`}
                      >
                        {project.status === "Live" ? (
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                            aria-hidden="true"
                          />
                        ) : (
                          <Sparkles className="h-3 w-3" aria-hidden="true" />
                        )}
                        {project.status}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs text-zinc-500">
                    {project.period}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white group-hover:text-blue-200 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">
                  {project.summary}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-zinc-500">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-2 border-t border-white/[0.06] pt-4">
                  <span className="truncate text-xs text-zinc-500">
                    {project.org}
                  </span>
                  <div className="flex shrink-0 items-center gap-3">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/20"
                      >
                        Live
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 transition-colors hover:text-blue-300"
                    >
                      Detail proyek
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/[0.12] bg-[#0b0e15] p-6 shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                        CATEGORY_STYLE[selected.category]
                      }`}
                    >
                      {selected.category}
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      {selected.period}
                    </span>
                  </div>
                  <h3
                    id="modal-project-title"
                    className="mt-3 text-xl font-bold text-white sm:text-2xl"
                  >
                    {selected.title}
                  </h3>
                  <p className="mt-1 text-sm text-blue-300">
                    {selected.org} · {selected.role}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Tutup detail proyek"
                  className="rounded-full border border-white/[0.1] bg-white/[0.04] p-2 text-zinc-400 transition-colors hover:bg-white/[0.1] hover:text-white"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-300 sm:text-base">
                {selected.summary}
              </p>

              <div className="mt-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  Implementasi & Kontribusi
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {selected.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-300"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-5">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  Teknologi
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {selected.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-mono text-xs text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {selected.href && (
                <div className="mt-6 flex justify-end border-t border-white/[0.08] pt-5">
                  <a
                    href={selected.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-xs font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.4)] transition-all hover:bg-blue-400"
                  >
                    Kunjungi Aplikasi ({selected.href.replace(/^https?:\/\//, "")})
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
