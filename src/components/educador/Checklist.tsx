"use client";

import { useState } from "react";

export default function Checklist({ items }: { items: string[] }) {
  const [done, setDone] = useState<boolean[]>(() => items.map(() => false));
  const completed = done.filter(Boolean).length;

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-cav-gray-100">
          <div
            className="h-full rounded-full bg-brand-green transition-all duration-300"
            style={{ width: `${(completed / items.length) * 100}%` }}
          />
        </div>
        <span className="text-sm font-medium text-cav-gray-500">
          {completed}/{items.length}
        </span>
      </div>

      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() =>
                setDone((d) => d.map((v, j) => (j === i ? !v : v)))
              }
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                done[i]
                  ? "border-brand-green/30 bg-brand-green-50"
                  : "border-border bg-surface hover:border-cav-gray-300"
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                  done[i]
                    ? "border-brand-green bg-brand-green text-white"
                    : "border-cav-gray-300 bg-surface"
                }`}
              >
                {done[i] ? (
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : null}
              </span>
              <span
                className={`text-[15px] ${
                  done[i]
                    ? "text-cav-gray-400 line-through"
                    : "text-cav-gray-700"
                }`}
              >
                {item}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
