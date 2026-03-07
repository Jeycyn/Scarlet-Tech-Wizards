"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import PriceCard from "@/components/mazao-digital/PriceCard";

const marketData = [
  { crop: "Dry Maize", weight: "90kg", price: "KSh 3,800", trend: "+2.5%" },
  { crop: "Wheat", weight: "90kg", price: "KSh 5,200", trend: "+1.1%" },
  { crop: "Potatoes", weight: "50kg", price: "KSh 2,400", trend: "-0.8%", isDown: true },
  { crop: "Beans", weight: "90kg", price: "KSh 12,000", trend: "+0.5%" },
];

export default function MazaoDigital() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-[#fffbeb] min-h-screen text-[#451a03] font-sans">
      {/* AGRI HERO */}
      <section 
        className="relative h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(22, 101, 52, 0.7), rgba(22, 101, 52, 0.7)), url('/mazao-digital.jpg')` 
        }}
      >
        <Link href="/archives" className="absolute top-10 left-10 text-xs font-bold tracking-widest hover:text-[#facc15] transition uppercase">
          ← Return to Archives
        </Link>

        <div className="px-4" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Eliminate the Middleman.
          </h1>
          <p className="text-lg md:text-xl mt-4 opacity-90 max-w-2xl mx-auto">
            Direct market access and precision farm data for the modern Kenyan farmer.
          </p>
        </div>
      </section>

      {/* MARKET BOARD */}
      <section className="max-w-[1100px] mx-auto -mt-16 px-4 relative z-20 pb-20">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl" data-aos="zoom-in">
          <h3 className="text-xl font-bold mb-8 border-l-4 border-[#facc15] pl-4">
            Uasin Gishu Market Prices (Today)
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {marketData.map((item, i) => (
              <PriceCard key={i} {...item} />
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-[#166534] text-white px-10 py-4 rounded-full font-bold hover:bg-[#451a03] hover:-translate-y-1 transition-all duration-300 shadow-lg">
              SELL MY HARVEST NOW
            </button>
          </div>
        </div>

        {/* LOGISTICS FLOW */}
        <div className="mt-24 text-center px-4" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-[#166534] mb-6">From Farm to Table: The Digital Path</h3>
          <p className="max-w-3xl mx-auto text-gray-600 leading-loose text-lg">
            Our platform tracks every bag of produce from the shamba to the mill. 
            We provide the farmer with a <span className="text-[#166534] font-bold">QR-code system</span> to 
            verify origin, ensuring high quality and higher payouts.
          </p>
          
          {/* Visualizing the Chain */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 opacity-40 grayscale hover:grayscale-0 transition-all">
             <div className="px-6 py-2 border-2 border-dashed border-[#166534] rounded-lg text-xs font-bold">PRODUCER</div>
             <div className="self-center">→</div>
             <div className="px-6 py-2 border-2 border-dashed border-[#166534] rounded-lg text-xs font-bold">MAZAO LOGISTICS</div>
             <div className="self-center">→</div>
             <div className="px-6 py-2 border-2 border-dashed border-[#166534] rounded-lg text-xs font-bold">MARKET/MILL</div>
          </div>
        </div>
      </section>
    </main>
  );
}