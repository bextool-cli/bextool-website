import type { Metadata } from "next";
import Image from "next/image";
import { NpmVersion } from "@/components/NpmStats";
import { ArrowRightIcon } from "lucide-react";

import CommandCopy from "@/components/CommandCopy";
import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/announcement";
import TransitionSection from "@/components/TransitionSection";
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
  className,
}: (typeof homeContent.features.cards)[number] & { className?: string }) {
  return (
    <article className={`flex flex-col justify-between overflow-hidden rounded-3xl border border-[#2a2a2a] bg-linear-to-b from-[#1c1c1c]/50 to-[#0a0a0a] p-8 backdrop-blur-md transition-all hover:border-[#444] ${className || ""}`}>
      <div>
        <h3 className="mb-2 text-2xl font-medium tracking-tight text-[#f0f0f0]">{title}</h3>
        <p className="mb-8 text-base leading-relaxed text-[#999]">{description}</p>
      </div>

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
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <Announcement
              variant="outline"
              className="h-auto gap-0 border-[#2b3540] bg-[#0d1218]/95 px-2 py-0.5 text-[#d9dee6] shadow-[0_14px_40px_rgba(0,0,0,.32)]"
            >
              <AnnouncementTag className="ml-0 bg-[#ff6b00]/12 px-2.5 py-1 text-[11px] font-medium text-[#ffb37b]">
                New
              </AnnouncementTag>
              <AnnouncementTitle className="px-2 py-1 text-[13px] font-normal tracking-[-0.01em] text-[#dfe5ee]">
                Introducing bextool <NpmVersion />
                <ArrowRightIcon className="size-4 text-[#8b95a3] transition-transform group-hover:translate-x-0.5" />
              </AnnouncementTitle>
            </Announcement>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-balance text-transparent bg-linear-to-b from-white via-[#ece8e2] to-neutral-500 bg-clip-text md:text-6xl lg:text-7xl">
              {homeContent.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-balance text-base leading-8 text-[#a6a199] sm:text-lg md:text-xl">
              {homeContent.hero.description}
            </p>
              <div className="mt-10 flex w-full justify-center">
                <Buttons />
              </div>

            <p className="mt-4 text-sm text-[#788190]">
              Designed to move from idea to installable project in one guided pass.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[1.75rem] border border-[#2f3742] bg-[#07090d]/80 shadow-[0_35px_120px_rgba(0,0,0,.55)] backdrop-blur-sm">
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
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-mono uppercase tracking-widest text-[#888]">
              {homeContent.features.eyebrow}
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#f0f0f0] md:text-5xl">
              {homeContent.features.title}
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {homeContent.features.cards.map((card, idx) => (
              <FeatureCard 
                key={card.title} 
                {...card} 
                className={idx === 0 || idx === 3 ? "md:col-span-2" : "md:col-span-1"}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="usage" className="bg-[#0d0d0d] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#7d838d]">
                {homeContent.usage.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-mono tracking-tight text-[#ece9e4] sm:text-5xl">
                {homeContent.usage.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#9c978f]">
                {homeContent.usage.description}
              </p>

              <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-8">
                {homeContent.usage.steps.map((step) => (
                  <div key={step.number} className="border-l border-[#2f3742] pl-4 sm:pl-5">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#7d838d]">
                      Step {step.number}
                    </p>
                    <h3 className="mt-2 text-xl tracking-tight text-[#ece9e4]">{step.title}</h3>
                    {"command" in step ? (
                      <CommandCopy command={step.command} className="mt-4" />
                    ) : (
                      <p className="mt-3 text-base leading-relaxed text-[#9c978f]">{step.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div id="output" className="min-w-0">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-mono tracking-tight text-[#ece9e4]">
                  {homeContent.usage.outputTitle}
                </h2>
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
