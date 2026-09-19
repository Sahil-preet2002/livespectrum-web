"use client";

import React from "react";
import Link from "next/link";
import { Quote, Star, Sparkles, ArrowRight, Newspaper, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    publication: "Saathee Magazine",
    author: "Sharda Tarasaria",
    event: "Jagjit Singh Concert in Raleigh",
    date: "Concert Review Retrospective",
    quote:
      "Jagjit Singh, the name synonymous with ghazal, enticed more than 900 people at Stewart Theater in Raleigh. The event was flawlessly organized by LiveSpectrum Entertainment. He kept the audience spellbound with deep, gentle, melodious ghazals for hours in his unique style.",
    rating: 5,
    bgHex: "#FEF08A",
  },
  {
    publication: "Saathee Magazine",
    author: "Sharda Tarasaria",
    event: "Javed Jaffrey - 'Hum Le Gaye Tum Reh Gaye'",
    date: "US Premier Opening Night",
    quote:
      "LiveSpectrum Entertainment Company opened their season with the US premier of the Hindi comedy play 'Hum Le Gaye Tum Reh Gaye'. Javed Jaffrey playing four different roles in an adaptation of the Guinness World Record holder play kept the audience on a roll throughout the duration!",
    rating: 5,
    bgHex: "#FED7AA",
  },
];

const sponsors = [
  { name: "AKM Investments & Realty", tier: "Title Sponsor" },
  { name: "SafeSplash Swim School", tier: "Community Partner" },
  { name: "Sharkey's Cuts for Kids", tier: "Family Sponsor" },
  { name: "Accounting Solutions NC", tier: "Corporate Partner" },
  { name: "Salt & Pepper Restaurant", tier: "Hospitality" },
  { name: "Neeva Digital Media", tier: "Broadcast Partner" },
];

export default function PressReviews() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF1F2] text-[#121212] border-t-2 border-[#121212] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Marker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-[#121212]/15">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#F489A3] border-2 border-[#121212] text-[#121212] font-mono text-xs font-black tracking-wider uppercase shadow-[2px_2px_0px_#121212]">
              CHAPTER 06 // 06
            </span>
            <span className="text-xs font-mono text-[#121212]/80 font-bold uppercase">
              CRITICAL ACCLAIM // PRESS ENDORSEMENTS & SPONSORS
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#121212] bg-[#FFFDF9] border-2 border-[#121212] px-3.5 py-1 rounded-full shadow-[2px_2px_0px_#121212] font-bold">
            <Newspaper className="w-3.5 h-3.5" />
            <span>EDITORIAL JOURNALISM ARCHIVE</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <h2 className="text-3xl sm:text-5xl font-black text-[#121212] tracking-tight uppercase font-sans">
            Acclaimed by Critics & Patrons
          </h2>
          <p className="text-xs sm:text-sm text-[#121212]/80 max-w-xl font-medium">
            Archived editorial reviews published across major North Carolina publications.
          </p>
        </div>

        {/* Review Speech Bubble Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 rounded-3xl bg-[#FFFDF9] border-3 border-[#121212] shadow-[6px_6px_0px_#121212] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-[#121212]" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-black uppercase bg-[#F3ECD2] border border-[#121212]">
                    {rev.publication}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#121212] leading-relaxed italic font-serif">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 mt-6 border-t-2 border-[#121212]/15 flex items-center justify-between text-xs font-mono">
                <div>
                  <div className="font-black text-[#121212] uppercase font-sans">{rev.author}</div>
                  <div className="text-[#121212]/70 text-[10px]">{rev.event}</div>
                </div>
                <span className="text-[#121212]/60 font-bold">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsor Badges */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border-2 border-[#121212] shadow-[5px_5px_0px_#121212]">
          <div className="text-xs font-mono font-black uppercase text-[#121212] mb-4">
            COMMUNITY SPONSORS & CORPORATE ALLIANCES
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {sponsors.map((sp, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl bg-[#F3ECD2] border border-[#121212] text-center shadow-[2px_2px_0px_#121212]"
              >
                <div className="text-xs font-black text-[#121212] font-sans truncate">{sp.name}</div>
                <div className="text-[9px] font-mono text-[#121212]/70 font-bold">{sp.tier}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
