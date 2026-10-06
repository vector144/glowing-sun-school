import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { schoolConfig } from '../../config/school';
import { SunMascot } from '../common/SunMascot';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Programs', path: '/programs' },
    { label: 'Facilities', path: '/#facilities' },
    { label: 'Gallery', path: '/#gallery' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

  return (
    <header className="w-full z-40 sticky top-0 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#1D3557] text-white text-xs font-medium py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-200">
              <Clock className="w-3.5 h-3.5" />
              {schoolConfig.timings.schoolHours}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              {schoolConfig.address.area}, {schoolConfig.address.city}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${schoolConfig.contact.phone}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{schoolConfig.contact.displayPhone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`https://wa.me/${schoolConfig.contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-amber-900/5 py-3'
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <SunMascot size={46} animate={true} />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#263238] flex items-center gap-1 group-hover:text-[#F4A261] transition">
                Glowing Sun
                <span className="inline-block w-2 h-2 rounded-full bg-[#E76F51]" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2A9D8F] -mt-1">
                Kids School & Daycare
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`px-3.5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-amber-100/70 text-amber-900 shadow-xs'
                    : 'text-slate-600 hover:text-[#F4A261] hover:bg-amber-50/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-black text-sm text-white bg-gradient-to-r from-[#F4A261] to-[#E76F51] hover:from-[#e8934e] hover:to-[#d75f42] shadow-md shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-100" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEnquiry}
              className="sm:hidden px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#F4A261]"
            >
              Enquire
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-amber-50 text-slate-800 hover:bg-amber-100 transition focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-4 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-bold flex items-center justify-between transition ${
                    isActive(link.path)
                      ? 'bg-amber-100 text-amber-900'
                      : 'text-slate-700 hover:bg-amber-50 hover:text-amber-800'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </Link>
              ))}
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
              <a
                href={`tel:${schoolConfig.contact.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Call School</span>
              </a>
              <a
                href={`https://wa.me/${schoolConfig.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="mt-3 w-full py-3 rounded-2xl bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-white text-sm font-black shadow-md flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Book Campus Visit / Enquire</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
