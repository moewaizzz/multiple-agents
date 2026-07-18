import Section from "./Section";

const links = [
  { label: "email", href: "mailto:moewai@yomafleet.com", handle: "moewai@yomafleet.com" },
  { label: "github", href: "https://github.com/", handle: "github.com/moewai" },
  { label: "linkedin", href: "https://linkedin.com/", handle: "linkedin.com/in/moewai" },
];

export default function Contact() {
  return (
    <Section id="contact" label="// 03" title="get in touch">
      <div className="grid gap-10 md:grid-cols-[auto_1fr] items-start">
        {/* Pixel envelope */}
        <div className="pixel-border pixel-shadow bg-[var(--color-bg-soft)] p-4 w-fit float">
          <svg
            viewBox="0 0 16 12"
            width={160}
            height={120}
            shapeRendering="crispEdges"
            style={{ imageRendering: "pixelated" }}
          >
            <rect x="1" y="2" width="14" height="9" fill="#f4efdc" />
            <rect x="1" y="2" width="14" height="1" fill="#1a1a1a" />
            <rect x="1" y="10" width="14" height="1" fill="#1a1a1a" />
            <rect x="1" y="2" width="1" height="9" fill="#1a1a1a" />
            <rect x="14" y="2" width="1" height="9" fill="#1a1a1a" />
            {/* flap */}
            <rect x="2" y="3" width="12" height="1" fill="#6b8e4e" />
            <rect x="3" y="4" width="10" height="1" fill="#6b8e4e" />
            <rect x="4" y="5" width="8" height="1" fill="#6b8e4e" />
            <rect x="5" y="6" width="6" height="1" fill="#6b8e4e" />
            <rect x="6" y="7" width="4" height="1" fill="#6b8e4e" />
            <rect x="7" y="8" width="2" height="1" fill="#3d5a30" />
          </svg>
        </div>

        <div className="space-y-4">
          <p className="font-mono text-2xl leading-relaxed max-w-lg">
            open to interesting problems in fleet, mobility, and small tools.
            drop a line if that sounds like you.
          </p>
          <ul className="pt-4 divide-y-2 divide-[var(--color-ink)] border-y-2 border-[var(--color-ink)]">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 hover:bg-[var(--color-bg-soft)] px-2 -mx-2"
                >
                  <span className="font-pixel text-[10px] uppercase tracking-widest text-[var(--color-moss-dark)]">
                    {l.label}
                  </span>
                  <span className="font-mono text-xl group-hover:text-[var(--color-moss-dark)]">
                    {l.handle} <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
