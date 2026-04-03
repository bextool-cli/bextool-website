const NPM_PACKAGE_NAME = "bextool";

// Fetch npm download stats for the past 30 days
export async function fetchNpmDownloads() {
  try {
    const res = await fetch(`https://api.npmjs.org/downloads/point/30d/${NPM_PACKAGE_NAME}`);
    if (!res.ok) return 0;
    const data = await res.json();
    return data.downloads as number;
  } catch {
    return 0;
  }
}

// Fetch GitHub repo stats
export async function fetchGitHubStars() {
  try {
    const res = await fetch("https://api.github.com/repos/bextool-cli/bextool", {
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "bextool-website",
      },
    });
    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count as number;
  } catch {
    return 0;
  }
}

// Fetch both stats in parallel
export async function fetchNpmStats() {
  const [downloads, stars] = await Promise.all([
    fetchNpmDownloads(),
    fetchGitHubStars(),
  ]);
  return { downloads, stars };
}
