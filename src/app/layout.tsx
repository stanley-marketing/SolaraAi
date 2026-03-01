import type { Metadata } from "next";
import { Instrument_Serif, Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solara AI — AI That Runs Your Marketing",
  description:
    "A full marketing department in software. AI-powered storytelling, strategy, and research that runs your marketing on auto-pilot.",
  keywords: [
    "AI marketing",
    "marketing automation",
    "AI content creation",
    "marketing strategy",
    "Solara AI",
  ],
  openGraph: {
    title: "Solara AI — AI That Runs Your Marketing",
    description:
      "A full marketing department in software. AI-powered storytelling, strategy, and research.",
    type: "website",
    url: "https://solaraai.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${bricolage.variable} ${dmSans.variable}`}
    >
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--bg-inverse)",
              color: "var(--text-inverse)",
              border: "none",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
            },
          }}
        />
      </body>
    </html>
  );
}
