import type { Metadata, Viewport } from "next";
import { Allura, Inter, Space_Grotesk } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import RevealProvider from "@/components/RevealProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexon.in"),
  title: {
    default: "Alexons — Building intelligent technology for what comes next.",
    template: "%s — Alexons",
  },
  description:
    "Alexons is a technology company building intelligent products, platforms and solutions that turn ambitious ideas into real-world impact.",
  openGraph: {
    title: "Alexons — Building intelligent technology for what comes next.",
    description:
      "A technology company building intelligent products, platforms and solutions that turn ambitious ideas into real-world impact.",
    url: "https://alexon.in",
    siteName: "Alexons",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Alexons — Building intelligent technology for what comes next",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexons — Building intelligent technology for what comes next.",
    description:
      "A technology company building intelligent products, platforms and solutions that turn ambitious ideas into real-world impact.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "mask-icon", url: "/logo.svg", color: "#000000" },
      { rel: "manifest", url: "/manifest.webmanifest" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  colorScheme: "light",
};

/**
 * Runs before first paint.
 *
 * `js` gates every hide-then-reveal rule, so the page is fully readable when
 * scripting is off or fails rather than a column of blank sections.
 *
 * `data-intro` decides whether the hero waits 1.5s for the mark to draw or
 * shows at once; resolving that in an effect would flash the hero, then hide it.
 */
const INTRO_FLAG = `
document.documentElement.classList.add("js");
try {
  var played = sessionStorage.getItem("alexons-intro") === "done";
  document.documentElement.dataset.intro = played ? "done" : "playing";
} catch (e) {
  document.documentElement.dataset.intro = "playing";
}
`;

const SCHEMA_ORG = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://alexon.in/#organization",
      name: "Alexons",
      url: "https://alexon.in",
      logo: "https://alexon.in/logo.svg",
      image: "https://alexon.in/og.png",
      description:
        "Alexons is a technology company building intelligent products, platforms and solutions that turn ambitious ideas into real-world impact.",
      founders: [
        {
          "@type": "Person",
          name: "M S Arul",
          jobTitle: "Founder & CEO",
        },
        {
          "@type": "Person",
          name: "Kishore Kumar R",
          jobTitle: "Co-Founder & CTO",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/alexon-labs",
        "https://github.com/alexon-labs",
        "https://www.instagram.com/alexon.in",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "alexonlabsofficial@gmail.com",
        contactType: "customer support",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://alexon.in/#website",
      url: "https://alexon.in",
      name: "Alexons",
      publisher: {
        "@id": "https://alexon.in/#organization",
      },
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${allura.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_FLAG }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: SCHEMA_ORG }}
        />
      </head>
      <body>
        <Preloader />
        <Nav />
        <main id="top">{children}</main>
        <Footer />
        <RevealProvider />
      </body>
    </html>
  );
}
