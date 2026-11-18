import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import FloatingDock from './components/FloatingDock';
import Footer from './components/Footer';
export const metadata: Metadata = { title: 'Swaroop Bevinal | Creative Developer', description: 'Projects, skills, and creative work by Swaroop Bevinal.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar /><main id="main">{children}</main><Footer /><FloatingDock /></body></html>;
}
