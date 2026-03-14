import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bextool.tech";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "bextool — Multi-Project Scaffolding CLI",
    template: "%s | bextool",
  },
  description:
    "bextool is an open-source CLI that scaffolds production-ready starter apps for frontend, backend, full-stack, mobile, browser extensions, and more.",
  applicationName: "bextool",
  keywords: [
    "bextool",
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
    siteName: "bextool",
    title: "bextool — Multi-Project Scaffolding CLI",
    description:
      "Scaffold modern starter apps instantly with one interactive CLI flow.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "bextool logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "bextool — Multi-Project Scaffolding CLI",
    description:
      "Scaffold modern starter apps instantly with one interactive CLI flow.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "bextool",
    url: siteUrl,
    description:
      "Open-source multi-project scaffolding CLI for modern apps.",
    inLanguage: "en",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "bextool",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: ["https://github.com/bextool-cli/bextool"],
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} selection:bg-[#ff6b00] selection:text-[#0d0d0d] font-light`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:bg-[#111] focus:text-[#e8e8e8] focus:border focus:border-[#333] focus:px-3 focus:py-2 focus:rounded"
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
