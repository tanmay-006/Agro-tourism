"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d7d0c0] bg-[#f7f3ec]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1 md:px-10 md:py-3">
        
        {/* Left: Logo */}
        <div className="flex flex-1 justify-start">
          <Link href="/" className="flex items-center gap-2 font-serif-display text-2xl text-[#2c3f16]">
            <Image
              src="/images/logo.png"
              alt="NeemSai Global Logo"
              width={96}
              height={96}
              className="h-24 w-24 object-contain transition-all duration-300 hover:scale-105"
            />
            <span className="font-serif-display text-lg font-bold tracking-tight text-[#2c3f16] max-sm:hidden">
              NeemSai Global
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 justify-center">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif-display text-lg font-medium transition hover:text-[#2c3f16] ${
                  active ? "border-b-2 border-[#2c3f16] pb-1 text-[#2c3f16]" : "text-[#2c3f16]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Desktop CTA */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#2c3f16] px-4 py-2 font-serif-display text-sm font-semibold text-[#fcf5e5] transition hover:bg-[#2c3f16]"
          >
            Inquire Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-auto" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute left-0 top-full w-full border-b border-[#d7d0c0] bg-[#f7f3ec] p-6 flex flex-col gap-4 md:hidden">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif-display text-lg font-medium transition hover:text-[#2c3f16] ${
                  active ? "text-[#2c3f16] font-semibold" : "text-[#2c3f16]"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-full bg-[#2c3f16] px-4 py-2 font-serif-display text-base font-semibold text-[#fcf5e5] transition hover:bg-[#2c3f16]"
            onClick={() => setOpen(false)}
          >
            Inquire Now
          </Link>
        </div>
      )}
    </header>
  );
}
