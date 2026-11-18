import { projects } from '@/data/portfolio';
import ProjectCard from './ProjectCard';
export default function Projects() { return <section className="page"><div className="section-kicker">04 / SELECTED WORK</div><h1>Built from<br/><em>an idea.</em></h1><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></section>; }
