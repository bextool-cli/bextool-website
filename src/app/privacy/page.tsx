import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the bextool website and documentation.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="max-w-4xl mx-auto px-6 py-14 md:py-20">
      <h1 className="text-3xl md:text-5xl font-mono font-normal tracking-tight text-[#e8e8e8] mb-6">
        Privacy Policy
      </h1>
      <p className="text-[#a3a3a3] leading-relaxed mb-5">
        This website is maintained for product information and documentation. We do not run user account registration on this site.
      </p>
      <p className="text-[#a3a3a3] leading-relaxed mb-5">
        Basic analytics or server logs may be collected by hosting providers to maintain reliability and security.
      </p>
      <p className="text-[#a3a3a3] leading-relaxed">
        For third-party platform policies, please review GitHub and npm terms where project resources are hosted.
      </p>
    </main>
  );
}
