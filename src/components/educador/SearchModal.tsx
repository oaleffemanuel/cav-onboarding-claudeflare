"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { Search, ArrowRight, ExternalLink, CornerDownLeft } from "lucide-react";
import { searchIndex, type SearchEntry } from "@/data/educador";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

type Range = readonly [number, number];
type Row = { entry: SearchEntry; titleMatch?: readonly Range[] };

const RECENTS_KEY = "avhub-recent-search";
const MAX_RECENTS = 5;

const CATEGORY_ORDER: SearchEntry["category"][] = [
  "Início",
  "Documentação",
  "Operação",
  "Institucional",
  "Ferramentas externas",
];

// Shown when the palette opens with an empty query and no recents yet.
const SUGGESTION_HREFS = [
  "/educador/comece-aqui",
  "/educador/manual",
  "/educador/contatos",
  "/educador/ferramentas",
];
const suggestions = SUGGESTION_HREFS.map(
  (h) => searchIndex.find((e) => e.href === h)!,
).filter(Boolean);

/** Wrap fuzzy-matched character ranges in <mark>. */
function Highlight({ text, ranges }: { text: string; ranges?: readonly Range[] }) {
  if (!ranges || ranges.length === 0) return <>{text}</>;
  const sorted = [...ranges].sort((a, b) => a[0] - b[0]);
  const out: React.ReactNode[] = [];
  let last = 0;
  sorted.forEach(([s, e], k) => {
    if (s < last) return; // skip overlaps
    if (s > last) out.push(<span key={`t${k}`}>{text.slice(last, s)}</span>);
    out.push(
      <mark
        key={`m${k}`}
        className="rounded-[2px] bg-brand-yellow/40 text-inherit dark:bg-brand-yellow/30"
      >
        {text.slice(s, e + 1)}
      </mark>,
    );
    last = e + 1;
  });
  if (last < text.length) out.push(<span key="end">{text.slice(last)}</span>);
  return <>{out}</>;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [recents, setRecents] = useState<SearchEntry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Build the fuzzy index once (≈60 entries — instant, fully local).
  const fuse = useMemo(
    () =>
      new Fuse(searchIndex, {
        keys: [
          { name: "title", weight: 0.6 },
          { name: "keywords", weight: 0.25 },
          { name: "description", weight: 0.1 },
          { name: "category", weight: 0.05 },
        ],
        includeMatches: true,
        ignoreLocation: true,
        threshold: 0.4,
        minMatchCharLength: 2,
      }),
    [],
  );

  const isQuery = query.trim().length > 0;

  const groups = useMemo<{ label: string; rows: Row[] }[]>(() => {
    const q = query.trim();
    if (!q) {
      const out: { label: string; rows: Row[] }[] = [];
      if (recents.length) {
        out.push({ label: "Recentes", rows: recents.map((entry) => ({ entry })) });
      }
      const sug = suggestions.filter((s) => !recents.some((r) => r.href === s.href));
      if (sug.length) {
        out.push({ label: "Sugestões", rows: sug.map((entry) => ({ entry })) });
      }
      return out;
    }
    const res = fuse.search(q).slice(0, 24);
    const byCat = new Map<string, Row[]>();
    for (const r of res) {
      const titleMatch = r.matches?.find((m) => m.key === "title")?.indices;
      const arr = byCat.get(r.item.category) ?? [];
      arr.push({ entry: r.item, titleMatch });
      byCat.set(r.item.category, arr);
    }
    return CATEGORY_ORDER.filter((c) => byCat.has(c)).map((c) => ({
      label: c,
      rows: byCat.get(c)!,
    }));
  }, [query, fuse, recents]);

  const flat = useMemo(
    () => groups.flatMap((g) => g.rows.map((r) => r.entry)),
    [groups],
  );

  // Load recents + focus input each time the palette opens.
  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    try {
      const raw = localStorage.getItem(RECENTS_KEY);
      setRecents(raw ? (JSON.parse(raw) as SearchEntry[]) : []);
    } catch {
      setRecents([]);
    }
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  // Keep the active row visible.
  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-idx="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active, groups]);

  const go = useCallback(
    (entry?: SearchEntry) => {
      const target = entry ?? flat[active];
      if (!target) return;
      try {
        const next = [
          target,
          ...recents.filter((r) => r.href !== target.href),
        ].slice(0, MAX_RECENTS);
        localStorage.setItem(RECENTS_KEY, JSON.stringify(next));
      } catch {
        /* ignore storage errors */
      }
      onClose();
      if (target.external) {
        window.open(target.href, "_blank", "noopener,noreferrer");
      } else {
        router.push(target.href);
      }
    },
    [flat, active, recents, onClose, router],
  );

  if (!open) return null;

  // Running index so keyboard order matches visual order across groups.
  let idx = -1;
  const emptyResults = isQuery && flat.length === 0;

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
        className="animate-fade absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="animate-pop relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-surface/85 shadow-2xl backdrop-blur-xl">
        {/* Input */}
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="h-5 w-5 shrink-0 text-cav-gray-400" strokeWidth={2} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            role="combobox"
            aria-expanded="true"
            aria-controls="cmdk-list"
            aria-activedescendant={flat[active] ? `cmdk-opt-${active}` : undefined}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, flat.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                go();
              } else if (e.key === "Escape") {
                e.preventDefault();
                onClose();
              }
            }}
            placeholder="Buscar páginas, contatos, ferramentas…"
            className="w-full bg-transparent py-4 text-[15px] text-cav-gray-800 outline-none placeholder:text-cav-gray-400"
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="hidden shrink-0 rounded-md border border-border bg-surface/60 px-1.5 py-0.5 text-[11px] font-medium text-cav-gray-400 sm:block">
            esc
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} id="cmdk-list" role="listbox" className="max-h-[60vh] overflow-y-auto p-2">
          {emptyResults ? (
            <div className="px-3 py-10 text-center">
              <p className="text-sm font-medium text-cav-gray-600">
                Nenhum resultado para “{query.trim()}”.
              </p>
              <p className="mt-1 text-xs text-cav-gray-400">
                Tente outro termo ou verifique a ortografia.
              </p>
            </div>
          ) : (
            groups.map((group) => (
              <div key={group.label} className="mb-1">
                <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-cav-gray-400">
                  {group.label}
                </p>
                <ul>
                  {group.rows.map((row) => {
                    idx += 1;
                    const i = idx;
                    const { entry } = row;
                    const isActiveRow = i === active;
                    return (
                      <li key={`${entry.href}-${i}`}>
                        <button
                          type="button"
                          id={`cmdk-opt-${i}`}
                          data-idx={i}
                          role="option"
                          aria-selected={isActiveRow}
                          onMouseMove={() => setActive(i)}
                          onClick={() => go(entry)}
                          className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                            isActiveRow ? "bg-brand-blue-50" : "hover:bg-cav-gray-50/60"
                          }`}
                        >
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-medium text-cav-gray-800">
                              <Highlight text={entry.title} ranges={row.titleMatch} />
                            </span>
                            {entry.description ? (
                              <span className="mt-0.5 block truncate text-xs text-cav-gray-400">
                                {entry.description}
                              </span>
                            ) : null}
                          </span>
                          <span className="flex shrink-0 items-center gap-2">
                            {entry.external ? (
                              <ExternalLink
                                className="h-4 w-4 text-cav-gray-300"
                                strokeWidth={2}
                                aria-hidden="true"
                              />
                            ) : isActiveRow ? (
                              <CornerDownLeft
                                className="h-4 w-4 text-brand-blue-ink"
                                strokeWidth={2}
                                aria-hidden="true"
                              />
                            ) : (
                              <ArrowRight
                                className="h-4 w-4 text-cav-gray-300"
                                strokeWidth={2}
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          )}
        </div>

        {/* Footer hints */}
        <div className="flex items-center gap-4 border-t border-border bg-surface/60 px-4 py-2.5 text-[11px] text-cav-gray-400">
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-surface px-1">↑</kbd>
            <kbd className="rounded border border-border bg-surface px-1">↓</kbd>
            navegar
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-surface px-1">↵</kbd>
            abrir
          </span>
          <span className="ml-auto hidden items-center gap-1 sm:flex">
            <kbd className="rounded border border-border bg-surface px-1">esc</kbd>
            fechar
          </span>
        </div>
      </div>
    </div>
  );
}
