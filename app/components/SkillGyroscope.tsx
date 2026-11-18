"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { skills } from "@/data/portfolio";

const tools = [
  { name: "Antigravity", x: 0, y: -34 },
  { name: "ChatGPT", x: -47, y: 40 },
  { name: "Claude", x: 46, y: 39 },
];
const tones = ["#ffb178", "#d4afff", "#f4d581", "#89c9c2", "#aec4ed"];
const radius = 183;

function Orb({
  name,
  color,
  size,
}: {
  name: string;
  color: string;
  size: number;
}) {
  const label = useRef<SVGTextElement>(null);
  const [orbRadius, setOrbRadius] = useState(
    Math.max(size * 1.4, name.length * size * 0.29 + 9),
  );

  useEffect(() => {
    let mounted = true;
    const measure = () => {
      if (mounted && label.current) {
        setOrbRadius(
          Math.max(size * 1.4, label.current.getComputedTextLength() / 2 + 9),
        );
      }
    };
    measure();
    document.fonts.ready.then(measure);
    return () => {
      mounted = false;
    };
  }, [name, size]);

  return (
    <g>
      <circle r={orbRadius} fill="#17191d" fillOpacity=".78" />
      <circle r={orbRadius} fill={color} fillOpacity=".16" />
      <circle
        r={orbRadius}
        fill="url(#orb-glass)"
        stroke={color}
        strokeOpacity=".76"
      />
      <text
        ref={label}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#fff8ef"
        fontSize={size}
        fontWeight="600"
      >
        {name}
      </text>
    </g>
  );
}

export default function SkillGyroscope() {
  const scene = useRef<SVGSVGElement>(null);
  const aim = useRef({ x: 0, y: 0 });
  const phase = useRef(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const svg = scene.current;
    if (!svg) return;
    const nodes = svg.querySelectorAll<SVGGElement>("[data-satellite]");
    const rings = svg.querySelectorAll<SVGEllipseElement>("[data-ring]");
    const outer = svg.querySelector<SVGEllipseElement>("[data-track]");
    let frame = 0;
    let previous = 0;
    let x = 0,
      y = 0;
    function render(now: number) {
      const dt = previous ? Math.min(now - previous, 50) : 0;
      previous = now;
      if (!paused && !reduced) phase.current += dt * 0.00019;
      const follow = reduced ? 1 : 1 - Math.exp(-dt / 110);
      x += (aim.current.x - x) * follow;
      y += (aim.current.y - y) * follow;
      const t = phase.current;
      const angle = 0.12 * Math.sin(t) + x * 0.16;
      const height = radius * (0.91 + y * 0.045);
      outer?.setAttribute("ry", String(height));
      outer?.setAttribute("transform", `rotate(${(angle * 180) / Math.PI})`);
      nodes.forEach((node, i) => {
        const a = t + x * 0.36 + (i * 2 * Math.PI) / nodes.length - Math.PI / 2;
        const dx = radius * Math.cos(a),
          dy = height * Math.sin(a);
        node.setAttribute(
          "transform",
          `translate(${dx * Math.cos(angle) - dy * Math.sin(angle)} ${dx * Math.sin(angle) + dy * Math.cos(angle)})`,
        );
      });
      rings.forEach((ring, i) => {
        ring.setAttribute(
          "ry",
          String(30 + 68 * (0.5 + 0.5 * Math.sin(t * 1.6 + i + y))),
        );
        ring.setAttribute(
          "transform",
          `rotate(${i * 59 + t * 34 + x * 31 + y * 12})`,
        );
      });
      if (!paused && !reduced) frame = requestAnimationFrame(render);
    }
    render(performance.now());
    return () => cancelAnimationFrame(frame);
  }, [paused, reduced]);

  return (
    <div className="orbit">
      <svg
        ref={scene}
        viewBox="-250 -238 500 476"
        role="img"
        aria-labelledby="gyro-title gyro-description"
        onPointerMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          aim.current = {
            x: (2 * (event.clientX - bounds.left)) / bounds.width - 1,
            y: (2 * (event.clientY - bounds.top)) / bounds.height - 1,
          };
        }}
        onPointerLeave={() => {
          aim.current = { x: 0, y: 0 };
        }}
      >
        <title id="gyro-title">Skills gyroscope</title>
        <desc id="gyro-description">
          {skills.map((s) => s.name).join(", ")} orbit the AI tools Antigravity,
          ChatGPT and Claude.
        </desc>
        <defs>
          <radialGradient id="orb-glass" cx=".28" cy=".18" r=".95">
            <stop stopColor="#fff" stopOpacity=".35" />
            <stop offset=".3" stopColor="#fff" stopOpacity=".06" />
            <stop offset=".75" stopColor="#090a10" stopOpacity=".18" />
            <stop offset="1" stopColor="#ffe2c2" stopOpacity=".14" />
          </radialGradient>
        </defs>
        <circle r="207" fill="none" stroke="#61524a" strokeDasharray="1 9" />
        <ellipse
          data-track=""
          rx={radius}
          ry="166"
          fill="none"
          stroke="#b67b51"
          strokeOpacity=".64"
        />
        {[0, 1, 2].map((i) => (
          <ellipse
            key={i}
            data-ring=""
            rx={158 - i * 5}
            ry={52 + i * 10}
            transform={`rotate(${i * 59})`}
            fill="none"
            stroke={i === 1 ? "#f3c199" : "#a18170"}
            strokeOpacity=".6"
            strokeWidth={i === 1 ? 2 : 1.25}
          />
        ))}
        <text
          y="-109"
          textAnchor="middle"
          fill="#ffd1aa"
          fontSize="15"
          letterSpacing="2"
        >
          AI TOOLS
        </text>
        {tools.map((tool) => (
          <g key={tool.name} transform={`translate(${tool.x} ${tool.y})`}>
            <Orb name={tool.name} color="#e8ad7d" size={15} />
          </g>
        ))}
        {skills.map((skill, i) => {
          const a = (i * 2 * Math.PI) / skills.length - Math.PI / 2;
          return (
            <g
              key={skill.name}
              data-satellite=""
              transform={`translate(${radius * Math.cos(a)} ${166 * Math.sin(a)})`}
            >
              <Orb
                name={skill.name}
                color={tones[i % tones.length]}
                size={18}
              />
            </g>
          );
        })}
      </svg>
      {!reduced && (
        <button
          type="button"
          className="gyro-toggle"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Resume gyroscope" : "Pause gyroscope"}
        >
          {paused ? <Play size={16} /> : <Pause size={16} />}
        </button>
      )}
    </div>
  );
}
