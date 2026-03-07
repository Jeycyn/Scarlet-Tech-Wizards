// app/contacts/page.tsx
"use client"; // Important if you use any interactivity

import Contact from "@/components/Contacts"; // Or wherever you saved the Contact component

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* If you want the navbar to show up on this page too */}
      {/* <Navbar /> */}
      
      <Contact />
      
      {/* Optional: Add a footer here later */}
    </main>
  );
}