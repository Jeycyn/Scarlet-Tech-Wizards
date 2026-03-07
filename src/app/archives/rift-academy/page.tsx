"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import GradeCard from "@/components/rift-academy/GradeCard";
import AttendanceTracker from "@/components/rift-academy/AttendanceTracker";

const gradesData = [
  { subject: "Mathematics", score: 88, grade: "A", color: "green" },
  { subject: "Physics", score: 74, grade: "B+", color: "#946b2d" },
  { subject: "English", score: 91, grade: "A", color: "green" },
  { subject: "History", score: 82, grade: "A-", color: "green" },
];

export default function RiftAcademy() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-slate-50 min-h-screen text-[#0f172a]">
      {/* ACADEMIC HERO */}
      <section 
        className="relative h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('/rift-academy.jpg')` 
        }}
      >
        <Link href="/archives" className="absolute top-10 left-10 text-xs font-bold tracking-[3px] hover:text-[#d4af37] transition-all">
          ← PORTAL LOGOUT
        </Link>

        <div className="px-4" data-aos="fade-down">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase">
            Rift Academy
          </h1>
          <p className="text-lg md:text-xl mt-4 font-serif italic opacity-80">
            Knowledge, Integrity, and Excellence.
          </p>
        </div>
      </section>

      {/* DASHBOARD CONTAINER */}
      <section className="max-w-[1100px] mx-auto -mt-16 px-4 pb-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12" data-aos="zoom-in">
          {/* PROFILE HEADER */}
          <div className="flex items-center gap-6 border-b-2 border-slate-50 pb-8 mb-10">
            <div className="w-20 h-20 bg-[#800000] text-white rounded-full flex items-center justify-center text-2xl font-black shadow-inner">
              EK
            </div>
            <div>
              <h2 className="text-2xl font-bold">Emmanuel Kipchumba</h2>
              <p className="text-slate-400 text-sm font-medium">Form 3 West | RA-2026-441</p>
            </div>
          </div>

          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#800000] rounded-full"></span>
            Term 1 Performance Overview
          </h3>

          {/* GRADES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gradesData.map((g, i) => (
              <GradeCard key={i} {...g} />
            ))}
          </div>

          {/* ATTENDANCE */}
          <AttendanceTracker 
            percentage={94} 
            status="Exemplary. No unauthorized absences recorded." 
          />

          <div className="text-center mt-12">
            <button className="bg-[#0f172a] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#800000] transition-all transform hover:-translate-y-1 shadow-xl">
              VIEW FULL REPORT CARD (PDF)
            </button>
          </div>
        </div>

        {/* CLOUD INFO */}
        <div className="mt-24 text-center px-4" data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-6">Integrated School Management System</h3>
          <p className="max-w-3xl mx-auto text-slate-500 leading-loose text-lg">
            Our <span className="text-[#800000] font-bold">AcademyCloud</span> platform bridges the gap 
            between the classroom and the home. Teachers enter grades in real-time, and parents receive 
            instant SMS notifications regarding performance and school events.
          </p>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-200 text-center text-slate-400 text-[10px] tracking-widest uppercase font-bold">
        © 2026 Rift Academy | Eldoret, Kenya
      </footer>
    </main>
  );
}