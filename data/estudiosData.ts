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
      degree: "Tecnicatura Universitaria en Programación",
      institution: "Universidad Tecnológica Nacional (UTN)",
      period: "2023 - Presente",
      status: "En curso",
      description: "Enfoque en arquitectura de software, bases de datos, estructuras de datos avanzadas y desarrollo web.",
    },
    {
      id: "edu-2",
      degree: "Desarrollo Web Full Stack",
      institution: "Bootcamp / Especialización",
      period: "2022 - 2023",
      status: "Completado",
      description: "Formación intensiva basada en proyectos reales, metodologías ágiles (Scrum), React, Node.js y gestión de bases de datos.",
    },
  ],
};

export const estudiosDataEn: EstudiosSectionData = {
  title: "Education & Studies",
  subtitle: "My academic background and core software engineering foundations.",
  education: [
    {
      id: "edu-1",
      degree: "Associate Degree in Computer Programming",
      institution: "National Technological University (UTN)",
      period: "2023 - Present",
      status: "In Progress",
      description: "Focused on software architecture, databases, advanced data structures, and web development.",
    },
    {
      id: "edu-2",
      degree: "Full Stack Web Development",
      institution: "Bootcamp / Specialization",
      period: "2022 - 2023",
      status: "Completed",
      description: "Intensive hands-on training built on real projects, agile methodologies (Scrum), React, Node.js, and database management.",
    },
  ],
};