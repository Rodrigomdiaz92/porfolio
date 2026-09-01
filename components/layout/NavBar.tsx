"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface NavbarData {
  logoText: string;
  contactBtnText: string;
  contactHref: string;
  links: NavLink[];
}

interface NavbarProps {
  data: NavbarData;
}

export default function Navbar({ data }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-headers)]/20 bg-[var(--color-primary)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link 
            href="/" 
            className="font-h2 text-xl font-bold tracking-wide text-[var(--color-headers)] transition-colors hover:text-[var(--color-btn-secondary)]"
          >
            {data.logoText}
          </Link>
        </div>

        {/* Enlaces Desktop */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          {data.links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="font-subtitle text-sm font-medium text-[var(--color-text-main)] transition-colors hover:text-[var(--color-headers)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botón Acción + Toggle Mobile */}
        <div className="flex items-center gap-3">
          <Link
            href={data.contactHref}
            className="font-body rounded-lg bg-[var(--color-btn-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-text-main)] transition-all hover:bg-[var(--color-btn-primary)]/80 hover:shadow-lg hover:shadow-[var(--color-btn-primary)]/20 active:scale-95"
          >
            {data.contactBtnText}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-[var(--color-text-main)] hover:bg-[var(--color-secondary)] md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <FaXmark size={22} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="border-b border-[var(--color-headers)]/20 bg-[var(--color-secondary)] px-4 pt-2 pb-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {data.links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-subtitle rounded-md px-3 py-2 text-base font-medium text-[var(--color-text-main)] hover:bg-[var(--color-primary)] hover:text-[var(--color-headers)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}