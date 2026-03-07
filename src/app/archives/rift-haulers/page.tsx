"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import QuoteCalculator from "@/components/rift-haulers/QuoteCalculator";

export default function RiftHaulers() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleTrack = () => {
    alert("Searching Rift Haulers Global Database... Shipment found: RH-9921-KE. Status: In Transit (Near Nakuru)");
  };

  return (
    <main className="bg-[#f1f5f9] min-h-screen text-[#0f172a] font-sans">
      {/* INDUSTRIAL HERO */}
      <section 
        className="relative h-[85vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('/rift-haulers.jpg')` }}
      >
        <Link href="/archives" className="absolute top-10 left-10 text-xs font-black tracking-[4px] hover:text-orange-500 transition-all uppercase">
          ← Back to Archives
        </Link>

        <div className="px-4" data-aos="fade-down">
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter uppercase">
            Reliability <br /> <span className="text-orange-500">In Motion.</span>
          </h1>
          <p className="text-lg md:text-2xl mt-6 opacity-80 font-medium">
            Seamless Logistics Across the East African Corridor.
          </p>
        </div>
      </section>

      {/* TRACKING BAR */}
      <div className="max-w-4xl mx-auto px-4 -mt-12 relative z-20" data-aos="zoom-in">
        <div className="bg-white p-6 rounded-lg shadow-2xl flex flex-col md:row gap-4">
          <input 
            type="text" 
            placeholder="Enter Container or Tracking Number (e.g. RH-9921-KE)" 
            className="flex-grow p-4 border-2 border-slate-100 rounded focus:border-orange-500 outline-none transition-all"
          />
          <button 
            onClick={handleTrack}
            className="bg-orange-500 text-white font-black px-8 py-4 rounded hover:bg-orange-600 transition-all active:scale-95"
          >
            TRACK CARGO
          </button>
        </div>
      </div>

      {/* CALCULATION SECTION */}
      <section className="bg-[#0f172a] py-24 px-6 text-white mt-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-black mb-6 leading-tight">Instant Shipping Quote</h2>
            <p className="text-slate-400 text-lg mb-8">
              Get a transparent estimate for your cargo across the East African corridor. 
              No hidden fees, just reliable transport.
            </p>
            
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 flex items-center justify-center rounded border border-orange-500/20 text-orange-500 font-bold">01</div>
                  <p className="text-sm text-slate-300">Enter your cargo specifics and route distance.</p>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 flex items-center justify-center rounded border border-orange-500/20 text-orange-500 font-bold">02</div>
                  <p className="text-sm text-slate-300">Receive an instant baseline quote for your logistics budget.</p>
               </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <QuoteCalculator />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8">
        {[
          { title: "Long-Haul Freight", desc: "Direct routes from the Port of Mombasa to Uganda, Rwanda, and South Sudan." },
          { title: "Last-Mile Delivery", desc: "Efficient regional distribution across Eldoret and the wider Rift Valley." },
          { title: "Cold Chain", desc: "Specialized temperature-controlled transport for perishables and pharma." }
        ].map((service, i) => (
          <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white p-10 border-t-4 border-orange-500 shadow-sm hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">{service.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}