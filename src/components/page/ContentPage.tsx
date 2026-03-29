import Link from "next/link";

import { ContentPage as ContentPageData } from "@/lib/site";

type ContentPageProps = {
  page: ContentPageData;
};

export default function ContentPage({ page }: ContentPageProps) {
  return (
    <main id="main-content" className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <h1 className="mb-6 text-3xl font-mono font-normal tracking-tight text-[#e8e8e8] md:text-5xl">
        {page.title}
      </h1>

      {page.intro ? <p className="mb-5 leading-relaxed text-[#a3a3a3]">{page.intro}</p> : null}

      {page.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mb-5 leading-relaxed text-[#a3a3a3]">
          {paragraph}
        </p>
      ))}

      {page.links?.length ? (
        <ul className="space-y-3 text-[#a3a3a3]">
          {page.links.map((link) => (
            <li key={link.href}>
              {link.label}: {link.href.startsWith("/") ? (
                <Link href={link.href} className="text-[#e8e8e8] transition-colors hover:text-[#ff6b00]">
                  {link.href}
                </Link>
              ) : (
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="text-[#e8e8e8] transition-colors hover:text-[#ff6b00]"
                >
                  {link.href.replace(/^https?:\/\//, "")}
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
}
