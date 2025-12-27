import { HeroSection } from "@/components/hero-section"
import { ShortsSection } from "@/components/shorts-section"
import { MusicVideoSection } from "@/components/music-video-section"
import { ArtworksSection } from "@/components/artworks-section"
import { AboutSection } from "@/components/about-section"
import { ToolsSection } from "@/components/tools-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <HeroSection />
      <ShortsSection />
      <MusicVideoSection />
      <ArtworksSection />
      <AboutSection />
      <ToolsSection />
      <Footer />
    </main>
  )
}
