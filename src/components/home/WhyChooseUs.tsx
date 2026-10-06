import {
  Heart,
  ShieldCheck,
  Users,
  Smile,
  CheckCircle,
  Lightbulb,
  Award
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Smile className="w-6 h-6 text-[#F4A261]" />,
      badge: "Gentle Start",
      title: "Eases First-Day Anxiety",
      description: "No tearful goodbyes. Our loving phased settling routine turns starting school into a magical, reassuring adventure.",
      color: "bg-amber-50 border-amber-200/80 text-amber-900",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#E76F51]" />,
      badge: "Emotional Security",
      title: "Deep Emotional Nurture",
      description: "Children learn best when they feel deeply cherished. Low teacher ratios ensure every child receives patient one-on-one attention.",
      color: "bg-rose-50 border-rose-200/80 text-rose-900",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#2A9D8F]" />,
      badge: "Joyful Pedagogy",
      title: "Play & Discovery Curriculum",
      description: "Concrete materials, sensory bins, and STEM experiments foster natural curiosity instead of dry rote cramming.",
      color: "bg-teal-50 border-teal-200/80 text-teal-900",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      badge: "Uncompromised Safety",
      title: "Child-Proof & CCTV Safe",
      description: "Live camera coverage, biometric entry, soft-padded play flooring, and emergency-certified pediatric first-aid staff.",
      color: "bg-emerald-50 border-emerald-200/80 text-emerald-900",
    },
    {
      icon: <Award className="w-6 h-6 text-[#3A86FF]" />,
      badge: "Loving Faculty",
      title: "Passionate Early Educators",
      description: "Background-verified, certified teachers who genuinely love children and understand diverse learning paces.",
      color: "bg-blue-50 border-blue-200/80 text-blue-900",
    },
    {
      icon: <Users className="w-6 h-6 text-[#8338EC]" />,
      badge: "Transparent Bond",
      title: "True Parent Partnership",
      description: "Daily photo highlights, developmental progress milestones, and open-door communication with the school leadership.",
      color: "bg-purple-50 border-purple-200/80 text-purple-900",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="The Glowing Sun Advantage"
          title="Why Parents Trust"
          highlightText="Glowing Sun"
          subtitle="Every corner of our school is designed to inspire, delight, and protect your child — because your child's happiness is our most sacred promise."
        />

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-100 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl border ${item.color} shadow-xs`}>
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight group-hover:text-[#F4A261] transition">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-50 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Verified School Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
