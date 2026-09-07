export interface CertificacionItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  imageSrc: string;
  credentialUrl?: string;
}

export interface CertificacionesSectionData {
  title: string;
  subtitle: string;
  certifications: CertificacionItem[];
}

export const certificacionesDataEs: CertificacionesSectionData = {
  title: "Certificaciones",
  subtitle: "Acreditaciones y cursos especializados que respaldan mi formación continua.",
  certifications: [
    {
      id: "cert-1",
      title: "Data Citizen",
      issuer: "Digital House",
      year: "2024",
      imageSrc: "/contenido/certificaciones/Data Citizen.jpg",
    },
    {
      id: "cert-2",
      title: "AI Starter Pack",
      issuer: "Digital House",
      year: "2024",
      imageSrc: "/contenido/certificaciones/aistarterpackdh.jpg",
    },
    {
      id: "cert-3",
      title: "React.js",
      issuer: "Coderhouse",
      year: "2022",
      imageSrc: "/contenido/certificaciones/reactjs.png",
      
    },
    {
      id: "cert-4",
      title: "UI/UX Design",
      issuer: "Coderhouse",
      year: "2021",
      imageSrc: "/contenido/certificaciones/diseñouxuiavanzado.png",
      
    },
    {
      id: "cert-5",
      title: "JavaScript",
      issuer: "Coderhouse",
      year: "2022",
      imageSrc: "/contenido/certificaciones/javascript.png",
      
    },
    {
      id: "cert-6",
      title: "Photoshop & Illustrator",
      issuer: "Coderhouse",
      year: "2023",
      imageSrc: "/contenido/certificaciones/photoshop.png",
      
    },
    {
      id: "cert-7",
      title: "Web Developer",
      issuer: "Coderhouse",
      year: "2021",
      imageSrc: "/contenido/certificaciones/desarrolloweb.png",
      
    },
    
    
  ],
};

export const certificacionesDataEn: CertificacionesSectionData = {
  title: "Certifications",
  subtitle: "Specialized accreditations and courses that support my continuous learning.",
  certifications: [
    {
      id: "cert-1",
      title: "Data Citizen",
      issuer: "Digital House",
      year: "2024",
      imageSrc: "/contenido/certificaciones/Data Citizen.jpg",
    },
    {
      id: "cert-2",
      title: "AI Starter Pack",
      issuer: "Digital House",
      year: "2024",
      imageSrc: "/contenido/certificaciones/aistarterpackdh.jpg",
    },
    {
      id: "cert-3",
      title: "React.js",
      issuer: "Coderhouse",
      year: "2022",
      imageSrc: "/contenido/certificaciones/reactjs.png",
      
    },
    {
      id: "cert-4",
      title: "UI/UX Design",
      issuer: "Coderhouse",
      year: "2021",
      imageSrc: "/contenido/certificaciones/diseñouxuiavanzado.png",
      
    },
    {
      id: "cert-5",
      title: "JavaScript",
      issuer: "Coderhouse",
      year: "2022",
      imageSrc: "/contenido/certificaciones/javascript.png",
      
    },
    {
      id: "cert-6",
      title: "Photoshop & Illustrator",
      issuer: "Coderhouse",
      year: "2023",
      imageSrc: "/contenido/certificaciones/photoshop.png",
      
    },
    {
      id: "cert-7",
      title: "Web Developer",
      issuer: "Coderhouse",
      year: "2021",
      imageSrc: "/contenido/certificaciones/desarrolloweb.png",
      
    },
  ],
};