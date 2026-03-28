import { Metadata } from "next";
import DocsHighlighter from "@/components/DocsHighlighter";
import { Icon } from "@iconify/react";
import CopyCodeButton from "@/components/CopyCodeButton";
import {
  cliCommandsContent,
  docsIntro,
  docsNavigation,
  extendingCliContent,
  installationContent,
  interactiveFlowContent,
  supportedTemplatesContent,
} from "@/content/docs";
import { siteUrl } from "@/lib/site";

function renderTextWithInlineCode(text: string) {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={`${part}-${index}`}
          className="bg-[#111] text-[#e8e8e8] px-1.5 py-0.5 rounded border border-[#2a2a2a]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

export const metadata: Metadata = {
  title: "Project Scaffolding CLI Docs",
  description:
    "Official bextool project scaffolding CLI documentation: installation, usage flow, commands, starter templates, and extension guide.",
  keywords: [
    "bextool docs",
    "CLI documentation",
    "scaffolding guide",
    "starter templates docs",
  ],
  alternates: {
    canonical: "/docs",
  },
  openGraph: {
    title: "bextool Docs — Project Scaffolding CLI Documentation",
    description:
      "Learn installation, interactive flow, commands, starter templates, and extension patterns for bextool.",
    url: "/docs",
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
    title: "bextool Docs — Project Scaffolding CLI Documentation",
    description:
      "Official bextool docs for setup, usage, search visibility, and advanced template extension.",
    images: ["/logo.png"],
  },
};

export default function Docs() {
  const docsArticleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "bextool Documentation",
    description:
      "Installation, usage, starter registry, and extension guide for bextool CLI.",
    author: {
      "@type": "Organization",
      name: "bextool",
    },
    publisher: {
      "@type": "Organization",
      name: "bextool",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: `${siteUrl}/docs`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Docs",
        item: `${siteUrl}/docs`,
      },
    ],
  };

  return (
    <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(docsArticleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DocsHighlighter />
      
      <div className="grid lg:grid-cols-[280px_minmax(0,1fr)] gap-8 lg:gap-16 items-start">
        {/* Sticky Left Navigation Sidebar (Tailwind-like style) */}
        <aside className="hidden lg:block sticky top-24 pr-6 pb-20 border-r border-[#1a1a1a] h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
          <nav className="flex flex-col gap-8 text-sm">
            {docsNavigation.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#e8e8e8] mb-3">
                  {group.title}
                </p>
                <ul className="flex flex-col gap-2 border-l border-[#2a2a2a] pl-3 ml-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                        className={`py-1 transition-colors ${
                          link.external
                            ? "text-[#888] hover:text-[#e8e8e8] flex items-center gap-2"
                            : "docs-link block text-[#888] hover:text-[#e8e8e8]"
                        }`}
                      >
                        {link.label}
                        {link.icon ? <Icon icon={link.icon} /> : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Documentation Content Area */}
        <article className="min-w-0 prose-invert max-w-none text-[#a3a3a3] pb-24">
          <section id="quick-start" className="mb-20 pt-4">
            <h1 className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-[#e8e8e8] mb-6">
              {docsIntro.heading}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
              <strong className="text-[#e8e8e8] font-normal">bextool</strong> {docsIntro.lead.replace(/^bextool /, "")}
            </p>
            <p className="leading-relaxed max-w-3xl mb-8">
              {docsIntro.body}
            </p>
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5 mt-6 inline-flex gap-6 items-center flex-wrap">
              {docsIntro.stats.map((stat, index) => (
                <div key={stat.label} className="contents">
                  {index > 0 ? <div className="w-px h-8 bg-[#2a2a2a] hidden sm:block"></div> : null}
                  <div className="flex flex-col">
                    <span className="text-xs font-mono uppercase text-[#666] mb-1">{stat.label}</span>
                    <span className="text-[#e8e8e8] text-sm">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-[#1a1a1a] mb-16" />

          <section id="installation" className="mb-20 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#e8e8e8] mb-6">
              {installationContent.title}
            </h2>
            <p className="leading-relaxed mb-6">
              {renderTextWithInlineCode(installationContent.body)}
            </p>
            {installationContent.examples.map((example) => (
              <div key={example.title}>
                <h3 className="text-xl font-medium text-[#e8e8e8] mb-3 mt-8">{example.title}</h3>
                <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden mb-6 relative group">
                  <CopyCodeButton text={example.command} />
                  <pre className="p-5 text-sm overflow-x-auto">
                    <code className="language-bash">{example.command}</code>
                  </pre>
                </div>
              </div>
            ))}
          </section>

          <hr className="border-[#1a1a1a] mb-16" />

          <section id="interactive-flow" className="mb-20 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#e8e8e8] mb-6">
              {interactiveFlowContent.title}
            </h2>
            <p className="leading-relaxed mb-8">
              {renderTextWithInlineCode(interactiveFlowContent.body)}
            </p>
            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 mb-8">
              <h4 className="text-[#e8e8e8] font-bold mb-4 font-mono text-sm">THE PROCESS</h4>
              <ol className="list-decimal list-outside ml-5 space-y-4">
                {interactiveFlowContent.steps.map((step) => (
                  <li key={step.title}>
                    <strong className="text-[#e8e8e8] font-medium">{step.title}:</strong> {step.body}
                    {step.code ? (
                      <>
                        {" "}using{" "}
                        {step.code.map((code, index) => (
                          <span key={code}>
                            {index > 0 ? index === step.code!.length - 1 ? " or " : ", " : ""}
                            <code className="text-[#ff6b00]">{code}</code>
                          </span>
                        ))}
                        .
                      </>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <hr className="border-[#1a1a1a] mb-16" />

          <section id="cli-commands" className="mb-20 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#e8e8e8] mb-6">
              {cliCommandsContent.title}
            </h2>
            <p className="leading-relaxed mb-6">
              {cliCommandsContent.body}
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {cliCommandsContent.steps.map((step) => (
                <div key={step.title} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
                  <h3 className="text-lg font-medium text-[#e8e8e8] tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <div className="bg-[#050505] border border-[#333] rounded px-4 py-3 font-mono text-sm text-[#e8e8e8] flex flex-col gap-2 relative group">
                    <CopyCodeButton text={step.copyText} className="absolute top-1.5 right-1.5 z-10 p-1.5" />
                    {"command" in step ? (
                      <span>{step.command}</span>
                    ) : (
                      step.commandLines.map((line) => (
                        <span key={line} className={line.startsWith("#") ? "text-[#666]" : undefined}>
                          {line.startsWith("#") ? line : line}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <hr className="border-[#1a1a1a] mb-16" />

          <section id="supported-frameworks" className="mb-20 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#e8e8e8] mb-6">
              {supportedTemplatesContent.title}
            </h2>
            <p className="leading-relaxed mb-6">
              {supportedTemplatesContent.body}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {supportedTemplatesContent.cards.map((card) => (
                <div key={card.title} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#666] transition-colors">
                  <Icon icon={card.icon} className="text-[#ff6b00] text-3xl mb-4" />
                  <h3 className="text-[#e8e8e8] font-bold mb-1">{card.title}</h3>
                  <p className="text-sm font-mono">{card.subtitle}</p>
                </div>
              ))}

              <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-5 flex items-center justify-center">
                <p className="text-sm text-[#888] font-mono italic">{supportedTemplatesContent.moreLabel}</p>
              </div>
            </div>
          </section>

          <hr className="border-[#1a1a1a] mb-16" />

          <section id="extending-the-cli" className="mb-20 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#e8e8e8] mb-6">
              {extendingCliContent.title}
            </h2>
            <p className="leading-relaxed mb-6">
              {renderTextWithInlineCode(extendingCliContent.body)}
            </p>

            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
              <h3 className="text-lg font-medium tracking-tight text-[#e8e8e8] mb-4">{extendingCliContent.stepsTitle}</h3>
              <ol className="list-decimal list-outside ml-5 space-y-4">
                {extendingCliContent.steps.map((step) => (
                  <li key={step.title}>
                    <strong className="text-[#e8e8e8] font-medium">{step.title}:</strong> {step.body}
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-8 text-sm italic">
              {renderTextWithInlineCode(extendingCliContent.note)}
            </p>
          </section>

          <hr className="border-[#1a1a1a] mb-16" />

        </article>
      </div>
    </main>
  );
}
