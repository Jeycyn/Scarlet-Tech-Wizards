"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contacts";
import Link from 'next/link';

export default function ArtifactDetail() {
  const params = useParams();
  const slug = params.slug;

  // This data would ideally come from a CMS or a separate data file
  const projectData = {
  "bakery-hub": {
    title: "The Bakery Hub",
    badge: "E-Commerce",
    description: "A premium automated ordering ecosystem designed for high-volume bakeries. We integrated real-time inventory tracking with a seamless Stripe checkout experience.",
    impact: "Automated 85% of manual order processing and increased digital revenue by 40% in the first quarter.",
    stack: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    client: "The Bakery Group Ltd",
    year: "2026",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
    accent: "text-red-600"
  },
  "wizard-dashboard": {
    title: "Wizard Dashboard",
    badge: "SaaS",
    description: "A high-velocity logistics management tool built for Vanguard. We engineered a custom real-time coordination engine to handle complex data streams across multiple regions.",
    impact: "Reduced logistics latency by 30 seconds per transaction and provided 100% visibility into field operations.",
    stack: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    client: "Vanguard Logistics",
    year: "2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    accent: "text-yellow-500"
  },
  "elite-resume": {
    title: "Elite Resume v2",
    badge: "Creative",
    description: "An interactive 3D narrative designed for top-tier industry placement. This artifact uses spatial computing principles to turn a standard CV into a cinematic experience.",
    impact: "Secured high-value interviews within 48 hours of deployment by differentiating the candidate in a saturated market.",
    stack: ["Three.js", "GSAP", "Framer Motion", "Tailwind"],
    client: "Personal Brand Project",
    year: "2026",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200",
    accent: "text-orange-600"
  }
};

  const project = projectData[slug as keyof typeof projectData];

  if (!project) return <div className="bg-black h-screen flex items-center justify-center text-white">Artifact Not Found</div>;

  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />

      {/* PROJECT HERO */}
      <section className="relative h-[70vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/archives" className="text-red-600 text-[10px] font-black uppercase tracking-[4px] mb-8 inline-block hover:text-white transition-colors">
            <i className="fas fa-arrow-left mr-2"></i> Back to Archives
          </Link>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4">
            {project.title}
          </h1>
          <div className="flex gap-4 items-center">
            <span className="px-4 py-1 border border-red-600/30 rounded-full text-red-600 text-[9px] font-black uppercase tracking-widest bg-red-600/5">
              {project.badge}
            </span>
            <span className="text-gray-500 text-[10px] uppercase tracking-widest">{project.year} // Masterpiece</span>
          </div>
        </div>
      </section>

     {/* PROJECT DETAILS SECTION */}
<section className="py-24 border-t border-white/5">
  <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-20">
    
    <div className="lg:col-span-2 space-y-12">
      <div>
        <h3 className="text-red-600 font-black text-[10px] uppercase tracking-[6px] mb-6">The Brief</h3>
        <p className="text-gray-300 text-2xl font-light leading-relaxed italic">
          "{project.description}"
        </p>
      </div>

      <div>
        <h3 className="text-red-600 font-black text-[10px] uppercase tracking-[6px] mb-6">Strategic Impact</h3>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          {project.impact}
        </p>
      </div>
    </div>

    <div className="bg-[#0a0a0a] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl h-fit">
      <h3 className="text-white font-black text-[10px] uppercase tracking-[4px] mb-8 pb-4 border-b border-white/10">Technical Lore</h3>
      <div className="space-y-8">
        <div>
          <p className="text-gray-500 text-[9px] uppercase font-black mb-3 tracking-widest">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-white/5 rounded text-[10px] text-white font-medium border border-white/10 uppercase tracking-tighter">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-[9px] uppercase font-black mb-1 tracking-widest">Client</p>
            <p className="text-white text-[11px] font-bold uppercase">{project.client}</p>
          </div>
          <div>
            <p className="text-gray-500 text-[9px] uppercase font-black mb-1 tracking-widest">Release</p>
            <p className="text-white text-[11px] font-bold uppercase">{project.year}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

      <Contact />
    </main>
  );
}