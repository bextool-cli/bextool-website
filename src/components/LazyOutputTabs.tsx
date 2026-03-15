"use client";

import dynamic from "next/dynamic";

const OutputTabs = dynamic(() => import("@/components/OutputTabs"), {
    ssr: false,
    loading: () => <div className="h-125 rounded-xl border border-[#333] bg-[#111]" aria-hidden="true" />,
});

export default function LazyOutputTabs() {
    return <OutputTabs />;
}
