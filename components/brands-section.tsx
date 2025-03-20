"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const brands = [
  {
    id: 1,
    name: "Stripe",
    logo: "https://cdn.worldvectorlogo.com/logos/nike.svg",
  },
  {
    id: 2,
    name: "Slack",
    logo: "https://cdn.worldvectorlogo.com/logos/instagram-2.svg",
  },
  {
    id: 3,
    name: "AWS",
    logo: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg",
  },
  {
    id: 4,
    name: "Docker",
    logo: "https://cdn.worldvectorlogo.com/logos/facebook.svg",
  },
  {
    id: 5,
    name: "GitHub",
    logo: "https://cdn.worldvectorlogo.com/logos/youtube-2.svg",
  },
  {
    id: 6,
    name: "MongoDB",
    logo: "https://cdn.worldvectorlogo.com/logos/lenovo-2.svg",
  },
  {
    id: 7,
    name: "Vercel",
    logo: "https://cdn.worldvectorlogo.com/logos/binance.svg",
  },
  {
    id: 8,
    name: "Firebase",
    logo: "https://cdn.worldvectorlogo.com/logos/tinder-2.svg",
  },
  {
    id: 9,
    name: "Figma",
    logo: "https://cdn.worldvectorlogo.com/logos/netflix-2.svg",
  },
  {
    id: 10,
    name: "Next.js",
    logo: "https://cdn.worldvectorlogo.com/logos/flipkart.svg",
  },
  {
    id: 11,
    name: "Redis",
    logo: "https://cdn.worldvectorlogo.com/logos/zomato-1.svg",
  },
  {
    id: 12,
    name: "Digital Ocean",
    logo: "https://cdn.worldvectorlogo.com/logos/samsung.svg",
  },
];

export function BrandsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".brands-heading",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".brand-card",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: {
            amount: 1,
            grid: "auto",
          },
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".brands-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="brands"
      ref={sectionRef}
      className="section relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-primary to-primary"
    >
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="brands-heading text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-6">
            Empowering Connections Between Brands and Influencers
          </h2>
          <p className="text-lg text-slate-600">
            Partner with us to access a network of top influencers and create
            impactful campaigns that resonate with your audience.
          </p>
        </div>
        <div className="brands-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="brand-card group relative bg-white rounded-xl p-6 transition-all duration-300
                         hover:shadow-xl hover:shadow-slate-200/50 border border-slate-100
                         hover:border-slate-200 hover:-translate-y-1"
            >
              <div className="aspect-[3/2] flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={80}
                  className="w-24 h-12 object-contain grayscale opacity-60 
                           transition-all duration-300 group-hover:grayscale-0 
                           group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              value: "100+",
              label: "Creators",
              subtext: "in our network",
            },
            {
              value: "100+",
              label: "Campaigns Done",
              subtext: "With crazy results",
            },
            {
              value: "4.9/5",
              label: "Clients Rating",
              subtext: "From 100+ reviews",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-xl p-8 text-center
                         shadow-lg shadow-slate-100/50 hover:shadow-xl 
                         hover:shadow-slate-200/50 transition-all duration-300"
            >
              <h3
                className="text-4xl font-bold bg-clip-text text-transparent 
                            bg-gradient-to-r from-slate-900 to-slate-700 mb-2"
              >
                {stat.value}
              </h3>
              <p className="text-lg font-medium text-slate-700 mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-slate-500">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
