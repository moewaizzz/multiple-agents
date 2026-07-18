import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

const POSTS_DIR = join(process.cwd(), "posts");

function parseFrontmatter(source: string): Record<string, string> {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return data;
}

export function getAllPosts(): Post[] {
  const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const source = readFileSync(join(POSTS_DIR, file), "utf8");
    const fm = parseFrontmatter(source);
    return {
      slug: file.replace(/\.mdx$/, ""),
      title: fm.title ?? file,
      date: fm.date ?? "",
      excerpt: fm.excerpt ?? "",
    };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
