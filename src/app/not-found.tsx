import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-[#0d0d0d]">
      <section className="max-w-xl w-full text-center bg-[#111] border border-[#2a2a2a] rounded-xl p-8">
        <p className="text-sm font-mono text-[#666] mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-mono font-normal tracking-tight text-[#e8e8e8] mb-4">
          Page not found.
        </h1>
        <p className="text-[#666] leading-relaxed mb-8">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-4 py-2 border border-[#333] rounded text-[#e8e8e8] hover:border-[#666] transition-colors"
          >
            Go to Home
          </Link>
          <Link
            href="/docs"
            className="px-4 py-2 border border-[#333] rounded text-[#e8e8e8] hover:border-[#666] transition-colors"
          >
            Open Docs
          </Link>
        </div>
      </section>
    </main>
  );
}
