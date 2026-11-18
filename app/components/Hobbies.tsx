import { films, track } from "@/data/portfolio";
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
      <article className="record" aria-label={`On rotation: ${track.title} by ${track.artist}`}>
        <TrackPreview />
      </article>
    </section>
  );
}
