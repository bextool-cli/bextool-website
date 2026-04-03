"use client";

import CommandCopy from "@/components/CommandCopy";
import { siteConfig } from "@/lib/site";

export default function Buttons() {
  return (
    <div className="mx-auto w-full max-w-88 sm:max-w-md md:max-w-lg lg:max-w-136 ">
      <CommandCopy
        command={siteConfig.installCommand}
        variant="hero"
        className="w-full"
        codeClassName="tracking-[0.01em]"
      />
    </div>
  );
}
