"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Music2, HeartHandshake, Mic2, Crown } from "lucide-react";
import { eventHistory } from "@/data/events";
import { nonProfitCauses } from "@/data/nonProfits";
import { ticketingData } from "@/data/tickets";

interface ActivityItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  sticker: string;
  rotation: string;
  image: string;
  icon: any;
}

// Everything here comes from livespectrum.com: counts are taken from the Event History list,
// artist names from the show titles, and the Meet & Greet details from the ticket page.
const count = (type: string) => eventHistory.filter((e) => e.type === type).length;
const FIRST_YEAR = Math.min(...eventHistory.map((e) => Number(e.year)));
const concerts = count("Live in Concert");
const plays = count("Theatre Play");
const comedy = count("Stand-Up Comedy");
const competitions = count("Singing Competition");

const ACTIVITIES: ActivityItem[] = [
  {
    id: "concerts",
    number: "01",
    title: "Live Bollywood Concerts",
    description:
      "Live shows with Shaan, A.R. Rahman, Sonu Nigam, Sunidhi Chauhan, Jagjit Singh, Udit Narayan, Kumar Sanu & Alka Yagnik, Rahat Fateh Ali Khan, Shankar Ehsaan Loy and more.",
    tag: `${concerts} CONCERTS SINCE ${FIRST_YEAR}`,
    sticker: `★ ${concerts} CONCERTS`,
    rotation: "-5deg",
    image: "/events/2022-ar-rahman-live-in-concert.jpeg",
    icon: Music2,
  },
  {
    id: "plays",
    number: "02",
    title: "Hindi Theatre Plays",
    description:
      "Stage plays starring Javed Jaffrey, Paresh Rawal, Anupam Kher, Saurabh Shukla and Manoj Joshi, from our first show in 2005 to Chanakya and 2 To Tango 3 To Jive.",
    tag: `${plays} PLAYS`,
    sticker: `🎭 ${plays} PLAYS`,
    rotation: "5deg",
    image: "/events/2017-2-to-tango-3-to-jive-play-starring-saura.jpg",
    icon: Sparkles,
  },
  {
    id: "comedy",
    number: "03",
    title: "Stand-Up Comedy & Singing Competitions",
    description:
      "Amit Tandon's stand-up shows and the Taal Pe Taal Singing Competition, where local talent takes the stage.",
    tag: `${comedy} COMEDY · ${competitions} COMPETITIONS`,
    sticker: `😄 ${comedy + competitions} SHOWS`,
    rotation: "-4deg",
    image: "/events/2022-amit-tandon-stand-up-comedy.jpg",
    icon: Mic2,
  },
  {
    id: "meet",
    number: "04",
    title: "Meet & Greet with the Artists",
    description: `${ticketingData.meetAndGreet.points.join(". ")}.`,
    tag: `MEET & GREET · $${ticketingData.meetAndGreet.price} PER PERSON`,
    sticker: `$${ticketingData.meetAndGreet.price} / PERSON`,
    rotation: "4deg",
    image: "/events/2014-kumar-sanu-alka-yagnik-press-conference.jpeg",
    icon: Crown,
  },
  {
    id: "charity",
    number: "05",
    title: "Giving Back to the Triangle",
    description: `Sponsored by AKM Investments, our shows raise awareness and funds for Triangle non-profits: ${nonProfitCauses
      .map((n) => n.name)
      .join(", ")}.`,
    tag: `${nonProfitCauses.length} NON-PROFITS SUPPORTED`,
    sticker: `❤️ ${nonProfitCauses.length} NON-PROFITS`,
    rotation: "-3deg",
    image: "/events/2018-shaan-love-in-concert.jpeg",
    icon: HeartHandshake,
  },
];

export default function FlowFestActivities() {
  const [hoveredActivity, setHoveredActivity] = useState<ActivityItem | null>(null);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-12 bg-[#F3ECD2] text-[#121212] overflow-hidden border-y-4 border-[#121212]">
      {/* Decorative Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #121212 1.5px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with FlowFest Badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b-2 border-[#121212] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121212] text-[#FDFBF7] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[3px_3px_0px_#F3A20F] rotate-[-1.5deg]">
              <Sparkles className="w-3.5 h-3.5 text-[#F3A20F] fill-[#F3A20F]" />
              THE LIVESPECTRUM EXPERIENCE
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#121212] uppercase leading-[0.95]">
              WHAT TO <span className="underline decoration-[#F3A20F] decoration-wavy">EXPECT</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base font-medium text-[#121212]/80 leading-relaxed">
            Live Bollywood concerts, plays and comedy in the Triangle since {FIRST_YEAR}, sponsored by AKM Investments to support local causes.
          </p>
        </div>

        {/* Interactive Rows with Hover Photo Popout (FlowFest .expect-item) */}
        <div className="relative divide-y-2 divide-[#121212] border-y-2 border-[#121212]">
          {ACTIVITIES.map((activity) => {
            const isHovered = hoveredActivity?.id === activity.id;
            const Icon = activity.icon;

            return (
              <div
                key={activity.id}
                onMouseEnter={() => setHoveredActivity(activity)}
                onMouseLeave={() => setHoveredActivity(null)}
                className="group relative py-8 sm:py-10 transition-colors duration-300 hover:bg-[#FDFBF7]/60 cursor-pointer px-4 sm:px-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Number & Title */}
                  <div className="flex items-center gap-5 sm:gap-8">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-[#121212]/40 group-hover:text-[#F3A20F] transition-colors">
                      {activity.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-black text-[#121212] tracking-tight uppercase group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3">
                        <Icon className="w-6 h-6 text-[#F3A20F] opacity-0 group-hover:opacity-100 transition-opacity" />
                        {activity.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#121212]/70 font-medium max-w-xl mt-1">
                        {activity.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Tags & Arrow */}
                  <div className="flex items-center gap-4 pl-12 lg:pl-0">
                    <span className="hidden sm:inline-block px-3 py-1 rounded-md text-[11px] font-mono font-black uppercase bg-[#FDFBF7] text-[#121212] border border-[#121212] shadow-[2px_2px_0px_#121212]">
                      {activity.tag}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#121212] text-[#FDFBF7] group-hover:bg-[#F3A20F] group-hover:text-[#121212] border-2 border-[#121212] flex items-center justify-center transition-all group-hover:rotate-45 shadow-[2px_2px_0px_#121212]">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* FlowFest Floating Popout Photo Card on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.75, rotate: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: activity.rotation,
                      }}
                      exit={{ opacity: 0, scale: 0.75 }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      className="absolute right-12 sm:right-36 top-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:block w-64 h-72 rounded-2xl p-2 bg-[#FDFBF7] border-3 border-[#121212] shadow-[8px_8px_0px_#121212] overflow-hidden"
                    >
                      <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#121212]">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-full h-full object-cover filter contrast-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        
                        {/* Sticker */}
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-black uppercase bg-[#F3A20F] text-[#121212] border border-[#121212] shadow-[2px_2px_0px_#121212]">
                            {activity.sticker}
                          </span>
                        </div>

                        <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                          <div className="text-[10px] font-mono uppercase text-amber-300 font-bold">FROM OUR EVENT HISTORY</div>
                          <div className="text-xs font-bold truncate">{activity.title}</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Pill */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-3xl bg-[#FDFBF7] border-2 border-[#121212] shadow-[4px_4px_0px_#121212]">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-emerald-500 border border-[#121212] animate-ping" />
            <span className="text-sm font-black text-[#121212] uppercase tracking-wide">
              Next up: {ticketingData.event.title} • {ticketingData.event.date} • {ticketingData.event.venue}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/tickets"
              className="px-6 py-3 rounded-2xl bg-[#121212] text-[#FDFBF7] hover:bg-[#F3A20F] hover:text-[#121212] text-xs font-black uppercase tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_#F3A20F] transition-all cursor-pointer active:translate-y-0.5"
            >
              Get Tickets
            </Link>
            <Link
              href="/impact"
              className="px-5 py-3 rounded-2xl bg-white text-[#121212] hover:bg-zinc-100 text-xs font-bold border-2 border-[#121212] transition-colors"
            >
              Giving Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
