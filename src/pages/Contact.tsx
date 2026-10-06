import { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle2,
  ChevronDown,
  Navigation,
  Sparkles,
  Building
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { schoolConfig } from '../config/school';
import { faqsData } from '../data/faqs';
import { SectionHeader } from '../components/common/SectionHeader';

export const Contact: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('Admission');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<string | null>(faqsData[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#2A9D8F', '#F4A261', '#FFB703', '#E76F51'],
      });
    } catch {
      // Ignore
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* Header Banner */}
      <section className="relative pt-12 pb-20 bg-gradient-to-b from-[#FFFDF9] to-[#FDF6EC]/50 border-b border-amber-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>We'd Love to Hear From You</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#263238] tracking-tight leading-tight max-w-3xl mx-auto">
            Let's Start a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#2A9D8F]">
              Conversation
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about admissions, our daily routines, or safety? Our doors and phone lines are always open with a warm smile.
          </p>
        </div>
      </section>

      {/* Main Split: Form & Info */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800">
                    Message Sent Successfully!
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{name}</strong>. Our school office will review your inquiry and connect with you at <strong className="text-slate-900">{phone}</strong> within 2 school hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                      How Can We Help You?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Choose your subject below and drop your message.
                    </p>
                  </div>

                  {/* Topic Selector Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['Admission', 'Campus Visit', 'Fees', 'Day Care', 'Other'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                          inquiryType === type
                            ? 'bg-[#1D3557] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-amber-50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. priya@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message or Question
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="e.g. I would like to schedule a Saturday visit to check the playgroup classroom for my 2-year-old child..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#1D3557] to-[#264653] hover:from-[#152740] hover:to-[#1a333d] text-white font-black text-sm tracking-wide shadow-lg shadow-slate-900/10 transition duration-200 flex items-center justify-center gap-2 transform active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact Information & Direct Action Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Call Card */}
              <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Call Us Directly
                  </h4>
                  <a
                    href={`tel:${schoolConfig.contact.phone}`}
                    className="text-lg font-black text-slate-800 hover:text-[#F4A261] transition block mt-0.5"
                  >
                    {schoolConfig.contact.displayPhone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    {schoolConfig.timings.officeHours}
                  </p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Instant WhatsApp
                  </h4>
                  <a
                    href={`https://wa.me/${schoolConfig.contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-black text-emerald-600 hover:text-emerald-700 transition block mt-0.5"
                  >
                    {schoolConfig.contact.displayWhatsapp}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Typically replies within 10–15 minutes
                  </p>
                </div>
              </div>

              {/* Campus Address Card */}
              <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Visit The Campus
                  </h4>
                  <p className="text-sm font-bold text-slate-800 mt-0.5 leading-snug">
                    {schoolConfig.address.full}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {schoolConfig.location.landmarkNote}
                  </p>
                  <a
                    href={schoolConfig.location.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F4A261] hover:underline mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps & Landmark Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Map Frame (8 cols) */}
            <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 aspect-[16/10] bg-slate-100 relative">
              <iframe
                title="Glowing Sun Kids School Location Map"
                src={schoolConfig.location.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* How to Reach Us (4 cols) */}
            <div className="lg:col-span-4 bg-[#FDFBF7] p-6 sm:p-8 rounded-3xl border border-amber-100 space-y-4">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-[#F4A261]" />
                <h3 className="text-xl font-black text-slate-800">
                  How to Reach Us
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <div>
                  <strong className="text-slate-800 block">🚗 By Car / Auto:</strong>
                  Convenient access from main City Central Road with designated parent drop-off bays.
                </div>
                <div>
                  <strong className="text-slate-800 block">🚌 By Public Transit:</strong>
                  Just 400m from Central Park Bus Stop with auto-rickshaws available round the clock.
                </div>
                <div>
                  <strong className="text-slate-800 block">📍 Prominent Landmark:</strong>
                  Directly opposite Lotus Lake Garden gate.
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={schoolConfig.location.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition"
                >
                  <Navigation className="w-4 h-4 text-amber-300" />
                  <span>Open in Google Maps App</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent FAQs Accordion */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Common Questions from"
            highlightText="Parents"
            subtitle="Find quick, helpful answers to queries most parents ask before enrolling."
          />

          <div className="space-y-4">
            {faqsData.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-black text-slate-800">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#F4A261]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
