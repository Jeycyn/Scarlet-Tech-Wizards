"use client";

import TailorNavbar from "@/components/tailoring/TailorNavbar";
import TailorHero from "@/components/tailoring/TailorHero";
import Lookbook from "@/components/tailoring/Lookbook";
import Atelier from "@/components/tailoring/Atelier";
import TailorFooter from "@/components/tailoring/TailorFooter";

export default function JamesTailoring() {
  return (
    <main className="bg-[#0d0d0d] text-white overflow-x-hidden">
      <TailorNavbar />
      <TailorHero />
      <Lookbook />
      <Atelier />
      <TailorFooter />
    </main>
  );
}