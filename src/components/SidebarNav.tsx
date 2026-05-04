"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export interface NavItem {
  href: string;
  label: string;
  children?: NavItem[];
}

interface SidebarNavProps {
  items: NavItem[];
  title: string;
}

export default function SidebarNav({ items, title }: SidebarNavProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="flex w-full items-center justify-between rounded-xl border border-cav-gray-200 bg-white px-4 py-3 text-sm font-medium text-cav-gray-700 shadow-sm lg:hidden"
      >
        <span>{title}</span>
        <svg
          className={`h-4 w-4 text-cav-gray-400 transition-transform ${mobileOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <nav
        className={`${mobileOpen ? "block" : "hidden"} mt-2 lg:mt-0 lg:block`}
      >
        <p className="mb-3 hidden text-[11px] font-semibold uppercase tracking-widest text-cav-gray-400 lg:block">
          {title}
        </p>
        <ul className="space-y-0.5">
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              item={item}
              pathname={pathname}
              onNavigate={() => setMobileOpen(false)}
            />
          ))}
        </ul>
      </nav>
    </>
  );
}

function SidebarItem({
  item,
  pathname,
  onNavigate,
  depth = 0,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
  depth?: number;
}) {
  const isActive = pathname === item.href;
  const isParentActive =
    item.children?.some((child) => pathname === child.href) ?? false;

  return (
    <li>
      <Link
        href={item.href}
        onClick={onNavigate}
        className={`block rounded-lg px-3 py-2 text-[13px] transition-colors ${
          depth > 0 ? "ml-4 border-l-2 border-cav-gray-200 pl-4" : ""
        } ${
          isActive
            ? "bg-cav-primary-50 font-semibold text-cav-primary"
            : isParentActive
              ? "font-medium text-cav-gray-700"
              : "text-cav-gray-500 hover:bg-cav-gray-100 hover:text-cav-gray-700"
        }`}
      >
        {item.label}
      </Link>
      {item.children && (isActive || isParentActive) ? (
        <ul className="mt-0.5 space-y-0.5">
          {item.children.map((child) => (
            <SidebarItem
              key={child.href}
              item={child}
              pathname={pathname}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}
