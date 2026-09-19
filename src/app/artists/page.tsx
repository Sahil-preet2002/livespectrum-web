"use client";

import React, { useMemo, useState } from "react";
import { artists, type Artist } from "@/data/artists";
import { appearancesFor } from "@/data/appearances";
import PageHero from "@/components/pages/PageHero";
import "@/components/home/footer.css";

const FILTERS: Array<{ key: "all" | Artist["category"]; label: string }> = [
  { key: "all", label: "All" },
  { key: "Music", label: "Music" },
  { key: "Theater & Cinema", label: "Theatre & Cinema" },
  { key: "Comedy", label: "Comedy" },
];

export default function ArtistsPage() {
  const [filter, setFilter] = useState<"all" | Artist["category"]>("all");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return artists.filter(
      (a) => (filter === "all" || a.category === filter) && (!q || a.name.toLowerCase().includes(q))
    );
  }, [filter, query]);

  return (
    <main className="ffh ffx">
      <PageHero
        bubble="Since 2005 · Triangle, NC"
        words={[
          { text: "Meet", src: "/hero/pw-meet.svg" },
          { text: "our", src: "/hero/pw-our.svg" },
          { text: "artists", src: "/hero/pw-artists.svg" },
        ]}
        box="Live in the Triangle."
        lead="LiveSpectrum Entertainment is proud to have promoted all these artists in the Triangle area."
      />

      <section className="ffh-container">
        <div className="ffx-controls">
          <div className="ffx-tabs" role="tablist" aria-label="Filter artists">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={filter === f.key}
                onClick={() => setFilter(f.key)}
                className={`ffh-btn ffx-tab${filter === f.key ? "" : " ffh-btn--light"}`}
              >
                <span className="ffh-btn__span">{f.label}</span>
              </button>
            ))}
          </div>
          <input
            className="ffn__field ffx-search"
            type="search"
            placeholder="Search artists"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search artists"
          />
        </div>
        <p className="ffx-count">
          Showing {list.length} of {artists.length} artists
        </p>

        {list.length === 0 ? (
          <p className="ffx-empty">No artists match “{query}”.</p>
        ) : (
          <div className="ffx-grid" key={`${filter}-${query}`}>
            {list.map((a, i) => {
              const apps = appearancesFor(a.name);
              return (
                <div className="ffx-grid__cell" key={a.name}>
                  <article className="ffx-artist ffs-card" style={{ animationDelay: `${Math.min(i, 11) * 45}ms` }}>
                    <div className="ffs-card__tag">
                      <span>{a.role}</span>
                    </div>
                    <div className="ffs-card__image-wrap">
                      <div className="ffs-corner" />
                      <div className="ffs-corner ffs-corner--rt" />
                      <div className="ffs-corner ffs-corner--lb" />
                      <div className="ffs-corner ffs-corner--rb" />
                      <div className="ffs-card__image">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={a.img} alt={a.name} loading="lazy" draggable={false} />
                      </div>
                    </div>
                    <div className="ffs-card__bio">
                      <h3 className="ffx-name">{a.name}</h3>
                      {apps.length > 0 ? (
                        <ul className="ffx-apps">
                          {apps.slice(0, 3).map((p) => (
                            <li key={p.year + p.title}>
                              <b>{p.year}</b> · {p.title}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="ffx-muted">Promoted by LiveSpectrum Entertainment</p>
                      )}
                      <a className="ffx-link" href={a.wiki} target="_blank" rel="noopener noreferrer">
                        Learn more ↗
                      </a>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
