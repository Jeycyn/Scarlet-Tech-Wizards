import React from 'react';

interface TourProps {
  duration: string;
  title: string;
  description: string;
  image: string;
  aosType: string;
}

export default function TourCard({ duration, title, description, image, aosType }: TourProps) {
  return (
    <div className="bg-white border-b-[5px] border-[#e67e22] overflow-hidden transition-transform duration-500 hover:scale-[1.02] shadow-sm" data-aos={aosType}>
      <img src={image} alt={title} className="w-full h-[350px] object-cover" />
      <div className="p-8">
        <span className="text-[#e67e22] font-bold font-sans text-xs tracking-widest uppercase">{duration}</span>
        <h3 className="text-3xl font-serif mt-2 mb-3 text-[#2d3e2f]">{title}</h3>
        <p className="text-[#2d3e2f] opacity-80 leading-relaxed mb-6 font-serif">{description}</p>
        <button className="bg-[#e67e22] text-white px-6 py-3 font-bold text-xs tracking-[2px] hover:bg-[#d35400] transition-colors">
          BOOK TRIP
        </button>
      </div>
    </div>
  );
}