"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/lib/site";

export default function Footer() {
  const pathname = usePathname();
  const isDocs = pathname === "/docs";

  if (isDocs) {
    return (
      <footer className="mt-16 border-t border-[#262d37] bg-[#0d0d0d] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-[#7d838d] sm:flex-row">
          <span>{siteConfig.name} documentation</span>
          <div className="flex items-center gap-4">
            {siteConfig.footer.docsLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-mono transition-colors hover:text-[#e8e8e8]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative flex flex-col items-center overflow-hidden border-t border-[#262d37] bg-[#0d0d0d] pt-16 md:pt-24">
      <div className="z-10 flex w-full max-w-7xl flex-col items-start justify-between gap-12 px-8 md:flex-row md:gap-6 md:px-6">
        <div className="max-w-sm">
          <Link href="/" className="text-xl font-mono font-bold tracking-tight text-[#e8e8e8]">
            {siteConfig.name}
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-[#9c978f]">
            Built and maintained by contributors driving CLI ergonomics, release quality, and cross-browser support.
            <span className="mt-4 block">
              Released under the{" "}
              <a
                href={siteConfig.license.href}
                target="_blank"
                rel="noreferrer"
                className="text-[#a1a1aa] underline underline-offset-4 transition-colors hover:text-white"
              >
                {siteConfig.license.name}
              </a>
              .
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:flex-row sm:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#e8e8e8]">Resources</span>
            <div className="flex flex-col gap-3 text-sm text-[#888]">
              {siteConfig.footer.resources.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#e8e8e8]">Contributors</span>
            <div className="flex flex-col gap-3 text-sm text-[#888]">
              {siteConfig.contributors.map((contributor) => (
                <a
                  key={contributor.href}
                  href={contributor.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {contributor.name} ({contributor.handle})
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0 mt-20 flex w-full items-end justify-center px-6 select-none pointer-events-none md:mt-32 sm:px-0">
        <span className="mx-auto max-w-7xl translate-y-2 bg-linear-to-b from-white/80 to-white/10 bg-clip-text text-center text-[19vw] font-black leading-none text-transparent sm:translate-y-4 sm:text-[20vw] lg:text-[18rem] md:translate-y-6">
          {siteConfig.name.toUpperCase()}
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-2/5 w-full bg-linear-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent sm:h-2/5 md:h-1/2" />
    </footer>
  );
}
