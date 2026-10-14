import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Special_Elite,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Learnicate Academy | Professional Certification Training",
  description:
    "Explore PMP, AWS, CCNA, CISM, PRINCE2 and ITIL certification preparation pathways with Learnicate Academy in Nagpur, India.",
  keywords: [
    "certification training",
    "PMP",
    "AWS",
    "CCNA",
    "CISM",
    "PRINCE2",
    "ITIL",
    "Nagpur",
    "Learnicate Academy",
  ],
  openGraph: {
    title: "Learnicate Academy | Professional Certification Training",
    description:
      "Explore PMP, AWS, CCNA, CISM, PRINCE2 and ITIL certification preparation pathways with Learnicate Academy in Nagpur, India.",
    type: "website",
    locale: "en_IN",
    siteName: "Learnicate Academy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Learnicate Academy — Professional Certification Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learnicate Academy | Professional Certification Training",
    description:
      "Explore PMP, AWS, CCNA, CISM, PRINCE2 and ITIL certification preparation pathways with Learnicate Academy in Nagpur, India.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
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
      className={`${cormorant.variable} ${greatVibes.variable} ${specialElite.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
