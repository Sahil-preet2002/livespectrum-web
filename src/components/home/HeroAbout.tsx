"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { PLAY_SVG, VERTICAL_SVG, WF_SQUARE_SVG } from "./heroSvgs";
import "./hero.css";
import "./sections.css";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const VIDEO_ID = "CBiuxyxVDpY"; // LiveSpectrum intro

// Real event photos from livespectrum.com (public/events)
const ARC_LEFT = [
  "/events/2023-bismil-ki-mehfil.jpeg",
  "/events/2022-ar-rahman-live-in-concert.jpeg",
  "/events/2022-amit-tandon-stand-up-comedy.jpg",
];
const ARC_RIGHT = [
  "/events/2018-shaan-love-in-concert.jpeg",
  "/events/2022-geeton-ka-safar.jpeg",
  "/events/2019-richa-sharma-live-in-concert.jpg",
];

type LenisLike = { stop: () => void; start: () => void };
const lenis = () => (window as unknown as { lenis?: LenisLike }).lenis;

// Each arc shows 4 photos; the 4th repeats the 1st (same as the reference)
function Arc({ images, flipped }: { images: string[]; flipped?: boolean }) {
  const four = [...images, images[0]];
  return (
    <div className={`ffa-rotate${flipped ? " ffa-rotate--flipped" : ""}`}>
      <div className="ffa-circle">
        <div className="ffa-circle__before" />
        <div className="ffa-circle__list">
          {four.map((src, i) => (
            <div className="ffa-circle__item" key={i}>
              <div className="ffa-circle__wrap">
                <div className="ffa-circle__image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="ffa-rotate__img" src={src} alt="" loading="lazy" draggable={false} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroAbout() {
  const rootRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  // Scroll animations: rotating arcs + perspective rainbow
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      const tile = root.querySelector(".ffa__tile");
      const lists = root.querySelectorAll(".ffa-circle__list");
      const images = root.querySelectorAll(".ffa-circle__image");
      if (tile) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: tile, start: "0% 100%", end: "100% 0%", scrub: 0 },
        });
        tl.fromTo(lists, { rotate: 15 }, { rotate: -15, ease: "linear" });
        tl.fromTo(images, { rotate: -15 }, { rotate: 15, ease: "linear" }, "<");
      }

      const paths = root.querySelectorAll<SVGPathElement>(".ffa__rainbow-3 path");
      const tl3 = gsap.timeline({
        scrollTrigger: { trigger: ".ffa__bottom", start: "top 100%", end: "bottom 50%", scrub: 0 },
      });
      for (let i = 0; i < 9; i++) {
        tl3.from([paths[i], paths[i + 9]], { drawSVG: "0% 0%", duration: 0.5, ease: "power1.out" }, i * 0.075);
      }
    }, root);
    return () => ctx.revert();
  }, []);

  // YouTube modal: lock scroll while open, close on ESC
  useEffect(() => {
    if (open) lenis()?.stop();
    else lenis()?.start();
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      lenis()?.start();
    };
  }, [open]);

  return (
    <>
      <section ref={rootRef} id="about" className="ffa">
        <div className="ffh-container">
          <div className="ffa__top" />

          <div className="ffa__tile">
            <Arc images={ARC_LEFT} />
            <Arc images={ARC_RIGHT} flipped />
            <div className="ffa__tile-border" />
            <div className="ffa__wf">
              <span dangerouslySetInnerHTML={{ __html: WF_SQUARE_SVG }} style={{ display: "contents" }} />
              <span>What is LiveSpectrum?</span>
            </div>

            <div className="ffa__text">
              <h2 className="ffa__h2">
                Bollywood Concerts for: <br />
                <span className="ffh-boxed ffh-boxed--about">Culture &amp; Community</span>
              </h2>
              <div className="ffa__small">
                <p>
                  We promote high-profile Bollywood concerts in the Triangle to keep Indian culture alive among youth,
                  connect the South Asian community with our neighbours, and raise awareness and funds for local
                  non-profit causes.
                </p>
              </div>
              <button type="button" className="ffh-btn ffh-btn--cards ffh-btn--big-mobile" onClick={() => setOpen((v) => !v)}>
                <span className="ffa__btn-icon" dangerouslySetInnerHTML={{ __html: PLAY_SVG }} />
                <span className="ffh-btn__span">Watch Our Intro</span>
              </button>
            </div>
          </div>

          <div className="ffa__bottom">
            <div className="ffa__bottom-rainbow">
              <div className="ffa__rainbow-3" dangerouslySetInnerHTML={{ __html: VERTICAL_SVG }} />
            </div>
          </div>
        </div>
      </section>

      <div className="ffm" data-status={open ? "active" : "not-active"}>
        <div className="ffm__bg" onClick={() => setOpen(false)} />
        <div className="ffm__wrap">
          <div className="ffm__card">
            <div className="ffm__yt">
              {open && (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&controls=1&autoplay=1`}
                  title="LiveSpectrum intro"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
        <button type="button" className="ffh-btn ffm__close" aria-label="Close video" onClick={() => setOpen(false)}>
          <span className="ffm__bar" />
          <span className="ffm__bar ffm__bar--dup" />
        </button>
      </div>
    </>
  );
}
