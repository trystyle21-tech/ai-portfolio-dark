"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function NewReleaseSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = "86dXMQBETms"

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-wide mb-4">
              New Release
            </h2>
            <p className="text-[#cccccc] text-sm md:text-base max-w-md mx-auto">
              AI映像表現の粋を凝縮した、最新の映像作品。
            </p>
          </div>
        </ScrollReveal>

        {/* Main Video Player */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            
            {/* Left: Video */}
            <div className="w-full max-w-sm shrink-0">
              <div
                className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#d5cdd0] shadow-2xl cursor-pointer group"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="New Release Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="New Release Video"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Play/Pause button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right: Typography */}
            <div className="flex flex-col items-center justify-center">
              {/* 曲名 (縦書き) */}
              <h3 
                className="font-serif text-[#ec1d1d] text-[5rem] md:text-[7rem] tracking-[0.2em] font-bold leading-none"
                style={{ writingMode: 'vertical-rl' }}
              >
                残熱
              </h3>

              {/* アーティスト名 (横書き) */}
              <p 
                className="mt-1 md:mt-2 text-[#888888] text-xl md:text-2xl font-serif text-center"
                style={{ letterSpacing: '0.3em', marginRight: '-0.3em' }}
              >
                生哉
              </p>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
