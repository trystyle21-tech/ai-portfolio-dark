"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

// リリースデータ
const releases = [
  {
    id: 1,
    videoId: "gFuHEKeF1II",
    title: "Crimson Lies",
  },
  {
    id: 2,
    videoId: "LtvI9_s6JvY",
    title: "Lossy",
  },
  {
    id: 3,
    videoId: "Nnee_1bU6eQ",
    title: "滅茶初恋",
  }
]

export function NewReleaseSection() {
  const [playingId, setPlayingId] = useState<number | null>(null)

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

        {/* 3-column grid for videos */}
        {/* スマートフォン(md未満)では1カラム、md以上で3カラム */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {releases.map((release, index) => (
            <ScrollReveal key={release.id} delay={index * 0.15}>
              <div className="flex flex-col items-center group">

                {/* Video Container */}
                <div className="w-full">
                  <div
                    className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-lg transition-transform duration-500 group-hover:shadow-2xl group-hover:-translate-y-1 cursor-pointer"
                    onClick={() => setPlayingId(release.id)}
                  >
                    {playingId === release.id ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${release.videoId}?autoplay=1&rel=0`}
                        title={release.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    ) : (
                      <>
                        <img
                          src={`https://img.youtube.com/vi/${release.videoId}/maxresdefault.jpg`}
                          alt={release.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />

                        {/* Subtle overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Title Container -> 動画の真下・中央 */}
                <div className="mt-5 w-full text-center">
                  <h3 className="font-serif text-[#e9e6e9] text-base md:text-lg tracking-[0.15em] font-light group-hover:opacity-100 transition-opacity duration-300">
                    {release.title}
                  </h3>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
