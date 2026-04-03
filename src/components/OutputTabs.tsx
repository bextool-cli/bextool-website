"use client";

import { useMemo, useState } from "react";

import { CodeBlock, CodeBlockCopyButton } from "@/components/ui/code-block";
import { homeContent } from "@/content/home";

export default function OutputTabs() {
  const [activeTab, setActiveTab] = useState<(typeof homeContent.outputTabs)[number]["id"]>(homeContent.outputTabs[0].id);

  const activeSnippet = useMemo(
    () => homeContent.outputTabs.find((tab) => tab.id === activeTab) ?? homeContent.outputTabs[0],
    [activeTab],
  );

  return (
    <div className="overflow-hidden rounded-xl border border-[#2f3742] bg-[#0f141a]">
      <div className="overflow-x-auto border-b border-[#2f3742] bg-[#121820]">
        <div className="flex min-w-max font-mono text-xs sm:text-sm">
        {homeContent.outputTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`shrink-0 border-r border-[#2f3742] px-4 py-3 transition-colors focus:outline-none sm:px-5 ${
              activeTab === tab.id
                ? "bg-[#0a0e14] text-[#ece9e4]"
                : "bg-transparent text-[#7d838d] hover:text-[#ece9e4]"
            }`}
          >
            {tab.label}
          </button>
        ))}
        </div>
      </div>

      <div className="dark">
        <CodeBlock code={activeSnippet.code} language={activeSnippet.language} className="rounded-none border-none bg-[#0a0e14]">
          <CodeBlockCopyButton
            className="h-8 w-8 border border-[#2f3742] bg-[#141c26] text-[#9aa4b3] hover:bg-[#1b2534] hover:text-[#e8edf6]"
            aria-label={`Copy ${activeSnippet.label}`}
          />
        </CodeBlock>
      </div>
    </div>
  );
}
