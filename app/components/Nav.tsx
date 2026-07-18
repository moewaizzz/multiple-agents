"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#blog", label: "blog" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled ? "bg-[var(--color-bg-soft)]/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="#home"
          className="font-pixel text-[11px] tracking-widest uppercase text-[var(--color-ink)] hover:text-[var(--color-moss-dark)]"
        >
          &gt; moe.wai
          <span className="blink ml-1 text-[var(--color-moss)]">_</span>
        </Link>
        <ul className="flex items-center gap-6 text-xl">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-mono text-[var(--color-ink)] hover:text-[var(--color-moss-dark)] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
