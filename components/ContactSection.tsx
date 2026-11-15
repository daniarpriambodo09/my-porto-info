"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Mail, Send } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(
      `[Portofolio] Pesan dari ${name.trim()}`
    );
    const body = encodeURIComponent(
      `Nama: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  const socialLinks = [
    {
      label: "GitHub",
      value: "github.com/daniarpriambodo",
      href: PROFILE.githubUrl,
      icon: GitHubIcon,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/daniar-priambodo-2a9337363",
      href: PROFILE.linkedinUrl,
      icon: LinkedInIcon,
    },
    {
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
      icon: Mail,
    },
  ];

  return (
    <section
      id="kontak"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-md sm:p-10"
      >
        <div
          className="pointer-events-none absolute -top-28 right-0 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
              Kontak
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ada proyek atau peran yang cocok?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Saya siap membantu membangun sistem web end-to-end, alur data,
              maupun eksperimen machine learning dari awal sampai rilis.
            </p>

            <div className="mt-8 space-y-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 transition-colors hover:border-blue-500/40 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-blue-400">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-zinc-400">
                          {item.label}
                        </div>
                        <div className="text-sm font-medium text-white">
                          {item.value}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-white/[0.08] bg-[#07090e]/80 p-6"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-medium text-zinc-300"
                  >
                    Nama
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama lengkap Anda"
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-medium text-zinc-300"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@perusahaan.com"
                    className="w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-medium text-zinc-300"
                >
                  Pesan
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ceritakan kebutuhan proyek, posisi, atau kolaborasi yang ingin didiskusikan..."
                  className="w-full resize-none rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-all hover:bg-blue-400 active:scale-[0.98]"
                >
                  Kirim Pesan
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                </button>

                {submitted && (
                  <p
                    role="status"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400"
                  >
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Aplikasi email dibuka. Terima kasih!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
