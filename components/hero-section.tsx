"use client"

import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden">
      {/* Full-screen hero image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-dark.jpg')`,
        }}
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.8) 70%, #000000 100%)",
        }}
      />

      {/* Content */}
      <div className="w-full px-6 md:pl-24 relative z-10">
        <div className="w-full md:w-3/5 text-left">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-serif text-5xl md:text-[7.5rem] font-bold tracking-[0.1em] mb-10 text-[#39FF14]"
            style={{
              textShadow: "0 0 20px rgba(57, 255, 20, 0.6), 0 0 40px rgba(57, 255, 20, 0.3)",
            }}
          >
            AI DREAM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="text-[#DDE8EE] text-xl md:text-5xl font-serif font-semibold italic tracking-wider leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] max-w-3xl"
          >
            オーダーメイドの世界観を、<br />
            AIで映像に
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
            className="mt-6 font-mono text-base md:text-lg tracking-[0.3em] text-white/60"
            style={{
              textShadow: "0 1px 6px rgba(0,0,0,0.6)",
            }}
          >
            AI CREATOR / VISUAL × MUSIC × STORY
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator arrow */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        href="#works"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-neutral-500 transition-all duration-300 hover:text-[#39FF14]"
        aria-label="Scroll to works"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  )
}
