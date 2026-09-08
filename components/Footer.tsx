import Link from "next/link";
import { MessageCircle, Send, Share2 } from "lucide-react";
import LogisticsFooterDivider from "./LogisticsFooterDivider";

const cols = {
  Discover: ["Our Story", "Experiences", "Journal"],
  Visit: ["Plan a stay", "Seasonal guide", "Getting here"],
  Connect: ["Contact", "Instagram", "Newsletter"],
};

export default function Footer() {
  const getHref = (label: string) => {
    if (label === "Contact") return "/contact";
    if (label === "Our Story") return "/about";
    if (label === "Experiences") return "/#experiences";
    if (label === "Journal") return "/blog";
    if (label === "Plan a stay" || label === "Contact") return "/contact";
    return "#";
  };

  return (
    <footer className="relative mt-36 bg-[#2c3f16] text-[#f7f3ec] overflow-visible">
      {/* Detailed Logistics & Rice Grains Footer Divider */}
      <LogisticsFooterDivider />

      {/* Subtle Sunset Paddy Fields Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200')"
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <h3 className="font-serif-display text-3xl font-bold tracking-tight">Root & Rise</h3>
          </div>
          <p className="mt-3 text-base text-[#d8d2c4] max-w-md leading-relaxed">
            Rural stays and farm experiences that bring people closer to the land, food, and one another.
          </p>
          <div className="mt-6 flex gap-3">
            {[MessageCircle, Send, Share2].map((Icon, i) => (
              <span
                key={i}
                className="rounded-full border border-white/20 p-2 hover:bg-[#a67c1c] hover:border-[#a67c1c] text-[#fcf5e5] hover:text-[#fcf5e5] transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        {Object.entries(cols).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-[#e7e2d8] uppercase tracking-wider text-sm mb-4">{title}</h4>
            <ul className="space-y-2.5 text-base text-[#d8d2c4]">
              {links.map((label) => (
                <li key={label}>
                  <Link
                    href={getHref(label)}
                    className="hover:text-[#a67c1c] transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <address className="not-italic text-base text-[#d8d2c4]">
          <h4 className="font-semibold text-[#e7e2d8] uppercase tracking-wider text-sm mb-4">Contact Us</h4>
          <p className="mt-3">Email: <a href="mailto:hello@rootandrise.co" className="hover:text-[#a67c1c] transition-colors">hello@rootandrise.co</a></p>
          <p className="mt-1">Phone: <a href="tel:+919833613591" className="hover:text-[#a67c1c] transition-colors">+91 98336 13591</a></p>
          <h4 className="font-semibold text-[#e7e2d8] mt-6 uppercase tracking-wider text-sm">Based in</h4>
          <p className="mt-2 text-sm text-[#d8d2c4]/80">Maharashtra, India</p>
        </address>
      </div>

      <div className="relative z-10 border-t border-white/10 px-6 py-5 text-center text-sm text-[#c8c1b5] md:px-10">
        © {new Date().getFullYear()} Root & Rise. All rights reserved.
      </div>
    </footer>
  );
}
