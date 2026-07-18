import Section from "./Section";
import { getAllPosts } from "../lib/posts";

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toISOString().slice(0, 10);
}

export default function Blog() {
  const posts = getAllPosts();

  return (
    <Section id="blog" label="// 03" title="devlog">
      {posts.length === 0 ? (
        <p className="font-mono text-xl text-[var(--color-ink)]">
          no posts yet. check back soon.
        </p>
      ) : (
        <ul className="grid gap-6">
          {posts.map((p) => (
            <li key={p.slug}>
              <a
                href={`/blog/${p.slug}`}
                className="group block pixel-border pixel-shadow bg-[var(--color-bg-soft)] p-6 transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-pixel text-[9px] uppercase tracking-widest text-[var(--color-moss-dark)]">
                    {formatDate(p.date)}
                  </span>
                  <span className="font-pixel text-[9px] uppercase text-[var(--color-shadow)] group-hover:text-[var(--color-ink)]">
                    read ▸
                  </span>
                </div>
                <h3 className="font-pixel text-xl mb-3 text-[var(--color-ink)]">
                  {p.title}
                </h3>
                <p className="font-mono text-xl leading-snug text-[var(--color-ink)]">
                  {p.excerpt}
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
