"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import CopyCodeButton from "@/components/CopyCodeButton";
import { homeContent } from "@/content/home";

export default function OutputTabs() {
  const [activeTab, setActiveTab] = useState<(typeof homeContent.outputTabs)[number]["id"]>(homeContent.outputTabs[0].id);
  const codeViewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    codeViewportRef.current?.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [activeTab]);

  const activeSnippet = useMemo(
    () => homeContent.outputTabs.find((tab) => tab.id === activeTab) ?? homeContent.outputTabs[0],
    [activeTab],
  );

  return (
    <div className="flex h-125 flex-col overflow-hidden rounded-xl border border-[#333] bg-[#111]">
      <div className="flex border-b border-[#333] bg-[#1a1a1a] font-mono text-sm sm:text-base">
        {homeContent.outputTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`border-r border-[#333] px-6 py-3 transition-colors focus:outline-none ${
              activeTab === tab.id ? "bg-[#111] text-[#e8e8e8]" : "bg-transparent text-[#666] hover:text-[#e8e8e8]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="group relative flex-1">
        <CopyCodeButton text={activeSnippet.code} className="absolute right-4 top-4 z-20 p-2 opacity-0 transition-opacity group-hover:opacity-100" />
        <div ref={codeViewportRef} className="output-scroll h-full overflow-auto p-6 pr-20 font-mono text-sm leading-relaxed sm:text-base">
          <pre className="min-w-max whitespace-pre-wrap text-[#e8e8e8]">
            <code>{activeSnippet.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
