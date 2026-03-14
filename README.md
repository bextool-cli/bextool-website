<br/>
<div align="center">
  <img src="./public/logo.png" alt="bextool logo" width="120" />
  <h1 align="center">bextool</h1>
  <p align="center">
    <strong>A Multi-Project Scaffolding CLI for Modern Apps.</strong>
    <br/>
    <em>bextool is an open-source CLI that generates starter apps from one interactive flow for frontend, backend, full-stack, mobile, extensions, and more!</em>
  </p>
  
  <p align="center">
    <a href="https://www.npmjs.com/package/bextool"><img src="https://img.shields.io/npm/v/bextool.svg?style=flat-square&color=ff6b00" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/bextool"><img src="https://img.shields.io/npm/dt/bextool.svg?style=flat-square&color=27c93f" alt="NPM Downloads" /></a>
    <a href="https://github.com/bextool-cli/bextool/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/bextool.svg?style=flat-square&color=ffbd2e" alt="License" /></a>
  </p>
</div>

<br/>

## ✨ Why bextool?

Setting up a new project from scratch can be tedious. Whether you are building a React frontend, a Node.js backend, a Next.js full-stack app, a React Native mobile app, or a simple browser extension, **bextool** has a template for you.

Using a beautiful terminal experience powered by `@clack/prompts`, **bextool** guides you through a single interactive flow to get your project scaffolded in seconds.

- 🛠️ **Universal Scaffolder:** One CLI for almost any project type you want to build.
- 🎨 **Beautiful Terminal UI:** Category-first project selection with an intuitive interface.
- 📦 **Smart Setup:** Framework-specific prompts and optional dependency installation (`npm`, `pnpm`, `yarn`).
- ⚡ **Extensible Architecture:** Registry-driven generator system powered by Handlebars makes it incredibly easy to add your own scaffolds.

---

## 🏗️ Supported Starters

**bextool** currently supports a massive range of project templates:

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Full-Stack:** Next.js App Router
- **Mobile:** React Native with Expo
- **Browser Extension:** Chrome, Firefox, Edge, Safari
- **Static Site:** Hugo
- **CLI Tool:** Commander
- **Game:** Phaser
- **Editor Extension:** VS Code
- **CMS:** WordPress theme
- **Data Science:** Jupyter notebook starter
- **Microservice:** Docker Compose
- **NPM Package:** TypeScript library with Rollup and Vitest`
- **Desktop App:** Electron
- **Workflow Automation:** n8n workflow starter

---

## 🚀 Quick Start

You can install `bextool` globally on your machine:

```bash
npm install -g bextool
```

Or, run it instantly without a global install:

```bash
npx bextool
```

### Usage Flow

Simply run `bextool` in your terminal. The CLI will:
1. Ask for a **project category** (e.g., Frontend, Backend, Mobile).
2. Ask for a **framework** in that category.
3. Collect shared metadata like project name and description.
4. Ask any **framework-specific** setup questions.
5. Generate the project files instantly.
6. Give you the option to automatically install dependencies.

---

## 🛠️ Contributing & Extending The CLI

Want to add your own framework or template to `bextool`? The modular architecture under `src/generators` makes it extremely simple!

1. **Add your template files** to a new folder under `templates/`.
2. **Create a generator module** under `src/generators/`.
3. **Register your scaffold** in `src/config/frameworks.js`.

To test it locally:
```bash
git clone https://github.com/bextool-cli/bextool.git
cd bextool
npm install
npm test # Runs syntax checks, smoke tests, and browser matrix checks
```

---

## 👥 Meet The Contributors

This project is built and maintained by passionate developers driving CLI ergonomics and high-quality templates:

- **Abhiraj** ([@Abhiraj35](https://github.com/Abhiraj35)) 
- **Shubham Raj** ([@Shubham-1068](https://github.com/Shubham-1068)) 

---

## 🔗 Project Links

- **Main CLI Repository:** [bextool-cli/bextool](http://github.com/bextool-cli/bextool)
- **NPM Package:** [bextool](http://www.npmjs.com/package/bextool)
- **Website Source (This Repo):** [bextool-cli/bextool-website](https://github.com/bextool-cli/bextool-website)

---

## 📄 License

This project is licensed under the [ISC License](https://github.com/bextool-cli/bextool/blob/main/LICENSE).

<br/>
<div align="center">
  <sub>Built with ❤️ by the bextool community.</sub>
</div>