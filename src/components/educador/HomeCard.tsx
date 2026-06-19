import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HomeCard as HomeCardData } from "@/data/educador";
import { toneStyles } from "./tones";

export default function HomeCard({ card }: { card: HomeCardData }) {
  const tone = toneStyles[card.tone];
  const Icon = card.icon;
  return (
    <Link
      href={card.href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(16,24,40,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(16,24,40,0.10)] dark:shadow-none dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)] ${tone.ring}`}
    >
      {/* subtle brand wash on hover */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${tone.soft}`}
      />
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${tone.soft} ${tone.text}`}
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <h3 className="text-[17px] font-semibold tracking-tight text-cav-gray-800">
        {card.title}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-cav-gray-500">
        {card.description}
      </p>
      <span
        className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${tone.text}`}
      >
        Acessar
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2}
        />
      </span>
    </Link>
  );
}
