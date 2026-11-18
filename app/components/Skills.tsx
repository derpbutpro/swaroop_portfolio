"use client";
import { useState } from "react";
import SkillGyroscope from "./SkillGyroscope";
import { skills } from "@/data/portfolio";
export default function Skills() {
  const [open, setOpen] = useState<string | null>(null);
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
            <div className="skill-row" key={skill.name}>
              <button
                aria-expanded={open === skill.name}
                aria-controls={`level-${skill.name}`}
                onClick={() => setOpen(open === skill.name ? null : skill.name)}
              >
                <span>{skill.name}</span>
                <span>
                  {skill.level}%{" "}
                  <span aria-hidden="true">
                    {open === skill.name ? "−" : "+"}
                  </span>
                </span>
              </button>
              {open === skill.name && (
                <div className="meter-wrap" id={`level-${skill.name}`}>
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
                </div>
              )}
            </div>
          ))}
          <p className="small-muted">More coming soon.</p>
        </div>
      </div>
    </section>
  );
}
