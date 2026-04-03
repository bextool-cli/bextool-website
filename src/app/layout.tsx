import type { Metadata, Viewport } from "next";
import { Caveat, Geist, Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });

const sharedSocialImage = {
  url: "/logo.png",
  width: 512,
  height: 512,
  alt: `${siteConfig.name} logo`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — Multi-Project Scaffolding CLI`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    siteConfig.name,
    "project scaffolding CLI",
    "app generator CLI",
    "Next.js starter",
    "React starter",
    "open source CLI",
  ],
  category: "developer tools",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Multi-Project Scaffolding CLI`,
    description: "Scaffold modern starter apps instantly with one interactive CLI flow.",
    images: [sharedSocialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Multi-Project Scaffolding CLI`,
    description: "Scaffold modern starter apps instantly with one interactive CLI flow.",
    images: [sharedSocialImage.url],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.shortDescription,
    inLanguage: "en",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.png`,
    sameAs: [siteConfig.links.repository],
  };

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className="min-h-screen bg-[#0a0a0a] font-sans antialiased selection:bg-[#ff6b00] selection:text-white"
      >
        <a
          href="#main-content"
          className="sr-only hidden focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-100 focus:rounded focus:border focus:border-[#333] focus:bg-[#111] focus:px-3 focus:py-2 focus:text-[#e8e8e8]"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
