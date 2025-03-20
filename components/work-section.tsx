"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const workItems = [
  {
    id: 1,
    title: "Go Cashless with Muvincard",
    client: "Muvin",
    category: "Marketing",
    thumbnail:
      "https://dl.fastvideosave.net/?url=https%3A%2F%2Fscontent-iad3-2.cdninstagram.com%2Fv%2Ft51.2885-15%2F309283364_3335653126758549_1006051299706265035_n.jpg%3Fstp%3Ddst-jpg_e15_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi41NDB4OTYwLnNkci5mMzYzMjkuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9%26_nc_ht%3Dscontent-iad3-2.cdninstagram.com%26_nc_cat%3D109%26_nc_oc%3DQ6cZ2QFKdd6X-XeKMzPjt371X4wpBlJby5UA4dUFtoeGzrZDo0YI7F5pXpSOcFYmyGX9Aj0%26_nc_ohc%3DE4Y2f3e-1_8Q7kNvgHtHxyC%26_nc_gid%3D0XXB4bfpRUTduKcisy995g%26edm%3DAPs17CUBAAAA%26ccb%3D7-5%26ig_cache_key%3DMjkzNzI3MzA4NzkyNjI2MDY0MA%253D%253D.3-ccb7-5%26oh%3D00_AYEdGLEf9aYp2NxX5_O2x9Im_QEI-Iy0wtP0yVgZAlEjDQ%26oe%3D67E1EFBC%26_nc_sid%3D10d13b",
    size: "large", // large item in the grid
    video: "/videos/muvin.mp4",
    featured: false,
  },
  {
    id: 2,
    title: "BoAt x Monk-E",
    client: "Boat lifestyle",
    category: "Video Production",
    thumbnail:
      "https://static.startuptalky.com/2024/12/boAt-Business-Model-StartupTalky.jpg",
    size: "small",
    video: "/videos/boat.mp4",
  },
  {
    id: 3,
    title: "Skybags new collection launch",
    client: "Skybags",
    category: "Marketing",
    thumbnail: "/images/skybags.png",
    size: "small",
    video: "videos/skybags.mp4",
  },
  {
    id: 4,
    title: "Nykaa new haul launch",
    client: "Nykaa",
    category: "Marketing",
    thumbnail:
      "https://static.startuptalky.com/2025/03/Nykaa-Marketing-Strategy-StartupTalky.jpg",
    size: "medium",
    video: "https://cdn.pixabay.com/video/2025/01/19/253436_large.mp4",
    featured: false,
  },
  {
    id: 5,
    title: "Parle Diwali Video",
    client: "Parle",
    category: "Video Production",
    thumbnail:
      "https://m.economictimes.com/thumb/msid-88080069,width-1200,height-900,resizemode-4,imgsize-52928/parle-g-getty-images.jpg",
    size: "small",
    video: "https://cdn.pixabay.com/video/2025/01/19/253436_large.mp4",
  },
  {
    id: 6,
    title: "Wow launch video",
    client: "Wow Skincare",
    category: "Video Production",
    thumbnail:
      "https://infowordpress.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/21065943/wow-skin-science-case-study.webp",
    size: "small",
    video: "https://cdn.pixabay.com/video/2025/01/19/253436_large.mp4",
  },
];

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".work-heading",
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

      // Bento grid items animation
      gsap.fromTo(
        ".bento-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bento-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (itemId: number) => {
    setActiveItem(itemId);
    if (videoRefs.current[itemId]) {
      videoRefs.current[itemId].play();
    }
  };

  const handleMouseLeave = (itemId: number) => {
    setActiveItem(null);
    if (videoRefs.current[itemId]) {
      videoRefs.current[itemId].pause();
      videoRefs.current[itemId].currentTime = 0;
    }
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="section py-20 md:py-32 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#111111] to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="work-heading mb-12">
          <div className="inline- py-2 rounded-full mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Our Work
            </h2>
          </div>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl">
            Explore our portfolio of video productions, digital campaigns, and
            creative content.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {workItems.map((item) => {
            // Determine grid span based on size
            let gridClass = "";
            if (item.size === "large") {
              gridClass = "md:col-span-2 md:row-span-2";
            } else if (item.size === "medium") {
              gridClass = "md:col-span-2 md:row-span-1";
            }

            // Determine if this item should have a yellow background
            const isYellowBg = item.featured;

            return (
              <div
                key={item.id}
                className={`bento-item group relative overflow-hidden rounded-2xl ${gridClass}`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
              >
                <div className="relative w-full h-full aspect-square">
                  <Image
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                      activeItem === item.id ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  <video
                    ref={(el) => {
                      if (el) {
                        videoRefs.current[item.id] = el;
                      }
                    }}
                    src={item.video}
                    className={`absolute inset-0 w-full h-full object-cover ${
                      activeItem === item.id ? "opacity-100" : "opacity-0"
                    }`}
                    playsInline
                    muted
                    loop
                  />

                  {/* Overlay - Yellow for featured items */}
                  <div
                    className={`absolute inset-0 ${
                      isYellowBg
                        ? "bg-gradient-to-t from-primary/90 via-primary/60 to-primary/30"
                        : "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    } opacity-70 group-hover:opacity-90 transition-opacity duration-300`}
                  ></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                      <span
                        className={`text-sm font-medium mb-2 inline-block ${
                          isYellowBg ? "text-black" : "text-primary"
                        }`}
                      >
                        {item.category}
                      </span>
                      <h3
                        className={`text-xl md:text-2xl font-bold mb-1 ${
                          isYellowBg ? "text-black" : "text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`mb-4 ${
                          isYellowBg ? "text-black/80" : "text-white/70"
                        }`}
                      >
                        {item.client}
                      </p>

                      <Link
                        href={`/case-studies/${item.id}`}
                        className={`inline-flex items-center ${
                          isYellowBg
                            ? "text-black hover:text-black/80"
                            : "text-white hover:text-primary"
                        } transition-colors`}
                      >
                        View Project
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Play Button for Video Items */}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/case-studies">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary  hover:text-black transition-all duration-300"
            >
              View All Case Studies
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
