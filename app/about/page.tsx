import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Cloud, Droplets, Leaf, Smartphone, Sprout, Users, Wifi } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const projectPillars = [
  {
    icon: Users,
    title: "For visitors",
    text: "Discover farm stays, guided activities, rural food, and the people who make each place special.",
  },
  {
    icon: Sprout,
    title: "For farmers",
    text: "Create an additional income stream and tell a fuller story about the work behind every harvest.",
  },
  {
    icon: Leaf,
    title: "For the land",
    text: "Make sustainable practices visible, encourage slower travel, and keep value close to the community.",
  },
];

const technologies = [
  { icon: Wifi, title: "IoT sensors", text: "Soil, water, and climate signals become useful farm insights." },
  { icon: Droplets, title: "Smart irrigation", text: "Data-aware watering helps protect every drop." },
  { icon: BarChart3, title: "Farm analytics", text: "Simple dashboards help hosts spot patterns and plan better." },
  { icon: Smartphone, title: "Digital marketplace", text: "Visitors discover stays, experiences, and local produce in one place." },
  { icon: Cloud, title: "Cloud platform", text: "A shared foundation connects farms, guests, bookings, and stories." },
  { icon: Users, title: "Community-first design", text: "Technology supports local relationships instead of replacing them." },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-10 md:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a67c1c]">Root & Rise · college-project frontend demo</p>
          <h1 className="mt-5 font-serif-display text-5xl leading-[0.98] text-[#20351b] md:text-7xl">A digital bridge between farms and curious travellers.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#53604d]">
            Root & Rise is an agro-tourism concept built to show how computer engineering can connect farm stays, hands-on learning, local produce, and sustainable rural livelihoods.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-[#20351b] px-6 py-3 font-semibold text-white transition hover:bg-[#34552b]">
              Explore the demo <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="inline-flex items-center rounded-full border border-[#d7d0c0] bg-white/60 px-5 py-3 text-sm font-semibold text-[#806018]">Concept only · no live transactions</span>
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-[#f7f3ec] shadow-xl md:min-h-[520px]">
          <Image src="/images/about-hero.jpg" alt="A farm landscape at golden hour" fill className="object-cover" priority />
        </div>
      </section>

      <section className="border-y border-[#d7d0c0] bg-[#fdfcfb] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="The project, in plain language"
            subtitle="Agro-tourism is more than a weekend away. It is a way to learn where food comes from, meet rural communities, and make responsible travel feel personal."
            centered
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {projectPillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} direction="up" delay={index * 0.1}>
                <article className="h-full rounded-2xl border border-[#d7d0c0] bg-white/70 p-7 transition hover:-translate-y-1 hover:bg-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7bd67]/30 text-[#806018]"><pillar.icon className="h-5 w-5" /></div>
                  <h2 className="mt-6 font-serif-display text-2xl text-[#20351b]">{pillar.title}</h2>
                  <p className="mt-3 leading-7 text-[#53604d]">{pillar.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#20351b] px-6 py-20 text-[#f7f3ec] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Technology with a human purpose" subtitle="The interface is the demo; the goal is a more connected and resilient rural economy." centered titleClassName="text-[#f7f3ec]" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology, index) => (
              <ScrollReveal key={technology.title} direction="up" delay={index * 0.08}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <technology.icon className="h-7 w-7 text-[#e7bd67]" />
                  <h2 className="mt-6 font-serif-display text-2xl">{technology.title}</h2>
                  <p className="mt-3 leading-7 text-[#d8d2c4]">{technology.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef0e5] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl shadow-lg">
            <Image src="/images/farm.jpeg" alt="Visitors walking through a farm field" fill className="object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a67c1c]">Sustainability by design</p>
            <h2 className="mt-4 font-serif-display text-4xl text-[#20351b] md:text-5xl">Make the impact visible.</h2>
            <p className="mt-5 leading-8 text-[#53604d]">Root & Rise treats sustainability as a story guests can understand: water-wise farming, crop diversity, shorter supply chains, and livelihoods that do not depend on a single season.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Regenerative farm practices", "Local food and shorter journeys", "Respect for water and soil", "Income beyond the harvest"].map((item) => (
                <div key={item} className="rounded-xl bg-[#f7f3ec] p-4 text-sm font-semibold text-[#20351b]">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionHeading title="Future scope" subtitle="The current site intentionally demonstrates the frontend journey. A production version could grow into a complete rural tourism platform." centered />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            ["01", "Live availability", "Host calendars, booking confirmations, and transparent pricing."],
            ["02", "Sensor dashboards", "Real-time field data for water, weather, and soil health."],
            ["03", "Accessible journeys", "Regional languages, inclusive travel filters, and guided support."],
            ["04", "Impact reporting", "Clear measures for farmer income, water saved, and local spend."],
          ].map(([number, title, text]) => (
            <article key={number} className="rounded-2xl border border-[#d7d0c0] bg-white p-6">
              <span className="font-serif-display text-3xl text-[#a67c1c]">{number}</span>
              <h2 className="mt-5 font-serif-display text-2xl text-[#20351b]">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#53604d]">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/#technology" className="inline-flex items-center gap-2 rounded-full bg-[#e7bd67] px-6 py-3 font-semibold text-[#20351b] transition hover:bg-[#f4d893]">
            Try the booking demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
