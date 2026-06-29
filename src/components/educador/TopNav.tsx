"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import NavDropdown from "./NavDropdown";
import SearchModal from "./SearchModal";
import ThemeToggle from "./ThemeToggle";

// Grouped information architecture for the desktop navbar (and mobile drawer).
type NavEntry =
  | { kind: "link"; href: string; label: string }
  | { kind: "group"; label: string; items: { href: string; label: string }[] };

const NAV: NavEntry[] = [
  { kind: "link", href: "/educador/comece-aqui", label: "Comece Aqui" },
  {
    kind: "group",
    label: "Documentação",
    items: [
      { href: "/educador/guias", label: "Guias" },
      { href: "/educador/manual", label: "Manual do Educador" },
    ],
  },
  {
    kind: "group",
    label: "Operação",
    items: [
      { href: "/educador/ferramentas", label: "Ferramentas" },
      { href: "/educador/rotinas", label: "Rotinas Internas" },
    ],
  },
  {
    kind: "group",
    label: "Institucional",
    items: [
      { href: "/educador/organograma", label: "Organograma" },
      { href: "/educador/contatos", label: "Contatos" },
    ],
  },
  { kind: "link", href: "/educador/faq", label: "FAQ" },
];

export default function TopNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close the drawer on route change.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Cmd/Ctrl+K opens search; a custom event lets the hero search open it too.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    }
    function onOpen() {
      setSearchOpen(true);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("educador:search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("educador:search", onOpen);
    };
  }, []);

  // Lock scroll when the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <BrandLogo compact />

          {/* Desktop nav — grouped, single line */}
          <nav className="hidden flex-1 items-center justify-center gap-1 xl:flex">
            {NAV.map((entry) =>
              entry.kind === "link" ? (
                <Link
                  key={entry.href}
                  href={entry.href}
                  aria-current={isActive(entry.href) ? "page" : undefined}
                  className={`whitespace-nowrap rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors ${
                    isActive(entry.href)
                      ? "bg-brand-blue-50 text-brand-blue-ink"
                      : "text-cav-gray-600 hover:bg-cav-gray-50 hover:text-cav-gray-800"
                  }`}
                >
                  {entry.label}
                </Link>
              ) : (
                <NavDropdown
                  key={entry.label}
                  label={entry.label}
                  items={entry.items}
                />
              ),
            )}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            {/* Search trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex h-10 items-center gap-2 rounded-xl border border-border bg-surface px-2.5 text-sm text-cav-gray-400 shadow-sm transition-colors hover:border-cav-gray-300 hover:text-cav-gray-600 sm:px-3"
              aria-label="Buscar no portal"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={2} />
              <span className="hidden md:inline">Buscar…</span>
              <kbd className="hidden rounded-md border border-border px-1.5 py-0.5 text-[11px] font-medium lg:inline">
                ⌘K
              </kbd>
            </button>

            <ThemeToggle />

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-cav-gray-600 shadow-sm transition-colors hover:border-cav-gray-300 xl:hidden"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer — same groups, expanded as labelled sections */}
        {mobileOpen && (
          <div className="xl:hidden">
            <div className="animate-fade-up max-h-[calc(100vh-4rem)] space-y-5 overflow-y-auto border-t border-border bg-surface px-4 pb-8 pt-4 shadow-lg">
              {NAV.map((entry) =>
                entry.kind === "link" ? (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    aria-current={isActive(entry.href) ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                      isActive(entry.href)
                        ? "bg-brand-blue-50 text-brand-blue-ink"
                        : "text-cav-gray-700 hover:bg-cav-gray-50"
                    }`}
                  >
                    {entry.label}
                  </Link>
                ) : (
                  <div key={entry.label}>
                    <p className="px-4 pb-1.5 text-xs font-semibold uppercase tracking-wide text-cav-gray-400">
                      {entry.label}
                    </p>
                    <div className="space-y-1">
                      {entry.items.map((it) => (
                        <Link
                          key={it.href}
                          href={it.href}
                          aria-current={isActive(it.href) ? "page" : undefined}
                          className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                            isActive(it.href)
                              ? "bg-brand-blue-50 text-brand-blue-ink"
                              : "text-cav-gray-700 hover:bg-cav-gray-50"
                          }`}
                        >
                          {it.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
