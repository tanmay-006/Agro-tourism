import GlareHover from "./GlareHover";

export default function FeatureCard({
  number,
  title,
  description,
  icon,
  accentColor = "#f7f3ec",
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor?: string;
}) {
  return (
    <GlareHover
      width="100%"
      height="100%"
      background="#1d2e11"
      borderRadius="1rem"
      borderColor="#1d2e11"
      glareColor="#1d2e11"
      glareOpacity={0.15}
      glareSize={200}
      transitionDuration={600}
      className="p-6 text-left flex flex-col items-start justify-start shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md h-full"
    >
      <div className="mb-4" style={{ color: accentColor }}>{icon}</div>
      <p className="text-sm font-semibold" style={{ color: accentColor }}>{number}</p>
      <h3 className="mt-2 font-serif-display text-2xl" style={{ color: accentColor }}>{title}</h3>
      <p className="mt-2 text-[#f7f3ec]/80">{description}</p>
    </GlareHover>
  );
}
