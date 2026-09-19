"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (isPlaying) {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.2);
        setTimeout(() => {
          oscillatorRef.current?.stop();
          oscillatorRef.current?.disconnect();
          oscillatorRef.current = null;
        }, 250);
      }
      setIsPlaying(false);
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContextClass();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === "suspended") {
          ctx.resume();
        }

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm ambient concert drone sound (F# minor low harmonic)
        osc.type = "sine";
        osc.frequency.setValueAtTime(146.83, ctx.currentTime); // D3

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscillatorRef.current = osc;
        gainNodeRef.current = gain;
        setIsPlaying(true);
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
        } catch {}
      }
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {}
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={toggleSound}
        data-cursor="SOUND"
        aria-label="Toggle Ambient Audio"
        className="flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-card border border-white/10 hover:border-amber-400/40 text-xs font-semibold text-zinc-300 hover:text-white transition-all shadow-xl backdrop-blur-xl group cursor-pointer"
      >
        <div className="flex items-center gap-0.5 h-3">
          <span
            className={`w-[2.5px] bg-amber-400 rounded-full transition-all ${
              isPlaying ? "animate-[bounce_0.8s_ease-in-out_infinite] h-3" : "h-1"
            }`}
          />
          <span
            className={`w-[2.5px] bg-amber-400 rounded-full transition-all ${
              isPlaying ? "animate-[bounce_1s_ease-in-out_infinite_0.2s] h-4" : "h-2"
            }`}
          />
          <span
            className={`w-[2.5px] bg-amber-400 rounded-full transition-all ${
              isPlaying ? "animate-[bounce_0.7s_ease-in-out_infinite_0.4s] h-2.5" : "h-1"
            }`}
          />
        </div>
        <span className="text-[11px] font-mono tracking-wider">
          {isPlaying ? "SOUND ON" : "SOUND OFF"}
        </span>
      </button>
    </div>
  );
}

