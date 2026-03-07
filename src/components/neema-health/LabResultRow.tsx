import React from 'react';

interface ResultProps {
  label: string;
  value: string;
  status: 'NORMAL' | 'MODERATE' | 'CRITICAL';
  isLast?: boolean;
}

const statusStyles = {
  NORMAL: "bg-green-100 text-green-700",
  MODERATE: "bg-yellow-100 text-yellow-700",
  CRITICAL: "bg-red-100 text-red-700",
};

export default function LabResultRow({ label, value, status, isLast }: ResultProps) {
  return (
    <div className={`flex justify-between items-center py-4 ${!isLast ? 'border-bottom border-slate-200' : ''}`}>
      <span className="text-slate-600 font-medium">{label}</span>
      <div className="flex items-center gap-5">
        <strong className="text-slate-900">{value}</strong>
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
    </div>
  );
}