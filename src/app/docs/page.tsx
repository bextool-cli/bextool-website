import { Metadata } from "next";
import DocsHighlighter from "@/components/DocsHighlighter";

export const metadata: Metadata = {
  title: "bextool Docs — Project details & configs",
};

export default function Docs() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      <DocsHighlighter />
      
      <div className="grid lg:grid-cols-[280px_minmax(0,1fr)] gap-8 lg:gap-12 items-start">
        <aside className="hidden lg:block sticky top-24">
          <div className="border border-[#2a2a2a] rounded-xl bg-[#111] p-5">
            <p className="text-xs font-mono uppercase tracking-widest text-[#666] mb-4">
              Learn bextool
            </p>
            <nav className="flex flex-col gap-2 text-sm">
              <a
                href="#quick-start"
                className="docs-link border border-transparent rounded px-3 py-2 text-[#888] hover:text-[#e8e8e8] transition-colors"
              >
                1. Quick Start
              </a>
              <a
                href="#project-details"
                className="docs-link border border-transparent rounded px-3 py-2 text-[#888] hover:text-[#e8e8e8] transition-colors"
              >
                2. Project Details
              </a>
              <a
                href="#configuration"
                className="docs-link border border-transparent rounded px-3 py-2 text-[#888] hover:text-[#e8e8e8] transition-colors"
              >
                3. Configuration
              </a>
              <a
                href="#commands"
                className="docs-link border border-transparent rounded px-3 py-2 text-[#888] hover:text-[#e8e8e8] transition-colors"
              >
                4. Commands
              </a>
              <a
                href="#release-flow"
                className="docs-link border border-transparent rounded px-3 py-2 text-[#888] hover:text-[#e8e8e8] transition-colors"
              >
                5. Release Flow
              </a>
            </nav>
          </div>
        </aside>

        <article className="min-w-0">
          <section id="quick-start" className="mb-12">
            <p className="text-sm font-mono text-[#666] uppercase tracking-widest mb-4">
              Documentation
            </p>
            <h1 className="text-4xl md:text-5xl font-mono font-normal tracking-tight leading-tight mb-5">
              Learn bextool.
            </h1>
            <p className="text-lg text-[#666] leading-relaxed max-w-3xl">
              This docs page follows a learn-style format with progressive sections. Start
              with setup, then move through project details and configuration files used by
              generated extension projects.
            </p>
          </section>

          <section className="mb-10 border-t border-[#1a1a1a] pt-10">
            <h2 className="text-2xl md:text-3xl font-mono font-normal tracking-tight mb-6">
              What you will configure
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-5">
                <h3 className="text-lg font-normal tracking-tight mb-2">
                  Project identity
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  Package name, description, versioning, and browser target selection that
                  shape scaffold output.
                </p>
              </div>
              <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-5">
                <h3 className="text-lg font-normal tracking-tight mb-2">
                  Core extension behavior
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  Manifest permissions, popup/background entry points, and dev/build
                  scripts used in day-to-day development.
                </p>
              </div>
            </div>
          </section>

          <section id="project-details" className="mb-10 border-t border-[#1a1a1a] pt-10">
            <h2 className="text-2xl md:text-3xl font-mono font-normal tracking-tight mb-6">
              2. Project details
            </h2>
            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
              <ul className="space-y-3 text-[#666] text-base">
                <li>
                  <span className="text-[#e8e8e8] font-mono">Package:</span> bextool
                </li>
                <li>
                  <span className="text-[#e8e8e8] font-mono">Type:</span> Node.js CLI
                  utility for browser extension scaffolding
                </li>
                <li>
                  <span className="text-[#e8e8e8] font-mono">Runtime:</span> Node.js 18+
                </li>
                <li>
                  <span className="text-[#e8e8e8] font-mono">Targets:</span> Chrome,
                  Firefox, Edge, Safari
                </li>
              </ul>
            </div>
          </section>

          <section id="configuration" className="mb-10 border-t border-[#1a1a1a] pt-10">
            <h2 className="text-2xl md:text-3xl font-mono font-normal tracking-tight mb-6">
              3. Configuration
            </h2>

            <div className="space-y-6">
              <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden">
                <div className="px-5 py-3 border-b border-[#333] bg-[#1a1a1a] flex items-center justify-between">
                  <span className="font-mono text-sm text-[#e8e8e8]">manifest.json</span>
                  <span className="font-mono text-xs text-[#666]">
                    Extension behavior and permissions
                  </span>
                </div>
                <pre className="p-5 text-sm overflow-x-auto">
                  <code className="language-json">{`{
  "manifest_version": 3,
  "name": "my-extension",
  "version": "1.0.0",
  "description": "A lightweight tab manager",
  "permissions": ["tabs", "storage"],
  "action": {
    "default_popup": "popup/popup.html"
  },
  "background": {
    "service_worker": "background/background.js"
  }
}`}</code>
                </pre>
              </div>

              <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden">
                <div className="px-5 py-3 border-b border-[#333] bg-[#1a1a1a] flex items-center justify-between">
                  <span className="font-mono text-sm text-[#e8e8e8]">package.json</span>
                  <span className="font-mono text-xs text-[#666]">
                    Project metadata and scripts
                  </span>
                </div>
                <pre className="p-5 text-sm overflow-x-auto">
                  <code className="language-json">{`{
  "name": "my-extension",
  "version": "1.0.0",
  "description": "A lightweight tab manager",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development --watch"
  },
  "devDependencies": {
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4"
  }
}`}</code>
                </pre>
              </div>

              <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-xl font-normal tracking-tight mb-3">
                  README sections you should keep
                </h3>
                <pre className="p-4 text-sm overflow-x-auto bg-[#111] border border-[#333] rounded">
                  <code className="language-markdown">{`# my-extension

## Setup
npm install

## Development
npm run dev

## Build
npm run build

## Load in Browser
- Enable developer mode
- Load unpacked output directory`}</code>
                </pre>
              </div>
            </div>
          </section>

          <section id="commands" className="mb-10 border-t border-[#1a1a1a] pt-10">
            <h2 className="text-2xl md:text-3xl font-mono font-normal tracking-tight mb-6">
              4. Commands
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-xl font-normal tracking-tight mb-4">
                  Install and scaffold
                </h3>
                <div className="bg-[#111] border border-[#333] rounded px-4 py-3 font-mono text-sm text-[#e8e8e8] flex flex-col gap-2">
                  <span>npm install -g bextool</span>
                  <span>bextool</span>
                </div>
              </div>
              <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-xl font-normal tracking-tight mb-4">
                  Run generated project
                </h3>
                <div className="bg-[#111] border border-[#333] rounded px-4 py-3 font-mono text-sm text-[#e8e8e8] flex flex-col gap-2">
                  <span>npm install</span>
                  <span>npm run dev</span>
                  <span>npm run build</span>
                </div>
              </div>
            </div>
          </section>

          <section id="release-flow" className="border-t border-[#1a1a1a] pt-10">
            <h2 className="text-2xl md:text-3xl font-mono font-normal tracking-tight mb-6">
              5. Release flow
            </h2>
            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
              <p className="text-[#666] mb-4">
                Before publishing, validate package quality and installability:
              </p>
              <div className="bg-[#111] border border-[#333] rounded px-4 py-3 font-mono text-sm text-[#e8e8e8] flex flex-col gap-2">
                <span>npm test</span>
                <span>npm pack --dry-run</span>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
