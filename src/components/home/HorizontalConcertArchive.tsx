"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Sparkles, MapPin, Trophy, ArrowLeft, ArrowRight, ArrowUpRight, Film, History } from "lucide-react";

interface MilestoneShow {
  year: string;
  artist: string;
  title: string;
  venue: string;
  highlight: string;
  image: string;
  category: string;
  attendance: string;
  bgHex: string;
}

const landmarkShows: MilestoneShow[] = [
  {
    year: "2023",
    artist: "Bismil",
    title: "Bismil Ki Mehfil Live",
    venue: "Raleigh Memorial Auditorium",
    highlight: "Sold-out crowd of 1,200+ patrons",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    category: "Sufi Rock & Poetry",
    attendance: "1,200+",
    bgHex: "#FEF08A",
  },
  {
    year: "2022",
    artist: "A.R. Rahman",
    title: "A.R. Rahman Live in Concert",
    venue: "PNC Arena / Memorial Auditorium",
    highlight: "Double Oscar & Grammy Winner Symphonic Tour",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    category: "World Tour Symphony",
    attendance: "3,500+",
    bgHex: "#FED7AA",
  },
  {
    year: "2018",
    artist: "Shaan",
    title: "Shaan - Love in Concert",
    venue: "Raleigh Memorial Auditorium",
    highlight: "3 Hours of Non-stop Romantics",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    category: "Pop & Romance",
    attendance: "1,800+",
    bgHex: "#FBCFE8",
  },
  {
    year: "2015",
    artist: "Rahat Fateh Ali Khan",
    title: "Symphony of the Soul",
    venue: "Raleigh Memorial Auditorium",
    highlight: "Thunderous Qawwalis & Classical Kalaams",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&q=80",
    category: "Qawwali & Sufi",
    attendance: "2,000+",
    bgHex: "#BAE6FD",
  },
  {
    year: "2014",
    artist: "Sunidhi Chauhan",
    title: "High Voltage Concert Live",
    venue: "Raleigh Memorial Auditorium",
    highlight: "Arena energy and explosive stage choreography",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
    category: "High-Energy Arena",
    attendance: "2,200+",
    bgHex: "#BBF7D0",
  },
  {
    year: "2006",
    artist: "Jagjit Singh",
    title: "Mehfil-e-Ghazal Live in Raleigh",
    venue: "Stewart Theatre, Raleigh NC",
    highlight: "Unforgettable evening of timeless ghazals",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80",
    category: "Classical Ghazal",
    attendance: "1,000+",
    bgHex: "#FEF08A",
  },
];

export default function HorizontalConcertArchive() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20);
  };

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const distance = 420;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
    setTimeout(checkScrollButtons, 350);
  };

  return (
    <section className="relative py-24 bg-[#FEF9C3] text-[#121212] border-t-2 border-[#121212] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Marker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-[#121212]/15">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#F3A20F] border-2 border-[#121212] text-[#121212] font-mono text-xs font-black tracking-wider uppercase shadow-[2px_2px_0px_#121212]">
              CHAPTER 02 // 06
            </span>
            <span className="text-xs font-mono text-[#121212]/80 font-bold uppercase">
              HISTORIC CHRONICLES // 2005–2023 RETROSPECTIVE
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#121212] bg-[#FFFDF9] border-2 border-[#121212] px-3.5 py-1 rounded-full shadow-[2px_2px_0px_#121212] font-bold">
            <History className="w-3.5 h-3.5" />
            <span>19 CONSECUTIVE YEARS OF SOLD-OUT SHOWS</span>
          </div>
        </div>

        {/* Section Header & Arrow Controls */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-black text-[#121212] uppercase tracking-widest">
              <Film className="w-3.5 h-3.5 text-[#F97028]" />
              Symphonic & Theatrical Vault
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#121212] tracking-tight uppercase font-sans">
              Two Decades of Grand Legends
            </h2>
            <p className="text-xs sm:text-sm text-[#121212]/80 max-w-xl font-medium">
              Traverse milestone shows staged across North Carolina’s grandest auditoriums from 2005 to 2023.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border-2 border-[#121212] transition-all cursor-pointer ${
                canScrollLeft
                  ? "bg-[#FFFDF9] text-[#121212] shadow-[3px_3px_0px_#121212] hover:bg-[#FEF08A]"
                  : "bg-[#FFFDF9]/40 text-[#121212]/30 cursor-not-allowed border-[#121212]/30"
              }`}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border-2 border-[#121212] transition-all cursor-pointer ${
                canScrollRight
                  ? "bg-[#F3A20F] text-[#121212] shadow-[3px_3px_0px_#121212] hover:bg-amber-400"
                  : "bg-[#FFFDF9]/40 text-[#121212]/30 cursor-not-allowed border-[#121212]/30"
              }`}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Card Track */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {landmarkShows.map((show, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between w-[310px] sm:w-[360px] p-5 rounded-3xl bg-[#FFFDF9] border-3 border-[#121212] shadow-[6px_6px_0px_#121212] shrink-0 snap-start group"
            >
              <div className="space-y-4">
                {/* Year Badge & Category */}
                <div className="flex items-center justify-between">
                  <span
                    className="px-3.5 py-1 rounded-xl text-xs font-black font-mono border-2 border-[#121212] shadow-[2px_2px_0px_#121212]"
                    style={{ backgroundColor: show.bgHex }}
                  >
                    ★ {show.year}
                  </span>
                  <span className="text-[11px] font-mono text-[#121212]/70 font-bold uppercase">
                    {show.attendance} Patrons
                  </span>
                </div>

                {/* Photo Frame */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border-2 border-[#121212] shadow-[3px_3px_0px_#121212]">
                  <img
                    src={show.image}
                    alt={show.artist}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white/95 border border-[#121212] text-[10px] font-mono font-black text-[#121212]">
                    {show.category}
                  </div>
                </div>

                {/* Show details */}
                <div>
                  <div className="text-xl font-black text-[#121212] font-sans uppercase">
                    {show.artist}
                  </div>
                  <div className="text-xs font-bold text-[#F97028] mt-0.5 font-sans">
                    {show.title}
                  </div>
                  <p className="text-xs text-[#121212]/80 mt-2 line-clamp-2 font-medium">
                    {show.highlight}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t-2 border-[#121212]/15 flex items-center justify-between text-[11px] font-mono font-bold text-[#121212]/70">
                <span className="truncate max-w-[200px]">{show.venue}</span>
                <Link
                  href="/events"
                  className="text-[#121212] hover:text-[#F97028] font-black uppercase flex items-center gap-1"
                >
                  <span>Vault</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
