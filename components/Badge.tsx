export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[#2c3f16]/40 bg-[#f7f3ec] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2c3f16]">
      {children}
    </span>
  );
}
