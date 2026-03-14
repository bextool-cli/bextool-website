"use client";

import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/base16/material-darker.css";

export default function DocsHighlighter() {
  useEffect(() => {
    setTimeout(() => {
      hljs.highlightAll();
    }, 0);

    const sections = document.querySelectorAll("article section[id]");
    const links = document.querySelectorAll(".docs-link");

    if (!sections.length || !links.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          links.forEach((link) => {
            const href = link.getAttribute("href");
            const isMatch = href === `#${entry.target.id}`;
            
            if (isMatch) {
              link.classList.add("docs-link-active");
            } else {
              link.classList.remove("docs-link-active");
            }
          });
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
