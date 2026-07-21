import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin-ext", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.title + " – Bezpečí. Bydlení. Rodina. Zdraví.",
  description: SITE.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Správná cesta pro Jablonec",
    description:
      "Aby byl Jablonec bezpečným domovem pro všechny generace.",
    url: SITE.url,
    siteName: SITE.title,
    images: [
      {
        url: `${SITE.url}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Správná cesta pro Jablonec",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Správná cesta pro Jablonec",
    description:
      "Aby byl Jablonec bezpečným domovem pro všechny generace.",
    images: [`${SITE.url}/og-image.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}