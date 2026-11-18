import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

export default function Hero() {
  return (
    <>
      <section className="hero-stage" id="home">
        <div className="stage-copy">
          <p className="eyebrow">
            <i /> Developer &amp; creator
          </p>
          <h1>
            Swaroop
            <br />
            <em>
              Bevinal<span>.</span>
            </em>
          </h1>
          <p className="intro">{profile.intro}</p>
          <div className="actions">
            <Link className="button primary" href="/projects">
              View my work <ArrowUpRight size={17} />
            </Link>
            <Link className="button" href="/contact">
              Contact me <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <figure className="sculpture">
          <Image
            src="/images/copper-knot.webp"
            alt="An intertwined loop of ribbed copper"
            width={1000}
            height={1000}
            priority
            sizes="(max-width: 700px) 90vw, 48vw"
          />
          <div className="cross tl" />
          <div className="cross br" />
        </figure>
      </section>
      <section className="selected">
        <header>
          <h2>
            Selected work<span>.</span>
          </h2>
          <Link className="text-link" href="/projects">
            All projects ↗
          </Link>
        </header>
        <div className="project-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
