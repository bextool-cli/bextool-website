export type DocsNavLink = {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
};

export type DocsNavGroup = {
  title: string;
  links: DocsNavLink[];
};

export type DocsIntroStat = {
  label: string;
  value: string;
};

export type DocsCodeExample = {
  title: string;
  command: string;
};

export type DocsOrderedItem = {
  title: string;
  body: string;
  code?: string[];
};

export type DocsTemplateCard = {
  icon: string;
  title: string;
  subtitle: string;
};

export const docsNavigation: DocsNavGroup[] = [
  {
    title: "Getting Started",
    links: [
      { label: "Introduction", href: "#quick-start" },
      { label: "Installation", href: "#installation" },
    ],
  },
  {
    title: "Usage Guide",
    links: [
      { label: "Interactive CLI Flow", href: "#interactive-flow" },
      { label: "CLI Commands", href: "#cli-commands" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Supported Starters", href: "#supported-frameworks" },
      { label: "Add Your Own Template", href: "#extending-the-cli" },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bextool-cli/bextool",
        external: true,
        icon: "solar:arrow-right-up-linear",
      },
    ],
  },
];

export const docsIntro = {
  heading: "bextool project scaffolding CLI docs.",
  lead:
    "bextool is an open-source project scaffolding CLI and app generator that creates production-ready starter applications from a single interactive flow.",
  body:
    "Setting up a new project often means writing boilerplate code, configuring tedious build tooling, and structuring files from scratch before actually starting your business logic. bextool solves this by providing a comprehensive, registry-driven tool that scaffolds Frontend apps, Backend servers, Full-Stack frameworks, Mobile apps, Browser extensions, and much more.",
  stats: [
    { label: "Package", value: "bextool (NPM)" },
    { label: "Environment", value: "Node.js 18+" },
    { label: "Template Engine", value: "Handlebars" },
  ] satisfies DocsIntroStat[],
};

export const installationContent = {
  title: "Installation",
  body:
    "You can install `bextool` globally on your machine to use it anywhere, or execute it on-the-fly using `npx`.",
  examples: [
    { title: "Global Installation", command: "npm install -g bextool" },
    { title: "Execute without installing", command: "npx bextool" },
  ] satisfies DocsCodeExample[],
};

export const interactiveFlowContent = {
  title: "Interactive CLI scaffolding flow",
  body:
    "Bextool offers a powerful, multi-step interactive wizard powered by `@clack/prompts`. Instead of remembering hundreds of flags, simply run the command and the tool will guide you.",
  steps: [
    {
      title: "Select a Category",
      body: "Choose the high level domain (Frontend, Backend, Mobile, Full-Stack, etc.)",
    },
    {
      title: "Select a Framework",
      body: "Pick from the available templates inside your chosen category (React + Vite, Next.js App Router, React Native Expo).",
    },
    {
      title: "Metadata",
      body: "Describe your project name and description.",
    },
    {
      title: "Framework-specific Prompts",
      body: "Depending on the framework, answer custom scaffolding questions (like Target Browser for Extensions).",
    },
    {
      title: "Package Manager",
      body: "Optionally install dependencies using npm, yarn, or pnpm.",
      code: ["npm", "yarn", "pnpm"],
    },
  ] satisfies DocsOrderedItem[],
};

export const cliCommandsContent = {
  title: "CLI commands for starter generation",
  body:
    "It usually only takes two commands to get an entire application up and running locally.",
  steps: [
    {
      title: "1. Launch Interactive CLI",
      command: "bextool",
      copyText: "bextool",
    },
    {
      title: "2. Launch Generated Project",
      commandLines: [
        "cd <project-name>",
        "# Following scripts are generated:",
        "npm run dev",
      ],
      copyText: "cd <project-name>\nnpm run dev",
    },
  ],
};

export const supportedTemplatesContent = {
  title: "Supported starter templates registry",
  body:
    "Bextool curates a massive registry of 15+ community-maintained scaffolding templates. Every template is production ready with necessary `.gitignore` files, linters usually pre-configured, and clean start architecture.",
  cards: [
    { icon: "solar:monitor-linear", title: "Frontend", subtitle: "React + Vite" },
    { icon: "solar:server-square-linear", title: "Backend", subtitle: "Node.js + Express" },
    { icon: "solar:layers-linear", title: "Full-Stack", subtitle: "Next.js App Router" },
    { icon: "solar:smartphone-linear", title: "Mobile App", subtitle: "React Native (Expo)" },
    { icon: "solar:browser-linear", title: "Browser Extension", subtitle: "Chrome / Firefox / Edge" },
    { icon: "solar:document-text-linear", title: "Static Site", subtitle: "Hugo" },
    { icon: "solar:box-minimalistic-linear", title: "NPM Package", subtitle: "TS + Rollup + Vitest" },
    { icon: "solar:terminal-square-linear", title: "CLI Tool", subtitle: "Commander" },
  ] satisfies DocsTemplateCard[],
  moreLabel: "+ 8 more scaffolds...",
};

export const extendingCliContent = {
  title: "Extending the CLI (Advanced)",
  body:
    "Bextool boasts a highly modular architecture. Adding a brand new scaffold or framework is incredibly simple using the centralized src/config/frameworks.js registry.",
  stepsTitle: "How to create a new starter template:",
  steps: [
    {
      title: "Add Template Assets",
      body: "Put your boilerplate files into a new subdirectory in templates/. These templates utilize Handlebars (.hbs syntax) to inject user config.",
      code: ["templates/"],
    },
    {
      title: "Create a Generator Module",
      body: "Under src/generators/, add the code defining what specific prompts it needs and how it executes its build.",
      code: ["src/generators/"],
    },
    {
      title: "Register the Framework",
      body: "Simply append your new module to the array in src/config/frameworks.js.",
      code: ["src/config/frameworks.js"],
    },
  ] satisfies DocsOrderedItem[],
  note:
    "Once you do this, running `npm test` locally within the repository will automatically generate syntax checks and smoke integrations for your brand new framework setup!",
};
