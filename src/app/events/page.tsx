"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { eventHistory, type EventHistory } from "@/data/events";
import PageHero from "@/components/pages/PageHero";
import "@/components/home/footer.css";

gsap.registerPlugin(ScrollTrigger);

const ERAS = [
  { key: "all", label: "All years" },
  { key: "2020s", label: "2020s" },
  { key: "2010s", label: "2010s" },
  { key: "2000s", label: "2000s" },
] as const;

type LenisLike = { stop: () => void; start: () => void };
const lenis = () => (window as unknown as { lenis?: LenisLike }).lenis;

const years = eventHistory.map((e) => Number(e.year));
const FIRST = Math.min(...years);
const LAST = Math.max(...years);

function useColumns() {
  const [n, setN] = useState(3);
  useEffect(() => {
    const on = () => setN(window.innerWidth < 640 ? 1 : window.innerWidth < 992 ? 2 : 3);
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return n;
}

export default function EventsPage() {
  const [era, setEra] = useState<(typeof ERAS)[number]["key"]>("all");
  const [query, setQuery] = useState("");
  const [poster, setPoster] = useState<EventHistory | null>(null);
  const [wide, setWide] = useState<Record<string, boolean>>({});
  const cols = useColumns();

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return eventHistory.filter((e) => {
      const y = Number(e.year);
      const inEra =
        era === "all" || (era === "2020s" && y >= 2020) || (era === "2010s" && y >= 2010 && y < 2020) || (era === "2000s" && y < 2010);
      return inEra && (!q || e.title.toLowerCase().includes(q) || e.type.toLowerCase().includes(q) || e.year.includes(q));
    });
  }, [era, query]);

  // deal the shows into columns (round-robin so every column has a similar height)
  const columns = useMemo(() => {
    const out: EventHistory[][] = Array.from({ length: cols }, () => []);
    shown.forEach((e, i) => out[i % cols].push(e));
    return out;
  }, [shown, cols]);

  // lightbox: lock scroll + ESC
  useEffect(() => {
    if (!poster) return;
    lenis()?.stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPoster(null);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      lenis()?.start();
    };
  }, [poster]);

  // Parallax columns: neighbouring columns travel in different directions / speeds
  // (pattern from the 21st.dev "Parallax Scroll" component).
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = gridRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      const colEls = Array.from(root.querySelectorAll<HTMLElement>(".ffx-pg__col"));
      // [from, to] in viewport heights. Column 2 drifts DOWN while columns 1 and 3 rise, so neighbours
      // slide past each other (21st.dev "Parallax Scroll"). Rising columns start slightly low so no
      // poster is ever pulled up under the controls.
      const motion = cols === 1 ? [[0, 0]] : cols === 2 ? [[0.12, -0.4], [0, 0.4]] : [[0.14, -0.42], [0, 0.42], [0.2, -0.3]];
      colEls.forEach((col, i) => {
        const [a, b] = motion[i] ?? [0, 0];
        if (!a && !b) return;
        gsap.fromTo(
          col,
          { y: () => a * window.innerHeight },
          {
            y: () => b * window.innerHeight,
            ease: "none",
            scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 0.6, invalidateOnRefresh: true },
          }
        );
      });
      // cards tilt in as they enter
      root.querySelectorAll<HTMLElement>(".ffx-event").forEach((card, i) => {
        gsap.fromTo(
          card,
          { rotate: i % 2 ? 4 : -4, scale: 0.92 },
          { rotate: 0, scale: 1, ease: "none", scrollTrigger: { trigger: card, start: "top 100%", end: "top 55%", scrub: true } }
        );
      });
    }, root);
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => {
      window.clearTimeout(t);
      ctx.revert();
    };
  }, [columns, cols]);

  return (
    <main className="ffh ffx">
      <PageHero
        bubble={`${eventHistory.length} shows since ${FIRST}`}
        words={[
          { text: "Concert", src: "/hero/pw-concert.svg" },
          { text: "history", src: "/hero/pw-history.svg" },
        ]}
        box={`${FIRST} – ${LAST}`}
        lead="Every show LiveSpectrum Entertainment has brought to the Triangle: concerts, plays, comedy and more. Tap a poster to see it full size."
      />

      <section className="ffh-container">
        <div className="ffx-controls">
          <div className="ffx-tabs" role="tablist" aria-label="Filter by decade">
            {ERAS.map((e) => (
              <button
                key={e.key}
                type="button"
                role="tab"
                aria-selected={era === e.key}
                onClick={() => setEra(e.key)}
                className={`ffh-btn ffx-tab${era === e.key ? "" : " ffh-btn--light"}`}
              >
                <span className="ffh-btn__span">{e.label}</span>
              </button>
            ))}
          </div>
          <input
            className="ffn__field ffx-search"
            type="search"
            placeholder="Search shows"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search shows"
          />
        </div>
        <p className="ffx-count">
          Showing {shown.length} of {eventHistory.length} shows
        </p>

        {shown.length === 0 && <p className="ffx-empty">No shows match “{query}”.</p>}

        <div className="ffx-pg" ref={gridRef} key={`${era}-${query}-${cols}`}>
          {columns.map((col, ci) => (
            <div className="ffx-pg__col" key={ci}>
              {col.map((e) => (
                <article className="ffx-event" key={e.title + e.year}>
                  <button
                    type="button"
                    className="ffx-event__poster"
                    data-wide={wide[e.image] ? "true" : "false"}
                    onClick={() => setPoster(e)}
                    aria-label={`View poster: ${e.title}`}
                  >
                    <span className="ffx-event__year">{e.year}</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={e.image}
                      alt={`${e.title} poster`}
                      loading="lazy"
                      draggable={false}
                      onLoad={(ev) => {
                        const im = ev.currentTarget;
                        if (im.naturalWidth / im.naturalHeight > 1.2) setWide((w) => ({ ...w, [e.image]: true }));
                      }}
                    />
                  </button>
                  <div className="ffx-event__body">
                    <span className="ffx-event__type">{e.type}</span>
                    <h3 className="ffx-event__title">{e.title}</h3>
                    {e.note && <p className="ffx-event__note">{e.note}</p>}
                    {e.album && (
                      <div className="ffx-event__actions">
                        <a className="ffh-btn ffh-btn--light ffx-event__btn" href={e.album} target="_blank" rel="noopener noreferrer">
                          <span className="ffh-btn__span">Photo album ↗</span>
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="ffm" data-status={poster ? "active" : "not-active"}>
        <div className="ffm__bg" onClick={() => setPoster(null)} />
        <div className="ffm__wrap">
          {poster && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="ffx-lb__img" src={poster.image} alt={`${poster.title} poster`} />
          )}
        </div>
        <button type="button" className="ffh-btn ffm__close" aria-label="Close poster" onClick={() => setPoster(null)}>
          <span className="ffm__bar" />
          <span className="ffm__bar ffm__bar--dup" />
        </button>
      </div>
    </main>
  );
}
