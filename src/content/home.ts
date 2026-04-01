import { Bell, LayoutGrid, Link as LinkIcon, Star, Zap } from "lucide-react";

import { siteConfig } from "@/lib/site";

export type HomeFeatureCard = {
  title: string;
  description: string;
  variant: "metrics" | "templates" | "code" | "checklist" | "npm-stats";
  items: { label?: string; value: string }[];
};

export type TransitionFeature = {
  title: string;
  description: string;
  icon: typeof Zap;
};

export const homeContent = {
  hero: {
    title: "Ship production ready starter apps before your first coffee.",
    description:
      "bextool scaffolds frontend, backend, full-stack, mobile, and extension projects from a single guided flow so your team starts with real architecture, not boilerplate.",
    terminalLabel: "bextool session",
    image: {
      src: "/hero/demo.avif",
      alt: "bextool terminal CLI interface",
    },
  },
  transition: {
    statsLabel: "Supported by",
    statsTitle: "15+ Templates",
    categories: [
      ["Frontend", "Backend", "Full-Stack", "Mobile", "Static Site", "CLI Tool", "Browser Extension"],
      ["Editor Extension", "CMS (WordPress)", "Data Science", "Microservice", "NPM Package", "Workflow Automation", "Desktop App"],
    ],
    features: [
      {
        title: "Smart Scaffolding",
        description: "Creates accurate, context-aware project structures instantly.",
        icon: Zap,
      },
      {
        title: "Auto Configurations",
        description: "Sets up tooling, linting, and formatting so you stay productive.",
        icon: Bell,
      },
      {
        title: "Priority Sorting",
        description: "Highlights important scripts and hides configuration noise.",
        icon: LayoutGrid,
      },
    ] satisfies TransitionFeature[],
  },
  features: {
    eyebrow: "Features",
    title: "Scaffolding features for every stack.",
    cards: [
      {
        title: "Guided CLI Flow",
        description: "A clean interactive app scaffolding flow that generates starter projects in minutes.",
        variant: "metrics",
        items: [
          { label: "Category", value: "Full-Stack" },
          { label: "Framework", value: "Next.js App Router" },
          { label: "Pkg Manager", value: "pnpm" },
        ],
      },
      {
        title: "15+ Supported Scaffolds",
        description: "Pick from a broad registry of production-ready starter templates for any stack.",
        variant: "templates",
        items: [
          { label: "Frontend", value: "React+Vite" },
          { label: "Backend", value: "Node+Express" },
          { label: "Mobile", value: "React Native" },
          { label: "Extension", value: "Chrome MV3" },
        ],
      },
      {
        title: "Extensible Architecture",
        description: "Powered by Handlebars templates and a modular CLI generator architecture.",
        variant: "code",
        items: [
          { value: "// src/config/frameworks.js" },
          { value: 'export const frameworks = [' },
          { value: '  { "name": "frontend", ... }' },
          { value: "];" },
        ],
      },
      {
        title: "Plug-and-Play Tooling",
        description: "Includes ready-to-run scripts and baseline files so you can start coding instantly.",
        variant: "checklist",
        items: [
          { value: "npm scripts for dev and build" },
          { value: "Linting and formatter setup" },
          { value: "Production-aware starter structure" },
        ],
      },
    ] satisfies HomeFeatureCard[],
  },
  usage: {
    eyebrow: "Workflow",
    title: "A clean path from command to running app.",
    description:
      "The command flow is optimized to remove setup mistakes and keep implementation focus on product logic.",
    steps: [
      {
        number: "01",
        title: "Install once",
        command: siteConfig.installCommand,
      },
      {
        number: "02",
        title: "Launch the CLI",
        command: siteConfig.runCommand,
      },
      {
        number: "03",
        title: "Answer prompts and ship",
        description:
          "Select stack, framework, package manager, and project metadata. bextool generates a ready-to-run structure with clean defaults.",
      },
    ],
    outputTitle: "Generated starter output",
    outputLabel: "Next.js App Router",
  },
  teamVelocity: {
    eyebrow: "Team velocity",
    title: "Turn project setup into a 60-second routine.",
    description:
      "Standardized scaffolding gives every contributor the same clean baseline, reducing onboarding time and debugging noise across repositories.",
    cards: [
      { title: "Local development", command: "npm install\nnpm start" },
      { title: "Package quality gate", command: "npm test\nnpm pack --dry-run" },
    ],
  },
  contributors: {
    eyebrow: "Community",
    title: "Built by maintainers focused on production quality.",
    description:
      "bextool is maintained in the open with a strong emphasis on CLI ergonomics, release reliability, and developer experience.",
    cardIcon: LinkIcon,
  },
  outputTabs: [
    {
      id: "next",
      label: "page.tsx",
      code: `export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">
        Welcome to my-app!
      </h1>
      <p>
        Get started by editing src/app/page.tsx
      </p>
    </main>
  );
}`,
      language: "tsx",
    },
    {
      id: "package",
      label: "package.json",
      code: `{
  "name": "my-app",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.3"
  }
}`,
      language: "json",
    },
  ],
  stars: [0, 1, 2, 3, 4] satisfies number[],
  starIcon: Star,
} as const;
