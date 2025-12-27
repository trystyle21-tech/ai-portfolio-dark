"use client"

import { Play, Heart, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const shortsData = [
  {
    id: 1,
    title: "Character & Story",
    likes: "11.2k",
    thumbnail: "/reel-01.jpg",
    link: "https://www.instagram.com/reel/DOsxDUQDwNM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 2,
    title: "Space & Interior",
    likes: "7.8k",
    thumbnail: "/reel-02.jpg",
    link: "https://www.instagram.com/reel/DPLrUNeCdtj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 3,
    title: "Product Design",
    likes: "9.5k",
    thumbnail: "/reel-03.jpg",
    link: "https://www.instagram.com/reel/DP6DjqJD5Vu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
]

export function ShortsSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide mb-4">
              Shorts & Reels
            </h2>
            <p className="text-[#cccccc] text-sm md:text-base max-w-md mx-auto">
              一瞬で心を掴む。圧倒的な保存率といいね率を誇る、没入型ショートストーリー。
            </p>
          </div>
        </ScrollReveal>

        {/* 3-column grid for vertical videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {shortsData.map((short, index) => (
            <ScrollReveal key={short.id} delay={index * 0.15}>
              <div className="group">
                {/* Video Card - 9:16 aspect ratio */}
                <a
                  href={short.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-100 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]"
                >
                  <img
                    src={short.thumbnail || "/placeholder.svg"}
                    alt={short.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Play className="w-7 h-7 text-neutral-800 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </a>

                {/* Card Footer */}
                <div className="mt-5 space-y-3">
                  <h3 className="font-serif text-lg text-foreground">{short.title}</h3>

                  <div className="flex items-center justify-between">
                    {/* Likes Badge */}
                    <div className="flex items-center gap-1.5 text-[#cccccc] text-sm">
                      <Heart className="w-4 h-4" />
                      <span>{short.likes} Likes</span>
                    </div>

                    {/* View on Instagram Button */}
                    <a href={short.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs text-[#cccccc] hover:text-foreground gap-1.5 px-3"
                      >
                        View on Instagram
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
