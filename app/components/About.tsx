import Section from "./Section";

const stats = [
  { k: "based in", v: "yangon / hcmc" },
  { k: "focus", v: "fleet · leasing · telematics" },
  { k: "stack", v: "typescript · aws · terraform" },
  { k: "currently", v: "@ yoma fleet" },
];

export default function About() {
  return (
    <Section id="about" label="// 01" title="about.txt">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        {/* Pixel avatar card */}
        <div className="pixel-border pixel-shadow bg-[var(--color-bg-soft)] p-4 w-fit">
          <svg
            viewBox="0 0 16 16"
            width={160}
            height={160}
            shapeRendering="crispEdges"
            style={{ imageRendering: "pixelated" }}
          >
            <rect width="16" height="16" fill="#ece7d3" />
            <rect x="4" y="2" width="8" height="1" fill="#1a1a1a" />
            <rect x="3" y="3" width="10" height="1" fill="#1a1a1a" />
            <rect x="3" y="4" width="10" height="4" fill="#e9c78a" />
            <rect x="3" y="4" width="10" height="1" fill="#1a1a1a" />
            <rect x="5" y="6" width="1" height="1" fill="#1a1a1a" />
            <rect x="10" y="6" width="1" height="1" fill="#1a1a1a" />
            <rect x="7" y="8" width="2" height="1" fill="#d9b64e" />
            <rect x="3" y="9" width="10" height="5" fill="#6b8e4e" />
            <rect x="3" y="9" width="10" height="1" fill="#3d5a30" />
            <rect x="7" y="11" width="2" height="1" fill="#d9b64e" />
          </svg>
        </div>

        <div className="space-y-6">
          <p className="font-mono text-2xl leading-relaxed">
            i build software for fleets and the humans who run them. mostly typescript,
            some go, plenty of infra. i like small tools that do one thing well and
            interfaces that don&apos;t make you think.
          </p>
          <p className="font-mono text-xl text-[var(--color-shadow)]">
            outside work: pixel art, motorbikes, and the occasional side quest.
          </p>

          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-4">
            {stats.map((s) => (
              <div key={s.k} className="flex items-baseline gap-3">
                <dt className="font-pixel text-[9px] uppercase tracking-widest text-[var(--color-moss-dark)] w-24">
                  {s.k}
                </dt>
                <dd className="font-mono text-xl">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
