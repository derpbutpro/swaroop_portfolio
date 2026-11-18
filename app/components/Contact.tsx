"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { contacts } from "@/data/portfolio";
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const alarm = useRef<HTMLAudioElement>(null);
  const [alarmState, setAlarmState] = useState<"idle" | "playing" | "finished" | "error">("idle");

  const scream = useRef<HTMLAudioElement>(null);
  const [pausePressed, setPausePressed] = useState(false);
  const [screamError, setScreamError] = useState(false);
  const alarmStarted = alarmState === "playing" || alarmState === "finished";

  useEffect(() => {
    const audio = alarm.current;
    if (!audio) return;
    void audio.play().catch((error: unknown) => {
      if (error instanceof DOMException && (error.name === "NotAllowedError" || error.name === "AbortError")) return;
      setAlarmState("error");
    });
    return () => audio.pause();
  }, []);

  async function playScream() {
    setPausePressed(true);
    const audio = scream.current;
    if (!audio || !audio.paused) return;
    setScreamError(false);
    try {
      await audio.play();
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setScreamError(true);
    }
  }

  async function playAlarm() {
    const audio = alarm.current;
    if (!audio || !audio.paused) return;
    setPausePressed(false);
    setScreamError(false);
    setAlarmState("idle");
    audio.volume = 1;
    try {
      await audio.play();
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setAlarmState("error");
    }
  }

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
            {contacts.map(({ label, detail, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                <strong>{label}<ArrowUpRight aria-hidden="true" size={19} /></strong>
                <span>{detail}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <button className="alarm-button" type="button" onClick={playAlarm} title="Plays a loud alarm">
              DONT CLICK
            </button>
            {alarmStarted && (
              <button className="button" type="button" onClick={playScream} title="Plays a scream">
                PAUSE
              </button>
            )}
          </div>
          <audio ref={scream} src="/audio/pause-scream.mp3" preload="none" />
          <audio
            ref={alarm}
            src="/audio/samsung-bass-boosted-alarm.mp3"
            preload="none"
            onPlaying={() => setAlarmState("playing")}
            onEnded={() => setAlarmState("finished")}
          />
          <div aria-live="polite">
            {alarmStarted && (
              <p className="mt-3">I did tell u not to press it</p>
            )}
            {alarmState === "finished" && pausePressed && <p>I am not sorry about that 😝</p>}
            {screamError && <p>The scream couldn’t play. Press PAUSE to try again.</p>}
            {alarmState === "error" && <p>The sound couldn’t play. Press the button to try again.</p>}
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
