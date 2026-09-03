export interface ContactoSectionData {
  title: string;
  subtitle: string;
  email: string;
  whatsapp: string; // Número de WhatsApp con código de país (ej: "5491112345678")
  whatsappDisplay: string; // Formato legible para mostrar en pantalla
  linkedin: string;
  github: string;
  cvEsUrl: string;
  cvEnUrl: string;
  closingMessage: string;

  // Textos para la interfaz y etiquetas del formulario
  channelsTitle: string;
  channelsSubtitle: string;
  linkedinLabel: string;
  githubLabel: string;
  cvTitle: string;
  cvSubtitle: string;
  formTitle: string;
  formLabels: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submitButton: string;
  };
}

export const contactoDataEs: ContactoSectionData = {
  title: "Contacto & Colaboración",
  subtitle:
    "¿Tienes un proyecto en mente o quieres sumar un perfil Fullstack/Frontend a tu equipo? Hablemos.",
  email: "tu-email@ejemplo.com",
  whatsapp: "5491112345678",
  whatsappDisplay: "+54 9 11 1234-5678",
  linkedin: "https://linkedin.com/in/tu-perfil",
  github: "https://github.com/tu-usuario",
  cvEsUrl: "/cv/CV_Rodrigo_Diaz_ES.pdf",
  cvEnUrl: "/cv/CV_Rodrigo_Diaz_EN.pdf",
  closingMessage:
    "¡Estoy siempre abierto a nuevos desafíos técnicos, proyectos innovadores y oportunidades de desarrollo!",
  
  channelsTitle: "Canales Directos",
  channelsSubtitle: "Conéctate conmigo a través de cualquiera de estos medios:",
  linkedinLabel: "Perfil de LinkedIn",
  githubLabel: "Repositorios GitHub",
  cvTitle: "Descargar Currículum",
  cvSubtitle: "Obtén una copia actualizada en el idioma que prefieras:",
  formTitle: "Enviar un Mensaje",
  formLabels: {
    name: "Nombre",
    namePlaceholder: "Tu nombre completo",
    email: "Correo Electrónico",
    emailPlaceholder: "tu@email.com",
    subject: "Asunto",
    subjectPlaceholder: "Propuesta de proyecto / Oportunidad laboral",
    message: "Mensaje",
    messagePlaceholder: "Describe los detalles de tu consulta o proyecto...",
    submitButton: "Enviar Mensaje",
  },
};

export const contactoDataEn: ContactoSectionData = {
  title: "Contact & Collaboration",
  subtitle:
    "Have a project in mind or looking to add a Fullstack/Frontend developer to your team? Let's talk.",
  email: "tu-email@ejemplo.com",
  whatsapp: "5491112345678",
  whatsappDisplay: "+54 9 11 1234-5678",
  linkedin: "https://linkedin.com/in/tu-perfil",
  github: "https://github.com/tu-usuario",
  cvEsUrl: "/cv/CV_Rodrigo_Diaz_ES.pdf",
  cvEnUrl: "/cv/CV_Rodrigo_Diaz_EN.pdf",
  closingMessage:
    "I am always open to new technical challenges, innovative projects, and professional development opportunities!",

  channelsTitle: "Direct Channels",
  channelsSubtitle: "Connect with me through any of these channels:",
  linkedinLabel: "LinkedIn Profile",
  githubLabel: "GitHub Repositories",
  cvTitle: "Download Resume",
  cvSubtitle: "Get an updated copy in your preferred language:",
  formTitle: "Send a Message",
  formLabels: {
    name: "Name",
    namePlaceholder: "Your full name",
    email: "Email Address",
    emailPlaceholder: "you@example.com",
    subject: "Subject",
    subjectPlaceholder: "Project proposal / Job opportunity",
    message: "Message",
    messagePlaceholder: "Describe the details of your inquiry or project...",
    submitButton: "Send Message",
  },
};