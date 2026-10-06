import React from 'react';
import { Calendar, Users, BookOpen, Star, ShieldCheck } from 'lucide-react';
import { schoolConfig } from '../../config/school';

export const TrustBar: React.FC = () => {
  const highlights = [
    {
      icon: <Calendar className="w-6 h-6 text-[#F4A261]" />,
      value: schoolConfig.stats.yearsNurturing,
      label: "Years of Joyful Learning",
      bg: "bg-amber-50/80",
    },
    {
      icon: <Users className="w-6 h-6 text-[#2A9D8F]" />,
      value: schoolConfig.stats.happyFamilies,
      label: "Happy Families",
      bg: "bg-teal-50/80",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#E76F51]" />,
      value: schoolConfig.stats.uniquePrograms,
      label: "Specialized Programs",
      bg: "bg-rose-50/80",
    },
    {
      icon: <Star className="w-6 h-6 text-amber-500 fill-amber-500" />,
      value: `${schoolConfig.stats.rating} ★`,
      label: "Google Verified Rating",
      bg: "bg-amber-50/80",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      value: "100%",
      label: "Child-Proof & CCTV Safe",
      bg: "bg-emerald-50/80",
    },
  ];

  return (
    <div className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl shadow-amber-900/5 border border-amber-100/80 p-4 sm:p-6 backdrop-blur-md">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3.5 p-3 rounded-2xl transition duration-300 hover:bg-amber-50/40 ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className={`p-3 rounded-2xl shrink-0 ${item.bg}`}>
                {item.icon}
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-none">
                  {item.value}
                </p>
                <p className="text-xs font-semibold text-slate-500 mt-1 leading-tight">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
