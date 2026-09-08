"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  CloudSun,
  Code2,
  Cpu,
  Database,
  Droplets,
  Gauge,
  Globe2,
  Leaf,
  Lightbulb,
  LineChart,
  MapPin,
  Megaphone,
  Monitor,
  Plus,
  Radio,
  Recycle,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sprout,
  Tractor,
  TrendingUp,
  Truck,
  Users,
  Utensils,
  Wifi,
  Workflow,
  Thermometer,
} from "lucide-react";

type Icon = LucideIcon;

const overviewCards = [
  { icon: Leaf, title: "Rooted in nature", text: "Step into working farms, breathe fresh air, and see how food is grown season by season." },
  { icon: Users, title: "Meet the makers", text: "Share time with farmers, cooks, and local families who keep rural knowledge alive." },
  { icon: CircleDollarSign, title: "Travel that gives back", text: "Your stay creates new income streams while keeping value in the communities you visit." },
  { icon: Sprout, title: "Learn by doing", text: "Explore farming, rural culture, and sustainable practices through hands-on experiences." },
];

const benefits = [
  { title: "For visitors", text: "A meaningful escape with hands-on learning, local food, and memories beyond the usual itinerary.", icon: Globe2 },
  { title: "For farmers", text: "A resilient second income, direct relationships with guests, and a platform to tell your story.", icon: TrendingUp },
  { title: "For the land", text: "Regenerative practices, shorter supply chains, and more people invested in a healthy landscape.", icon: Recycle },
  { title: "Cultural connection", text: "Visitors experience authentic rural traditions, food, and lifestyles.", icon: Users },
  { title: "Local produce", text: "Guests discover fresh products and support the people who grow them.", icon: ShoppingCart },
  { title: "Digital reach", text: "Computer engineering helps rural businesses reach more visitors online.", icon: Smartphone },
];

const experiences = [
  { title: "Harvest & learn", description: "Follow the crop from soil to basket with a farmer-led morning in the fields.", duration: "2 hours", image: "/images/farm.jpeg", icon: Sprout },
  { title: "Kitchen to table", description: "Pick seasonal ingredients, then turn them into a generous regional lunch.", duration: "3 hours", image: "/images/about-sourcing-4.jpg", icon: Utensils },
  { title: "Golden hour trail", description: "Walk through the paddies as the light changes and hear the stories of this place.", duration: "90 minutes", image: "/images/grain.jpeg", icon: Camera },
  { title: "The seed library", description: "Discover native grains, save seeds, and learn why crop diversity matters.", duration: "75 minutes", image: "/images/about-sourcing-1.jpg", icon: Leaf },
  { title: "Farm friends", description: "A gentle, joyful visit with the animals and the people who care for them.", duration: "1.5 hours", image: "/images/about-sourcing-2.png", icon: Tractor },
  { title: "Slow living workshop", description: "Make something useful with local materials and take a little countryside home.", duration: "2 hours", image: "/images/about-sourcing-3.png", icon: Lightbulb },
];

const stays = [
  { name: "Paddy View Cottage", host: "Maya & Ajay", location: "Alibaug, Maharashtra", price: "₹4,800", detail: "per night · breakfast included", image: "/images/about-hero.jpg", rating: "4.9" },
  { name: "The Mango Orchard", host: "The Patil family", location: "Nashik, Maharashtra", price: "₹3,600", detail: "per night · farm tour included", image: "/images/about-sourcing-4.jpg", rating: "4.8" },
  { name: "Riverbend Farmhouse", host: "Kavita & team", location: "Kolhapur, Maharashtra", price: "₹5,200", detail: "per night · dinner included", image: "/images/farm.jpeg", rating: "5.0" },
];

const produce = [
  { name: "Sun-dried Basmati Rice", origin: "Pusa fields · 1 kg", price: "₹180", image: "/images/1718 Basmati Rice.jpg" },
  { name: "Sona Masuri Rice", origin: "Small-batch · 1 kg", price: "₹140", image: "/images/Sona-Masuri.jpg" },
  { name: "Golden Harvest Rice", origin: "Seasonal crop · 1 kg", price: "₹160", image: "/images/golden-sella-rice.png" },
  { name: "Mogra Everyday Rice", origin: "Local grower · 1 kg", price: "₹120", image: "/images/mini_mogra.jpeg" },
];

const technologies = [
  { title: "IoT sensors", text: "Soil, water, and climate sensors turn field conditions into useful signals.", icon: Wifi, color: "bg-[#e3f1e5]" },
  { title: "Smart irrigation", text: "Data-aware watering protects every drop and keeps crops healthier.", icon: Droplets, color: "bg-[#e7f0f5]" },
  { title: "Farm analytics", text: "Simple dashboards help hosts spot patterns and make better decisions.", icon: BarChart3, color: "bg-[#f3ead5]" },
  { title: "Digital marketplace", text: "Visitors can discover stays, book experiences, and buy directly from farms.", icon: Smartphone, color: "bg-[#ede7f5]" },
  { title: "AI recommendations", text: "Personalised itineraries match a guest’s pace, interests, and season.", icon: Cpu, color: "bg-[#e6edf7]" },
  { title: "Cloud platform", text: "A secure shared system connects farms, guests, payments, and insights.", icon: CloudSun, color: "bg-[#e6f2ee]" },
  { title: "Digital marketing", text: "Stories, social campaigns, and email bring the right visitors closer.", icon: Megaphone, color: "bg-[#f6e7df]" },
  { title: "Secure payments", text: "Transparent digital transactions build trust for every participant.", icon: ShieldCheck, color: "bg-[#e9eee0]" },
];

const flowSteps = [
  { number: "01", title: "Sense", text: "Connected sensors collect soil, weather, and crop signals.", icon: Radio },
  { number: "02", title: "Understand", text: "The platform turns raw readings into a clear farm story.", icon: Database },
  { number: "03", title: "Connect", text: "Guests discover the right stay, experience, and produce.", icon: Smartphone },
  { number: "04", title: "Grow", text: "Bookings and better decisions create a stronger rural economy.", icon: TrendingUp },
];

const timeline = [
  { time: "09:42", title: "Irrigation cycle complete", detail: "North field · 420 L saved", icon: Droplets, tone: "text-[#397c62] bg-[#e3f1e5]" },
  { time: "10:18", title: "Guests arrived at Farmhouse 03", detail: "4 visitors · welcome tour started", icon: Users, tone: "text-[#8b6818] bg-[#f7efd9]" },
  { time: "11:05", title: "Fresh produce order packed", detail: "12 items · dispatching today", icon: Truck, tone: "text-[#52749a] bg-[#e7f0f5]" },
  { time: "11:44", title: "Soil health check logged", detail: "East plot · moisture in optimal range", icon: Activity, tone: "text-[#845b68] bg-[#f2e6ea]" },
];

function SectionIntro({ eyebrow, title, description, dark = false }: { eyebrow: string; title: string; description?: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-bold uppercase tracking-[0.22em] ${dark ? "text-[#e7bd67]" : "text-[#a67c1c]"}`}>{eyebrow}</p>
      <h2 className={`mt-4 font-serif-display text-4xl leading-[1.05] md:text-6xl ${dark ? "text-[#f7f3ec]" : "text-[#20351b]"}`}>{title}</h2>
      {description && <p className={`mt-5 max-w-2xl text-base leading-7 md:text-lg ${dark ? "text-[#d8d2c4]" : "text-[#53604d]"}`}>{description}</p>}
    </div>
  );
}

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [searchMessage, setSearchMessage] = useState("");

  function searchStays(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchMessage("Showing 3 demo stays matched to your search.");
  }

  return (
    <div className="overflow-hidden bg-[#f7f3ec] text-[#20351b]">
      <section className="relative isolate min-h-[82vh] bg-[#20351b] text-[#f7f3ec]">
        <Image src="/images/farm.jpeg" alt="Golden fields at an Indian farm" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#142313]/90 via-[#20351b]/65 to-[#20351b]/10" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#e7bd67]"><Sprout className="h-4 w-4" /> Root & Rise · Agro-tourism technology</p>
            <h1 className="font-serif-display text-5xl leading-[0.95] md:text-8xl">Experience the Farm. Powered by Technology.</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[#e7e2d8] md:text-xl">Discover authentic farm stays, agricultural experiences, rural culture, and local produce through a modern digital agro-tourism platform.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#stays" className="inline-flex items-center gap-2 rounded-full bg-[#e7bd67] px-6 py-3 font-semibold text-[#20351b] transition hover:bg-[#f4d893]">Find a farm stay <ArrowRight className="h-4 w-4" /></Link>
              <Link href="#technology" className="inline-flex items-center gap-2 rounded-full border border-white/45 px-6 py-3 font-semibold text-white transition hover:bg-white/10">See the technology</Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#d8d2c4]">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#e7bd67]" /> 12 partner farms</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#e7bd67]" /> 100% demo-ready</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#e7bd67]" /> Built for local impact</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7d0c0] bg-[#f7f3ec] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="The idea" title="Agro-tourism, reimagined for a connected world." description="Agro-tourism is more than a weekend away. It is a bridge between the people who grow our food and the people who want to understand it. Root & Rise uses thoughtful technology to make that bridge easier to cross." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {overviewCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-[#d7d0c0] bg-white/45 p-7 transition hover:-translate-y-1 hover:bg-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7bd67]/30 text-[#806018]"><card.icon className="h-5 w-5" /></div>
                <h3 className="mt-6 font-serif-display text-2xl">{card.title}</h3>
                <p className="mt-3 leading-7 text-[#53604d]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef0e5] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Why agro-tourism" title="A better kind of growth." description="When a visitor spends time on a farm, the impact travels further than the checkout. It supports livelihoods, protects heritage, and makes sustainable choices feel personal." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-2xl bg-[#f7f3ec] p-7 shadow-sm">
                <benefit.icon className="h-7 w-7 text-[#a67c1c]" />
                <h3 className="mt-7 font-serif-display text-2xl">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-[#53604d]">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experiences" className="bg-[#20351b] px-6 py-20 text-[#f7f3ec] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Farm experiences" title="Get your hands a little dirty." description="Six ways to slow down, learn something new, and meet the people behind the harvest." dark />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <article key={experience.title} className="group overflow-hidden rounded-2xl bg-[#f7f3ec] text-[#20351b]">
                <div className="relative h-56 overflow-hidden">
                  <Image src={experience.image} alt={experience.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f3ec]/90 text-[#806018]"><experience.icon className="h-4 w-4" /></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3"><h3 className="font-serif-display text-2xl">{experience.title}</h3><span className="shrink-0 text-xs font-semibold text-[#806018]">{experience.duration}</span></div>
                  <p className="mt-3 min-h-14 text-sm leading-6 text-[#53604d]">{experience.description}</p>
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#20351b] hover:text-[#a67c1c]">Explore experience <ChevronRight className="h-4 w-4" /></button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stays" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionIntro eyebrow="Stay close to the source" title="Find your farm stay." description="Search our demo marketplace to find a welcoming base for your next countryside story." />
            <span className="flex items-center gap-2 pb-2 text-sm text-[#53604d]"><MapPin className="h-4 w-4 text-[#a67c1c]" /> Maharashtra, India</span>
          </div>
          <form onSubmit={searchStays} className="mt-10 grid gap-3 rounded-2xl border border-[#d7d0c0] bg-white p-4 shadow-sm md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr_auto] md:items-end md:p-5">
            <label className="text-sm font-semibold text-[#20351b]">Where<input name="location" defaultValue="Maharashtra" className="mt-2 w-full rounded-xl border border-[#d7d0c0] bg-[#f7f3ec] px-4 py-3 font-normal outline-none ring-[#a67c1c] focus:ring-2" /></label>
            <label className="text-sm font-semibold text-[#20351b]">Check in<input type="date" className="mt-2 w-full rounded-xl border border-[#d7d0c0] bg-[#f7f3ec] px-4 py-3 font-normal outline-none ring-[#a67c1c] focus:ring-2" /></label>
            <label className="text-sm font-semibold text-[#20351b]">Check out<input type="date" className="mt-2 w-full rounded-xl border border-[#d7d0c0] bg-[#f7f3ec] px-4 py-3 font-normal outline-none ring-[#a67c1c] focus:ring-2" /></label>
            <label className="text-sm font-semibold text-[#20351b]">Guests<select className="mt-2 w-full rounded-xl border border-[#d7d0c0] bg-[#f7f3ec] px-4 py-3 font-normal outline-none ring-[#a67c1c] focus:ring-2"><option>2 guests</option><option>4 guests</option><option>6 guests</option></select></label>
            <label className="text-sm font-semibold text-[#20351b]">Experience<select className="mt-2 w-full rounded-xl border border-[#d7d0c0] bg-[#f7f3ec] px-4 py-3 font-normal outline-none ring-[#a67c1c] focus:ring-2"><option>Any experience</option><option>Farm stay</option><option>Guided farm tour</option><option>Harvest workshop</option></select></label>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#20351b] px-5 py-3 font-semibold text-white transition hover:bg-[#34552b]"><Search className="h-4 w-4" /> Search</button>
          </form>
          {searchMessage && <p className="mt-4 text-sm font-semibold text-[#397c62]" role="status">{searchMessage}</p>}
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {stays.map((stay) => (
              <article key={stay.name} className="overflow-hidden rounded-2xl border border-[#d7d0c0] bg-white shadow-sm">
                <div className="relative h-56">
                  <Image src={stay.image} alt={stay.name} fill className="object-cover" />
                  <span className="absolute right-4 top-4 rounded-full bg-[#f7f3ec]/95 px-3 py-1 text-xs font-bold">★ {stay.rating}</span>
                </div>
                <div className="p-6"><p className="text-xs font-bold uppercase tracking-wider text-[#a67c1c]">{stay.location}</p><h3 className="mt-2 font-serif-display text-2xl">{stay.name}</h3><p className="mt-2 text-sm text-[#53604d]">Hosted by {stay.host}</p><div className="mt-6 flex items-end justify-between border-t border-[#e8e1d5] pt-4"><div><strong className="text-lg">{stay.price}</strong><p className="text-xs text-[#53604d]">{stay.detail}</p></div><button className="inline-flex items-center gap-1 text-sm font-bold text-[#20351b] hover:text-[#a67c1c]">View stay <ArrowRight className="h-3.5 w-3.5" /></button></div></div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs text-[#53604d]"><span className="font-bold">Demo marketplace:</span> listings and availability are illustrative mock data for this project.</p>
        </div>
      </section>

      <section className="bg-[#f0e9da] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionIntro eyebrow="From our farms" title="Fresh things, fairly priced." description="A small demo shop for produce grown by partner farms. Buy direct, know the source, and keep more value with the grower." /><div className="flex items-center gap-2 rounded-full bg-[#f7f3ec] px-4 py-2 text-sm font-semibold text-[#20351b]"><ShoppingCart className="h-4 w-4" /> {cartCount} items in cart</div></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {produce.map((item) => (
              <article key={item.name} className="overflow-hidden rounded-2xl bg-[#f7f3ec]">
                <div className="relative h-48"><Image src={item.image} alt={item.name} fill className="object-cover" /></div>
                <div className="p-5"><p className="text-xs text-[#53604d]">{item.origin}</p><h3 className="mt-2 font-serif-display text-xl">{item.name}</h3><div className="mt-5 flex items-center justify-between"><strong>{item.price}</strong><button onClick={() => setCartCount((count) => count + 1)} className="inline-flex items-center gap-1 rounded-full bg-[#20351b] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#34552b]"><Plus className="h-3.5 w-3.5" /> Add</button></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="The project at a glance" title="How Computer Engineering Powers Agro-Tourism" description="This project brings software, sensors, and human hospitality into one practical system. Technology stays in the background so the farm experience can stay in the foreground." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((technology) => (
              <article key={technology.title} className={`rounded-2xl p-6 ${technology.color}`}>
                <technology.icon className="h-6 w-6 text-[#2c3f16]" />
                <h3 className="mt-6 font-serif-display text-xl">{technology.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#53604d]">{technology.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#162b20] px-6 py-20 text-[#f7f3ec] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionIntro eyebrow="Operations view" title="Smart Farm Dashboard" description="A single view for the people running the farm, the stay, and the guest experience." dark /><span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e7bd67]/40 bg-[#e7bd67]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#e7bd67]"><Monitor className="h-4 w-4" /> Demo / Simulated Data</span></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Crop health", value: "94%", icon: Sprout, color: "text-[#8bd0a9]" },
              { label: "Soil moisture", value: "68%", icon: Droplets, color: "text-[#78b8d2]" },
              { label: "Temperature", value: "27°C", icon: Thermometer, color: "text-[#e7bd67]" },
              { label: "Water level", value: "81%", icon: Gauge, color: "text-[#9ec9e0]" },
              { label: "Visitors today", value: "42", icon: Users, color: "text-[#d89a9a]" },
              { label: "Bookings", value: "28", icon: CalendarDays, color: "text-[#e7bd67]" },
              { label: "Revenue", value: "₹18,450", icon: CircleDollarSign, color: "text-[#8bd0a9]" },
            ].map((metric) => <div key={metric.label} className="flex items-center justify-between rounded-2xl bg-[#203b2b] p-5"><div><p className="text-sm text-[#b5c8b6]">{metric.label}</p><p className="mt-2 text-2xl font-semibold">{metric.value}</p><p className="mt-1 text-xs text-[#8bd0a9]">Demo reading</p></div><metric.icon className={`h-7 w-7 ${metric.color}`} /></div>)}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
            <div className="rounded-2xl bg-[#203b2b] p-6 md:p-8">
              <div className="flex items-center justify-between"><div><p className="text-sm text-[#b5c8b6]">Farm health score</p><p className="mt-1 text-4xl font-semibold">92<span className="text-xl text-[#9ab09a]">/100</span></p></div><div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#397c62]/30 text-[#8bd0a9]"><Gauge className="h-6 w-6" /></div></div>
              <div className="mt-8 h-44 rounded-xl border border-white/10 bg-[#1a3225] p-4"><div className="flex h-full items-end gap-2">{[38, 52, 48, 66, 58, 74, 70, 82, 76, 91, 84, 94].map((height, index) => <div key={index} className="group relative flex-1"><div className="absolute -top-5 left-1/2 hidden -translate-x-1/2 text-[10px] text-[#b5c8b6] group-hover:block">{height}</div><div className="h-full rounded-t bg-[#6ba778] opacity-80" style={{ transform: `scaleY(${height / 100})`, transformOrigin: "bottom" }} /></div>)}</div></div>
              <div className="mt-4 flex items-center justify-between text-xs text-[#9ab09a]"><span>Last 12 hours</span><span className="flex items-center gap-1 text-[#8bd0a9]"><TrendingUp className="h-3.5 w-3.5" /> +12.4% this week</span></div>
            </div>
            <div className="rounded-2xl bg-[#203b2b] p-6 md:p-8"><p className="text-sm text-[#b5c8b6]">Booking trends</p><div className="mt-8 flex h-36 items-end gap-3">{[32, 45, 40, 58, 64, 72, 88].map((height, index) => <div key={index} className="flex flex-1 flex-col items-center gap-2"><div className="w-full rounded-t bg-[#e7bd67]" style={{ height: `${height}%` }} /><span className="text-[10px] text-[#9ab09a]">D{index + 1}</span></div>)}</div><p className="mt-5 text-xs text-[#8bd0a9]">Weekly bookings are trending upward.</p></div>
          </div>
          <p className="mt-5 text-xs text-[#9ab09a]">All dashboard metrics and charts shown above are simulated data for demonstration purposes.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div><SectionIntro eyebrow="Live farm activity" title="The system is online." description="A transparent timeline keeps hosts and guests in sync, from the first sensor reading to the final shared meal." /><div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e3f1e5] px-4 py-2 text-sm font-bold text-[#397c62]"><span className="h-2 w-2 animate-pulse rounded-full bg-[#397c62]" /> System Online</div></div>
          <div className="relative space-y-7 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-[#d7d0c0]">
            {timeline.map((event) => <div key={event.time} className="relative flex gap-5"><div className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${event.tone}`}><event.icon className="h-4 w-4" /></div><div className="flex-1 border-b border-[#e8e1d5] pb-6"><div className="flex flex-wrap justify-between gap-2"><h3 className="font-semibold">{event.title}</h3><time className="text-xs text-[#a67c1c]">{event.time}</time></div><p className="mt-1 text-sm text-[#53604d]">{event.detail}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#eef0e5] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="The data-driven flow" title="Every signal becomes a better experience." description="A clear feedback loop helps farmers care for the land and helps visitors choose experiences that feel personal." />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {flowSteps.map((step, index) => <article key={step.number} className="relative rounded-2xl bg-[#f7f3ec] p-6"><span className="text-xs font-bold tracking-widest text-[#a67c1c]">{step.number}</span><step.icon className="mt-8 h-6 w-6 text-[#20351b]" /><h3 className="mt-5 font-serif-display text-2xl">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#53604d]">{step.text}</p>{index < flowSteps.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 text-[#a67c1c] md:block" />}</article>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#20351b] p-8 text-[#f7f3ec] md:p-12"><Megaphone className="h-8 w-8 text-[#e7bd67]" /><p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd67]">Digital marketing flow</p><h2 className="mt-4 font-serif-display text-4xl md:text-5xl">The right story reaches the right traveller.</h2><div className="mt-10 space-y-4">{["Discover · social stories & search", "Trust · farm profiles & real reviews", "Decide · simple booking journey", "Return · loyalty, referrals & fresh produce"].map((item, index) => <div key={item} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e7bd67] text-sm font-bold text-[#20351b]">{index + 1}</span><span className="text-sm">{item}</span></div>)}</div></div>
          <div className="rounded-3xl border border-[#d7d0c0] bg-[#f7f3ec] p-8 md:p-12"><CircleDollarSign className="h-8 w-8 text-[#a67c1c]" /><p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#a67c1c]">Revenue model</p><h2 className="mt-4 font-serif-display text-4xl md:text-5xl">Value stays in the ecosystem.</h2>          <div className="mt-8 space-y-5">{[["Farm stays", "Hosts earn directly from overnight bookings"], ["Guided farm tours", "Farmers share knowledge through hosted visits"], ["Farming workshops", "Hands-on learning creates paid experiences"], ["Local produce", "Farmers reach guests without a long chain"], ["Traditional food", "Regional recipes support local cooks"], ["Rural events", "Seasonal gatherings bring new visitors"]].map(([label, text]) => <div key={label} className="border-b border-[#d7d0c0] pb-4"><h3 className="font-semibold">{label}</h3><p className="mt-1 text-sm text-[#53604d]">{text}</p></div>)}</div></div>
        </div>
      </section>

      <section className="bg-[#e3f1e5] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div><SectionIntro eyebrow="Sustainability by design" title="Technology that leaves a lighter footprint." description="Better information makes sustainable choices visible and achievable. We measure what matters, then keep the people and planet at the centre." /><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Sustainable farming", "Local employment", "Cultural preservation", "Responsible tourism", "Local food", "Community development"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-[#f7f3ec]/70 p-4 text-sm font-semibold"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#397c62]" />{item}</div>)}</div></div>
          <div className="relative h-[360px] overflow-hidden rounded-3xl"><Image src="/images/aboutus_ricefield1.webp" alt="Green rice fields viewed from above" fill className="object-cover" /><div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#20351b]/90 p-5 text-[#f7f3ec]"><p className="text-xs font-bold uppercase tracking-wider text-[#e7bd67]">Our promise</p><p className="mt-2 font-serif-display text-2xl">Leave the farm healthier than we found it.</p></div></div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Project technology" title="A practical stack, built to grow." description="The prototype is frontend-only today, but its architecture is ready for real farm data, real bookings, and real community partnerships." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Frontend", "Next.js · React · TypeScript", Code2], ["Data layer", "IoT APIs · cloud database", Database], ["Experience", "Responsive web · accessibility", Monitor], ["Intelligence", "Analytics · recommendations", LineChart]].map(([title, text, Icon]) => { const TechnologyIcon = Icon as Icon; return <div key={title as string} className="rounded-2xl border border-[#d7d0c0] p-6"><TechnologyIcon className="h-6 w-6 text-[#a67c1c]" /><h3 className="mt-6 font-serif-display text-xl">{title as string}</h3><p className="mt-2 text-sm text-[#53604d]">{text as string}</p></div>; })}</div>
        </div>
      </section>

      <section className="bg-[#f0e9da] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><SectionIntro eyebrow="System flow diagram" title="From field signal to shared value." description="One connected journey keeps every part of the agro-tourism experience useful, human, and measurable." /></div><div className="rounded-3xl bg-[#f7f3ec] p-5 md:p-8"><div className="grid gap-3 sm:grid-cols-5 sm:items-center">{[["Farm", Tractor], ["Sensors", Wifi], ["Platform", Workflow], ["Guests", Users], ["Impact", Leaf]].map(([label, Icon], index) => { const FlowIcon = Icon as Icon; return <div key={label as string} className="flex items-center gap-3 sm:block sm:text-center"><div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e3f1e5] text-[#397c62] sm:mx-auto"><FlowIcon className="h-6 w-6" /></div><p className="mt-0 text-sm font-bold sm:mt-3">{label as string}</p>{index < 4 && <ArrowRight className="ml-auto h-4 w-4 text-[#a67c1c] sm:hidden" />}{index < 4 && <ArrowRight className="mx-auto mt-[-25px] hidden h-4 w-4 text-[#a67c1c] sm:ml-[calc(100%+12px)] sm:block" />}</div>; })}</div></div></div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div><SectionIntro eyebrow="What comes next" title="A small idea with a wide horizon." description="The next chapter is about moving from a thoughtful prototype to a trusted, measurable network of farms." /><div className="mt-10 grid gap-4 sm:grid-cols-2">{["IoT sensors", "Smart irrigation", "AI crop monitoring", "Mobile application", "Real-time weather data", "Online payment", "AI visitor recommendations", "AR/VR farm tours", "Advanced visitor analytics"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-[#eef0e5] p-4 text-sm font-semibold"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#397c62]" />{item}</div>)}</div></div>
          <div className="rounded-3xl bg-[#20351b] p-8 text-[#f7f3ec] md:p-10"><Lightbulb className="h-8 w-8 text-[#e7bd67]" /><p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd67]">Future scope</p><h2 className="mt-4 font-serif-display text-4xl">Build slowly. Learn locally. Scale responsibly.</h2><p className="mt-6 leading-7 text-[#d8d2c4]">Future versions can bring in predictive crop insights, verified impact metrics, local language support, and a community of farms sharing what works.</p></div>
        </div>
      </section>

      <section className="bg-[#eef0e5] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a67c1c]">About this project</p><h2 className="mt-4 font-serif-display text-4xl leading-tight md:text-5xl">A student-minded prototype for a real-world opportunity.</h2></div><div className="space-y-5 text-base leading-8 text-[#53604d] md:text-lg"><p>Root & Rise explores how computer engineering can support agro-tourism without losing the warmth, wisdom, and unpredictability that make a farm visit special.</p><p>This frontend demonstration uses mock listings, simulated dashboard metrics, and existing farm imagery to communicate the product vision. It is a starting point for research, collaboration, and responsible implementation.</p><Link href="/about" className="inline-flex items-center gap-2 font-semibold text-[#20351b] hover:text-[#a67c1c]">Read our story <ArrowRight className="h-4 w-4" /></Link></div></div>
      </section>

      <section className="bg-[#20351b] px-6 py-20 text-[#f7f3ec] md:px-10 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#e7bd67]"><CalendarDays className="h-4 w-4" /> Your next story starts here</p><h2 className="mt-4 max-w-2xl font-serif-display text-4xl md:text-6xl">Come curious. Leave connected.</h2><p className="mt-4 max-w-xl leading-7 text-[#d8d2c4]">Explore a farm stay, taste something fresh, or help us imagine a smarter future for rural travel.</p></div><Link href="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e7bd67] px-6 py-3 font-semibold text-[#20351b] transition hover:bg-[#f4d893]">Plan your visit <ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </div>
  );
}
