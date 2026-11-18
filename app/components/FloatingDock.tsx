"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  CircleUserRound,
  Headphones,
  Orbit,
  PanelsTopLeft,
  Mail,
} from "lucide-react";
import { pages } from "@/data/portfolio";
const icons = [House, CircleUserRound, Headphones, Orbit, PanelsTopLeft, Mail];
export default function FloatingDock() {
  const path = usePathname();
  return (
    <nav className="dock" aria-label="Portfolio pages">
      {pages.map((p, i) => {
        const Icon = icons[i];
        return (
          <Link
            key={p.href}
            href={p.href}
            aria-label={p.label}
            title={p.label}
            aria-current={path === p.href ? "page" : undefined}
          >
            <Icon size={21} strokeWidth={1.6} />
            <span>{p.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
