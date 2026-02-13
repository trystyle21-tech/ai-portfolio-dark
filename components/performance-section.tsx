"use client"

import { useEffect, useMemo, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

const slides = [
    { id: 1, src: "/slide1.png?v=2", alt: "Performance Slide 1" },
    { id: 2, src: "/slide2.png", alt: "Performance Slide 2" },
    { id: 3, src: "/slide3.png", alt: "Performance Slide 3" },
    { id: 4, src: "/slide4.png", alt: "Performance Slide 4" },
]

const mod = (n: number, m: number) => ((n % m) + m) % m

export function PerformanceSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [translateX, setTranslateX] = useState(520)

    useEffect(() => {
        const getTranslateXValue = () => {
            if (window.innerWidth >= 1024) return 560 // lg
            if (window.innerWidth >= 768) return 500  // md
            return 380                               // sm
        }
        const handleResize = () => setTranslateX(getTranslateXValue())
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const total = slides.length
    const prevIndex = useMemo(() => mod(activeIndex - 1, total), [activeIndex, total])
    const nextIndex = useMemo(() => mod(activeIndex + 1, total), [activeIndex, total])

    const handlePrev = () => setActiveIndex((p) => (p === 0 ? total - 1 : p - 1))
    const handleNext = () => setActiveIndex((p) => (p === total - 1 ? 0 : p + 1))

    return (
        <section className="w-full flex flex-col items-center justify-center py-20 md:py-32 bg-black overflow-hidden">
            <div className="text-center px-6">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-wide mb-4">
                    Performance
                </h2>
                <p className="text-[#cccccc] text-sm md:text-base max-w-xl mx-auto mb-16 md:mb-20">
                    数値が証明する。共感と熱狂が生み出した、確かな成果の記録。
                </p>
            </div>

            <ScrollReveal delay={0.1}>
                <div className="relative flex items-center justify-center w-full max-w-6xl px-4">
                    {/* Prev */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 md:left-0 lg:-left-10 z-20 p-2 text-white/60 hover:text-white transition-colors"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>

                    {/* Stage */}
                    <div className="relative w-[min(92vw,980px)] h-[min(56vw,552px)] md:w-[980px] md:h-[552px]">
                        {slides.map((s, index) => {
                            // 中央・左・右だけ描画（3枚固定）
                            const pos =
                                index === activeIndex ? 0 : index === prevIndex ? -1 : index === nextIndex ? 1 : null
                            if (pos === null) return null

                            const isActive = pos === 0
                            const translateY = isActive ? 0 : 42

                            const transform = `translateX(${pos * translateX}px) translateY(${translateY}px) scale(${isActive ? 1.03 : 0.90
                                })`

                            const opacity = isActive ? 1 : 0.32
                            const zIndex = isActive ? 10 : 0

                            // 静止画の文字が読めるよう、ADより控えめに
                            const filter = isActive ? "none" : "grayscale(25%)"

                            return (
                                <div
                                    key={s.id}
                                    className={cn(
                                        "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out",
                                        isActive ? "cursor-default" : "cursor-pointer"
                                    )}
                                    style={{ transform, opacity, zIndex, filter }}
                                    onClick={() => !isActive && setActiveIndex(index)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (!isActive && (e.key === "Enter" || e.key === " ")) setActiveIndex(index)
                                    }}
                                    aria-label={`Go to slide ${s.id}`}
                                >
                                    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                                        <img
                                            src={s.src}
                                            alt={s.alt}
                                            className="w-full h-full object-contain"
                                            draggable={false}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Next */}
                    <button
                        onClick={handleNext}
                        className="absolute right-2 md:right-0 lg:-right-10 z-20 p-2 text-white/60 hover:text-white transition-colors"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>
                </div>

                {/* Counter + hint */}
                <div className="mt-10 flex flex-col justify-center items-center gap-2">
                    <span className="font-serif text-base md:text-lg text-white tracking-[0.35em]">
                        {String(activeIndex + 1).padStart(2, "0")}
                        <span className="text-white/30 mx-3">/</span>
                        {String(total).padStart(2, "0")}
                    </span>
                </div>
            </ScrollReveal>
        </section>
    )
}
