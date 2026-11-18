"use client";
import { useState, type FormEvent } from "react";
import { profile } from "@/data/portfolio";
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSubmitted(true);
  }
  return (
    <section id="contact" className="page contact-page">
      <h1>
        Let&apos;s make
        <br />
        <em>something.</em>
      </h1>
      <div className="contact-layout">
        <div>
          <p className="lead">
            Have an idea or just want to say hello? I&apos;d love to hear from
            you.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              Email ↗<span>{profile.email}</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.instagram} target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
            <a href={profile.spotify} target="_blank" rel="noreferrer">
              Spotify ↗
            </a>
            <a href={`tel:${profile.phone}`}>
              Phone ↗<span>+91 94821 38416</span>
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
          />
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            minLength={2}
            rows={5}
            placeholder="Tell me what you have in mind"
          />
          <button className="button primary" type="submit">
            Send message ↗
          </button>
          {submitted && (
            <p role="status">
              This form is a preview. Use the email link to get in touch.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
