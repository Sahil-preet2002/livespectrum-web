"use client";

import React from "react";
import Link from "next/link";
import { artists } from "@/data/artists";
import { Sparkles, ArrowRight, Star } from "lucide-react";

export default function ArtistMarquee() {
  const marqueeArtists = [...artists, ...artists];
  const headlineWords = [
    "A.R. RAHMAN",
    "SONU NIGAM",
    "JAGJIT SINGH",
    "SHAAN",
    "KAILASH KHER",
    "SUNIDHI CHAUHAN",
    "KUMAR SANU",
    "ALKA YAGNIK",
    "RAHAT FATEH ALI KHAN",
    "PARESH RAWAL",
    "ANUPAM KHER",
    "BISMIL KI MEHFIL",
  ];
  const loopedWords = [...headlineWords, ...headlineWords, ...headlineWords];

  return (
    <section className="py-10 border-y-2 border-[#121212] bg-[#FFFDF9] text-[#121212] overflow-hidden relative select-none">
      {/* Ribbon Header Label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#F3A20F] border border-[#121212] animate-ping" />
          <span className="text-xs font-mono uppercase tracking-widest font-black text-[#121212]">
            THE ROSTER OF LEGENDS // 50+ WORLD TOURS PROMOTED
          </span>
        </div>
        <Link
          href="/artists"
          className="px-3.5 py-1 rounded-full bg-[#FEF08A] border border-[#121212] shadow-[2px_2px_0px_#121212] text-xs text-[#121212] font-black uppercase tracking-wider flex items-center gap-1.5 hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
        >
          <span>All 50+ Icons</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Track 1: FlowFest Sliding Artist Photo Cards */}
      <div className="flex w-max animate-[marqueeLeft_45s_linear_infinite] hover:[animation-play-state:paused] gap-4 mb-5">
        {marqueeArtists.map((artist, idx) => (
          <Link
            key={`artist-${idx}`}
            href="/artists"
            className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-[#FFFDF9] border-2 border-[#121212] shadow-[3px_3px_0px_#121212] hover:bg-[#FEF08A] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#121212] transition-all duration-200 shrink-0 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-[#121212] bg-zinc-200 shrink-0 shadow-[1px_1px_0px_#121212]">
              <img
                src={artist.img}
                alt={artist.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div>
              <div className="text-sm font-black text-[#121212] font-sans">
                {artist.name}
              </div>
              <div className="text-[11px] font-mono text-[#121212]/70 flex items-center gap-1 max-w-[200px] truncate font-bold">
                <span className="text-[#F97028]">{artist.category}</span>
                <span>•</span>
                <span className="truncate">{artist.tagline}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Track 2: Bold Typographic Ribbon */}
      <div className="flex w-max animate-[marqueeRight_55s_linear_infinite] hover:[animation-play-state:paused] gap-8 items-center text-xs sm:text-sm font-mono tracking-widest font-black text-[#121212]/70 uppercase py-1 border-t border-[#121212]/15">
        {loopedWords.map((word, idx) => (
          <div key={`word-${idx}`} className="flex items-center gap-8 shrink-0 hover:text-[#F97028] transition-colors">
            <span>{word}</span>
            <Star className="w-3.5 h-3.5 text-[#F3A20F] fill-[#F3A20F]" />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
