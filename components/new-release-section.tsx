"use client"

import { useEffect, useState } from "react"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
  // 画面にほぼ全部見えている作品の範囲（例：1〜3本目）
  const [range, setRange] = useState<[number, number]>([1, 3])
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  useEffect(() => {
    if (!api) return
    const update = () => {
      const inView = api.slidesInView()
      if (inView.length > 0) {
        setRange([Math.min(...inView) + 1, Math.max(...inView) + 1])
      }
      setCanPrev(api.canScrollPrev())
      setCanNext(api.canScrollNext())
    }
    update()
    // スライドを動かしたら再生中の動画は止める
    const onSelect = () => {
      update()
      setPlayingId(null)
    }
    api.on("select", onSelect)
    api.on("slidesInView", update)
    api.on("reInit", update)
    return () => {
      api.off("select", onSelect)
      api.off("slidesInView", update)
      api.off("reInit", update)
    }
  }, [api])

  const pad = (n: number) => String(n).padStart(2, "0")
  const total = releases.length

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-wide mb-4">
              New Release
            </h2>
            <p className="text-[#cccccc] text-sm md:text-base max-w-md mx-auto">
              AI映像表現の粋を凝縮した、最新の映像作品。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {/* 操作バー */}
          <div className="mb-6 md:mb-8">
            {/* スマホ：左に「01 / 07」、右に矢印 */}
            <div className="flex md:hidden items-center justify-between">
              <span className="font-serif text-sm text-white tracking-[0.3em]">
                {pad(range[0])}
                {range[1] !== range[0] && (
                  <>
                    <span className="text-white/40 mx-1">–</span>
                    {pad(range[1])}
                  </>
                )}
                <span className="text-white/30 mx-3">/</span>
                <span className="text-white/60">{pad(total)}</span>
              </span>
              <div className="flex items-center gap-3">
                <ArrowButton dir="prev" disabled={!canPrev} onClick={() => api?.scrollPrev()} />
                <ArrowButton dir="next" disabled={!canNext} onClick={() => api?.scrollNext()} />
              </div>
            </div>

            {/* PC：右上に矢印だけ */}
            <div className="hidden md:flex items-center justify-end gap-3">
              <ArrowButton dir="prev" disabled={!canPrev} onClick={() => api?.scrollPrev()} />
              <ArrowButton dir="next" disabled={!canNext} onClick={() => api?.scrollNext()} />
            </div>
          </div>

          {/* カルーセル：PCは3本＋4本目が少し見える、タブレットは2本＋α、スマホは1本＋α */}
          <Carousel setApi={setApi} opts={{ align: "start", inViewThreshold: 0.75 }} className="w-full">
            <CarouselContent className="py-4 -ml-6 md:-ml-10">
              {releases.map((release) => (
                <CarouselItem
                  key={release.videoId}
                  className="pl-6 md:pl-10 basis-[80%] sm:basis-[45%] md:basis-[30%]"
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
          </Carousel>

        </ScrollReveal>
      </div>
    </section>
  )
}

// 丸い矢印ボタン（端まで行った側は薄く表示）
function ArrowButton({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next"
  disabled: boolean
  onClick: () => void
}) {
  const Icon = dir === "prev" ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "前の作品" : "次の作品"}
      className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/40 text-white transition-all duration-300 hover:bg-white hover:text-black disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-white disabled:cursor-default"
    >
      <Icon className="w-5 h-5" />
    </button>
  )
}
