import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "@/components/Badge";
import InquiryForm from "@/components/InquiryForm";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import ScrollReveal from "@/components/ScrollReveal";
import { Download } from "lucide-react";

const sharedTechnicalSpecs = [
  { label: "HSN Code India-Specific", value: "10063020" },
  { label: "Purity", value: "95% to 99% min" },
];


export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const mergedSpecs = [...product.technicalSpecs];

  for (const sharedSpec of sharedTechnicalSpecs) {
    if (!mergedSpecs.some((spec) => spec.label.toLowerCase() === sharedSpec.label.toLowerCase())) {
      const sourceIndex = mergedSpecs.findIndex((spec) => spec.label.toLowerCase().includes("source"));
      const insertIndex = sourceIndex >= 0 ? sourceIndex + 1 : 0;
      mergedSpecs.splice(insertIndex, 0, sharedSpec);
    }
  }

  const reorderedSpecs = [
    ...mergedSpecs.filter((spec) => !spec.label.toLowerCase().includes("source") && !spec.label.toLowerCase().includes("retail")),
    ...mergedSpecs.filter((spec) => spec.label.toLowerCase().includes("source") || spec.label.toLowerCase().includes("retail")),
  ];

  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-2 md:px-10">
        <div>
          <p className="text-sm text-[#6b7f6d]">
            <Link href="/">Home</Link> / <Link href="/products">Products</Link> / {product.name}
          </p>
          <h1 className="mt-3 font-serif-display text-5xl text-[#2c3f16]">{product.name}</h1>
          <p className="mt-3 text-[#2c3f16]">{product.tagline}</p>
          <p className="mt-4 text-[#48624a]">{product.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#quote" className="inline-flex rounded-full bg-[#2c3f16] px-6 py-3 font-semibold text-[#fcf5e5] hover:bg-[#233212] transition-colors duration-300">
              Request Quotation
            </a>
            <Link
              href={`/products/${product.slug}/spec-sheet`}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-[#2c3f16] px-6 py-3 font-semibold text-[#2c3f16] hover:bg-[#2c3f16]/5 transition-colors duration-300"
            >
              <Download className="h-4 w-4" />
              Download Spec Sheet
            </Link>
          </div>
        </div>
        <div className="relative min-h-72 overflow-hidden rounded-2xl">
          <Image src={product.heroImage} alt={product.name} fill className="object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="text-center mb-10">
          <SectionHeading title="Technical Purity & Standards" centered />
          <div className="mt-2 w-24 h-[2px] bg-[#a67c1c] mx-auto"></div>
        </div>
        <TechnicalSpecs
          productName={product.name}
          category={product.category}
          reorderedSpecs={reorderedSpecs}
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <SectionHeading title="Tailored Processing" />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {product.processingVariants.map((variant, i) => (
            <ScrollReveal key={variant.name} direction="up" delay={i * 0.1}>
              <article className="overflow-hidden rounded-2xl border border-[#e2dbc9] bg-white transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-[#a67c1c]/50 group h-full cursor-pointer flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image 
                    src={variant.image} 
                    alt={variant.name} 
                    fill 
                    className="object-cover object-center transition-transform duration-750 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>
                <div className="space-y-3 p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display text-2xl text-[#2c3f16] group-hover:text-[#a67c1c] transition-colors duration-300">{variant.name}</h3>
                    <p className="text-[#48624a] text-sm leading-relaxed mt-2">{variant.description}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="quote" className="bg-[#2c3f16] px-6 py-12 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:items-start">
          <div className="text-[#f7f3ec]">
            <h2 className="font-serif-display text-4xl">Global Supply Logistics</h2>
            <ul className="mt-4 space-y-2 text-[#d8d2c4]">
              <li>MOQ: {product.logistics.moq}</li>
              <li>Packaging: {product.logistics.packaging}</li>
              <li>Port of Loading: {product.logistics.port}</li>
              <li>Lead Time: {product.logistics.leadTime}</li>
              <li>Capacity: {product.logistics.capacity}</li>
            </ul>
          </div>
          <InquiryForm type="mini" />
        </div>
      </section>


    </div>
  );
}
