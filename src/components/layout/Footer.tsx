import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  MessageCircle,
  ShieldCheck,
  Award,
  ArrowUp
} from 'lucide-react';
import { schoolConfig } from '../../config/school';
import { SunMascot } from '../common/SunMascot';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1D3557] text-white pt-16 pb-10 overflow-hidden">
      {/* Playful Top Wave / Sunbeam decoration */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FFB703] via-[#F4A261] via-[#E76F51] to-[#2A9D8F]" />

      {/* Subtle background ambient sun watermark */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-12 translate-y-12">
        <SunMascot size={320} animate={false} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="bg-white/10 p-2 rounded-2xl backdrop-blur-xs">
                <SunMascot size={46} />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white block">
                  Glowing Sun
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E9C46A] block">
                  Kids School & Daycare
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Where little minds shine bright. Providing a safe, affectionate, and activity-rich preschool environment in Jodhpur that fosters curiosity, emotional well-being, and foundational learning.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-amber-200">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                CCTV Safe Campus
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                Pedagogical Excellence
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#E9C46A]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-amber-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-amber-300 transition">
                  Our Programs
                </Link>
              </li>
              <li>
                <a href="/#facilities" className="hover:text-amber-300 transition">
                  Campus Facilities
                </a>
              </li>
              <li>
                <a href="/#gallery" className="hover:text-amber-300 transition">
                  Life & Gallery
                </a>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-amber-300 transition">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#2A9D8F]">
              Our Classes
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/programs#play-group" className="hover:text-teal-300 transition">
                  Play Group (1.5–2.5 Yrs)
                </Link>
              </li>
              <li>
                <Link to="/programs#nursery" className="hover:text-teal-300 transition">
                  Nursery (2.5–3.5 Yrs)
                </Link>
              </li>
              <li>
                <Link to="/programs#junior-kg" className="hover:text-teal-300 transition">
                  Junior KG (3.5–4.5 Yrs)
                </Link>
              </li>
              <li>
                <Link to="/programs#senior-kg" className="hover:text-teal-300 transition">
                  Senior KG (4.5–5.5 Yrs)
                </Link>
              </li>
              <li>
                <Link to="/programs#daycare" className="hover:text-teal-300 transition">
                  Extended Daycare
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Timings (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#F4A261]">
              Visit & Connect
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{schoolConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{schoolConfig.timings.schoolHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${schoolConfig.contact.phone}`} className="hover:underline">
                  {schoolConfig.contact.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                <a href={`mailto:${schoolConfig.contact.email}`} className="hover:underline">
                  {schoolConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${schoolConfig.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-500/30 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Admissions Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {schoolConfig.name}. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Nurturing little minds with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
