"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0d0d0d] px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#1a1a1a]">
          <AlertTriangle className="h-10 w-10 text-[#ff6b00]" />
        </div>
        <h1 className="mb-4 text-3xl font-mono font-normal tracking-tight text-[#ece9e4]">
          Something went wrong
        </h1>
        <p className="mb-8 max-w-xs mx-auto text-base leading-relaxed text-[#9c978f]">
          An unexpected error occurred. Please try refreshing the page or contact support if the problem persists.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button onClick={reset} variant="outline">
            Try again
          </Button>
          <a
            href={siteConfig.links.repository}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-[#3c4552] bg-[#121821] px-6 py-3 font-mono text-sm uppercase tracking-[0.1em] text-[#ece9e4] transition-colors hover:border-[#586373] hover:bg-[#171e28] sm:w-auto"
          >
            Report issue
          </a>
        </div>
      </div>
    </div>
  );
}
