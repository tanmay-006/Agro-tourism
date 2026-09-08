"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts, type BlogCategory } from "@/data/blogPosts";

const tabs: Array<"All" | BlogCategory> = ["All", "Project Notes", "Farm Stories", "Sustainability", "Technology"];

export default function BlogPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const [subscribeStatus, setSubscribeStatus] = useState("Join the demo list");
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const cards = useMemo(
    () => blogPosts.filter((post) => post.slug !== featured.slug && (tab === "All" || post.category === tab)),
    [featured.slug, tab],
  );

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribeStatus("Thanks — demo signup saved");
    event.currentTarget.reset();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <SectionHeading
        title="Stories from the Root & Rise project"
        subtitle="Project notes, farm stories, sustainability ideas, and technology choices behind this agro-tourism frontend demo."
        centered
      />
      <p className="mx-auto mt-6 max-w-xl text-center text-xs font-bold uppercase tracking-[0.2em] text-[#a67c1c]">Mock editorial space · written for the college project</p>

      <section className="mb-14 mt-12 border-b border-[#e2dbc9]/60 pb-6">
        <div className="flex flex-wrap justify-center gap-6">
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={`border-b-2 pb-2 text-xs font-semibold uppercase tracking-wider transition ${
                tab === item ? "border-[#2c3f16] text-[#2c3f16]" : "border-transparent text-[#48624a]/75 hover:text-[#2c3f16]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {tab === "All" && (
        <ScrollReveal direction="up">
          <section className="mb-16 grid overflow-hidden rounded-2xl border border-[#e2dbc9]/60 bg-[#fdfcfb] shadow-md lg:grid-cols-[1.3fr_1fr]">
            <div className="relative min-h-[300px] bg-[#f7f3ec]">
              <Image src={featured.image} alt={featured.title} fill className="object-cover" priority />
              <span className="absolute left-6 top-6 rounded-sm bg-white/90 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-[#2c3f16]">FEATURED PROJECT NOTE</span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#a67c1c]">{featured.displayCategory}</span>
              <h2 className="mt-4 font-serif-display text-3xl leading-tight text-[#2c3f16] md:text-4xl">{featured.title}</h2>
              <p className="mt-5 leading-7 text-[#48624a]">{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`} className="mt-7 inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#2c3f16]">
                Read project note <span className="ml-2 text-sm">→</span>
              </Link>
            </div>
          </section>
        </ScrollReveal>
      )}

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((post, index) => (
          <ScrollReveal key={post.slug} direction="up" delay={index * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#e2dbc9]/60 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden bg-[#f7f3ec]">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#a67c1c]">{post.displayCategory}</span>
                <h2 className="mt-3 font-serif-display text-2xl leading-snug text-[#2c3f16]">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#48624a]">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-6 border-t border-[#2c3f16]/10 pt-4 text-xs font-bold uppercase tracking-wider text-[#2c3f16]">
                  Read article <span className="ml-1 text-sm">→</span>
                </Link>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </section>

      {cards.length === 0 && <p className="py-12 text-center text-[#48624a]">No stories in this category yet.</p>}

      <section className="mt-20 rounded-3xl bg-[#20351b] p-10 text-center text-[#f7f3ec] md:p-12">
        <h2 className="font-serif-display text-3xl md:text-4xl">Follow the build</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#d8d2c4]">A lightweight demo signup for future notes on rural technology, sustainable travel, and the people behind local food.</p>
        <form onSubmit={handleSubscribe} className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="Enter your email address" className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[#f7f3ec] outline-none placeholder:text-[#d8d2c4]/60 focus:ring-2 focus:ring-[#e7bd67]" />
          <button type="submit" className="rounded-full bg-[#e7bd67] px-6 py-3 font-semibold text-[#20351b] transition hover:bg-[#f4d893]">{subscribeStatus}</button>
        </form>
        <p className="mt-5 text-[10px] uppercase tracking-widest text-[#d8d2c4]/60">Demo only · no marketing email is sent</p>
      </section>
    </div>
  );
}
