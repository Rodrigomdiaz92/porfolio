export interface EstudioItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
}

export interface EstudiosSectionData {
  title: string;
  subtitle: string;
  education: EstudioItem[];
}

export const estudiosDataEs: EstudiosSectionData = {
  title: "Estudios & Formación",
  subtitle: "Mi trayectoria académica y fundamentos en desarrollo de software.",
  education: [
    {
      id: "edu-1",
      degree: "Tecnicatura en Desarrollo de Software",
      institution: "ISTEA - Educacion IT",
      period: "2023 - Presente",
      status: "En curso",
      description: "Formación integral en desarrollo Full Stack y móvil (Android), arquitectura de microservicios, APIs y gestión de bases de datos (SQL/NoSQL). Enfoque en prácticas modernas con IA (Vibe Coding/LLMs), DevOps, CI/CD, testing, UX/UI y gestión ágil de proyectos con Git."
      },
    {
      id: "edu-2",
      degree: "Ingles",
      institution: " Profesional / Avanzado",
      period: "Actualidad",
      status: "Completado",
      description: "comunicación oral/escrita y documentación técnica",
    },
  ],
};

export const estudiosDataEn: EstudiosSectionData = {
  title: "Education & Studies",
  subtitle: "My academic background and core software engineering foundations.",
  education: [
    {
      id: "edu-1",
      degree: "Associate Degree in Software Development",
      institution: "ISTEA - Educacion IT",
      period: "2023 - Present",
      status: "In Progress",
      description: "Comprehensive training in Full Stack and mobile (Android) development, microservices architecture, APIs, and database management (SQL/NoSQL). Focused on modern AI workflows (Vibe Coding/LLMs), DevOps, CI/CD, testing, UX/UI, and agile project management using Git."
    },
    {
      id: "edu-2",
      degree: "English",
      institution: "Professional / Advanced",
      period: "Current",
      status: "Completed",
      description: "Oral/written communication and technical documentation",
    },
  ],
};