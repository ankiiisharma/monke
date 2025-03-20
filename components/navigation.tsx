"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { gsap } from "gsap";
// import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    if (isOpen) {
      // Animate menu items when menu opens
      gsap.fromTo(
        ".menu-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-bold text-xl z-50 flex items-center"
        >
          <img
            src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/5ecc4d42f1e74b3f0658bcfe_title-icon.png"
            className="w-12 mr-2"
          />
          <span className="text-primary mr-1">Monk</span> Entertainment
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#work"
            className="text-white hover:text-primary transition-all flex items-center group relative"
          >
            Works
            <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#brands"
            className="text-white hover:text-primary transition-all flex items-center group relative"
          >
            Brands
            <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#influencers"
            className="text-white hover:text-primary transition-all flex items-center group relative"
          >
            Influencers
            <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#team"
            className="text-white hover:text-primary transition-all flex items-center group relative"
          >
            Team
            <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/case-studies"
            className="text-white hover:text-primary transition-all flex items-center group relative font-semibold"
          >
            Case Studies
            <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center space-y-8">
            <Link
              href="#work"
              className="menu-item text-white hover:text-primary text-2xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <Link
              href="#brands"
              className="menu-item text-white hover:text-primary text-2xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Brands
            </Link>
            <Link
              href="#influencers"
              className="menu-item text-white hover:text-primary text-2xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Creators
            </Link>
            <Link
              href="#team"
              className="menu-item text-white hover:text-primary text-2xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/case-studies"
              className="menu-item text-white hover:text-primary text-2xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
