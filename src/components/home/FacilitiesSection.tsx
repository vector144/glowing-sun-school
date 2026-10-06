import { useState } from 'react';
import {
  Tv,
  Gamepad2,
  Trees,
  Palette
} from 'lucide-react';
import { facilitiesData } from '../../data/facilities';
import { SectionHeader } from '../common/SectionHeader';

export const FacilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Academic', 'Recreation', 'Outdoors', 'Creative'];

  const filtered = activeTab === 'All'
    ? facilitiesData
    : facilitiesData.filter((f) => f.category === activeTab);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv': return <Tv className="w-5 h-5 text-amber-600" />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-teal-600" />;
      case 'Trees': return <Trees className="w-5 h-5 text-emerald-600" />;
      case 'Palette': return <Palette className="w-5 h-5 text-rose-600" />;
      default: return <Gamepad2 className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="World-Class Environment"
          title="Designed for Little Learners"
          highlightText="Campus Facilities"
          subtitle="A purposeful ecosystem built to foster safety, active play, intellectual curiosity, and hygienic comfort."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition duration-200 cursor-pointer ${
                activeTab === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-amber-100/60 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((fac) => (
            <div
              key={fac.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image with Tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-black text-slate-800 shadow-xs">
                  {fac.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-xl bg-slate-50 border border-slate-100">
                      {getIcon(fac.iconName)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {fac.category}
                    </span>
                  </div>

                  <h4 className="text-base font-black text-slate-800 leading-snug group-hover:text-[#F4A261] transition">
                    {fac.title}
                  </h4>

                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
