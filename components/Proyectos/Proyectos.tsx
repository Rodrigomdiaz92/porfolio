"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectsSectionData } from "@/data/projectsData";
import { FaArrowUpRightFromSquare, FaFilter, FaLayerGroup } from "react-icons/fa6";

interface ProyectosProps {
  data: ProjectsSectionData;
}

export default function Proyectos({ data }: ProyectosProps) {
  const [selectedArea, setSelectedArea] = useState<string>("Todos");
  const [selectedTech, setSelectedTech] = useState<string>("Todas");

  // Extraer dinámicamente las áreas únicas
  const areas = useMemo(() => {
    const list = data.projects.map((p) => p.area);
    return ["Todos", ...Array.from(new Set(list))];
  }, [data.projects]);

  // Extraer dinámicamente las tecnologías únicas
  const technologies = useMemo(() => {
    const list = data.projects.flatMap((p) => p.technologies);
    return ["Todas", ...Array.from(new Set(list))];
  }, [data.projects]);

  // Filtrado dinámico
  const filteredProjects = useMemo(() => {
    return data.projects.filter((project) => {
      const matchArea = selectedArea === "Todos" || project.area === selectedArea;
      const matchTech =
        selectedTech === "Todas" || project.technologies.includes(selectedTech);
      return matchArea && matchTech;
    });
  }, [data.projects, selectedArea, selectedTech]);

  return (
    <section
      id="proyectos"
      className="w-full bg-[var(--color-primary)] px-3 py-10 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-h2 text-2xl font-bold tracking-tight text-[var(--color-headers)] sm:text-4xl">
            {data.title}
          </h2>
          <p className="font-subtitle mt-2 max-w-2xl text-xs text-[var(--color-text-main)]/80 sm:mt-3 sm:text-lg">
            {data.subtitle}
          </p>
        </div>

        {/* Panel de Filtros */}
        <div className="mt-6 flex flex-col gap-3 rounded-lg border border-[var(--color-headers)]/20 bg-[var(--color-secondary)] p-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:p-4">
          
          {/* Filtro por Área */}
          <div className="flex items-center gap-2">
            <FaLayerGroup className="size-4 text-[var(--color-btn-secondary)] shrink-0" />
            <span className="font-subtitle text-xs font-semibold text-[var(--color-text-main)] sm:text-sm">
              Área:
            </span>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="font-body w-full rounded border border-[var(--color-headers)]/30 bg-[var(--color-primary)] px-2.5 py-1 text-xs text-[var(--color-text-main)] outline-none transition-colors focus:border-[var(--color-btn-secondary)] sm:w-auto sm:text-sm"
            >
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro por Tecnología */}
          <div className="flex items-center gap-2">
            <FaFilter className="size-3.5 text-[var(--color-btn-secondary)] shrink-0" />
            <span className="font-subtitle text-xs font-semibold text-[var(--color-text-main)] sm:text-sm">
              Tecnología:
            </span>
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="font-body w-full rounded border border-[var(--color-headers)]/30 bg-[var(--color-primary)] px-2.5 py-1 text-xs text-[var(--color-text-main)] outline-none transition-colors focus:border-[var(--color-btn-secondary)] sm:w-auto sm:text-sm"
            >
              {technologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Mensaje si no hay resultados */}
        {filteredProjects.length === 0 ? (
          <div className="mt-12 text-center text-sm font-subtitle text-[var(--color-text-main)]/70">
            No se encontraron proyectos con los filtros seleccionados.
          </div>
        ) : (
          /* Contenedor de Tarjetas:
             - Móvil: Fila horizontal desplazable con scroll-snap.
             - Desktop (md+): Grid de 2 columnas.
          */
          <div className="mt-6 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-2 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex w-[82vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-lg border border-[var(--color-headers)]/20 bg-[var(--color-secondary)] p-4 shadow-md transition-all duration-300 hover:border-[var(--color-btn-secondary)]/50 sm:w-[320px] md:w-full md:rounded-xl md:p-6 md:shadow-lg hover:md:-translate-y-1"
              >
                <div>
                  {/* Vista Previa / Banner */}
                  <div className="relative h-36 w-full overflow-hidden rounded-md bg-[var(--color-primary)] sm:h-44 md:h-48">
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-subtitle text-[var(--color-headers)]/50">
                      {/* Placeholder cuando no hay imagen real en public/projects */}
                      Preview: {project.title}
                    </div>
                  </div>

                  {/* Área Badge */}
                  <span className="font-subtitle mt-4 inline-block text-[11px] font-semibold text-[var(--color-btn-secondary)] uppercase tracking-wider">
                    {project.area}
                  </span>

                  {/* Título */}
                  <h3 className="font-subtitle mt-1 text-base font-bold text-[var(--color-text-main)] sm:text-xl">
                    {project.title}
                  </h3>

                  {/* Descripción */}
                  <p className="font-body mt-2 text-xs leading-relaxed text-[var(--color-text-main)]/80 sm:text-sm">
                    {project.description}
                  </p>

                  {/* Lista de Tecnologías */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-body rounded border border-[var(--color-headers)]/30 bg-[var(--color-primary)]/70 px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-main)] sm:text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón / Enlace */}
                <div className="mt-6 pt-2 border-t border-[var(--color-headers)]/10">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-btn-secondary)] transition-colors hover:text-[var(--color-headers)] sm:text-sm"
                  >
                    <span>Ver Proyecto</span>
                    <FaArrowUpRightFromSquare className="size-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}