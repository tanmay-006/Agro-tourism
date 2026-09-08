import Image from "next/image";
import { Leaf, Ship, Wheat, Award, Sprout, Globe } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import TestimonialCard from "@/components/TestimonialCard";
import HomeHeroCarousel from "@/components/HomeHeroCarousel";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials } from "@/data/testimonials";
import HomeEnquiryForm from "@/components/HomeEnquiryForm";
import WhyChooseSection from "@/components/WhyChooseSection";
import HomeProductShowcase from "@/components/HomeProductShowcase";
import NaturalParticles from "@/components/NaturalParticles";
import HomeVideo from "@/components/HomeVideo";


export default function Home() {
  return (
    <div>
      <HomeHeroCarousel />

      {/* The NeemSai Advantage */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 overflow-hidden">
        <NaturalParticles count={20} />
        <div className="relative z-10">
          <SectionHeading title="The NeemSai Advantage" centered titleClassName="text-[#cda110]" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ScrollReveal direction="up" delay={0}>
              <FeatureCard
                number="01"
                title="Artisanal Purity"
                description="Every grain is nurtured using time-honored traditional methods, ensuring the preservation of natural aroma and nutrient profiles that industrial farming overlooks."
                icon={<Wheat />}
                accentColor="#b07a16"
              />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <FeatureCard
                number="02"
                title="Global Precision"
                description="Our world-class logistics network utilizes real-time tracking and climate-controlled storage to maintain field-fresh quality across all seven continents."
                icon={<Ship />}
                 accentColor="#b07a16"
              />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <FeatureCard
                number="03"
                title="Harvest Legacy"
                description="With over three decades of agrarian expertise, NeemSai Global bridges the gap between heritage soil and modern culinary requirements."
                icon={<Leaf />}
                 accentColor="#b07a16"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose NeemSai Global */}
      <WhyChooseSection />

      {/* Video Presentation Section */}
      <section className="relative bg-[#faf8f5] py-20 overflow-hidden border-b border-[#2c3f16]/10">
        <NaturalParticles count={15} />
        
        {/* Centered Heading */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 mb-12">
          <SectionHeading 
            title="Our Story in Motion" 
            subtitle="Take a look at the journey behind our premium harvest quality and global distribution operations." 
            centered 
          />
        </div>
        
        {/* Full-Width Video */}
        <HomeVideo />
      </section>

      {/* Popular Varieties */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 relative overflow-hidden">
        <NaturalParticles />
        <div className="relative z-10">
          <SectionHeading title="Premium Grains Showcase" subtitle="Explore our certified selection of long-grain Basmati and everyday Non-Basmati varieties." />
          <div className="mt-8">
            <HomeProductShowcase />
          </div>
        </div>
      </section>

      {/* Exporting Excellence Globally */}
      <section className="relative bg-[#2c3f16] px-6 py-16 md:px-10 overflow-hidden">
        {/* Logistics Shipping Port Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-25 pointer-events-none" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200')" 
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
          <ScrollReveal direction="fade" duration={1.2}>
            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl border border-[#2c3f16] overflow-hidden grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkZ9SLIWN-w-010oSTQZcIvkdHC7kFGfK5wTlKmagbuyVkIC2ksrXH4MQ5JCyT0UpzgfAPeM_xWOpdNRIcUoSgBQ2U7ChabhxoF5a2l68pjvdu9mj52qs32DMSgyGJhh1z9jLlypqq1azYTzzsGl-AXsR2WKLRzSgGu2SNAME9OXMulTlRkx9sQw6uS9Oz_TB66_jUBkghXpZTwHkjPn5EpHwfXjxzUNhhhddHQ037IL5A77lwizUkNspWAoodYWKr7CS8Lgu1Huw"
                alt="World map"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <div>
            <ScrollFloat
              animationDuration={0.8}
              ease="back.out(1.5)"
              scrollStart="top bottom-=15%"
              scrollEnd="bottom center"
              stagger={0.015}
              containerClassName="my-0 text-left"
              textClassName="font-serif-display text-4xl text-[#f7f3ec]"
            >
              Exporting Excellence Globally
            </ScrollFloat>
            <p className="mt-2 text-sm text-[#98b5a3] mb-6">From the fertile heart of India to value-chains in Europe, the Middle East, and the Americas.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <StatCounter value="45+" label="Countries" />
              <StatCounter value="120k+" label="Metric Tons" />
              <StatCounter value="100+" label="Farming Partners" />
              <StatCounter value="100%" label="Traceability" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 overflow-hidden bg-[#fdfcfb] border-y border-[#e2dbc9]/40 relative">
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-center mb-10">
          <SectionHeading title="Voices of Heritage & Trust" centered />
        </div>
        
        {/* Testimonials Marquee Container */}
        <div className="relative flex w-full overflow-x-hidden">
          <div className="animate-marquee flex gap-6 py-4 pr-6">
            {/* First Set */}
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
            {/* Duplicated Set for Seamless Loop */}
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`${testimonial.name}-dup`} {...testimonial} />
            ))}
            {/* Triplicated Set for Ultra Smooth Wide Screens */}
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`${testimonial.name}-dup2`} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Enquiry Form */}
      <HomeEnquiryForm />
    </div>
  );
}
