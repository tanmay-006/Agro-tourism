import ScrollFloat from "./ScrollFloat";

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  titleClassName = "text-[#2c3f16]",
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleClassName?: string;
}) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <ScrollFloat
        animationDuration={0.8}
        ease="back.out(1.5)"
        scrollStart="top bottom-=15%"
        scrollEnd="bottom center"
        stagger={0.015}
        containerClassName={`my-0 ${centered ? "mx-auto" : ""}`}
        textClassName={`font-serif-display text-3xl md:text-4xl ${titleClassName}`}
      >
        {title}
      </ScrollFloat>
      {subtitle ? <p className={`mt-3 ${titleClassName}`}>{subtitle}</p> : null}
    </div>
  );
}
