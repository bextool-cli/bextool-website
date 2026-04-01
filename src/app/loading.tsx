import { siteConfig } from "@/lib/site";

function NavbarSkeleton() {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-[#0d0d0d]/80 backdrop-blur-sm z-50 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-[#c97a45]/20" />
          <div className="h-4 w-24 rounded bg-[#c97a45]/10" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="h-3 w-16 rounded bg-[#c97a45]/10" />
          <div className="h-3 w-20 rounded bg-[#c97a45]/10" />
          <div className="h-3 w-16 rounded bg-[#c97a45]/10" />
        </div>
      </div>
    </div>
  );
}

function HeroSkeleton() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <div className="h-4 w-48 mx-auto mb-6 rounded-full bg-[#c97a45]/10 animate-pulse" />
        <div className="h-12 w-3/4 mx-auto mb-8 rounded bg-[#c97a45]/10 animate-pulse" />
        <div className="h-6 w-1/2 mx-auto mb-10 rounded bg-[#c97a45]/5 animate-pulse" />
        <div className="flex items-center justify-center gap-3">
          <div className="h-10 w-32 rounded-full bg-[#c97a45]/10 animate-pulse" />
          <div className="h-10 w-40 rounded-full bg-[#c97a45]/10 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

function FeaturesSkeleton() {
  return (
    <div className="px-4 max-w-7xl mx-auto py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 rounded-2xl bg-[#0d0d0d]/50 border border-[#c97a45]/10">
            <div className="h-12 w-12 mb-4 rounded-lg bg-[#c97a45]/10 animate-pulse" />
            <div className="h-6 w-3/4 mb-3 rounded bg-[#c97a45]/10 animate-pulse" />
            <div className="h-4 w-full mb-2 rounded bg-[#c97a45]/5 animate-pulse" />
            <div className="h-4 w-2/3 rounded bg-[#c97a45]/5 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterSkeleton() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#0d0d0d] border-t border-[#c97a45]/10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <div className="h-4 w-24 mb-4 rounded bg-[#c97a45]/10 animate-pulse" />
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-3 w-16 mb-2 rounded bg-[#c97a45]/5 animate-pulse" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0d0d0d]">
      {/* Header skeleton */}
      <NavbarSkeleton />

      {/* Main content skeletons */}
      <div className="flex-1 flex flex-col">
        <HeroSkeleton />
        <FeaturesSkeleton />
      </div>

      {/* Footer skeleton */}
      <FooterSkeleton />

      {/* Loading indicator - subtle and unobtrusive */}
      <div className="fixed bottom-4 right-4 flex items-center gap-3 z-50">
        <div className="relative h-2.5 w-2.5">
          <div className="absolute inset-0 rounded-full bg-[#c97a45] opacity-20 animate-ping" />
          <div className="relative h-2.5 w-2.5 rounded-full bg-[#c97a45]" />
        </div>
        <p className="font-mono text-xs text-[#9c978f] animate-pulse">
          Loading {siteConfig.name}...
        </p>
      </div>
    </div>
  );
}
