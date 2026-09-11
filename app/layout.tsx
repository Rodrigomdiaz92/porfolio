import type { Metadata } from "next";
import { Zen_Dots, Fira_Sans, Fira_Sans_Condensed } from "next/font/google";

import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import FooterWrapper from "@/components/layout/FooterWrapper";
import JsonLd from "@/components/seo/JsonLd";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  metadataBase: new URL("https://www.rodrigomdiaz.net.ar/"), 
  title: {
    default: "Rodrigo Díaz | Lead Frontend Developer & Product Manager",
    template: "%s | Rodrigo Díaz",
  },
  description:
    "Portfolio profesional de Rodrigo Díaz. Desarrollador Frontend especializado en React, Next.js, TypeScript, UI/UX y optimización web con IA.",
  keywords: [
    "Rodrigo Díaz",
    "Desarrollador Frontend",
    "Frontend Developer Argentina",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "UI/UX Designer",
    "Full Stack Web",
    "Vibe Coding",
    "Sailing The World",
  ],
  authors: [{ name: "Rodrigo Díaz", url: "https://www.rodrigomdiaz.net.ar/" }],
  creator: "Rodrigo Díaz",
  publisher: "Rodrigo Díaz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
    url: "https://www.rodrigomdiaz.net.ar/",
    title: "Rodrigo Díaz | Lead Frontend Developer & Product Manager",
    description:
      "Desarrollador Frontend enfocado en React, Next.js, TypeScript y experiencia de usuario. Revisa mis proyectos destacados y trayectoria.",
    siteName: "Rodrigo Díaz Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Asegúrate de guardar una imagen promocional en public/og-image.jpg (1200x630 px)
        width: 1200,
        height: 630,
        alt: "Rodrigo Díaz - Portfolio Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo Díaz | Lead Frontend Developer",
    description:
      "Desarrollador Frontend especializado en React, Next.js y diseño UI/UX.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        <JsonLd />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}