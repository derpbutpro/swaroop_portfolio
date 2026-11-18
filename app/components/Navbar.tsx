import Link from 'next/link';
import { profile } from '@/data/portfolio';
export default function Navbar() { return <header className="navbar"><Link className="wordmark" href="/">{profile.name}<span>.</span></Link><nav aria-label="Primary navigation"><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></nav></header>; }
