"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Viraj Seth",
    role: "Co-Founder and CEO",
    image:
      "https://www.brandsandentertainment.com/wp-content/uploads/2023/06/Viraj-Sheth_.jpg",
    bio: "Forbes Asia 30 under 30, 2022. Leading the company's vision and growth.",
    social: {
      linkedin: "https://www.linkedin.com/in/virajsheth/?originalSubdomain=in",
      twitter: "https://x.com/viraj_sheth",
      instagram: "https://www.instagram.com/viraj_sheth/",
    },
  },
  {
    id: 2,
    name: "Ranveer Allahbadia",
    role: "Co-Founder",
    image:
      "https://c.ndtvimg.com/2024-09/tqo9ehng_ranveer-allahbadias-youtube-channels-restored-after-being-hacked-and-deleted_625x300_27_September_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
    bio: "",
    social: {
      linkedin: "https://www.linkedin.com/in/beerbiceps/?originalSubdomain=in",
      twitter: "https://x.com/BeerBicepsGuy",
      instagram: "https://www.instagram.com/beerbiceps/",
    },
  },
  {
    id: 3,
    name: "Aayush Tiwari",
    role: "Head of Artist Management",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFvoaEWWM6nNQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727903745125?e=1747872000&v=beta&t=Ah_ZiHcjRWU8gQuGHoQInmpKCYuLkyQ2BG_-Eb5McLs",
    bio: "",
    social: {
      linkedin: "https://www.linkedin.com/in/aayushtiiwari/",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Ravi Gupta ",
    role: "Head - People & Culture",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQErrmB2zMbZiw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710228576854?e=1747872000&v=beta&t=YLOrgEhFl0A3Yl9J3XbtGFGB4wLiO3TUtm_DvyIlPsQ",
    bio: "",
    social: {
      linkedin: "https://www.linkedin.com/in/ravi-gupta-51a910a9/",
      twitter: "#",
      instagram: "#",
    },
  },
];

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".team-heading",
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

      // Team cards animation
      gsap.fromTo(
        ".team-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="section py-20 md:py-32 bg-[#111111] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="team-heading text-center mb-16">
          <div className="inline-block bg-primary px-6 py-2 rounded-md mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Meet Our Team
            </h2>
          </div>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight">
            The creative minds & industry experts behind our success.
          </p>
        </div>

        <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="team-card group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Yellow accent for alternating cards */}
                {index % 2 === 0 ? (
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-4 mb-4">
                        <Link
                          href={member.social.linkedin}
                          className="text-black hover:text-black/70 transition-colors"
                        >
                          <Linkedin size={20} />
                        </Link>
                        <Link
                          href={member.social.twitter}
                          className="text-black hover:text-black/70 transition-colors"
                        >
                          <Twitter size={20} />
                        </Link>
                        <Link
                          href={member.social.instagram}
                          className="text-black hover:text-black/70 transition-colors"
                        >
                          <Instagram size={20} />
                        </Link>
                      </div>
                      <p className="text-black text-sm text-center font-medium">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-4 mb-4">
                        <Link
                          href={member.social.linkedin}
                          className="text-white hover:text-primary transition-colors"
                        >
                          <Linkedin size={20} />
                        </Link>
                        <Link
                          href={member.social.twitter}
                          className="text-white hover:text-primary transition-colors"
                        >
                          <Twitter size={20} />
                        </Link>
                        <Link
                          href={member.social.instagram}
                          className="text-white hover:text-primary transition-colors"
                        >
                          <Instagram size={20} />
                        </Link>
                      </div>
                      <p className="text-white text-sm text-center">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Yellow CTA Section */}
        <div className="mt-20 bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Join Our Team
          </h3>
          <p className="text-black/80 max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals who are passionate
            about digital media and influencer marketing.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-black/80 transition-colors"
          >
            View Open Positions
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
