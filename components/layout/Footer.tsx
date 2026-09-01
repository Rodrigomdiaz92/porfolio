"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa6";

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  platform: "linkedin" | "github" | "behance";
  label: string;
  href: string;
}

export interface FooterData {
  logoText: string;
  tagline: string;
  copyright: string;
  navigationTitle: string;
  socialsTitle: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
}

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  const renderSocialIcon = (platform: SocialLink["platform"]) => {
    switch (platform) {
      case "linkedin":
        return <FaLinkedin size={18} />;
      case "github":
        return <FaGithub size={18} />;
      case "behance":
        return <FaBehance size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full border-t border-[var(--color-headers)]/20 bg-[var(--color-secondary)] text-[var(--color-text-main)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          
          {/* Marca */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link
              href="/"
              className="font-h2 text-2xl font-bold tracking-wide text-[var(--color-headers)] transition-colors hover:text-[var(--color-btn-secondary)]"
            >
              {data.logoText}
            </Link>
            <p className="font-body mt-3 text-sm text-[var(--color-text-main)]/80">
              {data.tagline}
            </p>
          </div>

          {/* Navegación Interna */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="font-h2 text-sm font-semibold tracking-wider text-[var(--color-headers)] uppercase">
              {data.navigationTitle}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {data.navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="font-subtitle text-sm text-[var(--color-text-main)] transition-colors hover:text-[var(--color-btn-secondary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="font-h2 text-sm font-semibold tracking-wider text-[var(--color-headers)] uppercase">
              {data.socialsTitle}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {data.socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body flex items-center gap-2.5 text-sm text-[var(--color-text-main)] transition-colors hover:text-[var(--color-btn-secondary)]"
                  >
                    <span className="text-[var(--color-btn-secondary)]">
                      {renderSocialIcon(social.platform)}
                    </span>
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[var(--color-headers)]/10 pt-6 text-center">
          <p className="font-body text-xs text-[var(--color-text-main)]/60">
            © {new Date().getFullYear()} {data.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}