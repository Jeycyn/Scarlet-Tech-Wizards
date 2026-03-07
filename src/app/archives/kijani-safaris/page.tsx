"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import TourCard from "@/components/kijani-safaris/TourCard";
import WeatherCard from "@/components/kijani-safaris/WeatherCard";

const tours = [
  {
    duration: "7 Days / 6 Nights",
    title: "The Great Migration",
    description: "Witness the world's most spectacular wildlife event in the heart of Maasai Mara.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000",
    aos: "fade-right"
  },
  {
    duration: "4 Days / 3 Nights",
    title: "Amboseli Giants",
    description: "Get up close with legendary elephant herds under the shadow of Mt. Kilimanjaro.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000",
    aos: "fade-up"
  },
  {
    duration: "5 Days / 4 Nights",
    title: "Tsavo to the Coast",
    description: "The perfect blend of red-soil wilderness and the turquoise Indian Ocean.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000",
    aos: "fade-left"
  }
];

export default function KijaniSafaris() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <main className="bg-[#fdfaf5] min-h-screen text-[#2d3e2f] font-serif">
      {/* IMMERSIVE HERO */}
      <section 
        className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/kijani-safaris.jpg')` }}
      >
        <Link href="/archives" className="absolute top-10 left-10 text-xs tracking-[4px] opacity-80 hover:text-[#e67e22] transition uppercase font-sans">
          ← Back to Sanctum
        </Link>
        
        <div data-aos="zoom-out" className="px-4">
          <h1 className="text-6xl md:text-9xl tracking-[15px] uppercase leading-none">Kijani Safaris</h1>
          <p className="text-sm md:text-lg tracking-[6px] mt-6 font-sans uppercase opacity-90">Unfold the secrets of the Savannah</p>
          <a href="#tours" className="mt-10 inline-block bg-[#e67e22] text-white px-10 py-5 font-bold tracking-[3px] text-xs transition-transform hover:-translate-y-1">
            EXPLORE EXPEDITIONS
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#2d3e2f] py-20 flex flex-wrap justify-around gap-8 text-center">
        {[
          { val: "45+", label: "Luxury Camps", delay: 0 },
          { val: "12", label: "National Parks", delay: 200 },
          { val: "100%", label: "Ethical Tourism", delay: 400 }
        ].map((stat, i) => (
          <div key={i} data-aos="fade-up" data-aos-delay={stat.delay}>
            <h2 className="text-5xl text-white mb-2">{stat.val}</h2>
            <p className="text-[#d2b48c] text-[10px] tracking-[2px] uppercase font-sans">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* TOUR GRID */}
      <section id="tours" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">
        {tours.map((tour, i) => (
          <TourCard 
            key={i}
            duration={tour.duration}
            title={tour.title}
            description={tour.description}
            image={tour.image}
            aosType={tour.aos}
          />
        ))}
      </section>

      {/* WEATHER MONITOR */}
      <section className="bg-white py-24 border-t border-[#d2b48c]/20">
        <div className="text-center mb-12 px-4">
          <h2 className="text-2xl tracking-[5px] uppercase mb-4">Savannah Conditions</h2>
          <div className="h-[1px] w-20 bg-[#e67e22] mx-auto" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 px-6">
          <WeatherCard location="Maasai Mara" temp={24} condition="☀️ Sunny" />
          <WeatherCard location="Amboseli" temp={27} condition="💨 Breezy" />
          <WeatherCard location="Samburu" temp={29} condition="🔥 High Heat" />
        </div>
        <p className="text-center mt-10 text-[10px] opacity-40 font-sans tracking-widest uppercase">
          Real-time data synced for expedition planning
        </p>
      </section>
    </main>
  );
}