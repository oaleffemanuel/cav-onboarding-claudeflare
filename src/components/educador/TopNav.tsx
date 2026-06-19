"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { educadorNav, homeCards } from "@/data/educador";
import BrandLogo from "./BrandLogo";
import SearchModal from "./SearchModal";
import ThemeToggle from "./ThemeToggle";

// Section icon lookup (shared with the home cards) for the mobile drawer.
const iconFor = Object.fromEntries(homeCards.map((c) => [c.href, c.icon]));

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
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <BrandLogo compact />

          {/* Desktop nav */}
          <nav className="ml-1 hidden flex-1 items-center justify-center gap-0.5 xl:flex">
            {educadorNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-brand-blue-50 text-brand-blue-ink"
                    : "text-cav-gray-600 hover:bg-cav-gray-50 hover:text-cav-gray-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
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

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="xl:hidden">
            <div className="animate-fade-up max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-surface px-4 pb-8 pt-3 shadow-lg">
              <nav className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {educadorNav.map((item) => {
                  const Icon = iconFor[item.href];
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                        active
                          ? "bg-brand-blue-50 text-brand-blue-ink"
                          : "text-cav-gray-700 hover:bg-cav-gray-50"
                      }`}
                    >
                      {Icon ? (
                        <Icon className="h-[18px] w-[18px] shrink-0 opacity-80" strokeWidth={2} />
                      ) : null}
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
