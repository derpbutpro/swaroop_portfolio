import { profile, skills } from "@/data/portfolio";
export default function About() {
  return (
    <section id="about" className="page">
      <div className="about-layout">
        <div className="portrait">
          <span>SB.</span>
        </div>
        <div className="about-copy">
          <h1>
            About <em>me.</em>
          </h1>
          <p>{profile.bio}</p>
          <div className="chip-row">
            {skills.map((s) => (
              <span className="chip" key={s.name}>
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
