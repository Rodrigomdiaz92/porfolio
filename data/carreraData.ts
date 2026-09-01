export interface CarreraItem {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export interface CarreraSectionData {
  title: string;
  subtitle: string;
  items: CarreraItem[];
}

export const carreraDataEs: CarreraSectionData = {
  title: "Carrera & Experiencia",
  subtitle: "Trayectoria profesional enfocada en el desarrollo web, liderazgo técnico, mentoría y gestión de productos digitales.",
  items: [
    {
      id: "sailing-the-world",
      role: "Lead Frontend Developer & Digital Product Manager",
      company: "Sailing The World",
      startDate: "2023",
      endDate: "Presente",
      description: "Liderazgo técnico en la creación del portal web y sistema de reservas para flota de catamaranes en las Islas San Blas. Optimización UX/UI y rendimiento del sitio.",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "UX/UI Design", "SEO"],
    },
    {
      id: "frontend-mentor",
      role: "Mentor & Tutor Frontend Web",
      company: "Educación IT / Cursos Independientes",
      startDate: "2022",
      endDate: "Presente",
      description: "Acompañamiento a estudiantes en el aprendizaje de tecnologías modernas web, buenas prácticas de código, Git Flow y preparación para inserción laboral.",
      skills: ["JavaScript (ES6+)", "React.js", "HTML5 & CSS3", "Git & GitHub", "Clean Code"],
    },
    {
      id: "freelance-dev",
      role: "Desarrollador Web Freelance",
      company: "Proyectos Independientes",
      startDate: "2021",
      endDate: "2023",
      description: "Diseño y desarrollo de sitios e-commerce, páginas de aterrizaje y paneles administrativos a medida para clientes internacionales de diversos sectores.",
      skills: ["React.js", "REST APIs", "Firebase", "Bootstrap", "Responsive Design"],
    },
  ],
};