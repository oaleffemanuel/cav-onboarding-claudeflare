"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { manualModules, type ManualModule } from "@/data/educador";
import { toneStyles } from "./tones";
import Markdown from "./Markdown";

function ModuleCard({ module }: { module: ManualModule }) {
  const [open, setOpen] = useState(false);
  const tone = toneStyles[module.tone];
  const Icon = module.icon;

  return (
    <div
      id={module.id}
      className="flex scroll-mt-24 flex-col rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(16,24,40,0.04)] transition-all duration-200 hover:shadow-[0_10px_28px_rgba(16,24,40,0.08)] dark:hover:shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
    >
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${tone.soft} ${tone.text}`}>
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <h3 className="text-[17px] font-semibold tracking-tight text-cav-gray-800">
        {module.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-cav-gray-500">
        {module.summary}
      </p>

      {/* key points */}
      <ul className="mt-4 space-y-2">
        {module.keyPoints.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-cav-gray-600">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tone.text}`} strokeWidth={2.5} />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`mt-5 inline-flex items-center gap-1 self-start text-sm font-semibold ${tone.text}`}
        aria-expanded={open}
      >
        {open ? "Ocultar detalhes" : "Ver detalhes"}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      <div
        className={`grid transition-all duration-200 ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border pt-4 text-sm">
            <Markdown content={module.details} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ManualModules() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {manualModules.map((module) => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </div>
  );
}
