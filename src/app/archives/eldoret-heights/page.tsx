// app/eldoret-heights/page.tsx
"use client";

import HeroSection from "@/components/eldorethights/HeroSection";
import ListingsSection from "@/components/eldorethights/ListingsSection";
import CalculatorSection from "@/components/eldorethights/CalculatorSection";
import WhatsAppCTA from "@/components/eldorethights/WhatsAppCTA";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ListingsSection />
      <CalculatorSection />
      <WhatsAppCTA />
    </main>
  );
}