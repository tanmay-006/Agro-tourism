import Image from "next/image";

export default function Hero({
  title,
  subtitle,
  image,
  cta,
}: {
  title: string;
  subtitle: string;
  image: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-[#2c3f16]/70" />
      <div className="relative mx-auto flex max-w-7xl flex-col px-6 py-24 text-[#f7f3ec] md:px-10">
        <h1 className="max-w-3xl font-serif-display text-4xl md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg">{subtitle}</p>
        {cta ? (
          <a
            href={cta.href}
            className="mt-8 inline-flex w-fit rounded-full bg-[#2c3f16] px-6 py-3 font-semibold text-[#fcf5e5] transition hover:bg-[#a67c1c]"
          >
            {cta.label}
          </a>
        ) : null}
      </div>
    </section>
  );
}
