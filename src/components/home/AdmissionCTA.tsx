import React, { useState } from 'react';
import { Phone, MessageCircle, ShieldCheck, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { schoolConfig } from '../../config/school';
import { SunMascot } from '../common/SunMascot';

export const AdmissionCTA: React.FC = () => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [childAge, setChildAge] = useState('');
  const [program, setProgram] = useState('Play Group');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !phone.trim()) return;
    setSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FFB703', '#F4A261', '#2A9D8F', '#E76F51'],
      });
    } catch {
      // Ignore
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#1D3557] text-white relative overflow-hidden">
      {/* Playful background sun aura */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 opacity-10 pointer-events-none">
        <SunMascot size={450} animate={false} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Reassurance & Direct Calls (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-black uppercase tracking-wider border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open 2026–27</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Book a Free{' '}
              <span className="text-[#FFB703]">School Visit Today</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
              Takes 30 seconds. Our counseling team will reach out within 2 hours to schedule your campus walk-through and answer all your questions with warmth.
            </p>

            {/* Guarantees */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Safe — Your personal contact details are never shared.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-300 shrink-0" />
                <span>Prompt callback within 2 school hours.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero pressure or sales calls — just friendly parental guidance.</span>
              </div>
            </div>

            {/* Direct Connect Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
              <a
                href={`tel:${schoolConfig.contact.phone}`}
                className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase">Call Us Directly</p>
                  <p className="text-xs sm:text-sm font-black text-white">{schoolConfig.contact.displayPhone}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${schoolConfig.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-500/30 transition flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/30 text-emerald-300 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-emerald-300 font-bold uppercase">Chat on WhatsApp</p>
                  <p className="text-xs sm:text-sm font-black text-white">Instant Assistance</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Enquiry Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 border border-amber-100 max-w-lg mx-auto lg:ml-auto">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800">
                    Enquiry Received!
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">
                    Thank you, <strong className="text-slate-900">{parentName}</strong>. Our school coordinator will call you at <strong className="text-slate-900">{phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-xl font-black text-slate-800 tracking-tight">
                      Quick Admission Enquiry
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Fill in your details — we'll do the rest!
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Parent's Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Child's Age
                      </label>
                      <select
                        value={childAge}
                        onChange={(e) => setChildAge(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                      >
                        <option value="">Select age</option>
                        <option value="1.5 - 2.5 yrs">1.5 – 2.5 Years</option>
                        <option value="2.5 - 3.5 yrs">2.5 – 3.5 Years</option>
                        <option value="3.5 - 4.5 yrs">3.5 – 4.5 Years</option>
                        <option value="4.5 - 5.5 yrs">4.5 – 5.5 Years</option>
                        <option value="5.5+ yrs">5.5+ Years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Class Interested In
                      </label>
                      <select
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                      >
                        <option value="Play Group">Play Group</option>
                        <option value="Nursery">Nursery</option>
                        <option value="Junior KG">Junior KG</option>
                        <option value="Senior KG">Senior KG</option>
                        <option value="Daycare">Daycare</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#FB8500] hover:from-[#e8934e] hover:to-[#ea7600] text-white font-black text-sm tracking-wide shadow-lg shadow-amber-500/25 transition duration-200 flex items-center justify-center gap-2 transform active:scale-98"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry — We'll Call You!</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-slate-400">
                    🔒 We respect your privacy. No spam calls, no obligation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
