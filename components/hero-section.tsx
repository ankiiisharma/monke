"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation timeline
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-scroll-indicator",
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.2"
        );

      // Bento grid animation
      gsap.fromTo(
        ".bento-image",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // Floating animation for bento images
      gsap.to(".bento-image-1", {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".bento-image-2", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.to(".bento-image-3", {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.3,
      });

      gsap.to(".bento-image-4", {
        y: -8,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.7,
      });

      // Parallax effect on scroll
      gsap.to(".hero-parallax", {
        y: 100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 px-4"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-[#111111] to-[#0A0A0A]"></div>

      {/* Hero Content */}
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-center md:text-left pb-8 md:pb-0">
            <h1 className="hero-title text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight">
              <span className="block">Amplifying</span>
              <span className="text-primary">Creators</span>
              <span className="block">& Brands</span>
            </h1>

            <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
              A 360° creative digital media organization bringing together
              Talent Management, Video Production, Social Media Management, and
              Influencer Marketing.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 text-base md:text-lg font-semibold w-full sm:w-auto"
                onClick={() => {
                  window.location.href = "/case-studies";
                }}
              >
                <span className="truncate">Read the case studies</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>

          {/* Bento Grid of Images - Only visible on md and above */}
          <div className="hidden md:grid grid-cols-4 gap-4 md:gap-6 relative">
            <div className="bento-image bento-image-1 col-span-2 row-span-2 rounded-2xl overflow-hidden h-80 transform transition-transform duration-700 hover:scale-105 hover:z-10  border  border-slate-600/90">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D22AQFJXKadlvleMg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1717598561725?e=1745452800&v=beta&t=EfZqTQHa5Ys2hXuJLcJFjTsUR-f1v87Hm2bAXA8yp44"
                alt="Creator content"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>

            <div className="bento-image bento-image-2 rounded-2xl overflow-hidden h-40 transform transition-transform duration-700 hover:scale-105 hover:z-10  border border-slate-600/90">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D22AQG8E8aGojWs1g/feedshare-shrink_1280/feedshare-shrink_1280/0/1711205700066?e=1745452800&v=beta&t=d0SDakIPuYXd6S1IG3XGBLlG82BkU7FDTIwkiUuUwS4"
                alt="Brand collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>

            <div className="bento-image bento-image-3 rounded-2xl overflow-hidden h-40 transform transition-transform duration-700 hover:scale-105 hover:z-10 border  border-slate-600/90">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D22AQF0OUETs7hM8w/feedshare-shrink_1280/feedshare-shrink_1280/0/1711205700589?e=1745452800&v=beta&t=gUlXhRQDxxD-Akf1Y09FyWo466WEM58cOvFv6j4uKZU"
                alt="Video production"
                fill
                className="object-cove"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>

            <div className="bento-image bento-image-4 col-span-2 rounded-2xl overflow-hidden h-80 transform transition-transform duration-700 hover:scale-105 hover:z-10  border border-slate-600/90">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D22AQHgA6J_pw6LIA/feedshare-shrink_800/feedshare-shrink_800/0/1726918235826?e=1745452800&v=beta&t=2ERbRaKgBFplSWeQQbzOgxd5YB8VOm8OgDjRsYwnDm8"
                alt="Social media content"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>

            {/* Yellow Accent Circle */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/30 blur-3xl animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
