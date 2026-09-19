"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { CURSOR_POINTER_SVG } from "./heroSvgs";
import { artists } from "@/data/artists";
import "./hero.css";
import "./sections.css";

gsap.registerPlugin(CustomEase);
CustomEase.create("ffh-ease", "0.625, 0.05, 0, 1");

interface Speaker {
  name: string;
  tag: string;
  image: string;
  col: string;
  bio: React.ReactNode;
}

// Lineup is built from the artists promoted by LiveSpectrum (data/artists.ts)
const LINEUP: Array<{ name: string; col: string }> = [
  { name: "Shaan", col: "" },
  { name: "Anupam Kher", col: "ffs__col--3" },
  { name: "A.R. Rahman", col: "ffs__col--4" },
  { name: "Sonu Nigam", col: "ffs__col--5" },
  { name: "Kailash Kher", col: "ffs__col--6" },
];

const SPEAKERS: Speaker[] = LINEUP.flatMap(({ name, col }) => {
  const a = artists.find((x) => x.name === name);
  if (!a) return [];
  return [
    {
      name: a.name,
      tag: a.category === "Theater & Cinema" ? "Theatre" : a.category,
      image: a.img,
      col,
      bio: (
        <>
          <strong>{a.name}</strong> — {a.role}. Featured in <strong>{a.tagline}</strong>, live with LiveSpectrum
          Entertainment in North Carolina.
        </>
      ),
    },
  ];
});

export default function FlowFestSpeakerLineup() {
  const rootRef = useRef<HTMLElement>(null);

  // Sticky name-pill cursor that follows the mouse inside each card (port of initStickyCursor)
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const OFFSET_X = 8;
    const OFFSET_Y = 40;
    const cleanups: Array<() => void> = [];

    root.querySelectorAll<HTMLElement>("[data-sticky-cursor]").forEach((container) => {
      const target = container.querySelector<HTMLElement>("[data-sticky-cursor-target]");
      if (!target) return;
      gsap.set(target, { x: 0, y: 0 });

      const measure = () => {
        const c = container.getBoundingClientRect();
        const t = target.getBoundingClientRect();
        return { x: t.left - c.left - (gsap.getProperty(target, "x") as number), y: t.top - c.top - (gsap.getProperty(target, "y") as number) };
      };
      let orig = measure();
      let inside = false;
      let last: MouseEvent | null = null;

      const follow = (e: MouseEvent) => {
        const c = container.getBoundingClientRect();
        const t = target.getBoundingClientRect();
        gsap.to(target, {
          x: e.clientX - c.left - orig.x + (OFFSET_X / 100) * t.width,
          y: e.clientY - c.top - orig.y + (OFFSET_Y / 100) * t.height,
          duration: 0.5,
          ease: "power3.out",
          overwrite: "auto",
        });
      };
      const onEnter = (e: MouseEvent) => {
        inside = true;
        last = e;
        follow(e);
      };
      const onMove = (e: MouseEvent) => {
        last = e;
        follow(e);
      };
      const onLeave = () => {
        inside = false;
        gsap.to(target, { x: 0, y: 0, duration: 0.5, ease: "ffh-ease", overwrite: "auto" });
      };
      const onScrollResize = () => {
        if (!inside || !last) return;
        follow(last);
      };
      const onResize = () => {
        gsap.set(target, { x: 0, y: 0 });
        orig = measure();
      };

      container.addEventListener("mouseenter", onEnter);
      container.addEventListener("mousemove", onMove);
      container.addEventListener("mouseleave", onLeave);
      window.addEventListener("scroll", onScrollResize);
      window.addEventListener("resize", onResize);
      cleanups.push(() => {
        container.removeEventListener("mouseenter", onEnter);
        container.removeEventListener("mousemove", onMove);
        container.removeEventListener("mouseleave", onLeave);
        window.removeEventListener("scroll", onScrollResize);
        window.removeEventListener("resize", onResize);
        gsap.killTweensOf(target);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section ref={rootRef} id="speakers" className="ffh ffs">
      <div className="ffs__rounded ffs__rounded--flipped" />
      <div className="ffh-container">
        <div className="ffs__row">
          <div className="ffs__lines" aria-hidden="true">
            <div className="ffs__lines-group">
              <div className="ffs__line" />
              <div className="ffs__line" />
            </div>
            <div className="ffs__lines-group ffs__lines-group--2">
              <div className="ffs__line" />
              <div className="ffs__line" />
            </div>
            <div className="ffs__lines-group ffs__lines-group--3">
              <div className="ffs__line" />
              <div className="ffs__line" />
            </div>
          </div>

          <div className="ffs__col ffs__col--1">
            <div className="ffs__text">
              <h2 className="ffs__h2">
                Our <span className="ffh-boxed ffh-boxed--top">Artist</span>{" "}
                <span className="ffh-boxed ffh-boxed--bottom">Lineup</span>
              </h2>
              <p className="ffs__p">
                Proud to have promoted <strong>all these artists</strong> in the Triangle area. From{" "}
                <strong>A.R. Rahman</strong> to <strong>Shaan</strong>, plus 50+ more <strong>legends</strong> on stage.
                (See the full <strong>artist list</strong> on our Artists page!)
              </p>
              <div className="ffs__btn-wrap">
                <Link href="/tickets" data-ffh-hover-happy="" className="ffh-btn ffh-btn--big-mobile">
                  <span className="ffh-btn__span">Buy Tickets</span>
                </Link>
              </div>
            </div>
          </div>

          {SPEAKERS.map((s) => (
            <div className={`ffs__col ${s.col}`.trim()} key={s.name}>
              <div data-sticky-cursor="" className="ffs-card">
                <div className="ffs-card__tag">
                  <span>{s.tag}</span>
                </div>
                <div className="ffs-card__image-wrap">
                  <div className="ffs-corner" />
                  <div className="ffs-corner ffs-corner--rt" />
                  <div className="ffs-corner ffs-corner--lb" />
                  <div className="ffs-corner ffs-corner--rb" />
                  <div className="ffs-card__image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.image} alt={s.name.trim()} loading="lazy" draggable={false} />
                    <div className="ffs-card__cursor-wrap">
                      <div data-sticky-cursor-target="" className="ffs-card__cursor">
                        <span dangerouslySetInnerHTML={{ __html: CURSOR_POINTER_SVG }} style={{ display: "contents" }} />
                        <span>{s.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ffs-card__bio">
                  <p>{s.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
