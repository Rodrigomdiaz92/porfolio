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
      title: "Desarrollo Frontend Moderno con React & Next.js",
      issuer: "Platzi / Udemy",
      year: "2025",
      imageSrc: "/certificates/frontend-cert.jpg",
      credentialUrl: "https://example.com/credential/123",
    },
    {
      id: "cert-2",
      title: "TypeScript Professional Developer",
      issuer: "Coderhouse",
      year: "2024",
      imageSrc: "/certificates/typescript-cert.jpg",
      credentialUrl: "https://example.com/credential/456",
    },
    {
      id: "cert-3",
      title: "UI/UX Design Systems in Figma",
      issuer: "Interaction Design Foundation",
      year: "2024",
      imageSrc: "/certificates/uiux-cert.jpg",
      credentialUrl: "#",
    },
    {
      id: "cert-4",
      title: "Google Ads & Digital Marketing Specialist",
      issuer: "Google Career Certificates",
      year: "2023",
      imageSrc: "/certificates/google-ads-cert.jpg",
    },
  ],
};

export const certificacionesDataEn: CertificacionesSectionData = {
  title: "Certifications",
  subtitle: "Specialized accreditations and courses that support my continuous learning.",
  certifications: [
    {
      id: "cert-1",
      title: "Modern Frontend Development with React & Next.js",
      issuer: "Platzi / Udemy",
      year: "2025",
      imageSrc: "/certificates/frontend-cert.jpg",
      credentialUrl: "https://example.com/credential/123",
    },
    {
      id: "cert-2",
      title: "TypeScript Professional Developer",
      issuer: "Coderhouse",
      year: "2024",
      imageSrc: "/certificates/typescript-cert.jpg",
      credentialUrl: "https://example.com/credential/456",
    },
    {
      id: "cert-3",
      title: "UI/UX Design Systems in Figma",
      issuer: "Interaction Design Foundation",
      year: "2024",
      imageSrc: "/certificates/uiux-cert.jpg",
      credentialUrl: "#",
    },
    {
      id: "cert-4",
      title: "Google Ads & Digital Marketing Specialist",
      issuer: "Google Career Certificates",
      year: "2023",
      imageSrc: "/certificates/google-ads-cert.jpg",
    },
  ],
};