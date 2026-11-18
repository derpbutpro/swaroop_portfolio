import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { conversationStarters } from "@/data/portfolio";
import About from "../components/About";

export default function AboutPage() {
  return (
    <>
      <About />
      <section className="conversation" aria-labelledby="conversation-title">
        <div>
          <header>
            <h2 id="conversation-title">Talk to me <em>about…</em></h2>
            <Link className="text-link" href="/contact">Get in touch ↗</Link>
          </header>
          <details className="role-model">
            <summary>
              <Image src="/images/luffy.webp" alt="" width={72} height={72} />
              <span>
                <small>My role model</small>
                <strong>Monkey D. Luffy</strong>
                <span>What freedom means to him</span>
              </span>
              <ChevronDown size={18} aria-hidden="true" />
            </summary>
            <div className="role-model-story">
              <p>
                Luffy wants to be King of the Pirates because he thinks that person is the
                freest on the sea. He wants to wake up aboard the Sunny, pick an island
                with his friends, and see what’s there.
              </p>
              <p>
                What I admire most is how seriously he takes everyone else’s freedom, too.
                When Robin finally says she wants to live, Luffy takes her at her word
                and stands beside her against the World Government. That’s the kind of
                friend I’d like to be.
              </p>
            </div>
          </details>
        </div>
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
