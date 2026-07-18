"use client";

import { useEffect, useState } from "react";
import PixelCharacter from "./PixelCharacter";
import Cloud from "./Cloud";

const FULL = "software engineer · fleet & mobility";

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(FULL.slice(0, i));
      if (i >= FULL.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-40 min-h-[85vh] flex items-center"
    >
      {/* Drifting clouds */}
      <div className="pointer-events-none absolute inset-0">
        <div className="drift-slow absolute top-[12%]">
          <Cloud size={96} />
        </div>
        <div className="drift-med absolute top-[26%]" style={{ opacity: 0.75 }}>
          <Cloud size={64} />
        </div>
        <div className="drift-fast absolute top-[40%]" style={{ opacity: 0.55 }}>
          <Cloud size={48} />
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start gap-8 px-6">
        <span className="font-pixel text-[10px] tracking-[0.25em] uppercase text-[var(--color-moss-dark)]">
          [ press start ]
        </span>

        <h1 className="font-pixel text-4xl leading-[1.15] tracking-tight text-[var(--color-ink)] sm:text-5xl md:text-6xl">
          hi, i&apos;m
          <br />
          <span className="text-[var(--color-moss-dark)]">moe wai.</span>
        </h1>

        <p className="font-mono text-2xl text-[var(--color-ink)] caret min-h-[2em]">
          {typed}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#work"
            className="pixel-shadow bg-[var(--color-moss)] px-6 py-3 font-pixel text-[11px] uppercase text-[var(--color-bg-soft)] transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px]"
          >
            view work
          </a>
          <a
            href="#contact"
            className="pixel-shadow bg-[var(--color-bg-soft)] px-6 py-3 font-pixel text-[11px] uppercase text-[var(--color-ink)] transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px]"
          >
            say hi
          </a>
        </div>
      </div>

      {/* Ground line + walking character */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="absolute bottom-16 left-6 float">
            <PixelCharacter size={96} />
          </div>
        </div>
        {/* Grass */}
        <div className="h-4 w-full bg-[var(--color-moss)]" />
        <div className="h-1 w-full bg-[var(--color-moss-dark)]" />
        <div className="h-8 w-full bg-[var(--color-moss-dark)]" style={{ opacity: 0.35 }} />
      </div>
    </section>
  );
}
