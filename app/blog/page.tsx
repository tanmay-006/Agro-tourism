"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollFloat from "@/components/ScrollFloat";
import { blogPosts } from "@/data/blogPosts";

const tabs = ["All", "Industry News", "Recipes", "Sustainability", "Global Logistics"] as const;

export default function BlogPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const [subscribeStatus, setSubscribeStatus] = useState<string>("Subscribe");

  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const cards = useMemo(
    () => blogPosts.filter((post) => !post.featured && (tab === "All" || post.category === tab)),
    [tab],
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus("Thank You");
    const form = e.target as HTMLFormElement;
    form.reset();
    setTimeout(() => {
      setSubscribeStatus("Subscribe");
    }, 3000);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      {/* Page Header */}
      <header className="text-center mb-16">
        <div className="inline-block mb-4">
          <span className="text-xs uppercase tracking-widest text-[#2c3f16] font-semibold">
            Harvest Excellence & Wisdom
          </span>
          <div className="h-[1px] w-12 bg-[#2c3f16]/40 mx-auto mt-2" />
        </div>
        <ScrollFloat
          animationDuration={0.8}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          containerClassName="text-center block"
          textClassName="font-serif-display text-5xl md:text-6xl text-[#2c3f16]"
        >
          Heritage Insights
        </ScrollFloat>
        <p className="mt-4 font-serif-display text-lg text-[#48624a] italic max-w-2xl mx-auto leading-relaxed">
          A curated journey from the sacred soil of our estates to the soul of your culinary experiences. Exploring the legacy of the perfect grain.
        </p>
      </header>

      {/* Categories Filter Tabs */}
      <section className="mb-16 border-b border-[#e2dbc9]/60 pb-6">
        <div className="flex flex-wrap justify-center gap-8">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`text-xs uppercase tracking-wider font-semibold transition-all duration-300 pb-2 border-b-2 cursor-pointer ${
                tab === item
                  ? "text-[#2c3f16] border-[#2c3f16]"
                  : "text-[#48624a]/75 border-transparent hover:text-[#2c3f16]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <ScrollReveal direction="up" delay={0}>
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fdfcfb] p-6 rounded-2xl border border-[#e2dbc9]/60 shadow-md group">
            <div className="lg:col-span-7 h-[300px] md:h-[450px] overflow-hidden relative rounded-xl bg-[#f7f3ec]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm border border-[#e2dbc9]/40 shadow-sm z-10">
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#2c3f16]">FEATURED ARTICLE</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-4 md:p-8">
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#2c3f16] mb-4 block">
                {featured.displayCategory}
              </span>
              <h2 className="font-serif-display text-3xl md:text-4xl text-[#2c3f16] mb-6 leading-tight group-hover:text-[#2c3f16] transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-[#48624a] text-sm leading-relaxed font-light mb-8 line-clamp-4">
                {featured.excerpt}
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#2c3f16] border-b border-[#2c3f16] pb-1 hover:text-[#2c3f16] hover:border-[#2c3f16] transition duration-300"
              >
                Read More <span className="ml-2 font-serif text-sm">→</span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Blog Grid */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((post, i) => (
            <ScrollReveal key={post.slug} direction="up" delay={i * 0.1}>
              <article className="group flex flex-col h-full bg-white border border-[#e2dbc9]/60 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-64 overflow-hidden relative bg-[#f7f3ec]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <span className="text-[10px] tracking-wider uppercase font-bold text-[#2c3f16] mb-3 block">
                    {post.displayCategory}
                  </span>
                  <h3 className="font-serif-display text-2xl text-[#2c3f16] mb-4 leading-snug line-clamp-2 min-h-[3.2em] group-hover:text-[#2c3f16] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-[#48624a] text-sm leading-relaxed mb-6 font-light line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-[#2c3f16]/10 flex items-center">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#2c3f16] hover:text-[#2c3f16] transition duration-300"
                    >
                      Read Article <span className="ml-1 text-sm">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="rounded-3xl bg-[#2c3f16] p-12 text-[#f7f3ec] text-center border border-[#2c3f16] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <path d="M0 100 C 20 0 50 0 100 100" fill="transparent" stroke="white" strokeWidth={0.5}></path>
            <path d="M0 80 C 30 20 60 20 100 80" fill="transparent" stroke="white" strokeWidth={0.5}></path>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-serif-display text-3xl md:text-4xl text-[#fcf5e5]">Join Our Heritage Circle</h2>
          <p className="mt-3 text-[#98b5a3] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Receive quarterly insights into global agriculture, exclusive harvest reports, and artisanal recipes directly to your inbox.
          </p>
          <form className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row gap-4" onSubmit={handleSubscribe}>
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-grow bg-white/10 border border-white/20 text-[#fcf5e5] placeholder:text-[#fcf5e5]/50 px-6 py-4 rounded-full focus:ring-2 focus:ring-[#2c3f16] focus:border-transparent outline-none transition-all duration-300"
            />
            <button
              type="submit"
              className="bg-[#2c3f16] text-[#fcf5e5] px-8 py-4 font-semibold hover:bg-[#1d2a0f] hover:shadow-lg transition duration-300 rounded-full whitespace-nowrap min-w-[140px]"
            >
              {subscribeStatus}
            </button>
          </form>
          <p className="mt-6 text-[10px] uppercase tracking-widest text-[#98b5a3]/50">
            No spam. Only the finest grains of wisdom.
          </p>
        </div>
      </section>
    </div>
  );
}
