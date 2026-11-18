"use client";

import { Pause, Play } from "lucide-react";
import { useState } from "react";
import styles from "./BambooFountain.module.css";

export default function BambooFountain() {
  const [paused, setPaused] = useState(false);
  const Icon = paused ? Play : Pause;

  return (
    <figure className={styles.garden} data-paused={paused}>
      <svg viewBox="0 0 520 380" role="img" aria-labelledby="garden-title">
        <title id="garden-title">A Japanese bamboo fountain tips water into a stone basin</title>
        <defs>
          <linearGradient id="garden-sky" x2="0.8" y2="1">
            <stop stopColor="#393d37" /><stop offset=".55" stopColor="#222d2a" /><stop offset="1" stopColor="#142124" />
          </linearGradient>
          <linearGradient id="garden-sun" x2="0" y2="1">
            <stop stopColor="#ffcd8c" /><stop offset="1" stopColor="#d98054" />
          </linearGradient>
          <linearGradient id="garden-reed" x2="0" y2="1">
            <stop stopColor="#ede0a1" /><stop offset=".22" stopColor="#c0ba76" /><stop offset=".58" stopColor="#91945c" /><stop offset="1" stopColor="#4e603e" />
          </linearGradient>
          <linearGradient id="garden-stone" x2=".4" y2="1">
            <stop stopColor="#718071" /><stop offset=".44" stopColor="#43534e" /><stop offset="1" stopColor="#293b37" />
          </linearGradient>
          <g id="garden-leaves" fill="currentColor">
            <path d="M0 0 Q26 -22 66 -30 Q43 -9 0 0 M19 -10 Q31 -32 41 -43 Q38 -22 19 -10 M36 -17 Q62 -20 79 -13 Q52 -11 36 -17 M7 -3 Q21 4 34 20 Q14 13 7 -3" />
          </g>
        </defs>
        <rect width="520" height="380" fill="url(#garden-sky)" />
        <circle cx="145" cy="114" r="61" fill="url(#garden-sun)" />
        <path d="M0 187 Q50 165 98 177 T183 153 Q199 143 208 146 Q230 125 246 133 L303 161 Q342 178 387 160 T520 150 V380 H0Z" fill="#46524a" />
        <path d="M0 205 Q41 186 78 194 Q112 199 153 179 Q180 162 210 170 Q254 181 284 169 Q319 156 353 171 T429 178 L520 143 V380 H0Z" fill="#33453f" />
        <path d="M0 222 Q65 182 119 207 T247 205 Q290 186 330 200 T427 195 L520 162 V380 H0Z" fill="#253a34" />
        <g fill="none" stroke="#81957a" opacity=".23" strokeLinecap="round">
          <path d="M24 195h67m15 0h21m69-26h49m21 10h35M77 210h94m18-2h31" />
        </g>
        <g fill="none" stroke="#172c24" strokeWidth="5">
          <path d="M4 213Q38 113 25 -12 M-14 169Q59 83 80 -15" />
        </g>
        <g color="#22372c">
          <use href="#garden-leaves" transform="translate(28 52) rotate(18)" />
          <use href="#garden-leaves" transform="translate(21 103) rotate(42)" />
          <use href="#garden-leaves" transform="translate(60 39) rotate(12) scale(.85)" />
          <use href="#garden-leaves" transform="translate(10 148) rotate(-5) scale(.7)" />
        </g>
        <path d="M0 325 Q86 276 169 300 T325 292 Q400 263 520 287 V380 H0Z" fill="#1d302d" />
        <ellipse cx="345" cy="344" rx="121" ry="13" fill="#13221f" />
        <path d="M239 311 Q251 294 282 288 Q339 277 406 289 Q441 295 448 309 L434 333 Q423 346 375 349 Q304 353 262 339Z" fill="url(#garden-stone)" />
        <ellipse cx="346" cy="307" rx="99" ry="21" fill="#889485" />
        <ellipse cx="346" cy="308" rx="85" ry="14" fill="#253e3b" />
        <g fill="none" stroke="#c2eade" strokeWidth="1.4">
          <ellipse className={styles.ripple} cx="368" cy="308" rx="29" ry="5" />
        </g>
        <g transform="translate(429 40)" fill="url(#garden-reed)">
          <path d="M0 -50H16L12 240H-2Z" fill="#687451"/>
          <path d="M-1 15h17m-18 68h16m-16 69h15" stroke="#344936" strokeWidth="4" />
        </g>
        <g transform="translate(341 132) rotate(-17)">
          <path d="M0 -9 H199 V9 H0Z" fill="url(#garden-reed)" />
          <path d="M10 -8H179" stroke="#f1d7a3" strokeOpacity=".7" />
          <path d="M48 -9v18m61 -18v18m57 -18v18" stroke="#5f6744" strokeWidth="4" />
          <ellipse rx="5" ry="9" fill="#d6ca8a"/><ellipse rx="3" ry="6" fill="#4b4e35" />
        </g>
        <path className={styles.inlet} d="M341 134 Q346 141 346 156 V221" fill="none" stroke="#a8e5d8" strokeWidth="3" strokeLinecap="round"/>
        <path d="M266 251h13l-1 63-13 2Z" fill="#777e50" />
        <g className={styles.rocker}>
          <path d="M174 240 L369 240 L354 258 L174 258Z" fill="url(#garden-reed)" />
          <path d="M180 243h156" stroke="#ddcb8c" strokeWidth="2" />
          <path d="M207 240v18m55 -18v18m57 -18v18" stroke="#5a6241" strokeWidth="4" />
          <path d="M350 256l17-15-6 13Z" fill="#3a4435" />
        </g>
        <path className={styles.outlet} d="M361 273 Q370 279 368 307" fill="none" stroke="#b6ede2" strokeWidth="4" strokeLinecap="round" />
        <path d="M272 248q7-7 14 0l-1 71-14 2Z" fill="#909360" />
        <circle cx="279" cy="249" r="4" fill="#453b2e" />
        <path d="M270 286h16" stroke="#4a573d" strokeWidth="3" />
        <path d="M123 321q8-13 21-14l13 3 12 12-17 5Z" fill="#556258" />
        <path d="M91 332q4-8 19-10l11 7-6 4Z" fill="#394d44" />
      </svg>
      <button type="button" className={styles.toggle} onClick={() => setPaused(!paused)}
        aria-label={paused ? "Resume bamboo fountain" : "Pause bamboo fountain"}>
        <Icon size={15} aria-hidden="true" />
      </button>
    </figure>
  );
}
