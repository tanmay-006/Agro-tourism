"use client";

import { Download } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-[#2c3f16] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#fcf5e5] hover:bg-[#233212] transition-colors duration-300 shadow-md cursor-pointer"
    >
      <Download className="h-4 w-4" />
      Print / Save PDF
    </button>
  );
}
