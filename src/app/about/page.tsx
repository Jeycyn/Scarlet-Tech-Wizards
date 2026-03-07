"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Founder from "@/components/Founders"; // It's common to show founders on the About page
import Contact from "@/components/Contacts";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      
      {/* Spacer for the fixed navbar */}
      <div className="pt-20">
        <About />
        <Founder />
      </div>

      <Contact />
    </main>
  );
}