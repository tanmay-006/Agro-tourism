import Image from "next/image";
import { BadgeCheck, Package, Ship } from "lucide-react";
import Hero from "@/components/Hero";
import InquiryForm from "@/components/InquiryForm";

export default function GlobalExportPage() {
  return (
    <div>
      <Hero
        title="Global Export Concierge"
        subtitle="Strategic sourcing, quality assurance, and shipment precision for premium rice buyers."
        image="/images/global-export-hero.svg"
      />

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <nav className="flex flex-wrap gap-3 text-sm text-[#2c3f16]">
          {["Our Heritage", "Sourcing", "Logistics", "Sustainability", "Certifications"].map((item) => (
            <span key={item} className="rounded-full bg-white px-4 py-2">{item}</span>
          ))}
        </nav>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#e2dbc9] bg-white p-6">
            <h2 className="font-serif-display text-3xl">Global Headquarters</h2>
            <p className="mt-3 text-[#48624a]">Pune HQ with dispatch coordination across Dubai, London, and Singapore.</p>
            <Image src="/images/pune-dubai-map.png" alt="Global export map" width={660} height={320} className="mt-4 rounded-xl object-cover" />
          </article>
          <InquiryForm type="full" />
        </div>
      </section>

      <section className="bg-[#2c3f16] px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <article className="rounded-2xl bg-[#244125] p-6 text-[#f7f3ec]">
            <Ship className="h-5 w-5 text-[#a67c1c]" />
            <h3 className="mt-3 font-serif-display text-2xl">Supply & Logistics</h3>
            <p className="mt-2 text-[#d8d2c4]">MOQ 2 x 20FT Container, 25 Containers per week capacity, delivery in 5 days after confirmation.</p>
          </article>
          <article className="rounded-2xl bg-[#244125] p-6 text-[#f7f3ec]">
            <Package className="h-5 w-5 text-[#a67c1c]" />
            <h3 className="mt-3 font-serif-display text-2xl">Packaging Options</h3>
            <p className="mt-2 text-[#d8d2c4]">40kg / 50kg PP Bags, BOPP Bags, Jute, or customized private labeling.</p>
          </article>
          <article className="rounded-2xl bg-[#244125] p-6 text-[#f7f3ec]">
            <BadgeCheck className="h-5 w-5 text-[#a67c1c]" />
            <h3 className="mt-3 font-serif-display text-2xl">Heritage Quality</h3>
            <p className="mt-2 text-[#d8d2c4]">95% purity, moisture max 12%, broken 1%/2%/5% options with ISO/HACCP certifications.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
