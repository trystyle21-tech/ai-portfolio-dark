"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const artworks = [
  {
    id: 1,
    title: "Artwork 1",
    thumbnail: "/art-01.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 2,
    title: "Artwork 2",
    thumbnail: "/art-02.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 3,
    title: "Artwork 3",
    thumbnail: "/art-03.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 4,
    title: "Artwork 4",
    thumbnail: "/art-04.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 5,
    title: "Artwork 5",
    thumbnail: "/art-05.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 6,
    title: "Artwork 6",
    thumbnail: "/art-06.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 7,
    title: "Artwork 7",
    thumbnail: "/art-07.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 8,
    title: "Artwork 8",
    thumbnail: "/art-08.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 9,
    title: "Artwork 9",
    thumbnail: "/art-09.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 10,
    title: "Artwork 10",
    thumbnail: "/art-10.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 11,
    title: "Artwork 11",
    thumbnail: "/art-11.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 12,
    title: "Artwork 12",
    thumbnail: "/art-12.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 13,
    title: "Artwork 13",
    thumbnail: "/art-13.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 14,
    title: "Artwork 14",
    thumbnail: "/art-14.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 15,
    title: "Artwork 15",
    thumbnail: "/art-15.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 16,
    title: "Artwork 16",
    thumbnail: "/art-16.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 17,
    title: "Artwork 17",
    thumbnail: "/art-17.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 18,
    title: "Artwork 18",
<<<<<<< HEAD
    thumbnail: "/art-18.jpg?v=2",
=======
    thumbnail: "/art-18.jpg",
>>>>>>> 386e48d20d2c6248f78d6c7b2f1ee17d13a1fda1
    aspectRatio: "square" as const,
  },
  {
    id: 19,
    title: "Artwork 19",
    thumbnail: "/art-19.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 20,
    title: "Artwork 20",
    thumbnail: "/art-20.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 21,
    title: "Artwork 21",
    thumbnail: "/art-21.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 22,
    title: "Artwork 22",
<<<<<<< HEAD
    thumbnail: "/art-22.jpg?v=2",
=======
    thumbnail: "/art-22.jpg",
>>>>>>> 386e48d20d2c6248f78d6c7b2f1ee17d13a1fda1
    aspectRatio: "square" as const,
  },
  {
    id: 23,
    title: "Artwork 23",
    thumbnail: "/art-23.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 24,
    title: "Artwork 24",
    thumbnail: "/art-24.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 25,
    title: "Artwork 25",
    thumbnail: "/art-25.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 26,
    title: "Artwork 26",
    thumbnail: "/art-26.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 27,
    title: "Artwork 27",
    thumbnail: "/art-27.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 28,
    title: "Artwork 28",
    thumbnail: "/art-28.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 29,
    title: "Artwork 29",
    thumbnail: "/art-29.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 30,
    title: "Artwork 30",
    thumbnail: "/art-30.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 31,
    title: "Artwork 31",
    thumbnail: "/art-31.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 32,
    title: "Artwork 32",
    thumbnail: "/art-32.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 33,
    title: "Artwork 33",
    thumbnail: "/art-33.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 34,
    title: "Artwork 34",
    thumbnail: "/art-34.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 35,
    title: "Artwork 35",
<<<<<<< HEAD
    thumbnail: "/art-35.jpg?v=2",
=======
    thumbnail: "/art-35.jpg",
>>>>>>> 386e48d20d2c6248f78d6c7b2f1ee17d13a1fda1
    aspectRatio: "landscape" as const,
  },
  {
    id: 36,
    title: "Artwork 36",
    thumbnail: "/art-36.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 37,
    title: "Artwork 37",
    thumbnail: "/art-37.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 38,
    title: "Artwork 38",
    thumbnail: "/art-38.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 39,
    title: "Artwork 39",
    thumbnail: "/art-39.jpg",
    aspectRatio: "landscape" as const,
  },
  {
    id: 40,
    title: "Artwork 40",
    thumbnail: "/art-40.jpg",
    aspectRatio: "square" as const,
  },
  {
    id: 41,
    title: "Artwork 41",
    thumbnail: "/art-41.jpg",
    aspectRatio: "landscape" as const,
  },
]

export function ArtworksSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1))
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background">
      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide mb-4">Artworks</h2>
          <p className="text-[#cccccc] text-sm md:text-base max-w-md mx-auto">
            色彩と感性が織りなす、鮮やかで洗練された「美」の世界観。
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {artworks.map((artwork, index) => (
            <ScrollReveal key={artwork.id} delay={index * 0.1}>
              <div className="break-inside-avoid mb-4 group cursor-pointer" onClick={() => openLightbox(index)}>
                <div
                  className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]"
                >
                  <img
                    src={artwork.thumbnail || "/placeholder.svg"}
                    alt={artwork.title}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
            aria-label="閉じる"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            aria-label="前の作品"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Main image */}
          <div className="max-w-6xl max-h-[80vh] px-16 md:px-24" onClick={(e) => e.stopPropagation()}>
            <img
              src={artworks[currentIndex].thumbnail || "/placeholder.svg"}
              alt={artworks[currentIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6">
              <p className="text-white font-serif text-xl">{artworks[currentIndex].title}</p>
            </div>
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            aria-label="次の作品"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {currentIndex + 1} / {artworks.length}
          </div>
        </div>
      )}
    </section>
  )
}
