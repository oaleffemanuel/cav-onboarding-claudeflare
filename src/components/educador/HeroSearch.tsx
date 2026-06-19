"use client";

const suggestions = ["Comece Aqui", "Ponto", "Preceptoria", "Contatos", "LGPD"];

export default function HeroSearch() {
  const open = () => window.dispatchEvent(new Event("educador:search"));

  return (
    <div className="mx-auto mt-9 w-full max-w-xl">
      <button
        type="button"
        onClick={open}
        className="group flex w-full items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 text-left shadow-[0_2px_12px_rgba(16,24,40,0.06)] transition-all duration-200 hover:border-brand-blue/40 hover:shadow-[0_6px_20px_rgba(16,24,40,0.10)]"
      >
        <svg className="h-5 w-5 shrink-0 text-cav-gray-400 transition-colors group-hover:text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
        </svg>
        <span className="flex-1 text-[15px] text-cav-gray-400">
          Buscar orientações, rotinas, contatos…
        </span>
        <kbd className="hidden rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-cav-gray-400 sm:inline">
          ⌘K
        </kbd>
      </button>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs text-cav-gray-400">Sugestões:</span>
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={open}
            className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-cav-gray-600 transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
