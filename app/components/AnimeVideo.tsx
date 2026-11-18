"use client";

import { useEffect, useRef } from "react";

export default function AnimeVideo({ name, slug }: { name: string; slug: string }) {
  const media = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = media.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    function applyPreference() {
      if (!video) return;
      video.autoplay = !reducedMotion.matches;
      if (reducedMotion.matches) video.pause();
      else void video.play().catch(() => {
        // Browsers that block autoplay still provide the native play control.
      });
    }
    applyPreference();
    reducedMotion.addEventListener("change", applyPreference);
    return () => reducedMotion.removeEventListener("change", applyPreference);
  }, []);

  return (
    <video
      aria-label={name + " video"}
      src={`/videos/${slug}.mp4`}
      poster={`/images/${slug}.webp`}
      preload="none"
      ref={media}
      muted
      loop
      controls
      playsInline
      controlsList="nodownload noplaybackrate noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      onContextMenu={(event) => event.preventDefault()}
    />
  );
}
