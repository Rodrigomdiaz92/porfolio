export interface ProjectItem {
  id: string;
  title: string;
  area: string;
  description: string;
  technologies: string[];
  link: string;
  imageSrc: string;
}

export interface ProjectsSectionData {
  title: string;
  subtitle: string;
  areaLabel: string;
  technologyLabel: string;
  allAreasLabel: string;
  allTechnologiesLabel: string;
  emptyStateText: string;
  viewProjectText: string;
  projects: ProjectItem[];
}

export const projectsDataEs: ProjectsSectionData = {
  title: "Proyectos Destacados",
  subtitle: "Explora los desarrollos más relevantes, desde plataformas de charter marítimo hasta aplicaciones web interactivas.",
  areaLabel: "Área:",
  technologyLabel: "Tecnología:",
  allAreasLabel: "Todos",
  allTechnologiesLabel: "Todas",
  emptyStateText: "No se encontraron proyectos con los filtros seleccionados.",
  viewProjectText: "Ver Proyecto",
  projects: [
    {
      id: "sailing-the-world",
      title: "Sailing The World - Fleet Portal",
      area: "Frontend / Web Development",
      description: "Plataforma de gestión y reservas para flota de catamaranes en Islas San Blas. Catálogo interactivo de embarcaciones y perfiles de capitanes.",
      technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      link: "https://sailingtheworld.com",
      imageSrc: "/projects/sailing.jpg",
    },
    {
      id: "booking-app",
      title: "Charter Booking Management System",
      area: "SaaS / Fullstack Integration",
      description: "Sistema interno para coordinar reservas de chárter, cálculo automático de tarifas por temporada y seguimiento de clientes.",
      technologies: ["React.js", "Firebase", "TypeScript", "REST APIs"],
      link: "#",
      imageSrc: "/projects/booking.jpg",
    },
    {
      id: "portfolio-dev",
      title: "Interactive Developer Portfolio",
      area: "Frontend / UX Design",
      description: "Portfolio web responsivo optimizado para SEO, accesibilidad y rendimiento. Integra arquitectura modular y temas personalizados.",
      technologies: ["Next.js", "Tailwind CSS", "Figma", "TypeScript"],
      link: "#",
      imageSrc: "/projects/portfolio.jpg",
    },
    {
      id: "e-commerce-store",
      title: "Nautical Supplies Store",
      area: "E-Commerce",
      description: "Tienda online de repuestos y equipamiento náutico con carrito de compras en tiempo real y filtrado avanzado de productos.",
      technologies: ["React.js", "State Management", "Tailwind CSS", "REST APIs"],
      link: "#",
      imageSrc: "/projects/ecommerce.jpg",
    },
    {
      id: "ai-copilot-dashboard",
      title: "AI Analytics Dashboard",
      area: "AI / Web Development",
      description: "Panel de control interactivo para la visualización de métricas y análisis predictivo potenciado por inteligencia artificial.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ChatGPT API"],
      link: "#",
      imageSrc: "/projects/ai-dashboard.jpg",
    },
    {
      id: "weather-marine-app",
      title: "San Blas Marine Weather Forecast",
      area: "Frontend / Mobile Web",
      description: "Aplicación meteorológica marina para navegantes, con reporte de mareas, dirección de vientos y alertas climáticas en vivo.",
      technologies: ["React.js", "REST APIs", "CSS3", "JavaScript (ES6+)"],
      link: "#",
      imageSrc: "/projects/weather.jpg",
    },
    {
      id: "design-system-kit",
      title: "Nautical UI Design System",
      area: "UI/UX Design",
      description: "Sistema de diseño completo en Figma transferido a componentes reutilizables de React. Incluye guías de estilo, botones y tokens.",
      technologies: ["Figma", "Design Systems", "Tailwind CSS", "React.js"],
      link: "#",
      imageSrc: "/projects/design-system.jpg",
    },
    {
      id: "campaign-analytics",
      title: "Ads Campaign Performance Tracker",
      area: "Frontend / Marketing Tools",
      description: "Herramienta de análisis geográfico y conversión para optimizar la inversión publicitaria internacional.",
      technologies: ["React.js", "TypeScript", "REST APIs", "State Management"],
      link: "#",
      imageSrc: "/projects/ads-tracker.jpg",
    },
    {
      id: "task-manager-agile",
      title: "Agile Crew Task Manager",
      area: "SaaS / Fullstack Integration",
      description: "Aplicación de organización de tareas bajo metodología Scrum para tripulaciones y equipos de mantenimiento de embarcaciones.",
      technologies: ["React.js", "Firebase", "Agile / Scrum", "Tailwind CSS"],
      link: "#",
      imageSrc: "/projects/tasks.jpg",
    },
    {
      id: "landing-catamaran",
      title: "Leopard 40 Promo Landing Page",
      area: "Frontend / UX Design",
      description: "Landing page orientada a la conversión para promocionar excursiones exclusivas en catamarán con galería inmersiva de imágenes.",
      technologies: ["Next.js", "Tailwind CSS", "Figma", "HTML5 & CSS3"],
      link: "#",
      imageSrc: "/projects/landing-catamaran.jpg",
    },
  ],
};

export const projectsDataEn: ProjectsSectionData = {
  title: "Featured Projects",
  subtitle: "Explore the most relevant developments, from maritime charter platforms to interactive web applications.",
  areaLabel: "Area:",
  technologyLabel: "Technology:",
  allAreasLabel: "All",
  allTechnologiesLabel: "All",
  emptyStateText: "No projects found matching the selected filters.",
  viewProjectText: "View Project",
  projects: [
    {
      id: "sailing-the-world",
      title: "Sailing The World - Fleet Portal",
      area: "Frontend / Web Development",
      description: "Management and booking platform for a catamaran fleet in San Blas Islands. Interactive vessel catalog and captain profiles.",
      technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      link: "https://sailingtheworld.com",
      imageSrc: "/projects/sailing.jpg",
    },
    {
      id: "booking-app",
      title: "Charter Booking Management System",
      area: "SaaS / Fullstack Integration",
      description: "Internal system to coordinate charter bookings, automated seasonal rate calculations, and customer tracking.",
      technologies: ["React.js", "Firebase", "TypeScript", "REST APIs"],
      link: "#",
      imageSrc: "/projects/booking.jpg",
    },
    {
      id: "portfolio-dev",
      title: "Interactive Developer Portfolio",
      area: "Frontend / UX Design",
      description: "Responsive web portfolio optimized for SEO, accessibility, and high performance. Features modular architecture and custom themes.",
      technologies: ["Next.js", "Tailwind CSS", "Figma", "TypeScript"],
      link: "#",
      imageSrc: "/projects/portfolio.jpg",
    },
    {
      id: "e-commerce-store",
      title: "Nautical Supplies Store",
      area: "E-Commerce",
      description: "Online store for marine spare parts and equipment featuring a real-time shopping cart and advanced product filtering.",
      technologies: ["React.js", "State Management", "Tailwind CSS", "REST APIs"],
      link: "#",
      imageSrc: "/projects/ecommerce.jpg",
    },
    {
      id: "ai-copilot-dashboard",
      title: "AI Analytics Dashboard",
      area: "AI / Web Development",
      description: "Interactive control panel for metric visualization and predictive analytics powered by artificial intelligence.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ChatGPT API"],
      link: "#",
      imageSrc: "/projects/ai-dashboard.jpg",
    },
    {
      id: "weather-marine-app",
      title: "San Blas Marine Weather Forecast",
      area: "Frontend / Mobile Web",
      description: "Marine weather application for sailors, featuring tide reports, wind direction, and live weather alerts.",
      technologies: ["React.js", "REST APIs", "CSS3", "JavaScript (ES6+)"],
      link: "#",
      imageSrc: "/projects/weather.jpg",
    },
    {
      id: "design-system-kit",
      title: "Nautical UI Design System",
      area: "UI/UX Design",
      description: "Comprehensive design system in Figma mapped to reusable React components. Includes style guides, buttons, and tokens.",
      technologies: ["Figma", "Design Systems", "Tailwind CSS", "React.js"],
      link: "#",
      imageSrc: "/projects/design-system.jpg",
    },
    {
      id: "campaign-analytics",
      title: "Ads Campaign Performance Tracker",
      area: "Frontend / Marketing Tools",
      description: "Geographic analytics and conversion tracking tool designed to optimize international ad spend.",
      technologies: ["React.js", "TypeScript", "REST APIs", "State Management"],
      link: "#",
      imageSrc: "/projects/ads-tracker.jpg",
    },
    {
      id: "task-manager-agile",
      title: "Agile Crew Task Manager",
      area: "SaaS / Fullstack Integration",
      description: "Task organization application using Scrum methodology for crews and boat maintenance teams.",
      technologies: ["React.js", "Firebase", "Agile / Scrum", "Tailwind CSS"],
      link: "#",
      imageSrc: "/projects/tasks.jpg",
    },
    {
      id: "landing-catamaran",
      title: "Leopard 40 Promo Landing Page",
      area: "Frontend / UX Design",
      description: "Conversion-oriented landing page created to promote exclusive catamaran excursions with an immersive image gallery.",
      technologies: ["Next.js", "Tailwind CSS", "Figma", "HTML5 & CSS3"],
      link: "#",
      imageSrc: "/projects/landing-catamaran.jpg",
    },
  ],
};