export function HeroGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid bg-[length:56px_56px] opacity-[0.4] dark:opacity-[0.15]" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-400/8" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-surface dark:from-slate-950 dark:via-slate-950/90 dark:to-surface-dark" />
    </div>
  );
}
