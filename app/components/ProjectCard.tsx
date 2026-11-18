import { ArrowUpRight, BookOpen, Grid3X3 } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/portfolio";
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const Icon = index === 0 ? BookOpen : Grid3X3;
  return (
    <article className="project-card">
      <div className={"project-visual visual-" + index}>
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 700px) 90vw, (max-width: 1533px) 45vw, 680px"
          />
        ) : (
          <Icon size={64} strokeWidth={1} aria-hidden="true" />
        )}
      </div>
      <div className="project-body">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="chip-row">
          {project.technologies.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
        <a className="text-link" href={project.url}>
          View repository <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}
