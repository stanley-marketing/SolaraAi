import type { Metadata } from "next";
import {
  Bodoni_Moda,
  Cormorant_Garamond,
  DM_Serif_Display,
  EB_Garamond,
  Libre_Baskerville,
  Lora,
  Manrope,
  Newsreader,
  Playfair_Display,
  Prata,
  Vidaloka,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-display-ebgaramond",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display-librebaskerville",
  display: "swap",
  weight: ["400", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-display-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display-dmserif",
  display: "swap",
  weight: ["400"],
});

const prata = Prata({
  subsets: ["latin"],
  variable: "--font-display-prata",
  display: "swap",
  weight: ["400"],
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display-bodonimoda",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display-newsreader",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const vidaloka = Vidaloka({
  subsets: ["latin"],
  variable: "--font-display-vidaloka",
  display: "swap",
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${ebGaramond.variable} ${libreBaskerville.variable} ${lora.variable} ${dmSerifDisplay.variable} ${prata.variable} ${bodoniModa.variable} ${newsreader.variable} ${vidaloka.variable} ${manrope.variable}`}
    >
      <body className="bg-white text-ink-900">{children}</body>
    </html>
  );
}
