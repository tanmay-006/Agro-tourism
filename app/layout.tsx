import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StickySidebar from "@/components/StickySidebar";
import { Bodoni_Moda } from "next/font/google";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
});

export const metadata: Metadata = {
  title: "NeemSai Global",
  description: "Premium basmati & non-basmati rice export company",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodoniModa.variable} h-full`}>
      <body className="min-h-full bg-[#f7f3ec] text-[#2c3f16]">
        <CustomCursor />
        <StickySidebar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
