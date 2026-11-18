"use client";

import Image from "next/image";
import { Flame } from "lucide-react";
import { useEffect, useRef } from "react";

// Coordinates in the illustration's 800 × 440 frame.
const mouth = { x: 196, y: 193 };
const duration = 1200;

function drawBreath(ctx: CanvasRenderingContext2D, elapsed: number) {
  ctx.clearRect(0, 0, 800, 440);
  const strength = Math.min(1, elapsed / 160, (duration - elapsed) / 360);
  ctx.save();
  ctx.translate(mouth.x, mouth.y);
  ctx.scale(strength, strength);
  ctx.globalCompositeOperation = "lighter";

  // Overlapping tongues grow apart as they travel beyond the snout.
  for (let i = 0; i < 34; i++) {
    const age = (elapsed / 570 + i / 34) % 1;
    const spread = Math.sin(i * 27.1) * age * 18;
    const x = -174 * age;
    const y = age * 34 + spread + Math.sin(age * 10 + i) * age * 6;
    const radius = 4 + 18 * Math.sin(Math.PI * age);
    const glow = ctx.createRadialGradient(x, y, 0, x, y, radius);
    glow.addColorStop(0, age < 0.45 ? "#fff0a5ee" : "#ff962dbb");
    glow.addColorStop(0.5, "#ff5e1288");
    glow.addColorStop(1, "#ff400000");
    ctx.fillStyle = glow;
    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }
  for (let i = 0; i < 10; i++) {
    const age = (elapsed / 850 + i / 10) % 1;
    ctx.fillStyle = `rgba(255,190,90,${1 - age})`;
    ctx.fillRect(-185 * age, age * (55 * Math.sin(i * 8) + 16), 3, 1.5);
  }
  ctx.restore();
}

export default function Dragon() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const frame = useRef(0);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => {
    cancelAnimationFrame(frame.current);
    clearTimeout(timeout.current);
  }, []);

  function breathe() {
    const ctx = canvas.current?.getContext("2d");
    if (!ctx) return;
    cancelAnimationFrame(frame.current);
    clearTimeout(timeout.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      drawBreath(ctx, 400);
      timeout.current = setTimeout(() => ctx.clearRect(0, 0, 800, 440), duration);
      return;
    }
    const start = performance.now();
    function animate(now: number) {
      if (!ctx) return;
      const elapsed = now - start;
      if (elapsed >= duration) {
        ctx.clearRect(0, 0, 800, 440);
        return;
      }
      drawBreath(ctx, elapsed);
      frame.current = requestAnimationFrame(animate);
    }
    frame.current = requestAnimationFrame(animate);
  }

  return <button className="sculpture dragon" type="button" onClick={breathe}
    aria-label="Make the origami dragon breathe fire">
    <span className="dragon-scene">
      <Image src="/images/origami-dragon.webp" alt="" width={1200} height={794}
        priority sizes="(max-width: 700px) 70vw, 36vw" />
      <canvas ref={canvas} width={800} height={440} aria-hidden="true" />
    </span>
    <span aria-hidden="true" className="cross tl" /><span aria-hidden="true" className="cross br" />
    <span className="dragon-action"><Flame size={15} /> Breathe fire</span>
  </button>;
}
