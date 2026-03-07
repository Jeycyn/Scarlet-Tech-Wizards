"use client";

import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews"; // Social proof helps close the sale
import Contact from "@/components/Contacts";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      
      {/* Spacer to push content below the fixed Navbar */}
      <div className="pt-24">
        <Pricing />
      </div>

      {/* Adding Reviews here is a "Wizard" move—it reminds 
          the client that the investment is worth it. 
      */}
      <Reviews />

      <Contact />
    </main>
  );
}