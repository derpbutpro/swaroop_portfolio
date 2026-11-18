"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { track } from "@/data/portfolio";

export default function TrackPreview() {
  const media = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState("");

  async function togglePlayback() {
    const video = media.current;
    if (!video) return;
    setError("");
    if (!video.paused) {
      video.pause();
      return;
    }
    try {
      await video.play();
    } catch (cause) {
      if (cause instanceof DOMException && cause.name === "AbortError") return;
      setError("The preview could not play. Try again.");
    }
  }

  const Icon = playing ? Pause : Play;
  return (
    <div className="track-preview">
      <video
        ref={media}
        muted
        playsInline
        preload="none"
        poster="/images/4-raws.webp"
        src="/videos/4-raws.mp4"
        aria-label={`Silent visual for ${track.title} by ${track.artist}`}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      <button
        type="button"
        className="track-toggle"
        aria-label={`${playing ? "Pause" : "Play"} ${track.title} preview`}
        onClick={togglePlayback}
      >
        <Icon aria-hidden="true" size={20} fill="currentColor" />
      </button>
      {error && <p role="status">{error}</p>}
    </div>
  );
}
