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
  subtitle:
    "Trayectoria profesional enfocada en desarrollo web, optimización de rendimiento, mentoría técnica y asesoría comercial.",
  items: [
    {
      id: "freelance-dev",
      role: "Desarrollador Frontend Freelance",
      company: "Proyectos Independientes",
      startDate: "2022",
      endDate: "Presente",
      description:
        "Desarrollo de aplicaciones web dinámicas con React y Next.js incorporando asistentes de IA para optimizar el código en un 30%. Optimización del rendimiento e interfaces reduciendo la tasa de rebote. Construcción de sistemas de componentes desde Figma e integración de APIs RESTful y Firebase.",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "REST APIs",
        "Firebase",
        "Figma",
        "IA Assistants",
      ],
    },
    {
      id: "mentor-digital-house",
      role: "Mentor de Frontend & Competencias Digitales",
      company: "Digital House",
      startDate: "2022",
      endDate: "2025",
      description:
        "Dictado de formación técnica en desarrollo frontend e inducción a herramientas de IA para comisiones de más de 50 alumnos. Planificación de tareas y optimización de flujos de trabajo en equipos multidisciplinarios bajo metodologías ágiles.",
      skills: [
        "React.js",
        "JavaScript",
        "HTML5 & CSS3",
        "IA Tools",
        "Agile / Scrum",
        "Liderazgo",
      ],
    },
    {
      id: "tutor-coderhouse",
      role: "Tutor y Mentor de Proyectos",
      company: "Coderhouse",
      startDate: "2021",
      endDate: "2023",
      description:
        "Coordinación, revisión y mentoría de más de 60 proyectos centrados en la experiencia de usuario y diseño de interfaces (Figma).",
      skills: ["UX/UI Design", "Figma", "Feedback Técnico", "Mentoring"],
    },
    {
      id: "compumundo-asesor",
      role: "Asesor Comercial Senior",
      company: "Compumundo",
      startDate: "2017",
      endDate: "2021",
      description:
        "Asesoramiento especializado en productos tecnológicos y soporte de primer nivel en entornos comerciales de alta demanda.",
      skills: [
        "Atención al Cliente",
        "Soporte Técnico",
        "Productos Tecnológicos",
        "Ventas",
      ],
    },
  ],
};

export const carreraDataEn: CarreraSectionData = {
  title: "Career & Experience",
  subtitle:
    "Professional trajectory focused on web development, performance optimization, technical mentoring, and commercial advisory.",
  items: [
    {
      id: "freelance-dev",
      role: "Freelance Frontend Developer",
      company: "Independent Projects",
      startDate: "2022",
      endDate: "Present",
      description:
        "Development of dynamic web applications using React and Next.js, integrating AI assistants to optimize code efficiency by 30%. UI performance optimization to decrease bounce rate. Building component systems from Figma designs and integrating RESTful APIs and Firebase.",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "REST APIs",
        "Firebase",
        "Figma",
        "AI Assistants",
      ],
    },
    {
      id: "mentor-digital-house",
      role: "Frontend & Digital Skills Mentor",
      company: "Digital House",
      startDate: "2022",
      endDate: "2025",
      description:
        "Provided technical training in frontend development and onboarding to AI tools for cohorts of over 50 students. Task planning and workflow optimization in multidisciplinary teams using agile methodologies.",
      skills: [
        "React.js",
        "JavaScript",
        "HTML5 & CSS3",
        "AI Tools",
        "Agile / Scrum",
        "Leadership",
      ],
    },
    {
      id: "tutor-coderhouse",
      role: "Project Tutor & Mentor",
      company: "Coderhouse",
      startDate: "2021",
      endDate: "2023",
      description:
        "Coordination, code review, and mentoring for over 60 projects focused on user experience and interface design (Figma).",
      skills: ["UX/UI Design", "Figma", "Technical Feedback", "Mentoring"],
    },
    {
      id: "compumundo-asesor",
      role: "Senior Commercial Advisor",
      company: "Compumundo",
      startDate: "2017",
      endDate: "2021",
      description:
        "Specialized advisory on tech products and first-line technical support in high-demand retail environments.",
      skills: [
        "Customer Service",
        "Technical Support",
        "Tech Products",
        "Sales",
      ],
    },
  ],
};