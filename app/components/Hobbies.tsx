import { profile, films, track } from "@/data/portfolio";
import AnimeVideo from "./AnimeVideo";
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
            <AnimeVideo name={f.name} slug={f.slug} />
            <div>
              <small>Anime</small>
              <h2>{f.name}</h2>
            </div>
          </article>
        ))}
      </div>
      <article className="record">
        <div>
          <small>On rotation</small>
          <h2>{track.title}</h2>
          <p>{track.artist}</p>
        </div>
        <div className="record-links">
          <a
            href={`https://open.spotify.com/track/${track.spotifyId}`}
            className="text-link" target="_blank" rel="noopener noreferrer"
          >
            Open in Spotify ↗
          </a>
          <a href={profile.spotify} className="text-link" target="_blank" rel="noopener noreferrer">
            My Spotify ↗
          </a>
        </div>
        <TrackPreview />
      </article>
    </section>
  );
}
