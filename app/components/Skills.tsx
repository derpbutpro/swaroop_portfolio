import SkillGyroscope from "./SkillGyroscope";
import { skills } from "@/data/portfolio";
export default function Skills() {
  return (
    <section id="skills" className="page">
      <h1>
        My <em>skills.</em>
      </h1>
      <div className="skills-layout">
        <SkillGyroscope />
        <div className="skill-list">
          <h2>Skills in progress</h2>
          {skills.map((skill) => (
            <details className="skill-row" key={skill.name} open>
              <summary>
                <span>{skill.name}</span>
                <span>{skill.level}% <span className="meter-toggle" aria-hidden="true" /></span>
              </summary>
              <div
                role="progressbar"
                aria-label={`${skill.name} learning progress`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.level}
                className="meter"
              >
                <span style={{ width: `${skill.level}%` }} />
              </div>
            </details>
          ))}
          <p className="small-muted">More coming soon.</p>
        </div>
      </div>
    </section>
  );
}
