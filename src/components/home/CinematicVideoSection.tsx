"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, Film, ArrowUpRight } from "lucide-react";

interface FeaturedVideo {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  year: string;
  location: string;
  bgHex: string;
}

const cinematicReels: FeaturedVideo[] = [
  {
    id: "dz_UOa5rSZQ",
    title: "A.R. Rahman Live in Concert Highlights",
    subtitle: "Orchestral Arena Tour & Symphonic Chorus",
    duration: "8:12",
    year: "2010 / 2022",
    location: "Raleigh, NC",
    bgHex: "#FEF08A",
  },
  {
    id: "0ADX6YZvzx4",
    title: "Shaan Concert in Raleigh Memorial Auditorium",
    subtitle: "3 Hours of Romantic Melodies & Pop Hits",
    duration: "7:40",
    year: "2018",
    location: "Memorial Auditorium",
    bgHex: "#FED7AA",
  },
  {
    id: "l-sMvgjK69s",
    title: "Mesmerizing Evening with Rekha Bhardwaj",
    subtitle: "National Award Winner Live in Raleigh",
    duration: "4:20",
    year: "2017",
    location: "Raleigh Memorial Auditorium",
    bgHex: "#FBCFE8",
  },
  {
    id: "YTe-nHjBLi0",
    title: "Richa Sharma Sings Jagjit Singh Ghazals",
    subtitle: "Soulful Tributes to the Immortal Master",
    duration: "5:10",
    year: "2019",
    location: "Raleigh, NC",
    bgHex: "#BAE6FD",
  },
];

export default function CinematicVideoSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const current = cinematicReels[activeTab];

  const handleSelectTab = (idx: number) => {
    setActiveTab(idx);
    setIsPlaying(true);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F3ECD2] text-[#121212] border-t-2 border-[#121212] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Marker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-[#121212]/15">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#F3A20F] border-2 border-[#121212] text-[#121212] font-mono text-xs font-black tracking-wider uppercase shadow-[2px_2px_0px_#121212]">
              CHAPTER 04 // 06
            </span>
            <span className="text-xs font-mono text-[#121212]/80 font-bold uppercase">
              CINEMA VAULT // 4K ARCHIVAL CONCERT FOOTAGE
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#121212] bg-[#FFFDF9] border-2 border-[#121212] px-3.5 py-1 rounded-full shadow-[2px_2px_0px_#121212] font-bold">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>● REC 4K MASTER FOOTAGE</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-black text-[#121212] uppercase tracking-widest">
              <Film className="w-3.5 h-3.5 text-[#F97028]" />
              Auditorium Soundstage Reels
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#121212] tracking-tight uppercase font-sans">
              The Live Concert Cinema
            </h2>
            <p className="text-xs sm:text-sm text-[#121212]/80 max-w-xl font-medium">
              Stream authentic live stage performances, symphonic choruses, and backstage footage.
            </p>
          </div>
          <Link
            href="/videos"
            className="px-4 py-2 rounded-full bg-[#FFFDF9] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-xs text-[#121212] font-black uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#FEF08A] transition-colors"
          >
            <span>Complete 12+ Film Vault</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main Theater Frame */}
        <div className="relative rounded-3xl p-4 sm:p-6 bg-[#FFFDF9] border-3 border-[#121212] shadow-[8px_8px_0px_#121212] overflow-hidden mb-8">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black group border-2 border-[#121212] shadow-[4px_4px_0px_#121212]">
            {isPlaying ? (
              <iframe
                key={current.id}
                src={`https://www.youtube.com/embed/${current.id}?autoplay=1&rel=0`}
                title={current.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={`https://img.youtube.com/vi/${current.id}/maxresdefault.jpg`}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#121212]/40 flex flex-col items-center justify-center p-6 text-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 rounded-full bg-[#F3A20F] border-3 border-[#121212] text-[#121212] flex items-center justify-center shadow-[4px_4px_0px_#121212] hover:scale-110 active:scale-95 transition-all cursor-pointer mb-4"
                  >
                    <Play className="w-8 h-8 ml-1 text-[#121212] fill-[#121212]" />
                  </button>
                  <div className="text-lg sm:text-2xl font-black text-white uppercase font-sans drop-shadow-md">
                    {current.title}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-white/90 font-bold mt-1">
                    {current.location} • {current.year}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Video Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            {cinematicReels.map((reel, idx) => (
              <button
                key={reel.id}
                onClick={() => handleSelectTab(idx)}
                className={`p-3.5 rounded-2xl text-left border-2 border-[#121212] transition-all cursor-pointer ${
                  activeTab === idx
                    ? `${reel.bgHex} shadow-[3px_3px_0px_#121212]`
                    : "bg-[#FFFDF9] hover:bg-[#F3ECD2] text-[#121212]"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono font-black uppercase text-[#121212]/70 mb-1">
                  <span>REEL 0{idx + 1}</span>
                  <span>{reel.duration}</span>
                </div>
                <div className="text-xs font-black text-[#121212] font-sans line-clamp-1">
                  {reel.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
