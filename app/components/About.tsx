import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { profile, skills } from "@/data/portfolio";
export default function About() {
  const portrait = ["swaroop.jpg", "swaroop.jpeg", "swaroop.png", "swaroop.webp"].find(
    (name) => existsSync(join(process.cwd(), "public", "images", name)),
  );
  return (
    <section id="about" className="page">
      <div className="about-layout">
        <div className="portrait">
          {portrait ? (
            <Image
              src={`/images/${portrait}`}
              alt="Swaroop Bevinal in orange and burgundy light"
              fill
              sizes="(max-width: 700px) 90vw, 45vw"
              className="portrait-photo"
            />
          ) : (
            <span>SB.</span>
          )}
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
