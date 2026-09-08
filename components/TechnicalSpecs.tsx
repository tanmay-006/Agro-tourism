"use client";

import { useState } from "react";
import { Grid, Table, MapPin, Ruler, Droplet, Award, AlertTriangle, Trash2, Palette, Package, Layers, ShieldCheck } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";
import ScrollReveal from "@/components/ScrollReveal";

type Spec = {
  label: string;
  value: string;
};

interface TechnicalSpecsProps {
  productName: string;
  category: string;
  reorderedSpecs: Spec[];
}

function getSpecIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("source") || l.includes("state")) return <MapPin className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("length")) return <Ruler className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("moisture")) return <Droplet className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("broken")) return <Award className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("damaged") || l.includes("discolour")) return <AlertTriangle className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("foreign") || l.includes("matter")) return <Trash2 className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("colour") || l.includes("color")) return <Palette className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("packing") || l.includes("overseas")) return <Package className="h-4 w-4 text-[#a67c1c]" />;
  if (l.includes("retail") || l.includes("package")) return <Layers className="h-4 w-4 text-[#a67c1c]" />;
  return <ShieldCheck className="h-4 w-4 text-[#a67c1c]" />;
}

function cleanLabel(label: string) {
  const l = label.toLowerCase();
  if (l.includes("hsn")) return "HSN Code";
  if (l.includes("moisture")) return "Moisture";
  if (l.includes("broken")) return "Broken";
  if (l.includes("damaged")) return "Damaged";
  if (l.includes("colour") || l.includes("color")) return "Colour";
  if (l.includes("packing overseas")) return "Packing (Overseas)";
  if (l.includes("packing retail") || l.includes("package retail")) return "Packing (Retail)";
  if (l.includes("purity")) return "Purity";
  if (l.includes("foreign matter")) return "Foreign Matter";
  return label;
}

export default function TechnicalSpecs({ productName, category, reorderedSpecs }: TechnicalSpecsProps) {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // 1. Format Product Name row
  let displayProductName = productName;
  if (productName.toLowerCase().includes("1121")) {
    displayProductName = "Premium Basmati Rice – 1121 White Sella";
  } else if (category === "Basmati Rice") {
    displayProductName = `Premium Basmati Rice – ${productName}`;
  } else {
    displayProductName = `Premium Non-Basmati Rice – ${productName}`;
  }

  // 2. Map existing specs with clean labels
  const tableRows: Spec[] = reorderedSpecs.map((spec) => ({
    label: cleanLabel(spec.label),
    value: spec.value,
  }));

  // Add Product Name and Crop Year to the table rows if they aren't already present
  if (!tableRows.some((row) => row.label.toLowerCase() === "product name")) {
    tableRows.push({ label: "Product Name", value: displayProductName });
  }
  if (!tableRows.some((row) => row.label.toLowerCase() === "crop year")) {
    tableRows.push({ label: "Crop Year", value: "Latest Crop" });
  }

  // Define strict sorting map to match Image 1
  const orderMap: { [key: string]: number } = {
    "product name": 1,
    "hsn code": 2,
    "crop year": 3,
    "colour": 4,
    "purity": 5,
    "moisture": 6,
    "broken": 7,
    "damaged": 8,
    "foreign matter": 9,
    "packing (overseas)": 10,
    "packing (retail)": 11,
    "grain length (pre cooked)": 12,
    "grain length (cooked)": 13,
    "source state": 14,
  };

  tableRows.sort((a, b) => {
    const orderA = orderMap[a.label.toLowerCase()] || 99;
    const orderB = orderMap[b.label.toLowerCase()] || 99;
    return orderA - orderB;
  });

  return (
    <div className="mt-8">
      {/* View Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-full bg-[#2c3f16]/5 p-1 border border-[#2c3f16]/10 backdrop-blur-sm">
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
              viewMode === "grid"
                ? "bg-[#2c3f16] text-[#fcf5e5] shadow-md scale-100"
                : "text-[#2c3f16]/70 hover:text-[#2c3f16] hover:bg-[#2c3f16]/5"
            }`}
          >
            <Grid className="h-4 w-4" />
            Interactive Cards
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
              viewMode === "table"
                ? "bg-[#2c3f16] text-[#fcf5e5] shadow-md scale-100"
                : "text-[#2c3f16]/70 hover:text-[#2c3f16] hover:bg-[#2c3f16]/5"
            }`}
          >
            <Table className="h-4 w-4" />
            Technical Specifications Table
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-500 animate-fade-in-up">
          {reorderedSpecs.map((spec, i) => (
            <ScrollReveal key={spec.label} direction="up" delay={i * 0.04} className="col-span-1">
              <BorderGlow
                className="min-h-[160px] p-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg cursor-pointer group h-full"
                backgroundColor="#1d2e11"
                borderRadius={18}
                glowColor="120 35% 19%"
                colors={["#1d2e11", "#244016", "#a67c1c"]}
                fillOpacity={0.18}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/8 border border-white/10 group-hover:bg-white/12 group-hover:border-white/20 transition-all duration-300">
                    {getSpecIcon(spec.label)}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#cda110]/85 font-semibold font-sans">
                    {spec.label}
                  </span>
                </div>
                <div className="mt-3 flex-grow">
                  <p className="font-serif-display text-base md:text-lg text-[#f7f3ec] font-medium leading-snug group-hover:text-[#cda110] transition-colors duration-300">
                    {spec.value}
                  </p>
                </div>
                <div className="mt-3 w-full h-[1px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#f7f3ec]/30 group-hover:via-[#cda110] group-hover:to-transparent transition-all duration-500 rounded" />
              </BorderGlow>
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === "table" && (
        <div className="max-w-4xl mx-auto transition-all duration-500 animate-fade-in-up">
          <div className="overflow-hidden rounded-2xl border border-[#e2dbc9] bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#2c3f16] text-[#fcf5e5] border-b border-[#e2dbc9]">
                    <th className="px-6 py-4.5 font-serif-display text-base md:text-lg font-semibold tracking-wide">
                      Parameter
                    </th>
                    <th className="px-6 py-4.5 font-serif-display text-base md:text-lg font-semibold tracking-wide">
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2dbc9]/60">
                  {tableRows.map((row, idx) => (
                    <tr
                      key={row.label}
                      className={`hover:bg-[#fcf5e5]/40 transition-colors duration-200 ${
                        idx % 2 === 0 ? "bg-white" : "bg-[#f7f3ec]/20"
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-bold text-[#2c3f16] md:text-base tracking-wide font-sans">
                        {row.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#48624a] md:text-base leading-relaxed font-sans font-medium">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
