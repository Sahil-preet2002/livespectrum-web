import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SoundToggle from "@/components/ui/SoundToggle";
import FlowFestMascot from "@/components/ui/FlowFestMascot";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "LiveSpectrum Entertainment | Premier Bollywood Concerts & Theatrical Arts NC",
  description:
    "Promoting world-class Bollywood concerts, legendary artists (AR Rahman, Sonu Nigam, Shaan, Jagjit Singh), and Broadway-scale Hindi theater in Raleigh, Durham, and Morrisville, NC since 2005.",
  keywords: [
    "LiveSpectrum",
    "LiveSpectrum Entertainment",
    "Bollywood Concerts Raleigh NC",
    "Indian Events North Carolina",
    "AR Rahman Raleigh",
    "Sonu Nigam Morrisville",
    "AKM Investments",
    "Arvind Mahajan",
  ],
  authors: [{ name: "LiveSpectrum Entertainment" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className="bg-[#F3ECD2] text-[#121212] antialiased selection:bg-[#F3A20F] selection:text-[#121212] relative"
        suppressHydrationWarning
      >
        <div className="noise-overlay" />
        <ScrollProgress />
        <CustomCursor />
        <SoundToggle />
        <SmoothScrollProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FlowFestMascot />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
