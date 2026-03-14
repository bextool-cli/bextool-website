"use client";

import { useEffect, useRef } from "react";

const terminalScript = [
  { text: "$ bextool", type: "command" },
  { text: "Project category: ", type: "prompt", input: "Full-Stack" },
  { text: "Framework: ", type: "prompt", input: "Next.js App Router" },
  { text: "Project name: ", type: "prompt", input: "my-app" },
  { text: "Description: ", type: "prompt", input: "A bold new startup" },
  { text: "Package manager: ", type: "prompt", input: "pnpm" },
  { text: "", type: "newline" },
  { text: "✔ Scaffolding Next.js App Router...", type: "success" },
  { text: "", type: "newline" },
  { text: "Created:", type: "output" },
  { text: "  my-app/", type: "output" },
  { text: "  ├── public/", type: "output" },
  { text: "  ├── src/", type: "output" },
  { text: "  │   ├── app/", type: "output" },
  { text: "  │   │   ├── layout.tsx", type: "output" },
  { text: "  │   │   └── page.tsx", type: "output" },
  { text: "  │   └── components/", type: "output" },
  { text: "  ├── tailwind.config.ts", type: "output" },
  { text: "  ├── next.config.js", type: "output" },
  { text: "  ├── tsconfig.json", type: "output" },
  { text: "  ├── package.json", type: "output" },
  { text: "  └── pnpm-lock.yaml", type: "output" },
  { text: "", type: "newline" },
  { text: "✔ Done! Run: cd my-app", type: "success" },
];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TerminalAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    async function runTerminal() {
      if (!containerRef.current) return;
      const terminalContainer = containerRef.current;
      terminalContainer.innerHTML = "";

      for (let i = 0; i < terminalScript.length; i++) {
        const line = terminalScript[i];
        const lineDiv = document.createElement("div");
        terminalContainer.appendChild(lineDiv);

        if (line.type === "newline") {
          lineDiv.innerHTML = "<br>";
          continue;
        }

        if (line.type === "command") {
          lineDiv.innerHTML = `<span class="text-[#666]">$</span> <span class="text-[#e8e8e8]">bextool</span>`;
          await sleep(400);
        } else if (line.type === "prompt") {
          lineDiv.innerHTML = `<span class="text-[#ff6b00]">?</span> <span class="text-[#e8e8e8]">${line.text}</span>`;
          
          const inputSpan = document.createElement("span");
          inputSpan.className = "text-[#ff6b00]";
          lineDiv.appendChild(inputSpan);

          const cursor = document.createElement("span");
          cursor.className = "terminal-cursor";
          lineDiv.appendChild(cursor);

          await sleep(300);

          for (const char of line.input || "") {
            inputSpan.textContent += char;
            await sleep(50);
          }
          cursor.remove();
          await sleep(200);
        } else if (line.type === "success") {
          lineDiv.innerHTML = `<span class="text-[#ff6b00]">${line.text.charAt(0)}</span> <span class="text-[#e8e8e8]">${line.text.slice(2)}</span>`;
          await sleep(400);
        } else {
          lineDiv.innerHTML = `<span class="text-[#666]">${line.text}</span>`;
          await sleep(20);
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !initializedRef.current) {
            initializedRef.current = true;
            runTerminal();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="p-6 font-mono text-sm sm:text-base text-[#e8e8e8] leading-loose min-h-[400px]"
      ref={containerRef}
    />
  );
}
