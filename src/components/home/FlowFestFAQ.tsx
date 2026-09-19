"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Sparkles, PhoneCall, Mail } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  badge: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Where are LiveSpectrum concerts held in North Carolina?",
    answer:
      "Our large-scale arena concerts (A.R. Rahman, Sonu Nigam) take place at PNC Arena and Lenovo Center, while Broadway-scale musicals ('Jai Shri Ram') and intimate Sufi mehfils (Jagjit Singh, Bismil) are hosted at the world-class Raleigh Memorial Auditorium (Duke Energy Center for the Performing Arts) and Stewart Theatre.",
    badge: "VENUES & PARKING",
  },
  {
    question: "What exclusive perks are included with VIP Stage Passes?",
    answer:
      "LiveSpectrum VIP Passes include premium Tier 1 orchestra seating in rows A–D, fast-track VIP entrance, an exclusive backstage meet & greet with artist photo opportunities, access to the hospitality lounge, and commemorative collector passes.",
    badge: "VIP EXPERIENCE",
  },
  {
    question: "Is the upcoming 'Jai Shri Ram' musical suitable for children & families?",
    answer:
      "Absolutely! 'Jai Shri Ram' is a Broadway-caliber theatrical production featuring an epic 35-piece orchestral sound, magnificent costumes, and high-definition visual projection. It is crafted as a celebratory, inspiring experience for children, youth, and grandparents alike.",
    badge: "FAMILY & AGE",
  },
  {
    question: "How does LiveSpectrum support community causes?",
    answer:
      "LiveSpectrum promotes shows sponsored by AKM Investments to raise awareness and funds for Triangle non-profit organizations and their causes, such as child water safety, and has supported NCIAP, the Aniridia Foundation, the Inter-Faith Food Shuttle and NC Arts in Action.",
    badge: "GIVING BACK",
  },
  {
    question: "Are group discounts or corporate boxes available?",
    answer:
      "Yes! For community groups of 10+ or corporate suites at PNC Arena and Raleigh Memorial Auditorium, please reach out directly to our promoter hotline at 877-222-9324 or contact us via our partner portal.",
    badge: "GROUPS & CORPORATE",
  },
];

export default function FlowFestFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-12 bg-[#F3ECD2] text-[#121212] overflow-hidden border-t-2 border-[#121212] select-none">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF08A] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-xs font-mono font-black uppercase">
            <HelpCircle className="w-4 h-4 text-[#F97028]" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-[#121212] uppercase tracking-tight font-sans">
            EVERYTHING YOU NEED TO KNOW
          </h2>

          <p className="text-sm sm:text-base text-[#121212]/80 max-w-xl mx-auto font-medium">
            Essential information regarding seating, VIP amenities, box office passes, and venue policies.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl border-2 border-[#121212] bg-[#FFFDF9] overflow-hidden shadow-[4px_4px_0px_#121212] transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-[#F3ECD2]/50 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-black uppercase bg-[#F3A20F] text-[#121212] border border-[#121212] mb-1">
                      {faq.badge}
                    </span>
                    <h3 className="text-base sm:text-xl font-black text-[#121212] uppercase font-sans">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border-2 border-[#121212] shrink-0 transition-all ${
                      isOpen
                        ? "bg-[#F3A20F] text-[#121212] shadow-[2px_2px_0px_#121212]"
                        : "bg-[#FFFDF9] text-[#121212]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 border-t-2 border-[#121212]/15 text-xs sm:text-sm text-[#121212]/85 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact Support Pill Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FFFDF9] border-2 border-[#121212] shadow-[5px_5px_0px_#121212] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#F3A20F] fill-[#F3A20F]" />
            <div className="text-xs sm:text-sm font-black uppercase text-[#121212] font-sans">
              Still have questions about concert passes or sponsorship?
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:8772229324"
              className="px-4 py-2 rounded-full bg-[#FEF08A] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-xs font-mono font-bold text-[#121212] flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
              <span>877-222-9324</span>
            </a>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full bg-[#F489A3] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-xs font-black uppercase text-[#121212]"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
