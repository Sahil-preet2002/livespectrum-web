"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FOOTER_FACE_SVG, FOOTER_SUN_SVG, WAVE_SVG } from "../home/heroSvgs";
import { useSunFace } from "../home/useSunFace";
import "../home/hero.css";
import "../home/sections.css";
import "../home/footer.css";

gsap.registerPlugin(ScrollTrigger);

// Artist photos as coloured "stickers" (same idea as the people cut-outs in the FlowFest footer)
const STICKERS = {
  left: [
    { src: "/artists/shaan.jpg", alt: "Shaan", band: "#f97028" },
    { src: "/artists/sunidhi-chauhan.jpg", alt: "Sunidhi Chauhan", band: "#f489a3" },
    { src: "/artists/alka-yagnik.jpg", alt: "Alka Yagnik", band: "#f0bb0d" },
  ],
  right: [
    { src: "/artists/jagjit-singh.jpg", alt: "Jagjit Singh", band: "#f489a3" },
    { src: "/artists/sonu-nigam.jpg", alt: "Sonu Nigam", band: "#f97028" },
    { src: "/artists/kailash-kher.jpg", alt: "Kailash Kher", band: "#f3a20f" },
  ],
} as const;

export default function Footer() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

  useSunFace(rootRef);

  // Big sun rises into view while the footer scrolls in
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    // hide the floating mascot while the footer (with its own big sun) is on screen
    const hide = ScrollTrigger.create({
      trigger: root.querySelector(".fff"),
      start: "top 90%",
      onToggle: (self) => document.body.classList.toggle("ffh-footer-view", self.isActive),
    });
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ffh-sun--footer",
        { yPercent: 50 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: { trigger: ".fff", start: "top bottom", end: "bottom bottom", scrub: true },
        }
      );
    }, root);
    return () => {
      hide.kill();
      document.body.classList.remove("ffh-footer-view");
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="ffh">
      <section className="ffp">
        <div className="ffh-container">
          <div className="ffp__card">
            <div className="ffp__wave-wrap" aria-hidden="true" dangerouslySetInnerHTML={{ __html: WAVE_SVG }} />
            <div className="ffp__wave-wrap ffp__wave-wrap--rotated" aria-hidden="true" dangerouslySetInnerHTML={{ __html: WAVE_SVG }} />
            <div className="ffp__content">
              <h2 className="ffp__h2">Get Your Tickets for Jai Shri Ram – Ramayana</h2>
              <p>
                Join us on Sunday, May 5 at Raleigh Memorial Auditorium for the Ramayana musical epic. Passes from $59,
                kids allowed, and the concert raises awareness of child water safety in our community.
              </p>
              <Link href="/tickets" data-ffh-hover-happy="" className="ffh-btn ffh-btn--light ffh-btn--big-mobile">
                <span className="ffh-btn__span">Buy Tickets</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="fff">
        <div className="ffh-container">
          <div className="fff__top">
            <div className="fff__title">
              <h2 className="fff__h2">See you there!</h2>
              <p className="fff__p">
                Questions? Email <a href="mailto:1livespectrum@gmail.com">1livespectrum@gmail.com</a>, call the hotline
                on 877-222-9324 or phone Arvind on 919-323-4024.
              </p>
            </div>

            <div className="fff__form-col">
              <div className="ffn">
                {sent ? (
                  <div className="ffn__message">
                    <p>Thank you! Your email app should open — just hit send to join our email list.</p>
                  </div>
                ) : (
                  <form
                    className="ffn__form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const f = new FormData(e.currentTarget);
                      const body = `Name: ${f.get("name")}
Email: ${f.get("email")}`;
                      window.location.href = `mailto:1livespectrum@gmail.com?subject=${encodeURIComponent("Subscribe")}&body=${encodeURIComponent(body)}`;
                      setSent(true);
                    }}
                  >
                    <div className="ffn__row">
                      <input className="ffn__field" name="name" maxLength={256} placeholder="First Name" type="text" required />
                      <input className="ffn__field" name="email" maxLength={256} placeholder="Email" type="email" required />
                    </div>
                    <input type="submit" data-ffh-hover-happy="" className="ffn__submit" value="Get updates" />
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="ffh-container--flush">
          <div className="fff__bottom">
            {(["left", "right"] as const).map((side) => (
              <div className={`fff__stickers fff__stickers--${side}`} key={side} aria-hidden="true">
                {STICKERS[side].map((st, i) => (
                  <div
                    className={`fff__sticker fff__sticker--${i}`}
                    key={st.src}
                    style={{ "--band": st.band } as React.CSSProperties}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={st.src} alt="" loading="lazy" draggable={false} />
                  </div>
                ))}
              </div>
            ))}
            <div className="ffh-sun ffh-sun--footer">
              <div className="ffh-sun__rays" dangerouslySetInnerHTML={{ __html: FOOTER_SUN_SVG }} />
              <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: FOOTER_FACE_SVG }} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
