"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import DesignCard from "@/components/scarlet-prints/DesignCard";

const designs = [
  {
    title: "Political Campaign Card",
    tag: "Business Card",
    description: "Custom business card layout inspired by professional political aspirants’ designs, emphasizing clarity and impact.",
    imageSrc: "/images/business-card1.jpg"
  },
  {
    title: "Corporate Identity Card",
    tag: "Business Card",
    description: "High-end business card design for professionals and entrepreneurs seeking premium branding.",
    imageSrc: "/images/business-card2.jpg"
  },
  {
    title: "Event Poster",
    tag: "Poster",
    description: "Eye-catching poster design for events, campaigns, or marketing purposes, fully customizable for print and digital.",
    imageSrc: "/images/poster1.jpg"
  },
  {
    title: "Brand Promo Poster",
    tag: "Poster",
    description: "Professional promotional poster design for businesses, startups, and campaigns to grab attention effectively.",
    imageSrc: "/images/poster2.jpg"
  }
];

export default function ScarletPrints() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-[#080808] min-h-screen text-white font-sans selection:bg-[#d4af37] selection:text-black">
      {/* HEADER */}
      <section className="py-20 px-[5%] text-center border-b border-[#d4af37]/20 bg-gradient-to-b from-[#111] to-[#080808]">
        <Link href="/archives" className="inline-block mb-8 text-sm border-b border-[#d4af37] pb-1 hover:tracking-widest transition-all">
          ← Return to Archives
        </Link>
        <h1 className="text-4xl md:text-6xl font-light tracking-[12px] text-[#d4af37] uppercase mb-4" data-aos="fade-down">
          Scarlet Prints
        </h1>
        <p className="opacity-60 italic text-sm md:text-base">
          Elite Business Cards & Posters | Professional Branding Solutions
        </p>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-7xl mx-auto py-20 px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {designs.map((design, index) => (
            <DesignCard 
              key={index}
              {...design}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center opacity-40 text-[10px] tracking-[4px] border-t border-[#d4af37]/20 mt-12 uppercase">
        © 2026 SCARLET TECH WIZARDS | DESIGN DEPLOYMENT | ALL RIGHTS RESERVED
      </footer>
    </main>
  );
}