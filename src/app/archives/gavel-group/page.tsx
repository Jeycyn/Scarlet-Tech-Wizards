"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import LegalTracker from "@/components/gavel-group/LegalTracker";

export default function GavelGroupPage() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true // Animations happen only once while scrolling
    });
  }, []);

  return (
    <main className="bg-[#f8fafc] min-h-screen selection:bg-[#946b2d] selection:text-white">
      {/* HERO SECTION */}
      <section 
        className="relative h-[55vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.85), rgba(30, 41, 59, 0.85)), url('/gavel-group.jpg')` 
        }}
      >
        <Link 
          href="/archives" 
          className="absolute top-10 left-10 text-xs tracking-widest uppercase opacity-70 hover:opacity-100 hover:text-[#946b2d] transition-all"
        >
          ← Return to Archives
        </Link>
        
        <div data-aos="fade-up" className="px-4">
          <h1 className="text-4xl md:text-6xl font-serif tracking-[6px] uppercase mb-4">
            The Gavel Group
          </h1>
          <div className="h-[1px] w-24 bg-[#946b2d] mx-auto mb-4" />
          <p className="text-sm md:text-base opacity-70 italic tracking-wide">
            Justice Protected, Integrity Preserved
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-[900px] mx-auto -mt-24 px-4 pb-24 relative z-20">
        <LegalTracker 
          clientName="Kimani & Associates"
          caseRef="#GG-2026-088"
          matter="Commercial Lease Litigation"
          currentStep={2} 
          updateText="Latest Update (Jan 28, 2026): Evidence discovery phase completed. The High Court of Eldoret has set a mention date for Feb 14th. Please ensure all supplementary affidavits are signed."
        />

        {/* EXTRA INFO AREA */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <h3 className="text-[#1e293b] font-serif text-xl mb-4 uppercase tracking-widest">
            Legal Lifecycle & Document Management
          </h3>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-loose">
            Our proprietary <span className="text-[#946b2d] font-bold">LexVault</span> technology ensures 
            that sensitive litigation documents are encrypted and accessible only to authorized legal 
            counsel and the verified client portal.
          </p>
        </div>
      </section>
    </main>
  );
}