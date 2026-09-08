import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Leaf, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { farmExperiences } from "@/data/farmExperiences";

export function generateStaticParams() {
  return farmExperiences.map((experience) => ({ slug: experience.slug }));
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = farmExperiences.find((item) => item.slug === slug);

  if (!experience) {
    notFound();
  }

  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 md:items-center md:px-10 md:py-20">
        <div>
          <Link href="/products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#48624a] hover:text-[#2c3f16]">
            <ArrowLeft className="h-4 w-4" /> Back to experiences
          </Link>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.22em] text-[#a67c1c]">Demo experience detail</p>
          <h1 className="mt-4 font-serif-display text-5xl leading-tight text-[#2c3f16]">{experience.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-[#48624a]">{experience.description}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#48624a]">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#edf4e8] px-4 py-2"><MapPin className="h-4 w-4 text-[#a67c1c]" /> {experience.location}</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#edf4e8] px-4 py-2"><CalendarDays className="h-4 w-4 text-[#a67c1c]" /> {experience.duration}</span>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href={`/contact?experience=${experience.slug}`} className="inline-flex items-center gap-2 rounded-full bg-[#2c3f16] px-6 py-3 font-semibold text-[#fcf5e5] transition hover:bg-[#34552b]">
              Request a demo booking <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="text-sm font-semibold text-[#806018]">{experience.price} · indicative demo price</span>
          </div>
        </div>
        <div className="relative min-h-[340px] overflow-hidden rounded-3xl bg-[#f7f3ec] shadow-xl md:min-h-[480px]">
          <Image src={experience.image} alt={experience.title} fill className="object-cover" priority />
        </div>
      </section>

      <section className="border-y border-[#e2dbc9]/60 bg-[#fdfcfb] px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a67c1c]">What your visit includes</p>
            <h2 className="mt-3 font-serif-display text-4xl text-[#2c3f16]">Learn by being there.</h2>
            <p className="mt-4 leading-7 text-[#48624a]">Every listing is a frontend demo of how hosts could explain a visit, welcome guests, and share the value created in the community.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {experience.highlights.map((highlight, index) => (
              <ScrollReveal key={highlight} direction="up" delay={index * 0.1}>
                <div className="h-full rounded-2xl border border-[#e2dbc9] bg-white p-5">
                  <span className="font-serif-display text-3xl text-[#a67c1c]">0{index + 1}</span>
                  <p className="mt-4 text-sm font-semibold leading-6 text-[#2c3f16]">{highlight}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2 md:px-10">
        <div className="rounded-2xl bg-[#eef0e5] p-8">
          <Leaf className="h-7 w-7 text-[#a67c1c]" />
          <h2 className="mt-5 font-serif-display text-3xl text-[#2c3f16]">Sustainability in the story</h2>
          <p className="mt-3 leading-7 text-[#53604d]">{experience.impact}</p>
        </div>
        <div className="rounded-2xl bg-[#20351b] p-8 text-[#f7f3ec]">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd67]">College-project note</p>
          <h2 className="mt-4 font-serif-display text-3xl">A realistic flow, safely mocked.</h2>
          <p className="mt-3 leading-7 text-[#d8d2c4]">The booking button opens a demo contact form. No payment, inventory, or reservation is processed.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#e7bd67]">Open booking demo <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}
