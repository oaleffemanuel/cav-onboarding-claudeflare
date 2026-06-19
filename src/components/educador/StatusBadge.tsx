import { CheckCircle2, AlertCircle, CircleDashed } from "lucide-react";
import type { DataStatus } from "@/data/educador";

const config: Record<
  DataStatus,
  { icon: typeof CheckCircle2; className: string }
> = {
  Confirmado: {
    icon: CheckCircle2,
    className: "bg-brand-green-50 text-brand-green-ink",
  },
  "A validar": {
    icon: AlertCircle,
    className: "bg-brand-yellow-50 text-brand-amber",
  },
  "A preencher": {
    icon: CircleDashed,
    className: "bg-cav-gray-100 text-cav-gray-500",
  },
};

export default function StatusBadge({ status }: { status: DataStatus }) {
  const { icon: Icon, className } = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${className}`}
    >
      <Icon className="h-3 w-3" strokeWidth={2.5} />
      {status}
    </span>
  );
}
