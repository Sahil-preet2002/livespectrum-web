"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { CustomEase } from "gsap/CustomEase";
import { FACE_SVG, POINT_SVG, RIGHT_SVG, SUN_SVG } from "../home/heroSvgs";
import { useSunFace } from "../home/useSunFace";
import "../home/hero.css";
import "../home/sections.css";
import "./pages.css";

gsap.registerPlugin(DrawSVGPlugin, CustomEase);

export interface StickerWord {
  text: string; // used for sizing (transparent) and accessibility
  src: string; // pre-drawn sticker lettering, /hero/pw-*.svg
}

interface Props {
  bubble: string;
  words: StickerWord[];
  box: string;
  lead: string;
}

// Page intro in the FlowFest hero style: sun + chat bubble, sticker headline,
// tilted mango box, rainbow that draws in on load.
export default function PageHero({ bubble, words, box, lead }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  useSunFace(rootRef);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1 } });
      tl.from(".ffh-sun-chat", { y: "2em", autoAlpha: 0 }, 0.1);
      tl.from(root.querySelectorAll(".ffh-h1 > span, .ffh-h2-wrap"), { yPercent: 100, autoAlpha: 0, stagger: -0.025 }, 0.25);
      tl.from(".ffx-lead", { y: "1.5em", autoAlpha: 0 }, 0.6);

      const paths = root.querySelectorAll<SVGPathElement>(".ffx-hero__rainbow path");
      for (let i = 0; i < 4; i++) {
        gsap.from([paths[i], paths[i + 4]].filter(Boolean), {
          drawSVG: "0% 0%",
          duration: 1.6,
          delay: 0.2 + i * 0.075,
          ease: "power2.inOut",
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="ffx-hero">
      <div className="ffx-hero__rainbow" aria-hidden="true" dangerouslySetInnerHTML={{ __html: RIGHT_SVG }} />
      <div className="ffh-container">
        <div className="ffh-welcome__row-text">
          <div className="ffh-sun-chat">
            <div className="ffh-sun">
              <div className="ffh-sun__rays" dangerouslySetInnerHTML={{ __html: SUN_SVG }} />
              <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: FACE_SVG }} />
            </div>
            <div className="ffh-chat">
              <div dangerouslySetInnerHTML={{ __html: POINT_SVG.replace("<svg", '<svg class="ffh-chat__point"') }} />
              <p className="ffh-chat__p">{bubble}</p>
            </div>
          </div>

          <div className="ffh-welcome__col-text">
            <h1 className="ffh-h1" aria-label={words.map((w) => w.text).join(" ")}>
              {words.map((w) => (
                <span key={w.src} aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.src} alt="" draggable={false} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.src} alt="" draggable={false} />
                  <span>{w.text}</span>
                </span>
              ))}
            </h1>
            <div className="ffh-h2-wrap">
              <div className="ffh-h2-box">
                <h2 className="ffh-h2">{box}</h2>
              </div>
            </div>
          </div>

          <p className="ffx-lead">{lead}</p>
        </div>
      </div>
    </section>
  );
}
