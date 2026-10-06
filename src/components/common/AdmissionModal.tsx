import { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, Calendar, User, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SunMascot } from './SunMascot';
import { schoolConfig } from '../../config/school';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  defaultProgram = 'Play Group',
}) => {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState(defaultProgram);
  const [visitDate, setVisitDate] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !phone.trim() || !childName.trim()) {
      setError('Please provide Parent Name, Child Name, and Phone Number.');
      return;
    }
    setError('');
    setIsSubmitted(true);

    // Fire joyful celebratory confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFB703', '#FB8500', '#2A9D8F', '#E76F51', '#E9C46A'],
      });
    } catch {
      // Ignore if confetti not supported
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setParentName('');
    setChildName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-amber-100 overflow-hidden transform transition-all duration-300 scale-100 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#2A9D8F] p-5 text-white flex items-center justify-between relative overflow-hidden">
          {/* Subtle background sun rays */}
          <div className="absolute -right-6 -bottom-6 opacity-20 pointer-events-none">
            <SunMascot size={120} animate={false} />
          </div>

          <div className="flex items-center gap-3 relative z-10">
            <div className="bg-white/20 p-2 rounded-2xl backdrop-blur-sm">
              <SunMascot size={36} showRays={false} />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight leading-tight">
                Quick Admission Enquiry
              </h3>
              <p className="text-xs text-amber-100 font-medium">
                Glowing Sun Kids School • Academic Session Admissions Open
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/30 text-white transition focus:outline-none relative z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-4 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h4 className="text-2xl font-black text-slate-800">
                Thank You, {parentName}!
              </h4>
              <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                We have received your admission enquiry for{' '}
                <strong className="text-slate-800">{childName}</strong> for the{' '}
                <span className="text-[#E76F51] font-bold">{program}</span> program.
                Our Admissions Counselor will call you at{' '}
                <strong className="text-slate-800">{phone}</strong> within 2 school hours.
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200/60 max-w-md mx-auto text-left flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <strong>Need instant answers?</strong> You can also connect directly with our principal desk via WhatsApp at{' '}
                  <a
                    href={`https://wa.me/${schoolConfig.contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold underline text-amber-950"
                  >
                    {schoolConfig.contact.displayWhatsapp}
                  </a>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 text-xs rounded-xl bg-rose-50 text-rose-700 border border-rose-200">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Child Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Child's Full Name *
                  </label>
                  <div className="relative">
                    <SunMascot size={18} showRays={false} className="absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:border-transparent transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="e.g. priya@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:border-transparent transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Program Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Program Interested In
                  </label>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:border-transparent transition"
                  >
                    <option value="Play Group">Play Group (1.5 – 2.5 yrs)</option>
                    <option value="Nursery">Nursery (2.5 – 3.5 yrs)</option>
                    <option value="Junior KG">Junior KG (3.5 – 4.5 yrs)</option>
                    <option value="Senior KG">Senior KG (4.5 – 5.5 yrs)</option>
                    <option value="Daycare">Daycare & After School</option>
                  </select>
                </div>

                {/* Preferred Visit Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Campus Visit Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:border-transparent transition"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Any specific question or note for our team?
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Would love to know if morning bus route is available near Adarsh Nagar..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:border-transparent transition resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#F4A261] to-[#E76F51] hover:from-[#e8934e] hover:to-[#d75f42] text-white font-black text-sm tracking-wide shadow-lg shadow-amber-500/25 transition duration-300 flex items-center justify-center gap-2 transform active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Enquiry</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Your privacy is fully respected. We never spam or share your contact details.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
