import React from 'react';
import { Palette, BookOpen, Music, Sparkles, Sun, PartyPopper, Check } from 'lucide-react';
import { activitiesData } from '../../data/activities';
import { SectionHeader } from '../common/SectionHeader';

export const ActivitiesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6" />;
      case 'Music': return <Music className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Sun': return <Sun className="w-6 h-6" />;
      default: return <PartyPopper className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Beyond Textbooks"
          title="Curated Hands-On"
          highlightText="Enrichment Activities"
          subtitle="Every school day is filled with singing, building, questioning, and laughing. Discover the vibrant activities that kindle your child's innate creativity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activitiesData.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3.5 rounded-2xl ${act.bgColor} flex items-center justify-center transition-transform group-hover:scale-110`}
                    style={{ color: act.color }}
                  >
                    {getIcon(act.iconName)}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                    {act.category}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-800 tracking-tight group-hover:text-[#F4A261] transition">
                  {act.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {act.description}
                </p>
              </div>

              {/* Learning Benefits */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                  Key Skills Developed:
                </span>
                {act.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
