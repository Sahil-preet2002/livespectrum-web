"use client";

import React, { useEffect, useMemo, useState } from "react";
import { videoVault, type VideoItem } from "@/data/videos";
import PageHero from "@/components/pages/PageHero";
import "@/components/home/footer.css";

type LenisLike = { stop: () => void; start: () => void };
const lenis = () => (window as unknown as { lenis?: LenisLike }).lenis;

const CATEGORIES = ["All", ...Array.from(new Set(videoVault.map((v) => v.category)))];

function embedSrc(v: VideoItem) {
  return v.source === "youtube"
    ? `https://www.youtube.com/embed/${v.id}?rel=0&autoplay=1`
    : `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(v.url)}&show_text=false&autoplay=true`;
}

export default function VideosPage() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState<VideoItem | null>(null);

  const list = useMemo(() => videoVault.filter((v) => cat === "All" || v.category === cat), [cat]);

  useEffect(() => {
    if (!active) return;
    lenis()?.stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      lenis()?.start();
    };
  }, [active]);

  return (
    <main className="ffh ffx">
      <PageHero
        bubble={`${videoVault.length} videos`}
        words={[
          { text: "Watch", src: "/hero/pw-watch.svg" },
          { text: "our", src: "/hero/pw-our.svg" },
          { text: "videos", src: "/hero/pw-videos.svg" },
        ]}
        box="Promos, interviews & highlights."
        lead="Watch shows and messages from the artists we have brought to the Triangle."
      />

      <section className="ffh-container">
        <div className="ffx-controls">
          <div className="ffx-tabs" role="tablist" aria-label="Filter videos">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={cat === c}
                onClick={() => setCat(c)}
                className={`ffh-btn ffx-tab${cat === c ? "" : " ffh-btn--light"}`}
              >
                <span className="ffh-btn__span">{c}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="ffx-videos" key={cat}>
          {list.map((v, i) => (
            <button
              type="button"
              className="ffx-video"
              key={v.id}
              onClick={() => setActive(v)}
              style={{ animationDelay: `${Math.min(i, 8) * 55}ms` }}
              aria-label={`Play: ${v.title}`}
            >
              <div className="ffx-video__thumb">
                {v.source === "youtube" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" />
                ) : (
                  <div className="ffx-video__fb">Facebook video</div>
                )}
                <span className="ffx-video__play">
                  <svg viewBox="0 0 24 24" fill="#121212" aria-hidden="true">
                    <path d="M6 3.5v17a1 1 0 0 0 1.5.86l14-8.5a1 1 0 0 0 0-1.72l-14-8.5A1 1 0 0 0 6 3.5Z" />
                  </svg>
                </span>
              </div>
              <div className="ffx-video__body">
                <span className="ffx-event__type">{v.category}</span>
                <h3 className="ffx-video__title">{v.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      <div className="ffm" data-status={active ? "active" : "not-active"}>
        <div className="ffm__bg" onClick={() => setActive(null)} />
        <div className="ffm__wrap">
          <div className="ffm__card">
            <div className="ffm__yt">
              {active && (
                <iframe
                  src={embedSrc(active)}
                  title={active.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
        <button type="button" className="ffh-btn ffm__close" aria-label="Close video" onClick={() => setActive(null)}>
          <span className="ffm__bar" />
          <span className="ffm__bar ffm__bar--dup" />
        </button>
      </div>
    </main>
  );
}
