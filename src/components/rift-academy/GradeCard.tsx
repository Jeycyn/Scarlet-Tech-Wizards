import React from 'react';

interface GradeProps {
  subject: string;
  score: number;
  grade: string;
  color?: string;
}

export default function GradeCard({ subject, score, grade, color = "green" }: GradeProps) {
  return (
    <div className="bg-slate-100 p-5 rounded-lg text-center border-l-4 border-[#800000] shadow-sm">
      <h4 className="text-[10px] text-slate-500 uppercase font-bold mb-2 tracking-widest">{subject}</h4>
      <p className="text-3xl font-black text-[#0f172a]">{score}%</p>
      <p className="text-[10px] font-bold mt-1 uppercase" style={{ color }}>Grade: {grade}</p>
    </div>
  );
}