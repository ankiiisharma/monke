"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "./ui/button";

const influencers = [
  {
    id: 1,
    name: "Ranveer Allahbadia",
    category: "Lifestyle & Fashion",
    image:
      "https://yt3.googleusercontent.com/7C3441cpOvw56JFXJROvuD5PhUWAGA-s0AHdjTFYNvSuLs5KySq9CuJOmjcD-Sl4gowG56zIVA=s900-c-k-c0x00ffffff-no-rj",
    followers: "10.5M+",
    social: {
      instagram: "https://www.instagram.com/beerbiceps/",
      twitter: "https://x.com/BeerBicepsGuy",
      youtube: "https://www.youtube.com/channel/UCneyi-aYq4VIBYIAQgWmk_w",
    },
    featured: false,
  },
  {
    id: 2,
    name: "Niharika Nm",
    category: "Actor & Model",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjBkMmNiMmEtMjE0NS00OGUxLWFjMjgtNzIyZGExYzA5MDZkXkEyXkFqcGc@._V1_.jpg",
    followers: "3.4M+",
    social: {
      instagram: "https://www.instagram.com/niharika_nm/?hl=en",
      twitter: "https://www.twitter.com/justniharikanm",
      youtube: "https://www.youtube.com/channel/UCxv6RL803_NWvnrNmJcgm0g",
    },
  },
  {
    id: 5,
    name: "Ruhee Dosani",
    category: "YouTuber",
    image:
      "https://www.entrepreneurindia.com/influencer/2024/images/ruhee-dosani.jpg",
    followers: "2.1M",
    social: {
      instagram: "https://www.instagram.com/ruheedosani/?hl=en",
      twitter: "#",
      youtube: "https://www.youtube.com/channel/UCr4Qo6Beh03ssylo8U0Ze0Q",
    },
    featured: true,
  },
  {
    id: 3,
    name: "Yashraj Mukhate",
    category: "Music Composer & YouTuber",
    image:
      "https://media.assettype.com/filmcompanion%2F2023-04%2F9d6f2567-df21-4daa-8d10-2f182004d758%2F3__2_.jpg?w=1024&auto=format%2Ccompress&fit=max",
    followers: "2.5M+",
    social: {
      instagram: "https://www.instagram.com/yashrajmukhate/?hl=en",
      twitter: "",
      youtube: "https://www.youtube.com/channel/UCBZQAxIn4Mxc2_P2LNsO_RA",
    },
    featured: false,
  },
  {
    id: 4,
    name: "Sanjyot Keer",
    category: "Chef & Food Blogger",
    image:
      "https://d3pc1xvrcw35tl.cloudfront.net/ln/images/1200x900/screenshot-2024-0508-191413_202405735568.png",
    followers: "277K+",
    social: {
      instagram: "https://www.instagram.com/sanjyotkeer/?hl=en",
      twitter: "#",
      youtube: "#",
    },
  },

  {
    id: 6,
    name: "BeYounick",
    category: "Comedy & Entertainment",
    image:
      "https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/socialketchup/media/media_files/2024/11/27/Hh1SQChmdgoIUtRnMSmZ.jpg",
    followers: "4.4M+",
    social: {
      instagram: "https://www.instagram.com/beyounick/?hl=en",
      twitter: "#",
      youtube: "https://www.youtube.com/user/beyounick",
    },
  },
];

export function InfluencerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Initial fade in animation
      gsap.from(".influencer-heading", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".influencer-heading",
          start: "top bottom",
        },
      });

      if (
        trackRef.current &&
        containerRef.current &&
        window.innerWidth >= 768
      ) {
        const cards = trackRef.current.querySelectorAll(".influencer-card");
        const cardWidth = cards[0].getBoundingClientRect().width;
        const totalScroll = (cards.length - 3) * cardWidth;

        // Set the track width
        trackRef.current.style.width = `${cards.length * (cardWidth + 16)}px`;

        // Horizontal scroll animation with centered pinning
        gsap.to(trackRef.current, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center",
            end: () => `+=${totalScroll}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onEnter: () => {
              gsap.to(containerRef.current, {
                duration: 0.3,
                opacity: 1,
              });
            },
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="influencers"
      ref={sectionRef}
      className="bg-[#0A0A0A] relative"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-transparent h-32" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="influencer-heading py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our <span className="text-primary">Creators</span>
              </h2>
              <p className="text-white/70 text-lg md:text-xl max-w-2xl">
                We represent some of the most influential creators across
                various niches.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="bg-primary px-6 py-3 rounded-xl">
                <p className="text-black font-semibold text-lg">
                  50+ Exclusive Creators
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
          {influencers.map((influencer) => (
            <InfluencerCard key={influencer.id} influencer={influencer} />
          ))}
        </div>

        {/* Desktop horizontal scroll */}
        <div
          ref={containerRef}
          className="hidden md:block h-screen relative opacity-0"
        >
          <div
            ref={trackRef}
            className="absolute top-1/2 -translate-y-1/2 left-0 flex gap-4"
          >
            {influencers.map((influencer) => (
              <div key={influencer.id} className="w-[360px] flex-shrink-0">
                <InfluencerCard influencer={influencer} />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center pb-10 pt-10">
          <Link href="/creators">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary  hover:text-black transition-all duration-300"
            >
              View All Creators
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function InfluencerCard({ influencer }: { influencer: any }) {
  // Determine if this card should have yellow styling
  const isYellowStyle = influencer.featured;

  return (
    <div className="influencer-card group relative rounded-2xl overflow-hidden">
      <div className="relative h-[450px] overflow-hidden">
        {/* Background gradient animation */}
        <div
          className={`absolute inset-0 ${
            isYellowStyle
              ? "bg-gradient-to-br from-primary/60 via-transparent to-primary/30"
              : "bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20"
          } opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        ></div>

        <Image
          src={influencer.image || "/placeholder.svg"}
          alt={influencer.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 ${
            isYellowStyle
              ? "bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"
              : "bg-gradient-to-t from-black/90 via-black/50 to-transparent"
          } opacity-80 group-hover:opacity-90 transition-all duration-500`}
        ></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
          <div className="flex flex-col items-start">
            <span
              className={`text-sm font-medium mb-2 ${
                isYellowStyle ? "text-black" : "text-primary"
              }`}
            >
              {influencer.category}
            </span>
            <h3
              className={`text-2xl font-bold mb-1 ${
                isYellowStyle ? "text-black" : "text-white"
              }`}
            >
              {influencer.name}
            </h3>
            <p
              className={`mb-4 ${
                isYellowStyle ? "text-black/80" : "text-white/70"
              }`}
            >
              {influencer.followers} Followers
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mb-6">
              <Link
                href={influencer.social.instagram}
                className={`${
                  isYellowStyle
                    ? "text-black hover:text-black/70"
                    : "text-white hover:text-primary"
                } transition-colors`}
              >
                <Instagram
                  size={20}
                  className="transform transition-transform duration-300 hover:scale-125"
                />
              </Link>
              <Link
                href={influencer.social.twitter}
                className={`${
                  isYellowStyle
                    ? "text-black hover:text-black/70"
                    : "text-white hover:text-primary"
                } transition-colors`}
              >
                <Twitter
                  size={20}
                  className="transform transition-transform duration-300 hover:scale-125"
                />
              </Link>
              <Link
                href={influencer.social.youtube}
                className={`${
                  isYellowStyle
                    ? "text-black hover:text-black/70"
                    : "text-white hover:text-primary"
                } transition-colors`}
              >
                <Youtube
                  size={20}
                  className="transform transition-transform duration-300 hover:scale-125"
                />
              </Link>
            </div>

            {/* View Profile Button */}
            {/* <Link
              href={`/creators/${influencer.id}`}
              className={`inline-flex items-center ${
                isYellowStyle
                  ? "text-black hover:text-black/80"
                  : "text-white hover:text-primary"
              } transition-colors`}
            >
              View Profile
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link> */}
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className={`absolute top-0 right-0 w-24 h-24 ${
            isYellowStyle
              ? "bg-gradient-to-bl from-black/30 to-transparent"
              : "bg-gradient-to-bl from-primary/30 to-transparent"
          } opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full`}
        ></div>
      </div>
    </div>
  );
}
