import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";
import Link from "next/link";

const basmati = products.filter((p) => p.category === "Basmati Rice");
const nonBasmati = products.filter((p) => p.category === "Non-Basmati Rice");

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <SectionHeading
        title="Artisanal Exports"
        subtitle="Experience the excellence of India's finest harvests. Our curated catalog represents generations of agricultural mastery and global shipping precision."
        centered
      />

      <section className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-serif-display text-3xl text-[#2c3f16] whitespace-nowrap">Basmati Rice</h2>
          <div className="h-px flex-grow bg-[#2c3f16]/15" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {basmati.map((product, i) => (
            <ScrollReveal key={product.slug} direction="up" delay={i * 0.1}>
              <ProductCard
                slug={product.slug}
                name={product.name}
                description={product.shortDescription}
                image={product.heroImage}
                grainLength={product.grainLength}
                variants={product.variants}
                category={product.category}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-serif-display text-3xl text-[#2c3f16] whitespace-nowrap">Non-Basmati Rice</h2>
          <div className="h-px flex-grow bg-[#2c3f16]/15" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nonBasmati.map((product, i) => (
            <ScrollReveal key={product.slug} direction="up" delay={i * 0.1}>
              <ProductCard
                slug={product.slug}
                name={product.name}
                description={product.shortDescription}
                image={product.heroImage}
                grainLength={product.grainLength}
                variants={product.variants}
                category={product.category}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mt-24 rounded-2xl bg-[#2c3f16] p-12 text-[#f7f3ec] md:flex md:items-center md:justify-between border border-[#2c3f16]">
        <div className="max-w-2xl">
          <h3 className="font-serif-display text-3xl">Can&apos;t find a specific variety?</h3>
          <p className="mt-3 text-[#98b5a3] text-sm leading-relaxed">
            We source customized grain varieties for global distribution. Contact our export desk for detailed specifications and bespoke logistical solutions.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-[#2c3f16] px-8 py-4 font-semibold text-[#fcf5e5] transition duration-300 hover:bg-[#1d2a0f] hover:shadow-lg whitespace-nowrap md:mt-0"
        >
          Request Custom Quote
        </Link>
      </section>
    </div>
  );
}
