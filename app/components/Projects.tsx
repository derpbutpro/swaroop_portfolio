import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import TicTacToe from "./TicTacToe";

export default function Projects() {
  return (
    <section id="projects" className="page">
      <h1>
        My <em>projects.</em>
      </h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <TicTacToe />
    </section>
  );
}
