export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Contributor = {
  name: string;
  handle: string;
  href: string;
  bio: string;
  initial: string;
};

export type ContentPage = {
  title: string;
  description: string;
  canonical: string;
  intro?: string;
  paragraphs?: string[];
  links?: SiteLink[];
};

export const siteConfig = {
  name: "bextool",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bextool.tech",
  description:
    "bextool is an open-source CLI that scaffolds production-ready starter apps for frontend, backend, full-stack, mobile, browser extensions, and more.",
  shortDescription:
    "Open-source multi-project scaffolding CLI for modern apps.",
  taglines: {
    home: "Project Scaffolding CLI for Modern Starter Apps",
    docs: "Project Scaffolding CLI Documentation",
  },
  installCommand: "npm install -g bextool",
  runCommand: "bextool",
  license: {
    name: "ISC License",
    href: "https://opensource.org/licenses/ISC",
  },
  links: {
    docs: "/docs",
    npm: "https://www.npmjs.com/package/bextool",
    repository: "https://github.com/bextool-cli/bextool",
    websiteRepository: "https://github.com/bextool-cli/bextool-website",
    privacy: "/privacy",
    terms: "/terms",
    about: "/about",
    contact: "/contact",
  },
  contributors: [
    {
      name: "Abhiraj",
      handle: "@Abhiraj35",
      href: "https://github.com/Abhiraj35",
      bio: "Contributor focused on project direction, developer experience, and launch-ready scaffolding quality.",
      initial: "A",
    },
    {
      name: "Shubham Raj",
      handle: "@Shubham-1068",
      href: "https://github.com/Shubham-1068",
      bio: "Maintainer focused on CLI reliability, npm distribution, and developer onboarding flow.",
      initial: "S",
    },
  ] satisfies Contributor[],
  navigation: {
    home: [
      { label: "Docs", href: "/docs" },
      { label: "Features", href: "#features" },
      { label: "Usage", href: "#usage" },
      { label: "Output", href: "#output" },
      { label: "Contributors", href: "#contributors" },
    ],
    docs: [
      { label: "Learn", href: "#quick-start" },
      { label: "Project", href: "#supported-frameworks" },
      { label: "Configs", href: "#extending-the-cli" },
      { label: "Commands", href: "#cli-commands" },
    ],
  },
  footer: {
    resources: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    docsLinks: [
      { label: "Back to home", href: "/" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  pages: {
    about: {
      title: "About",
      description:
        "Learn about bextool, an open-source multi-project scaffolding CLI for modern app development.",
      canonical: "/about",
      paragraphs: [
        "bextool is an open-source CLI that helps developers scaffold production-ready starter apps quickly.",
        "It supports frontend, backend, full-stack, mobile, browser extension, and tooling templates through one interactive flow.",
      ],
      links: [{ label: "Project repository", href: "https://github.com/bextool-cli/bextool", external: true }],
    },
    contact: {
      title: "Contact",
      description:
        "Contact the bextool maintainers for support, issues, and contribution discussions.",
      canonical: "/contact",
      intro:
        "For bug reports, feature requests, and community discussions, use the project repositories and issue trackers.",
      links: [
        { label: "Main repository", href: "https://github.com/bextool-cli/bextool", external: true },
        { label: "Website repository", href: "https://github.com/bextool-cli/bextool-website", external: true },
        { label: "npm package", href: "https://www.npmjs.com/package/bextool", external: true },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      description: "Privacy policy for the bextool website and documentation.",
      canonical: "/privacy",
      paragraphs: [
        "This website is maintained for product information and documentation. We do not run user account registration on this site.",
        "Basic analytics or server logs may be collected by hosting providers to maintain reliability and security.",
        "For third-party platform policies, review GitHub and npm terms where project resources are hosted.",
      ],
    },
    terms: {
      title: "Terms of Service",
      description: "Terms of use for the bextool website and documentation.",
      canonical: "/terms",
      paragraphs: [
        "By using this website, you agree to use its content for informational purposes related to bextool and associated open-source projects.",
        "Project code and templates are distributed under their respective open-source licenses.",
        'The website content is provided "as is" without warranties, and external links are subject to third-party terms.',
      ],
    },
  } satisfies Record<string, ContentPage>,
} as const;

export const siteUrl = siteConfig.siteUrl;
