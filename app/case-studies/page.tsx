"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const caseStudies = [
  {
    id: 1,
    title: "boAt's Gen-Z Marketing Boom",
    client: "boAt",
    category: "Influencer & Digital Marketing",
    thumbnail:
      "https://media.licdn.com/dms/image/v2/D5622AQGc04PnvEKO6w/feedshare-shrink_800/feedshare-shrink_800/0/1711965024098?e=2147483647&v=beta&t=DIejylP1JTDO1z9ID0U-rb7jUjwAobeGuZu9plMxg70",
    description:
      "A digital-first campaign leveraging top influencers and social media trends, leading to a massive boost in engagement and brand awareness.",
    stats: [
      { label: "Reach", value: "15M+" },
      { label: "Engagement", value: "2M" },
      { label: "ROI", value: "350%" },
    ],
    tags: ["Audio", "Influencer Marketing", "Social Media"],
  },
  {
    id: 2,
    title: "Mamaearth's Sustainable Beauty Campaign",
    client: "Mamaearth",
    category: "Brand Awareness",
    thumbnail:
      "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2024-01/Mamaearth%20100th%20Store%20Launch.jpg",
    description:
      "A campaign promoting eco-friendly skincare and toxin-free beauty, engaging users with strong storytelling and influencer partnerships.",
    stats: [
      { label: "New Customers", value: "500K+" },
      { label: "User Engagement", value: "1.8M" },
      { label: "Sales Growth", value: "+65%" },
    ],
    tags: ["Beauty", "Sustainability", "Influencer Marketing"],
  },
  {
    id: 3,
    title: "Skybags’ Travel Storytelling Campaign",
    client: "Skybags",
    category: "Content Marketing",
    thumbnail: "https://i.ytimg.com/vi/pNatThF_T2w/maxresdefault.jpg",
    description:
      "A travel-focused campaign featuring user-generated content, travel influencers, and digital promotions that boosted product visibility.",
    stats: [
      { label: "Social Shares", value: "500K+" },
      { label: "New Customers", value: "100K+" },
      { label: "Conversion Rate", value: "45%" },
    ],
    tags: ["Travel", "UGC", "Branding"],
  },
  {
    id: 4,
    title: "Spotify Wrapped - Personalized Music Experience",
    client: "Spotify",
    category: "Data-Driven Marketing",
    thumbnail:
      "https://storage.googleapis.com/pr-newsroom-wp/1/2022/12/HM1_5188.jpg",
    description:
      "Spotify Wrapped campaign that turned user data into a viral marketing success, enhancing customer loyalty and global engagement.",
    stats: [
      { label: "User Participation", value: "60M+" },
      { label: "Shares", value: "10M+" },
      { label: "Engagement Rate", value: "70%" },
    ],
    tags: ["Music", "Data Analytics", "Viral Marketing"],
  },
  {
    id: 5,
    title: "Amazon Prime Video’s Web Series Launch Strategy",
    client: "Amazon Prime Video",
    category: "Entertainment Marketing",
    thumbnail:
      "https://marketing.x.com/content/dam/marketing-twitter/apac/en_gb/success-stories/amazon/header_image_amazon.jpg.twimg.1920.jpg",
    description:
      "An integrated campaign that combined social media hype, exclusive trailers, and influencer collaborations to drive massive engagement for a new web series.",
    stats: [
      { label: "Trailer Views", value: "20M+" },
      { label: "Subscriptions", value: "500K+" },
      { label: "Engagement", value: "4M+" },
    ],
    tags: ["Streaming", "Social Media", "Influencer Collaboration"],
  },
];

export default function CaseStudies() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".page-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }
      );

      // Case study cards animation
      gsap.fromTo(
        ".case-study-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".case-studies-grid",
            start: "top 80%",
          },
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      className="relative overflow-hidden bg-[#111111] min-h-screen"
    >
      <Navigation />

      <section className="pt-32 pb-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="page-heading mb-16 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case <span className="text-primary">Studies</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl">
              Explore our most successful campaigns and see how we've helped
              brands achieve their goals through innovative digital strategies.
            </p>
          </div>

          <div className="case-studies-grid space-y-24">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="case-study-card">
                <div
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={study.thumbnail || "/placeholder.svg"}
                        alt={study.title}
                        width={600}
                        height={400}
                        className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 rounded-full text-sm font-medium">
                        {study.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-primary text-sm font-medium mb-2">
                      {study.client}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {study.title}
                    </h2>
                    <p className="text-white/70 mb-6">{study.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.stats.map((stat, i) => (
                        <div key={i} className="bg-[#1A1A1A] p-4 rounded-lg">
                          <p className="text-primary text-2xl font-bold">
                            {stat.value}
                          </p>
                          <p className="text-white/70 text-sm">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-[#222222] text-white/80 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${study.id}`}
                      className="group inline-flex items-center text-primary hover:text-white transition-colors mt-auto self-start"
                    >
                      View Full Case Study
                      <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/70 mb-6">
              Want to see how we can help your brand?
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
