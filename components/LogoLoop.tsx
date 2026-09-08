"use client";

import { useEffect, useMemo, useRef, useState, memo } from "react";

type LogoItem = {
  node?: React.ReactNode;
  title?: string;
  href?: string;
  alt?: string;
};

type LogoLoopProps = {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: React.Key) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
};

const MIN_COPIES = 2;

const cx = (...parts: Array<string | false | undefined>) => parts.filter(Boolean).join(" ");

const toCssLength = (value: number | string | undefined) => (typeof value === "number" ? `${value}px` : value);

export const LogoLoop = memo(function LogoLoop({
  logos,
  speed = 120,
  direction = "left",
  width = "100%",
  logoHeight = 28,
  gap = 32,
  hoverSpeed = 0,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  renderItem,
  ariaLabel = "Partner logos",
  className,
  style,
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const seqRef = useRef<HTMLUListElement | null>(null);

  const [copyCount, setCopyCount] = useState(MIN_COPIES);
  const [seqSize, setSeqSize] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const isVertical = direction === "up" || direction === "down";

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const directionalMultiplier = isVertical ? (direction === "up" ? 1 : -1) : direction === "left" ? 1 : -1;
    const speedMultiplier = speed < 0 ? -1 : 1;
    return magnitude * directionalMultiplier * speedMultiplier;
  }, [speed, direction, isVertical]);

  useEffect(() => {
    const measure = () => {
      const sequence = seqRef.current;
      const container = containerRef.current;
      if (!sequence || !container) return;

      const sequenceRect = sequence.getBoundingClientRect();
      const measuredSize = isVertical ? Math.ceil(sequenceRect.height) : Math.ceil(sequenceRect.width);
      if (measuredSize > 0) {
        setSeqSize(measuredSize);
        const viewportSize = isVertical ? container.clientHeight || container.parentElement?.clientHeight || measuredSize : container.clientWidth;
        const copiesNeeded = Math.ceil(viewportSize / measuredSize) + 2;
        setCopyCount(Math.max(MIN_COPIES, copiesNeeded));
      }
    };

    measure();

    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (resizeObserver && containerRef.current) resizeObserver.observe(containerRef.current);
    if (resizeObserver && seqRef.current) resizeObserver.observe(seqRef.current);

    window.addEventListener("resize", measure);
    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [logos, gap, logoHeight, isVertical]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !seqSize) return;

    let raf = 0;
    let lastTimestamp = 0;
    let offset = 0;
    let velocity = 0;
    const smoothTau = 0.25;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = Math.max(0, timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      const target = isHovered ? hoverSpeed : targetVelocity;
      const easing = 1 - Math.exp(-delta / smoothTau);
      velocity += (target - velocity) * easing;

      offset = ((offset + velocity * delta) % seqSize + seqSize) % seqSize;
      track.style.transform = isVertical ? `translate3d(0, ${-offset}px, 0)` : `translate3d(${-offset}px, 0, 0)`;

      raf = window.requestAnimationFrame(animate);
    };

    raf = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(raf);
  }, [seqSize, isHovered, hoverSpeed, targetVelocity, isVertical]);

  const renderLogoItem = (item: LogoItem, key: React.Key) => {
    if (renderItem) return renderItem(item, key);

    const content = item.node ?? (
      <div className="flex items-center gap-3 rounded-2xl border border-[#e2dbc9]/70 bg-white px-4 py-3 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2c3f16]/10 text-[#2c3f16]">
          <span className="text-lg font-semibold">✓</span>
        </div>
        <span className="font-serif-display text-sm md:text-base text-[#2c3f16]">{item.title}</span>
      </div>
    );

    const wrapper = (
      <div
        key={key}
        className={cx(
          "flex-none",
          isVertical ? "mb-[var(--logoloop-gap)]" : "mr-[var(--logoloop-gap)]",
          scaleOnHover && "transition-transform duration-300 hover:scale-[1.03]"
        )}
      >
        {content}
      </div>
    );

    return item.href ? (
      <a href={item.href} aria-label={item.alt ?? item.title} className="block no-underline" target="_blank" rel="noreferrer noopener">
        {wrapper}
      </a>
    ) : (
      wrapper
    );
  };

  const copies = Array.from({ length: copyCount }, (_, copyIndex) => (
    <ul
      key={`copy-${copyIndex}`}
      ref={copyIndex === 0 ? seqRef : undefined}
      className={cx("flex items-center", isVertical && "flex-col")}
      aria-hidden={copyIndex > 0}
    >
      {logos.map((item, index) => renderLogoItem(item, `${copyIndex}-${index}`))}
    </ul>
  ));

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={ariaLabel}
      className={cx("relative group overflow-hidden", isVertical ? "inline-block h-full" : "w-full", className)}
      style={{
        width: isVertical ? toCssLength(width) : (toCssLength(width) ?? "100%"),
        height: isVertical ? "100%" : undefined,
        ["--logoloop-gap" as never]: `${gap}px`,
        ["--logoloop-logoHeight" as never]: `${logoHeight}px`,
        ["--logoloop-fadeColor" as never]: fadeOutColor,
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {fadeOut && !isVertical && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[clamp(24px,8%,120px)] bg-[linear-gradient(to_right,var(--logoloop-fadeColor,rgba(247,243,236,1))_0%,rgba(0,0,0,0)_100%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[clamp(24px,8%,120px)] bg-[linear-gradient(to_left,var(--logoloop-fadeColor,rgba(247,243,236,1))_0%,rgba(0,0,0,0)_100%)]" />
        </>
      )}

      <div
        ref={trackRef}
        className={cx("relative z-0 flex select-none will-change-transform", isVertical ? "h-max w-full flex-col" : "w-max flex-row")}
      >
        {copies}
      </div>
    </div>
  );
});

export default LogoLoop;