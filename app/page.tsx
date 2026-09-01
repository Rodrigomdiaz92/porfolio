import Contacto from "@/components/Contacto";
import Presentacion from "@/components/Presentacion/Presentacion";
import Proyectos from "@/components/Proyectos/Proyectos";
import { projectsDataEs } from "@/data/projectsData";
import Image from "next/image";
import { carreraDataEs } from "@/data/carreraData";
import Carrera from "@/components/Carrera";
import StatsCharts from "@/components/StatsCharts";
import { skillsDataEs } from "@/data/skillsData";
import { contactoDataEs } from "@/data/contactoData";


// Datos de prueba (luego vendrán de tu sistema i18n)

export default function Home() {
  return (
    <div className="">
      <main className="">        
        <Presentacion/>
        <StatsCharts skillsData={skillsDataEs} projectsData={projectsDataEs} />
        <Proyectos data={projectsDataEs} />
        <Carrera data={carreraDataEs} />
        <Contacto data={contactoDataEs} />       
      </main>
    </div>
  );
}
