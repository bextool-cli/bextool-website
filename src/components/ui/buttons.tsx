"use client";

import Link from "next/link";
import { Check, Copy, Terminal } from "lucide-react";

import CopyButton from "@/components/CopyButton";
import { siteConfig } from "@/lib/site";

export default function Buttons() {
  return (
    <div className="flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
      <CopyButton
        text={siteConfig.installCommand}
        className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-full border border-[#2f3742] bg-[#11161c] px-5 py-3.5 font-medium text-[#ece9e4] sm:w-auto sm:px-8 sm:py-4"
        renderIcon={(copied) => (
          <>
            <Terminal className="h-5 w-5 text-[#7d838d] transition-colors group-hover:text-[#c97a45]" />
            <span className="font-mono text-xs sm:text-sm">{siteConfig.installCommand}</span>
            <div className="mx-1 h-4 w-px bg-[#3a4350]" />
            {copied ? (
              <Check className="h-4 w-4 text-[#27c93f]" />
            ) : (
              <Copy className="h-4 w-4 text-[#7d838d] transition-colors group-hover:text-[#ece9e4]" />
            )}
          </>
        )}
      />

      <Link
        href={siteConfig.links.docs}
        className="inline-flex w-full items-center justify-center rounded-full border border-[#c97a45] bg-[#c97a45] px-5 py-3.5 font-medium text-[#14171b] sm:w-auto sm:px-8 sm:py-4"
      >
        <span className="text-sm sm:text-base">View Documentation</span>
      </Link>
    </div>
  );
}
