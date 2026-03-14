"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

interface CopyCodeButtonProps {
  text: string;
  className?: string;
}

export default function CopyCodeButton({ text, className = "absolute top-3 right-3 z-10" }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-2 rounded-md bg-[#222]/80 backdrop-blur-sm border border-[#333] text-[#888] hover:text-[#e8e8e8] hover:bg-[#333] transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 flex items-center justify-center cursor-pointer ${className}`}
      aria-label="Copy code"
      title="Copy code"
    >
      {copied ? (
        <Icon icon="solar:check-circle-linear" className="text-green-500 text-lg" />
      ) : (
        <Icon icon="solar:copy-linear" className="text-lg" />
      )}
    </button>
  );
}
