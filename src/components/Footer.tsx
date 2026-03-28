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
    <footer className="relative border-t border-[#1a1a1a] bg-[#0d0d0d] pt-16 md:pt-24 overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-8 md:px-6 w-full flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6 z-10">
        <div className="flex flex-col gap-4 max-w-sm">
          <Link href="/" className="font-mono text-[#e8e8e8] text-xl font-bold tracking-tight">bextool</Link>
          <p className="text-[#888] text-sm leading-relaxed">
            Built and maintained by contributors driving CLI ergonomics, release quality, and cross-browser support.
            <span className="mt-4 block">
              Released under the{" "}
              <a href="https://opensource.org/licenses/ISC" target="_blank" rel="noreferrer" className="text-[#a1a1aa] hover:text-white transition-colors underline underline-offset-4">
                ISC License
              </a>.
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-[#e8e8e8] text-xs font-semibold tracking-wider uppercase">Resources</span>
            <div className="flex flex-col gap-3 text-[#888] text-sm">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[#e8e8e8] text-xs font-semibold tracking-wider uppercase">Contributors</span>
            <div className="flex flex-col gap-3 text-[#888] text-sm">
              <a href="https://github.com/Abhiraj35" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Abhiraj (@Abhiraj35)
              </a>
              <a href="https://github.com/Shubham-1068" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Shubham Raj (@Shubham-1068)
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-20 md:mt-32 px-6 sm:px-0 flex justify-center items-end select-none pointer-events-none relative z-0">
        <span className="max-w-7xl mx-auto bg-gradient-to-b from-white/80 to-white/10 bg-clip-text text-center text-[19vw] sm:text-[20vw] lg:text-[18rem] font-black leading-none text-transparent translate-y-2 sm:translate-y-4 md:translate-y-6">BEXTOOL</span>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2/5 sm:h-2/5 md:h-1/2 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent pointer-events-none z-10"></div>
    </footer>
  );
}
