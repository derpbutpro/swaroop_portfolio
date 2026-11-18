import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { profile, skills } from "@/data/portfolio";
export default function About() {
  const portrait = ["swaroop.jpg", "swaroop.jpeg", "swaroop.png", "swaroop.webp"].find(
    (name) => existsSync(join(process.cwd(), "public", "images", name)),
  );
  return (
    <section id="about" className="about-cover" aria-labelledby="about-title">
      <div className="about-stage">
        {portrait && (
          <Image
            src={`/images/${portrait}`}
            alt="Swaroop Bevinal in orange and burgundy light"
            fill
            priority
            sizes="(max-width: 700px) 100vw, (max-width: 1500px) 94vw, 1380px"
            className="about-photo"
          />
        )}
        <div className="about-story">
          <div className="about-title">
            <p>About me</p>
            <h1 id="about-title">{profile.name}</h1>
          </div>
          <p className="about-bio">{profile.bio}</p>
        </div>
      </div>
      <div className="about-toolkit">
        <h2>Skills</h2>
        <ul aria-label="Skills">
          {skills.map(({ name }) => <li key={name}>{name}</li>)}
        </ul>
      </div>
    </section>
  );
}
