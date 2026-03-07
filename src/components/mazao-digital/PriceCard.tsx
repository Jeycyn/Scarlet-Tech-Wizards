import React from 'react';

interface PriceProps {
  crop: string;
  weight: string;
  price: string;
  trend: string;
  isDown?: boolean;
}

export default function PriceCard({ crop, weight, price, trend, isDown }: PriceProps) {
  return (
    <div className="p-5 border border-[#fde68a] rounded-lg bg-[#fffdf2] text-center transition-all hover:shadow-md">
      <h4 className="text-[#92400e] text-[10px] font-bold uppercase mb-2 tracking-wider">
        {crop} ({weight})
      </h4>
      <p className="text-2xl font-extrabold text-[#166534]">{price}</p>
      <p className={`text-[10px] font-bold mt-1 ${isDown ? 'text-red-600' : 'text-green-600'}`}>
        {isDown ? '▼' : '▲'} {trend}
      </p>
    </div>
  );
}