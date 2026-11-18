import Link from "next/link";
import { profile } from "@/data/portfolio";
export default function Navbar() {
  return (
    <header className="navbar">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Link className="wordmark" href="/">
        <span className="monogram" aria-hidden="true">
          sb.
        </span>
        {profile.name}
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact ↗</Link>
      </nav>
    </header>
  );
}
