"use client";

import { useState } from "react";

export default function OutputTabs() {
  const [activeTab, setActiveTab] = useState<"manifest" | "package">("manifest");

  return (
    <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden flex flex-col h-[500px]">
      <div className="bg-[#1a1a1a] border-b border-[#333] flex text-sm sm:text-base font-mono">
        <button
          onClick={() => setActiveTab("manifest")}
          className={`px-6 py-3 border-r border-[#333] transition-colors focus:outline-none ${
            activeTab === "manifest"
              ? "text-[#e8e8e8] bg-[#111]"
              : "text-[#666] bg-transparent hover:text-[#e8e8e8]"
          }`}
        >
          manifest.json
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

      <div className="p-6 font-mono text-sm sm:text-base overflow-y-auto leading-relaxed relative flex-1">
        {activeTab === "manifest" && (
          <div className="block">
            <pre>
              <code>
                <span className="text-[#666]">{`{
  `}</span>
                <span className="text-[#e8e8e8]">&quot;manifest_version&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">3</span>
                <span className="text-[#666]">{`,
  `}</span>
                <span className="text-[#e8e8e8]">&quot;name&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;my-extension&quot;</span>
                <span className="text-[#666]">{`,
  `}</span>
                <span className="text-[#e8e8e8]">&quot;version&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;1.0.0&quot;</span>
                <span className="text-[#666]">{`,
  `}</span>
                <span className="text-[#e8e8e8]">&quot;description&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;A lightweight tab manager&quot;</span>
                <span className="text-[#666]">{`,
  `}</span>
                <span className="text-[#e8e8e8]">&quot;action&quot;</span>
                <span className="text-[#666]">{`: {
    `}</span>
                <span className="text-[#e8e8e8]">&quot;default_popup&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;popup/popup.html&quot;</span>
                <span className="text-[#666]">{`
  },
  `}</span>
                <span className="text-[#e8e8e8]">&quot;background&quot;</span>
                <span className="text-[#666]">{`: {
    `}</span>
                <span className="text-[#e8e8e8]">&quot;service_worker&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;background/background.js&quot;</span>
                <span className="text-[#666]">{`
  },
  `}</span>
                <span className="text-[#e8e8e8]">&quot;permissions&quot;</span>
                <span className="text-[#666]">{`: [
    `}</span>
                <span className="text-[#ff6b00]">&quot;tabs&quot;</span>
                <span className="text-[#666]">{`,
    `}</span>
                <span className="text-[#ff6b00]">&quot;storage&quot;</span>
                <span className="text-[#666]">{`
  ],
  `}</span>
                <span className="text-[#e8e8e8]">&quot;icons&quot;</span>
                <span className="text-[#666]">{`: {
    `}</span>
                <span className="text-[#e8e8e8]">&quot;16&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;icons/icon16.png&quot;</span>
                <span className="text-[#666]">{`,
    `}</span>
                <span className="text-[#e8e8e8]">&quot;48&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;icons/icon48.png&quot;</span>
                <span className="text-[#666]">{`,
    `}</span>
                <span className="text-[#e8e8e8]">&quot;128&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;icons/icon128.png&quot;</span>
                <span className="text-[#666]">{`
  }
}`}</span>
              </code>
            </pre>
          </div>
        )}

        {activeTab === "package" && (
          <div className="block">
            <pre>
              <code>
                <span className="text-[#666]">{`{
  `}</span>
                <span className="text-[#e8e8e8]">&quot;name&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;my-extension&quot;</span>
                <span className="text-[#666]">{`,
  `}</span>
                <span className="text-[#e8e8e8]">&quot;version&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;1.0.0&quot;</span>
                <span className="text-[#666]">{`,
  `}</span>
                <span className="text-[#e8e8e8]">&quot;description&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;A lightweight tab manager&quot;</span>
                <span className="text-[#666]">{`,
  `}</span>
                <span className="text-[#e8e8e8]">&quot;scripts&quot;</span>
                <span className="text-[#666]">{`: {
    `}</span>
                <span className="text-[#e8e8e8]">&quot;build&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;webpack --mode production&quot;</span>
                <span className="text-[#666]">{`,
    `}</span>
                <span className="text-[#e8e8e8]">&quot;dev&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;webpack --mode development --watch&quot;</span>
                <span className="text-[#666]">{`
  },
  `}</span>
                <span className="text-[#e8e8e8]">&quot;devDependencies&quot;</span>
                <span className="text-[#666]">{`: {
    `}</span>
                <span className="text-[#e8e8e8]">&quot;webpack&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;^5.89.0&quot;</span>
                <span className="text-[#666]">{`,
    `}</span>
                <span className="text-[#e8e8e8]">&quot;webpack-cli&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;^5.1.4&quot;</span>
                <span className="text-[#666]">{`,
    `}</span>
                <span className="text-[#e8e8e8]">&quot;copy-webpack-plugin&quot;</span>
                <span className="text-[#666]">: </span>
                <span className="text-[#ff6b00]">&quot;^11.0.0&quot;</span>
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
