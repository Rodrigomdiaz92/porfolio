import type { Metadata } from "next";
import { Zen_Dots, Fira_Sans, Fira_Sans_Condensed } from "next/font/google";

import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import FooterWrapper from "@/components/layout/FooterWrapper";

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zen-dots",
  display: "swap",
});

const firaSans = Fira_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-sans",
  display: "swap",
});

const firaSansCondensed = Fira_Sans_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-sans-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rodrigo Díaz | Frontend Developer",
  description: "Portfolio profesional de Rodrigo Díaz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${zenDots.variable} ${firaSans.variable} ${firaSansCondensed.variable} h-full`}
    >
      <body className="flex min-h-screen flex-col bg-[var(--color-primary)] text-[var(--color-text-main)] antialiased">
        <LanguageProvider>
          <NavbarWrapper />
          <main className="flex-1">{children}</main>
          <FooterWrapper />
        </LanguageProvider>
      </body>
    </html>
  );
}