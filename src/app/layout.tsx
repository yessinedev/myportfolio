import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://yessineagrebi.pro"),
  keywords: [
    "Yessine Agrebi",
    "Fullstack developer",
    "Software Developer",
    "Nextjs Developer",
    "Frontend Developer",
    "Backend Developer",
    "React developer",
    "Software engineer",
    "Freelance Developer",
  ],
  title: "Yessine Agrebi",
  openGraph: {
    description:
      "Yessine Agrebi Full Stack Developer, A Freelancer From Tunisia, Works with Nextjs",
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          src="https://ynhbuis9glth1iwfhgnmnmksc7xz29-00rw--50415--2e03455b.local-credentialless.webcontainer-api.io/tracker.js"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.analyticsTracker?.init("k57ancg7e96p2bkj4s9k6n1tvs7f2r8s");
            `,
          }}
        />
      </Head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <Analytics />
        <SpeedInsights />
        <Toaster position="bottom-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
