import { Star } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';
import { SectionHeader } from '../common/SectionHeader';
import { schoolConfig } from '../../config/school';

export const ParentReviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Parent Testimonials"
          title="Loved by Parents,"
          highlightText="Adored by Kids"
          subtitle="Real experiences shared by our preschool family. Read what makes Glowing Sun Kids School their child's favorite place to be."
        />

        {/* Google Reviews Trust Bar (Matches Reference Screenshot Style) */}
        <div className="max-w-md mx-auto mb-12 bg-white rounded-3xl p-5 shadow-lg border border-amber-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Google G Logo SVG */}
            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2.5">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-slate-800 leading-none">
                  {schoolConfig.stats.rating}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-500 font-semibold mt-1">
                Rated 4.9 out of 5 based on 100+ parent reviews
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            Verified
          </span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Parent Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black text-slate-800">
                    {item.parentName}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold">
                    {item.relation} • {item.program}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 text-xs font-black">
                  {item.parentName.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
