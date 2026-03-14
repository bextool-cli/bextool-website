import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the bextool maintainers for support, issues, and contribution discussions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="max-w-4xl mx-auto px-6 py-14 md:py-20">
      <h1 className="text-3xl md:text-5xl font-mono font-normal tracking-tight text-[#e8e8e8] mb-6">
        Contact
      </h1>
      <p className="text-[#a3a3a3] leading-relaxed mb-5">
        For bug reports, feature requests, and community discussions, please use the project repositories and issue trackers.
      </p>
      <ul className="space-y-3 text-[#a3a3a3]">
        <li>
          Main repository: <a href="https://github.com/bextool-cli/bextool" target="_blank" rel="noreferrer" className="text-[#e8e8e8] hover:text-[#ff6b00] transition-colors">github.com/bextool-cli/bextool</a>
        </li>
        <li>
          Website repository: <a href="https://github.com/bextool-cli/bextool-website" target="_blank" rel="noreferrer" className="text-[#e8e8e8] hover:text-[#ff6b00] transition-colors">github.com/bextool-cli/bextool-website</a>
        </li>
        <li>
          npm package: <a href="https://www.npmjs.com/package/bextool" target="_blank" rel="noreferrer" className="text-[#e8e8e8] hover:text-[#ff6b00] transition-colors">npmjs.com/package/bextool</a>
        </li>
      </ul>
    </main>
  );
}
