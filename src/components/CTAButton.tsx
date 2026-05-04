import Link from "next/link";

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}

export default function CTAButton({
  href,
  label,
  variant = "primary",
}: CTAButtonProps) {
  const base =
    "inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200";
  const styles =
    variant === "primary"
      ? `${base} bg-cav-primary text-white shadow-sm hover:bg-cav-primary-dark hover:shadow-md`
      : `${base} border border-cav-gray-300 text-cav-gray-700 hover:border-cav-primary hover:text-cav-primary hover:bg-cav-primary-50/50`;

  return (
    <Link href={href} className={styles}>
      {label}
    </Link>
  );
}
