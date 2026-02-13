'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const musicData = [
  { src: "/music-01.jpg", href: "https://youtube.com/shorts/w-f7MfVEISM" },
  { src: "/music-02.jpg", href: "https://youtu.be/8esu8MzBJSo" },
  { src: "/music-03.jpg", href: "https://youtube.com/shorts/Zm_UJxQhAzU" },
  { src: "/music-04.jpg", href: "https://youtube.com/shorts/v7v5l1U4p6c" },
  { src: "/music-05.jpg", href: "https://youtu.be/Lw0xM767b18" },
  { src: "/music-06.jpg", href: "https://youtu.be/nf814v22x4w" },
  { src: "/music-07.jpg", href: "https://youtube.com/shorts/xLGkSJQM0JQ" },
  { src: "/music-08.jpg", href: "https://youtube.com/shorts/Pcq1bgXdJW0" },
  { src: "/music-09.jpg", href: "https://youtube.com/shorts/OAllIBIEJfE" },
  { src: "/music-10.jpg", href: "https://youtu.be/XtK3iKdFqvk" },
  { src: "/music-11.jpg", href: "https://youtu.be/xe24GA_tZms" },
];

export function ReleasedMusicSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [slideClasses, setSlideClasses] = useState<string[]>([]);
  const autoplayPlugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }));

  const updateClasses = (apiInstance: CarouselApi) => {
    if (!apiInstance) return;
    const total = apiInstance.scrollSnapList().length;
    if (total === 0) return;
    const selected = apiInstance.selectedScrollSnap();

    const newClasses = musicData.map((_, index) => {
      if (index === selected) return 'is-active';
      const prev1 = (selected - 1 + total) % total;
      if (index === prev1) return 'is-prev';
      const next1 = (selected + 1) % total;
      if (index === next1) return 'is-next';
      const prev2 = (selected - 2 + total) % total;
      if (index === prev2) return 'is-prev-2';
      const next2 = (selected + 2) % total;
      if (index === next2) return 'is-next-2';
      return '';
    });
    setSlideClasses(newClasses);
  };

  useEffect(() => {
    if (!api) return;
    updateClasses(api);
    api.on("select", () => updateClasses(api));
    api.on("reInit", () => updateClasses(api));

    return () => {
      api.off("select", updateClasses);
      api.off("reInit", updateClasses);
    };
  }, [api]);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide mb-4">
          Released Music
        </h2>
        <p className="text-[#cccccc] text-sm md:text-base max-w-xl mx-auto mb-8 md:mb-12">
          物語と感情を音に託して。世界観から生まれた、配信中のオリジナル楽曲。
        </p>
      </div>

      <div className="relative w-full flex justify-center">
        <Carousel
          setApi={setApi}
          plugins={[autoplayPlugin.current]}
          opts={{ align: "center", loop: true, slidesToScroll: 1 }}
          className="w-full max-w-6xl"
        >
          <CarouselContent className="py-16">
            {musicData.map((music, index) => (
              <CarouselItem key={index} className={`basis-2/5 md:basis-1/3 relative ${slideClasses[index] || ''}`}>
                <div className="carousel-item-content">
                  <Link href={music.href} target="_blank" rel="noopener noreferrer" className="block group outline-none">
                    <div className="relative w-full overflow-hidden rounded-xl bg-background shadow-2xl" style={{ aspectRatio: "1/1" }}>
                      <Image
                        alt={`Music ${index + 1}`}
                        className="w-full h-full object-cover"
                        height={400}
                        src={music.src}
                        width={400}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                        <PlayIcon className="h-12 w-12 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <style jsx global>{`
        .carousel-item-content {
            transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
        }
        .is-active {
          z-index: 20;
        }
        .is-active .carousel-item-content {
          transform: scale(1.2);
          opacity: 1;
        }

        .is-prev {
          z-index: 15;
        }
        .is-prev .carousel-item-content {
          transform: scale(0.85) translateX(35%);
          opacity: 0.7;
        }

        .is-next {
          z-index: 10;
        }
        .is-next .carousel-item-content {
          transform: scale(0.85) translateX(-35%);
          opacity: 0.7;
        }

        .is-prev-2 {
          z-index: 5;
        }
        .is-prev-2 .carousel-item-content {
          transform: scale(0.75) translateX(70%);
          opacity: 0.4;
        }

        .is-next-2 {
          z-index: 0;
        }
        .is-next-2 .carousel-item-content {
          transform: scale(0.75) translateX(-70%);
          opacity: 0.4;
        }
      `}</style>
    </section>
  );
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
