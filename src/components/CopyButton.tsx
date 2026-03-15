"use client";

import { useState } from "react";

interface CopyButtonProps {
  text: string;
  className?: string;
  iconClassName?: string;
}

export default function CopyButton({ text, className = "", iconClassName = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(text);

      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      type="button"
      aria-label="Copy to clipboard"
      onClick={handleCopy}
      className={className}
    >
      <span
        aria-hidden="true"
        className={`${iconClassName} ${copied ? "text-[#27c93f]" : ""}`}
      >
        {copied ? "✓" : "⧉"}
      </span>
    </button>
  );
}
