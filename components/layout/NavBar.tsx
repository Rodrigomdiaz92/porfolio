"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark, FaGlobe, FaChevronDown } from "react-icons/fa6";
import { NavbarData, Language } from "@/data/navbarData";

interface NavbarProps {
  data: NavbarData;
  currentLang?: Language;
  onLanguageChange?: (lang: Language) => void;
}

export default function Navbar({
  data,
  currentLang = "es",
  onLanguageChange,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleSelectLang = (lang: Language) => {
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
    setIsLangOpen(false);
  };

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

        {/* Enlaces Desktop (Incluye "Contacto") */}
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

        {/* Desplegable de Idioma + Menú Hamburguesa */}
        <div className="flex items-center gap-3">
          
          {/* Selector de Idioma (Visible en todos los dispositivos) */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="font-body flex items-center gap-1.5 rounded-lg border border-[var(--color-headers)]/30 bg-[var(--color-secondary)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text-main)] transition-all hover:border-[var(--color-btn-secondary)] hover:text-[var(--color-btn-secondary)] sm:text-sm"
              aria-label="Seleccionar Idioma"
            >
              <FaGlobe className="size-3.5 text-[var(--color-btn-secondary)]" />
              <span className="uppercase">{currentLang}</span>
              <FaChevronDown className="size-2.5 opacity-70" />
            </button>

            {/* Menú Desplegable */}
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-28 overflow-hidden rounded-md border border-[var(--color-headers)]/20 bg-[var(--color-secondary)] shadow-xl z-50">
                <button
                  onClick={() => handleSelectLang("es")}
                  className={`font-body flex w-full items-center justify-between px-3 py-2 text-xs font-medium transition-colors hover:bg-[var(--color-primary)] ${
                    currentLang === "es"
                      ? "text-[var(--color-btn-secondary)] font-bold"
                      : "text-[var(--color-text-main)]"
                  }`}
                >
                  <span>Español</span>
                  <span>ES</span>
                </button>
                <button
                  onClick={() => handleSelectLang("en")}
                  className={`font-body flex w-full items-center justify-between px-3 py-2 text-xs font-medium transition-colors hover:bg-[var(--color-primary)] ${
                    currentLang === "en"
                      ? "text-[var(--color-btn-secondary)] font-bold"
                      : "text-[var(--color-text-main)]"
                  }`}
                >
                  <span>English</span>
                  <span>EN</span>
                </button>
              </div>
            )}
          </div>

          {/* Menú Toggle Mobile */}
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