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
  metadataBase: new URL("https://solaraai.com"),
  title: "SolaraAI — AI That Runs Your Marketing",
  description:
    "Solara is a full marketing department in software — one always-on system that plans, creates, executes, and improves end-to-end.",
  openGraph: {
    title: "SolaraAI — AI That Runs Your Marketing",
    description:
      "Solara is a full marketing department in software — one always-on system that plans, creates, executes, and improves end-to-end.",
    url: "https://solaraai.com",
    siteName: "SolaraAI",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "SolaraAI — The AI Era In Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolaraAI — AI That Runs Your Marketing",
    description:
      "Solara is a full marketing department in software — one always-on system that plans, creates, executes, and improves end-to-end.",
    images: ["/opengraph-image.svg"],
  },
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
