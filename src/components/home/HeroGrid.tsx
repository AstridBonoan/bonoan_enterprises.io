export function HeroGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid opacity-[0.35] dark:opacity-[0.2]" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-400/15" />
      <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-400/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white dark:from-slate-950/50 dark:to-slate-950" />
    </div>
  );
}
