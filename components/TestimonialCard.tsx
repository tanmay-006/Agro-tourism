import { Star } from "lucide-react";
import Image from "next/image";
import BorderGlow from "@/components/BorderGlow";

export default function TestimonialCard({
  quote,
  name,
  role,
  stars,
  image,
}: {
  quote: string;
  name: string;
  role: string;
  stars: number;
  image: string;
}) {
  return (
    <BorderGlow
      borderRadius={16}
      edgeSensitivity={30}
      glowColor="120 35% 19%"
      backgroundColor="#1d2e11"
      glowRadius={30}
      glowIntensity={0.5}
      coneSpread={20}
      colors={["#2c3f16", "#1d2e11", "#a67c1c"]}
      className="min-w-[280px] md:min-w-[320px] max-w-sm h-full"
    >
      <article className="p-6 flex flex-col justify-between h-full w-full bg-gradient-to-b from-[#2c3f16] to-[#1d2e11]">
        <div>
          <p className="text-[#fcf5e5] italic text-sm md:text-base leading-relaxed">“{quote}”</p>
          <div className="mt-4 flex gap-1 text-[#cda110]" aria-label={`${stars} stars`}>
            {Array.from({ length: stars }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0 border border-white/15 bg-white/5">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-[#fcf5e5] text-sm md:text-base leading-tight">{name}</p>
            <p className="text-xs text-[#98b5a3] mt-1">{role}</p>
          </div>
        </div>
      </article>
    </BorderGlow>
  );
}
