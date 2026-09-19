import React from "react";
import PageHero from "@/components/pages/PageHero";
import { eventHistory } from "@/data/events";
import { artists } from "@/data/artists";
import { nonProfitCauses } from "@/data/nonProfits";
import "@/components/home/footer.css";

// Every number on this page is counted from the data files (which mirror livespectrum.com).
const firstYear = Math.min(...eventHistory.map((e) => Number(e.year)));

const STATS = [
  { num: String(eventHistory.length), label: "shows in our event history" },
  { num: String(firstYear), label: "our first show, a Javed Jaffrey play" },
  { num: String(artists.length), label: "artists promoted in the Triangle" },
  { num: String(nonProfitCauses.length), label: "non-profits supported so far" },
];

const COMMUNITY = [
  {
    name: "SafeSplash Swim School",
    about: "Our concerts raise awareness of water safety and drowning prevention. Check SafeSplash for trial classes (Morrisville & Holly Springs, NC).",
    href: "https://www.safesplash.com/locations/morrisville-triangle-nc",
  },
  {
    name: "The Goddard School, Morrisville",
    about: "Raising awareness and funds for child care at the Goddard School in Morrisville.",
    href: "https://www.goddardschool.com/raleigh-durham/morrisville-davis-drive-nc",
  },
  {
    name: "Sharkey's Cuts for Kids",
    about: "A Morrisville family salon that offers our audience Mundan ceremonies and 25% off adult haircuts.",
    href: "https://sharkeys.bookedby.com/store/d3673688-c523-11eb-bfbd-0ab754383715",
  },
];

export default function ImpactPage() {
  return (
    <main className="ffh ffx">
      <PageHero
        bubble="Morrisville, NC"
        words={[
          { text: "Purpose", src: "/hero/pw-purpose.svg" },
          { text: "beyond", src: "/hero/pw-beyond.svg" },
          { text: "entertainment", src: "/hero/pw-entertainment.svg" },
        ]}
        box="Giving back."
        lead="LiveSpectrum Entertainment promotes shows sponsored by AKM Investments to raise awareness and funds for Triangle non-profit organizations and their causes."
      />

      <section className="ffh-container">
        <div className="ffx-stats">
          {STATS.map((s) => (
            <div className="ffx-stat" key={s.label}>
              <span className="ffx-stat__num">{s.num}</span>
              <span className="ffx-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="ffx-source">Counted from the Event History, Artists and Non-Profit lists on livespectrum.com.</p>

        <div className="ffx-section">
          <div className="ffx-section__head">
            <h2 className="ffx-section__h2">
              Non-profits we&apos;ve <span className="ffh-boxed ffh-boxed--top">supported</span>
            </h2>
            <p className="ffx-section__p">The following organizations have been supported by LiveSpectrum shows until now.</p>
          </div>
          <div className="ffx-partners">
            {nonProfitCauses.map((org) => (
              <article className="ffx-partner" key={org.name}>
                <div className="ffx-partner__logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={org.logo} alt={`${org.name} logo`} loading="lazy" />
                </div>
                <h3>{org.name}</h3>
                <p>{org.about}</p>
                <a className="ffh-btn ffh-btn--light" href={org.website} target="_blank" rel="noopener noreferrer">
                  <span className="ffh-btn__span">Visit website ↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="ffx-section">
          <div className="ffx-section__head">
            <h2 className="ffx-section__h2">
              Community <span className="ffh-boxed ffh-boxed--bottom">partners</span>
            </h2>
            <p className="ffx-section__p">Local businesses that stand with our shows and our causes.</p>
          </div>
          <div className="ffx-community">
            {COMMUNITY.map((c) => (
              <article className="ffx-partner" key={c.name}>
                <h3>{c.name}</h3>
                <p>{c.about}</p>
                <a className="ffh-btn ffh-btn--light" href={c.href} target="_blank" rel="noopener noreferrer">
                  <span className="ffh-btn__span">Visit website ↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>

        <figure className="ffx-press">
          <span className="ffx-press__num">900+</span>
          <blockquote>
            “Jagjit Singh enticed more than 900 people on May 24 at Stewart Theater in Raleigh. The event was organized
            by LiveSpectrum Entertainment.”
          </blockquote>
          <figcaption>Saathee.com, July 2006 · Sharda Tarasaria</figcaption>
        </figure>

        <div className="ffx-sponsor">
          <h2>Become a sponsor</h2>
          <p>LiveSpectrum offers sponsorship packages. Please contact Arvind at 919-323-4024 for details.</p>
          <div className="ffx-sponsor__actions">
            <a className="ffh-btn ffh-btn--light" href="tel:9193234024">
              <span className="ffh-btn__span">Call 919-323-4024</span>
            </a>
            <a className="ffh-btn ffh-btn--light" href="mailto:1livespectrum@gmail.com">
              <span className="ffh-btn__span">Email us</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
