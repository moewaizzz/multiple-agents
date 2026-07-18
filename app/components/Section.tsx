import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, label, title, children }: Props) {
  return (
    <section id={id} className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-pixel text-[10px] tracking-[0.25em] uppercase text-[var(--color-moss-dark)]">
            {label}
          </span>
          <span className="h-[2px] flex-1 bg-[var(--color-ink)]" />
        </div>
        <h2 className="font-pixel text-2xl md:text-3xl mb-10 text-[var(--color-ink)]">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
