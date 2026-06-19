import { Mail, Phone, Info, ArrowRight } from "lucide-react";
import type { Contact } from "@/data/educador";
import { PLACEHOLDER } from "@/data/educador";
import { toneStyles } from "./tones";

function isFilled(value: string) {
  return (
    value !== PLACEHOLDER.na &&
    value !== PLACEHOLDER.fill &&
    value !== PLACEHOLDER.awaiting
  );
}

function areaInitials(area: string): string {
  const parts = area.split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

export default function ContactCard({ contact }: { contact: Contact }) {
  const tone = toneStyles[contact.tone];
  const hasEmail = isFilled(contact.email);
  const hasPhone = isFilled(contact.phone);
  const actionHref = hasEmail
    ? `mailto:${contact.email}`
    : hasPhone
      ? `tel:${contact.phone.replace(/[^\d+]/g, "")}`
      : undefined;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(16,24,40,0.04)] transition-shadow duration-200 hover:shadow-[0_10px_28px_rgba(16,24,40,0.08)] dark:hover:shadow-[0_10px_28px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold uppercase text-white ${tone.solid}`}
          aria-hidden
        >
          {areaInitials(contact.area)}
        </div>
        <div className="min-w-0">
          <p className={`text-xs font-semibold uppercase tracking-wide ${tone.text}`}>
            {contact.area}
          </p>
          <p className="truncate text-[15px] font-semibold text-cav-gray-800">
            {contact.person}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm text-cav-gray-500">{contact.role}</p>

      <dl className="mt-4 space-y-2.5 text-sm">
        <div className="flex items-start gap-2.5 text-cav-gray-600">
          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cav-gray-400" strokeWidth={1.8} />
          {hasEmail ? (
            <a href={`mailto:${contact.email}`} className="break-all hover:text-brand-blue-ink">
              {contact.email}
            </a>
          ) : (
            <span className="text-cav-gray-400">{contact.email}</span>
          )}
        </div>
        <div className="flex items-start gap-2.5 text-cav-gray-600">
          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cav-gray-400" strokeWidth={1.8} />
          {hasPhone ? (
            <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="hover:text-brand-blue-ink">
              {contact.phone}
            </a>
          ) : (
            <span className="text-cav-gray-400">{contact.phone}</span>
          )}
        </div>
        {contact.notes ? (
          <div className="flex items-start gap-2.5 text-cav-gray-500">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-cav-gray-400" strokeWidth={1.8} />
            <span>{contact.notes}</span>
          </div>
        ) : null}
      </dl>

      {actionHref ? (
        <a
          href={actionHref}
          className={`mt-5 inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 ${tone.solid}`}
        >
          Falar com {contact.area}
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </a>
      ) : (
        <span className="mt-5 inline-flex cursor-not-allowed items-center justify-center gap-1.5 rounded-xl border border-dashed border-border px-4 py-2.5 text-sm font-medium text-cav-gray-400">
          Contato a preencher
        </span>
      )}
    </div>
  );
}
