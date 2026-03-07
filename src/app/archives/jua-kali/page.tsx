"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import SolarCalculator from "@/components//jua-kali/SolarCalculator";

export default function JuaKaliPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="bg-[#f8fafc] min-h-screen font-sans text-[#1e293b]">
      {/* ECO HERO */}
      <section 
        className="relative h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.6), rgba(30, 41, 59, 0.6)), url('/jua-kali.jpg')` 
        }}
      >
        <Link href="/archives" className="absolute top-10 left-10 text-sm font-bold tracking-tighter hover:text-[#facc15] transition">
          ← EXIT TO ARCHIVES
        </Link>

        <div className="px-4" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter">
            Switch to Sunlight
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto font-light tracking-wide opacity-90">
            Cut your electricity bills by up to 90% with Jua Kali Solar.
          </p>
        </div>
      </section>

      {/* CALCULATOR COMPONENT */}
      <section className="px-4">
        <SolarCalculator />
      </section>

      {/* TECH FLOW SECTION */}
      <section className="py-24 px-[10%] text-center bg-white">
        <h3 className="text-3xl font-bold mb-8" data-aos="fade-up">How Solar Works for You</h3>
        
        <div className="max-w-3xl mx-auto text-slate-500 leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200">
          Our systems integrate high-efficiency monocrystalline panels with smart hybrid inverters, 
          ensuring you have power during the day and stored energy throughout the night.
        </div>

        {/* This is a great place to add a visual flow of energy */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
          <div className="p-8 border border-dashed border-slate-200 rounded-xl">01. Generation</div>
          <div className="p-8 border border-dashed border-slate-200 rounded-xl">02. Conversion</div>
          <div className="p-8 border border-dashed border-slate-200 rounded-xl">03. Consumption</div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-xs border-t border-slate-100">
        © 2026 JUA KALI SOLAR | SUSTAINABLE ENERGY SOLUTIONS
      </footer>
    </main>
  );
}