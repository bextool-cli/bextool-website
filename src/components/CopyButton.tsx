"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

interface CopyButtonProps {
  text: string;
  className?: string;
  iconClassName?: string;
}

export default function CopyButton({ text, className = "", iconClassName = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }

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
      <Icon
        icon={copied ? "solar:check-circle-linear" : "solar:copy-linear"}
        className={`${iconClassName} ${copied ? "text-[#27c93f]" : ""}`}
      />
    </button>
  );
}
