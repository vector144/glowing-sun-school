import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Clock, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { programsData } from '../data/programs';
import { PlayfulCloud } from '../components/common/DecorativeElements';

interface ProgramsProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenEnquiry }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* Header Banner */}
      <section className="relative pt-12 pb-20 bg-gradient-to-b from-[#FFFDF9] to-[#FDF6EC]/50 border-b border-amber-100 overflow-hidden text-center">
        <div className="absolute top-6 left-10 pointer-events-none opacity-80 animate-float-gentle">
          <PlayfulCloud className="w-28" />
        </div>
        <div className="absolute top-10 right-16 pointer-events-none opacity-80 animate-float-reverse">
          <PlayfulCloud className="w-24" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Age-Appropriate Curriculum</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#263238] tracking-tight leading-tight max-w-3xl mx-auto">
            Programs Tailored for Every{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#2A9D8F]">
              Milestone & Smile
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From the very first steps in Play Group to graduation-ready Senior KG, our developmentally staged programs give children wings to learn, discover, and excel.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {programsData.map((prog, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={prog.id}
                id={prog.id}
                className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Photo Column (5 cols) */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-amber-50 aspect-[4/3] bg-slate-100">
                      <img
                        src={prog.image}
                        alt={`${prog.title} at Glowing Sun`}
                        className="w-full h-full object-cover"
                      />
                      <span
                        className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white shadow-md"
                        style={{ backgroundColor: prog.themeColor }}
                      >
                        {prog.badge}
                      </span>
                      <span className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full text-xs font-black bg-white/95 backdrop-blur-sm text-slate-800 shadow-md">
                        {prog.ageGroup}
                      </span>
                    </div>
                  </div>

                  {/* Details Column (7 cols) */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        <Calendar className="w-3.5 h-3.5 text-slate-700" />
                        Age: {prog.ageGroup}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5 text-slate-700" />
                        Timings: {prog.timings}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
                      {prog.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {prog.fullDesc}
                    </p>

                    {/* Key Highlights */}
                    <div className="pt-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
                        Curriculum Highlights & Advantages:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {prog.keyHighlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Covered */}
                    <div className="pt-1 flex flex-wrap gap-2">
                      {prog.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={`text-xs font-bold px-3 py-1.5 rounded-xl ${prog.accentBg} ${prog.textColor} border ${prog.borderColor}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <button
                        onClick={() => onOpenEnquiry(prog.title)}
                        className={`px-7 py-3 rounded-full text-sm font-black transition shadow-md hover:shadow-lg transform active:scale-95 ${prog.buttonClass}`}
                      >
                        Enquire for {prog.title}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
