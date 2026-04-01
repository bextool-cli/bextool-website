import type { Metadata } from "next";
import Image from "next/image";

import TransitionSection from "@/components/TransitionSection";
import CopyButton from "@/components/CopyButton";
import LazyOutputTabs from "@/components/LazyOutputTabs";
import Buttons from "@/components/ui/buttons";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Multi-Project Scaffolding CLI`,
  description: siteConfig.description,
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
    title: `${siteConfig.name} — ${siteConfig.taglines.home}`,
    description: "Create production-ready starter apps with one interactive CLI flow.",
    url: "/",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.taglines.home}`,
    description: "Create production-ready starter apps with one interactive CLI flow.",
    images: ["/logo.png"],
  },
};

function FeatureCard({
  title,
  description,
  variant,
  items,
}: (typeof homeContent.features.cards)[number]) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#141414] p-7">
      <h3 className="mb-2 text-2xl font-normal tracking-tight">{title}</h3>
      <p className="mb-6 text-base leading-relaxed text-[#666]">{description}</p>

      {variant === "metrics" ? (
        <div className="space-y-3 rounded-lg border border-[#333] bg-[#111] p-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded border border-[#2a2a2a] bg-[#141414] px-3 py-2"
            >
              <span className="text-sm text-[#666]">{item.label}</span>
              <span className="font-mono text-sm text-[#e8e8e8]">{item.value}</span>
            </div>
          ))}
        </div>
      ) : null}

      {variant === "templates" ? (
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <div key={item.label} className="rounded border border-[#333] bg-[#111] p-4">
              <p className="mb-2 text-sm text-[#666]">{item.label}</p>
              <p className="font-mono text-sm text-[#e8e8e8]">{item.value}</p>
            </div>
          ))}
        </div>
      ) : null}

      {variant === "code" ? (
        <div className="rounded-lg border border-[#333] bg-[#111] p-4 font-mono text-sm leading-relaxed">
          {items.map((item, index) => (
            <p key={`${item.value}-${index}`} className={index === 1 ? "text-[#e8e8e8]" : "text-[#666]"}>
              {item.value}
            </p>
          ))}
        </div>
      ) : null}

      {variant === "checklist" ? (
        <div className="rounded-lg border border-[#333] bg-[#111] p-5">
          <ul className="space-y-3 text-sm">
            {items.map((item) => (
              <li key={item.value} className="flex items-center gap-2 text-[#e8e8e8]">
                <span aria-hidden="true" className="text-[#ff6b00]">
                  ✓
                </span>
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

export default function Home() {
  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Linux, Windows",
    softwareVersion: "latest",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: siteConfig.siteUrl,
    downloadUrl: siteConfig.links.npm,
    codeRepository: siteConfig.links.repository,
    description: siteConfig.shortDescription,
  };

  const LinkIcon = homeContent.contributors.cardIcon;

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />

      <section id="home" className="relative overflow-hidden bg-[#0d0d0d]">
        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-18 pt-16 sm:px-6 md:pt-20 lg:pt-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

            <h1 className="mt-8 lg:pt-28 text-3xl font-mono leading-[1.04] tracking-tight text-[#ece9e4] text-balance sm:text-5xl lg:text-7xl">
              {homeContent.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#9c978f] sm:text-lg">
              {homeContent.hero.description}
            </p>

            <div className="mt-10 flex w-full justify-center">
              <Buttons />
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-[#2f3742] bg-[#07090d]/80 shadow-[0_35px_120px_rgba(0,0,0,.55)] backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-[#2f3742] bg-[#0f141a]/80 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-[11px] font-mono uppercase tracking-[0.18em] text-[#7d838d]">
                {homeContent.hero.terminalLabel}
              </span>
              <span className="ml-auto text-[11px] font-mono text-[#7d838d]">bash</span>
            </div>
            <div className="bg-[#0b0f14] p-2 md:p-3">
              <Image
                src={homeContent.hero.image.src}
                alt={homeContent.hero.image.alt}
                width={1600}
                height={900}
                className="h-auto w-full rounded-lg border border-[#252d37] object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section id="transition" className="bg-[#0d0d0d]">
        <TransitionSection />
      </section>

      <section id="features" className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="mb-4 text-sm font-mono uppercase tracking-widest text-[#666]">
              {homeContent.features.eyebrow}
            </p>
            <h2 className="text-3xl font-mono font-normal leading-tight tracking-tight md:text-5xl">
              {homeContent.features.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {homeContent.features.cards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section id="usage" className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#7d838d]">
                {homeContent.usage.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-mono tracking-tight text-[#ece9e4] sm:text-5xl">
                {homeContent.usage.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#9c978f]">
                {homeContent.usage.description}
              </p>

              <div className="mt-10 space-y-8">
                {homeContent.usage.steps.map((step) => (
                  <div key={step.number} className="border-l border-[#2f3742] pl-5">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#7d838d]">
                      Step {step.number}
                    </p>
                    <h3 className="mt-2 text-xl tracking-tight text-[#ece9e4]">{step.title}</h3>
                    {"command" in step ? (
                      <div className="mt-4 flex flex-col gap-2 rounded-md border border-[#2f3742] bg-[#121821] px-4 py-3 font-mono text-sm text-[#ece9e4] sm:flex-row sm:items-center sm:justify-between">
                        <span>{step.command}</span>
                        <CopyButton
                          text={step.command}
                          className="text-[#7d838d] transition-colors hover:text-[#ece9e4]"
                        />
                      </div>
                    ) : (
                      <p className="mt-3 text-base leading-relaxed text-[#9c978f]">{step.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div id="output">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-mono tracking-tight text-[#ece9e4]">
                  {homeContent.usage.outputTitle}
                </h2>
                <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#7d838d]">
                  {homeContent.usage.outputLabel}
                </span>
              </div>
              <LazyOutputTabs />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#7d838d]">
                {homeContent.teamVelocity.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-mono tracking-tight text-[#ece9e4] sm:text-5xl">
                {homeContent.teamVelocity.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#a49d93]">
                {homeContent.teamVelocity.description}
              </p>
            </div>

            <div className="space-y-5">
              {homeContent.teamVelocity.cards.map((card) => (
                <article key={card.title} className="rounded-xl border border-[#2f3742] bg-[#0f141a] p-5">
                  <h3 className="font-mono text-sm uppercase tracking-[0.16em] text-[#9c978f]">
                    {card.title}
                  </h3>
                  <pre className="mt-3 overflow-x-auto rounded-md border border-[#2f3742] bg-[#0a0e14] p-3 font-mono text-sm text-[#ece9e4]">
                    <code>{card.command}</code>
                  </pre>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contributors" className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#7d838d]">
              {homeContent.contributors.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-mono tracking-tight text-[#ece9e4] sm:text-5xl">
              {homeContent.contributors.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#9c978f]">
              {homeContent.contributors.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {siteConfig.contributors.map((contributor) => (
              <a
                key={contributor.href}
                href={contributor.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-[#2f3742] bg-[#121212] p-6 transition-colors hover:border-[#46505e]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#38404b] bg-[#0d1218] font-mono text-[#c97a45]">
                      {contributor.initial}
                    </div>
                    <div>
                      <p className="text-xl tracking-tight text-[#ece9e4]">{contributor.name}</p>
                      <p className="text-sm font-mono text-[#7d838d]">{contributor.handle}</p>
                    </div>
                  </div>
                  <LinkIcon className="h-5 w-5 text-[#7d838d] transition-colors group-hover:text-[#ece9e4]" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#9c978f]">{contributor.bio}</p>
              </a>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
