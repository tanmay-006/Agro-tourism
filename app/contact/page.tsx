"use client";

import { FormEvent, useState } from "react";
import { CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const farmHubs = {
  alibaug: {
    name: "Alibaug demo farm",
    address: "Alibaug, Maharashtra · coastal fields and kitchen gardens",
    mapSrc: "https://www.google.com/maps?q=Alibaug%2C%20Maharashtra&output=embed",
  },
  nashik: {
    name: "Nashik demo farm",
    address: "Nashik, Maharashtra · orchard and seasonal produce",
    mapSrc: "https://www.google.com/maps?q=Nashik%2C%20Maharashtra&output=embed",
  },
  kolhapur: {
    name: "Kolhapur demo farm",
    address: "Kolhapur, Maharashtra · paddies and nature trails",
    mapSrc: "https://www.google.com/maps?q=Kolhapur%2C%20Maharashtra&output=embed",
  },
};

const experiences = ["Any experience", "Farm stay", "Harvest & learn", "Kitchen to table", "Seed library", "Slow living workshop"];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof farmHubs>("alibaug");
  const [submitted, setSubmitted] = useState(false);
  const activeHub = farmHubs[activeTab];

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <SectionHeading
        title="Plan a farm visit"
        subtitle="Use this booking demo to imagine how Root & Rise could connect guests with local hosts. No payment or real reservation is processed."
      />

      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#d7d0c0] bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#806018]">
        <span className="h-2 w-2 rounded-full bg-[#a67c1c]" /> Demo enquiry flow
      </div>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#e2dbc9] bg-white p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a67c1c]">Choose a region</p>
            <h2 className="mt-2 font-serif-display text-3xl text-[#2c3f16]">Meet the demo farms</h2>
            <div className="mt-5 rounded-2xl bg-[#20351b] p-5 text-[#f7f3ec]">
              <h3 className="font-serif-display text-xl">{activeHub.name}</h3>
              <div className="mt-4 space-y-3 text-sm text-[#d8d2c4]">
                <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#e7bd67]" />{activeHub.address}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {(Object.keys(farmHubs) as Array<keyof typeof farmHubs>).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`rounded-xl border px-2 py-2.5 text-[11px] font-semibold uppercase tracking-wider transition ${activeTab === key ? "border-[#20351b] bg-[#20351b] text-[#f7f3ec]" : "border-[#e2dbc9] text-[#2c3f16] hover:bg-[#faf8f5]"}`}
                >
                  {key}
                </button>
              ))}
            </div>
            <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#e2dbc9] bg-[#faf8f5]">
              <iframe src={activeHub.mapSrc} title={`${activeHub.name} map`} width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-[#e2dbc9] bg-white p-6">
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="h-12 w-12 text-[#397c62]" />
              <h2 className="mt-5 font-serif-display text-3xl text-[#2c3f16]">Demo request captured</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#48624a]">Thanks for trying the flow. In a production version, a host would follow up to confirm availability and accessibility.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-7 rounded-full border border-[#2c3f16] px-5 py-2 text-sm font-semibold text-[#2c3f16]">Send another request</button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3"><CalendarDays className="h-6 w-6 text-[#a67c1c]" /><h2 className="font-serif-display text-3xl text-[#2c3f16]">Booking enquiry</h2></div>
              <p className="mt-2 text-sm text-[#48624a]">Tell us what kind of farm day you are imagining.</p>
              <form onSubmit={submitBooking} className="mt-6 space-y-3">
                <label className="block text-sm font-medium text-[#2c3f16]">Name<input required name="name" className="mt-1 w-full rounded-md border border-[#d7d0c0] px-3 py-2" /></label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-[#2c3f16]">Preferred date<input required type="date" name="date" className="mt-1 w-full rounded-md border border-[#d7d0c0] px-3 py-2" /></label>
                  <label className="block text-sm font-medium text-[#2c3f16]">Guests<select name="guests" className="mt-1 w-full rounded-md border border-[#d7d0c0] px-3 py-2"><option>2 guests</option><option>4 guests</option><option>6 guests</option></select></label>
                </div>
                <label className="block text-sm font-medium text-[#2c3f16]">Experience<select name="experience" className="mt-1 w-full rounded-md border border-[#d7d0c0] px-3 py-2">{experiences.map((experience) => <option key={experience}>{experience}</option>)}</select></label>
                <button type="submit" className="w-full rounded-full bg-[#20351b] px-4 py-3 font-semibold text-[#f7f3ec] transition hover:bg-[#34552b]">Submit demo enquiry</button>
              </form>
            </>
          )}
        </article>
      </section>

      <section className="mt-8 grid gap-3 rounded-xl bg-[#eef0e5] p-5 text-sm text-[#2c3f16] sm:grid-cols-3">
        <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#397c62]" /> Host-led experiences</div>
        <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#397c62]" /> Local produce discovery</div>
        <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#397c62]" /> No live payment in demo</div>
      </section>
    </div>
  );
}
