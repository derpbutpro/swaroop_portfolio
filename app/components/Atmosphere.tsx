"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import styles from "./Atmosphere.module.css";

type Point = { x: number; y: number; time: number };
type Spark = Point & { dx: number; dy: number };
const fadeTime = 560;

export default function Atmosphere() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const surface = canvas.current;
    const light = glow.current;
    if (!surface || !light) return;

    const ctx = surface.getContext("2d");
    if (!ctx) return;

    const preference = matchMedia("(any-pointer: fine) and (prefers-reduced-motion: no-preference)");
    let points: Point[] = [];
    let sparks: Spark[] = [];
    let frame = 0;
    let lastSpark = 0;

    function clear() {
      cancelAnimationFrame(frame);
      frame = 0;
      points = [];
      sparks = [];
      light!.style.opacity = "0";
      ctx!.clearRect(0, 0, innerWidth, innerHeight);
    }
    function resize() {
      // Limit the backing buffer on high density displays.
      const scale = Math.min(devicePixelRatio, 1.5);
      surface!.width = Math.round(innerWidth * scale);
      surface!.height = Math.round(innerHeight * scale);
      ctx!.setTransform(scale, 0, 0, scale, 0, 0);
      clear();
    }

    const draw = (now: number) => {
      frame = 0;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      points = points.filter(p => now - p.time < fadeTime);
      sparks = sparks.filter(p => now - p.time < fadeTime);
      ctx.lineCap = "round";
      ctx.shadowColor = "#ff974c";
      ctx.shadowBlur = 4;
      let remaining = 70;
      for (let i = points.length - 1; i > 0 && remaining > 0; i--) {
        const tip = points[i], tail = points[i - 1];
        const length = Math.hypot(tail.x - tip.x, tail.y - tip.y);
        if (!length) continue;
        const fraction = Math.min(1, remaining / length);
        const alpha = (1 - (now - tip.time) / fadeTime) * remaining / 70;
        ctx.strokeStyle = `rgba(255,157,77,${0.53 * alpha})`;
        ctx.lineWidth = 1 + alpha * 2;
        ctx.beginPath();
        ctx.moveTo(tip.x, tip.y);
        ctx.lineTo(tip.x + (tail.x - tip.x) * fraction, tip.y + (tail.y - tip.y) * fraction);
        ctx.stroke();
        remaining -= length;
      }
      ctx.shadowBlur = 0;
      for (const spark of sparks) {
        const age = (now - spark.time) / fadeTime;
        ctx.fillStyle = `rgba(255,174,108,${0.65 * (1 - age)})`;
        ctx.beginPath();
        ctx.arc(spark.x + spark.dx * age, spark.y + spark.dy * age, 1.6 - age, 0, Math.PI * 2);
        ctx.fill();
      }
      if (points.length || sparks.length) frame = requestAnimationFrame(draw);
    };

    function move(event: PointerEvent) {
      if (event.pointerType !== "mouse") { clear(); return; }
      const x = event.clientX, y = event.clientY, time = performance.now();
      light!.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      light!.style.opacity = "1";
      const prev = points.at(-1);
      if (prev && Math.hypot(x - prev.x, y - prev.y) > 120) points = [];
      points.push({ x, y, time });
      if (points.length > 40) points.shift();
      if (time - lastSpark > 35) {
        lastSpark = time;
        sparks.push({ x, y, time, dx: (Math.random() - 0.5) * 24, dy: -6 - Math.random() * 18 });
      }
      if (!frame) frame = requestAnimationFrame(draw);
    }
    function configure() {
      window.removeEventListener("pointermove", move);
      clear();
      if (preference.matches && !document.hidden) {
        resize();
        window.addEventListener("pointermove", move, { passive: true });
      }
    }
    configure();
    window.addEventListener("resize", configure);
    document.addEventListener("visibilitychange", configure);
    document.documentElement.addEventListener("pointerleave", clear);
    window.addEventListener("blur", clear);
    preference.addEventListener("change", configure);
    return () => {
      clear();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("resize", configure);
      document.removeEventListener("visibilitychange", configure);
      document.documentElement.removeEventListener("pointerleave", clear);
      window.removeEventListener("blur", clear);
      preference.removeEventListener("change", configure);
    };
  }, []);

  return (
    <>
      <div className={styles.background} aria-hidden="true">
        <div className={styles.aurora} />
        <div className={styles.grid} />
        <svg className={styles.trails} viewBox="0 0 1440 900" preserveAspectRatio="none">
          <defs>
            <linearGradient id="copper-thread">
              <stop stopColor="#ce7642" stopOpacity="0" />
              <stop offset=".32" stopColor="#e29a64" stopOpacity=".36" />
              <stop offset=".7" stopColor="#c77647" stopOpacity=".17" />
              <stop offset="1" stopColor="#ca784d" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#copper-thread)" strokeWidth=".8">
            <path d="M-80 300 C240 70 455 540 834 290 S1250 84 1510 194" />
            <path d="M-80 309 C240 73 455 548 836 300 S1250 88 1510 210" />
            <path d="M-60 820 C380 560 610 932 930 662 S1270 440 1520 460" />
          </g>
        </svg>
        {Array.from({ length: 17 }, (_, i) => (
          <i key={i} className={styles.ember} style={{
            left: `${(i * 41 + 3) % 100}%`,
            animationDuration: `${18 + i % 9}s`,
            animationDelay: `-${(i * 7 + 3) % (18 + i % 9)}s`,
            "--drift": `${i % 2 ? 19 : -26}px`,
          } as CSSProperties} />
        ))}
      </div>
      <div aria-hidden="true" ref={glow} className={styles.glow} />
      <canvas aria-hidden="true" ref={canvas} className={styles.comet} />
    </>
  );
}
