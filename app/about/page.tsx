"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Plane, Package, ShieldCheck, Leaf, Handshake, Droplets, Globe, Stamp, BadgeCheck, FileText, ScrollText, Award, IdCard, Factory, Warehouse, FlaskConical, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollFloat from "@/components/ScrollFloat";
import ExportMap from "@/components/ExportMap";
import LogoLoop from "@/components/LogoLoop";

export default function AboutPage() {
  const certifications = [
    {
      title: "Udyam (MSME) Registration Certificate",
      subtitle: "Micro, Small and Medium Enterprises registration",
      icon: Stamp,
    },
    {
      title: "GST Registration Certificate (Form GST REG-06)",
      subtitle: "Goods and Services Tax compliance",
      icon: BadgeCheck,
    },
    {
      title: "Bank Authorization Letter",
      subtitle: "Authorized banking and trade operations",
      icon: FileText,
    },
    {
      title: "Exporter Code (IEC) Certificate",
      subtitle: "Importer-Exporter Code registration",
      icon: ScrollText,
    },
    {
      title: "APEDA Registration-cum-Membership Certificate (RCMC)",
      subtitle: "Agricultural and Processed Food Products Export Development Authority",
      icon: Award,
    },
    {
      title: "FSSAI License",
      subtitle: "Food Safety and Standards Authority of India",
      icon: IdCard,
    },
  ];

  const certificationLoopItems = certifications.map((cert) => {
    const Icon = cert.icon;
    return {
      title: cert.title,
      node: (
        <div className="group relative w-[320px] overflow-hidden rounded-2xl border border-[#b7c6ad]/50 bg-gradient-to-br from-white via-[#f3f8ef]/80 to-[#edf4e8]/30 px-5 py-4 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#7f976f]/60 hover:shadow-[0_12px_30px_rgba(44,63,22,0.12)]">
          {/* Subtle animated brand green background radial on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(44,63,22,0.05)_0%,transparent_100%)] pointer-events-none" />
          
          {/* Animated brand green pulse dot */}
          <div className="absolute top-4 right-4 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7f976f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2c3f16]"></span>
          </div>
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7f976f] to-[#2c3f16] text-[#fcf5e5] shadow-md shadow-[#2c3f16]/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_15px_rgba(44,63,22,0.35)]">
              <Icon className="h-6 w-6" />
            </div>
            <div className="min-w-0 pr-4">
              <h3 className="truncate font-serif-display text-base text-[#2c3f16] font-semibold tracking-wide transition-colors duration-300 group-hover:text-[#2c3f16]">{cert.title}</h3>
              <p className="mt-1 line-clamp-1 text-xs text-[#48624a] font-light transition-colors duration-300 group-hover:text-[#2c3f16]/80">{cert.subtitle}</p>
            </div>
          </div>
        </div>
      ),
    };
  });

  return (
    <div className="overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section className="relative py-16 flex flex-col items-center text-center px-6 md:px-10 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto z-10">
          <span className="text-xs uppercase tracking-widest text-[#2c3f16] font-semibold mb-4 block">
            ESTABLISHED HERITAGE
          </span>
          <ScrollFloat
            animationDuration={0.8}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="text-center block"
            textClassName="font-serif-display text-5xl md:text-6xl text-[#2c3f16] leading-tight mb-6"
          >
            Harvesting Excellence Across Generations
          </ScrollFloat>
          <p className="mt-4 font-serif-display text-lg text-[#48624a] italic max-w-2xl mx-auto leading-relaxed">
            From the sun-drenched fields of the Indo-Gangetic plains to the global dining tables, NeemSai Global represents a legacy of artisanal rice cultivation and uncompromising quality.
          </p>
        </div>

        <div className="mt-12 w-full max-w-7xl h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-[#e2dbc9]/60 relative bg-[#f7f3ec]">
          <Image
            src="/images/aboutus_ricefield1.webp"
            alt="Rice paddies terraces sunrise"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Our Legacy Section */}
      <section className="py-20 bg-[#fdfcfb] border-y border-[#e2dbc9]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-[#f7f3ec]">
                <Image
                  src="/images/legacy-bowls.jpg"
                  alt="A premium assortment of white, brown, and wild rice in wooden bowls with natural grain stalks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#2c3f16]/5 rounded-full blur-3xl -z-0" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="space-y-6">
            <h2 className="font-serif-display text-4xl text-[#2c3f16]">Our Legacy: Roots in Tradition</h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#2c3f16] to-transparent mb-6" />
            <p className="text-[#48624a] text-sm md:text-base leading-relaxed font-light">
              For over four decades, the foundations of NeemSai Global have been built upon the wisdom of traditional farming passed down through generations. What began as a local family initiative has flourished into a global hallmark of agricultural mastery.
            </p>
            <p className="text-[#48624a] text-sm md:text-base leading-relaxed font-light">
              We don't just export rice; we export a heritage of patience, expertise, and the deep-seated belief that nature's finest gifts deserve the utmost respect throughout their journey from soil to soul.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <span className="block font-serif-display text-4xl text-[#a67c1c] font-semibold">40+</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#48624a]/70">Years of Heritage</span>
              </div>
              <div>
                <span className="block font-serif-display text-4xl text-[#a67c1c] font-semibold">15+</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#48624a]/70">Premium Varieties</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20 bg-[#f7f3ec] relative overflow-hidden border-y border-[#e2dbc9]/40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#a67c1c]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#2c3f16]/10 blur-3xl" />
          <div className="absolute left-1/2 top-10 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#2c3f16]/15 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionHeading
              title="Our Vision & Mission"
              subtitle="A clear purpose guides every harvest, every shipment, and every partnership we build."
              centered
              titleClassName="text-[#2c3f16]"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="group relative rounded-3xl border border-[#e2dbc9]/70 bg-white/80 p-8 shadow-[0_18px_60px_rgba(44,63,22,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:rotate-[-0.5deg] hover:shadow-[0_26px_80px_rgba(44,63,22,0.14)] animate-fade-in-up will-change-transform">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#2c3f16]/5 via-transparent to-transparent pointer-events-none" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2c3f16]/10 text-[#2c3f16] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#2c3f16]/15">
                <Globe className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#a67c1c] font-semibold transition-all duration-300 group-hover:tracking-[0.38em]">Our Vision</span>
              <h3 className="mt-3 font-serif-display text-3xl text-[#2c3f16] transition-transform duration-500 group-hover:translate-x-1">To be the most trusted name in premium rice exports worldwide.</h3>
              <p className="mt-4 text-sm md:text-base leading-relaxed font-light text-[#48624a] transition-colors duration-300 group-hover:text-[#2f4632]">
                We envision a future where NeemSai Global is recognized for uncompromising quality, responsible sourcing, and a lasting connection between India’s farmlands and kitchens across the world.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#e2dbc9]/70 bg-[#faf8f5] p-4 transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 hover:border-[#2c3f16]/20 hover:shadow-md group/stat">
                  <span className="block text-[10px] uppercase tracking-[0.28em] text-[#48624a]/70 font-semibold">Reach</span>
                  <span className="mt-2 block font-serif-display text-2xl text-[#2c3f16] transition-transform duration-300 group-hover/stat:translate-x-1">30+ Countries</span>
                  <span className="text-sm text-[#48624a] font-light transition-colors duration-300 group-hover/stat:text-[#2c3f16]">Expanding trusted export routes globally.</span>
                </div>
                <div className="rounded-2xl border border-[#e2dbc9]/70 bg-[#faf8f5] p-4 transition-all duration-300 hover:-translate-y-2 hover:rotate-1 hover:border-[#2c3f16]/20 hover:shadow-md group/stat">
                  <span className="block text-[10px] uppercase tracking-[0.28em] text-[#48624a]/70 font-semibold">Heritage</span>
                  <span className="mt-2 block font-serif-display text-2xl text-[#2c3f16] transition-transform duration-300 group-hover/stat:translate-x-1">40+ Years</span>
                  <span className="text-sm text-[#48624a] font-light transition-colors duration-300 group-hover/stat:text-[#2c3f16]">A legacy built on family expertise.</span>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl border border-[#e2dbc9]/70 bg-[#2c3f16] p-8 shadow-[0_18px_60px_rgba(44,63,22,0.18)] transition-all duration-500 hover:-translate-y-3 hover:rotate-[0.5deg] hover:shadow-[0_26px_80px_rgba(44,63,22,0.22)] overflow-hidden animate-fade-in-up-delay-2 will-change-transform">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(166,124,28,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/5 blur-2xl animate-pulse transition-opacity duration-300 group-hover:opacity-80" />
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#fcf5e5] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-white/15">
                  <CheckCircle2 className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#d7b96a] font-semibold transition-all duration-300 group-hover:tracking-[0.38em]">Our Mission</span>
                <h3 className="mt-3 font-serif-display text-3xl text-[#fcf5e5] transition-transform duration-500 group-hover:translate-x-1">To deliver exceptional grains with integrity, consistency, and care.</h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed font-light text-[#c8d5c2] transition-colors duration-300 group-hover:text-[#edf4e8]">
                  We work to support farmers, protect grain quality at every stage, and create dependable export experiences that strengthen long-term relationships with our customers.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 hover:bg-white/10 group/stat">
                    <span className="block text-[10px] uppercase tracking-[0.28em] text-[#d7b96a] font-semibold">Quality</span>
                    <span className="mt-2 block font-serif-display text-2xl text-[#fcf5e5] transition-transform duration-300 group-hover/stat:translate-x-1">12 Steps</span>
                    <span className="text-sm text-[#c8d5c2] font-light transition-colors duration-300 group-hover/stat:text-[#edf4e8]">Multi-stage inspection for every lot.</span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 group/stat">
                    <span className="block text-[10px] uppercase tracking-[0.28em] text-[#d7b96a] font-semibold">Support</span>
                    <span className="mt-2 block font-serif-display text-2xl text-[#fcf5e5] transition-transform duration-300 group-hover/stat:translate-x-1">500+ Farmers</span>
                    <span className="text-sm text-[#c8d5c2] font-light transition-colors duration-300 group-hover/stat:text-[#edf4e8]">Partnerships that strengthen rural livelihoods.</span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-2 hover:rotate-1 hover:bg-white/10 group/stat">
                    <span className="block text-[10px] uppercase tracking-[0.28em] text-[#d7b96a] font-semibold">Traceability</span>
                    <span className="mt-2 block font-serif-display text-2xl text-[#fcf5e5] transition-transform duration-300 group-hover/stat:translate-x-1">100%</span>
                    <span className="text-sm text-[#c8d5c2] font-light transition-colors duration-300 group-hover/stat:text-[#edf4e8]">Transparent handling from farm to port.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { label: "Premium Varieties", value: "15+", copy: "Carefully selected grain profiles for varied markets." },
              { label: "Countries Served", value: "30+", copy: "A growing distribution footprint across continents." },
              { label: "Farm Partners", value: "500+", copy: "Long-term relationships with independent growers." },
              { label: "Quality Checks", value: "12", copy: "A disciplined process that protects every shipment." },
            ].map((item, index) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#d8e0c9]/80 bg-gradient-to-br from-[#fbf7f0] via-[#f4efe3] to-[#eef5e8] p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="block text-[10px] uppercase tracking-[0.28em] text-[#48624a]/70 font-semibold">{item.label}</span>
                <span className="mt-3 block font-serif-display text-3xl text-[#2c3f16]">{item.value}</span>
                <p className="mt-2 text-sm leading-relaxed font-light text-[#48624a]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section (Bento Grid) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-12">
          <h2 className="font-serif-display text-4xl text-[#2c3f16] mb-4">A Global Network of Excellence</h2>
          <p className="text-[#48624a] max-w-xl mx-auto text-sm md:text-base leading-relaxed font-light">
            Connecting the finest harvests to over 30 countries across five continents.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Bento Item 1: Map */}
          <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden bg-white shadow-md border border-[#e2dbc9]/60">
            <div className="p-8 h-full flex flex-col">
              <h3 className="font-serif-display text-2xl text-[#2c3f16] mb-2">Our Export Map</h3>
              <p className="text-[#48624a] text-sm mb-6 leading-relaxed font-light">
                A strategic logistics network ensuring freshness across oceans. Click or hover on hotspots to locate company setups.
              </p>
              <div className="flex-grow">
                <ExportMap />
              </div>
            </div>
          </div>

          {/* Bento Item 2: Quality */}
          <div className="md:col-span-2 rounded-2xl bg-[#2c3f16] text-[#f7f3ec] p-8 flex flex-col justify-center relative overflow-hidden border border-[#2c3f16] shadow-md group">
            <div className="absolute top-4 right-4 opacity-10 transition-transform duration-500 group-hover:scale-110">
              <ShieldCheck className="h-28 w-28 text-[#2c3f16]" />
            </div>
            <h3 className="font-serif-display text-2xl text-[#fcf5e5] mb-4 z-10">Uncompromising Standards</h3>
            <p className="text-[#98b5a3] text-sm leading-relaxed font-light z-10">
              Every grain undergoes a 12-stage quality check, from moisture content analysis to grain length verification, meeting international ISO and HACCP certifications.
            </p>
          </div>

          {/* Bento Item 3: Logistics */}
          <div className="rounded-2xl bg-[#fdfcfb] p-8 flex flex-col items-start border border-[#e2dbc9]/60 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#2c3f16]/10 flex items-center justify-center mb-6">
              <Plane className="h-6 w-6 text-[#2c3f16]" />
            </div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2c3f16] mb-2">Swift Transit</h4>
            <p className="text-[#48624a] text-xs leading-relaxed font-light">Real-time tracking for every shipment.</p>
          </div>

          {/* Bento Item 4: Packaging */}
          <div className="rounded-2xl bg-[#fdfcfb] p-8 flex flex-col items-start border border-[#e2dbc9]/60 shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#2c3f16]/10 flex items-center justify-center mb-6">
              <Package className="h-6 w-6 text-[#2c3f16]" />
            </div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2c3f16] mb-2">Artisanal Packing</h4>
            <p className="text-[#48624a] text-xs leading-relaxed font-light">Customized moisture-proof premium packaging.</p>
          </div>
        </div>
      </section>

      {/* Comprehensive Export Infrastructure Section */}
      <section className="py-20 bg-[#faf8f5] border-y border-[#e2dbc9]/40 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2c3f16]/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a67c1c]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#a67c1c] font-semibold block mb-3">FACILITIES & LOGISTICS</span>
            <SectionHeading
              title="Comprehensive Export Infrastructure"
              subtitle="End-to-end capabilities under one roof, ensuring absolute quality control from harvest to dispatch."
              centered
              titleClassName="text-[#2c3f16]"
            />
            <div className="mt-4 w-24 h-[2px] bg-[#a67c1c] mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 min-h-[440px] items-stretch">
            {/* Panel 1: Processing Facility */}
            <ScrollReveal direction="up" delay={0.1} className="flex-1 lg:hover:flex-[1.3] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="group relative h-full rounded-3xl border border-[#b7c6ad]/40 bg-white/70 p-8 shadow-[0_12px_30px_rgba(44,63,22,0.03)] hover:bg-[#2c3f16] hover:border-transparent hover:shadow-[0_25px_60px_rgba(44,63,22,0.25)] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 ease-out">
                {/* Gold light reflection border inside */}
                <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#a67c1c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2c3f16]/5 text-[#2c3f16] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#fcf5e5] group-hover:text-[#2c3f16] group-hover:rotate-3 shadow-sm">
                      <Factory className="h-7 w-7" />
                    </div>
                    <span className="font-serif-display text-4xl text-[#a67c1c]/10 font-semibold tracking-wider transition-colors duration-500 group-hover:text-white/10">01</span>
                  </div>

                  <h3 className="mt-8 font-serif-display text-2xl text-[#2c3f16] font-semibold tracking-wide transition-colors duration-500 group-hover:text-[#fcf5e5]">
                    Processing Facility
                  </h3>
                  
                  <div className="mt-2 w-12 h-[1.5px] bg-[#a67c1c]/40 transition-all duration-500 group-hover:w-20 group-hover:bg-[#a67c1c]" />

                  <ul className="mt-6 space-y-4">
                    {[
                      "Modern and hygienically maintained processing facility",
                      "Cleaning, grading and destoning systems",
                      "Advanced optical colour sorting technology",
                      "Automatic and semi-automatic packaging machines",
                      "Accurate weighing, filling and vacuum/bulk packing options"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#48624a] leading-relaxed font-light transition-colors duration-500 group-hover:text-[#edf4e8]/90">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2c3f16]/5 text-[#2c3f16] mt-0.5 group-hover:bg-white/15 group-hover:text-[#fcf5e5] group-hover:scale-110 transition-all duration-500">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Panel 2: Warehousing */}
            <ScrollReveal direction="up" delay={0.2} className="flex-1 lg:hover:flex-[1.3] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="group relative h-full rounded-3xl border border-[#b7c6ad]/40 bg-white/70 p-8 shadow-[0_12px_30px_rgba(44,63,22,0.03)] hover:bg-[#2c3f16] hover:border-transparent hover:shadow-[0_25px_60px_rgba(44,63,22,0.25)] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 ease-out">
                {/* Gold light reflection border inside */}
                <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#a67c1c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2c3f16]/5 text-[#2c3f16] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#fcf5e5] group-hover:text-[#2c3f16] group-hover:rotate-3 shadow-sm">
                      <Warehouse className="h-7 w-7" />
                    </div>
                    <span className="font-serif-display text-4xl text-[#a67c1c]/10 font-semibold tracking-wider transition-colors duration-500 group-hover:text-white/10">02</span>
                  </div>

                  <h3 className="mt-8 font-serif-display text-2xl text-[#2c3f16] font-semibold tracking-wide transition-colors duration-500 group-hover:text-[#fcf5e5]">
                    Warehousing
                  </h3>

                  <div className="mt-2 w-12 h-[1.5px] bg-[#a67c1c]/40 transition-all duration-500 group-hover:w-20 group-hover:bg-[#a67c1c]" />

                  <ul className="mt-6 space-y-4">
                    {[
                      "Spacious, clean and well-ventilated storage areas",
                      "Moisture-controlled storage where required",
                      "FIFO (First In, First Out) inventory management"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#48624a] leading-relaxed font-light transition-colors duration-500 group-hover:text-[#edf4e8]/90">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2c3f16]/5 text-[#2c3f16] mt-0.5 group-hover:bg-white/15 group-hover:text-[#fcf5e5] group-hover:scale-110 transition-all duration-500">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Panel 3: Laboratory */}
            <ScrollReveal direction="up" delay={0.3} className="flex-1 lg:hover:flex-[1.3] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <div className="group relative h-full rounded-3xl border border-[#b7c6ad]/40 bg-white/70 p-8 shadow-[0_12px_30px_rgba(44,63,22,0.03)] hover:bg-[#2c3f16] hover:border-transparent hover:shadow-[0_25px_60px_rgba(44,63,22,0.25)] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 ease-out">
                {/* Gold light reflection border inside */}
                <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#a67c1c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2c3f16]/5 text-[#2c3f16] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#fcf5e5] group-hover:text-[#2c3f16] group-hover:rotate-3 shadow-sm">
                      <FlaskConical className="h-7 w-7" />
                    </div>
                    <span className="font-serif-display text-4xl text-[#a67c1c]/10 font-semibold tracking-wider transition-colors duration-500 group-hover:text-white/10">03</span>
                  </div>

                  <h3 className="mt-8 font-serif-display text-2xl text-[#2c3f16] font-semibold tracking-wide transition-colors duration-500 group-hover:text-[#fcf5e5]">
                    Laboratory
                  </h3>

                  <div className="mt-2 w-12 h-[1.5px] bg-[#a67c1c]/40 transition-all duration-500 group-hover:w-20 group-hover:bg-[#a67c1c]" />

                  <ul className="mt-6 space-y-4">
                    {[
                      "In-house quality testing for moisture, purity and foreign matter",
                      "Batch-wise quality verification",
                      "Compliance with international quality standards"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#48624a] leading-relaxed font-light transition-colors duration-500 group-hover:text-[#edf4e8]/90">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2c3f16]/5 text-[#2c3f16] mt-0.5 group-hover:bg-white/15 group-hover:text-[#fcf5e5] group-hover:scale-110 transition-all duration-500">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Infrastructure Spotlight Section */}
      <section className="py-20 bg-white border-b border-[#e2dbc9]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Text content side */}
          <ScrollReveal direction="left" delay={0.1} className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#a67c1c] font-semibold block">
              MODERN FACILITIES
            </span>
            <h2 className="font-serif-display text-4xl text-[#2c3f16] leading-tight font-bold">
              State-of-the-Art Processing Unit
            </h2>
            <div className="h-[1.5px] w-20 bg-[#a67c1c]/60" />
            
            <p className="text-[#48624a] text-sm md:text-base leading-relaxed font-light">
              At NeemSai Global, we believe that the journey from paddy to plate requires absolute technical precision. Our processing hubs are equipped with advanced milling, sortex-cleaning, and multi-stage grading machines, ensuring that every grain of rice meets stringent international food safety standards.
            </p>
            <p className="text-[#48624a] text-sm md:text-base leading-relaxed font-light">
              Designed to handle high-capacity export demands, our infrastructure is engineered to preserve grain integrity and hygiene at scale. From automated temperature-regulated storage systems to computer-controlled color sorters, we invest in processing excellence at every step.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2c3f16]/5 text-[#2c3f16]">
                  <Check className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-[#2c3f16]">Sortex Cleaned Grains</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2c3f16]/5 text-[#2c3f16]">
                  <Check className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-[#2c3f16]">HACCP & ISO Compliant</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Image side */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#b7c6ad]/30 shadow-2xl relative z-10 bg-[#f7f3ec]">
                <Image
                  src="/images/about-sourcing-3.png"
                  alt="State of the art automated grain processing and sorting machines at NeemSai Global"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Decorative background glow behind image */}
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#a67c1c]/5 rounded-full blur-3xl -z-0 transition-all duration-500 group-hover:bg-[#a67c1c]/10" />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Sustainable Sourcing Section */}
      <section className="py-20 bg-[#2c3f16] text-[#f7f3ec] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <path d="M0 100 C 20 0 50 0 100 100" fill="transparent" stroke="white" strokeWidth={0.5}></path>
            <path d="M0 80 C 30 20 60 20 100 80" fill="transparent" stroke="white" strokeWidth={0.5}></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <ScrollReveal direction="left" delay={0.1} className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#98b5a3] font-semibold block">STEWARDSHIP</span>
            <h2 className="font-serif-display text-4xl text-[#fcf5e5]">Sustainable Sourcing, Ethical Growth</h2>
            <p className="text-[#98b5a3] text-sm md:text-base leading-relaxed font-light">
              Sustainability isn't a trend for us; it's a responsibility we owe to the earth that sustains us. We partner with over 500 small-scale farmers, providing them with organic fertilizers and water-efficient irrigation training.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-4 text-sm font-light text-[#98b5a3]">
                <Leaf className="h-5 w-5 text-[#2c3f16] shrink-0" />
                <span>Zero-waste milling processes</span>
              </li>
              <li className="flex items-center gap-4 text-sm font-light text-[#98b5a3]">
                <Handshake className="h-5 w-5 text-[#2c3f16] shrink-0" />
                <span>Fair-trade pricing and farmer welfare programs</span>
              </li>
              <li className="flex items-center gap-4 text-sm font-light text-[#98b5a3]">
                <Droplets className="h-5 w-5 text-[#2c3f16] shrink-0" />
                <span>Advanced water conservation techniques</span>
              </li>
            </ul>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <ScrollReveal direction="up" delay={0}>
                <div className="rounded-xl overflow-hidden h-64 border border-white/20 relative bg-[#f7f3ec]">
                  <Image
                    src="/images/about-sourcing-1.jpg"
                    alt="Golden ripe rice crop stalks at sunset"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.15}>
                <div className="rounded-xl overflow-hidden h-40 border border-white/20 relative bg-[#f7f3ec]">
                  <Image
                    src="/images/about-sourcing-4.jpg"
                    alt="White cargo truck being loaded with agricultural harvest on farm"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="pt-12 space-y-4">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="rounded-xl overflow-hidden h-40 border border-white/20 relative bg-[#f7f3ec]">
                  <Image
                    src="/images/about-sourcing-2.png"
                    alt="Lab technician in mask and gloves verifying grain quality under microscope"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.25}>
                <div className="rounded-xl overflow-hidden h-64 border border-white/20 relative bg-[#f7f3ec]">
                  <Image
                    src="/images/about-sourcing-3.png"
                    alt="Modern state of the art automated grain processing and sorting machines"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Packing Options Section */}
      <section className="py-20 bg-[#fdfcfb] border-t border-[#e2dbc9]/40 relative overflow-hidden">
        {/* Style block for animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes float-bag-1 {
            0%, 100% { transform: translateY(0) rotate(-2deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
          }
          @keyframes float-bag-2 {
            0%, 100% { transform: translateY(0) rotate(3deg); }
            50% { transform: translateY(-8px) rotate(-1deg); }
          }
          .animate-float-1 {
            animation: float-bag-1 5s ease-in-out infinite;
          }
          .animate-float-2 {
            animation: float-bag-2 6s ease-in-out infinite;
          }
        `}} />

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Column: Text Details */}
          <ScrollReveal direction="left" delay={0.1} className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#a67c1c] font-semibold block">
              CUSTOM SOLUTIONS
            </span>
            <h2 className="font-serif-display text-4xl text-[#2c3f16] leading-tight font-bold">
              Packing Options
            </h2>
            <div className="h-[1.5px] w-20 bg-[#a67c1c]/60" />
            
            <p className="text-[#48624a] text-sm md:text-base leading-relaxed font-light">
              We offer a wide variety of export-grade packaging options to ensure our products reach you in perfect condition, maintaining their freshness, premium aroma, and grain quality during transit.
            </p>
            
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2c3f16]/5 text-[#2c3f16] mt-1">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <strong className="text-sm text-[#2c3f16] font-semibold">Sizes:</strong>
                  <span className="block text-sm text-[#48624a] font-light mt-0.5">
                    1kg, 2kg, 5kg, 10kg, 20kg (Retail Packets) & 25kg, 50kg, and Bulk / Container Loads.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2c3f16]/5 text-[#2c3f16] mt-1">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <strong className="text-sm text-[#2c3f16] font-semibold">Materials:</strong>
                  <span className="block text-sm text-[#48624a] font-light mt-0.5">
                    Premium BOPP Bags, Heavy-Duty PP Bags, Eco-Friendly Woven / Non-Woven Bags, and Traditional Jute Bags.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2c3f16]/5 text-[#2c3f16] mt-1">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <strong className="text-sm text-[#2c3f16] font-semibold">Customization:</strong>
                  <span className="block text-sm text-[#48624a] font-light mt-0.5">
                    Private Label Packaging and Custom Branding options tailored to your market specifications.
                  </span>
                </div>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#2c3f16] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#fcf5e5] hover:bg-[#233212] hover:shadow-lg transition duration-300 shadow-md"
              >
                Discuss Your Requirements
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Column: Dynamic Visual Showcase */}
          <ScrollReveal direction="right" delay={0.2} className="relative">
            <div className="relative mx-auto max-w-[480px]">
              {/* Main Cargo Image */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#b7c6ad]/30 shadow-2xl relative bg-[#f7f3ec] z-10">
                <Image
                  src="/images/Cargo.jpeg"
                  alt="Export logistics and container loading at NeemSai Global"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating BOPP Bag Badge */}
              <div className="absolute -left-10 -bottom-8 bg-white/95 border border-[#b7c6ad]/40 rounded-2xl p-3 shadow-xl z-20 flex items-center gap-3 w-48 animate-float-1 backdrop-blur-sm">
                <div className="relative h-12 w-12 shrink-0 bg-[#f7f3ec] rounded-lg overflow-hidden border border-[#b7c6ad]/20">
                  <Image
                    src="/images/bopp.png"
                    alt="BOPP Packaging Bag"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-[#a67c1c] uppercase tracking-wider font-semibold">Premium</span>
                  <p className="text-xs text-[#2c3f16] font-semibold truncate leading-tight mt-0.5">BOPP Laminated</p>
                </div>
              </div>

              {/* Floating Bulk PP Bag Badge */}
              <div className="absolute -right-8 -top-8 bg-white/95 border border-[#b7c6ad]/40 rounded-2xl p-3 shadow-xl z-20 flex items-center gap-3 w-48 animate-float-2 backdrop-blur-sm">
                <div className="relative h-12 w-12 shrink-0 bg-[#f7f3ec] rounded-lg overflow-hidden border border-[#b7c6ad]/20">
                  <Image
                    src="/images/bulk-pp.png"
                    alt="Bulk PP Woven Bag"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-[#a67c1c] uppercase tracking-wider font-semibold">Bulk Export</span>
                  <p className="text-xs text-[#2c3f16] font-semibold truncate leading-tight mt-0.5">PP Woven Sacks</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-[#fdfcfb] rounded-2xl p-12 text-center border border-[#e2dbc9]/60 shadow-md relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#a67c1c]/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-serif-display text-3xl md:text-4xl text-[#2c3f16] mb-4">
              Partner with the Best in Rice Export
            </h2>
            <p className="text-[#48624a] text-sm md:text-base mb-8 max-w-lg mx-auto font-light leading-relaxed">
              Join our network of global distributors and bring the taste of heritage to your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-[#2c3f16] text-[#fcf5e5] px-8 py-4 font-semibold hover:bg-[#233212] hover:shadow-lg transition duration-300 rounded-lg text-xs uppercase tracking-wider font-semibold"
              >
                Download Catalog
              </a>
              <Link
                href="/contact"
                className="border border-[#2c3f16] text-[#2c3f16] px-8 py-4 font-semibold hover:bg-[#2c3f16]/5 transition duration-300 rounded-lg text-xs uppercase tracking-wider font-semibold"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-[#faf8f5] border-t border-[#e2dbc9]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionHeading
              title="Certifications & Registrations"
              subtitle="Official business and export credentials that support our operations and compliance standards."
              centered
              titleClassName="text-[#2c3f16]"
            />
          </div>

          <div className="rounded-3xl border border-[#b7c6ad]/60 bg-gradient-to-br from-[#f3f8ef]/95 via-[#edf4e8]/85 to-white/60 p-4 md:p-6 shadow-[0_20px_50px_rgba(44,63,22,0.06)] backdrop-blur-sm">
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#b7c6ad]/40 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#a67c1c] font-semibold">Verified documents</p>
                <h3 className="mt-2 font-serif-display text-2xl text-[#2c3f16]">Credentials we keep current.</h3>
              </div>
              <span className="hidden rounded-full border border-[#2c3f16]/20 bg-[#dfead7] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#2c3f16] animate-pulse md:inline-flex">
                Hover to explore
              </span>
            </div>

            <div className="h-[88px] md:h-[96px]">
              <LogoLoop
                logos={certificationLoopItems}
                speed={70}
                direction="left"
                gap={18}
                hoverSpeed={22}
                fadeOut
                fadeOutColor="#f3f8ef"
                scaleOnHover
                ariaLabel="NeemSai Global certifications"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
