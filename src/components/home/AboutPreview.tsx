import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Smile } from 'lucide-react';
import { SunMascot } from '../common/SunMascot';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative sun rays in background */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 opacity-5 pointer-events-none">
        <SunMascot size={400} animate={false} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual & Educator Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-amber-50">
                <img
                  src="/images/about-storytime.jpg"
                  alt="Educator reading an illustrated storybook to cheerful toddlers in cozy reading nook"
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>

              {/* Floating Director Quote Card */}
              <div className="absolute -bottom-8 sm:-bottom-10 -right-4 sm:-right-8 max-w-xs sm:max-w-sm bg-white p-5 rounded-3xl shadow-2xl border border-amber-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F4A261] to-[#E76F51] flex items-center justify-center text-white font-bold text-sm">
                    GS
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-800">
                      Mrs. Sunita Agarwal
                    </h4>
                    <p className="text-[11px] font-semibold text-[#2A9D8F]">
                      Director & Early Childhood Educator
                    </p>
                  </div>
                </div>
                <p className="text-xs italic text-slate-600 leading-relaxed">
                  "Every child carries an extraordinary spark within them. Our role is to create a warm, loving space where that spark turns into a radiant, lifelong love for learning."
                </p>
              </div>

              {/* Top Pill */}
              <div className="absolute -top-4 -left-4 bg-amber-400 text-amber-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Smile className="w-4 h-4" />
                <span>Child-First Philosophy</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#263238] tracking-tight leading-tight">
              A School Born From{' '}
              <span className="text-[#F4A261]">Love & Care</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              At <strong className="text-slate-800">Glowing Sun Kids School</strong>, we believe every child deserves a joyful beginning. Early childhood is not a race to memorize facts — it is a magical window of discovery where confidence, emotional resilience, curiosity, and empathy take root.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our campus in Jodhpur has been thoughtfully designed around the natural needs of young children: airy, bright classrooms, sensory-rich play areas, background-verified educators, and a compassionate culture where children feel as cherished and secure as they do at home.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: 'Activity-Based Curriculum', desc: 'Hands-on discovery over rote memorization' },
                { title: 'Safe & CCTV Monitored', desc: 'Complete security & hygiene standards' },
                { title: 'Qualified Female Educators', desc: 'Patient, certified early childhood experts' },
                { title: 'Parent-Teacher Partnership', desc: 'Regular transparent milestone sharing' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-amber-100 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">{item.title}</h5>
                    <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Link to About Page */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-black text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-lg transition duration-200"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
