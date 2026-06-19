"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/educador";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_1px_3px_rgba(16,24,40,0.04)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-cav-gray-50 sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <span className="hidden rounded-full bg-brand-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-brand-blue sm:inline">
                  {item.category}
                </span>
                <span className="text-[15px] font-semibold text-cav-gray-800">
                  {item.question}
                </span>
              </span>
              <svg
                className={`h-5 w-5 shrink-0 text-cav-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-200 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-cav-gray-600 sm:px-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
