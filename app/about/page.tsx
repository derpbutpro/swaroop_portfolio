import Link from "next/link";
import { conversationStarters } from "@/data/portfolio";
import About from "../components/About";

export default function AboutPage() {
  return (
    <>
      <About />
      <section className="conversation" aria-labelledby="conversation-title">
        <header>
          <h2 id="conversation-title">Talk to me <em>about…</em></h2>
          <Link className="text-link" href="/contact">Get in touch ↗</Link>
        </header>
        <dl>
          {conversationStarters.map(({ topic, prompt }) => (
            <div key={topic}>
              <dt>{topic}</dt>
              <dd>{prompt}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
