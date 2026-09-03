"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Language, navbarDataEs, navbarDataEn } from "@/data/navbarData";
import { heroDataEs, heroDataEn } from "@/data/heroData";
import { skillsDataEs, skillsDataEn } from "@/data/skillsData";
import { projectsDataEs, projectsDataEn } from "@/data/projectsData";
import { carreraDataEs, carreraDataEn } from "@/data/carreraData";
import { contactoDataEs, contactoDataEn } from "@/data/contactoData";
import { footerDataEs, footerDataEn } from "@/data/footerData";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  navbarData: typeof navbarDataEs;
  heroData: typeof heroDataEs;
  skillsData: typeof skillsDataEs;
  projectsData: typeof projectsDataEs;
  carreraData: typeof carreraDataEs;
  contactoData: typeof contactoDataEs;
  footerData: typeof footerDataEs;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const navbarData = language === "es" ? navbarDataEs : navbarDataEn;
  const heroData = language === "es" ? heroDataEs : heroDataEn;
  const skillsData = language === "es" ? skillsDataEs : skillsDataEn;
  const projectsData = language === "es" ? projectsDataEs : projectsDataEn;
  const carreraData = language === "es" ? carreraDataEs : carreraDataEn;
  const contactoData = language === "es" ? contactoDataEs : contactoDataEn;
  const footerData = language === "es" ? footerDataEs : footerDataEn;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        navbarData,
        heroData,
        skillsData,
        projectsData,
        carreraData,
        contactoData,
        footerData,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
}