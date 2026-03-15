import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of use for the bextool website and documentation.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main id="main-content" className="max-w-4xl mx-auto px-6 py-14 md:py-20">
      <h1 className="text-3xl md:text-5xl font-mono font-normal tracking-tight text-[#e8e8e8] mb-6">
        Terms of Service
      </h1>
      <p className="text-[#a3a3a3] leading-relaxed mb-5">
        By using this website, you agree to use its content for informational purposes related to bextool and associated open-source projects.
      </p>
      <p className="text-[#a3a3a3] leading-relaxed mb-5">
        Project code and templates are distributed under their respective open-source licenses.
      </p>
      <p className="text-[#a3a3a3] leading-relaxed">
        The website content is provided &quot;as is&quot; without warranties, and external links are subject to third-party terms.
      </p>
    </main>
  );
}
