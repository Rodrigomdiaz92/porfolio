export interface HeroData {
  greeting: string;
  name: string;
  titles: string[];
  description: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText: string;
  secondaryBtnHref: string;
  profileImgSrc: string;
  profileImgAlt: string;
}

export const heroDataEs: HeroData = {
  greeting: "Hola, mi nombre es",
  name: "Rodrigo Díaz",
  titles: [
    "Frontend & React Developer",
    "Next.js & UX-UI Specialist",
  ],
  description:
    "Desarrollador Frontend con más de 4 años de experiencia creando interfaces web escalables, responsivas y de alto rendimiento. Especializado en React.js, Next.js, TypeScript y diseño UX/UI con Figma. Integrador activo de herramientas de IA para optimización de flujos de trabajo.",
  primaryBtnText: "Ver Proyectos",
  primaryBtnHref: "#proyectos",
  secondaryBtnText: "Contactar",
  secondaryBtnHref: "#contacto",
  profileImgSrc: "/contenido/perfil/perfil.jpeg",
  profileImgAlt: "Foto de perfil de Rodrigo Díaz",
};

export const heroDataEn: HeroData = {
  greeting: "Hi, my name is",
  name: "Rodrigo Díaz",
  titles: [
    "Frontend & React Developer",
    "Next.js & UX-UI Specialist",
  ],
  description:
    "Frontend Developer with over 4 years of experience building scalable, responsive, and high-performance web interfaces. Specialized in React.js, Next.js, TypeScript, and UX/UI design with Figma. Active integrator of AI tools to optimize development workflows.",
  primaryBtnText: "View Projects",
  primaryBtnHref: "#proyectos",
  secondaryBtnText: "Get in Touch",
  secondaryBtnHref: "#contacto",
  profileImgSrc: "/contenido/perfil/perfil.jpeg",
  profileImgAlt: "Profile picture of Rodrigo Díaz",
};