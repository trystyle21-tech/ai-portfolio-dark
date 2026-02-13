"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

const toolCategories = [
    {
        category: "Video Generation",
        tools: ["Kling", "Veo", "Midjourney", "Sora", "Wan", "Hailuo", "Seedance", "Runway", "Higgsfield", "Grok"],
    },
    {
        category: "Image Generation",
        tools: ["Midjourney", "Nano Banana", "Seedream"],
    },
    {
        category: "Lip Sync",
        tools: ["InfinitiTalk", "Kling", "HeyGen"],
    },
    {
        category: "Music & Voice",
        tools: ["Suno", "Elevenlabs"],
    },
    {
        category: "Quality Enhancement",
        tools: ["Topaz"],
    },
]

export function ToolsSection() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-neutral-800">
            <div className="max-w-5xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide mb-4">
                            Software & Tools
                        </h2>
                        <p className="text-[#cccccc] text-sm md:text-base tracking-wide max-w-md mx-auto">
                            描きたい世界観に合わせて、最適なAIモデルを自在に選定。
                        </p>
                    </div>
                </ScrollReveal>

                <div className="max-w-4xl mx-auto space-y-12">
                    {toolCategories.map((category, index) => (
                        <ScrollReveal key={category.category} delay={index * 0.1}>
                            <div className="flex flex-col items-center space-y-4">
                                <h4 className="text-xs font-medium text-[#cccccc]/60 uppercase tracking-widest">
                                    {category.category}
                                </h4>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {category.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900 text-[#cccccc] text-sm font-light tracking-wide transition-colors hover:border-[#39FF14] hover:text-[#39FF14] hover:bg-neutral-900/50"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
