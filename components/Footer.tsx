import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Send, Share2 } from "lucide-react";
import LogisticsFooterDivider from "./LogisticsFooterDivider";

const cols = {
  Company: ["About Us", "Sustainability", "Global Logistics"],
  Products: ["Basmati Varieties", "Non-Basmati"],
  Support: ["Contact", "Privacy Policy", "Terms"],
};

export default function Footer() {
  const getHref = (label: string) => {
    if (label === "Contact") return "/contact";
    if (label === "About Us") return "/about";
    if (label === "Basmati Varieties" || label === "Non-Basmati") return "/products";
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
            <Image
              src="/images/logo.png"
              alt="NeemSai Global Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain brightness-0 invert transition-transform hover:scale-105 duration-300"
            />
            <h3 className="font-serif-display text-3xl font-bold tracking-tight">NeemSai Global</h3>
          </div>
          <p className="mt-3 text-base text-[#d8d2c4] max-w-md leading-relaxed">
            Premium basmati and non-basmati export specialists delivering heritage quality with global precision.
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
          <p className="mt-3">Email: <a href="mailto:neemsaiglobal@gmail.com" className="hover:text-[#a67c1c] transition-colors">neemsaiglobal@gmail.com</a></p>
          <p className="mt-1">WhatsApp: <a href="https://wa.me/919833613591" target="_blank" rel="noopener noreferrer" className="hover:text-[#a67c1c] transition-colors">+91 9833613591</a></p>
          <h4 className="font-semibold text-[#e7e2d8] mt-6 uppercase tracking-wider text-sm">Global Offices</h4>
          <p className="mt-2 text-sm text-[#d8d2c4]/80">Pune - India & Dubai</p>
        </address>
      </div>

      <div className="relative z-10 border-t border-white/10 px-6 py-5 text-center text-sm text-[#c8c1b5] md:px-10">
        © {new Date().getFullYear()} NeemSai Global. All rights reserved.
      </div>
    </footer>
  );
}
