import { Metadata } from "next";
import CopyButton from "@/components/CopyButton";
import LazyTerminalAnimation from "@/components/LazyTerminalAnimation";
import LazyOutputTabs from "@/components/LazyOutputTabs";

export const metadata: Metadata = {
  title: "Bextool - Multi-Project Scaffolding CLI",
  description:
    "bextool is an open-source project scaffolding CLI and app generator to create production-ready starter apps for frontend, backend, full-stack, mobile, and browser extensions.",
  keywords: [
    "bextool CLI",
    "scaffolding tool",
    "starter templates",
    "full-stack starter",
    "browser extension starter",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "bextool — Project Scaffolding CLI for Modern Starter Apps",
    description:
      "Create production-ready starter apps with one interactive CLI flow.",
    url: "/",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "bextool logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "bextool — Project Scaffolding CLI for Modern Starter Apps",
    description:
      "Create production-ready starter apps with one interactive CLI flow.",
    images: ["/logo.png"],
  },
};

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bextool.dev";

  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "bextool",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Linux, Windows",
    softwareVersion: "latest",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: siteUrl,
    downloadUrl: "https://www.npmjs.com/package/bextool",
    codeRepository: "https://github.com/bextool-cli/bextool",
    description:
      "An open-source multi-project CLI for scaffolding modern starter apps.",
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
      <section
        id="home"
        className="relative overflow-hidden border-b border-[#1a1a1a] bg-[#0d0d0d]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,122,69,0.16)_0,transparent_55%),radial-gradient(circle_at_bottom,rgba(37,43,52,0.9)_0,#0d0d0d_70%)] opacity-30" />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[1100px] -translate-x-1/2 border-x border-[#2b313a]/60" />
        <div className="pointer-events-none absolute bottom-28 left-1/2 h-[420px] w-[1100px] -translate-x-1/2 rounded-[32px] border border-[#2b313a]/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-28 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[11px] md:text-xs font-mono text-[#9c978f] border border-[#2b313a] rounded-full mb-8 bg-[#101215]/90 backdrop-blur-sm">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1b2026] text-[10px] text-[#c97a45]">
              NOW
            </span>
            <span className="hidden sm:inline">accepting new CLI projects</span>
            <span className="sm:hidden">developer CLI</span>
            <span className="h-1 w-1 rounded-full bg-[#2b313a]" aria-hidden="true" />
            <span>npm package · open source</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-normal tracking-tight leading-[1.05] text-[#ece9e4]">
              Project scaffolding CLI
              <br className="hidden md:block" />
              for modern starter apps
              <br className="hidden md:block" />
              in seconds.
            </h1>
            <p className="mt-6 md:mt-7 text-base md:text-lg lg:text-xl text-[#9c978f] leading-relaxed">
              bextool is an open-source app generator CLI that scaffolds production-ready
              starter apps from one interactive flow for frontend, backend, full-stack,
              mobile, browser extensions, and more.
            </p>
          </div>

          <div className="mt-10 md:mt-12 flex justify-center">
            <div className="group flex w-full sm:w-auto items-center gap-3 rounded-full border border-[#2b313a] bg-[#101215] px-5 py-3.5 text-sm md:text-base font-mono text-[#c97a45] hover:border-[#a96539] transition-colors">
              <span className="text-[#7d838d] select-none">$</span>
              <span className="truncate">npm install -g bextool</span>
              <CopyButton
                text="npm install -g bextool"
                className="ml-1 text-base text-[#7d838d] group-hover:text-[#ece9e4] transition-colors flex items-center"
              />
            </div>
          </div>

          <div className="mt-14 md:mt-16 w-full max-w-5xl">
            <div className="relative group">
              <div className="absolute inset-0 -inset-x-6 md:-inset-x-10 top-4 bg-[radial-gradient(circle_at_top,rgba(201,122,69,0.3)_0,transparent_55%),radial-gradient(circle_at_bottom,rgba(35,40,49,0.9)_0,transparent_50%)] blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative overflow-hidden rounded-2xl border border-[#2b313a] bg-[#050608]/95 backdrop-blur-sm shadow-2xl shadow-black/60">
                <div className="flex items-center gap-2 border-b border-[#2b313a] bg-[#050608]/90 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="ml-3 text-[11px] font-mono uppercase tracking-[0.18em] text-[#7d838d]">
                    bextool · terminal
                  </span>
                  <span className="ml-auto flex items-center gap-2 text-[11px] font-mono text-[#7d838d]">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    bash
                  </span>
                </div>

                <div className="relative">
                  <LazyTerminalAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-32 border-t border-[#1a1a1a] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-sm font-mono text-[#666] uppercase tracking-widest mb-4">
              Features
            </p>
            <h2 className="text-3xl md:text-5xl font-mono font-normal tracking-tight leading-tight mb-4">
              Scaffolding features for every stack.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-7 overflow-hidden">
              <h3 className="text-2xl font-normal tracking-tight mb-2">Guided CLI Flow</h3>
              <p className="text-base text-[#666] leading-relaxed mb-6">
                A clean interactive app scaffolding flow that generates starter projects in minutes.
              </p>
              <div className="bg-[#111] border border-[#333] rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between rounded border border-[#2a2a2a] bg-[#141414] px-3 py-2">
                  <span className="text-sm text-[#666]">Category</span>
                  <span className="text-sm text-[#e8e8e8] font-mono">Full-Stack</span>
                </div>
                <div className="flex items-center justify-between rounded border border-[#2a2a2a] bg-[#141414] px-3 py-2">
                  <span className="text-sm text-[#666]">Framework</span>
                  <span className="text-sm text-[#e8e8e8] font-mono">Next.js App Router</span>
                </div>
                <div className="flex items-center justify-between rounded border border-[#2a2a2a] bg-[#141414] px-3 py-2">
                  <span className="text-sm text-[#666]">Pkg Manager</span>
                  <span className="text-sm text-[#e8e8e8] font-mono">pnpm</span>
                </div>
              </div>
            </article>

            <article className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-7 overflow-hidden">
              <h3 className="text-2xl font-normal tracking-tight mb-2">15+ Supported Scaffolds</h3>
              <p className="text-base text-[#666] leading-relaxed mb-6">
                Pick from a broad registry of production-ready starter templates for any stack.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded border border-[#333] bg-[#111] p-4">
                  <p className="text-sm text-[#666] mb-2">Frontend</p>
                  <p className="text-sm text-[#e8e8e8] font-mono">React+Vite</p>
                </div>
                <div className="rounded border border-[#333] bg-[#111] p-4">
                  <p className="text-sm text-[#666] mb-2">Backend</p>
                  <p className="text-sm text-[#e8e8e8] font-mono">Node+Express</p>
                </div>
                <div className="rounded border border-[#333] bg-[#111] p-4">
                  <p className="text-sm text-[#666] mb-2">Mobile</p>
                  <p className="text-sm text-[#e8e8e8] font-mono">React Native</p>
                </div>
                <div className="rounded border border-[#333] bg-[#111] p-4">
                  <p className="text-sm text-[#666] mb-2">Extension</p>
                  <p className="text-sm text-[#e8e8e8] font-mono">Chrome MV3</p>
                </div>
              </div>
            </article>

            <article className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-7 overflow-hidden">
              <h3 className="text-2xl font-normal tracking-tight mb-2">Extensible Architecture</h3>
              <p className="text-base text-[#666] leading-relaxed mb-6">
                Powered by Handlebars templates and a modular CLI generator architecture.
              </p>
              <div className="bg-[#111] border border-[#333] rounded-lg p-4 font-mono text-sm leading-relaxed">
                <p className="text-[#666]">
                  {"// src/config/frameworks.js"}
                </p>
                <p className="text-[#666]">
                  <span className="text-[#ff6b00]">export</span> <span className="text-[#e8e8e8]">const frameworks</span> = [
                </p>
                <p className="text-[#666]">
                  {"  {"} <span className="text-[#e8e8e8]">&quot;name&quot;: &quot;frontend&quot;</span>, <span className="text-[#e8e8e8]">...</span> {"}"}
                </p>
                <p className="text-[#666]">
                  ];
                </p>
              </div>
            </article>

            <article className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-7 overflow-hidden">
              <h3 className="text-2xl font-normal tracking-tight mb-2">
                Plug-and-Play Tooling
              </h3>
              <p className="text-base text-[#666] leading-relaxed mb-6">
                Includes ready-to-run scripts and baseline files so you can start coding
                instantly.
              </p>
              <div className="bg-[#111] border border-[#333] rounded-lg p-5">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-[#e8e8e8]">
                    <span aria-hidden="true" className="text-[#ff6b00]">✓</span>
                    npm scripts for dev and build
                  </li>
                  <li className="flex items-center gap-2 text-[#e8e8e8]">
                    <span aria-hidden="true" className="text-[#ff6b00]">✓</span>
                    README and package metadata
                  </li>
                  <li className="flex items-center gap-2 text-[#e8e8e8]">
                    <span aria-hidden="true" className="text-[#ff6b00]">✓</span>
                    Icons placeholder set
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#1a1a1a] bg-[#0d0d0d] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-mono text-[#666] uppercase tracking-widest mb-10">
            Universal Template Ecosystem
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
            <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
              <span aria-hidden="true" className="text-4xl">⚛</span>
              <span className="text-base font-normal tracking-tight">React</span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
              <span aria-hidden="true" className="text-4xl">▲</span>
              <span className="text-base font-normal tracking-tight">Next.js</span>
            </div>
          </div>
        </div>
      </section>

      <section id="usage" className="py-32 border-t border-[#1a1a1a] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div id="output">
              <h2 className="text-3xl md:text-4xl font-mono font-normal tracking-tight mb-10">
                CLI usage guide.
              </h2>

              <div className="space-y-12">
                <div className="relative pl-8 border-l border-[#2a2a2a]">
                  <div className="absolute -left-4.25 top-0 w-8 h-8 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-[#ff6b00] font-mono text-sm">
                    1
                  </div>
                  <h3 className="text-xl font-normal tracking-tight mb-4">Installation</h3>
                  <div className="bg-[#111] border border-[#333] rounded px-4 py-3 font-mono text-sm sm:text-base flex items-center justify-between">
                    <span className="text-[#e8e8e8]">npm install -g bextool</span>
                    <CopyButton
                      text="npm install -g bextool"
                      className="text-base text-[#666] hover:text-[#e8e8e8] transition-colors flex items-center"
                    />
                  </div>
                </div>

                <div className="relative pl-8 border-l border-[#2a2a2a]">
                  <div className="absolute -left-4.25 top-0 w-8 h-8 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-[#ff6b00] font-mono text-sm">
                    2
                  </div>
                  <h3 className="text-xl font-normal tracking-tight mb-4">Run the CLI</h3>
                  <div className="bg-[#111] border border-[#333] rounded px-4 py-3 font-mono text-sm sm:text-base flex items-center justify-between">
                    <span className="text-[#e8e8e8]">bextool</span>
                    <CopyButton
                      text="bextool"
                      className="text-base text-[#666] hover:text-[#e8e8e8] transition-colors flex items-center"
                    />
                  </div>
                </div>

                <div className="relative pl-8 border-l border-transparent">
                  <div className="absolute -left-4.25 top-0 w-8 h-8 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-[#ff6b00] font-mono text-sm">
                    3
                  </div>
                  <h3 className="text-xl font-normal tracking-tight mb-2">
                    Follow the prompts
                  </h3>
                  <p className="text-base text-[#666] leading-relaxed">
                    The CLI will prompt you for:{" "}
                    <span className="text-[#e8e8e8]">project category</span>,{" "}
                    <span className="text-[#e8e8e8]">framework</span>,{" "}
                    <span className="text-[#e8e8e8]">package manager</span>, as well as{" "}
                    shared metadata like <span className="text-[#e8e8e8]">name</span> and{" "}
                    <span className="text-[#e8e8e8]">description</span>.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-mono font-normal tracking-tight">
                  Generated starter output
                </h2>
                <span className="text-sm text-[#666] font-mono">Next.js App Router</span>
              </div>

              <LazyOutputTabs />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#1a1a1a] bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-mono font-normal tracking-tight mb-6 flex items-center gap-2">
              <span aria-hidden="true" className="text-[#ff6b00] text-2xl">&lt;/&gt;</span>
              Local CLI development
            </h3>
            <p className="text-base text-[#666] mb-4">
              Run the CLI locally from the repository with:
            </p>
            <div className="bg-[#1a1a1a] border border-[#333] rounded px-4 py-3 font-mono text-sm text-[#e8e8e8] flex flex-col gap-1">
              <span>npm install</span>
              <span>npm start</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-mono font-normal tracking-tight mb-6 flex items-center gap-2">
              <span aria-hidden="true" className="text-[#ff6b00] text-2xl">□</span>
              npm publish checklist
            </h3>
            <p className="text-base text-[#666] mb-4">
              Before publishing the package to npm, ensure you run:
            </p>
            <div className="bg-[#1a1a1a] border border-[#333] rounded px-4 py-3 font-mono text-sm text-[#e8e8e8] flex flex-col gap-1">
              <span>npm test</span>
              <span>npm pack --dry-run</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contributors" className="py-24 border-t border-[#1a1a1a] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 flex flex-col gap-3">
            <p className="text-sm font-mono text-[#666] uppercase tracking-widest">
              Community
            </p>
            <h2 className="text-3xl md:text-4xl font-mono font-normal tracking-tight">
              CLI project contributors.
            </h2>
            <p className="text-base md:text-lg text-[#666] max-w-2xl">
              The project is built and maintained by contributors driving CLI ergonomics,
              release quality, and cross-browser support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://github.com/Abhiraj35"
              target="_blank"
              rel="noreferrer"
              className="group bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#666] transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1f1f1f] border border-[#333] text-[#ff6b00] font-mono flex items-center justify-center">
                    A
                  </div>
                  <div>
                    <p className="text-xl font-normal tracking-tight text-[#e8e8e8]">
                      Abhiraj
                    </p>
                    <p className="text-sm text-[#666] font-mono">@Abhiraj35</p>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="text-xl text-[#666] group-hover:text-[#e8e8e8] transition-colors"
                >
                  ↗
                </span>
              </div>
              <p className="mt-4 text-sm text-[#666] leading-relaxed">
                Contributor focused on project direction, developer experience, and
                launch-ready scaffolding quality.
              </p>
            </a>

            <a
              href="https://github.com/Shubham-1068"
              target="_blank"
              rel="noreferrer"
              className="group bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#666] transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1f1f1f] border border-[#333] text-[#ff6b00] font-mono flex items-center justify-center">
                    S
                  </div>
                  <div>
                    <p className="text-xl font-normal tracking-tight text-[#e8e8e8]">
                      Shubham Raj
                    </p>
                    <p className="text-sm text-[#666] font-mono">@Shubham-1068</p>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="text-xl text-[#666] group-hover:text-[#e8e8e8] transition-colors"
                >
                  ↗
                </span>
              </div>
              <p className="mt-4 text-sm text-[#666] leading-relaxed">
                Maintainer focused on CLI reliability, npm distribution, and developer
                onboarding flow.
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
