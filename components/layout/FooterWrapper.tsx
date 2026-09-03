"use client";

import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function FooterWrapper() {
  const { footerData } = useLanguage();

  return <Footer data={footerData} />;
}