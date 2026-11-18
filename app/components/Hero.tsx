import BambooFountain from "./BambooFountain";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
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
      <BambooFountain />
    </section>
  );
}
