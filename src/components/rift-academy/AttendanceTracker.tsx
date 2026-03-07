import React from 'react';

interface AttendanceProps {
  percentage: number;
  status: string;
}

export default function AttendanceTracker({ percentage, status }: AttendanceProps) {
  return (
    <div className="mt-10 p-6 bg-amber-50 rounded-xl border border-amber-200">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-amber-900">Term Attendance</h4>
        <span className="font-black text-amber-900 text-xl">{percentage}%</span>
      </div>
      <div className="h-3 bg-amber-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#d4af37] transition-all duration-1000 ease-out" 
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="mt-3 text-xs text-amber-800 font-medium italic">
        Status: {status}
      </p>
    </div>
  );
}