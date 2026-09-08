import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ArrowLeft } from "lucide-react";
import React from "react";
import PrintButton from "@/components/PrintButton";

// Shared specs that apply to all basmati products on our website
const sharedTechnicalSpecs = [
  { label: "HSN Code India-Specific", value: "10063020" },
  { label: "Purity", value: "95% to 99% min" },
];

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function SpecSheetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  // Merge technical specs
  const mergedSpecs = [...product.technicalSpecs];
  for (const sharedSpec of sharedTechnicalSpecs) {
    if (!mergedSpecs.some((spec) => spec.label.toLowerCase() === sharedSpec.label.toLowerCase())) {
      const sourceIndex = mergedSpecs.findIndex((spec) => spec.label.toLowerCase().includes("source"));
      const insertIndex = sourceIndex >= 0 ? sourceIndex + 1 : 0;
      mergedSpecs.splice(insertIndex, 0, sharedSpec);
    }
  }

  // Get key values for General Specs table
  const getValueByLabel = (labels: string[], defaultValue: string = "As Per Variety") => {
    for (const label of labels) {
      const found = mergedSpecs.find((s) => s.label.toLowerCase().includes(label.toLowerCase()));
      if (found) return found.value;
    }
    return defaultValue;
  };

  const hsnCode = getValueByLabel(["hsn"], product.category === "Basmati Rice" ? "10063020" : "100630");
  const colorVal = getValueByLabel(["colour", "color"], "White / Creamy");
  const purityVal = getValueByLabel(["purity"], "95% to 99% Min");
  const moistureVal = getValueByLabel(["moisture"], "12% to 13% Max");
  const brokenVal = getValueByLabel(["broken"], "Max 1%");
  const damagedVal = getValueByLabel(["damaged"], "Max 0.5%");
  const foreignVal = getValueByLabel(["foreign"], "Max 0.1%");
  const packingVal = product.logistics.packaging;

  // Generate dynamic Key Features
  const keyFeatures = product.category === "Basmati Rice" 
    ? [
        "Extraordinary grain elongation post-cooking",
        "Distinct rich aroma and sweet flavor profile",
        "Perfect non-sticky texture with excellent grain separation",
        "Premium aged quality grains sourced from optimal fields",
      ]
    : [
        "Uniform grain size and premium texture characteristics",
        "High nutritional value and natural energy retention",
        "Ideal for daily consumption and industrial processing",
        "Strictly sortex-cleaned to guarantee pristine purity",
      ];

  const generalSpecs = [
    { parameter: "Product Name", spec: product.name },
    { parameter: "HSN Code", spec: hsnCode },
    { parameter: "Crop Year", spec: "Latest Crop" },
    { parameter: "Colour", spec: colorVal },
    { parameter: "Purity", spec: purityVal },
    { parameter: "Moisture", spec: moistureVal },
    { parameter: "Broken", spec: brokenVal },
    { parameter: "Damaged", spec: damagedVal },
    { parameter: "Foreign Matter", spec: foreignVal },
    { parameter: "Packing", spec: packingVal },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c3f16] font-sans pb-12 antialiased">
      {/* Print styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body {
            background-color: white !important;
            color: black !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
          .print-container {
            padding: 0 !important;
            background-color: transparent !important;
            box-shadow: none !important;
          }
          .print-page {
            width: 210mm !important;
            height: 297mm !important;
            margin: 0 !important;
            padding: 20mm !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            page-break-after: always !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
          }
          .print-page:last-child {
            page-break-after: avoid !important;
          }
        }
      `}} />

      {/* Action Bar */}
      <div className="no-print sticky top-0 z-50 w-full border-b border-[#b7c6ad]/40 bg-[#f3f8ef]/90 py-4 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2c3f16] hover:text-[#233212]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Product
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#48624a] font-light">PDF Spec Sheet Preview</span>
            <PrintButton />
          </div>
        </div>
      </div>

      {/* Document Pages Container */}
      <div className="print-container mx-auto max-w-[210mm] mt-8 space-y-8 px-4 md:px-0">
        
        {/* PAGE 1 */}
        <div className="print-page w-full min-h-[297mm] bg-white border border-[#b7c6ad]/30 shadow-xl p-[15mm] md:p-[20mm] relative flex flex-col justify-between rounded-sm">
          <div>
            {/* Header branding */}
            <div className="text-center pb-4 border-b border-[#b7c6ad]/50">
              <h2 className="text-xs uppercase tracking-[0.4em] font-semibold text-[#2c3f16]">PRODUCT SPECIFICATIONS</h2>
              <div className="mt-1.5 h-[1.5px] bg-[#a67c1c] w-32 mx-auto"></div>
            </div>

            {/* Product Title Section */}
            <div className="mt-8">
              <h1 className="font-serif-display text-3xl font-bold text-[#a67c1c] tracking-wide">
                {product.name}
              </h1>
              <p className="mt-2 text-sm text-[#48624a] italic leading-relaxed max-w-3xl">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="mt-8">
              <h3 className="bg-[#edf4e8]/85 text-xs uppercase tracking-widest font-semibold text-[#2c3f16] px-4 py-2 rounded-sm">
                KEY FEATURES
              </h3>
              <ul className="mt-4 ml-6 list-disc space-y-2 text-sm text-[#48624a] font-light">
                {keyFeatures.map((feature, idx) => (
                  <li key={idx} className="pl-1">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications Table */}
            <div className="mt-8">
              <h3 className="bg-[#edf4e8]/85 text-xs uppercase tracking-widest font-semibold text-[#2c3f16] px-4 py-2 rounded-sm mb-4">
                SPECIFICATIONS
              </h3>
              <div className="overflow-hidden border border-[#b7c6ad]/40 rounded-lg shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#2c3f16] text-[#fcf5e5] text-xs uppercase tracking-wider">
                      <th className="py-3 px-5 font-semibold">Parameter</th>
                      <th className="py-3 px-5 font-semibold">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {generalSpecs.map((row, idx) => (
                      <tr 
                        key={idx} 
                        className={`border-b border-[#b7c6ad]/20 last:border-b-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#fcfbf8]'}`}
                      >
                        <td className="py-2.5 px-5 font-semibold text-[#2c3f16] text-xs">{row.parameter}</td>
                        <td className="py-2.5 px-5 text-[#48624a] text-xs font-light">{row.spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Footer page identifier */}
          <div className="mt-8 border-t border-[#b7c6ad]/30 pt-4 flex justify-between items-center text-[10px] text-[#7f976f] font-light">
            <span>Generated by NeemSai Global</span>
            <span className="font-semibold">Page 1</span>
          </div>
        </div>

        {/* PAGE 2 */}
        <div className="print-page w-full min-h-[297mm] bg-white border border-[#b7c6ad]/30 shadow-xl p-[15mm] md:p-[20mm] relative flex flex-col justify-between rounded-sm">
          <div>
            {/* Header branding */}
            <div className="text-center pb-4 border-b border-[#b7c6ad]/50">
              <h2 className="text-xs uppercase tracking-[0.4em] font-semibold text-[#2c3f16]">PRODUCT SPECIFICATIONS</h2>
              <div className="mt-1.5 h-[1.5px] bg-[#a67c1c] w-32 mx-auto"></div>
            </div>

            {/* Technical Specifications list */}
            <div className="mt-8">
              <h3 className="bg-[#edf4e8]/85 text-xs uppercase tracking-widest font-semibold text-[#2c3f16] px-4 py-2 rounded-sm mb-4">
                TECHNICAL SPECIFICATIONS
              </h3>
              <div className="overflow-hidden border border-[#b7c6ad]/40 rounded-lg shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#2c3f16] text-[#fcf5e5] text-xs uppercase tracking-wider">
                      <th className="py-3 px-5 font-semibold">Parameter</th>
                      <th className="py-3 px-5 font-semibold">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mergedSpecs.map((spec, idx) => (
                      <tr 
                        key={idx} 
                        className={`border-b border-[#b7c6ad]/20 last:border-b-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#fcfbf8]'}`}
                      >
                        <td className="py-2.5 px-5 font-semibold text-[#2c3f16] text-xs">{spec.label}</td>
                        <td className="py-2.5 px-5 text-[#48624a] text-xs font-light">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional logistics / details section */}
            <div className="mt-8">
              <h3 className="bg-[#edf4e8]/85 text-xs uppercase tracking-widest font-semibold text-[#2c3f16] px-4 py-2 rounded-sm mb-4">
                ADDITIONAL LOGISTICS DETAILS
              </h3>
              <div className="overflow-hidden border border-[#b7c6ad]/40 rounded-lg shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                  <tbody>
                    {[
                      { label: "Packaging Options", value: `${product.logistics.packaging}, BOPP bags, or custom fabric sacks` },
                      { label: "Minimum Order Quantity", value: product.logistics.moq },
                      { label: "Port of Loading", value: product.logistics.port },
                      { label: "Delivery Lead Time", value: product.logistics.leadTime },
                      { label: "Weekly Supply Capacity", value: product.logistics.capacity },
                      { label: "Shelf Life", value: "24 Months from manufacturing date under standard dry storage" },
                      { label: "Origin of Grain", value: "India (100% Traceable sourcing)" }
                    ].map((detail, idx) => (
                      <tr 
                        key={idx} 
                        className={`border-b border-[#b7c6ad]/20 last:border-b-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#fcfbf8]'}`}
                      >
                        <td className="py-2.5 px-5 font-semibold text-[#2c3f16] text-xs w-[35%]">{detail.label}</td>
                        <td className="py-2.5 px-5 text-[#48624a] text-xs font-light">{detail.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Footer page identifier */}
          <div className="mt-8 border-t border-[#b7c6ad]/30 pt-4 flex justify-between items-center text-[10px] text-[#7f976f] font-light">
            <span>Generated by NeemSai Global</span>
            <span className="font-semibold">Page 2</span>
          </div>
        </div>

      </div>
    </div>
  );
}
