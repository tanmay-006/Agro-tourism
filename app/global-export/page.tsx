import Link from "next/link";
import { Activity, ArrowRight, BarChart3, CloudSun, Database, Droplets, Gauge, Leaf, Radio, Smartphone, Sprout, Wifi } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const signals = [
  ["Crop health", "94%", Sprout],
  ["Soil moisture", "68%", Droplets],
  ["Temperature", "27°C", CloudSun],
  ["Water level", "81%", Gauge],
];

const capabilities = [
  { title: "Connected sensing", text: "IoT concepts bring soil, weather, and irrigation signals into one farm view.", icon: Wifi },
  { title: "Data management", text: "A shared database concept organizes visitors, bookings, farms, and produce.", icon: Database },
  { title: "Visitor analytics", text: "Dashboards help hosts understand popular experiences and plan better.", icon: BarChart3 },
  { title: "Digital journeys", text: "A responsive platform lets guests discover, enquire, and stay connected.", icon: Smartphone },
];

export default function GlobalExportPage() {
  return (
    <div>
      <section className="bg-[#20351b] px-6 py-20 text-[#f7f3ec] md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e7bd67]">Root & Rise · smart farm demo</p>
            <h1 className="mt-5 font-serif-display text-5xl leading-tight md:text-7xl">From farm signals to better guest experiences.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8d2c4]">This page demonstrates how computer engineering can connect smart-farm data, agro-tourism bookings, local produce, and rural development.</p>
            <Link href="#dashboard" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e7bd67] px-6 py-3 font-semibold text-[#20351b]">Open dashboard <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
            <div className="flex items-center justify-between"><p className="text-sm text-[#d8d2c4]">Network status</p><span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8bd0a9]"><span className="h-2 w-2 animate-pulse rounded-full bg-[#8bd0a9]" /> System online</span></div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {signals.map(([label, value, Icon]) => {
                const SignalIcon = Icon as typeof Sprout;
                return <div key={label as string} className="rounded-2xl bg-[#162b20] p-4"><SignalIcon className="h-5 w-5 text-[#e7bd67]" /><p className="mt-5 text-xs text-[#9ab09a]">{label as string}</p><p className="mt-1 text-2xl font-semibold">{value as string}</p></div>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Smart Farm Dashboard" subtitle="A visual prototype showing the kind of information a host could use to manage crops, visitors, and sustainable operations." centered />
          <p className="mx-auto mt-5 w-fit rounded-full border border-[#d7d0c0] bg-[#f7f3ec] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#806018]">Demo / Simulated Data</p>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-3xl bg-[#162b20] p-6 text-[#f7f3ec] md:p-8">
              <div className="flex items-center justify-between"><div><p className="text-sm text-[#9ab09a]">Visitor analytics</p><p className="mt-2 text-4xl font-semibold">+24.8%</p><p className="mt-1 text-xs text-[#8bd0a9]">Growth across the demo week</p></div><BarChart3 className="h-8 w-8 text-[#e7bd67]" /></div>
              <div className="mt-10 flex h-48 items-end gap-3 rounded-2xl bg-[#203b2b] p-5">{[35, 44, 48, 42, 62, 70, 86].map((height, index) => <div key={index} className="flex flex-1 flex-col items-center gap-2"><div className="w-full rounded-t bg-[#6ba778]" style={{ height: `${height}%` }} /><span className="text-[10px] text-[#9ab09a]">D{index + 1}</span></div>)}</div>
            </div>
            <div className="rounded-3xl border border-[#d7d0c0] bg-[#f7f3ec] p-6 md:p-8"><div className="flex items-center gap-3"><Activity className="h-6 w-6 text-[#a67c1c]" /><h2 className="font-serif-display text-2xl text-[#20351b]">Farm activity</h2></div><div className="mt-7 space-y-5">{["08:30 · Irrigation cycle completed", "10:30 · Guided farm tour started", "13:00 · Farm lunch experience started", "15:30 · Produce inventory updated"].map((item) => <div key={item} className="flex gap-3 text-sm text-[#53604d]"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#397c62]" />{item}</div>)}</div></div>
          </div>
          <p className="mt-5 text-center text-xs text-[#53604d]">No real IoT devices or live booking backend are connected; all values are illustrative for the college project.</p>
        </div>
      </section>

      <section className="bg-[#eef0e5] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="The computer engineering layer" subtitle="The platform turns technical building blocks into a simple, human-facing rural experience." centered />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => <article key={capability.title} className="rounded-2xl bg-[#f7f3ec] p-6"><capability.icon className="h-7 w-7 text-[#a67c1c]" /><h2 className="mt-6 font-serif-display text-2xl text-[#20351b]">{capability.title}</h2><p className="mt-3 text-sm leading-7 text-[#53604d]">{capability.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a67c1c]">How the system works</p><h2 className="mt-4 font-serif-display text-4xl text-[#20351b] md:text-5xl">Farm → data → platform → rural development</h2><p className="mt-5 leading-8 text-[#53604d]">Sensors and farm records become useful insights. The platform shares those insights with hosts and connects visitors to meaningful experiences, creating more resilient local income.</p></div>
          <div className="rounded-3xl border border-[#d7d0c0] bg-white p-6 md:p-8"><div className="space-y-4">{[["01", "Collect", "Farm, visitor, and booking data"], ["02", "Analyse", "Dashboards reveal patterns and opportunities"], ["03", "Connect", "Visitors find stays, tours, and produce"], ["04", "Grow", "More value stays with rural communities"]].map(([number, title, text]) => <div key={number} className="flex gap-4 rounded-2xl bg-[#eef0e5] p-4"><span className="font-serif-display text-2xl text-[#a67c1c]">{number}</span><div><h3 className="font-semibold text-[#20351b]">{title}</h3><p className="mt-1 text-sm text-[#53604d]">{text}</p></div></div>)}</div></div>
        </div>
      </section>

      <section className="bg-[#20351b] px-6 py-16 text-center text-[#f7f3ec] md:px-10 md:py-20">
        <Leaf className="mx-auto h-8 w-8 text-[#e7bd67]" />
        <h2 className="mx-auto mt-5 max-w-3xl font-serif-display text-4xl md:text-5xl">Technology should make the farm more connected, not less human.</h2>
        <Link href="/#stays" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e7bd67] px-6 py-3 font-semibold text-[#20351b]">Explore stay listings <ArrowRight className="h-4 w-4" /></Link>
      </section>
    </div>
  );
}
