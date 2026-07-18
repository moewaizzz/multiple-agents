import Section from "./Section";

type Project = {
  name: string;
  tag: string;
  blurb: string;
  stack: string[];
  href?: string;
};

const projects: Project[] = [
  {
    name: "car share",
    tag: "// yoma fleet",
    blurb:
      "self-service car sharing app with keyless entry, live telematics, and dynamic pricing.",
    stack: ["next.js", "aws", "terraform"],
    href: "#",
  },
  {
    name: "easy lease",
    tag: "// yoma fleet",
    blurb:
      "leasing portal for corporate customers. credit workflow, contracts, driver ops.",
    stack: ["typescript", "postgres", "next.js"],
    href: "#",
  },
  {
    name: "innosights",
    tag: "// data",
    blurb:
      "telematics analytics: driver behavior, utilization, and cost-per-km dashboards.",
    stack: ["python", "dbt", "quicksight"],
    href: "#",
  },
  {
    name: "pixel devlog",
    tag: "// side quest",
    blurb: "a tiny cms for retro-styled devlogs. static export, markdown, and vibes.",
    stack: ["next.js", "mdx"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <Section id="work" label="// 02" title="selected work">
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.name}>
            <a
              href={p.href ?? "#"}
              className="group block pixel-border pixel-shadow bg-[var(--color-bg-soft)] p-6 transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-pixel text-[9px] uppercase tracking-widest text-[var(--color-moss-dark)]">
                  {p.tag}
                </span>
                <span className="font-pixel text-[9px] uppercase text-[var(--color-shadow)] group-hover:text-[var(--color-ink)]">
                  open ▸
                </span>
              </div>
              <h3 className="font-pixel text-xl mb-3 text-[var(--color-ink)]">
                {p.name}
              </h3>
              <p className="font-mono text-xl leading-snug text-[var(--color-ink)]">
                {p.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-pixel text-[9px] uppercase px-2 py-1 bg-[var(--color-bg)] text-[var(--color-moss-dark)] border border-[var(--color-ink)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
