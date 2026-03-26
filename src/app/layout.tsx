import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const META_PIXEL_ID = "1793843038203358";

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
        url: "/opengraph-image.png",
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
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${GeistSans.variable} ${inter.variable}`}>
      <body className="bg-white text-ink-900">
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TJ5RTQ9Z');
        `}</Script>
        <Script
          id="mixpanel-sdk"
          strategy="afterInteractive"
          src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
        />
        <Script id="mixpanel-init" strategy="afterInteractive">{`
          window.mixpanel=window.mixpanel||[];
          mixpanel.init('4d4a15b923b6da7abebabea6fb749588',{autocapture:true,record_sessions_percent:100,cookie_domain:".solaraai.com",cross_subdomain_cookie:true,persistence:"localStorage",record_mask_text_selector:'',record_block_selector:''});
          mixpanel.track("Marketing Page Viewed",{page:window.location.pathname,title:document.title,referrer:document.referrer});
        `}</Script>
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','${META_PIXEL_ID}');
          fbq('track','PageView');
        `}</Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJ5RTQ9Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="GTM"
          />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
