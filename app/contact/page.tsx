"use client";

import { useState } from "react";
import { BadgeCheck, Globe2, Mail, Phone, MapPin } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import SectionHeading from "@/components/SectionHeading";

const offices = {
  pune: {
    name: "Registered Office / Pune HQ",
    address: "MCCIA Trade Tower, ICC Complex, 403, Senapati Bapat Road, Pune - 411 016, INDIA",
    phone: "+91 9833613591 (India)",
    email: "neemsaiglobal@gmail.com",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.997988358482!2d73.82626607621183!3d18.528956987411658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7906d27453%3A0xe54d9894e33cf374!2sMCCIA%20Trade%20Tower!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin",
  },
  mumbai: {
    name: "Mumbai Office",
    address: "Suparshwa Eterna, 2001 C Wing, Parsi Panchayat Road, Andheri East, Mumbai - 400 069, INDIA",
    phone: "+91 9833613591 (India)",
    email: "neemsaiglobal@gmail.com",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9126359003504!2d72.85309327622359!3d19.111451187079213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83f1207e4d5%3A0x7d6325983eeae011!2sParsi%20Panchayat%20Rd%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin",
  },
  nagpur: {
    name: "Nagpur Office",
    address: "NB Tower, Plot No. 6/7, Jai Hind Society, Shyam Nagar, Somalwada, Nagpur – 440 037, INDIA",
    phone: "+91 9833613591 (India)",
    email: "neemsaiglobal@gmail.com",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.5694200787125!2d79.06649777626955!3d21.089851687508627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be74c0000001%3A0x1d5f2a1ab74cc042!2sSomalwada%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin",
  },
  dubai: {
    name: "Dubai Office",
    address: "602 Al Khaleej Center, Al Mankhool Road, Bur Dubai - Dubai, UAE",
    phone: "+971 585895561 (UAE)",
    email: "neemsaiglobal@gmail.com",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.204555811776!2d55.291771176378125!3d25.263728688464673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4339178bf73d%3A0x959737ae0486c4ad!2sAl%20Khaleej%20Centre!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin",
  },
};

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof offices>('pune');
  const activeOffice = offices[activeTab];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <SectionHeading title="A Legacy of Global Presence" subtitle="Our concierge export desk supports buyers across key markets." />

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#e2dbc9] bg-white p-6 flex flex-col justify-between">
          <div>
            <h2 className="font-serif-display text-3xl text-[#2c3f16] font-bold">Global Presence</h2>
            
            {/* Active office specifications Card */}
            <div className="mt-4 space-y-3.5 bg-[#2c3f16] p-5 rounded-2xl transition-all duration-300 shadow-md">
              <h3 className="font-serif-display text-xl text-[#fcf5e5] font-semibold">{activeOffice.name}</h3>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#a67c1c] shrink-0 mt-0.5" />
                <p className="text-[#edf4e8]/90 text-sm leading-relaxed font-light">{activeOffice.address}</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#a67c1c] shrink-0" />
                <p className="text-[#edf4e8]/90 text-sm font-light">
                  <a href={`tel:${activeOffice.phone.split(" ")[0]}`} className="hover:text-white transition-all">
                    {activeOffice.phone}
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#a67c1c] shrink-0" />
                <p className="text-[#edf4e8]/90 text-sm font-light">
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${activeOffice.email}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-all"
                  >
                    {activeOffice.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Selector tabs for 4 offices */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(Object.keys(offices) as Array<keyof typeof offices>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  type="button"
                  className={`py-2.5 px-2 rounded-xl border text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${
                    activeTab === key
                      ? 'bg-[#2c3f16] text-[#fcf5e5] border-[#2c3f16] shadow-md'
                      : 'bg-white text-[#2c3f16] border-[#e2dbc9] hover:bg-[#faf8f5]'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            {/* Map Preview iframe */}
            <div className="mt-4 relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#e2dbc9] bg-[#faf8f5]">
              <iframe
                src={activeOffice.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="mt-6 border-t border-[#e2dbc9]/60 pt-4">
            <h3 className="font-semibold text-sm">Operational Hubs</h3>
            <ul className="mt-2 grid gap-1 text-sm text-[#48624a] sm:grid-cols-4">
              {[
                "Mumbai",
                "Pune",
                "Nagpur",
                "Dubai",
              ].map((hub) => (
                <li key={hub}>• {hub}</li>
              ))}
            </ul>
          </div>
        </article>

        <article className="rounded-2xl border border-[#e2dbc9] bg-white p-6">
          <h2 className="font-serif-display text-3xl">Concierge Inquiry</h2>
          <p className="mt-2 text-[#48624a]">Share your procurement needs and our team will revert promptly.</p>
          <div className="mt-4">
            <InquiryForm type="full" />
          </div>
        </article>
      </section>

      <section className="mt-8 grid gap-3 rounded-xl bg-[#f1eadf] p-5 text-[#2c3f16] sm:grid-cols-2">
        <div className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-[#2c3f16]" /> Certified Export Partner</div>
        <div className="flex items-center gap-2"><Globe2 className="h-5 w-5 text-[#2c3f16]" /> Shipping to 120+ Countries</div>
      </section>
    </div>
  );
}
