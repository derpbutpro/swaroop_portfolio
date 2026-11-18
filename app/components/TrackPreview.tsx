"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/data/portfolio";

type SpotifyController = {
  addListener(event: "ready", listener: () => void): void;
  play(): void;
  destroy(): void;
};

type SpotifyAPI = {
  createController(
    element: HTMLElement,
    options: { uri: string; width: string; height: number },
    callback: (controller: SpotifyController) => void,
  ): void;
};

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyAPI) => void;
  }
}

const playerHeight = 352;

let apiPromise: Promise<SpotifyAPI> | undefined;

function loadSpotify() {
  if (!apiPromise) {
    apiPromise = new Promise<SpotifyAPI>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://open.spotify.com/embed/iframe-api/v1";
      const timeout = window.setTimeout(fail, 12000);
      function fail() {
        clearTimeout(timeout);
        script.remove();
        apiPromise = undefined;
        reject(new Error("Spotify player unavailable"));
      }
      window.onSpotifyIframeApiReady = (api) => {
        clearTimeout(timeout);
        resolve(api);
      };
      script.onerror = fail;
      document.head.append(script);
    });
  }
  return apiPromise;
}

export default function TrackPreview() {
  const host = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const id = track.spotifyId;

  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let disposed = false;
    let player: SpotifyController | undefined;

    loadSpotify().then((api) => {
      if (disposed) return;
      const mount = document.createElement("div");
      container.replaceChildren(mount);
      api.createController(mount, { uri: `spotify:track:${id}`, width: "100%", height: playerHeight }, (controller) => {
        if (disposed) {
          controller.destroy();
          return;
        }
        player = controller;
        controller.addListener("ready", () => {
          if (!disposed) controller.play();
        });
      });
    }).catch(() => {
      if (!disposed) setFailed(true);
    });

    return () => {
      disposed = true;
      player?.destroy();
      container.replaceChildren();
    };
  }, [id]);

  if (failed) {
    return (
      <div className="spotify-player">
        <iframe
          title={`${track.title} by ${track.artist} on Spotify`}
          src={`https://open.spotify.com/embed/track/${id}`}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          height={playerHeight}
        />
      </div>
    );
  }
  return <div className="spotify-player" ref={host} style={{ minHeight: playerHeight }} aria-label={`${track.title} by ${track.artist} on Spotify`} />;
}
