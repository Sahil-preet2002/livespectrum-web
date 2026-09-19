"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Ticket,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Flame,
} from "lucide-react";

interface FestivalCard {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  venue: string;
  price: string;
  badge: string;
  badgeBg: string;
  cardBg: string;
  sticker: string;
  image: string;
  status: string;
  link: string;
}

const FESTIVAL_SHOWS: FestivalCard[] = [
  {
    id: "jai-shri-ram",
    title: "JAI SHRI RAM",
    subtitle: "The Magnificent Broadway-Scale Ramayana Epic & Classical Chorus",
    date: "Sunday, May 05, 2024 • 6:30 PM",
    venue: "Raleigh Memorial Auditorium, NC",
    price: "$59 – $149 VIP",
    badge: "CHAPTER 01 HEADLINER",
    badgeBg: "bg-[#F3A20F]",
    cardBg: "bg-[#FFFDF9]",
    sticker: "🔥 35-PIECE ORCHESTRA",
    image: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?w=800&q=80",
    status: "SEATS SELLING FAST",
    link: "/tickets",
  },
  {
    id: "ar-rahman",
    title: "A.R. RAHMAN LIVE",
    subtitle: "The 80-Piece Orchestral Arena Symphony & Oscar Choral Odyssey",
    date: "PNC Arena Stadium Tour",
    venue: "PNC Arena, Raleigh NC",
    price: "Arena Pass Tiers",
    badge: "HISTORIC CHRONICLE",
    badgeBg: "bg-[#F489A3]",
    cardBg: "bg-[#FFFDF9]",
    sticker: "★ 18,000 ARENA CAPACITY",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    status: "SOLD OUT RECORD",
    link: "/events",
  },
  {
    id: "sonu-nigam",
    title: "SONU NIGAM",
    subtitle: "The Lord of Chords: 3.5-Hour Non-Stop Vocal Marathon & Brass",
    date: "Lenovo Center, NC",
    venue: "Lenovo Center Coliseum Stage",
    price: "Tier 1 & VIP Orchestra",
    badge: "ARENA ICON",
    badgeBg: "bg-[#F0BB0D]",
    cardBg: "bg-[#FFFDF9]",
    sticker: "🎵 15,000 VOICES UNITED",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
    status: "LEGENDARY PERFORMANCE",
    link: "/artists",
  },
  {
    id: "sufi-mehfil",
    title: "SUFI TRANCE MEHFIL",
    subtitle: "Bismil Ki Mehfil & Kailash Kher: Mystical Qawwali & Ecstatic Dhol",
    date: "Duke Energy Performing Arts",
    venue: "Raleigh Memorial Complex",
    price: "Limited Mehfil Tables",
    badge: "SPIRITUAL ODYSSEY",
    badgeBg: "bg-[#4ADE80]",
    cardBg: "bg-[#FFFDF9]",
    sticker: "✨ ECSTATIC SUFI TRANCE",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    status: "EXCLUSIVE PRODUCTION",
    link: "/artists",
  },
];

export default function StackedFestivalDeck() {
  const [cards, setCards] = useState(FESTIVAL_SHOWS);

  const cycleNext = () => {
    setCards((prev) => {
      const copy = [...prev];
      const first = copy.shift();
      if (first) copy.push(first);
      return copy;
    });
  };

  const cyclePrev = () => {
    setCards((prev) => {
      const copy = [...prev];
      const last = copy.pop();
      if (last) copy.unshift(last);
      return copy;
    });
  };

  return (
    <div className="relative w-full max-w-md mx-auto flex flex-col items-center select-none">
      {/* Top Helper Sticker */}
      <div className="flex items-center justify-between w-full mb-3 px-2">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-mono font-black uppercase tracking-wider bg-[#FFFDF9] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] rotate-[-2deg]">
          <Sparkles className="w-3.5 h-3.5 text-[#F3A20F] fill-[#F3A20F]" />
          Drag Card Left/Right or Click Next
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={cyclePrev}
            className="w-8 h-8 rounded-full bg-[#FFFDF9] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center justify-center hover:bg-[#F3A20F] transition-colors cursor-pointer active:translate-y-0.5 active:shadow-none"
            aria-label="Previous concert card"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={cycleNext}
            className="w-8 h-8 rounded-full bg-[#FFFDF9] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center justify-center hover:bg-[#F3A20F] transition-colors cursor-pointer active:translate-y-0.5 active:shadow-none"
            aria-label="Next concert card"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stacked Cards Area with 3D and Tilt Stacking */}
      <div className="relative w-full h-[470px] sm:h-[500px] flex items-center justify-center">
        {cards.map((card, idx) => {
          const isTop = idx === 0;
          const rotation = idx % 2 === 0 ? "3deg" : "-3deg";
          const zIndex = cards.length - idx;
          const scale = 1 - idx * 0.045;
          const translateY = idx * 12;

          return (
            <motion.div
              key={card.id}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 100) {
                  cycleNext();
                }
              }}
              style={{
                zIndex,
                rotate: isTop ? "0deg" : rotation,
              }}
              animate={{
                scale,
                y: translateY,
                rotate: isTop ? "0deg" : rotation,
                opacity: idx > 2 ? 0 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 24,
              }}
              className={`absolute w-full h-full rounded-[28px] overflow-hidden border-3 border-[#121212] ${card.cardBg} text-[#121212] shadow-[8px_8px_0px_#121212] flex flex-col justify-between p-5 sm:p-6 cursor-grab active:cursor-grabbing ${
                !isTop ? "pointer-events-none" : ""
              }`}
            >
              {/* Card Image Banner */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden border-2 border-[#121212] mb-3 bg-zinc-200">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Angled Sticker on Top-Right */}
                <div className="absolute top-2.5 right-2.5 z-20">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-mono font-black uppercase tracking-wider bg-[#F3A20F] text-[#121212] border border-[#121212] shadow-[2px_2px_0px_#121212] rotate-[3deg]">
                    {card.sticker}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 z-20">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider ${card.badgeBg} text-[#121212] border border-[#121212] shadow-[1px_1px_0px_#121212]`}
                  >
                    {card.badge}
                  </span>
                </div>
              </div>

              {/* Card Center Information */}
              <div className="space-y-2 my-auto">
                <div className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#F3A20F]" />
                  FEATURED SPECTACLE
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#121212] tracking-tight uppercase leading-tight font-sans">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#121212]/80 leading-relaxed font-medium line-clamp-2">
                  {card.subtitle}
                </p>

                <div className="space-y-1 pt-1 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-[#121212] font-bold">
                    <Calendar className="w-3.5 h-3.5 text-[#F3A20F] shrink-0" />
                    <span>{card.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#121212]/70">
                    <MapPin className="w-3.5 h-3.5 text-[#F3A20F] shrink-0" />
                    <span className="truncate">{card.venue}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Ticket Stub Notch and Action */}
              <div className="pt-3 border-t-2 border-dashed border-[#121212]/30 flex items-center justify-between">
                <div>
                  <div className="text-[9px] font-mono text-[#121212]/60 uppercase font-bold">TIERS START</div>
                  <div className="text-lg font-black text-[#121212]">{card.price}</div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#121212] text-[#FDFBF7] hover:bg-[#F3A20F] hover:text-[#121212] text-xs font-black uppercase tracking-wider border-2 border-[#121212] shadow-[2px_2px_0px_#121212] transition-colors cursor-pointer active:translate-y-0.5 active:shadow-none"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Book Pass</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Swipe prompt under deck */}
      <div className="mt-4 flex items-center justify-center gap-2 text-[11px] font-mono text-[#121212]/70">
        <span>← Drag card left/right or</span>
        <button
          onClick={cycleNext}
          className="text-[#121212] font-black underline hover:text-[#F3A20F] cursor-pointer"
        >
          tap to cycle next ({cards.length} spectacles) →
        </button>
      </div>
    </div>
  );
}
