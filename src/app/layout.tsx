import type { Metadata } from "next";
import {Inter, Calistoga} from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Yessine's Portfolio",
  description: "Yessine Agrebi Full Stack Developer, A Freelancer From Tunisia, Works with Nextjs",
};

const inter = Inter({subsets: ["latin"], variable: "--font-sans"});
const calistoga = Calistoga({subsets: ["latin"], variable: "--font-serif", weight: ['400']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, 'bg-gray-900 text-white antialiased font-sans')}>{children}</body>
    </html>
  );
}
