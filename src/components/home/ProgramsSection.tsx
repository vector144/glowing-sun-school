import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Check } from 'lucide-react';
import { programsData } from '../../data/programs';
import { SectionHeader } from '../common/SectionHeader';

interface ProgramsSectionProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenEnquiry }) => {
  // Main 4 preschool programs
  const academicPrograms = programsData.filter((p) => p.id !== 'daycare');
  const daycareProgram = programsData.find((p) => p.id === 'daycare');

  return (
    <section id="programs" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#FDFBF7] to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Tailored Learning Pathways"
          title="Find the Perfect Class for"
          highlightText="Your Little One"
          subtitle="From our gentle Play Group to confident Senior KG graduation — every program is thoughtfully designed to ignite your child's natural love for discovery."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {academicPrograms.map((prog) => (
            <div
              key={prog.id}
              className={`rounded-3xl border ${prog.borderColor} bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden group`}
            >
              {/* Card Image with age badge overlay */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src={prog.image}
                  alt={`${prog.title} at Glowing Sun Kids School`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Age Badge */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-black text-slate-800 shadow-sm">
                  {prog.ageGroup}
                </div>

                {/* Class Badge */}
                <div
                  className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-sm"
                  style={{ backgroundColor: prog.themeColor }}
                >
                  {prog.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-slate-800 tracking-tight">
                    {prog.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed min-h-[48px]">
                    {prog.shortDesc}
                  </p>

                  {/* Skills tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {prog.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${prog.accentBg} ${prog.textColor}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action CTAs */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    to={`/programs#${prog.id}`}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 transition flex items-center gap-1"
                  >
                    <span>Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenEnquiry(prog.title)}
                    className={`px-4 py-2 rounded-full text-xs font-black transition shadow-sm ${prog.buttonClass}`}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Day Care Banner (Matches Reference Screenshot rhythm) */}
        {daycareProgram && (
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#1D3557] via-[#264653] to-[#2A9D8F] text-white p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Daycare Photo */}
              <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg border-2 border-white/20 aspect-[16/10] bg-white/10">
                <img
                  src={daycareProgram.image}
                  alt="Daycare & After School at Glowing Sun Kids School"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Daycare Details */}
              <div className="lg:col-span-5 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs uppercase tracking-wider">
                  For Working Parents
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Daycare & Extended Care • Ages 1.5 – 8 Years
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Safe, supervised and enriching extended day care with nutritious warm meals, sanitized nap areas, homework support, and fun evening hobbies.
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-amber-200 font-bold pt-1">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-300" />
                    8:00 AM – 6:30 PM
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    Nutritious Meals Included
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    CCTV Checked
                  </span>
                </div>
              </div>

              {/* Daycare Action Button */}
              <div className="lg:col-span-3 flex flex-col gap-3">
                <button
                  onClick={() => onOpenEnquiry('Daycare')}
                  className="w-full py-3.5 px-6 rounded-full font-black text-sm text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-xl transition transform hover:scale-105 active:scale-95 text-center"
                >
                  Enquire for Daycare
                </button>
                <Link
                  to="/programs#daycare"
                  className="text-xs text-center text-slate-200 hover:text-white underline font-semibold"
                >
                  View Daycare Routine & Meals
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
