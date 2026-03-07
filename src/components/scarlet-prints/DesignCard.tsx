import React from 'react';
import Image from 'next/image';

interface DesignProps {
  title: string;
  description: string;
  tag: string;
  imageSrc: string;
  status?: string;
  delay?: number;
}

export default function DesignCard({ title, description, tag, imageSrc, status = "DESIGN", delay = 0 }: DesignProps) {
  return (
    <div 
      className="bg-white/5 border border-white/5 rounded-lg p-8 transition-all duration-500 hover:border-[#d4af37] hover:-translate-y-2 hover:bg-[#d4af37]/[0.02] relative overflow-hidden group"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="absolute top-5 right-5 text-[10px] bg-[#d4af37]/10 px-2 py-1 rounded text-[#d4af37] font-bold">
        {status}
      </div>
      
      <span className="inline-block text-[10px] font-black tracking-widest text-[#d4af37] border border-[#d4af37] px-2 py-1 mb-5 uppercase">
        {tag}
      </span>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-gray-400 mb-6 min-h-[60px] leading-relaxed">
        {description}
      </p>
      
      <a 
        href={imageSrc} 
        target="_blank" 
        className="text-[10px] font-bold border-b-2 border-[#d4af37] pb-1 hover:tracking-widest transition-all duration-300 mb-6 inline-block"
      >
        VIEW DESIGN
      </a>

      <div className="relative w-full h-48 mt-4 overflow-hidden rounded-lg">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  );
}