"use client";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contacts"; 

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Since this is a standalone page, we include the Navbar 
          so the user isn't trapped without navigation.
      */}
      <Navbar />
      
      {/* Padding top to account for the fixed Navbar height */}
      <div className="pt-20">
        <Services />
      </div>

      {/* Big brands always end a service page with a call to action */}
      <Contact />
    </main>
  );
}