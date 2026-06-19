import type { ReactNode } from "react";

interface ContentCardProps {
  id?: string;
  title?: string;
  children: ReactNode;
}

export default function ContentCard({ id, title, children }: ContentCardProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(16,24,40,0.04)] sm:p-8"
    >
      {title ? (
        <h2 className="mb-4 text-xl font-bold tracking-tight text-cav-gray-800">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
