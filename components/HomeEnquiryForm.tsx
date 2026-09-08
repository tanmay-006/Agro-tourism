"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomeEnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted", form);
    setStatus("submitting");

    const emailSubject = `Website Enquiry: ${form.subject} - ${form.name}`;
    const emailBody = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=neemsaiglobal@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    setTimeout(() => {
      window.open(gmailUrl, "_blank");
      setStatus("success");
    }, 1200);
  };

  return (
    <section className="relative py-20 px-6 md:px-10 overflow-hidden bg-[#2c3f16]">
      {/* Background Image with Dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-35"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkZjxjGvZsnLXEGesuFq4_Yd8ki6E9dDAHkeZMV4a2wHeklFEG9S6gHr9yHHHEZOr-4fDpTArfD-vKy6A4avr5avEXUWVc5xjH1TO69arnrny13-A-5BvSaJksRkpyGs8lhbbM_BDG1ByIzPsObOB15V8HXkctbLQaQiP1Anl_Ddicn26l5mQvHhS8Rq1AkdioSk4RFyARqWThvRKz2BKPU9A7vlhZSc7a6-xwlshxEQe5bP1bhOM27omVNna7hcB6M_-gbioKACc')"
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal direction="up" delay={0}>
          <span className="text-xs uppercase tracking-widest text-[#a67c1c] font-semibold mb-2 block">
            CONTACT WITH ME
          </span>
          <h2 className="font-serif-display text-4xl md:text-5xl text-[#fcf5e5] mb-10">
            Enquiry Form
          </h2>
        </ScrollReveal>

        {status === "success" ? (
          <ScrollReveal direction="fade" delay={0}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-[#f7f3ec] max-w-xl mx-auto shadow-xl space-y-6">
              <div>
                <h3 className="font-serif-display text-3xl mb-2 text-[#fcf5e5]">Inquiry Prepared!</h3>
                <p className="text-[#98b5a3] text-sm leading-relaxed">
                  We have prepared your enquiry draft to <strong>neemsaiglobal@gmail.com</strong>. If your browser didn't open the tab, use one of the options below to send:
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=neemsaiglobal@gmail.com&su=${encodeURIComponent(`Website Enquiry: ${form.subject} - ${form.name}`)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#839705] hover:bg-[#708004] text-white text-center rounded-xl text-xs font-semibold uppercase tracking-wider transition duration-300 shadow-md cursor-pointer"
                >
                  ✉️ Open Gmail (Web)
                </a>

                <a
                  href={`mailto:neemsaiglobal@gmail.com?subject=${encodeURIComponent(`Website Enquiry: ${form.subject} - ${form.name}`)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`)}`}
                  className="px-6 py-3 bg-[#2c3f16] hover:bg-[#1d2a0f] text-[#fcf5e5] text-center rounded-xl text-xs font-semibold uppercase tracking-wider transition duration-300 shadow-md border border-white/15 cursor-pointer"
                >
                  💻 Open Mail App
                </a>

                <button
                  type="button"
                  onClick={() => {
                    const text = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`;
                    navigator.clipboard.writeText(text);
                    alert("Enquiry details copied to clipboard!");
                  }}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-[#fcf5e5] text-center rounded-xl text-xs font-semibold uppercase tracking-wider transition duration-300 border border-white/10 cursor-pointer"
                >
                  📋 Copy Text
                </button>
              </div>

              <div className="pt-2">
                <button 
                  type="button"
                  onClick={() => {
                    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                    setStatus("idle");
                  }}
                  className="text-xs text-[#a67c1c] hover:underline font-semibold cursor-pointer"
                >
                  ← Send Another Message
                </button>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal direction="up" delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl bg-white px-6 py-4 border-none text-[#2c3f16] placeholder-[#48624a]/60 shadow-sm outline-none focus:ring-2 focus:ring-[#2c3f16] text-sm font-medium transition duration-300"
                />
                {/* Email */}
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl bg-white px-6 py-4 border-none text-[#2c3f16] placeholder-[#48624a]/60 shadow-sm outline-none focus:ring-2 focus:ring-[#2c3f16] text-sm font-medium transition duration-300"
                />
                {/* Phone */}
                <div className="relative w-full">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-sm text-[#48624a] pointer-events-none select-none">
                    🇮🇳 <span className="text-[10px] text-[#48624a]/85">▼</span>
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl bg-white pl-16 pr-6 py-4 border-none text-[#2c3f16] placeholder-[#48624a]/60 shadow-sm outline-none focus:ring-2 focus:ring-[#2c3f16] text-sm font-medium transition duration-300"
                  />
                </div>
                {/* Subject */}
                <input
                  type="text"
                  required
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-xl bg-white px-6 py-4 border-none text-[#2c3f16] placeholder-[#48624a]/60 shadow-sm outline-none focus:ring-2 focus:ring-[#2c3f16] text-sm font-medium transition duration-300"
                />
              </div>
              
              {/* Message */}
              <textarea
                required
                rows={5}
                placeholder="Write a message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl bg-white px-6 py-4 border-none text-[#2c3f16] placeholder-[#48624a]/60 shadow-sm outline-none focus:ring-2 focus:ring-[#2c3f16] text-sm font-medium transition duration-300 resize-none"
              />
              
              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-[#839705] hover:bg-[#708004] hover:scale-105 active:scale-95 text-[#fcf5e5] font-semibold px-12 py-4 rounded-xl shadow-lg transition duration-300 uppercase tracking-wider text-xs whitespace-nowrap min-w-[200px] cursor-pointer"
                >
                  {status === "submitting" ? "Sending..." : "Send a Message"}
                </button>
              </div>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
