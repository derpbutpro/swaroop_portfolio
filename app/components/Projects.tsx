import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <section id="projects" className="page">
      <h1>
        Selected <em>work.</em>
      </h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
