import os

events_page_code = '''"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { eventHistory } from "@/data/events";
import {
  Calendar,
  MapPin,
  Sparkles,
  Trophy,
  ArrowUpRight,
  Flame,
  Star,
  Clock,
  Ticket,
} from "lucide-react";

interface TimelineHighlight {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  tag: string;
  sticker: string;
  rotation: string;
  image: string;
  venue: string;
  stat: string;
}

const TIMELINE_HIGHLIGHTS: TimelineHighlight[] = [
  {
    id: "2005",
    year: "2005",
    title: "Chaal Baaz — The Historic Inception",
    subtitle: "US Premier Hindi Broadway Comedy starring Paresh Rawal at Stewart Theatre",
    tag: "INAUGURAL PRODUCTION",
    sticker: "★ SOLD OUT DEBUT",
    rotation: "-5deg",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
    venue: "Stewart Theatre, Raleigh NC",
    stat: "1,200 Attendees",
  },
  {
    id: "2006",
    year: "2006",
    title: "Jagjit Singh: Mehfil-e-Ghazal",
    subtitle: "The Ghazal King's legendary intimate evening spellbinding over 900 patrons",
    tag: "IMMORTAL MEHFIL",
    sticker: "✨ CRITICALLY ACCLAIMED",
    rotation: "5deg",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80",
    venue: "Stewart Theatre, Raleigh NC",
    stat: "Saathee Review 5★",
  },
  {
    id: "2007",
    year: "2007",
    title: "The Incredibles Stadium Tour",
    subtitle: "Sonu Nigam, Kailash Kher & high-voltage orchestra performing across 3.5 hours",
    tag: "FIRST ARENA MEGA SHOW",
    sticker: "🔥 8,000+ FANS",
    rotation: "-4deg",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
    venue: "Raleigh Arena Complex",
    stat: "Multi-Star Lineup",
  },
  {
    id: "2010",
    year: "2010",
    title: "A.R. Rahman Jai Ho World Tour",
    subtitle: "Oscar & Grammy-winning maestro with full 80-piece international symphonic chorus",
    tag: "STADIUM RECORD",
    sticker: "👑 18,000 ARENA SCALE",
    rotation: "4deg",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    venue: "PNC Arena, Raleigh NC",
    stat: "Historic NC Record",
  },
  {
    id: "2015",
    year: "2015",
    title: "Mera Woh Matlab Nahin Tha",
    subtitle: "National Award giants Anupam Kher & Neena Gupta in theatrical masterpiece",
    tag: "CRITICAL ACCLAIM",
    sticker: "🎭 THEATER EXCELLENCE",
    rotation: "-3deg",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    venue: "Raleigh Memorial Auditorium",
    stat: "Standing Ovation",
  },
  {
    id: "2023",
    year: "2023",
    title: "Bismil Ki Mehfil: Modern Sufi Trance",
    subtitle: "Revolutionary contemporary Sufi poetry and viral qawwali sensation",
    tag: "ECSTATIC SUFI MEHFIL",
    sticker: "🎶 YOUTH PHENOMENON",
    rotation: "3deg",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    venue: "Duke Energy Performing Arts",
    stat: "Completely Sold Out",
  },
];

export default function EventsPage() {
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [hoveredHighlight, setHoveredHighlight] = useState<TimelineHighlight | null>(null);

  const years = ["All", ...Array.from(new Set(eventHistory.map((e) => e.year)))];

  const filteredEvents =
    selectedYear === "All"
      ? eventHistory
      : eventHistory.filter((e) => e.year === selectedYear);

  return (
    <div className="pt-24 pb-28 min-h-screen bg-[#07070a] text-white select-none">
      {/* 1. FlowFest-Style Hero Header */}
      <section className="relative px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-b-2 border-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-amber-500/[0.10] blur-[150px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-purple-600/[0.08] blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDFBF7] text-[#121212] border-2 border-[#121212] shadow-[3px_3px_0px_#F3A20F] text-xs font-mono font-black uppercase rotate-[-1.5deg]">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              THE 20-YEAR CHRONICLES // 2005–2024
            </div>
            <span className="inline-block px-3 py-1 rounded-md text-[10px] font-mono font-black uppercase tracking-wider bg-[#F3A20F] text-[#121212] border border-[#121212] shadow-[2px_2px_0px_#121212] rotate-[2deg]">
              ★ OVER 200,000 AUDIENCE MEMBERS
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase leading-[0.9] max-w-5xl mb-6">
            TWO DECADES OF <span className="text-stroke hover:text-stroke-gold transition-colors">HISTORIC</span> PRODUCTIONS.
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
            Explore every landmark tour produced in North Carolina—from the intimate 2005 Stewart Theatre premiere of Paresh Rawal to the 18,000-seat PNC Arena record of A.R. Rahman.
          </p>
        </div>
      </section>

      {/* 2. FlowFest "What to Expect" Style Interactive Milestone Eras */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#F3ECD2] text-[#121212] border-b-4 border-[#121212] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #121212 1.5px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b-2 border-[#121212] pb-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-md text-[10px] font-mono font-black uppercase tracking-wider bg-[#121212] text-[#FDFBF7] shadow-[2px_2px_0px_#F3A20F] mb-3 rotate-[-1deg]">
                HOVER TO EXPLORE LANDMARK MILESTONES
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-[#121212] uppercase tracking-tight leading-tight">
                HISTORICAL <span className="underline decoration-[#F3A20F] decoration-wavy">LANDMARKS</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#121212]/80 max-w-sm">
              Hover over each milestone year to see the original stage snapshot, venue acoustics, and audience reception in North Carolina.
            </p>
          </div>

          {/* Interactive Row List with Popout Photo Cards */}
          <div className="divide-y-2 divide-[#121212] border-y-2 border-[#121212]">
            {TIMELINE_HIGHLIGHTS.map((h) => {
              const isHovered = hoveredHighlight?.id === h.id;

              return (
                <div
                  key={h.id}
                  onMouseEnter={() => setHoveredHighlight(h)}
                  onMouseLeave={() => setHoveredHighlight(null)}
                  className="group relative py-7 sm:py-8 transition-colors duration-300 hover:bg-[#FDFBF7]/60 cursor-pointer px-4 sm:px-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center gap-5 sm:gap-7">
                      <span className="text-2xl sm:text-3xl font-mono font-black text-[#121212]/30 group-hover:text-[#F3A20F] transition-colors">
                        {h.year}
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-4xl font-black text-[#121212] uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                          {h.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#121212]/70 font-medium max-w-xl mt-0.5">
                          {h.subtitle} • <span className="text-[#121212] font-bold">{h.venue}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pl-12 lg:pl-0">
                      <span className="hidden sm:inline-block px-3 py-1 rounded-md text-[11px] font-mono font-black uppercase bg-[#FDFBF7] text-[#121212] border border-[#121212] shadow-[2px_2px_0px_#121212]">
                        {h.tag}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#121212] text-[#FDFBF7] group-hover:bg-[#F3A20F] group-hover:text-[#121212] border-2 border-[#121212] flex items-center justify-center transition-all group-hover:rotate-45 shadow-[2px_2px_0px_#121212]">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* FlowFest Floating Popout Photo Card */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.75, rotate: 0 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          rotate: h.rotation,
                        }}
                        exit={{ opacity: 0, scale: 0.75 }}
                        transition={{ type: "spring", stiffness: 350, damping: 20 }}
                        className="absolute right-12 sm:right-32 top-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:block w-64 h-72 rounded-2xl p-2 bg-[#FDFBF7] border-3 border-[#121212] shadow-[8px_8px_0px_#121212] overflow-hidden"
                      >
                        <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#121212]">
                          <img
                            src={h.image}
                            alt={h.title}
                            className="w-full h-full object-cover filter contrast-125"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                          <div className="absolute top-2.5 left-2.5">
                            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-black uppercase bg-[#F3A20F] text-[#121212] border border-[#121212] shadow-[2px_2px_0px_#121212]">
                              {h.sticker}
                            </span>
                          </div>

                          <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                            <div className="text-[9px] font-mono uppercase text-amber-300 font-bold">{h.venue}</div>
                            <div className="text-xs font-bold truncate">{h.stat}</div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Chronological Archive Timeline Matrix */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Year Filter Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
                  selectedYear === year
                    ? "bg-[#F3A20F] text-[#121212] border-2 border-[#121212] shadow-[3px_3px_0px_#121212]"
                    : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                {year === "All" ? "All Eras" : year}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-zinc-400">
            Showing {filteredEvents.length} landmark productions
          </div>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((event, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-zinc-950 border-2 border-white/10 hover:border-amber-400 transition-all duration-300 shadow-xl hover:shadow-[6px_6px_0px_#F3A20F] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xl font-black text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-0.5 rounded-lg">
                    {event.year}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-bold">
                    {event.type}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium mb-4">
                  {event.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{event.venue}, {event.location}</span>
                </div>

                <span className="text-amber-400 font-bold flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Archived</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
'''

os.makedirs('src/app/events', exist_ok=True)
with open('src/app/events/page.tsx', 'w', encoding='utf-8') as f:
    f.write(events_page_code)
print("src/app/events/page.tsx updated with FlowFest styling!")
