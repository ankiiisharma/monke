"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Summer Fashion Campaign",
    client: "Fashion Brand X",
    thumbnail: "/images/skybags.png",
    video: "/videos/skybags.mp4",
  },
  {
    id: 2,
    title: "Tech Product Launch",
    client: "Tech Company Y",
    thumbnail: "/placeholder.svg?height=400&width=600",
    video: "#",
  },
  {
    id: 3,
    title: "Food Festival Highlights",
    client: "Food Delivery Z",
    thumbnail: "/placeholder.svg?height=400&width=600",
    video: "#",
  },
  {
    id: 4,
    title: "Travel Vlog Series",
    client: "Travel Agency A",
    thumbnail: "/placeholder.svg?height=400&width=600",
    video: "#",
  },
  {
    id: 5,
    title: "Fitness Challenge",
    client: "Fitness Brand B",
    thumbnail: "/placeholder.svg?height=400&width=600",
    video: "#",
  },
  {
    id: 6,
    title: "Beauty Tutorial",
    client: "Cosmetics Brand C",
    thumbnail: "/placeholder.svg?height=400&width=600",
    video: "#",
  },
];

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".video-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Video cards animation
      gsap.fromTo(
        ".video-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".video-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="section py-20 md:py-32 bg-[#0A0A0A]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="video-heading mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl">
            Explore our portfolio of video productions, digital campaigns, and
            creative content.
          </p>
        </div>

        <div className="video-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card video-hover-container relative rounded-xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setActiveVideo(video.id)}
              onMouseLeave={() => setActiveVideo(null)}
            >
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="video-thumbnail object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="play-button opacity-0 transition-opacity duration-300 bg-primary rounded-full p-4">
                    <Play className="h-8 w-8 text-black" />
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-xl font-bold text-white">
                    {video.title}
                  </h3>
                  <p className="text-primary">{video.client}</p>
                </div>
              </div>

              {/* Video Preview (would be implemented with actual video player) */}
              {activeVideo === video.id && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                  <p className="text-white">Video would play here</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/case-studies"
            className="inline-block text-primary border-b-2 border-primary pb-1 text-lg hover:text-white hover:border-white transition-colors"
          >
            View Our Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
