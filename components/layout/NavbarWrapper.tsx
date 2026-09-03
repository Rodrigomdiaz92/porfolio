"use client";

import Navbar from "@/components/layout/NavBar";
import { useLanguage } from "@/context/LanguageContext";

export default function NavbarWrapper() {
  const { language, setLanguage, navbarData } = useLanguage();

  return (
    <Navbar
      data={navbarData}
      currentLang={language}
      onLanguageChange={setLanguage}
    />
  );
}