// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Brady Georgen",
  description: "Full Stack Application Architect",
  viewport: "width=device-width, initial-scale=1"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white px-4 py-2 flex items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="/love-visualization/">Love Visualization</Link>
        </header>
        {children}
      </body>
    </html>
  );
}

