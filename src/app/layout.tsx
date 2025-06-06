import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Fleer",
  description: "Personal website and blog of Andrew Fleer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#93dafe]">
        <nav className="bg-white/90 backdrop-blur-sm border-b-4 border-[#6a0dad] shadow-lg">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#6a0dad] hover:text-[#ff1493] transition-colors">
              Andrew Fleer
            </Link>
            <div className="space-x-6">
              <Link href="/blog" className="text-lg text-[#6a0dad] hover:text-[#ff1493] transition-colors">
                Blog
              </Link>
              <Link href="/resume" className="text-lg text-[#6a0dad] hover:text-[#ff1493] transition-colors">
                Resume
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
