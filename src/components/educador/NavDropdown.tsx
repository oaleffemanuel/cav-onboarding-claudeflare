"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface NavDropdownItem {
  href: string;
  label: string;
}

// Desktop-only grouped menu. Opens on hover (mouse) and on click/Enter or
// ArrowDown (keyboard); closes on Escape, outside click, route change, or when
// focus leaves the group. The panel stays mounted and animates via opacity +
// transform so both open and close are smooth; keyboard/AT reachability is
// gated with aria-hidden + tabIndex instead of `visibility`.
export default function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: NavDropdownItem[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  const groupActive = items.some((it) => isActive(it.href));

  // Close after navigating to one of the items.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on click outside the group.
  useEffect(() => {
    if (!open) return;
    function onDown(e: PointerEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setOpen(false);
      btnRef.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => {
        wrapRef.current
          ?.querySelector<HTMLAnchorElement>("[data-menuitem]")
          ?.focus();
      });
    }
  }

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onKeyDown={onKeyDown}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors ${
          groupActive
            ? "bg-brand-blue-50 text-brand-blue-ink"
            : open
              ? "bg-cav-gray-50 text-cav-gray-800"
              : "text-cav-gray-600 hover:bg-cav-gray-50 hover:text-cav-gray-800"
        }`}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2.5}
          aria-hidden="true"
        />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label={label}
        aria-hidden={!open}
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 transition duration-200 ease-out ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="min-w-[210px] rounded-xl border border-border bg-surface p-1.5 shadow-lg shadow-black/5 dark:shadow-black/40">
          {items.map((it) => {
            const active = isActive(it.href);
            return (
              <Link
                key={it.href}
                href={it.href}
                role="menuitem"
                data-menuitem
                tabIndex={open ? 0 : -1}
                aria-current={active ? "page" : undefined}
                className={`block rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors ${
                  active
                    ? "bg-brand-blue-50 text-brand-blue-ink"
                    : "text-cav-gray-600 hover:bg-cav-gray-50 hover:text-cav-gray-800"
                }`}
              >
                {it.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
