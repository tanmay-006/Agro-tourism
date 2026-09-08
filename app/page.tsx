import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  MapPin,
  Sprout,
  Utensils,
} from "lucide-react";

const experiences = [
  {
    title: "Stay among the fields",
    description:
      "Wake up to birdsong, slow mornings, and a comfortable farm stay rooted in the rhythm of the land.",
    image: "/images/farm.jpeg",
    icon: <Sprout className="h-5 w-5" />,
  },
  {
    title: "Taste the harvest",
    description:
      "Share seasonal meals made with produce picked nearby and recipes passed down through local families.",
    image: "/images/grain.jpeg",
    icon: <Utensils className="h-5 w-5" />,
  },
  {
    title: "Learn by doing",
    description:
      "Join a guided farm walk, meet the people who grow your food, and discover how each season shapes the soil.",
    image: "/images/about-sourcing-1.jpg",
    icon: <Camera className="h-5 w-5" />,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate min-h-[78vh] bg-[#20351b] text-[#f7f3ec]">
        <Image
          src="/images/farm.jpeg"
          alt="Golden fields at an Indian farm"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#142313]/85 via-[#20351b]/45 to-transparent" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#e7bd67]">
              <Sprout className="h-4 w-4" /> Travel closer to the source
            </p>
            <h1 className="font-serif-display text-5xl leading-[0.98] md:text-8xl">
              Come for the view. Leave with a deeper connection.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#e7e2d8] md:text-lg">
              Farm stays, hands-on experiences, and honest food in the heart of
              the countryside. Discover agro-tourism that gives back to the
              people and places you visit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#experiences"
                className="inline-flex items-center gap-2 rounded-full bg-[#e7bd67] px-6 py-3 font-semibold text-[#20351b] transition hover:bg-[#f4d893]"
              >
                Explore experiences <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/45 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Plan your visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.1fr] md:px-10 md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a67c1c]">
            More than a getaway
          </p>
          <h2 className="mt-4 max-w-lg font-serif-display text-4xl leading-tight text-[#20351b] md:text-6xl">
            Tourism that helps the countryside thrive.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-[#53604d] md:text-lg">
          <p>
            Agro-tourism brings visitors into agricultural environments and
            rural lifestyles in a way that is meaningful for everyone. Your
            stay creates new income for farming families while keeping local
            knowledge, food traditions, and landscapes alive.
          </p>
          <p>
            From planting and harvesting to cooking and storytelling, every
            visit is an invitation to slow down and see how food, community,
            and the seasons are connected.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-[#20351b] hover:text-[#a67c1c]">
            Our approach <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="experiences" className="bg-[#eef0e5] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a67c1c]">
                Your time here
              </p>
              <h2 className="mt-3 font-serif-display text-4xl text-[#20351b] md:text-6xl">
                Simple experiences, lasting memories.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-[#53604d]">
              Choose your pace. Every experience is hosted by people who know
              this land best.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {experiences.map((experience) => (
              <article key={experience.title} className="group overflow-hidden rounded-2xl bg-[#f7f3ec] shadow-sm">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7bd67]/25 text-[#806018]">
                    {experience.icon}
                  </div>
                  <h3 className="mt-5 font-serif-display text-2xl text-[#20351b]">{experience.title}</h3>
                  <p className="mt-3 leading-7 text-[#53604d]">{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:px-10 md:py-28">
        <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-[#20351b]">
          <Image src="/images/about-sourcing-4.jpg" alt="Visitors enjoying a rural farm experience" fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a67c1c]">Make a difference</p>
          <h2 className="mt-4 font-serif-display text-4xl leading-tight text-[#20351b] md:text-6xl">
            Your visit is part of the harvest.
          </h2>
          <p className="mt-6 leading-8 text-[#53604d]">
            We partner with rural hosts, growers, and makers to create visits
            that keep value within the community. Come curious, leave knowing
            exactly whose hands and stories made your experience possible.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-5 border-y border-[#d7d0c0] py-6">
            <div><p className="font-serif-display text-3xl text-[#20351b]">12+</p><p className="mt-1 text-sm text-[#53604d]">local hosts</p></div>
            <div><p className="font-serif-display text-3xl text-[#20351b]">4</p><p className="mt-1 text-sm text-[#53604d]">seasonal trails</p></div>
          </div>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#20351b] px-6 py-3 font-semibold text-[#f7f3ec] transition hover:bg-[#34552b]">
            Start planning <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#20351b] px-6 py-16 text-[#f7f3ec] md:px-10 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#e7bd67]">
              <CalendarDays className="h-4 w-4" /> Ready when you are
            </p>
            <h2 className="mt-3 max-w-2xl font-serif-display text-4xl md:text-5xl">Your next story starts in the soil.</h2>
          </div>
          <Link href="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e7bd67] px-6 py-3 font-semibold text-[#20351b] transition hover:bg-[#f4d893]">
            Enquire about a stay <MapPin className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
