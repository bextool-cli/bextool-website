import type { Metadata } from "next";

import ContentPage from "@/components/page/ContentPage";
import { siteConfig } from "@/lib/site";

const page = siteConfig.pages.about;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: page.canonical,
  },
};

export default function AboutPage() {
  return <ContentPage page={page} />;
}
