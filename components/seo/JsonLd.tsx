export default function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rodrigo Díaz",
    jobTitle: "Lead Frontend Developer & Digital Product Manager",
    url: "https://www.rodrigomdiaz.net.ar/",
    sameAs: [
      "https://www.linkedin.com/in/rodrigomdiaz", // Agrega tu link de LinkedIn
      "https://github.com/rodrigomdiaz92",
      
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX Design",
      "Flutter",
      "Search Engine Optimization (SEO)",
      "Digital Marketing",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Rodrigo Díaz - Freelance",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}