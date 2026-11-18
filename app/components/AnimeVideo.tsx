"use client";

export default function AnimeVideo({ name, slug }: { name: string; slug: string }) {
  return (
    <video
      aria-label={name + " video"}
      src={`/videos/${slug}.mp4`}
      poster={`/images/${slug}.webp`}
      preload="none"
      controls
      playsInline
      controlsList="nodownload noplaybackrate noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      onContextMenu={(event) => event.preventDefault()}
    />
  );
}
