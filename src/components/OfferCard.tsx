import CTAButton from "./CTAButton";

interface OfferCardProps {
  title: string;
  description: string;
  includes: string[];
  price: string;
  ctaLabel: string;
  ctaHref?: string;
  highlight?: boolean;
}

export default function OfferCard({
  title,
  description,
  includes,
  price,
  ctaLabel,
  ctaHref = "#",
  highlight = false,
}: OfferCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-6 transition-shadow duration-200 ${
        highlight
          ? "border-cav-primary/30 bg-gradient-to-b from-white to-cav-primary-50/50 shadow-[0_2px_8px_rgba(44,94,168,0.08)]"
          : "border-cav-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
      } hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]`}
    >
      {highlight ? (
        <span className="mb-3 inline-flex w-fit rounded-full bg-cav-primary/8 px-3 py-1 text-xs font-semibold text-cav-primary">
          Recomendado
        </span>
      ) : null}
      <h3 className="text-lg font-bold text-cav-gray-800">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-cav-gray-500">
        {description}
      </p>
      <ul className="mt-4 flex-1 space-y-2.5">
        {includes.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-cav-gray-600"
          >
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-cav-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t border-cav-gray-100 pt-4">
        <p className="text-2xl font-bold text-cav-gray-800">{price}</p>
        <p className="text-xs text-cav-gray-400">por mês</p>
      </div>
      <div className="mt-4">
        <CTAButton
          href={ctaHref}
          label={ctaLabel}
          variant={highlight ? "primary" : "secondary"}
        />
      </div>
    </div>
  );
}
