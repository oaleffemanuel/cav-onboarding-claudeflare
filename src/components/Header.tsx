interface HeaderProps {
  subtitle?: string;
}

export default function Header({ subtitle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-cav-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cav-primary text-sm font-bold text-white shadow-sm">
            CA
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-tight text-cav-gray-800">
              Colégio Alta Vista
            </p>
            <p className="text-[11px] text-cav-gray-400">
              {subtitle ?? "Portal de Onboarding"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
