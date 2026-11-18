"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { aiTools, skills, type Skill } from "@/data/portfolio";
import styles from "./Skills.module.css";

function SkillList({ entries }: { entries: Skill[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className={styles.list}>
      {entries.map(({ name, level, detail }) => {
        const slug = name.toLowerCase();
        const open = expanded === name;
        return (
          <div key={name} className={styles.item}>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={`detail-${slug}`}
              onClick={() => setExpanded(open ? null : name)}
            >
              <span className={styles.icon}>
                <Image src={`/images/skills/${slug}.svg`} width={30} height={30} alt="" />
              </span>
              <span>{name}</span>
              <ChevronDown className={styles.chevron} size={20} aria-hidden="true" />
            </button>
            <div id={`detail-${slug}`} className={styles.detail} hidden={!open}>
              <p>{detail}</p>
              {level !== undefined && (
                <div className={styles.progress}>
                  <progress aria-label={`${name} learning progress`} max={100} value={level} />
                  <span>{level}%</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Skills() {
  return (
    <div id="skills" className={`page ${styles.page}`}>
      <section aria-labelledby="skills-heading">
        <h1 id="skills-heading" className={styles.heading}>My <em>skills.</em></h1>
        <SkillList entries={skills} />
        <p className="small-muted">More coming soon.</p>
      </section>
      <section aria-labelledby="ai-heading">
        <h2 id="ai-heading" className={styles.heading}>My <em>extra brain.</em></h2>
        <SkillList entries={aiTools} />
      </section>
    </div>
  );
}
