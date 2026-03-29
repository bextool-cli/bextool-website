"use client";

import { motion } from "motion/react";

import { homeContent } from "@/content/home";

export default function TransitionSection() {
  return (
    <section className="relative z-20 flex w-full justify-center bg-[#0d0d0d] px-4 py-20">
      <div className="relative w-full max-w-6xl">
        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 border-l border-t border-[#2b313a]" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 border-r border-t border-[#2b313a]" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 border-b border-l border-[#2b313a]" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 border-b border-r border-[#2b313a]" />

        <div className="relative overflow-hidden border border-[#2a2a2a] bg-[#111]/80 backdrop-blur-md">
          <div className="grid grid-cols-1 border-b border-[#2a2a2a] md:grid-cols-3">
            {homeContent.transition.features.map(({ title, description, icon: Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col gap-3 p-8 transition-colors hover:bg-[#141414] ${index < homeContent.transition.features.length - 1 ? "border-b border-[#2a2a2a] md:border-b-0 md:border-r" : ""}`}
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#ff6b00] shadow-sm">
                  <Icon className="h-3.5 w-3.5 fill-current text-[#0d0d0d]" />
                </div>
                <h3 className="text-lg font-mono font-normal tracking-tight text-[#ece9e4]">{title}</h3>
                <p className="text-sm leading-relaxed text-[#666]">{description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center border-b border-[#2a2a2a] bg-[#141414]/50 p-8 md:col-span-4 md:border-b-0 md:border-r"
            >
              <p className="mb-2 text-sm font-mono uppercase tracking-wider text-[#666]">
                {homeContent.transition.statsLabel}
              </p>
              <h2 className="mb-4 text-3xl font-mono font-normal tracking-tight text-[#ece9e4]">
                {homeContent.transition.statsTitle}
              </h2>
              <div className="flex items-center gap-2 text-sm text-[#9c978f]">
                <div className="flex text-[#ff6b00]">
                  {homeContent.stars.map((star) => {
                    const StarIcon = homeContent.starIcon;
                    return <StarIcon key={star} className="h-4 w-4 fill-current" />;
                  })}
                </div>
                <span className="font-mono">{homeContent.transition.statsCaption}</span>
              </div>
            </motion.div>

            <div className="flex flex-col justify-center overflow-hidden bg-[#0d0d0d]/30 py-10 md:col-span-8">
              {homeContent.transition.categories.map((categories, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  className={`relative flex w-full overflow-hidden whitespace-nowrap ${rowIndex === 0 ? "mb-6" : ""}`}
                >
                  <motion.div
                    className="flex w-max"
                    animate={{ x: rowIndex === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: rowIndex === 0 ? 30 : 35,
                        ease: "linear",
                      },
                    }}
                  >
                    {[...categories, ...categories].map((category, categoryIndex) => (
                      <div
                        key={`${category}-${categoryIndex}`}
                        className="cursor-default px-6 font-mono text-base tracking-tight text-[#9c978f] transition-colors hover:text-[#ece9e4]"
                      >
                        <span className="mr-3 text-[#2b313a]">◆</span>
                        {category}
                      </div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
