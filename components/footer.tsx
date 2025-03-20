"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-content",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black py-12 border-t border-[#333333]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img
              src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/5ecc4d42f1e74b3f0658bcfe_title-icon.png"
              className="w-[90px] mb-3"
            />
            <p className="text-white/70 max-w-md mb-6">
              A 360° creative digital media organization that brings together
              Talent Management, Video Production, Social Media Management, and
              Influencer Marketing under one roof.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/monkentertainment"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://www.x.com/monketweets"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/monk-entertainment/"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
              >
                <Linkedin size={18} />
              </Link>
              {/* <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
              >
                <Youtube size={18} />
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors group flex items-center relative"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                {/* <Link
                  href="#work"
                  className="text-white/70 hover:text-primary transition-colors group flex items-center relative"
                >
                  Work
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="#brands"
                  className="text-white/70 hover:text-primary transition-colors group flex items-center relative"
                >
                  Brands
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link> */}
              </li>
              <li>
                <Link
                  href="/creators"
                  className="text-white/70 hover:text-primary transition-colors group flex items-center relative"
                >
                  Influencers
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white/70 hover:text-primary transition-colors group flex items-center relative"
                >
                  Careers
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-white/70 hover:text-primary transition-colors group flex items-center relative"
                >
                  Case Studies
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors group flex items-center"
                >
                  Talent Management
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors group flex items-center"
                >
                  Video Production
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors group flex items-center"
                >
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors group flex items-center"
                >
                  Influencer Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors group flex items-center"
                >
                  Digital Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors group flex items-center"
                >
                  Content Creation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Monk Entertainment. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <Link
              href="#"
              className="text-white/50 text-sm hover:text-primary transition-colors group flex items-center"
            >
              Privacy Policy
              <ArrowUpRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              href="#"
              className="text-white/50 text-sm hover:text-primary transition-colors group flex items-center"
            >
              Terms of Service
              <ArrowUpRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
