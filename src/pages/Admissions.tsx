import { useState, useEffect } from 'react';
import {
  FileText,
  CheckCircle2,
  Sparkles,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeader } from '../components/common/SectionHeader';

export const Admissions: React.FC = () => {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('Play Group');
  const [visitDate, setVisitDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !phone.trim() || !childName.trim()) return;
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FFB703', '#F4A261', '#2A9D8F', '#E76F51', '#3A86FF'],
      });
    } catch {
      // Ignore
    }
  };

  const steps = [
    {
      num: "01",
      title: "Submit Enquiry",
      desc: "Fill in our quick admission form online or drop a message on our official WhatsApp desk.",
      color: "bg-amber-100 text-amber-900 border-amber-200",
    },
    {
      num: "02",
      title: "Campus Discovery Visit",
      desc: "Visit our campus with your child. Walk through play areas, explore smart rooms, and meet the educators.",
      color: "bg-teal-100 text-teal-900 border-teal-200",
    },
    {
      num: "03",
      title: "Child Interaction",
      desc: "Zero stress, zero written tests! An informal, joyful conversation to understand your child's personality and routine.",
      color: "bg-rose-100 text-rose-900 border-rose-200",
    },
    {
      num: "04",
      title: "Enrollment & Welcome Kit",
      desc: "Submit foundational paperwork, receive the Glowing Sun student welcome kit, and start the sunny adventure!",
      color: "bg-purple-100 text-purple-900 border-purple-200",
    },
  ];

  const eligibility = [
    { class: "Play Group", age: "1.5 to 2.5 Years", timings: "9:00 AM – 11:30 AM" },
    { class: "Nursery", age: "2.5 to 3.5 Years", timings: "8:30 AM – 12:00 PM" },
    { class: "Junior KG (LKG)", age: "3.5 to 4.5 Years", timings: "8:30 AM – 12:30 PM" },
    { class: "Senior KG (UKG)", age: "4.5 to 5.5 Years", timings: "8:30 AM – 1:00 PM" },
    { class: "Daycare & After School", age: "1.5 to 8 Years", timings: "8:00 AM – 6:30 PM" },
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* Header Banner */}
      <section className="relative pt-12 pb-20 bg-gradient-to-b from-[#FFFDF9] to-[#FDF6EC]/50 border-b border-amber-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Admissions Session 2026–27 Open</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#263238] tracking-tight leading-tight max-w-3xl mx-auto">
            Give Your Child a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#2A9D8F]">
              Bright Beginning
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We welcome little learners to an encouraging, anxiety-free learning home. Follow our simple, parent-friendly 4-step admission process.
          </p>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Simple & Transparent"
            title="The 4-Step"
            highlightText="Admission Journey"
            subtitle="We ensure that applying to Glowing Sun is an enjoyable, stress-free experience for both parents and toddlers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-slate-100 flex flex-col justify-between relative group hover:shadow-xl transition"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${st.color} border flex items-center justify-center font-black text-lg mb-4`}>
                    {st.num}
                  </div>
                  <h3 className="text-xl font-black text-slate-800 tracking-tight mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Form & Eligibility Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Eligibility Table & Documents (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight mb-4">
                  Age Eligibility Guide
                </h3>
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-amber-50 text-slate-700 font-black">
                      <tr>
                        <th className="p-3">Program</th>
                        <th className="p-3">Age Bracket</th>
                        <th className="p-3">Timings</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-semibold text-slate-600">
                      {eligibility.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition">
                          <td className="p-3 font-bold text-slate-900">{row.class}</td>
                          <td className="p-3">{row.age}</td>
                          <td className="p-3 text-xs">{row.timings}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Documents Checklist */}
              <div className="bg-[#FDFBF7] p-6 rounded-3xl border border-amber-100">
                <h4 className="text-base font-black text-slate-800 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#F4A261]" />
                  <span>Documents for Final Enrollment:</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Copy of Child's Birth Certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>4 Passport-size photographs of the child</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>2 Passport-size photographs of each parent</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Copy of Address Proof (Aadhar / Utility Bill)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Child's Immunization / Vaccination Record copy</span>
                  </li>
                </ul>
              </div>

              {/* Real Photo Card: Celebrating First Day */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-amber-100 bg-white p-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 relative">
                  <img
                    src="/images/real/first-day-celebration.jpg"
                    alt="First Day Celebration at Glowing Sun Kids School Shikargarh"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-black text-slate-800 shadow-sm">
                    First Day of School at Glowing Sun
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-600 font-medium leading-relaxed">
                  Every child's first step into Glowing Sun Kids School is celebrated with commemorative photo frames, gentle teacher welcomes, and an anxiety-free settling routine.
                </p>
              </div>
            </div>

            {/* Right: Admission Application Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-amber-100">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-800">
                      Application Submitted!
                    </h3>
                    <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{parentName}</strong>. We have registered your enquiry for <strong className="text-slate-900">{childName}</strong>. Our school admission head will contact you within 2 school hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-7 py-3 rounded-full bg-slate-900 text-white font-bold text-sm"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                        Apply for Admission / Book Visit
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Please provide your details below. We will get in touch promptly to arrange your school visit.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Parent / Guardian Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Verma"
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Child's Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Diya Verma"
                          value={childName}
                          onChange={(e) => setChildName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Contact Phone Number *
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

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. rahul@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Class to Enroll In
                        </label>
                        <select
                          value={program}
                          onChange={(e) => setProgram(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                        >
                          <option value="Play Group">Play Group (1.5 – 2.5 yrs)</option>
                          <option value="Nursery">Nursery (2.5 – 3.5 yrs)</option>
                          <option value="Junior KG">Junior KG (3.5 – 4.5 yrs)</option>
                          <option value="Senior KG">Senior KG (4.5 – 5.5 yrs)</option>
                          <option value="Daycare">Daycare & After School</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Preferred Campus Tour Date
                        </label>
                        <input
                          type="date"
                          value={visitDate}
                          onChange={(e) => setVisitDate(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Any questions or special notes?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your child's favorite activities or any dietary/language queries..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4A261] resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#FB8500] hover:from-[#e8934e] hover:to-[#ea7600] text-white font-black text-base tracking-wide shadow-xl shadow-amber-500/25 transition duration-200 flex items-center justify-center gap-2 transform active:scale-98"
                      >
                        <Send className="w-5 h-5" />
                        <span>Submit Admission Enquiry</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-slate-400">
                      🔒 No registration fee to submit an inquiry. We ensure a secure and friendly consultation.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
