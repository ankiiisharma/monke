"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { InfluencerSection } from "@/components/influencer-section"
import { BrandsSection } from "@/components/brands-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Initialize smooth scrolling and animations
    const ctx = gsap.context(() => {
      // Fade in animations for sections
      gsap.utils.toArray<HTMLElement>(".section").forEach((section, i) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="relative overflow-hidden bg-[#111111]">
      <Navigation />
      <HeroSection />
      <WorkSection />
      <BrandsSection />
      <InfluencerSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

