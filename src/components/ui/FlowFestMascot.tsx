"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, Sparkles, X } from "lucide-react";

const TALKING_POINTS = [
  "Hey Friends! LiveSpectrum Fest is Live! 🎶",
  "Next Big Show: Jai Shri Ram Musical Epic! 🎭",
  "Live in the Triangle since 2005! 🌟",
  "A.R. Rahman, Sonu Nigam & Rahat Memories! ✨",
  "Meet & Greet with artists: $75 per person! 🎟️",
  "Raising awareness & funds for local causes! ❤️",
];

export default function FlowFestMascot() {
  const [activeSpeechIndex, setActiveSpeechIndex] = useState(0);
  const [isSpeechOpen, setIsSpeechOpen] = useState(false); // Closed by default
  const [isHappy, setIsHappy] = useState(false);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const mascotRef = useRef<HTMLDivElement>(null);

  // Mouse pupil tracking physics
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mascotRef.current) return;
      const rect = mascotRef.current.getBoundingClientRect();
      const mascotCenterX = rect.left + rect.width / 2;
      const mascotCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - mascotCenterX;
      const deltaY = e.clientY - mascotCenterY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance < 1) {
        setPupilOffset({ x: 0, y: 0 });
        return;
      }

      // Max pupil movement radius inside the eye socket (clamped to 2.4 SVG units)
      const maxOffset = 2.4;
      const travel = Math.min(distance / 50, maxOffset);
      const angle = Math.atan2(deltaY, deltaX);

      setPupilOffset({
        x: Math.cos(angle) * travel,
        y: Math.sin(angle) * travel,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMascotClick = () => {
    setIsHappy(true);
    setIsSpeechOpen((prev) => !prev);
    setTimeout(() => setIsHappy(false), 900);
  };

  const handleNextTip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSpeechIndex((prev) => (prev + 1) % TALKING_POINTS.length);
  };

  return (
    <div
      ref={mascotRef}
      data-mascot=""
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto select-none"
    >
      {/* Speech Bubble (ONLY open on click, closed by default) */}
      <AnimatePresence>
        {isSpeechOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="relative mb-3 max-w-[260px] sm:max-w-[290px] p-4 rounded-2xl bg-[#FFFDF9] text-[#121212] border-2 border-[#121212] shadow-[4px_4px_0px_#121212] font-sans"
          >
            {/* Speech Bubble Arrow pointing towards the Sun mascot */}
            <div className="absolute -bottom-2 right-8 w-3.5 h-3.5 bg-[#FFFDF9] border-b-2 border-r-2 border-[#121212] rotate-45" />

            {/* Header */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-black uppercase tracking-wider bg-[#FEF08A] text-[#121212] px-2 py-0.5 rounded-md border border-[#121212]">
                <Sparkles className="w-3 h-3 text-[#F97028] fill-[#F97028]" />
                LiveSpectrum Sunny
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSpeechOpen(false);
                }}
                className="text-[#121212]/60 hover:text-[#121212] p-0.5 rounded transition-colors cursor-pointer"
                aria-label="Close speech bubble"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Speech Text */}
            <motion.p
              key={activeSpeechIndex}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs sm:text-sm font-bold leading-snug text-[#121212]"
            >
              {TALKING_POINTS[activeSpeechIndex]}
            </motion.p>

            {/* Actions */}
            <div className="mt-3 pt-2.5 border-t border-[#121212]/15 flex items-center justify-between">
              <Link
                href="/tickets"
                className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-[#F489A3] text-[#121212] border border-[#121212] px-2.5 py-1 rounded-lg hover:bg-[#ff9bb3] transition-colors shadow-sm"
              >
                <Ticket className="w-3 h-3" />
                <span>Get Passes</span>
              </Link>
              <button
                type="button"
                onClick={handleNextTip}
                className="text-[10px] font-mono font-bold text-[#121212]/70 hover:text-[#121212] underline cursor-pointer"
              >
                Next tip →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Cartoon Sun Mascot (Matching reference image) */}
      <motion.button
        type="button"
        onClick={handleMascotClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-16 h-16 sm:w-20 sm:h-20 cursor-pointer focus:outline-none shrink-0 drop-shadow-[2px_3px_0px_#121212]"
        aria-label="Toggle LiveSpectrum Mascot"
        title="Click me!"
      >
        <svg viewBox="0 0 80 80" className="w-full h-full overflow-visible" fill="none">
          {/* Subtle cartoon drop shadow offset behind rays */}
          <g transform="translate(1.5, 2)">
            {Array.from({ length: 18 }).map((_, i) => {
              const angle = i * 20;
              return (
                <polygon
                  key={'shadow-' + i}
                  points="40,4 36,18 44,18"
                  fill="#121212"
                  opacity="0.3"
                  transform={'rotate(' + angle + ' 40 40)'}
                />
              );
            })}
          </g>

          {/* Golden Triangular Sun Rays */}
          <g className="origin-center animate-[spin_24s_linear_infinite]">
            {Array.from({ length: 18 }).map((_, i) => {
              const angle = i * 20;
              return (
                <polygon
                  key={'ray-' + i}
                  points="40,5 36.5,18 43.5,18"
                  fill="#F3A20F"
                  stroke="#121212"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  transform={'rotate(' + angle + ' 40 40)'}
                />
              );
            })}
          </g>

          {/* Central Bright Round Face with Thick Comic Outline */}
          <circle
            cx="40"
            cy="40"
            r="23"
            fill="#FFFDF9"
            stroke="#121212"
            strokeWidth="2.5"
          />

          {/* Soft Rosy Pink Cheeks */}
          <ellipse cx="26" cy="45" rx="3.2" ry="2" fill="#F489A3" />
          <ellipse cx="54" cy="45" rx="3.2" ry="2" fill="#F489A3" />

          {/* Cute Smile / Happy Expression */}
          {isHappy ? (
            <path
              d="M 32 45 Q 40 56 48 45 Z"
              fill="#121212"
              stroke="#121212"
              strokeWidth="2"
            />
          ) : (
            <path
              d="M 34 45 Q 40 52 46 45"
              stroke="#121212"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          )}

          {/* Left Eye Eyeball (White Socket with Thick Black Stroke) */}
          <circle
            cx="32"
            cy="36"
            r="5.8"
            fill="#FFFFFF"
            stroke="#121212"
            strokeWidth="2"
          />
          {/* Left Eye Pupil (Tracking Mouse Cursor) */}
          <circle
            cx={32 + pupilOffset.x}
            cy={36 + pupilOffset.y}
            r="3.2"
            fill="#121212"
          />
          {/* Left Eye Sparkle Reflection */}
          <circle
            cx={30.8 + pupilOffset.x}
            cy={34.8 + pupilOffset.y}
            r="1.1"
            fill="#FFFFFF"
          />

          {/* Right Eye Eyeball (White Socket with Thick Black Stroke) */}
          <circle
            cx="48"
            cy="36"
            r="5.8"
            fill="#FFFFFF"
            stroke="#121212"
            strokeWidth="2"
          />
          {/* Right Eye Pupil (Tracking Mouse Cursor) */}
          <circle
            cx={48 + pupilOffset.x}
            cy={36 + pupilOffset.y}
            r="3.2"
            fill="#121212"
          />
          {/* Right Eye Sparkle Reflection */}
          <circle
            cx={46.8 + pupilOffset.x}
            cy={34.8 + pupilOffset.y}
            r="1.1"
            fill="#FFFFFF"
          />
        </svg>
      </motion.button>
    </div>
  );
}
