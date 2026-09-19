"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { CustomEase } from "gsap/CustomEase";
import { Draggable } from "gsap/Draggable";
import HeroAbout from "./HeroAbout";
import { useSunFace } from "./useSunFace";
import {
  SUN_SVG,
  FACE_SVG,
  POINT_SVG,
  RIGHT_SVG,
  LEFT_SVG,
  VERTICAL_SVG,
  SHUFFLE_SVG,
} from "./heroSvgs";
import "./hero.css";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, TextPlugin, CustomEase, Draggable);
CustomEase.create("ffh-ease", "0.625, 0.05, 0, 1");

const DATE_TEXT = "Sunday 5th May, Raleigh, NC";
const WORDS = ["Bollywood ", "nights, ", "live ", "culture, ", "good ", "times."];

// Real event photos from livespectrum.com (public/events)
const CARDS = [
  "/events/2023-bismil-ki-mehfil.jpeg",
  "/events/2022-ar-rahman-live-in-concert.jpeg",
  "/events/2018-shaan-love-in-concert.jpeg",
  "/events/2022-geeton-ka-safar.jpeg",
  "/events/2019-richa-sharma-live-in-concert.jpg",
];

const SPONSORS = [
  { name: "AKM Investments", href: "http://www.akminvestment.com" },
  { name: "Accounting Solutions NC", href: "http://www.accountingsolutionsnc.com/" },
  { name: "Salt N Pepper", href: "http://www.saltnpeppernc.com/" },
  { name: "Neeva Digital", href: "https://neevadigital.com/" },
];

// ---------------------------------------------------------------------------
// Rainbow helper — same contract as the reference `animateRainbow`
// ---------------------------------------------------------------------------
type RainbowMode = "fromStart" | "fromEnd" | "toStart" | "toEnd";

function animateRainbow(
  root: HTMLElement,
  selector: string,
  mode: RainbowMode,
  count: number,
  duration: number,
  delay: number,
  stagger: number,
  scrollTrigger?: ScrollTrigger.Vars
) {
  const paths = root.querySelectorAll<SVGPathElement>(`${selector} path`);
  const isFrom = mode.startsWith("from");
  const draw = mode.endsWith("Start") ? "0% 0%" : "100% 100%";
  const tl = scrollTrigger ? gsap.timeline({ scrollTrigger }) : null;

  for (let i = 0; i < count; i++) {
    const targets = [paths[i], paths[i + count]].filter(Boolean);
    const pos = delay + i * stagger;
    const vars = { drawSVG: draw, duration, ease: scrollTrigger ? "power1.out" : "power2.inOut" };
    if (tl) tl[isFrom ? "from" : "to"](targets, vars, pos);
    else gsap[isFrom ? "from" : "to"](targets, { ...vars, delay: pos });
  }
}

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  // -------------------------------------------------------------------------
  // Intro loader + rainbows + scroll animations
  // -------------------------------------------------------------------------
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const q = <T extends Element = HTMLElement>(s: string) => root.querySelector<T>(s);
    // Note: animations are intentionally NOT switched off for prefers-reduced-motion (client wants them always on).
    const reduce = false;

    const sunTransform = q(".ffh-welcome__sun-transform")!;
    const sunText = q(".ffh-welcome__sun-transform .ffh-chat__p")!;
    const loading = q(".ffh-loading")!;
    const html = document.documentElement;

    const ctx = gsap.context(() => {
      const setupScroll = () => {
        animateRainbow(root, ".ffh-sides__right", "toStart", 4, 0.75, 0.125, 0.075, {
          trigger: ".ffh-stack__collection",
          start: "clamp(top bottom)",
          end: "bottom top",
          scrub: 0,
        });
        animateRainbow(root, ".ffh-sides__left", "toEnd", 4, 0.75, 0, 0.075, {
          trigger: ".ffh-stack__collection",
          start: "clamp(top bottom)",
          end: "bottom top",
          scrub: 0,
        });
        animateRainbow(root, ".ffh-rainbow-v", "fromStart", 9, 0.5, 0, 0.0375, {
          trigger: ".ffh-welcome",
          start: "clamp(top bottom)",
          endTrigger: ".ffa__tile",
          end: "bottom bottom",
          scrub: 0,
        });
      };

      if (reduce) {
        gsap.set(loading, { autoAlpha: 0 });
        setupScroll();
        return;
      }

      // ---- Intro ----------------------------------------------------------
      window.scrollTo(0, 0);
      const prevOverflow = html.style.overflow;
      html.style.overflow = "hidden";

      const header = document.querySelector<HTMLElement>("body header");
      const tl = gsap.timeline({ defaults: { ease: "ffh-ease", duration: 1.47 } });

      // centre the sun in the viewport
      tl.set(sunTransform, {
        y: () => {
          const h = window.innerHeight;
          const elH = (sunTransform as HTMLElement).offsetHeight;
          const top = sunTransform.getBoundingClientRect().top;
          return (h - elH) / 2 - top;
        },
      });
      tl.set(sunText, { text: "..." });

      tl.to(loading, { autoAlpha: 0, duration: 0.3, ease: "none", delay: 0.1 });
      tl.to(sunText, { duration: 0.4, text: "Hi Friends!", ease: "none", delay: 0.2 });
      tl.to(sunText, { duration: 0.25, text: "...", ease: "none", delay: 1 });
      tl.to(sunText, { duration: 0.5, text: "We are back...", ease: "none" });
      tl.to(sunText, { duration: 0.25, text: "...", ease: "none", delay: 1 });
      tl.to(sunText, { duration: 0.5, text: DATE_TEXT, ease: "none" });

      tl.to(sunTransform, { y: 0 }, "< -1");
      if (header) tl.from(header, { yPercent: -102 }, "<");
      tl.from(q(".ffh-welcome__row-cards")!, { duration: 1, y: "3em", autoAlpha: 0, ease: "expo.out" }, "< 0.5");
      tl.from(
        root.querySelectorAll(".ffh-h1 > span, .ffh-h2-wrap"),
        { duration: 1, yPercent: 100, autoAlpha: 0, stagger: -0.025, ease: "expo.out" },
        "< 0.0025"
      );

      // rainbows draw in while the sun is talking
      animateRainbow(root, ".ffh-sides__right", "fromStart", 4, 2, 0.5, 0.075);
      animateRainbow(root, ".ffh-sides__left", "fromEnd", 4, 2, 1, 0.075);

      tl.call(
        () => {
          html.style.overflow = prevOverflow;
          setupScroll();
        },
        undefined,
        3
      );

      return () => {
        html.style.overflow = prevOverflow;
      };
    }, root);

    return () => ctx.revert();
  }, []);

  useSunFace(rootRef);

  // -------------------------------------------------------------------------
  // Stacked cards with drag / flick / shuffle (port of initStackedCardsDrag)
  // -------------------------------------------------------------------------
  useEffect(() => {
    const root = rootRef.current;
    const container = root?.querySelector<HTMLElement>("[data-stacked-cards]");
    const list = container?.querySelector<HTMLElement>("[data-stacked-cards-list]");
    const nextBtn = container?.querySelector<HTMLElement>('[data-stacked-cards="next"]');
    if (!container || !list) return;

    const initialOrder = Array.from(list.children) as HTMLElement[];
    const easeBefore = { duration: 0.2, ease: "power2.out" };
    const easeAfter = { duration: 1, ease: "elastic.out(1,0.75)" };
    let activeDeg = "3deg";
    let inactiveDeg = "-3deg";
    let dragFirst: Draggable | undefined;
    let dragSecond: Draggable | undefined;
    let full = 0;
    let threshold = 0;

    const items = () => Array.from(list.children) as HTMLElement[];
    const cardOf = (item: HTMLElement) => item.querySelector<HTMLElement>("[data-stacked-cards-card]")!;

    const restack = () => {
      const it = items();
      it.forEach((el) => el.classList.remove("is--active", "is--second"));
      const set = (el: HTMLElement | undefined, z: number, deg: string, pe?: string) => {
        if (!el) return;
        el.style.zIndex = String(z);
        el.style.transform = `rotate(${deg})`;
        if (pe) el.style.pointerEvents = pe;
      };
      set(it[0], 3, activeDeg, "auto");
      set(it[1], 2, inactiveDeg, "none");
      set(it[2], 1, activeDeg);
      it.slice(3).forEach((el) => set(el, 0, inactiveDeg));
      it[0]?.classList.add("is--active");
      it[1]?.classList.add("is--second");
    };

    const resetCycle = () => {
      list.querySelectorAll(".is--dragging").forEach((el) => el.classList.remove("is--dragging"));
      setup();
    };

    const flick = (dir?: "left" | "right", skipHome = false, releaseX = 0) => {
      if (dir !== "left" && dir !== "right") dir = activeDeg === "3deg" ? "right" : "left";
      dragFirst?.disable();
      const item = items()[0];
      const card = cardOf(item);
      const exitX = dir === "right" ? full : -full;

      if (skipHome) {
        const visualX = gsap.getProperty(card, "x") as number;
        list.appendChild(item);
        [activeDeg, inactiveDeg] = [inactiveDeg, activeDeg];
        restack();
        gsap.fromTo(card, { x: visualX, rotation: 0 }, { x: 0, rotation: 0, ...easeAfter, onComplete: resetCycle });
      } else {
        gsap.fromTo(
          card,
          { x: releaseX, rotation: 0 },
          {
            x: exitX,
            ...easeBefore,
            onComplete() {
              gsap.set(card, { x: 0, rotation: 0 });
              list.appendChild(item);
              [activeDeg, inactiveDeg] = [inactiveDeg, activeDeg];
              resetCycle();
              gsap.fromTo(cardOf(item), { x: exitX }, { x: 0, ...easeAfter, onComplete: resetCycle });
            },
          }
        );
      }
    };

    function setup() {
      restack();
      const it = items();
      const firstItem = it[0];
      const secondItem = it[1];
      const firstEl = cardOf(firstItem);
      const secondEl = cardOf(secondItem);

      const width = firstEl.offsetWidth;
      full = width * 1.15;
      threshold = width * 0.1;

      dragFirst?.kill();
      dragSecond?.kill();

      dragFirst = Draggable.create(firstEl, {
        type: "x",
        cursor: "inherit",
        activeCursor: "inherit",
        onPress() {
          firstEl.classList.add("is--dragging");
        },
        onRelease() {
          firstEl.classList.remove("is--dragging");
        },
        onDrag() {
          let raw = this.x;
          if (Math.abs(raw) > full) {
            const over = Math.abs(raw) - full;
            raw = (raw > 0 ? 1 : -1) * (full + over * 0.1);
          }
          gsap.set(firstEl, { x: raw, rotation: 0 });
        },
        onDragEnd() {
          const x = this.x;
          const dir = x > 0 ? "right" : "left";
          this.disable();
          dragSecond?.enable();
          firstItem.style.pointerEvents = "none";
          secondItem.style.pointerEvents = "auto";

          if (Math.abs(x) <= threshold) {
            gsap.to(firstEl, { x: 0, rotation: 0, ...easeBefore, onComplete: resetCycle });
          } else if (Math.abs(x) <= full) {
            flick(dir, false, x);
          } else {
            flick(dir, true);
          }
        },
      })[0];

      dragSecond = Draggable.create(secondEl, {
        type: "x",
        cursor: "inherit",
        activeCursor: "inherit",
        onPress() {
          secondEl.classList.add("is--dragging");
        },
        onRelease() {
          secondEl.classList.remove("is--dragging");
        },
        onDrag() {
          let raw = this.x;
          if (Math.abs(raw) > full) {
            const over = Math.abs(raw) - full;
            raw = (raw > 0 ? 1 : -1) * (full + over * 0.2);
          }
          gsap.set(secondEl, { x: raw, rotation: 0 });
        },
        onDragEnd() {
          gsap.to(secondEl, { x: 0, rotation: 0, ...easeBefore });
        },
      })[0];

      dragFirst.enable();
      dragSecond.disable();
      firstItem.style.pointerEvents = "auto";
      secondItem.style.pointerEvents = "none";
    }

    setup();
    const onNext = () => flick();
    nextBtn?.addEventListener("click", onNext);

    return () => {
      nextBtn?.removeEventListener("click", onNext);
      dragFirst?.kill();
      dragSecond?.kill();
      gsap.killTweensOf(initialOrder.map(cardOf));
      initialOrder.forEach((el) => {
        list.appendChild(el);
        el.removeAttribute("style");
        el.classList.remove("is--active", "is--second");
        const c = cardOf(el);
        c.removeAttribute("style");
        c.classList.remove("is--dragging");
      });
    };
  }, []);

  // -------------------------------------------------------------------------
  // CSS marquee (speed = 75px/s, paused off-screen)
  // -------------------------------------------------------------------------
  useEffect(() => {
    const root = rootRef.current;
    const marquee = root?.querySelector<HTMLElement>("[data-css-marquee]");
    if (!marquee) return;
    const lists = Array.from(marquee.querySelectorAll<HTMLElement>("[data-css-marquee-list]"));
    const pixelsPerSecond = 75;
    const setDuration = () =>
      lists.forEach((l) => (l.style.animationDuration = `${l.offsetWidth / pixelsPerSecond}s`));
    setDuration();

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          lists.forEach((l) => (l.style.animationPlayState = e.isIntersecting ? "running" : "paused"))
        ),
      { threshold: 0 }
    );
    io.observe(marquee);
    window.addEventListener("resize", setDuration);
    return () => {
      io.disconnect();
      window.removeEventListener("resize", setDuration);
    };
  }, []);

  const marqueeItem = (key: number) => (
    <div className="ffh-marquee__item" key={key}>
      <p className="ffh-marquee__p">Sponsored by</p>
      <div className="ffh-marquee__dot" />
      {SPONSORS.map((sp) => (
        <React.Fragment key={sp.name}>
          <a href={sp.href} target="_blank" rel="noreferrer" className="ffh-marquee__a ffh-marquee__name">
            {sp.name}
          </a>
          <div className="ffh-marquee__dot" />
        </React.Fragment>
      ))}
    </div>
  );

  const sun = (
    <div className="ffh-sun">
      <div className="ffh-sun__rays" dangerouslySetInnerHTML={{ __html: SUN_SVG }} />
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: FACE_SVG }} />
    </div>
  );

  return (
    <div ref={rootRef} className="ffh">
      <div className="ffh-loading" />

      <div className="ffh-wrap">
        <div className="ffh-top">
          {/* Fixed rainbow sides (retract while scrolling past the deck) */}
          <div className="ffh-sides" aria-hidden="true">
            <div className="ffh-sides__right" dangerouslySetInnerHTML={{ __html: RIGHT_SVG }} />
            <div className="ffh-sides__left" dangerouslySetInnerHTML={{ __html: LEFT_SVG }} />
          </div>

          <section className="ffh-welcome">
            <div className="ffh-container">
              <div className="ffh-welcome__row-text">
                <div className="ffh-welcome__col-sun">
                  <div className="ffh-welcome__sun-transform">
                    <div className="ffh-sun-chat">
                      {sun}
                      <div className="ffh-chat">
                        <div dangerouslySetInnerHTML={{ __html: POINT_SVG.replace("<svg", '<svg class="ffh-chat__point"') }} />
                        <p className="ffh-chat__p">{DATE_TEXT}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ffh-welcome__col-text">
                  <h1 className="ffh-h1" aria-label="Bollywood nights, live culture, good times.">
                    {WORDS.map((w, i) => (
                      <span key={w} aria-hidden="true">
                        {/* shadow layer, then the sticker word */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/hero/word-${i}.svg`} alt="" draggable={false} />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/hero/word-${i}.svg`} alt="" draggable={false} />
                        <span>{w}</span>
                      </span>
                    ))}
                  </h1>
                  <div className="ffh-h2-wrap">
                    <div className="ffh-h2-box">
                      <h2 className="ffh-h2">LiveSpectrum is back.</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ffh-welcome__row-cards">
                <div className="ffh-rainbow-v" aria-hidden="true" dangerouslySetInnerHTML={{ __html: VERTICAL_SVG }} />

                <div data-stacked-cards="" className="ffh-stack">
                  <div className="ffh-stack__collection">
                    <div className="ffh-stack__before" />
                    <div data-stacked-cards-list="" className="ffh-stack__list">
                      {CARDS.map((src) => (
                        <div data-stacked-cards-item="" className="ffh-stack__item" key={src}>
                          <div data-stacked-cards-card="" className="ffh-stack__card">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={src} alt="" draggable={false} loading="eager" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ffh-stack__controls">
                    <button type="button" data-stacked-cards="next" className="ffh-btn ffh-btn--cards ffh-btn--big-mobile">
                      <span className="ffh-btn__icon" dangerouslySetInnerHTML={{ __html: SHUFFLE_SVG }} />
                      <span className="ffh-btn__span">Shuffle</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="ffh-marquee-sec">
          <div data-css-marquee="" className="ffh-marquee">
            {[0, 1].map((n) => (
              <div data-css-marquee-list="" className="ffh-marquee__list" key={n} aria-hidden={n === 1}>
                {[0, 1, 2].map(marqueeItem)}
              </div>
            ))}
          </div>
        </section>

        <HeroAbout />
      </div>
    </div>
  );
}
