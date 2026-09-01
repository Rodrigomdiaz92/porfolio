export interface SkillItem {
  name: string;
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillsSectionData {
  title: string;
  subtitle: string;
  categories: SkillCategory[];
}

export const skillsDataEs: SkillsSectionData = {
  title: "Skills & Tecnologías",
  subtitle: "Herramientas y metodologías que utilizo para construir productos digitales de alto rendimiento.",
  categories: [
    {
      id: "frontend",
      categoryName: "Frontend & Web",
      description: "Desarrollo de interfaces modernas, reactivas y accesibles.",
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "JavaScript (ES6+)" },
        { name: "HTML5 & CSS3" },
        { name: "Tailwind CSS / Bootstrap" },
        { name: "State Management" },
      ],
    },
    {
      id: "ai-tools",
      categoryName: "AI & Developer Tools",
      description: "Asistentes de IA para acelerar refactorizaciones, maquetado y debugging.",
      skills: [
        { name: "GitHub Copilot" },
        { name: "ChatGPT / Gemini / Claude" },
        { name: "Git & GitHub" },
        { name: "Git Flow" },
        { name: "VS Code" },
      ],
    },
    {
      id: "ux-ui",
      categoryName: "Diseño UX/UI",
      description: "Creación y transferencia eficiente de prototipos a código.",
      skills: [
        { name: "Figma" },
        { name: "Design Systems" },
        { name: "Wireframing" },
        { name: "Prototipado Interactivo" },
        { name: "User-Centered Design" },
      ],
    },
    {
      id: "practices",
      categoryName: "Integración y Prácticas",
      description: "Arquitectura limpia, optimización y trabajo colaborativo.",
      skills: [
        { name: "REST APIs" },
        { name: "Firebase" },
        { name: "Performance Optimization" },
        { name: "Clean Code" },
        { name: "Agile / Scrum" },
      ],
    },
  ],
};