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
        { name: "JavaScript" },
        { name: "HTML5 & CSS3" },
        { name: "Tailwind CSS" },        
        { name: "Node.js" },
        { name: "Diseño Responsivo" },        
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
        { name: "MYSQL" },
        { name: "Testing" },
        { name: "Performance Optimization" },
        { name: "Clean Code" },
        { name: "Agile / Scrum" },
      ],
    },
  ],
};

export const skillsDataEn: SkillsSectionData = {
  title: "Skills & Technologies",
  subtitle: "Tools and methodologies I use to build high-performance digital products.",
  categories: [
    {
      id: "frontend",
      categoryName: "Frontend & Web",
      description: "Development of modern, reactive, and accessible interfaces.",
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "HTML5 & CSS3" },
        { name: "Tailwind CSS" },
        { name: "Node.js" },
        { name: "Responsive Design" },
      ],
    },
    {
      id: "ai-tools",
      categoryName: "AI & Developer Tools",
      description: "AI assistants to speed up refactoring, layout design, and debugging.",
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
      categoryName: "UX/UI Design",
      description: "Creation and efficient handoff of prototypes into production code.",
      skills: [
        { name: "Figma" },
        { name: "Design Systems" },
        { name: "Wireframing" },
        { name: "Interactive Prototyping" },
        { name: "User-Centered Design" },
      ],
    },
    {
      id: "practices",
      categoryName: "Integration & Best Practices",
      description: "Clean architecture, performance optimization, and team collaboration.",
      skills: [
        { name: "REST APIs" },
        { name: "Firebase" },
        { name: "Performance Optimization" },
        { name: "MYSQL" },
        { name: "Clean Code" },
        { name: "Testing" },
        { name: "Agile / Scrum" },
      ],
    },
  ],
};