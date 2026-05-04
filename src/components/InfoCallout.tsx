interface InfoCalloutProps {
  type?: "info" | "tip" | "warning";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  info: {
    border: "border-cav-primary-100",
    bg: "bg-cav-primary-50",
    icon: "text-cav-primary",
    title: "text-cav-primary",
  },
  tip: {
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    title: "text-emerald-800",
  },
  warning: {
    border: "border-amber-200",
    bg: "bg-amber-50",
    icon: "text-amber-600",
    title: "text-amber-800",
  },
};

const icons = {
  info: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  tip: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  warning: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.072 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  ),
};

export default function InfoCallout({
  type = "info",
  title,
  children,
}: InfoCalloutProps) {
  const s = styles[type];

  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4`}>
      <div className="flex gap-3">
        <div className={`mt-0.5 shrink-0 ${s.icon}`}>{icons[type]}</div>
        <div>
          {title ? (
            <p className={`mb-1 text-sm font-semibold ${s.title}`}>{title}</p>
          ) : null}
          <div className="text-sm leading-relaxed text-cav-gray-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
