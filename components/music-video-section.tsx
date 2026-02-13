"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { YouTubePlayer } from "@/components/youtube-player"

const allVideos = [
  {
    id: 1,
    title: "Tango for One",
    videoId: "WRO3-pf0U5Y", // Tango for One
    thumbnail: "/mv-01.jpg"
  },
  {
    id: 2,
    title: "Crystal Queen",
    videoId: "2Ru7rTnIJAE", // Crystal Queen
    thumbnail: "/mv-02.jpg"
  },
  {
    id: 3,
    title: "Baila Baila",
    videoId: "wwcG_3AxW3I", // Baila Baila
    thumbnail: "/mv-03.jpg"
  },
  {
    id: 4,
    title: "The Hour Between (Haze Ver.)",
    videoId: "dM8mWkSI_8I", // The Hour Between (Haze Ver.)
    thumbnail: "/mv-04.jpg"
  },
  {
    id: 5,
    title: "Still Falling",
    videoId: "mw5Zq8Ilum8", // Still Falling
    thumbnail: "/mv-05.jpg"
  },
]

export function MusicVideoSection() {
  const [activeVideo, setActiveVideo] = useState(allVideos[0])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-wide mb-4">
              Music Videos
            </h2>
            <p className="text-[#cccccc] text-sm md:text-base max-w-md mx-auto">
              AIの可能性を極限まで引き出した、ストーリーテリング映像作品。
            </p>
          </div>
        </ScrollReveal>

        {/* Main Video Player */}
        <ScrollReveal delay={0.1}>
          <div className="mb-10">
            <div
              className="relative aspect-video rounded-2xl overflow-hidden bg-[#d5cdd0] shadow-2xl cursor-pointer group"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <YouTubePlayer
                  videoId={activeVideo.videoId}
                  title={activeVideo.title}
                  onEnd={() => setIsPlaying(false)}
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <>
                  <img
                    src={activeVideo.thumbnail || `https://img.youtube.com/vi/${activeVideo.videoId}/maxresdefault.jpg`}
                    alt={activeVideo.title}
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
        </ScrollReveal>

        {/* Playlist Thumbnails */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {allVideos
              .filter((video) => video.id !== activeVideo.id)
              .map((video) => (
                <div
                  key={video.id}
                  className="group cursor-pointer transition-all duration-300"
                  onClick={() => {
                    setActiveVideo(video)
                    setIsPlaying(false)
                  }}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-[#d5cdd0] mb-3">
                    <img
                      src={video.thumbnail || `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    {/* bg-black/... の部分だけを削除しました */}
                    <div className="absolute inset-0 transition-all duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                </div>
              ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
