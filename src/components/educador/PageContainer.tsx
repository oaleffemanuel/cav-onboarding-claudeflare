import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

interface PageContainerProps {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export default function PageContainer({
  crumbs,
  eyebrow,
  title,
  intro,
  children,
}: PageContainerProps) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="animate-fade-up">
        <Breadcrumbs items={crumbs} />
        {eyebrow ? (
          <p className="mb-2 text-sm font-semibold text-brand-blue">{eyebrow}</p>
        ) : null}
        <h1 className="text-3xl font-bold tracking-tight text-cav-gray-800 sm:text-4xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cav-gray-500">
            {intro}
          </p>
        ) : null}
      </div>
      <div className="mt-10">{children}</div>
    </div>
  );
}
