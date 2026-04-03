"use client";

import { Icon } from "@iconify/react";
import { CopyCheck } from "lucide-react";
import { useState } from "react";

type CommandCopyProps = {
  command: string;
  copyText?: string;
  className?: string;
  codeClassName?: string;
  variant?: "default" | "hero";
};

export default function CommandCopy({
  command,
  copyText,
  className = "",
  codeClassName = "",
  variant = "default",
}: CommandCopyProps) {
  const isHero = variant === "hero";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(copyText ?? command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Copy command"
      onClick={handleCopy}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          void handleCopy();
        }
      }}
      className={`relative mx-auto flex w-full items-center overflow-hidden rounded-lg border bg-[#353535] p-1.5 pl-5 shadow-sm transition-colors ${
        isHero
          ? "group rounded-2xl border-[#757e8a] bg-[#090d14] p-2 pl-5 shadow-[0_22px_50px_rgba(0,0,0,.45)] hover:border-[#4d5b6f] border-dashed "
          : "border-neutral-800 hover:border-neutral-700"
      } ${className} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5d6c82]/70`.trim()}
    >
      {isHero ? (
        <>
          <span aria-hidden="true" className="pointer-events-none absolute -left-8 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[#c97a45]/12 blur-2xl" />
          <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-14 w-20 rounded-full bg-[#6c8fb7]/10 blur-2xl" />
        </>
      ) : null}
      <span className={`mr-3 font-mono text-sm ${isHero ? "text-[#7f8ea2]" : "text-neutral-600"}`}>$</span>
      <code
        className={`flex-1 select-all text-left font-mono text-sm ${
          isHero ? "text-[#d8dde6]" : "text-neutral-200"
        } ${codeClassName}`.trim()}
      >
        {command}
      </code>
      <span
        aria-hidden="true"
        className={`relative flex h-8 w-8 items-center justify-center overflow-hidden rounded border transition-all duration-300 group-active:scale-95 ${
          isHero
            ? "border-[#3b4654] bg-[#151d29] text-[#a6b0be] group-hover:border-[#5d6c82] group-hover:bg-[#1b2534] group-hover:text-[#e8edf6]"
            : "border-neutral-800 bg-neutral-900 text-neutral-400 group-hover:bg-neutral-800 group-hover:text-white"
        }`}
      >
        <Icon
          icon="solar:copy-linear"
          strokeWidth="1.5"
          className={`absolute transition-all duration-250 ease-out ${
            copied ? "scale-75 opacity-0" : "scale-100 opacity-100"
          } ${isHero ? "text-[18px]" : ""}`}
        />
        <CopyCheck
          className={`h-4 w-4 transition-all duration-250 ease-out ${
            copied ? "scale-100 opacity-100" : "scale-75 opacity-0"
          } ${isHero ? "text-[18px]" : ""}`}
        />
      </span>
    </div>
  );
}
