"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Star, Mic2, Music2, Theater, MousePointer2 } from "lucide-react";

interface CartoonSpeaker {
  id: string;
  name: string;
  badge: string; // e.g. "Animation", "Oscar Legend", "Sufi Maestro"
  role: string;
  headlineHighlight: string;
  bgHex: string; // background color of card
  descriptionHtml: string; // HTML with bold words like FlowFest
  image: string;
  category: "music" | "classical" | "theater";
  shows: string;
  hasMascot?: boolean;
}

const SPEAKERS: CartoonSpeaker[] = [
  {
    id: "ar-rahman",
    name: "A.R. Rahman",
    badge: "Symphony Maestro",
    role: "Oscar & Grammy Winning Composer",
    headlineHighlight: "Jai Ho & Dil Se Arena World Tour",
    bgHex: "#F3A20F", // Warm Mango Gold (like Cassie Evans card)
    descriptionHtml: "Our Double Oscar & Grammy <b>fairy codemaestro</b> is here to sprinkle some <b>orchestral magic</b>, <b>arena choral grandeur</b> & symphonic secrets now he\'s on the inside with an 80-piece live orchestra.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    category: "music",
    shows: "2010 • 2022 Live in Raleigh",
    hasMascot: true,
  },
  {
    id: "sonu-nigam",
    name: "Sonu Nigam",
    badge: "Playback Legend",
    role: "The Lord of Chords",
    headlineHighlight: "Kal Ho Naa Ho & Arena Anthems",
    bgHex: "#F489A3", // Bubblegum Pink (like Stephanie Bruce card)
    descriptionHtml: "Singers want to <b>work</b> with him, arena crowds want to <b>be</b> there. Sonu has hit the grand stage running with his <b>stunning</b> 3-octave vocals and will be sharing his unmatched <b>live concert</b> energy.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    category: "music",
    shows: "2006 • 2012 Live in NC",
  },
  {
    id: "sunidhi-chauhan",
    name: "Sunidhi Chauhan",
    badge: "High-Voltage Icon",
    role: "Stage Firebrand & Queen of Grooves",
    headlineHighlight: "Kamli & Beedi Jalaile Live",
    bgHex: "#F0BB0D", // Mustard Yellow (like Ross Plaskow card)
    descriptionHtml: "We\'ve all wanted to <b>dance</b> to something electrifying with <b>live arena power</b>, and Sunidhi has mastered it. Unapologetic vocal force, arena anthems & <b>pure stage frenzy</b> from curtain to curtain.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
    category: "music",
    shows: "2009 High-Voltage Concert",
  },
  {
    id: "jagjit-singh",
    name: "Jagjit Singh",
    badge: "Immortal Ghazal King",
    role: "The Voice of Soul & Shayari",
    headlineHighlight: "Mehfil-e-Ghazal Live in NC",
    bgHex: "#86EFAC", // Fresh Mint Green
    descriptionHtml: "Audiences want to <b>melt</b> with his poetry, poets bow to his <b>sur</b>. The immortal king enticed 1,000+ patrons at <b>Stewart Theatre</b> with <b>deep, gentle ghazals</b> and unforgettable nostalgia.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80",
    category: "classical",
    shows: "2006 • 2009 at Stewart Theatre",
  },
  {
    id: "kailash-kher",
    name: "Kailash Kher",
    badge: "Sufi Trance Hurricane",
    role: "Raw Earthy Devotion",
    headlineHighlight: "Teri Deewani & Allah Ke Bande",
    bgHex: "#F97028", // Tangerine Orange
    descriptionHtml: "Ready to sprinkle <b>ecstatic trance</b>, timeless <b>acoustic goodness</b> & mystical secrets with Kailasa. Hypnotic dholaks, soaring high notes, and <b>pure spiritual bliss</b> for every fan.",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
    category: "classical",
    shows: "2007 Incredibles Mega Concert",
  },
  {
    id: "paresh-rawal",
    name: "Paresh Rawal",
    badge: "Thespian Giant",
    role: "National Award Actor & Playwright",
    headlineHighlight: "Chaal Baaz Live Comedy Play",
    bgHex: "#38BDF8", // Sky Blue
    descriptionHtml: "Theater lovers want to <b>learn</b> from him, comedy fans <b>applaud</b> for hours. Staged the historic US Premier of <b>Chaal Baaz</b> in Raleigh with <b>pitch-perfect comic timing</b>.",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
    category: "theater",
    shows: "2005 Live at Stewart Theatre",
  },
];

export default function InteractiveArtistReveal() {
  const [filter, setFilter] = useState<"all" | "music" | "classical" | "theater">("all");

  const filteredSpeakers = SPEAKERS.filter(
    (s) => filter === "all" || s.category === filter
  );

  return (
    <section id="artists" className="relative py-24 px-4 sm:px-6 lg:px-12 bg-[#F3ECD2] text-[#121212] overflow-hidden border-t-2 border-[#121212] select-none">
      {/* Background Architectural Canvas Grid Lines (FlowFest Style) */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 pointer-events-none divide-x divide-[#121212]/10 -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFDF9] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-xs font-mono font-black uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#F3A20F] fill-[#F3A20F]" />
              <span>HEADLINER SPOTLIGHT // 50+ WORLD TOURS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-[#121212] tracking-tight uppercase font-sans">
              MEET THE <span className="text-[#F97028] underline decoration-[#121212] decoration-wavy">LEGENDS</span>
            </h2>
            <p className="text-sm sm:text-base text-[#121212]/80 max-w-xl font-medium">
              Hover over cards to see cartoon sticker outlines, transform bounding boxes, and multiplayer cursor tags!
            </p>
          </div>

          {/* FlowFest Pill Filters */}
          <div className="flex flex-wrap items-center gap-2 bg-[#FFFDF9] p-2 rounded-2xl border-2 border-[#121212] shadow-[3px_3px_0px_#121212]">
            {[
              { id: "all", label: "All Legends" },
              { id: "music", label: "Arena Royalty" },
              { id: "classical", label: "Sufi & Ghazal" },
              { id: "theater", label: "Broadway & Comedy" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#F3A20F] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_#121212]"
                    : "text-[#121212]/70 hover:text-[#121212] hover:bg-[#F3ECD2]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Cartoon Speaker Deck (EXACT FlowFest Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredSpeakers.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col group relative"
            >
              {/* TOP CARTOON BOUNDING-BOX CARD */}
              <div
                className="relative w-full aspect-[4/4.2] rounded-t-2xl border-2 border-[#121212] overflow-visible transition-transform duration-300"
                style={{ backgroundColor: speaker.bgHex }}
              >
                {/* 4 Corner Resize / Selection Handles (FlowFest Signature!) */}
                <div className="w-3.5 h-3.5 bg-white border-2 border-[#121212] absolute -top-1.5 -left-1.5 z-30 shadow-[1px_1px_0px_#121212]" />
                <div className="w-3.5 h-3.5 bg-white border-2 border-[#121212] absolute -top-1.5 -right-1.5 z-30 shadow-[1px_1px_0px_#121212]" />
                <div className="w-3.5 h-3.5 bg-white border-2 border-[#121212] absolute -bottom-1.5 -left-1.5 z-30 shadow-[1px_1px_0px_#121212]" />
                <div className="w-3.5 h-3.5 bg-white border-2 border-[#121212] absolute -bottom-1.5 -right-1.5 z-30 shadow-[1px_1px_0px_#121212]" />

                {/* Top Pinned Badge (e.g. "Animation" / "Symphony Maestro") */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-white border-2 border-[#121212] rounded-md text-xs font-black text-[#121212] shadow-[2px_2px_0px_#121212] z-30 uppercase tracking-wider">
                  {speaker.badge}
                </div>

                {/* Die-Cut Cartoon Sticker Silhouette Effect Container */}
                <div className="relative w-full h-full overflow-hidden flex items-end justify-center pt-8">
                  {/* Comic Sticker Doodle Contour Shadow */}
                  <div className="relative w-[85%] h-[92%]">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top rounded-xl border-2 border-[#121212] shadow-[6px_6px_0px_#121212] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Figma-Style Multiplayer Pointer Cursor & Orange Pill Name Tag */}
                <div className="absolute bottom-5 left-5 z-30 flex items-center gap-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  {/* Cursor Arrow SVG */}
                  <svg
                    className="w-5 h-5 text-[#F97028] drop-shadow-[2px_2px_0px_#121212] -rotate-45"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                  </svg>
                  {/* Orange Pill Tag with Name */}
                  <span className="px-3 py-1 rounded-full bg-[#F97028] text-white font-black text-xs border-2 border-[#121212] shadow-[2px_2px_0px_#121212] whitespace-nowrap">
                    {speaker.name}
                  </span>
                </div>

                {/* Cute Smiling Mascot Badge Sticker (for first card / key headliners) */}
                {speaker.hasMascot && (
                  <div className="absolute -bottom-5 -left-5 z-40 w-12 h-12 rounded-full bg-[#F3A20F] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center justify-center animate-spin-slow">
                    {/* Smiling cartoon sun face */}
                    <div className="relative w-7 h-7 flex items-center justify-center">
                      <div className="absolute top-1.5 left-1 w-1.5 h-1.5 rounded-full bg-[#121212]" />
                      <div className="absolute top-1.5 right-1 w-1.5 h-1.5 rounded-full bg-[#121212]" />
                      <div className="absolute bottom-1 w-3 h-1.5 border-b-2 border-[#121212] rounded-full" />
                    </div>
                  </div>
                )}
              </div>

              {/* BOTTOM WHITE INFO CARD WITH FLOWFEST BOLD WORDS */}
              <div className="w-full p-6 bg-white border-2 border-t-0 border-[#121212] rounded-b-2xl shadow-[5px_5px_0px_#121212] space-y-4">
                <p
                  className="text-xs sm:text-sm text-[#121212] leading-relaxed font-sans"
                  dangerouslySetInnerHTML={{ __html: speaker.descriptionHtml }}
                />

                <div className="pt-2 border-t border-[#121212]/15 flex items-center justify-between text-[11px] font-mono font-bold text-[#121212]/70">
                  <span>{speaker.shows}</span>
                  <Link
                    href="/artists"
                    className="text-[#121212] hover:text-[#F97028] font-black uppercase flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View Roster</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border-2 border-[#121212] shadow-[6px_6px_0px_#121212] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FEF08A] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center justify-center font-black text-xl">
              ★
            </div>
            <div>
              <div className="text-sm sm:text-base font-black text-[#121212] uppercase font-sans">
                Want to explore all 50+ Legends & Performers?
              </div>
              <div className="text-xs text-[#121212]/70 font-mono">
                From Shaan to Jagjit Singh, Anupam Kher, and Bismil Ki Mehfil.
              </div>
            </div>
          </div>
          <Link href="/artists">
            <button className="px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-[#F3A20F] text-[#121212] border-2 border-[#121212] shadow-[3px_3px_0px_#121212] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#121212] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center cursor-pointer">
              <span>Explore Complete Hall of Fame</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
