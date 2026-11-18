import Link from 'next/link';
import { pages } from '@/data/portfolio';
export default function FloatingDock() { return <nav className="dock" aria-label="Section pages">{pages.map(page => <Link key={page.href} href={page.href} aria-label={page.label} title={page.label}><span aria-hidden="true">{page.icon}</span><span className="dock-label">{page.label}</span></Link>)}</nav>; }
