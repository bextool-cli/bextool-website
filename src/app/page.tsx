import { Metadata } from "next";
import { Icon } from "@iconify/react";
import TerminalAnimation from "@/components/TerminalAnimation";
import OutputTabs from "@/components/OutputTabs";
import CopyButton from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "Scaffold modern starter apps instantly",
  description:
    "Generate production-ready starter apps with bextool for frontend, backend, full-stack, mobile, browser extensions, and more.",
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
    title: "bextool — Scaffold modern starter apps instantly",
    description:
      "Generate production-ready starter apps with one interactive CLI flow.",
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
    title: "bextool — Scaffold modern starter apps instantly",
    description:
      "Generate production-ready starter apps with one interactive CLI flow.",
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
        className="min-h-[90vh] flex items-center py-20 lg:py-0 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="flex flex-col items-start max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-[#666] border border-[#2a2a2a] rounded-full mb-8 bg-[#141414]">
              <Icon icon="solar:box-minimalistic-linear" className="text-sm" />
              CLI TOOL · npm package
            </span>
            <h1 className="text-5xl md:text-7xl font-mono font-normal tracking-tight leading-[1.1] text-[#e8e8e8]">
              Scaffold <br className="hidden md:block" />
              modern starter apps <br className="hidden md:block" />
              instantly.
            </h1>
            <p className="text-lg md:text-xl text-[#666] mt-8 leading-relaxed max-w-xl">
              bextool is a multi-project CLI that generates production-ready starter apps
              from one interactive flow for frontend, backend, full-stack, mobile, extensions, and more.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10 w-full">
              <div className="group flex w-full sm:w-auto items-center gap-3 bg-[#111] border border-[#333] hover:border-[#666] transition-all px-5 py-3.5 rounded text-[#ff6b00] font-mono text-sm sm:text-base relative overflow-hidden md:whitespace-nowrap">
                <span className="text-[#666] select-none">$</span>
                <span className="tracking-tight">npm install -g bextool</span>
                <CopyButton
                  text="npm install -g bextool"
                  className="text-base text-[#666] group-hover:text-[#e8e8e8] transition-colors flex items-center"
                />
              </div>
            </div>
          </div>

          <div className="w-full relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-[#ff6b00]/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden shadow-2xl relative">
              <div className="bg-[#1a1a1a] border-b border-[#333] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="ml-auto text-xs font-mono text-[#666]">bash</div>
              </div>
              <TerminalAnimation />
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
              Build apps your way.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-7 overflow-hidden">
              <h3 className="text-2xl font-normal tracking-tight mb-2">Guided CLI Flow</h3>
              <p className="text-base text-[#666] leading-relaxed mb-6">
                A clean interactive prompt sequence that gets your project scaffolded in minutes.
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
                Pick from a massive registry of production-ready templates for any stack.
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
                Powered by Handlebars templates and a modular generator system under the hood.
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
                    <Icon icon="solar:check-circle-linear" className="text-[#ff6b00]" />
                    npm scripts for dev and build
                  </li>
                  <li className="flex items-center gap-2 text-[#e8e8e8]">
                    <Icon icon="solar:check-circle-linear" className="text-[#ff6b00]" />
                    README and package metadata
                  </li>
                  <li className="flex items-center gap-2 text-[#e8e8e8]">
                    <Icon icon="solar:check-circle-linear" className="text-[#ff6b00]" />
                    Icons placeholder set
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#1a1a1a] bg-[#0d0d0d] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-mono text-[#666] uppercase tracking-widest mb-10">
            Universal Template Ecosystem
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
            <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
              <Icon icon="simple-icons:react" className="text-4xl" />
              <span className="text-base font-normal tracking-tight">React</span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
              <Icon icon="simple-icons:nextdotjs" className="text-4xl" />
              <span className="text-base font-normal tracking-tight">Next.js</span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
              <Icon icon="simple-icons:nodedotjs" className="text-4xl" />
              <span className="text-base font-normal tracking-tight">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
              <Icon icon="simple-icons:docker" className="text-4xl" />
              <span className="text-base font-normal tracking-tight">Docker</span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
              <Icon icon="simple-icons:npm" className="text-4xl" />
              <span className="text-base font-normal tracking-tight">NPM</span>
            </div>
          </div>
        </div>
      </section>

      <section id="usage" className="py-32 border-t border-[#1a1a1a] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div id="output">
              <h2 className="text-3xl md:text-4xl font-mono font-normal tracking-tight mb-10">
                Usage.
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
                  Generated Output
                </h2>
                <span className="text-sm text-[#666] font-mono">Next.js App Router</span>
              </div>

              <OutputTabs />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#1a1a1a] bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-mono font-normal tracking-tight mb-6 flex items-center gap-2">
              <Icon icon="solar:code-circle-linear" className="text-2xl text-[#ff6b00]" />
              Local Development
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
              <Icon icon="solar:box-linear" className="text-2xl text-[#ff6b00]" />
              Publish Checklist
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 flex flex-col gap-3">
            <p className="text-sm font-mono text-[#666] uppercase tracking-widest">
              Community
            </p>
            <h2 className="text-3xl md:text-4xl font-mono font-normal tracking-tight">
              Highlighted Contributors.
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
                <Icon
                  icon="solar:arrow-right-up-linear"
                  className="text-xl text-[#666] group-hover:text-[#e8e8e8] transition-colors"
                />
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
                <Icon
                  icon="solar:arrow-right-up-linear"
                  className="text-xl text-[#666] group-hover:text-[#e8e8e8] transition-colors"
                />
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
