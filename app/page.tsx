"use client";

import Presentacion from "@/components/Presentacion/Presentacion";
import StatsCharts from "@/components/StatsCharts";
import Proyectos from "@/components/Proyectos/Proyectos";
import Carrera from "@/components/Carrera";
import Contacto from "@/components/Contacto";
import { useLanguage } from "@/context/LanguageContext";
import Certificaciones from "@/components/Certificaciones";
import Estudios from "@/components/Estudios";

export default function Home() {
  const { projectsData, skillsData, carreraData, contactoData, certificacionesData, estudiosData } = useLanguage();

  return (
    <main>
      <Presentacion />
      <StatsCharts skillsData={skillsData} projectsData={projectsData} />
      <Proyectos data={projectsData} />
      <Certificaciones data={certificacionesData} />
      <Estudios data={estudiosData} />
      <Carrera data={carreraData} />
      <Contacto data={contactoData} />
    </main>
  );
}