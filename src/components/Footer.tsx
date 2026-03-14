"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  const isDocs = pathname === "/docs";

  if (isDocs) {
    return (
      <footer className="border-t border-[#1a1a1a] bg-[#0d0d0d] py-10 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#666] text-sm">
          <span>bextool documentation</span>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[#e8e8e8] transition-colors font-mono">
              Back to home
            </Link>
            <Link href="/privacy" className="hover:text-[#e8e8e8] transition-colors font-mono">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#e8e8e8] transition-colors font-mono">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0d0d0d] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-[#666] text-base">
          bextool —{" "}
          <a
            href="https://opensource.org/licenses/ISC"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#e8e8e8] transition-colors"
          >
            ISC License
          </a>
        </div>
        <div className="text-[#666] text-base flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center">
          <span>Contributors:</span>
          <a
            href="https://github.com/Abhiraj35"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#e8e8e8] transition-colors"
          >
            Abhiraj (Abhiraj35)
          </a>
          <span className="hidden sm:inline">·</span>
          <a
            href="https://github.com/Shubham-1068"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#e8e8e8] transition-colors"
          >
            Shubham Raj (Shubham-1068)
          </a>
        </div>
        <div className="text-[#666] text-sm flex items-center gap-4 font-mono">
          <Link href="/about" className="hover:text-[#e8e8e8] transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#e8e8e8] transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-[#e8e8e8] transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[#e8e8e8] transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
