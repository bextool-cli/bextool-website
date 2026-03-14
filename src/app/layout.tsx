import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bextool — Scaffolding browser extensions in seconds",
  description: "An open-source npm CLI that scaffolds production-ready browser extension starters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} selection:bg-[#ff6b00] selection:text-[#0d0d0d] font-light`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
