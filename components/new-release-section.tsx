"use client"

import { useEffect, useState } from "react"
import { Play } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"

// リリースデータ（上から順に左→右へ並ぶ）
// 新しい作品を足すときは、ここに { videoId, title } を1行追加するだけ
// videoId = YouTube Shorts のURL「youtube.com/shorts/〇〇〇」の〇〇〇部分
const releases = [
  { videoId: "gFuHEKeF1II", title: "Crimson Lies" },
  { videoId: "LtvI9_s6JvY", title: "Lossy" },
  { videoId: "Nnee_1bU6eQ", title: "滅茶初恋" },
  { videoId: "pMdOibMkJoY", title: "RED LINE" },
  { videoId: "N7lR9jtF1ws", title: "GLITCH LOVE" },
  { videoId: "StZiKOpwzg0", title: "レクイエム" },
  { videoId: "w4JH6konb3o", title: "残熱" },
]

export function NewReleaseSection() {
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [snapCount, setSnapCount] = useState(0)

  useEffect(() => {
    if (!api) return
    const update = () => {
      setSnapCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap())
    }
    update()
    // スライドを動かしたら再生中の動画は止める
    const onSelect = () => {
      update()
      setPlayingId(null)
    }
    api.on("select", onSelect)
    api.on("reInit", update)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", update)
    }
  }, [api])

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-wide mb-4">
              New Release
            </h2>
            <p className="text-[#cccccc] text-sm md:text-base max-w-md mx-auto">
              AI映像表現の粋を凝縮した、最新の映像作品。
            </p>
          </div>
        </ScrollReveal>

        {/* カルーセル：PCは3本、タブレットは2本、スマホは1本＋次の作品が少し見える */}
        <ScrollReveal>
          <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
            <CarouselContent className="py-4 -ml-6 md:-ml-10">
              {releases.map((release) => (
                <CarouselItem
                  key={release.videoId}
                  className="pl-6 md:pl-10 basis-[80%] sm:basis-1/2 md:basis-1/3"
                >
                  <div className="flex flex-col items-center group">
                    {/* Video Container */}
                    <div className="w-full">
                      <div
                        className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-lg transition-transform duration-500 group-hover:shadow-2xl group-hover:-translate-y-1 cursor-pointer"
                        onClick={() => setPlayingId(release.videoId)}
                      >
                        {playingId === release.videoId ? (
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
                              loading="lazy"
                              onError={(e) => {
                                // 高画質サムネイルがない動画は標準画質に切り替え
                                const img = e.currentTarget
                                if (!img.src.includes("hqdefault")) {
                                  img.src = `https://img.youtube.com/vi/${release.videoId}/hqdefault.jpg`
                                }
                              }}
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
                      <h3 className="font-serif text-[#e9e6e9] text-base md:text-lg tracking-[0.15em] font-light">
                        {release.title}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 md:-left-12 lg:-left-16 bg-white/10 hover:bg-white/20 text-white border-0 h-10 w-10 md:h-12 md:w-12 disabled:opacity-0" />
            <CarouselNext className="hidden md:flex -right-4 md:-right-12 lg:-right-16 bg-white/10 hover:bg-white/20 text-white border-0 h-10 w-10 md:h-12 md:w-12 disabled:opacity-0" />
          </Carousel>

          {/* 位置を示すドット（タップでも移動できる） */}
          {snapCount > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: snapCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`${i + 1}枚目へ`}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
