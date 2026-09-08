import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, MapPin, ShoppingBasket } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { farmExperiences } from "@/data/farmExperiences";

const produce = [
  {
    name: "Seasonal grain baskets",
    origin: "Partner farms · 1 kg",
    description: "A rotating selection of locally grown grains, presented as a traceable demo marketplace item.",
    image: "/images/1718 Basmati Rice.jpg",
  },
  {
    name: "Orchard preserves",
    origin: "Nashik growers · small batch",
    description: "Fruit-led preserves made with seasonal harvests and shared through the local-produce pilot.",
    image: "/images/about-sourcing-4.jpg",
  },
  {
    name: "Farm kitchen spices",
    origin: "Maharashtra · pantry set",
    description: "A sample pantry collection that connects visitors with the people behind everyday ingredients.",
    image: "/images/golden-sella-rice.png",
  },
  {
    name: "Native seed cards",
    origin: "Seed library · take-home",
    description: "A small educational keepsake explaining crop diversity and the value of saving local seed.",
    image: "/images/about-sourcing-1.jpg",
  },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <SectionHeading
        title="Farm experiences & local produce"
        subtitle="A mock marketplace for Root & Rise, a college-project frontend demo connecting visitors with farms, hosts, and seasonal goods."
        centered
      />

      <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-2 rounded-full border border-[#d7d0c0] bg-white/60 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#806018]">
        <span className="h-2 w-2 rounded-full bg-[#a67c1c]" />
        Demo catalogue · no real purchases or reservations
      </div>

      <section className="mt-16">
        <div className="mb-8 flex items-center gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a67c1c]">Visit, learn, contribute</p>
            <h2 className="font-serif-display text-3xl text-[#2c3f16]">Farm experiences</h2>
          </div>
          <div className="h-px flex-grow bg-[#2c3f16]/15" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {farmExperiences.map((experience, index) => (
            <ScrollReveal key={experience.slug} direction="up" delay={index * 0.08}>
              <Link
                href={`/products/${experience.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2dbc9]/70 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-[#f7f3ec]">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#f7f3ec]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2c3f16]">
                    {experience.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif-display text-2xl text-[#2c3f16]">{experience.title}</h3>
                    <span className="whitespace-nowrap text-sm font-semibold text-[#806018]">{experience.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#48624a]">{experience.description}</p>
                  <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#48624a]/75">
                    <MapPin className="h-4 w-4 text-[#a67c1c]" />
                    {experience.location}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2c3f16]">
                    Explore experience <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 flex items-center gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a67c1c]">From the farms</p>
            <h2 className="font-serif-display text-3xl text-[#2c3f16]">Local produce pilot</h2>
          </div>
          <div className="h-px flex-grow bg-[#2c3f16]/15" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {produce.map((item, index) => (
            <ScrollReveal key={item.name} direction="up" delay={index * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2dbc9]/70 bg-[#fdfcfb] shadow-sm">
                <div className="relative h-44 overflow-hidden bg-[#f7f3ec]">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif-display text-xl text-[#2c3f16]">{item.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#a67c1c]">{item.origin}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#48624a]">{item.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2c3f16]">
                    Demo catalogue item <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-6 rounded-3xl bg-[#20351b] p-8 text-[#f7f3ec] md:grid-cols-[1fr_auto] md:items-center md:p-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd67]">
            <Leaf className="h-4 w-4" /> Designed for local impact
          </div>
          <h2 className="mt-4 font-serif-display text-3xl md:text-4xl">One catalogue, many ways to support a farm.</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#d8d2c4]">
            This demo shows how bookings, learning, and local produce could sit in one approachable digital experience. Payments and inventory are intentionally mocked for the college project.
          </p>
        </div>
        <Link href="/#stays" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e7bd67] px-6 py-3 font-semibold text-[#20351b] transition hover:bg-[#f4d893]">
          Explore demo stays <ShoppingBasket className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
