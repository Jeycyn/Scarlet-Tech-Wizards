"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import LabResultRow from "@/components/neema-health/LabResultRow";
import DoctorSearch from "@/components/neema-health/DoctorSearch";

export default function NeemaHealth() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-[#f8fafc] min-h-screen text-[#0f172a]">
      {/* HERO */}
      <section 
        className="relative h-[70vh] flex items-center px-[10%] bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.2)), url('/neema-health.jpg')` }}
      >
        <Link href="/archives" className="absolute top-10 left-10 text-xs font-bold text-sky-600 tracking-widest uppercase">
          ← Sanctum Entrance
        </Link>

        <div className="max-w-xl" data-aos="fade-right">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Healthcare <br /><span className="text-sky-500">Redefined.</span>
          </h1>
          <p className="text-slate-500 text-lg mb-8">
            Access your diagnostic results, book specialist appointments, and manage your health records in one secure digital vault.
          </p>
          <a href="#portal" className="bg-sky-500 text-white px-8 py-4 rounded-full font-bold hover:translate-y-[-2px] transition-all shadow-lg shadow-sky-200">
            ACCESS PATIENT PORTAL
          </a>
        </div>
      </section>

      {/* PORTAL SECTION */}
      <section id="portal" className="py-24 px-[10%] bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2" data-aos="fade-up">Digital Patient Vault</h2>
          <p className="text-slate-400">Example of a secure diagnostic report interface.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#f8fafc] rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm" data-aos="zoom-in">
          <div className="flex justify-between items-center mb-8 border-b-2 border-sky-500 pb-4">
            <h4 className="font-bold">Patient: John Doe (ID: 88219)</h4>
            <h4 className="text-sky-500 font-bold">Date: 30 Jan 2026</h4>
          </div>

          <div className="space-y-2">
            <LabResultRow label="Blood Glucose (Fasting)" value="5.4 mmol/L" status="NORMAL" />
            <LabResultRow label="Hemoglobin (Hb)" value="14.2 g/dL" status="NORMAL" />
            <LabResultRow label="Vitamin D Level" value="28 ng/mL" status="MODERATE" isLast />
          </div>

          <button 
            className="w-full mt-10 bg-sky-500 text-white py-4 rounded-xl font-bold hover:bg-sky-600 transition-colors"
            onClick={() => alert("Generating Secure PDF...")}
          >
            DOWNLOAD OFFICIAL PDF
          </button>
        </div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            { title: "Lab Testing", desc: "Advanced hematology and biochemistry with 24-hour turnaround.", delay: 0 },
            { title: "Imaging", desc: "Digital X-Ray and Ultrasound services with cloud-access for doctors.", delay: 100 },
            { title: "Tele-Health", desc: "Direct video consultations with specialists from your home.", delay: 200 }
          ].map((s, i) => (
            <div key={i} className="p-10 bg-white border border-slate-100 rounded-2xl hover:border-sky-500 transition-colors" data-aos="fade-up" data-aos-delay={s.delay}>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTOR SEARCH SECTION */}
      <section className="px-[10%] py-12 bg-white relative z-20">
        <div className="max-w-5xl mx-auto -mt-32">
          <DoctorSearch />
        </div>
      </section>

      {/* ECOSYSTEM INFO */}
      <section className="py-20 text-center bg-[#fdfdfd]">
        <h3 className="text-2xl font-bold opacity-80 mb-6">Integrated Care Ecosystem</h3>
        <p className="max-w-2xl mx-auto text-slate-500 text-sm leading-loose px-4">
          Our portal synchronizes laboratory data, doctor consultations, and patient pharmacy records into a single, encrypted timeline.
        </p>
      </section>
    </main>
  );
}