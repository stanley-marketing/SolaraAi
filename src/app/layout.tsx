import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-blog",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SolaraAI — AI That Runs Your Marketing",
  description:
    "Solara is a full marketing department in software — one always-on system that plans, creates, executes, and improves end-to-end.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${GeistSans.variable} ${inter.variable}`}>
      <body className="bg-white text-ink-900">{children}</body>
    </html>
  );
}
