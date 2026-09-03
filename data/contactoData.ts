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
  email: "rodrigomdiaz92@gmail.com",
  whatsapp: "+541161521824",
  whatsappDisplay: "+54 9 11 6152-1824",
  linkedin: "https://www.linkedin.com/in/rodrigomdiaz/",
  github: "https://github.com/Rodrigomdiaz92",
  cvEsUrl: "/cv/CV Diaz Rodrigo Frontend _ React Developer.pdf",
  cvEnUrl: "/cv/EN Diaz Rodrigo Frontend _ React Developer.pdf",
  closingMessage:
    "¡Estoy abierto a nuevos desafíos técnicos, proyectos innovadores y oportunidades de desarrollo!",
  
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
  email: "rodrigomdiaz92@gmail.com",
  whatsapp: "+541161521824",
  whatsappDisplay: "+54 9 11 6152-1824",
  linkedin: "https://www.linkedin.com/in/rodrigomdiaz/",
  github: "https://github.com/Rodrigomdiaz92",
  cvEsUrl: "/cv/CV Diaz Rodrigo Frontend _ React Developer.pdf",
  cvEnUrl: "/cv/EN Diaz Rodrigo Frontend _ React Developer.pdf",
  closingMessage:
    "I am open to new technical challenges, innovative projects, and professional development opportunities!",

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