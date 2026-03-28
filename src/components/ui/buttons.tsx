"use client"
import { useState } from 'react'
import { Terminal, Copy, Check } from 'lucide-react';
import Link from 'next/link';



const buttons = () => {
    const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText('npm install -g bextool');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
        <div
          className="relative flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 pb-10"
        >
          <button
            onClick={copyInstall}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-[#1a1a1a] px-5 sm:px-8 py-3.5 sm:py-4 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-black shadow-xl hover:shadow-2xl sm:w-auto cursor-pointer"
          >
            <Terminal className="w-5 h-5 text-gray-400" />
            <span className="font-mono text-sm">npm install -g bextool</span>
            <div className="w-px h-4 bg-gray-700 mx-1"></div>
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400 hover:text-white" />}
          </button>

          <Link
            href="/docs"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 sm:px-8 py-3.5 sm:py-4 font-medium text-[#1a1a1a] transition-all hover:border-gray-300 hover:bg-gray-50 shadow-sm sm:w-auto"
          >
            View Documentation
          </Link>

          {/* Hand-drawn text arrow */}
          <div className="absolute -left-36 top-15 hidden md:flex flex-col items-end transform -rotate-12 drop-shadow-[0_0_15px_rgba(255,107,0,0.3)]">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1 text-[#ff6b00] opacity-90">
              <path d="M1 19C15 19 25 10 38 2M38 2C35 5 32 8 38 2ZM38 2C34 1 30 1 38 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-caveat text-2xl font-bold bg-gradient-to-r from-[#ff6b00] to-[#e8a274] bg-clip-text text-transparent whitespace-nowrap shadow-black drop-shadow-sm select-none">Ready in 60 seconds</span>
          </div>
        </div>
  )
}

export default buttons