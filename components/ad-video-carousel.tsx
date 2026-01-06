'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

const adVideos = [
  {
    id: 1,
    thumbnail: '/ad-01.jpg',
    youtubeUrl: 'https://youtube.com/shorts/vsro-H03T0c',
  },
  {
    id: 2,
    thumbnail: '/ad-02.jpg',
    youtubeUrl: 'https://youtube.com/shorts/FN-STv4x_x0',
  },
  {
    id: 3,
    thumbnail: '/ad-03.jpg',
    youtubeUrl: 'https://youtube.com/shorts/qcu8bZ7LBuU',
  },
]

export function AdVideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [translateX, setTranslateX] = useState(240)

  useEffect(() => {
    const getTranslateXValue = () => {
      if (window.innerWidth >= 1024) { // lg
        return 300
      }
      if (window.innerWidth >= 768) { // md
        return 280
      }
      return 240 // sm
    }

    const handleResize = () => {
      setTranslateX(getTranslateXValue())
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? adVideos.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === adVideos.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 md:py-32 bg-background overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide mb-4">
          Advertising Short Videos
        </h2>
        <p className="text-[#cccccc] text-sm md:text-base max-w-xl mx-auto">
          視線を奪い、記憶に刻む。ブランドの価値を最大化する、高密度な映像体験。
        </p>
      </div>

      <div className="relative flex items-center justify-center w-full max-w-5xl px-4">
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-0 lg:-left-8 z-20 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Previous Video"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>

        <div className="relative h-[min(80vh,560px)] w-[min(90vw,340px)] md:h-[620px] md:w-[360px] lg:h-[680px] lg:w-[400px]">
          {adVideos.map((video, index) => {
            const offset = index - activeIndex
            const isVisible = Math.abs(offset) <= 1

            if (!isVisible) return null

            const transform = `translateX(${offset * translateX}px) scale(${offset === 0 ? 1.1 : 0.8})`
            const opacity = offset === 0 ? 1 : 0.4
            const zIndex = offset === 0 ? 10 : 0
            const filter = offset === 0 ? 'grayscale(0)' : 'grayscale(80%)'

            const slideContent = (
              <div className="relative w-full h-full">
                <img
                  src={video.thumbnail}
                  alt={`Ad Video ${video.id}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
                {offset === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Play
                        className="text-white fill-white ml-1"
                        size={32}
                      />
                    </div>
                  </div>
                )}
              </div>
            )

            return (
              <div
                key={video.id}
                className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out"
                style={{
                  transform,
                  opacity,
                  zIndex,
                  filter,
                }}
              >
                {offset === 0 ? (
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch Ad Video ${video.id}`}
                  >
                    {slideContent}
                  </a>
                ) : (
                  slideContent
                )}
              </div>
            )
          })}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-0 lg:-right-8 z-20 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Next Video"
        >
          <ChevronRight className="w-10 h-10" />
        </button>
      </div>
    </section>
  )
}
