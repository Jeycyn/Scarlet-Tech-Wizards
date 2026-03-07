"use client";

import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contacts";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      
      {/* We use a larger padding top (pt-32) here to give the 
          "Digital Artifacts" header room to breathe against the background watermark.
      */}
      <div className="pt-24">
        <Portfolio />
      </div>

      {/* After they see your work, they are most likely to want to talk. 
          We place the Contact section immediately after the gallery.
      */}
      <Contact />
    </main>
  );
}