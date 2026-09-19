import React from "react";
import Hero from "@/components/home/Hero";
import FlowFestSpeakerLineup from "@/components/home/FlowFestSpeakerLineup";
import FlowFestActivities from "@/components/home/FlowFestActivities";
import FlowFestFAQ from "@/components/home/FlowFestFAQ";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden bg-[#F3ECD2]">
      {/* 1. Complete FlowFest Animated Hero Section (Screenshots 1-5) */}
      <Hero />

      {/* 2. Speaker Lineup (3-Column Offset Layout from media_1789453741308.png - No Slider) */}
      <FlowFestSpeakerLineup />

      {/* 3. Activities: "WHAT TO EXPECT" */}
      <FlowFestActivities />

      {/* 4. FlowFest FAQ */}
      <FlowFestFAQ />
    </div>
  );
}
