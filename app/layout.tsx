import type { Metadata } from "next";
import { Zen_Dots, Fira_Sans, Fira_Sans_Condensed } from "next/font/google";
import Navbar from "@/components/layout/NavBar";
import Footer, { FooterData } from "@/components/layout/Footer";
import "./globals.css";

// Configuración de Google Fonts
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

const navbarDataEs = {
  logoText: "< RodrigoDíaz />",
  contactBtnText: "Contacto",
  contactHref: "#contacto",
  links: [
    { id: "hero", label: "Presentación", href: "#presentacion" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "Proyectos", href: "#proyectos" },
    { id: "career", label: "Carrera", href: "#carrera" },
  ],
};

const footerDataEs: FooterData = {
  logoText: "< RodrigoDíaz />",
  tagline: "Desarrollador Web orientado a experiencias digitales accesibles y de alto impacto.",
  copyright: "Todos los derechos reservados.",
  navigationTitle: "Navegación",
  socialsTitle: "Redes Sociales",
  navLinks: [
    { id: "hero", label: "Presentación", href: "#presentacion" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "Proyectos", href: "#proyectos" },
    { id: "career", label: "Carrera", href: "#carrera" },
  ],
  socialLinks: [
    { id: "linkedin", platform: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/rodrigomdiaz" },
    { id: "github", platform: "github", label: "GitHub", href: "https://github.com/rodrigomdiaz92" },
    { id: "behance", platform: "behance", label: "Behance", href: "https://behance.net" },
  ],
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
        <Navbar data={navbarDataEs} />
        <main className="flex-1">{children}</main>
        <Footer data={footerDataEs} />
      </body>
    </html>
  );
}