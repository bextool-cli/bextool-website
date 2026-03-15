"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowLeft, Github, Menu, Package, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDocs = pathname === "/docs";

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="border-b border-[#2a2a2a] bg-[#0d0d0d]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-16 py-3 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono font-normal text-lg tracking-tight hover:text-[#ff6b00] transition-colors"
        >
          <Image
            src="/logo.png"
            alt="bextool logo"
            width={20}
            height={20}
            className="rounded-sm"
            priority
          />
          <span>bextool</span>
        </Link>

        {isDocs ? (
          <div className="hidden lg:flex items-center gap-7 text-sm text-[#888]">
            <a href="#quick-start" className="hover:text-[#e8e8e8] transition-colors">
              Learn
            </a>
            <a href="#supported-frameworks" className="hover:text-[#e8e8e8] transition-colors">
              Project
            </a>
            <a href="#extending-the-cli" className="hover:text-[#e8e8e8] transition-colors">
              Configs
            </a>
            <a href="#cli-commands" className="hover:text-[#e8e8e8] transition-colors">
              Commands
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-7 text-sm text-[#888]">
            <Link href="/docs" prefetch={false} className="hover:text-[#e8e8e8] transition-colors">
              Docs
            </Link>
            <a href="#features" className="hover:text-[#e8e8e8] transition-colors">
              Features
            </a>
            <a href="#usage" className="hover:text-[#e8e8e8] transition-colors">
              Usage
            </a>
            <a href="#output" className="hover:text-[#e8e8e8] transition-colors">
              Output
            </a>
            <a href="#contributors" className="hover:text-[#e8e8e8] transition-colors">
              Contributors
            </a>
          </div>
        )}

        <div className="hidden sm:flex items-center gap-3 text-[#666]">
          {isDocs && (
            <Link
              href="/"
              className="hover:text-[#e8e8e8] transition-colors text-sm font-mono border border-[#333] px-3 py-2 rounded flex items-center gap-2"
            >
              <ArrowLeft aria-hidden="true" className="w-4 h-4" />
              Home
            </Link>
          )}
          <a
            href="https://github.com/bextool-cli/bextool"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#e8e8e8] transition-colors text-sm font-mono border border-[#333] px-3 py-2 rounded flex items-center gap-2"
          >
            <Github aria-hidden="true" className="w-4 h-4" />
            GitHub
          </a>
          {!isDocs && (
            <a
              href="https://www.npmjs.com/package/bextool"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#e8e8e8] transition-colors text-sm font-mono border border-[#333] px-3 py-2 rounded flex items-center gap-2"
            >
              <Package aria-hidden="true" className="w-4 h-4" />
              npm
            </a>
          )}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="sm:hidden inline-flex items-center justify-center border border-[#333] rounded p-2 text-[#666] hover:text-[#e8e8e8] transition-colors"
        >
          {isMobileMenuOpen ? (
            <X aria-hidden="true" className="w-5 h-5" />
          ) : (
            <Menu aria-hidden="true" className="w-5 h-5" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="sm:hidden border-t border-[#2a2a2a] px-4 pb-4 pt-3 bg-[#0d0d0d]">
          {isDocs ? (
            <div className="flex flex-col gap-3 text-sm text-[#888]">
              <a href="#quick-start" onClick={closeMenu} className="hover:text-[#e8e8e8] transition-colors">
                Learn
              </a>
              <a href="#supported-frameworks" onClick={closeMenu} className="hover:text-[#e8e8e8] transition-colors">
                Project
              </a>
              <a href="#extending-the-cli" onClick={closeMenu} className="hover:text-[#e8e8e8] transition-colors">
                Configs
              </a>
              <a href="#cli-commands" onClick={closeMenu} className="hover:text-[#e8e8e8] transition-colors">
                Commands
              </a>
              <Link href="/" onClick={closeMenu} className="hover:text-[#e8e8e8] transition-colors">
                Home
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3 text-sm text-[#888]">
              <Link href="/docs" prefetch={false} onClick={closeMenu} className="hover:text-[#e8e8e8] transition-colors">
                Docs
              </Link>
              <a href="#features" onClick={closeMenu} className="hover:text-[#e8e8e8] transition-colors">
                Features
              </a>
              <a href="#usage" onClick={closeMenu} className="hover:text-[#e8e8e8] transition-colors">
                Usage
              </a>
              <a href="#output" onClick={closeMenu} className="hover:text-[#e8e8e8] transition-colors">
                Output
              </a>
              <a href="#contributors" onClick={closeMenu} className="hover:text-[#e8e8e8] transition-colors">
                Contributors
              </a>
            </div>
          )}
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#1f1f1f]">
            {isDocs && (
              <Link
                href="/"
                className="hover:text-[#e8e8e8] transition-colors text-xs font-mono border border-[#333] px-3 py-2 rounded flex items-center gap-2 text-[#666]"
              >
                <ArrowLeft aria-hidden="true" className="w-4 h-4" />
                Home
              </Link>
            )}
            <a
              href="https://github.com/bextool-cli/bextool"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#e8e8e8] transition-colors text-xs font-mono border border-[#333] px-3 py-2 rounded flex items-center gap-2 text-[#666]"
            >
              <Github aria-hidden="true" className="w-4 h-4" />
              GitHub
            </a>
            {!isDocs && (
              <a
                href="https://www.npmjs.com/package/bextool"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#e8e8e8] transition-colors text-xs font-mono border border-[#333] px-3 py-2 rounded flex items-center gap-2 text-[#666]"
              >
                <Package aria-hidden="true" className="w-4 h-4" />
                npm
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
