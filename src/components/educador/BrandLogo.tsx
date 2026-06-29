import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  /** Hide the wordmark on very small screens when true. */
  compact?: boolean;
}

export default function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <Link
      href="/educador"
      className="group flex items-center gap-2.5"
      aria-label="Alta Vista Hub — Colégio Alta Vista"
    >
      <Image
        src="/logo-altavista.png"
        alt="Colégio Alta Vista"
        width={40}
        height={40}
        priority
        className="h-10 w-10 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-105"
      />
      <span
        className={
          compact
            ? "hidden sm:flex sm:flex-col sm:justify-center sm:gap-0.5"
            : "flex flex-col justify-center gap-0.5"
        }
      >
        <span className="text-[15px] font-bold leading-none tracking-tight text-cav-gray-800">
          Alta Vista Hub
        </span>
        <span className="text-[11px] font-medium leading-none text-brand-blue">
          Área do Educador
        </span>
      </span>
    </Link>
  );
}
