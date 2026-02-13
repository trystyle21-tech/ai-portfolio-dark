import { Instagram, Youtube } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="bg-background px-6 py-24 md:px-12 lg:px-24 lg:py-32">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <ScrollReveal>
          <h2 className="mb-12 font-serif text-3xl font-normal tracking-wide text-foreground md:mb-16 md:text-4xl lg:text-5xl">
            About Me
          </h2>
        </ScrollReveal>

        {/* Bio text */}
        <div className="w-full text-left">
          <ScrollReveal delay={0.1}>
            <p className="mb-8 text-base leading-loose text-[#cccccc] md:text-lg md:leading-loose whitespace-pre-line">
              「テクノロジー」と「感性」の融合により、まだ見ぬ美しい世界を。
              <br /><br />
              私は、AI技術と独自の美的感覚を掛け合わせ、映像・音楽・ビジュアルアートの境界を越えた新しいクリエイティブを追求しています。
              <br /><br />
              幻想的な世界観の構築から、ビジネスに響くビジュアル制作まで。あなたの想像を形にするパートナーとして、新しい価値を創造します。
            </p>
            <p className="mb-8 text-sm text-[#cccccc]">
              ※このWebサイトも、AIとの対話（バイブコーディング）によって構築された作品のひとつです。
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <a
            href="https://forms.gle/dU9YNypc6hASiJ8d9"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-16 inline-flex items-center justify-center border border-foreground bg-transparent px-10 py-3 text-sm tracking-widest text-foreground transition-all duration-300 hover:bg-foreground hover:text-background md:mb-20"
          >
            Contact
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="flex items-center justify-center gap-8 md:gap-10">
            {/* Instagram - emphasized with larger size */}
            <a
              href="https://www.instagram.com/ai.dream.art3"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-foreground transition-all duration-300 hover:text-pink-500"
              aria-label="Instagram"
            >
              <Instagram className="h-7 w-7 md:h-8 md:w-8" />
              <span className="text-xs tracking-widest opacity-70 group-hover:opacity-100">Instagram</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@ai.dream.art3"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-[#cccccc] transition-all duration-300 hover:text-foreground"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-5 w-5 md:h-6 md:w-6" />
              <span className="text-xs tracking-widest opacity-70 group-hover:opacity-100">TikTok</span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@ai_dream_art33"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-[#cccccc] transition-all duration-300 hover:text-foreground"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 md:h-6 md:w-6" />
              <span className="text-xs tracking-widest opacity-70 group-hover:opacity-100">YouTube</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
