export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-[var(--color-ink)] mt-10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <span className="font-pixel text-[9px] uppercase tracking-widest text-[var(--color-shadow)]">
          © {year} moe wai · built with next.js
        </span>
        <span className="font-pixel text-[9px] uppercase tracking-widest text-[var(--color-moss-dark)]">
          game over<span className="blink ml-1">_</span>
        </span>
      </div>
    </footer>
  );
}
