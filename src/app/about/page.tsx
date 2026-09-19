import React from "react";
import Link from "next/link";
import PageHero from "@/components/pages/PageHero";
import { leadershipData } from "@/data/leadership";
import "@/components/home/footer.css";

export default function AboutPage() {
  const { founder, purposes, akm, contact, social } = leadershipData;

  return (
    <main className="ffh ffx">
      <PageHero
        bubble="Morrisville, NC"
        words={[
          { text: "About", src: "/hero/pw-about.svg" },
          { text: "LiveSpectrum", src: "/hero/pw-livespectrum.svg" },
        ]}
        box="Since 2005."
        lead="LiveSpectrum Entertainment is a subsidiary of AKM Investment Consulting & Brokerage."
      />

      <section className="ffh-container">
        <div className="ffx-section" style={{ paddingTop: "1em" }}>
          <div className="ffx-section__head">
            <h2 className="ffx-section__h2">
              Our <span className="ffh-boxed ffh-boxed--top">purpose</span>
            </h2>
          </div>
          <div className="ffx-purpose">
            {purposes.map((p, i) => (
              <div className="ffx-purpose__item" key={p}>
                <span className="ffx-purpose__num">{i + 1}</span>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ffx-section">
          <div className="ffx-section__head">
            <h2 className="ffx-section__h2">
              AKM <span className="ffh-boxed ffh-boxed--bottom">Investments</span>
            </h2>
            <p className="ffx-section__p">Consultants & brokers. The team behind every LiveSpectrum show.</p>
          </div>
          <div className="ffx-akm">
            {akm.groups.map((g) => (
              <article className="ffx-partner" key={g.title}>
                <h3>{g.title}</h3>
                <ul>
                  {g.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="ffx-akm-foot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/about/akm-logo.png" alt="AKM Realty logo" />
            <p>{akm.note}</p>
            <a className="ffh-btn ffh-btn--light" href={akm.website} target="_blank" rel="noopener noreferrer">
              <span className="ffh-btn__span">Visit akminvestment.com ↗</span>
            </a>
          </div>
        </div>

        <div className="ffx-section">
          <div className="ffx-founder">
            <figure className="ffx-founder__photo ffs-card" style={{ margin: "0 auto" }}>
              <div className="ffs-card__image-wrap">
                <div className="ffs-corner" />
                <div className="ffs-corner ffs-corner--rt" />
                <div className="ffs-corner ffs-corner--lb" />
                <div className="ffs-corner ffs-corner--rb" />
                <div className="ffs-card__image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={founder.photo} alt={founder.photoCaption} />
                </div>
              </div>
              <figcaption>{founder.photoCaption}</figcaption>
            </figure>

            <div>
              <h2 className="ffx-founder__name">{founder.name}</h2>
              <div className="ffx-founder__titles">
                {founder.titles.map((t) => (
                  <span className="ffh-boxed ffx-chip-box" key={t} style={{ fontSize: "0.9em", transform: "rotate(-1deg)" }}>
                    {t}
                  </span>
                ))}
              </div>
              <p>
                <strong>{founder.experience}</strong>
              </p>
              <p>{founder.background}</p>
              <p>{founder.network}</p>
              <div className="ffx-chips">
                {founder.credentials.map((c) => (
                  <span className="ffx-chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
              <div className="ffx-socials">
                {social.map((s) => (
                  <a className="ffh-btn ffh-btn--light" key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                    <span className="ffh-btn__span">{s.name} ↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ffx-sponsor">
          <h2>Say hello</h2>
          <p>
            Questions about a show, sponsorship or volunteering? Call the hotline on {contact.hotline} or phone{" "}
            {contact.phone}.
          </p>
          <div className="ffx-sponsor__actions">
            <Link className="ffh-btn ffh-btn--light" href="/contact">
              <span className="ffh-btn__span">Contact us</span>
            </Link>
            <a className="ffh-btn ffh-btn--light" href={`tel:${contact.hotline.replace(/-/g, "")}`}>
              <span className="ffh-btn__span">Call {contact.hotline}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
