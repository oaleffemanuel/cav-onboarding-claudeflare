"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchIndex, type SearchEntry } from "@/data/educador";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

function scoreEntry(entry: SearchEntry, q: string): number {
  const haystack = `${entry.title} ${entry.section} ${entry.keywords}`.toLowerCase();
  const title = entry.title.toLowerCase();
  if (title === q) return 100;
  if (title.startsWith(q)) return 80;
  if (title.includes(q)) return 60;
  if (haystack.includes(q)) return 40;
  // token match
  const tokens = q.split(/\s+/).filter(Boolean);
  if (tokens.length > 1 && tokens.every((t) => haystack.includes(t))) return 30;
  return 0;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex.slice(0, 6);
    return searchIndex
      .map((e) => ({ e, s: scoreEntry(e, q) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map((r) => r.e);
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      // focus after paint
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  function go(entry?: SearchEntry) {
    const target = entry ?? results[active];
    if (!target) return;
    onClose();
    router.push(target.href);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Busca no portal"
    >
      <button
        type="button"
        aria-label="Fechar busca"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="animate-fade-up relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border px-4">
          <svg className="h-5 w-5 shrink-0 text-cav-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                go();
              } else if (e.key === "Escape") {
                onClose();
              }
            }}
            placeholder="Buscar páginas, rotinas, contatos…"
            className="w-full bg-transparent py-4 text-[15px] text-cav-gray-800 outline-none placeholder:text-cav-gray-400"
          />
          <kbd className="hidden shrink-0 rounded-md border border-border px-1.5 py-0.5 text-[11px] font-medium text-cav-gray-400 sm:block">
            esc
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-cav-gray-400">
              Nenhum resultado para “{query}”.
            </p>
          ) : (
            <ul>
              {results.map((entry, i) => (
                <li key={entry.href}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(entry)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                      i === active ? "bg-brand-blue-50" : "hover:bg-cav-gray-50"
                    }`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium text-cav-gray-800">
                        {entry.title}
                      </span>
                      <span className="block truncate text-xs text-cav-gray-400">
                        {entry.section}
                      </span>
                    </span>
                    <svg className="h-4 w-4 shrink-0 text-cav-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-4 border-t border-border bg-cav-gray-50 px-4 py-2.5 text-[11px] text-cav-gray-400">
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-surface px-1">↑</kbd>
            <kbd className="rounded border border-border bg-surface px-1">↓</kbd>
            navegar
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-surface px-1">↵</kbd>
            abrir
          </span>
        </div>
      </div>
    </div>
  );
}
