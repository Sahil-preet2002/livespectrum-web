"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Artists", href: "/artists" },
  { name: "Concert History", href: "/events" },
  { name: "Videos", href: "/videos" },
  { name: "Impact", href: "/impact" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 left-0 right-0 z-40 w-full bg-[#F3ECD2] border-b border-[#121212] select-none transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-[70px] flex items-center justify-between">
        {/* Left Links (FlowFest Style: Plain text, bold retro sans-serif) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.slice(0, 3).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm sm:text-[15px] font-bold tracking-normal transition-opacity hover:opacity-75 ${
                  isActive ? "text-[#121212] underline decoration-2 underline-offset-4" : "text-[#121212]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Trigger Button (left on mobile) */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#121212] border-2 border-[#121212] bg-[#FFFDF9] shadow-[2px_2px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Center: Comic Bubble Bubbly Font Logo (Direct FlowFest Replica) */}
        <Link href="/" className="flex items-center group">
          <div className="relative flex items-center">
            <svg
              viewBox="0 0 260 48"
              className="h-8 sm:h-10 w-auto overflow-visible select-none drop-shadow-[2px_3px_0px_#121212]"
            >
              {/* Black 3D Extrusion Shadow Behind */}
              <text
                x="130"
                y="35"
                textAnchor="middle"
                className="font-black tracking-tight"
                style={{
                  fontFamily: "'Arial Rounded MT Bold', 'Fredoka', 'Comic Sans MS', cursive, sans-serif",
                  fontSize: "30px",
                  fontWeight: 900,
                  fill: "#121212",
                }}
              >
                LIVESPECTRUM
              </text>

              {/* White & Orange Comic Bubble Front Fill with Heavy Black Stroke */}
              <text
                x="128"
                y="33"
                textAnchor="middle"
                className="font-black tracking-tight group-hover:scale-[1.02] transition-transform origin-center"
                style={{
                  fontFamily: "'Arial Rounded MT Bold', 'Fredoka', 'Comic Sans MS', cursive, sans-serif",
                  fontSize: "30px",
                  fontWeight: 900,
                  fill: "#FFFDF9",
                  stroke: "#121212",
                  strokeWidth: "3.5px",
                  paintOrder: "stroke fill",
                  strokeLinejoin: "round",
                }}
              >
                LIVE<tspan fill="#F97028">SPECTRUM</tspan>
              </text>
            </svg>
          </div>
        </Link>

        {/* Right Section: Buy Tickets Pill Button (FlowFest Exact Style) */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(3).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm sm:text-[15px] font-bold tracking-normal transition-opacity hover:opacity-75 ${
                    isActive ? "text-[#121212] underline decoration-2 underline-offset-4" : "text-[#121212]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Link href="/tickets">
            <button
              type="button"
              className="whitespace-nowrap px-3.5 min-[400px]:px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-[11px] min-[400px]:text-xs sm:text-sm font-black text-[#121212] bg-[#F489A3] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] hover:bg-[#ff9bb3] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-1 active:translate-y-1 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Buy Tickets</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#121212] bg-[#F3ECD2] px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-bold py-1 transition-colors ${
                      isActive ? "text-[#F97028] underline underline-offset-4" : "text-[#121212]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-[#121212]/20 flex items-center justify-between">
              <a
                href="tel:8772229324"
                className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#121212]"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F97028]" />
                <span>877-222-9324</span>
              </a>
              <Link href="/tickets">
                <button
                  type="button"
                  className="px-4 py-1.5 rounded-full text-xs font-black bg-[#F489A3] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_#121212]"
                >
                  Buy Tickets
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
