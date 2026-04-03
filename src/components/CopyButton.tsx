"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type CopyButtonProps = {
  text: string;
  className?: string;
  iconClassName?: string;
  copiedDurationMs?: number;
  renderIcon?: (copied: boolean) => ReactNode;
};

export default function CopyButton({
  text,
  className = "",
  iconClassName = "",
  copiedDurationMs = 1500,
  renderIcon,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), copiedDurationMs);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <button type="button" aria-label="Copy to clipboard" onClick={handleCopy} className={className}>
      {renderIcon ? (
        renderIcon(copied)
      ) : (
        <span aria-hidden="true" className={`${iconClassName} ${copied ? "text-[#27c93f]" : ""}`}>
          {copied ? "✓" : "⧉"}
        </span>
      )}
    </button>
  );
}
