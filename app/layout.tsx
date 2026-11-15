import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://my-first-porto.desainpakeai.com";

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniar Priambodo — Full Stack Developer & Data Science",
    template: "%s | Daniar Priambodo",
  },
  description:
    "Portofolio Daniar Priambodo, mahasiswa Applied Data Science di PENS (EEPIS). Membangun sistem web end-to-end dan solusi data/AI dengan TypeScript/Next.js, Python/FastAPI, dan PostgreSQL.",
  keywords: [
    "Daniar Priambodo",
    "Full Stack Developer",
    "Applied Data Science",
    "PENS",
    "EEPIS",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
    "Machine Learning",
    "Portofolio",
  ],
  authors: [{ name: "Daniar Priambodo", url: siteUrl }],
  creator: "Daniar Priambodo",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Daniar Priambodo — Portfolio",
    title: "Daniar Priambodo — Full Stack Developer & Data Science",
    description:
      "Membangun sistem web end-to-end dan solusi data/AI dengan TypeScript/Next.js, Python/FastAPI, dan PostgreSQL.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniar Priambodo — Full Stack Developer & Data Science",
    description:
      "Mahasiswa Applied Data Science di PENS (EEPIS). Fokus pada Next.js, TypeScript, FastAPI, PostgreSQL, dan solusi AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050507] text-zinc-100 selection:bg-blue-500/30 selection:text-blue-200">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
