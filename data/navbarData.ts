export type Language = "es" | "en";

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface NavbarData {
  logoText: string;
  links: NavLink[];
}

export const navbarDataEs: NavbarData = {
  logoText: "< RodrigoDíaz />",
  links: [
    { id: "presentacion", label: "Presentación", href: "#presentacion" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "estadisticas", label: "Métricas", href: "#estadisticas" },
    { id: "proyectos", label: "Proyectos", href: "#proyectos" },
    { id: "carrera", label: "Carrera", href: "#carrera" },
    { id: "contacto", label: "Contacto", href: "#contacto" },
  ],
};

export const navbarDataEn: NavbarData = {
  logoText: "< RodrigoDíaz />",
  links: [
    { id: "presentacion", label: "Presentation", href: "#presentacion" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "estadisticas", label: "Metrics", href: "#estadisticas" },
    { id: "proyectos", label: "Projects", href: "#proyectos" },
    { id: "carrera", label: "Career", href: "#carrera" },
    { id: "contacto", label: "Contact", href: "#contacto" },
  ],
};