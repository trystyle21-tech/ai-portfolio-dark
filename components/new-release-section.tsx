"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function NewReleaseSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = "fUP_3p6_9XA"

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
          <div className="max-w-4xl mx-auto">
            <div
              className="relative aspect-video rounded-2xl overflow-hidden bg-[#d5cdd0] shadow-2xl cursor-pointer group"
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

            {/* Added Title */}
            <div className="mt-4 text-center">
              <p className="text-[#cccccc] text-sm md:text-base">
                『Error Code：異端児』
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
