import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const soehne = localFont({
  src: [
    { path: "./fonts/soehne-light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/soehne-book.woff2", weight: "400", style: "normal" },
    { path: "./fonts/soehne-book-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/soehne-medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/soehne-semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/soehne-bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-soehne",
  display: "swap",
});

const helveticaNeue = localFont({
  src: [
    { path: "./fonts/HelveticaNeueUltraLight.otf", weight: "100", style: "normal" },
    { path: "./fonts/HelveticaNeueThin.otf", weight: "200", style: "normal" },
    { path: "./fonts/HelveticaNeueLight.otf", weight: "300", style: "normal" },
    { path: "./fonts/HelveticaNeueLightItalic.otf", weight: "300", style: "italic" },
    { path: "./fonts/HelveticaNeueRoman.otf", weight: "400", style: "normal" },
    { path: "./fonts/HelveticaNeueItalic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/HelveticaNeueMedium.otf", weight: "500", style: "normal" },
    { path: "./fonts/HelveticaNeueMediumItalic.otf", weight: "500", style: "italic" },
    { path: "./fonts/HelveticaNeueBold.otf", weight: "700", style: "normal" },
    { path: "./fonts/HelveticaNeueBoldItalic.otf", weight: "700", style: "italic" },
    { path: "./fonts/HelveticaNeueHeavy.otf", weight: "800", style: "normal" },
    { path: "./fonts/HelveticaNeueBlack.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
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
    <html lang="en" className={`${playfair.variable} ${soehne.variable} ${helveticaNeue.variable}`}>
      <body className="bg-white text-ink-900">{children}</body>
    </html>
  );
}
