"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Github, Menu, Package, X } from "lucide-react";

import { siteConfig, type SiteLink } from "@/lib/site";

function NavLinks({ links, onNavigate }: { links: readonly SiteLink[]; onNavigate?: () => void }) {
  return (
    <>
      {links.map((link) => {
        const className = "transition-colors hover:text-[#e8e8e8]";

        if (link.href.startsWith("/")) {
          return (
            <Link key={link.href} href={link.href} prefetch={false} onClick={onNavigate} className={className}>
              {link.label}
            </Link>
          );
        }

        return (
          <a key={link.href} href={link.href} onClick={onNavigate} className={className}>
            {link.label}
          </a>
        );
      })}
    </>
  );
}

function ActionLink({ href, label, icon: Icon }: { href: string; label: string; icon: typeof Github }) {
  const className = "flex items-center gap-2 rounded border border-[#343d49] px-3 py-2 text-sm font-mono transition-colors hover:text-[#e8e8e8]";

  return href.startsWith("/") ? (
    <Link href={href} className={className}>
      <Icon aria-hidden="true" className="h-4 w-4" />
      {label}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      <Icon aria-hidden="true" className="h-4 w-4" />
      {label}
    </a>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isDocs = pathname === "/docs";

  const navLinks = isDocs ? siteConfig.navigation.docs : siteConfig.navigation.home;
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#262d37] bg-[#0d0d0d]/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-lg tracking-tight text-[#ece9e4] transition-colors hover:text-[#c97a45]"
        >
          <Image src="/logo.png" alt="bextool logo" width={20} height={20} className="rounded-sm" priority />
          <span>{siteConfig.name}</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-[#888] lg:flex">
          <NavLinks links={navLinks} />
        </div>

        <div className="hidden items-center gap-3 text-[#7d838d] sm:flex">
          {isDocs ? <ActionLink href="/" label="Home" icon={ArrowLeft} /> : null}
          <ActionLink href={siteConfig.links.repository} label="GitHub" icon={Github} />
          {!isDocs ? <ActionLink href={siteConfig.links.npm} label="npm" icon={Package} /> : null}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded border border-[#343d49] p-2 text-[#7d838d] transition-colors hover:text-[#e8e8e8] sm:hidden"
        >
          {isMobileMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div id="mobile-menu" className="border-t border-[#262d37] bg-[#0d0d0d] px-4 pb-4 pt-3 sm:hidden">
          <div className="flex flex-col gap-3 text-sm text-[#888]">
            <NavLinks links={navLinks} onNavigate={closeMenu} />
            {isDocs ? (
              <Link href="/" onClick={closeMenu} className="transition-colors hover:text-[#e8e8e8]">
                Home
              </Link>
            ) : null}
          </div>

          <div className="mt-4 flex items-center gap-3 border-t border-[#1f1f1f] pt-4">
            {isDocs ? <ActionLink href="/" label="Home" icon={ArrowLeft} /> : null}
            <ActionLink href={siteConfig.links.repository} label="GitHub" icon={Github} />
            {!isDocs ? <ActionLink href={siteConfig.links.npm} label="npm" icon={Package} /> : null}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
