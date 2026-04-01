"use client";

import { useEffect, useState } from "react";

async function fetchNpmDownloads(): Promise<number> {
  try {
    const res = await fetch("https://api.npmjs.org/downloads/range/2024-01-01:2026-12-31/bextool");
    if (!res.ok) return 0;
    const data = await res.json();

    const totalDownloads = data.downloads.reduce((sum: number, item: { downloads: number }) => {
      return sum + item.downloads;
    }, 0);

    return totalDownloads;
  } catch {
    try {
      const res = await fetch("https://api.npmjs.org/downloads/point/30d/bextool");
      if (!res.ok) return 0;
      const data = await res.json();
      return data.downloads as number;
    } catch {
      return 0;
    }
  }
}


export function NpmDownloadCount() {
  const [downloads, setDownloads] = useState<number | null>(null);

  useEffect(() => {
    fetchNpmDownloads().then(setDownloads);
  }, []);

  if (downloads === null) {
    return <span className="animate-pulse">0</span>;
  }

  return (
    <span className="tabular-nums">
      {downloads > 1000 ? `${(downloads / 1000).toFixed(1)}k` : downloads.toLocaleString()}
    </span>
  );
}

