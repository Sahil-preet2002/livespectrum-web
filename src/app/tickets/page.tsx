"use client";

import React, { useEffect, useState } from "react";
import PageHero from "@/components/pages/PageHero";
import { ticketingData as t } from "@/data/tickets";
import "@/components/home/footer.css";

type LenisLike = { stop: () => void; start: () => void };
const lenis = () => (window as unknown as { lenis?: LenisLike }).lenis;

export default function TicketsPage() {
  const [chartOpen, setChartOpen] = useState(false);

  useEffect(() => {
    if (!chartOpen) return;
    lenis()?.stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setChartOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      lenis()?.start();
    };
  }, [chartOpen]);

  const tel = (n: string) => `tel:${n.replace(/-/g, "")}`;

  return (
    <main className="ffh ffx">
      <PageHero
        bubble={`${t.event.date} · ${t.event.time}`}
        words={[
          { text: "Get", src: "/hero/pw-get.svg" },
          { text: "your", src: "/hero/pw-your.svg" },
          { text: "tickets", src: "/hero/pw-tickets.svg" },
        ]}
        box={t.event.title}
        lead={`Starring ${t.event.starring.join(" and ")} at ${t.event.venue}. Presented by ${t.event.presenter}.`}
      />

      <section className="ffh-container">
        <div className="ffx-cta">
          <a className="ffh-btn" href={t.event.ticketUrl} target="_blank" rel="noopener noreferrer" data-ffh-hover-happy="">
            <span className="ffh-btn__span">Buy tickets online ↗</span>
          </a>
          <button type="button" className="ffh-btn ffh-btn--light" onClick={() => setChartOpen(true)}>
            <span className="ffh-btn__span">Seating chart</span>
          </button>
          <a className="ffh-btn ffh-btn--light" href={t.event.detailsUrl} target="_blank" rel="noopener noreferrer">
            <span className="ffh-btn__span">Event details ↗</span>
          </a>
        </div>

        <div className="ffx-section" style={{ paddingTop: "4em" }}>
          <div className="ffx-section__head">
            <h2 className="ffx-section__h2">
              Admission <span className="ffh-boxed ffh-boxed--top">passes</span>
            </h2>
            <p className="ffx-section__p">
              Seven price levels, colour-coded on the seating chart below. Kids are allowed.
            </p>
          </div>
          <div className="ffx-tiers">
            {t.tiers.map((tier) => (
              <div className="ffx-tier" key={tier.price} style={{ "--c": tier.color } as React.CSSProperties}>
                <span className="ffx-tier__dot" aria-hidden="true" />
                <span className="ffx-tier__price">${tier.price}</span>
                <span className="ffx-tier__name">{tier.name}</span>
              </div>
            ))}
            <div className="ffx-tier ffx-tier--m">
              <span className="ffx-tier__price">${t.meetAndGreet.price}</span>
              <span className="ffx-tier__name">Meet &amp; Greet, per person</span>
            </div>
          </div>
          <p className="ffx-fees">
            {t.fees}
            <small>Base prices as printed on the seating chart. Final prices are shown at checkout on Ticketmaster.</small>
          </p>
        </div>

        <div className="ffx-section">
          <div className="ffx-section__head">
            <h2 className="ffx-section__h2">
              Seating <span className="ffh-boxed ffh-boxed--bottom">chart</span>
            </h2>
            <p className="ffx-section__p">
              {t.event.venue}, {t.event.date}, {t.event.time}. Tap to zoom.
            </p>
          </div>
          <button type="button" className="ffx-seat" onClick={() => setChartOpen(true)} aria-label="Open seating chart">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.event.seatingChart} alt={`Seating chart for ${t.event.venue}`} loading="lazy" />
          </button>
        </div>

        <div className="ffx-section">
          <div className="ffx-two">
            <article className="ffx-partner">
              <span className="ffx-price-badge">${t.meetAndGreet.price} / person</span>
              <h3>Meet &amp; Greet with the artists</h3>
              <ul>
                {t.meetAndGreet.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a className="ffh-btn" href={tel(t.contacts.infoLine)}>
                <span className="ffh-btn__span">Ask on the info line</span>
              </a>
            </article>

            <article className="ffx-partner">
              <h3>Good to know</h3>
              <ul>
                {t.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="ffx-sponsor">
          <h2>Questions?</h2>
          <p>Text the info line for more info, or email us for any other inquiries.</p>
          <div className="ffx-sponsor__actions">
            <a className="ffh-btn ffh-btn--light" href={tel(t.contacts.infoLine)}>
              <span className="ffh-btn__span">Info line {t.contacts.infoLine}</span>
            </a>
            <a className="ffh-btn ffh-btn--light" href={tel(t.contacts.phone)}>
              <span className="ffh-btn__span">Call {t.contacts.phone}</span>
            </a>
            <a className="ffh-btn ffh-btn--light" href={`mailto:${t.contacts.email}`}>
              <span className="ffh-btn__span">Email us</span>
            </a>
          </div>
        </div>

        <div className="ffx-sponsors">
          <b>Sponsored by</b>
          {t.sponsors.map((s) => (
            <a className="ffh-btn ffh-btn--light" key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
              <span className="ffh-btn__span">{s.name} ↗</span>
            </a>
          ))}
        </div>
      </section>

      <div className="ffm" data-status={chartOpen ? "active" : "not-active"}>
        <div className="ffm__bg" onClick={() => setChartOpen(false)} />
        <div className="ffm__wrap">
          {chartOpen && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="ffx-lb__img" src={t.event.seatingChart} alt={`Seating chart for ${t.event.venue}`} />
          )}
        </div>
        <button type="button" className="ffh-btn ffm__close" aria-label="Close seating chart" onClick={() => setChartOpen(false)}>
          <span className="ffm__bar" />
          <span className="ffm__bar ffm__bar--dup" />
        </button>
      </div>
    </main>
  );
}
