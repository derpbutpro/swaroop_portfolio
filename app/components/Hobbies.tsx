import { profile, films, track } from "@/data/portfolio";
import { AudioLines } from "lucide-react";
export default function Hobbies() {
  return (
    <section id="hobbies" className="page">
      <h1>
        Hobbies<span>.</span>
      </h1>
      <div className="films">
        {films.map((f) => (
          <article key={f.slug}>
            <video
              controls
              muted
              playsInline
              preload="none"
              poster={"/images/" + f.slug + ".webp"}
              aria-label={f.name + " original silent animation"}
              src={"/videos/" + f.slug + ".mp4"}
            />
            <div>
              <small>Anime</small>
              <h2>{f.name}</h2>
            </div>
          </article>
        ))}
      </div>
      <article className="record">
        <video
          controls
          muted
          playsInline
          preload="none"
          poster="/images/4-raws.webp"
          src="/videos/4-raws.mp4"
          aria-label="Silent animated player for 4 Raws by EsDeeKid"
        />
        <div>
          <small>On rotation</small>
          <h2>{track.title}</h2>
          <p>{track.artist}</p>
        </div>
        <AudioLines size={40} aria-hidden="true" />
        <a href={profile.spotify} className="text-link">
          My Spotify ↗
        </a>
      </article>
    </section>
  );
}
