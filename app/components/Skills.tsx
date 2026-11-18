"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { skills } from "@/data/portfolio";
import styles from "./Skills.module.css";

export default function Skills() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="skills" className={`page ${styles.page}`}>
      <h1>My <em>skills.</em></h1>
      <div className={styles.list}>
        {skills.map(({ name, level, detail }) => {
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
        <p className="small-muted">More coming soon.</p>
      </div>
    </section>
  );
}
