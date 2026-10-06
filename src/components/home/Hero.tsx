import { Sparkles, ArrowRight, ShieldCheck, Heart, Star } from 'lucide-react';
import { SunMascot } from '../common/SunMascot';
import { PlayfulCloud, SparkleStar } from '../common/DecorativeElements';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#FFFDF9] via-[#FDF6EC]/60 to-[#FDFBF7]">
      {/* Playful Floating Decorative Background Elements */}
      <div className="absolute top-10 left-6 sm:left-16 pointer-events-none opacity-80 animate-float-gentle">
        <PlayfulCloud className="w-24 sm:w-32" />
      </div>
      <div className="absolute top-24 right-10 sm:right-20 pointer-events-none opacity-80 animate-float-reverse">
        <PlayfulCloud className="w-20 sm:w-28" />
      </div>
      <div className="absolute top-1/2 left-4 pointer-events-none opacity-70">
        <SparkleStar size={28} color="#FFB703" className="animate-spin-slow" />
      </div>
      <div className="absolute top-1/3 right-8 pointer-events-none opacity-70">
        <SparkleStar size={22} color="#E76F51" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Compelling Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Admissions Open Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-950 text-xs sm:text-sm font-black shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E76F51] animate-ping" />
              <span>Admissions Open 2026–27 • Limited Seats</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#263238] tracking-tight leading-[1.12]">
              Where Little Minds{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#2A9D8F]">
                Shine Bright
                {/* Cheerful Sun beam flourish */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#FFB703]"
                  viewBox="0 0 100 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9 C 25 1, 50 12, 75 4 C 85 2, 95 10, 98 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              A joyful and nurturing preschool in Jodhpur where children learn, explore, create, and grow with confidence. Built on activity-based learning, child-first safety, and genuine love.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-black text-base text-white bg-gradient-to-r from-[#F4A261] to-[#E76F51] hover:from-[#e8934e] hover:to-[#d75f42] shadow-xl shadow-amber-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-200" />
                <span>Book a Campus Visit</span>
              </button>

              <a
                href="#programs"
                className="w-full sm:w-auto px-7 py-4 rounded-full font-bold text-base text-slate-800 bg-white hover:bg-amber-50 border border-slate-200 shadow-sm transition duration-200 flex items-center justify-center gap-2"
              >
                <span>Explore Classes</span>
                <ArrowRight className="w-4 h-4 text-[#F4A261]" />
              </a>
            </div>

            {/* Mini Trust Checklist */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-600">
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>CCTV Safe Campus</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-xs">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>1:6 Playgroup Ratio</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-xs">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>4.9 Google Rated</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Sun Mascot & Badges (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center pt-6 lg:pt-0">
            {/* Large Sun Aura Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFB703]/25 via-[#F4A261]/20 to-[#2A9D8F]/15 rounded-[3rem] blur-2xl transform scale-110 -z-10" />

            {/* Animated Sun Mascot at top corner */}
            <div className="absolute -top-12 -right-4 sm:-right-8 z-30">
              <SunMascot size={92} animate={true} mood="happy" />
            </div>

            {/* Main Rounded Image Container (NO overflow-hidden on outer container so badges float freely) */}
            <div className="relative w-full max-w-md rounded-[2.5rem] p-3 bg-white shadow-2xl border-4 border-amber-100">
              {/* Floating Pill: 500+ Happy Families (Visible and prominent at top-left) */}
              <div className="absolute -top-5 -left-3 sm:-left-7 z-30 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white shadow-xl border border-amber-200/90 animate-float-gentle">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
                </span>
                <div>
                  <p className="text-xs font-black text-slate-800 leading-tight">500+ Happy Families</p>
                  <p className="text-[10px] text-emerald-600 font-bold leading-tight">★ 4.9 Verified Reviews</p>
                </div>
              </div>

              {/* Image Frame */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-amber-50 shadow-inner">
                <img
                  src="/images/hero-preschool-kids.jpg"
                  alt="Happy preschoolers engaged in creative block play and painting at Glowing Sun Kids School"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition duration-700"
                />

                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3 inset-x-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-amber-100 z-10">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-amber-100/90 flex items-center justify-center shrink-0">
                        <SunMascot size={26} showRays={false} />
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-800 leading-tight">
                          Loving & Certified Teachers
                        </p>
                        <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                          Fostering confidence & joy everyday
                        </p>
                      </div>
                    </div>
                    <div className="flex text-amber-400 shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

