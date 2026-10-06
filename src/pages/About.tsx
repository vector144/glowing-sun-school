import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  Target,
  Eye,
  Smile
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { SunMascot } from '../components/common/SunMascot';
import { PlayfulCloud } from '../components/common/DecorativeElements';
import { schoolConfig } from '../config/school';

interface AboutProps {
  onOpenEnquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenEnquiry }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      title: "Safety & Hygiene First",
      desc: "Child-proofed environments, anti-skid surfaces, 24/7 CCTV transparency, and strict health protocols ensure unconditional safety.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50 border-emerald-100",
    },
    {
      title: "Joy In Discovery",
      desc: "We believe children learn best when learning feels like joyous play. Curiosity is encouraged and celebrated every day.",
      icon: <Smile className="w-6 h-6 text-[#F4A261]" />,
      bg: "bg-amber-50 border-amber-100",
    },
    {
      title: "Individual Attention",
      desc: "With small classroom batches and loving educator support, every child's unique temperament, pace, and talent are honored.",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      bg: "bg-rose-50 border-rose-100",
    },
    {
      title: "Parent Partnership",
      desc: "We consider parents our co-educators. Open transparent communication, daily progress photos, and regular workshops keep families united.",
      icon: <Users className="w-6 h-6 text-[#2A9D8F]" />,
      bg: "bg-teal-50 border-teal-100",
    },
  ];

  const leadership = [
    {
      name: "Mrs. Sunita Agarwal",
      role: "Director & Founder",
      bio: "Over 14 years of early childhood pedagogy experience. Passionate about activity-first learning and creating an anxiety-free beginning for young kids.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      tag: "Founding Visionary",
    },
    {
      name: "Ritu Vardhan",
      role: "Head of Pre-Primary Academics",
      bio: "Certified Montessori trainer & phonics specialist who designs our hands-on sensory curriculum and fine motor progression pathways.",
      image: "https://images.unsplash.com/photo-1659355893982-cb1e87a8758a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=600&q=80",
      tag: "Curriculum Architect",
    },
    {
      name: "Dr. Alok Sen",
      role: "Child Health & Wellness Advisor",
      bio: "Consulting pediatrician overseeing our ergonomic classroom furniture, student nutrition menus, hygiene audits, and first-aid readiness.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
      tag: "Child Wellness",
    },
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 bg-gradient-to-b from-[#FFFDF9] to-[#FDF6EC]/50 overflow-hidden border-b border-amber-100">
        <div className="absolute top-6 left-10 pointer-events-none opacity-80 animate-float-gentle">
          <PlayfulCloud className="w-28" />
        </div>
        <div className="absolute top-10 right-16 pointer-events-none opacity-80 animate-float-reverse">
          <PlayfulCloud className="w-24" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Discover Glowing Sun</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#263238] tracking-tight leading-tight max-w-4xl mx-auto">
            Nurturing Confident, Happy & Curious{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#2A9D8F]">
              Lifelong Learners
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to Glowing Sun Kids School — a cheerful sanctuary where early education meets boundless imagination, safety, and deep emotional security.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-slate-500">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <span>/</span>
            <span className="text-[#F4A261]">About Us</span>
          </div>
        </div>
      </section>

      {/* Our Story & Background */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-amber-50">
                <img
                  src="/images/real/family-school-reception.jpg"
                  alt="Parents and student at Glowing Sun Kids School reception"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Sun Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 rounded-3xl shadow-xl border border-amber-100 flex items-center gap-3">
                <SunMascot size={48} animate={false} />
                <div>
                  <p className="text-sm font-black text-slate-800">Established {schoolConfig.establishedYear}</p>
                  <p className="text-xs text-slate-500 font-semibold">In Jodhpur, Rajasthan</p>
                </div>
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-black uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-orange-600" />
                <span>Our Founding Story</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight leading-tight">
                How Glowing Sun Began
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Glowing Sun Kids School was founded with a singular conviction: that early childhood should never feel like a high-pressure drill. Every child has a natural rhythm of curiosity, empathy, and joy.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our founders noticed that too many young toddlers experienced intense separation anxiety and rigid desk-bound learning. They envisioned a vibrant garden of discovery — with child-height windows, warm wooden sensory toys, sunlit reading corners, and educators who listen with their hearts.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Today, Glowing Sun is trusted by hundreds of families across Jodhpur as a joyful second home where children blossom into communicative, self-assured young individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-[#FDFBF7] rounded-3xl p-8 border border-amber-100 shadow-md relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-3">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To provide every child with an emotionally secure, inspiring, and developmentally enriched foundation through activity-based learning, cultivating confidence, kindness, creativity, and a lifelong excitement for learning.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#FDFBF7] rounded-3xl p-8 border border-teal-100 shadow-md relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-3">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be the most trusted and loving early childhood center in the region, recognized for compassionate child-centered pedagogy, outstanding elementary school readiness, and nurturing happy, resilient children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Foundation"
            title="Four Pillars That"
            highlightText="Guide Everything We Do"
            subtitle="Our educational values shape how our teachers converse with children, how classrooms are arranged, and how every lesson is taught."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-6 border ${val.bg} shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                <div>
                  <div className="p-3 rounded-2xl bg-slate-50 w-fit mb-4">
                    {val.icon}
                  </div>
                  <h4 className="text-lg font-black text-slate-800 mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team / Leadership */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Passionate Mentors"
            title="The People Behind"
            highlightText="Glowing Sun"
            subtitle="Our certified educators bring warmth, extensive teaching experience, and an authentic passion for early childhood development."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#FDFBF7] rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 text-[10px] font-black uppercase tracking-wider text-slate-800 shadow-sm">
                    {member.tag}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-800 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#F4A261] mt-0.5">
                      {member.role}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Campus Visit CTA */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#2A9D8F] text-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
              Come Visit Glowing Sun in Person
            </h3>
            <p className="text-sm sm:text-base text-amber-100 max-w-xl mx-auto leading-relaxed mb-6">
              Walk through our classrooms, experience the joyful energy, and meet the teachers who will guide your child's first learning steps.
            </p>
            <button
              onClick={onOpenEnquiry}
              className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-black text-sm hover:bg-amber-50 transition shadow-lg transform hover:scale-105"
            >
              Book a Campus Visit Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
