import { Metadata } from "next";
import DocsHighlighter from "@/components/DocsHighlighter";
import { Icon } from "@iconify/react";
import CopyCodeButton from "@/components/CopyCodeButton";

export const metadata: Metadata = {
  title: "bextool Docs — Multi-Project CLI Documentation",
};

export default function Docs() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      <DocsHighlighter />
      
      <div className="grid lg:grid-cols-[280px_minmax(0,1fr)] gap-8 lg:gap-16 items-start">
        {/* Sticky Left Navigation Sidebar (Tailwind-like style) */}
        <aside className="hidden lg:block sticky top-24 pr-6 pb-20 border-r border-[#1a1a1a] h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
          <nav className="flex flex-col gap-8 text-sm">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#e8e8e8] mb-3">
                Getting Started
              </p>
              <ul className="flex flex-col gap-2 border-l border-[#2a2a2a] pl-3 ml-2">
                <li>
                  <a href="#quick-start" className="docs-link block text-[#888] hover:text-[#e8e8e8] transition-colors py-1">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#installation" className="docs-link block text-[#888] hover:text-[#e8e8e8] transition-colors py-1">
                    Installation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#e8e8e8] mb-3">
                Usage Guide
              </p>
              <ul className="flex flex-col gap-2 border-l border-[#2a2a2a] pl-3 ml-2">
                <li>
                  <a href="#interactive-flow" className="docs-link block text-[#888] hover:text-[#e8e8e8] transition-colors py-1">
                    Interactive CLI Flow
                  </a>
                </li>
                <li>
                  <a href="#cli-commands" className="docs-link block text-[#888] hover:text-[#e8e8e8] transition-colors py-1">
                    CLI Commands
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#e8e8e8] mb-3">
                Ecosystem
              </p>
              <ul className="flex flex-col gap-2 border-l border-[#2a2a2a] pl-3 ml-2">
                <li>
                  <a href="#supported-frameworks" className="docs-link block text-[#888] hover:text-[#e8e8e8] transition-colors py-1">
                    Supported Starters
                  </a>
                </li>
                <li>
                  <a href="#extending-the-cli" className="docs-link block text-[#888] hover:text-[#e8e8e8] transition-colors py-1">
                    Add Your Own Template
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#e8e8e8] mb-3">
                Community
              </p>
              <ul className="flex flex-col gap-2 border-l border-[#2a2a2a] pl-3 ml-2">
                <li>
                  <a href="https://github.com/bextool-cli/bextool" target="_blank" rel="noreferrer" className="block text-[#888] hover:text-[#e8e8e8] transition-colors py-1 flex items-center gap-2">
                    GitHub <Icon icon="solar:arrow-right-up-linear" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Documentation Content Area */}
        <article className="min-w-0 prose-invert max-w-none text-[#a3a3a3] pb-24">
          <section id="quick-start" className="mb-20 pt-4">
            <h1 className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-[#e8e8e8] mb-6">
              bextool.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
              <strong className="text-[#e8e8e8] font-normal">bextool</strong> is an open-source, multi-project CLI that generates production-ready starter applications from a single, beautiful interactive flow.
            </p>
            <p className="leading-relaxed max-w-3xl mb-8">
              Setting up a new project often means writing boilerplate code, configuring tedious build tooling, and structuring files from scratch before actually starting your business logic. bextool solves this by providing a comprehensive, registry-driven tool that scaffolds Frontend apps, Backend servers, Full-Stack frameworks, Mobile apps, Browser extensions, and much more.
            </p>
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5 mt-6 inline-flex gap-6 items-center flex-wrap">
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-[#666] mb-1">Package</span>
                <span className="text-[#e8e8e8] text-sm">bextool (NPM)</span>
              </div>
              <div className="w-px h-8 bg-[#2a2a2a] hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-[#666] mb-1">Environment</span>
                <span className="text-[#e8e8e8] text-sm">Node.js 18+</span>
              </div>
              <div className="w-px h-8 bg-[#2a2a2a] hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase text-[#666] mb-1">Template Engine</span>
                <span className="text-[#e8e8e8] text-sm">Handlebars</span>
              </div>
            </div>
          </section>

          <hr className="border-[#1a1a1a] mb-16" />

          <section id="installation" className="mb-20 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#e8e8e8] mb-6">
              Installation
            </h2>
            <p className="leading-relaxed mb-6">
              You can install <code className="bg-[#111] text-[#e8e8e8] px-1.5 py-0.5 rounded border border-[#2a2a2a]">bextool</code> globally on your machine to use it anywhere, or execute it on-the-fly using <code className="bg-[#111] text-[#e8e8e8] px-1.5 py-0.5 rounded border border-[#2a2a2a]">npx</code>.
            </p>
            
            <h3 className="text-xl font-medium text-[#e8e8e8] mb-3 mt-8">Global Installation</h3>
            <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden mb-6 relative group">
              <CopyCodeButton text="npm install -g bextool" />
              <pre className="p-5 text-sm overflow-x-auto">
                <code className="language-bash">npm install -g bextool</code>
              </pre>
            </div>

            <h3 className="text-xl font-medium text-[#e8e8e8] mb-3 mt-8">Execute without installing</h3>
            <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden mb-6 relative group">
              <CopyCodeButton text="npx bextool" />
              <pre className="p-5 text-sm overflow-x-auto">
                <code className="language-bash">npx bextool</code>
              </pre>
            </div>
          </section>

          <hr className="border-[#1a1a1a] mb-16" />

          <section id="interactive-flow" className="mb-20 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#e8e8e8] mb-6">
              Interactive Flow
            </h2>
            <p className="leading-relaxed mb-8">
              Bextool offers a powerful, multi-step interactive wizard powered by <code className="bg-[#111] text-[#e8e8e8] px-1.5 py-0.5 rounded border border-[#2a2a2a]">@clack/prompts</code>. Instead of remembering hundreds of flags, simply run the command and the tool will guide you.
            </p>
            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 mb-8">
              <h4 className="text-[#e8e8e8] font-bold mb-4 font-mono text-sm">THE PROCESS</h4>
              <ol className="list-decimal list-outside ml-5 space-y-4">
                <li><strong className="text-[#e8e8e8] font-medium">Select a Category:</strong> Choose the high level domain (Frontend, Backend, Mobile, Full-Stack, etc.)</li>
                <li><strong className="text-[#e8e8e8] font-medium">Select a Framework:</strong> Pick from the available templates inside your chosen category (React + Vite, Next.js App Router, React Native Expo).</li>
                <li><strong className="text-[#e8e8e8] font-medium">Metadata:</strong> Describe your project name and description.</li>
                <li><strong className="text-[#e8e8e8] font-medium">Framework-specific Prompts:</strong> Depending on the framework, Answer custom scaffolding questions (like Target Browser for Extensions).</li>
                <li><strong className="text-[#e8e8e8] font-medium">Package Manager:</strong> Optionally install dependencies using <code className="text-[#ff6b00]">npm</code>, <code className="text-[#ff6b00]">yarn</code>, or <code className="text-[#ff6b00]">pnpm</code>.</li>
              </ol>
            </div>
          </section>

          <hr className="border-[#1a1a1a] mb-16" />

          <section id="cli-commands" className="mb-20 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#e8e8e8] mb-6">
              CLI Commands
            </h2>
            <p className="leading-relaxed mb-6">
              It usually only takes two commands to get an entire application up and running locally.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-lg font-medium text-[#e8e8e8] tracking-tight mb-4">
                  1. Launch Interactive CLI
                </h3>
                <div className="bg-[#050505] border border-[#333] rounded px-4 py-3 font-mono text-sm text-[#e8e8e8] relative group">
                  <CopyCodeButton text="bextool" className="absolute top-1.5 right-1.5 z-10 p-1.5" />
                  bextool
                </div>
              </div>
              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-lg font-medium text-[#e8e8e8] tracking-tight mb-4">
                  2. Launch Generated Project
                </h3>
                <div className="bg-[#050505] border border-[#333] rounded px-4 py-3 font-mono text-sm text-[#e8e8e8] flex flex-col gap-2 relative group">
                  <CopyCodeButton text={`cd <project-name>\nnpm run dev`} className="absolute top-1.5 right-1.5 z-10 p-1.5" />
                  <span>cd &lt;project-name&gt;</span>
                  <span className="text-[#666]"># Following scripts are generated:</span>
                  <span>npm run dev</span>
                </div>
              </div>
            </div>
          </section>
          
          <hr className="border-[#1a1a1a] mb-16" />

          <section id="supported-frameworks" className="mb-20 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#e8e8e8] mb-6">
              Supported Starters Registry
            </h2>
            <p className="leading-relaxed mb-6">
              Bextool curates a massive registry of 15+ community-maintained scaffolding templates. Every template is production ready with necessary `.gitignore` files, linters usually pre-configured, and clean start architecture.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#666] transition-colors">
                <Icon icon="solar:monitor-linear" className="text-[#ff6b00] text-3xl mb-4" />
                <h3 className="text-[#e8e8e8] font-bold mb-1">Frontend</h3>
                <p className="text-sm font-mono">React + Vite</p>
              </div>

              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#666] transition-colors">
                <Icon icon="solar:server-square-linear" className="text-[#ff6b00] text-3xl mb-4" />
                <h3 className="text-[#e8e8e8] font-bold mb-1">Backend</h3>
                <p className="text-sm font-mono">Node.js + Express</p>
              </div>

              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#666] transition-colors">
                <Icon icon="solar:layers-linear" className="text-[#ff6b00] text-3xl mb-4" />
                <h3 className="text-[#e8e8e8] font-bold mb-1">Full-Stack</h3>
                <p className="text-sm font-mono">Next.js App Router</p>
              </div>

              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#666] transition-colors">
                <Icon icon="solar:smartphone-linear" className="text-[#ff6b00] text-3xl mb-4" />
                <h3 className="text-[#e8e8e8] font-bold mb-1">Mobile App</h3>
                <p className="text-sm font-mono">React Native (Expo)</p>
              </div>

              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#666] transition-colors">
                <Icon icon="solar:browser-linear" className="text-[#ff6b00] text-3xl mb-4" />
                <h3 className="text-[#e8e8e8] font-bold mb-1">Browser Extension</h3>
                <p className="text-sm font-mono">Chrome / Firefox / Edge</p>
              </div>

              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#666] transition-colors">
                <Icon icon="solar:document-text-linear" className="text-[#ff6b00] text-3xl mb-4" />
                <h3 className="text-[#e8e8e8] font-bold mb-1">Static Site</h3>
                <p className="text-sm font-mono">Hugo</p>
              </div>
              
              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#666] transition-colors">
                <Icon icon="solar:box-minimalistic-linear" className="text-[#ff6b00] text-3xl mb-4" />
                <h3 className="text-[#e8e8e8] font-bold mb-1">NPM Package</h3>
                <p className="text-sm font-mono">TS + Rollup + Vitest</p>
              </div>
              
              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#666] transition-colors">
                <Icon icon="solar:terminal-square-linear" className="text-[#ff6b00] text-3xl mb-4" />
                <h3 className="text-[#e8e8e8] font-bold mb-1">CLI Tool</h3>
                <p className="text-sm font-mono">Commander</p>
              </div>

              <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-5 flex items-center justify-center">
                <p className="text-sm text-[#888] font-mono italic">+ 8 more scaffolds...</p>
              </div>
            </div>
          </section>

          <hr className="border-[#1a1a1a] mb-16" />

          <section id="extending-the-cli" className="mb-20 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#e8e8e8] mb-6">
              Extending the CLI (Advanced)
            </h2>
            <p className="leading-relaxed mb-6">
              Bextool boasts a highly Modular Architecture. Adding a brand new scaffold or framework is incredibly simple using the centralized <code className="bg-[#111] text-[#e8e8e8] px-1.5 py-0.5 rounded border border-[#2a2a2a]">src/config/frameworks.js</code> registry.
            </p>

            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-lg font-medium tracking-tight text-[#e8e8e8] mb-4">How to create a new starter template:</h3>
              <ol className="list-decimal list-outside ml-5 space-y-4">
                <li><strong className="text-[#e8e8e8] font-medium">Add Template Assets:</strong> Put your boilerplate files into a new subdirectory in <code className="text-[#ff6b00]">templates/</code>. These templates utilize Handlebars (.hbs syntax) to inject user config.</li>
                <li><strong className="text-[#e8e8e8] font-medium">Create a Generator Module:</strong> Under <code className="text-[#ff6b00]">src/generators/</code>, add the code defining what specific prompts it needs and how it executes its build.</li>
                <li><strong className="text-[#e8e8e8] font-medium">Register the Framework:</strong> Simply append your new module to the array in <code className="text-[#ff6b00]">src/config/frameworks.js</code>.</li>
              </ol>
            </div>

            <p className="mt-8 text-sm italic">
              Once you do this, running `npm test` locally within the repository will automatically generate syntax checks and smoke integrations for your brand new framework setup!
            </p>
          </section>

        </article>
      </div>
    </main>
  );
}
