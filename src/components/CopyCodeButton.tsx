"use client";

import CopyButton from "@/components/CopyButton";

type CopyCodeButtonProps = {
  text: string;
  className?: string;
};

export default function CopyCodeButton({ text, className = "absolute top-3 right-3 z-10" }: CopyCodeButtonProps) {
  return (
    <CopyButton
      text={text}
      copiedDurationMs={2000}
      className={`flex cursor-pointer items-center justify-center rounded-md border border-[#333] bg-[#222]/80 p-2 text-[#888] opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 hover:bg-[#333] hover:text-[#e8e8e8] focus:opacity-100 ${className}`}
      renderIcon={(copied) => (
        <span aria-hidden="true" className={`text-lg ${copied ? "text-green-500" : ""}`}>
          {copied ? "✓" : "⧉"}
        </span>
      )}
    />
  );
}
