"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "#about" },
    { name: "Spells", href: "#services" },
    { name: "Artifacts", href: "#portfolio" },
    { name: "Investment", href: "#pricing" },
    { name: "Echoes", href: "#reviews" },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
        ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl" 
        : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* LOGO AREA */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-700">
             <i className="fas fa-bolt text-white text-xs"></i>
          </div>
          <h2 className="text-xl font-black text-white tracking-tighter">
            SCARLET<span className="text-red-600 font-light italic">TECH</span>WIZARDS
          </h2>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-[10px] font-black uppercase tracking-[3px] text-gray-400 hover:text-red-600 transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-red-600 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="flex items-center gap-6">
          <Link 
            href="#contact" 
            className="hidden sm:block px-6 py-2.5 bg-red-600 text-white text-[9px] font-black uppercase tracking-[3px] rounded-lg hover:bg-white hover:text-black transition-all shadow-lg shadow-red-900/20"
          >
            Summon Us
          </Link>
          
          {/* MOBILE TOGGLE (Visual Only for now) */}
          <button className="lg:hidden text-white text-xl">
            <i className="fas fa-bars-staggered"></i>
          </button>
        </div>

      </div>
    </nav>
  );
}