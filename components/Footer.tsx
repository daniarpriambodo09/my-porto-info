import { PROFILE } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/[0.06] bg-[#050507]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-zinc-500 sm:flex-row sm:px-6">
        <p>
          © 2026 {PROFILE.name}. Dibangun dengan Next.js,
          Tailwind CSS &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-5">
          <a href="#tech" className="transition-colors hover:text-zinc-300">
            Tech Stack
          </a>
          <a href="#proyek" className="transition-colors hover:text-zinc-300">
            Proyek
          </a>
          <a
            href="#pengalaman"
            className="transition-colors hover:text-zinc-300"
          >
            Pengalaman
          </a>
          <a href="#top" className="transition-colors hover:text-blue-400">
            Kembali ke atas ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
