import Link from "next/link";

interface SectionCardProps {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
}

export default function SectionCard({
  title,
  description,
  href,
  icon,
}: SectionCardProps) {
  const content = (
    <div className="group flex h-full flex-col rounded-2xl border border-cav-gray-200 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-cav-primary/25 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
      {icon ? (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cav-primary-50 text-cav-primary">
          {icon}
        </div>
      ) : null}
      <h3 className="text-[15px] font-semibold text-cav-gray-800 group-hover:text-cav-primary">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-cav-gray-500">
        {description}
      </p>
      {href ? (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cav-primary">
          Acessar
          <svg
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      ) : null}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
