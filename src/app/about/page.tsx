import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about bextool, an open-source multi-project scaffolding CLI for modern app development.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="max-w-4xl mx-auto px-6 py-14 md:py-20">
      <h1 className="text-3xl md:text-5xl font-mono font-normal tracking-tight text-[#e8e8e8] mb-6">
        About bextool
      </h1>
      <p className="text-[#a3a3a3] leading-relaxed mb-5">
        bextool is an open-source CLI that helps developers scaffold production-ready starter apps quickly.
      </p>
      <p className="text-[#a3a3a3] leading-relaxed mb-5">
        It supports frontend, backend, full-stack, mobile, browser extension, and tooling templates through one interactive flow.
      </p>
      <p className="text-[#a3a3a3] leading-relaxed">
        Project repository: <a href="https://github.com/bextool-cli/bextool" target="_blank" rel="noreferrer" className="text-[#e8e8e8] hover:text-[#ff6b00] transition-colors">github.com/bextool-cli/bextool</a>
      </p>
    </main>
  );
}
