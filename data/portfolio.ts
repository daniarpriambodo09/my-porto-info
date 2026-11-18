export type ProjectCategory = "Magang" | "Akademik" | "Personal";
export type ProjectFilter = "semua" | "magang" | "akademik" | "personal";

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: ProjectCategory;
  filter: Exclude<ProjectFilter, "semua">;
  org: string;
  role: string;
  period: string;
  tech: string[];
  summary: string;
  points: string[];
  featured?: boolean;
  status?: string;
  href?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  type: "Magang Industri" | "Akademik" | "Personal";
  description: string;
  highlights: string[];
  current?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
}

export interface TechMarqueeItem {
  name: string;
  category: string;
  iconKey:
  | "nextjs"
  | "typescript"
  | "fastapi"
  | "postgresql"
  | "docker"
  | "python"
  | "pytorch"
  | "tensorflow"
  | "pgvector"
  | "tailwind";
}

export const PROFILE = {
  name: "Daniar Priambodo",
  tagline: "Full Stack Developer & Data Science",
  headline: "Membangun sistem web end-to-end dan solusi data/AI.",
  bio: "Mahasiswa Applied Data Science di Politeknik Elektronika Negeri Surabaya (PENS / EEPIS). Fokus pada pengembangan aplikasi web modern dan pipeline data/AI menggunakan TypeScript/Next.js, Python/FastAPI, dan PostgreSQL.",
  availability: "Terbuka untuk kolaborasi & peluang baru",
  location: "Surabaya, Indonesia",
  institution: "PENS / EEPIS",
  avatarUrl: "/images/daniar-avatar.png",
  heroPhotoUrl: "/images/daniar-hero.jpg",
  email: "daniarpriambodo11@gmail.com",
  githubUrl: "https://github.com/daniarpriambodo09",
  linkedinUrl: "https://www.linkedin.com/in/daniar-priambodo-2a9337363/",
};

export const TECH_MARQUEE: TechMarqueeItem[] = [
  { name: "Next.js", category: "Full Stack", iconKey: "nextjs" },
  { name: "TypeScript", category: "Language", iconKey: "typescript" },
  { name: "FastAPI", category: "Backend API", iconKey: "fastapi" },
  { name: "PostgreSQL", category: "Database", iconKey: "postgresql" },
  { name: "Docker", category: "DevOps", iconKey: "docker" },
  { name: "Python", category: "Data & AI", iconKey: "python" },
  { name: "TensorFlow", category: "Deep Learning", iconKey: "tensorflow" },
  { name: "PyTorch", category: "Deep Learning", iconKey: "pytorch" },
  { name: "pgvector", category: "Vector DB", iconKey: "pgvector" },
  { name: "Tailwind CSS", category: "Styling", iconKey: "tailwind" },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "web-backend",
    title: "Web & Backend",
    subtitle: "Arsitektur aplikasi end-to-end, REST API, dan skema relasional",
    items: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    id: "data-ai",
    title: "Data & AI",
    subtitle: "Pemodelan prediktif, computer vision, dan sistem RAG klinis",
    items: [
      "LLM + RAG",
      "Sentence Transformers",
      "CNN (TensorFlow / PyTorch)",
      "Time-series Forecasting",
      "GIS Spatial Analysis",
    ],
  },
  {
    id: "tools",
    title: "Tools & Infrastruktur",
    subtitle: "Containerization, integrasi ETL, testing, dan otomasi",
    items: ["Docker", "Pentaho PDI", "pytest", "ccxt", "Nodemailer"],
  },
];

export const PROJECT_FILTERS: { id: ProjectFilter; label: string }[] = [
  { id: "semua", label: "Semua" },
  { id: "magang", label: "Magang" },
  { id: "akademik", label: "Akademik" },
  { id: "personal", label: "Personal" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "permit",
    index: "01",
    title: "Work Permit & Document Procedure System",
    category: "Magang",
    filter: "magang",
    org: "PT. Jatim Autocomp Indonesia (PT JAI)",
    role: "Full Stack Web Developer Intern",
    period: "Jan 2026 – Jun 2026",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Nodemailer"],
    summary:
      "Aplikasi web yang mendigitalkan izin kerja dan prosedur dokumen untuk pekerja internal maupun eksternal.",
    points: [
      "JWT authentication dan role-based access control dengan 8 role.",
      "Alur persetujuan multi-tahap untuk pekerja internal dan eksternal.",
      "Notifikasi email event-driven dengan Nodemailer; konfigurasi SMTP dipindah dari environment variable hardcoded ke fitur pengaturan di database.",
      "Skema PostgreSQL dan endpoint RESTful untuk formulir izin, persetujuan, dan unggah berkas; berkas dilayani lewat API route, bukan folder publik.",
      "Unggah JSA (Job Safety Analysis) pada formulir hot work, workshop, dan height work.",
      "Menelusuri masalah integrasi lintas stack: cookie path yang memicu redirect loop, basePath hilang pada URL fetch, serta ketidakcocokan kolom/placeholder SQL.",
      "Menulis laporan magang bersama dan menyiapkan presentasi sidang 23 slide.",
    ],
    featured: true,
  },
  {
    id: "echecksheet",
    index: "02",
    title: "E-Checksheet — Production Floor QA App",
    category: "Magang",
    filter: "magang",
    org: "PT. Jatim Autocomp Indonesia (PT JAI)",
    role: "Full Stack Web Developer Intern",
    period: "May 2026",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Zebra TC21"],
    summary:
      "Aplikasi quality assurance di lantai produksi bersama pemindai genggam Zebra TC21.",
    points: [
      "Alur pengikatan perangkat fisik berbasis QR dengan deteksi platform dan pelacakan perangkat end-to-end.",
      "Panel admin untuk pengelolaan perangkat, pra-registrasi, dan pencetakan label QR.",
      "Mengganti daftar tipe gauge yang hardcoded dengan pendekatan berbasis database melalui endpoint GET/POST/DELETE.",
    ],
  },
  {
    id: "beyond",
    index: "03",
    title: "Beyond AI — Clinical Conversation Summarization",
    category: "Akademik",
    filter: "akademik",
    org: "Proyek Akhir (Skripsi)",
    role: "AI & Full Stack Engineer",
    period: "2026",
    tech: [
      "FastAPI",
      "pgvector",
      "Sentence Transformers",
      "Gemini API",
      "Faster-Whisper",
      "Next.js",
      "Docker",
    ],
    summary:
      "Platform yang mengubah percakapan asesmen psikologis berbahasa Indonesia menjadi catatan SOAP terstruktur.",
    points: [
      "Pipeline LLM + RAG dua tahap untuk menghasilkan catatan SOAP klinis yang akurat.",
      "Transkripsi audio otomatis dengan Faster-Whisper dan pencarian semantik berbasis pgvector.",
      "Evaluasi komprehensif menggunakan metrik ROUGE, BERTScore, dan rubrik psikolog.",
    ],
    featured: true,
  },
  {
    id: "enterprise-doc-rag",
    index: "04",
    title: "TanyaDoc — Enterprise Document RAG",
    category: "Personal",
    filter: "personal",
    org: "Personal Project · tanyadoc.my.id",
    role: "AI & Full Stack Engineer",
    period: "Nov 2026",
    status: "Live",
    tech: [
      "Next.js",
      "FastAPI",
      "pgvector",
      "BM25",
      "Gemini API",
      "Groq LLM",
      "PostgreSQL",
      "Docker",
    ],
    summary:
      "Sistem RAG siap produksi untuk analisis dokumen PDF kompleks dengan Hybrid Search (pgvector + BM25), guardrails anti-halusinasi, dan sitasi per halaman.",
    points: [
      "Layout-aware PDF & table parsing dengan pymupdf4llm yang menjaga struktur heading, tabel, dan metadata page_number.",
      "Two-stage Hybrid Search menggabungkan pgvector HNSW (embedding Gemini 768-d) dan BM25Okapi lexical reranking.",
      "Guardrails anti-halusinasi dengan sitasi [Nama File, Hal. X] dan penolakan jujur untuk pertanyaan di luar konteks.",
      "Manajemen basis pengetahuan idempoten (anti-duplikasi upload & hapus dokumen) serta evaluasi kuantitatif Recall@5 100%.",
    ],
    featured: true,
    href: "https://tanyadoc.my.id",
  },
  {
    id: "crypto",
    index: "05",
    title: "Crypto Trading Bot Platform",
    category: "Personal",
    filter: "personal",
    org: "Personal Project",
    role: "Full Stack & Quant Developer",
    period: "Nov 2026 – sekarang",
    status: "In Progress",
    tech: ["FastAPI", "PostgreSQL", "ccxt", "Binance Testnet", "Next.js", "pytest"],
    summary:
      "Platform webhook yang memvalidasi sinyal trading masuk lalu mengeksekusi order secara aman.",
    points: [
      "Platform webhook yang memvalidasi sinyal trading masuk (secret/signature) dan menangani duplikat secara idempoten.",
      "Mengeksekusi order dalam mode paper-trading dan di Binance testnet melalui ccxt.",
      "Fitur manajemen risiko: leverage, partial take profit, cut loss, dan pratinjau harga likuidasi, tercakup unit test.",
      "Dasbor Next.js untuk aturan strategi, posisi, dan laporan performa.",
    ],
    featured: true,
  },
  {
    id: "culturace",
    index: "06",
    title: "Culturace 2026 — Fun Run Event Website",
    category: "Personal",
    filter: "personal",
    org: "Masjid Merah Fun Run",
    role: "Website & Proposal Lead",
    period: "Sep 2026 – sekarang",
    tech: ["Next.js", "Event Website", "Sponsorship Proposal"],
    summary:
      "Website acara 5K fun run beserta proposal sponsorship untuk Masjid Merah Fun Run 2026.",
    points: [
      "Membangun website acara Masjid Merah Fun Run 2026.",
      "Menyusun proposal sponsorship, termasuk RAB 16 item sebesar Rp 247,5 juta dan target 1.750 pelari.",
    ],
  },
  {
    id: "sidesa",
    index: "07",
    title: "SiDesa — Village Development Disparities in East Java",
    category: "Akademik",
    filter: "akademik",
    org: "Analisis Data · GIS",
    role: "Data & GIS Analyst",
    period: "Aug 2025 – Dec 2025",
    tech: ["Python", "GIS", "Dashboard"],
    summary:
      "Dasbor spasial interaktif untuk membaca ketimpangan dan tipologi pembangunan desa di Jawa Timur.",
    points: [
      "Membangun dasbor spasial interaktif untuk memvisualisasikan ketimpangan wilayah.",
      "Memproses dan mengintegrasikan data sosial ekonomi dengan shapefile GIS untuk analisis geospasial.",
      "Menganalisis data regional untuk mengidentifikasi pola pembangunan.",
    ],
  },
  {
    id: "ecoscan",
    index: "08",
    title: "EcoScan — Web-Based Waste Classification with CNN",
    category: "Akademik",
    filter: "akademik",
    org: "Computer Vision",
    role: "ML Engineer",
    period: "Sep 2025 – Dec 2025",
    tech: ["Python", "TensorFlow", "PyTorch", "CNN"],
    summary:
      "Klasifikasi sampah berbasis CNN yang terintegrasi ke aplikasi web secara real-time.",
    points: [
      "Membangun model klasifikasi gambar CNN untuk mengenali kategori sampah.",
      "Mengumpulkan, membersihkan, dan mengaugmentasi dataset gambar untuk meningkatkan generalisasi.",
      "Mengintegrasikan model terlatih ke aplikasi web untuk klasifikasi sampah real-time.",
    ],
  },
  {
    id: "langit",
    index: "09",
    title: "Langit.in — Climate Forecasting System for East Java",
    category: "Akademik",
    filter: "akademik",
    org: "Time-series ML",
    role: "Data Scientist",
    period: "Feb 2025 – Jun 2025",
    tech: ["Python", "Time-Series", "Machine Learning"],
    summary:
      "Sistem prakiraan iklim Jawa Timur dengan model deret waktu dan machine learning.",
    points: [
      "Membangun model peramalan deret waktu dan machine learning.",
      "Membersihkan dataset iklim multi-tahun sebagai masukan peramalan.",
      "Mengevaluasi model dengan RMSE, MAE, dan cross-validation.",
    ],
  },
  {
    id: "erp",
    index: "10",
    title: "ERP Supply Chain Data Mart — Production Module",
    category: "Akademik",
    filter: "akademik",
    org: "Data Engineering",
    role: "Data Engineer",
    period: "May 2025 – Jun 2025",
    tech: ["Pentaho PDI", "PostgreSQL", "MySQL"],
    summary:
      "Pipeline ETL yang menyatukan data modul produksi ke Supply Chain Data Mart.",
    points: [
      "Mengembangkan dan mengelola pipeline ETL untuk mengintegrasikan data modul produksi ke Supply Chain Data Mart.",
      "Mengekstrak data dari sumber ERP PostgreSQL dan MySQL, lalu mentransformasi dan memuatnya ke tabel analitis terpusat.",
      "Merancang model data fact–dimension untuk analitik alur produksi dan pelaporan rantai pasok.",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "pt-jai-intern",
    period: "Jan 2026 – Jun 2026",
    title: "Full Stack Web Developer Intern",
    organization: "PT. Jatim Autocomp Indonesia (PT JAI)",
    type: "Magang Industri",
    current: true,
    description:
      "Merancang dan mengembangkan sistem internal pabrik berskala produksi menggunakan Next.js, TypeScript, dan PostgreSQL.",
    highlights: [
      "Membangun Work Permit & Document Procedure Management System dengan RBAC 8 role, alur persetujuan multi-tahap, unggah JSA, dan notifikasi email event-driven.",
      "Mengembangkan E-Checksheet Production Floor QA App yang terintegrasi dengan pemindai genggam Zebra TC21 dan pengikatan perangkat berbasis QR.",
      "Menyelesaikan debugging lintas stack (cookie path, basePath fetch, query SQL) serta menyusun laporan dan presentasi sidang 23 slide.",
    ],
  },
  {
    id: "beyond-ai-thesis",
    period: "2026",
    title: "Applied Data Science — Proyek Akhir (Skripsi)",
    organization: "Politeknik Elektronika Negeri Surabaya (PENS / EEPIS)",
    type: "Akademik",
    description:
      "Meneliti dan membangun Beyond AI: platform peringkasan percakapan klinis psikologis berbahasa Indonesia menjadi catatan SOAP.",
    highlights: [
      "Mengorkestrasi pipeline audio-to-SOAP menggunakan Faster-Whisper, Sentence Transformers, pgvector, FastAPI, dan Gemini API dalam container Docker.",
      "Mengevaluasi kualitas ringkasan dengan ROUGE, BERTScore, serta validasi rubrik psikolog.",
    ],
  },
  {
    id: "personal-2026",
    period: "Sep 2026 – sekarang",
    title: "Crypto Trading Bot Platform & Culturace 2026",
    organization: "Proyek Mandiri & Komunitas",
    type: "Personal",
    description:
      "Mengembangkan platform eksekusi webhook trading idempoten (FastAPI + ccxt) serta website acara Masjid Merah Fun Run 2026.",
    highlights: [
      "Implementasi validasi signature webhook, manajemen risiko (leverage, TP/SL, harga likuidasi), dan dasbor Next.js.",
      "Merilis website event 5K fun run dengan target 1.750 pelari dan penyusunan RAB sponsorship.",
    ],
  },
  {
    id: "academic-2025",
    period: "2025",
    title: "Proyek Data Science, GIS & Data Engineering",
    organization: "Politeknik Elektronika Negeri Surabaya (PENS / EEPIS)",
    type: "Akademik",
    description:
      "Mengerjakan rangkaian proyek analitik: SiDesa (GIS), EcoScan (CNN), Langit.in (Time-Series), dan ERP Supply Chain Data Mart (ETL).",
    highlights: [
      "Membangun model klasifikasi citra, peramalan iklim multi-tahun, dasbor spasial desa, dan skema fact–dimension.",
    ],
  },
];
