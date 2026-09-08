import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/Badge";

export default function ProductCard({
  slug,
  name,
  description,
  image,
  badge,
  grainLength,
  variants,
  category,
}: {
  slug: string;
  name: string;
  description: string;
  image: string;
  badge?: string;
  grainLength?: string;
  variants?: string[];
  category?: "Basmati Rice" | "Non-Basmati Rice";
}) {
  const borderColor = category === "Basmati Rice" ? "border-[#2d4739]" : "border-[#839705]";

  return (
    <Link
      href={`/products/${slug}`}
      className={`group flex flex-col h-full bg-white border-t-4 ${borderColor} rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md border-x border-b border-[#e2dbc9]/60`}
    >
      <div className="relative mb-6 overflow-hidden rounded-sm aspect-[4/5] w-full bg-[#f7f3ec]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {badge && (
          <div className="absolute top-4 left-4 z-10">
            <Badge>{badge}</Badge>
          </div>
        )}
      </div>
      
      <h3 className="font-serif-display text-2xl text-[#2c3f16] mb-2 group-hover:text-[#2c3f16] transition-colors duration-300">
        {name}
      </h3>
      <p className="text-[#48624a] text-sm leading-relaxed mb-6 font-light">
        {description}
      </p>
      
      <div className="mt-auto pt-6 border-t border-[#2c3f16]/10 grid grid-cols-1 gap-4 text-left">
        {grainLength && (
          <div>
            <span className="block text-[10px] text-[#2c3f16] uppercase tracking-wider font-semibold mb-1">
              Grain Length
            </span>
            <p className="font-sans font-semibold text-[#2c3f16] text-sm">
              {grainLength}
            </p>
          </div>
        )}
        {variants?.length && (
          <div>
            <span className="block text-[10px] text-[#2c3f16] uppercase tracking-wider font-semibold mb-1">
              Variants
            </span>
            <p className="font-sans font-semibold text-[#2c3f16] text-sm">
              {variants.join(", ")}
            </p>
          </div>
        )}

        <div className="pt-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2c3f16]/15 bg-[#f3f8ef] px-4 py-2 text-sm font-semibold text-[#2c3f16] shadow-sm transition-all duration-300 group-hover:border-[#2c3f16]/25 group-hover:bg-[#e9f2e0] group-hover:shadow-md group-hover:-translate-y-0.5">
            View details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
