"use client";

import { useState } from "react";
import CopyCodeButton from "./CopyCodeButton";

export default function OutputTabs() {
  const [activeTab, setActiveTab] = useState<"next" | "package">("next");

  return (
    <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden flex flex-col h-[500px]">
      <div className="bg-[#1a1a1a] border-b border-[#333] flex text-sm sm:text-base font-mono">
        <button
          onClick={() => setActiveTab("next")}
          className={`px-6 py-3 border-r border-[#333] transition-colors focus:outline-none ${
            activeTab === "next"
              ? "text-[#e8e8e8] bg-[#111]"
              : "text-[#666] bg-transparent hover:text-[#e8e8e8]"
          }`}
        >
          page.tsx
        </button>
        <button
          onClick={() => setActiveTab("package")}
          className={`px-6 py-3 border-r border-[#333] transition-colors cursor-pointer focus:outline-none ${
            activeTab === "package"
              ? "text-[#e8e8e8] bg-[#111]"
              : "text-[#666] bg-transparent hover:text-[#e8e8e8]"
          }`}
        >
          package.json
        </button>
      </div>

      <div className="p-6 font-mono text-sm sm:text-base overflow-y-auto leading-relaxed relative flex-1 group">
        {activeTab === "next" && (
          <div className="block">
            <CopyCodeButton 
              text={`export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">
        Welcome to my-app!
      </h1>
      <p>
        Get started by editing src/app/page.tsx
      </p>
    </main>
  );
}`} 
              className="absolute top-4 right-4 z-10 p-2 opacity-0 group-hover:opacity-100 transition-opacity" 
            />
            <pre>
              <code>
                <span className="text-[#ff6b00]">export default</span> <span className="text-[#e8e8e8]">{"function Home() {"}</span>
                {"\n  "}<span className="text-[#ff6b00]">return</span> <span className="text-[#e8e8e8]">{"("}</span>
                {"\n    "}<span className="text-[#666]">{"<main className=\"flex min-h-screen flex-col items-center justify-between p-24\">"}</span>
                {"\n      "}<span className="text-[#666]">{"<h1 className=\"text-4xl font-bold\">"}</span>
                {"\n        "}<span className="text-[#e8e8e8]">Welcome to my-app!</span>
                {"\n      "}<span className="text-[#666]">{"</h1>"}</span>
                {"\n      "}<span className="text-[#666]">{"<p>"}</span>
                {"\n        "}<span className="text-[#e8e8e8]">Get started by editing </span>
                <span className="text-[#ff6b00]">src/app/page.tsx</span>
                {"\n      "}<span className="text-[#666]">{"</p>"}</span>
                {"\n    "}<span className="text-[#666]">{"</main>"}</span>
                {"\n  "}<span className="text-[#e8e8e8]">{");"}</span>
                {"\n"}<span className="text-[#e8e8e8]">{"}"}</span>
              </code>
            </pre>
          </div>
        )}

        {activeTab === "package" && (
          <div className="block">
            <CopyCodeButton 
              text={`{
  "name": "my-app",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.3"
  }
}`} 
              className="absolute top-4 right-4 z-10 p-2 opacity-0 group-hover:opacity-100 transition-opacity" 
            />
            <pre>
              <code>
                <span className="text-[#666]">{`{
  `}</span>
                <span className="text-[#e8e8e8]">&quot;name&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;my-app&quot;</span>
                <span className="text-[#666]">{`,
  `}</span>
                <span className="text-[#e8e8e8]">&quot;version&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;0.1.0&quot;</span>
                <span className="text-[#666]">{`,
  `}</span>
                <span className="text-[#e8e8e8]">&quot;scripts&quot;</span>
                <span className="text-[#666]">{`: {
    `}</span>
                <span className="text-[#e8e8e8]">&quot;dev&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;next dev&quot;</span>
                <span className="text-[#666]">{`,
    `}</span>
                <span className="text-[#e8e8e8]">&quot;build&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;next build&quot;</span>
                <span className="text-[#666]">{`,
    `}</span>
                <span className="text-[#e8e8e8]">&quot;start&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;next start&quot;</span>
                <span className="text-[#666]">{`
  },
  `}</span>
                <span className="text-[#e8e8e8]">&quot;dependencies&quot;</span>
                <span className="text-[#666]">{`: {
    `}</span>
                <span className="text-[#e8e8e8]">&quot;react&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;^18&quot;</span>
                <span className="text-[#666]">{`,
    `}</span>
                <span className="text-[#e8e8e8]">&quot;react-dom&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;^18&quot;</span>
                <span className="text-[#666]">{`,
    `}</span>
                <span className="text-[#e8e8e8]">&quot;next&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;14.2.3&quot;</span>
                <span className="text-[#666]">{`
  }
}`}</span>
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
