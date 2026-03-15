"use client";

import dynamic from "next/dynamic";

const TerminalAnimation = dynamic(() => import("@/components/TerminalAnimation"), {
    ssr: false,
    loading: () => <div className="p-6 h-100" aria-hidden="true" />,
});

export default function LazyTerminalAnimation() {
    return <TerminalAnimation />;
}
