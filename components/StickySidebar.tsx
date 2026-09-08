"use client";

import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";

export default function StickySidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6 bg-[#2c3f16]/95 text-[#fcf5e5] py-6 px-3 rounded-full shadow-2xl border border-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(44,63,22,0.3)]">
      {/* WhatsApp Link */}
      <Link
        href="https://wa.me/919833613591"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="text-[#cec7b7] hover:text-[#fcf5e5] hover:scale-125 transition-transform duration-300 cursor-pointer"
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.528 2.028 14.058.995 11.993.995c-5.452 0-9.873 4.38-9.877 9.813a9.714 9.714 0 0 0 1.484 5.16l-.997 3.637 3.734-.972L6.647 19.16z" />
        </svg>
      </Link>

      {/* Mail Link */}
      <Link
        href="https://mail.google.com/mail/?view=cm&fs=1&to=neemsaiglobal@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email NeemSai Global via Gmail"
        className="text-[#cec7b7] hover:text-[#fcf5e5] hover:scale-125 transition-transform duration-300 cursor-pointer"
      >
        <Mail className="h-6 w-6 stroke-[2]" />
      </Link>

      {/* Call Link */}
      <Link
        href="tel:+919833613591"
        aria-label="Call NeemSai Global"
        className="text-[#cec7b7] hover:text-[#fcf5e5] hover:scale-125 transition-transform duration-300 cursor-pointer"
      >
        <Phone className="h-6 w-6 stroke-[2]" />
      </Link>

      {/* Inquiry Link */}
      <Link
        href="/contact"
        aria-label="Submit an Inquiry"
        className="text-[#cec7b7] hover:text-[#fcf5e5] hover:scale-125 transition-transform duration-300 cursor-pointer"
      >
        <Send className="h-6 w-6 stroke-[2]" />
      </Link>
    </div>
  );
}
