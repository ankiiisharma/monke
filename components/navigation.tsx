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
    // Lock body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        ".menu-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "power2.out",
          duration: 0.5,
        }
      );
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
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
          className={`fixed inset-0 bg-gradient-to-b from-black to-zinc-900 z-40 transition-all duration-500 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
          <div className="h-full flex flex-col justify-center px-8">
            <nav className="space-y-6">
              {[
                { href: "#work", label: "Work" },
                { href: "#brands", label: "Brands" },
                { href: "#influencers", label: "Creators" },
                { href: "#team", label: "Team" },
                { href: "/case-studies", label: "Case Studies" },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="menu-item group relative flex items-center text-2xl sm:text-3xl text-zinc-400 font-medium transition-colors hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowUpRight className="ml-2 h-5 w-5 opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                </Link>
              ))}
            </nav>

            <div className="absolute bottom-12 left-0 w-full px-8">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
