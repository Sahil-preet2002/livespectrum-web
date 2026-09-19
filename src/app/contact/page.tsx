"use client";

import React, { useState } from "react";
import PageHero from "@/components/pages/PageHero";
import { leadershipData } from "@/data/leadership";
import "@/components/home/footer.css";

const { contact, social } = leadershipData;
const SUBJECTS = ["Tickets", "Subscribe", "Volunteer Opportunity", "Sponsorship", "General question"];

const mailto = (subject: string, body = "") =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

export default function ContactPage() {
  const [opened, setOpened] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [`Name: ${f.get("name")}`, `Email: ${f.get("email")}`, `Phone: ${f.get("phone") || "-"}`, "", `${f.get("message")}`].join("\n");
    window.location.href = mailto(String(f.get("subject")), body);
    setOpened(true);
  };

  return (
    <main className="ffh ffx">
      <PageHero
        bubble="Morrisville, NC"
        words={[
          { text: "Get", src: "/hero/pw-get.svg" },
          { text: "in", src: "/hero/pw-in.svg" },
          { text: "touch", src: "/hero/pw-touch.svg" },
        ]}
        box="We'd love to hear from you."
        lead="Tickets, sponsorship, volunteering or just a hello: reach the LiveSpectrum team any time."
      />

      <section className="ffh-container">
        <div className="ffx-contact">
          <form className="ffx-form" onSubmit={onSubmit}>
            <div className="ffx-form__row">
              <label className="ffx-label">
                Your name
                <input className="ffn__field" name="name" required maxLength={120} placeholder="First and last name" />
              </label>
              <label className="ffx-label">
                Email
                <input className="ffn__field" name="email" type="email" required maxLength={200} placeholder="you@example.com" />
              </label>
            </div>
            <div className="ffx-form__row">
              <label className="ffx-label">
                Phone (optional)
                <input className="ffn__field" name="phone" type="tel" maxLength={40} placeholder="919-000-0000" />
              </label>
              <label className="ffx-label">
                Subject
                <select className="ffn__field" name="subject" defaultValue={SUBJECTS[0]}>
                  {SUBJECTS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="ffx-label">
              Message
              <textarea className="ffn__field" name="message" required maxLength={2000} placeholder="How can we help?" />
            </label>
            <button type="submit" className="ffn__submit">
              Send message
            </button>
            <p className="ffx-form__note">
              {opened
                ? "Your email app should have opened. Just hit send. If it didn't, write to " + contact.email + "."
                : `This opens your email app with the message ready to send to ${contact.email}.`}
            </p>
          </form>

          <div className="ffx-side">
            <article className="ffx-partner">
              <h3>Call or email</h3>
              <div>
                <div className="ffx-line">
                  <span>Hotline</span>
                  <a href={`tel:${contact.hotline.replace(/-/g, "")}`}>{contact.hotline}</a>
                </div>
                <div className="ffx-line">
                  <span>Phone</span>
                  <a href={`tel:${contact.phone.replace(/-/g, "")}`}>{contact.phone}</a>
                </div>
                <div className="ffx-line">
                  <span>Ticket info line</span>
                  <a href={`tel:${contact.ticketInfoLine.replace(/-/g, "")}`}>{contact.ticketInfoLine}</a>
                </div>
                <div className="ffx-line">
                  <span>Email</span>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
                <div className="ffx-line">
                  <span>Location</span>
                  <span>{contact.location}</span>
                </div>
              </div>
            </article>

            <article className="ffx-partner">
              <h3>Join in</h3>
              <p>
                Email us with “Subscribe” in the subject line to get our list for future events, or “Volunteer
                Opportunity” to help at a show.
              </p>
              <div className="ffx-btns">
                <a className="ffh-btn" href={mailto("Subscribe")}>
                  <span className="ffh-btn__span">Subscribe</span>
                </a>
                <a className="ffh-btn ffh-btn--light" href={mailto("Volunteer Opportunity")}>
                  <span className="ffh-btn__span">Volunteer</span>
                </a>
              </div>
              <div className="ffx-btns" style={{ marginTop: "0.5em" }}>
                {social.map((s) => (
                  <a className="ffh-btn ffh-btn--light" key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                    <span className="ffh-btn__span">{s.name} ↗</span>
                  </a>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
