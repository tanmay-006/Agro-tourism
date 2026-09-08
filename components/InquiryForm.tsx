"use client";

import { FormEvent, useState } from "react";
import { products } from "@/data/products";

type FormType = "full" | "mini";

export default function InquiryForm({ type = "full" }: { type?: FormType }) {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    volume: "20-50 MT",
    product: products[0]?.name || "1121 Basmati Rice",
    message: "",
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Inquiry submitted", form);

    const emailSubject = `Inquiry: ${form.product} - ${form.name}`;
    const emailBody = `Name: ${form.name}\nCompany: ${form.company || "N/A"}\nEmail: ${form.email || "N/A"}\nProduct: ${form.product}\nVolume: ${form.volume}\n\nMessage:\n${form.message || "N/A"}`;
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=neemsaiglobal@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Automatically try opening Gmail in a new tab
    window.open(gmailUrl, "_blank");
    setStatus("success");
  };

  if (status === "success") {
    const emailSubject = `Inquiry: ${form.product} - ${form.name}`;
    const emailBody = `Name: ${form.name}\nCompany: ${form.company || "N/A"}\nEmail: ${form.email || "N/A"}\nProduct: ${form.product}\nVolume: ${form.volume}\n\nMessage:\n${form.message || "N/A"}`;
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=neemsaiglobal@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    const mailtoUrl = `mailto:neemsaiglobal@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    const handleCopy = () => {
      navigator.clipboard.writeText(emailBody);
      alert("Inquiry details copied to clipboard!");
    };

    const handleReset = () => {
      setForm({
        name: "",
        company: "",
        email: "",
        volume: "20-50 MT",
        product: products[0]?.name || "1121 Basmati Rice",
        message: "",
      });
      setStatus("idle");
    };

    return (
      <div className="rounded-xl bg-white/95 p-6 text-[#2c3f16] shadow-lg border border-[#e2dbc9]/60 space-y-4">
        <div className="text-center">
          <h3 className="font-serif-display text-2xl mb-2 text-[#2c3f16]">Inquiry Prepared!</h3>
          <p className="text-xs text-[#48624a] leading-relaxed">
            Choose how you would like to send your inquiry to <strong>neemsaiglobal@gmail.com</strong>:
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-[#839705] hover:bg-[#708004] text-white text-center rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            ✉️ Open Gmail (Web)
          </a>
          
          <a
            href={mailtoUrl}
            className="w-full py-3 px-4 bg-[#2c3f16] hover:bg-[#1d2a0f] text-[#fcf5e5] text-center rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            💻 Open Default Mail App
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="w-full py-3 px-4 bg-white text-[#2c3f16] border border-[#e2dbc9] hover:bg-[#faf8f5] text-center rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            📋 Copy Details to Clipboard
          </button>
        </div>

        <div className="text-center pt-2">
          <button 
            type="button"
            onClick={handleReset}
            className="text-xs text-[#2c3f16] hover:underline font-semibold cursor-pointer"
          >
            ← Fill Form Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-xl bg-white/95 p-4 text-[#2c3f16]">
      <label className="block text-sm font-medium">
        Name
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1 w-full rounded-md border border-[#d7d0c0] px-3 py-2"
        />
      </label>
      {type === "full" ? (
        <>
          <label className="block text-sm font-medium">
            Company
            <input
              required
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="mt-1 w-full rounded-md border border-[#d7d0c0] px-3 py-2"
            />
          </label>
          <label className="block text-sm font-medium">
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-md border border-[#d7d0c0] px-3 py-2"
            />
          </label>
          <label className="block text-sm font-medium">
            Product Interest
            <select
              value={form.product}
              onChange={(e) => setForm({ ...form, product: e.target.value })}
              className="mt-1 w-full rounded-md border border-[#d7d0c0] px-3 py-2"
            >
              {products.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-medium">
            Message / Specifications
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="mt-1 w-full rounded-md border border-[#d7d0c0] px-3 py-2"
            />
          </label>
          <button className="w-full rounded-full bg-[#2c3f16] px-4 py-2 font-semibold text-[#fcf5e5] transition hover:bg-[#2c3f16]">
            Submit Inquiry
          </button>
        </>
      ) : (
        <>
          <label className="block text-sm font-medium">
            Estimated Volume
            <select
              value={form.volume}
              onChange={(e) => setForm({ ...form, volume: e.target.value })}
              className="mt-1 w-full rounded-md border border-[#d7d0c0] px-3 py-2"
            >
              <option>20-50 MT</option>
              <option>50-100 MT</option>
              <option>100+ MT</option>
            </select>
          </label>
          <button className="w-full rounded-full bg-[#2c3f16] px-4 py-2 font-semibold text-[#fcf5e5] transition hover:bg-[#a67c1c]">
            Request Export Quote
          </button>
        </>
      )}
    </form>
  );
}
