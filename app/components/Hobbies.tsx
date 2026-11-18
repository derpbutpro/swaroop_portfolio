import { profile, films, track } from "@/data/portfolio";
import TrackPreview from "./TrackPreview";
export default function Hobbies() {
  return (
    <section id="hobbies" className="page">
      <h1>
        Hobbies<span>.</span>
      </h1>
      <div className="films">
        {films.map((f) => (
          <article key={f.name}>
            {f.youtubeId ? (
              <iframe
                title={f.name + " video on YouTube"}
                src={`https://www.youtube-nocookie.com/embed/${f.youtubeId}?playsinline=1`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <video
                controls
                muted
                playsInline
                preload="none"
                poster={"/images/" + f.slug + ".webp"}
                aria-label={f.name + " original silent animation"}
                src={"/videos/" + f.slug + ".mp4"}
              />
            )}
            <div>
              <small>Anime</small>
              <h2>{f.name}</h2>
              {f.youtubeId && (
                <a className="text-link" href={`https://www.youtube.com/watch?v=${f.youtubeId}`}>
                  Watch on YouTube ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <article className="record">
        <TrackPreview />
        <div>
          <small>On rotation</small>
          <h2>{track.title}</h2>
          <p>{track.artist}</p>
        </div>
        <a href={profile.spotify} className="text-link">
          My Spotify ↗
        </a>
      </article>
    </section>
  );
}
