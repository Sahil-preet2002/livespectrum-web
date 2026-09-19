"use client";

import React, { useState } from "react";
import Link from "next/link";
import { eventHistory } from "@/data/events";
import { videoVault } from "@/data/videos";
import { nonProfitCauses } from "@/data/nonProfits";
import { leadershipData } from "@/data/leadership";
import {
  History,
  Play,
  HeartHandshake,
  Building2,
  ArrowUpRight,
  Sparkles,
  Award,
  Users,
  DollarSign,
  CalendarDays,
} from "lucide-react";

export default function HomeBento() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F0FDF4] text-[#121212] border-t-2 border-[#121212] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Marker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-[#121212]/15">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#BBF7D0] border-2 border-[#121212] text-[#121212] font-mono text-xs font-black tracking-wider uppercase shadow-[2px_2px_0px_#121212]">
              CHAPTER 05 // 06
            </span>
            <span className="text-xs font-mono text-[#121212]/80 font-bold uppercase">
              THE ECOSYSTEM // COMMUNITY, CHARITY & EXECUTIVE ENTERPRISE
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#121212] bg-[#FFFDF9] border-2 border-[#121212] px-3.5 py-1 rounded-full shadow-[2px_2px_0px_#121212] font-bold">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>501(C)(3) CHARITY PARTNER ALLIANCE</span>
          </div>
        </div>

        {/* 4 Cartoon Metric Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: "HEADLINERS STAGED", num: "50+", bg: "bg-[#FEF08A]", icon: Users },
            { label: "CONCERT PATRONS", num: "200,000+", bg: "bg-[#BAE6FD]", icon: CalendarDays },
            { label: "CHARITY IMPACT RAISED", num: "$100K+", bg: "bg-[#BBF7D0]", icon: DollarSign },
            { label: "CONSECUTIVE YEARS", num: "20 YRS", bg: "bg-[#FBCFE8]", icon: Award },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl ${stat.bg} border-3 border-[#121212] shadow-[5px_5px_0px_#121212] flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#121212]/80">
                  {stat.label}
                </span>
                <stat.icon className="w-5 h-5 text-[#121212]" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-sans text-[#121212]">
                {stat.num}
              </div>
            </div>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Philanthropy */}
          <div className="md:col-span-7 p-7 rounded-3xl bg-[#FFFDF9] border-3 border-[#121212] shadow-[6px_6px_0px_#121212] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-black uppercase text-[#F97028]">
                <HeartHandshake className="w-4 h-4" />
                <span>100% Philanthropic Purpose</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#121212] font-sans uppercase">
                Culture Powered by Giving
              </h3>
              <p className="text-sm text-[#121212]/85 leading-relaxed font-medium">
                LiveSpectrum funnels concert and theater profits into certified 501(c)(3) charities, cancer patient assistance, and underprivileged education initiatives across the Carolinas.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t-2 border-[#121212]/15 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#121212]/70">501(c)(3) Alliance</span>
              <Link
                href="/impact"
                className="px-4 py-2 rounded-full bg-[#BBF7D0] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-xs font-black uppercase text-[#121212] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
              >
                Charity Impact →
              </Link>
            </div>
          </div>

          {/* Card 2: Executive Leadership */}
          <div className="md:col-span-5 p-7 rounded-3xl bg-[#FFFDF9] border-3 border-[#121212] shadow-[6px_6px_0px_#121212] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-black uppercase text-amber-700">
                <Building2 className="w-4 h-4" />
                <span>Executive Leadership</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#121212] font-sans uppercase">
                Arvind Mahajan & AKM
              </h3>
              <p className="text-xs sm:text-sm text-[#121212]/85 leading-relaxed font-medium">
                Founder, veteran promoter, and philanthropist with 20+ years of institutional concert execution and enterprise real estate leadership in NC.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t-2 border-[#121212]/15 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#121212]/70">AKM Investments</span>
              <Link
                href="/about"
                className="px-4 py-2 rounded-full bg-[#FEF08A] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-xs font-black uppercase text-[#121212] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
              >
                About Founder →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
