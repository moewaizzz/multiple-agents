"use client";

import { useCallback, useEffect, useState } from "react";
import Section from "./Section";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "moe shipped our car share telematics stack faster than i thought possible. calm under pressure and picky about the right things.",
    name: "eng lead",
    role: "yoma fleet · car share",
  },
  {
    quote:
      "rare mix of infra fluency and product taste. our leasing portal went from prototype to production without the usual scar tissue.",
    name: "product manager",
    role: "yoma fleet · easy lease",
  },
  {
    quote:
      "the dashboards actually answered the questions the ops team was asking. cost-per-km is finally a real number we trust.",
    name: "ops director",
    role: "yoma fleet · innosights",
  },
  {
    quote:
      "reviews are sharp, kind, and specific. i learn something every time a pr comes back from him.",
    name: "senior engineer",
    role: "platform team",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (n: number) => setIndex(((n % count) + count) % count),
    [count],
  );
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, 6000);
    return () => window.clearInterval(id);
  }, [next, paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const current = testimonials[index];

  return (
    <Section id="testimonials" label="// 02" title="kind words.log">
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className="pixel-border pixel-shadow-lg bg-[var(--color-bg-soft)] p-8 md:p-10"
          role="region"
          aria-roledescription="carousel"
          aria-label="testimonials"
          aria-live="polite"
        >
          <span
            aria-hidden
            className="font-pixel text-3xl md:text-4xl text-[var(--color-moss-dark)] block leading-none mb-4"
          >
            &ldquo;
          </span>
          <p className="font-mono text-2xl leading-relaxed text-[var(--color-ink)] min-h-[7.5rem] md:min-h-[6rem]">
            {current.quote}
          </p>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-pixel text-[10px] uppercase tracking-widest text-[var(--color-moss-dark)]">
              {current.name}
            </span>
            <span className="h-[2px] w-6 bg-[var(--color-ink)]" />
            <span className="font-mono text-lg text-[var(--color-shadow)]">
              {current.role}
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="previous testimonial"
              className="pixel-border bg-[var(--color-bg-soft)] px-3 py-2 font-pixel text-[10px] uppercase tracking-widest text-[var(--color-ink)] hover:bg-[var(--color-sun)] transition-colors"
            >
              ◂ prev
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="next testimonial"
              className="pixel-border bg-[var(--color-bg-soft)] px-3 py-2 font-pixel text-[10px] uppercase tracking-widest text-[var(--color-ink)] hover:bg-[var(--color-sun)] transition-colors"
            >
              next ▸
            </button>
          </div>

          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="select testimonial"
          >
            {testimonials.map((t, i) => {
              const active = i === index;
              return (
                <button
                  key={t.name + i}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`show testimonial ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-3 w-3 border-2 border-[var(--color-ink)] transition-colors ${
                    active
                      ? "bg-[var(--color-moss)]"
                      : "bg-[var(--color-bg)] hover:bg-[var(--color-sun)]"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
