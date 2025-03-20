"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// Sample case study data - in a real app, this would come from a database or API
const caseStudies = [
  {
    id: "1",
    title: "boAt's Gen-Z Marketing Boom",
    client: "boAt",
    category: "Influencer & Digital Marketing",
    thumbnail:
      "https://media.licdn.com/dms/image/v2/D5622AQGc04PnvEKO6w/feedshare-shrink_800/feedshare-shrink_800/0/1711965024098?e=2147483647&v=beta&t=DIejylP1JTDO1z9ID0U-rb7jUjwAobeGuZu9plMxg70",
    heroImage:
      "https://media.licdn.com/dms/image/v2/D5622AQGc04PnvEKO6w/feedshare-shrink_800/feedshare-shrink_800/0/1711965024098",
    description:
      "A digital-first campaign leveraging top influencers and social media trends, leading to a massive boost in engagement and brand awareness.",
    challenge:
      "boAt wanted to strengthen its presence among Gen Z consumers by leveraging social media and influencer marketing. The challenge was to cut through the crowded market and create viral engagement.",
    solution:
      "We executed a highly targeted influencer marketing campaign featuring:\n\n1. Collaborations with top Gen-Z influencers on Instagram & YouTube\n2. Trend-driven content, including memes, reels, and unboxings\n3. A user-generated content challenge with incentives\n4. Retargeting campaigns to drive conversions",
    results:
      "The campaign delivered phenomenal engagement and return on investment:",
    stats: [
      { label: "Reach", value: "15M+" },
      { label: "Engagement", value: "2M" },
      { label: "ROI", value: "350%" },
    ],
    testimonial: {
      quote:
        "The campaign was a game-changer for us. The team’s ability to connect with our audience and execute at scale was unmatched.",
      author: "Marketing Head, boAt",
    },
    gallery: [
      "https://example.com/gallery1.jpg",
      "https://example.com/gallery2.jpg",
      "https://example.com/gallery3.jpg",
    ],
    tags: ["Audio", "Influencer Marketing", "Social Media"],
  },
  {
    id: "2",
    title: "Mamaearth's Sustainable Beauty Campaign",
    client: "Mamaearth",
    category: "Brand Awareness",
    thumbnail:
      "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2024-01/Mamaearth%20100th%20Store%20Launch.jpg",
    heroImage:
      "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2024-01/Mamaearth%20100th%20Store%20Launch.jpg",
    description:
      "A campaign promoting eco-friendly skincare and toxin-free beauty, engaging users with strong storytelling and influencer partnerships.",
    challenge:
      "Mamaearth wanted to position itself as the go-to brand for toxin-free skincare while boosting sales and customer engagement.",
    solution:
      "We crafted an impact-driven brand awareness campaign including:\n\n1. A strong narrative around sustainability and clean beauty\n2. Partnerships with eco-conscious influencers\n3. Content strategy highlighting product benefits and user testimonials\n4. Engaging challenges on Instagram with giveaways",
    results:
      "The campaign built a strong eco-conscious community and drove significant conversions:",
    stats: [
      { label: "New Customers", value: "500K+" },
      { label: "User Engagement", value: "1.8M" },
      { label: "Sales Growth", value: "+65%" },
    ],
    testimonial: {
      quote:
        "This campaign helped us solidify our position as a sustainable beauty leader. The engagement and impact were beyond expectations.",
      author: "CMO, Mamaearth",
    },
    gallery: [
      "https://example.com/gallery4.jpg",
      "https://example.com/gallery5.jpg",
      "https://example.com/gallery6.jpg",
    ],
    tags: ["Beauty", "Sustainability", "Influencer Marketing"],
  },
  {
    id: "3",
    title: "Skybags’ Travel Storytelling Campaign",
    client: "Skybags",
    category: "Content Marketing",
    thumbnail: "https://i.ytimg.com/vi/pNatThF_T2w/maxresdefault.jpg",
    heroImage: "https://i.ytimg.com/vi/pNatThF_T2w/maxresdefault.jpg",
    description:
      "A travel-focused campaign featuring user-generated content, travel influencers, and digital promotions that boosted product visibility.",
    challenge:
      "Skybags wanted to tap into the travel community to position itself as the ultimate luggage brand for adventure seekers.",
    solution:
      "We designed a campaign that put storytelling at its heart:\n\n1. Partnering with top travel influencers to showcase real journeys\n2. Encouraging user-generated travel stories using #SkybagsJourneys\n3. Featuring the best UGC on Skybags' social media & website\n4. Running targeted ad campaigns with emotional storytelling",
    results:
      "The campaign resonated strongly with travelers and delivered massive engagement:",
    stats: [
      { label: "Social Shares", value: "500K+" },
      { label: "New Customers", value: "100K+" },
      { label: "Conversion Rate", value: "45%" },
    ],
    testimonial: {
      quote:
        "This campaign helped us connect with our audience in a way we never had before. The engagement was phenomenal!",
      author: "Brand Manager, Skybags",
    },
    gallery: [
      "https://example.com/gallery7.jpg",
      "https://example.com/gallery8.jpg",
      "https://example.com/gallery9.jpg",
    ],
    tags: ["Travel", "UGC", "Branding"],
  },
  {
    id: "4",
    title: "Spotify Wrapped - Personalized Music Experience",
    client: "Spotify",
    category: "Data-Driven Marketing",
    thumbnail:
      "https://storage.googleapis.com/pr-newsroom-wp/1/2022/12/HM1_5188.jpg",
    heroImage:
      "https://storage.googleapis.com/pr-newsroom-wp/1/2022/12/HM1_5188.jpg",
    description:
      "Spotify Wrapped campaign turned user data into a viral marketing success, enhancing customer loyalty and global engagement.",
    challenge:
      "Spotify wanted to create an engaging, shareable experience that celebrated user listening habits while reinforcing brand loyalty.",
    solution:
      "We developed a data-driven campaign that included:\n\n1. Personalized year-in-review music stats for each user\n2. Gamified and shareable visuals for Instagram & Twitter\n3. Exclusive Wrapped playlists and social badges\n4. Influencer collaborations to boost visibility",
    results:
      "The campaign became a cultural phenomenon and drove record engagement:",
    stats: [
      { label: "User Participation", value: "60M+" },
      { label: "Shares", value: "10M+" },
      { label: "Engagement Rate", value: "70%" },
    ],
    testimonial: {
      quote:
        "Spotify Wrapped became more than a campaign—it turned into a global tradition. The engagement was off the charts!",
      author: "Head of Marketing, Spotify",
    },
    gallery: [
      "https://example.com/gallery10.jpg",
      "https://example.com/gallery11.jpg",
      "https://example.com/gallery12.jpg",
    ],
    tags: ["Music", "Data Analytics", "Viral Marketing"],
  },
];

export default function CaseStudyDetail() {
  const mainRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  // Find the case study by ID
  const caseStudy = caseStudies.find((study) => study.id === id);

  // If case study not found, could add a redirect here
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Case Study Not Found
          </h1>
          <Button onClick={() => router.push("/case-studies")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        ".case-hero",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
        }
      );

      // Content sections animation
      gsap.utils.toArray<HTMLElement>(".animate-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          }
        );
      });

      // Stats animation
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
          },
        }
      );

      // Gallery animation
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 80%",
          },
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, [caseStudy]);

  return (
    <main
      ref={mainRef}
      className="relative overflow-hidden bg-[#111111] min-h-screen"
    >
      <Navigation />

      {/* Hero Section */}
      <section className="case-hero relative pt-20">
        <div className="relative h-[60vh] md:h-[70vh]">
          <Image
            src={caseStudy.heroImage || "/placeholder.svg"}
            alt={caseStudy.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/50 to-black/30"></div>

          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="container mx-auto">
              <Link
                href="/case-studies"
                className="inline-flex items-center text-white/70 hover:text-primary mb-4 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
              <span className="text-primary text-sm font-medium mb-2 block">
                {caseStudy.client} • {caseStudy.category}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
                {caseStudy.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 animate-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Overview
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-8">
              {caseStudy.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {caseStudy.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#222222] text-white/80 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-16 md:py-24 bg-[#0A0A0A] animate-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The Challenge
              </h2>
              <p className="text-white/80">{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Our Solution
              </h2>
              {caseStudy.solution.split("\n\n").map((paragraph, i) => {
                if (paragraph.includes("1.")) {
                  // This is a list
                  const listItems = paragraph
                    .split("\n")
                    .map((item) => item.trim());
                  return (
                    <div key={i} className="mb-4">
                      <ul className="space-y-2">
                        {listItems.map((item, j) => (
                          <li key={j} className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-white/80">
                              {item.replace(/^\d+\.\s/, "")}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-white/80 mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 animate-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The Results
            </h2>
            <p className="text-white/80 text-lg">{caseStudy.results}</p>
          </div>

          <div className="stats-grid grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {caseStudy.stats.map((stat, i) => (
              <div
                key={i}
                className="stat-item bg-[#1A1A1A] p-6 rounded-xl text-center"
              >
                <p className="text-primary text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-[#0A0A0A] animate-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="w-12 h-12 text-primary mx-auto mb-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.71-2.932.214-.339.528-.614.89-.82.354-.2.686-.326.99-.38L9.097 8.15c-.206.2-.448.41-.724.63-.276.22-.5.439-.674.65-.174.21-.32.42-.44.63-.12.21-.214.399-.282.57-.114.323-.19.703-.227 1.14-.038.44-.025.903.037 1.39.06.49.158.95.292 1.38.133.43.304.79.513 1.08.21.29.46.51.736.67.274.16.59.24.94.24.53 0 .95-.15 1.28-.44.33-.29.5-.71.5-1.26zM17.66 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.77-.683-1.327-.812-.56-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.71-2.932.214-.339.528-.614.89-.82.354-.2.686-.326.99-.38L15.57 8.15c-.207.2-.45.41-.725.63-.274.22-.5.439-.674.65-.174.21-.32.42-.44.63-.12.21-.21.399-.28.57-.11.323-.19.703-.23 1.14-.03.44-.02.903.04 1.39.07.49.16.95.29 1.38.13.43.3.79.52 1.08.21.29.46.51.74.67.27.16.58.24.94.24.53 0 .95-.15 1.28-.44.33-.29.5-.71.5-1.26z" />
            </svg>
            <blockquote className="text-white text-xl md:text-2xl italic mb-6">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <p className="text-primary font-medium">
              — {caseStudy.testimonial.author}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 animate-section">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            Campaign Gallery
          </h2>

          <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudy.gallery.map((image, i) => (
              <div key={i} className="gallery-item overflow-hidden rounded-xl">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Case Study Section */}
      <section className="py-16 md:py-24 bg-[#0A0A0A] animate-section">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to create your success story?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to develop a tailored strategy that drives real
            results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
