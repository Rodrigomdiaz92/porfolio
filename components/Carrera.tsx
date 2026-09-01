"use client";

import { CarreraSectionData } from "@/data/carreraData";
import { FaBriefcase, FaCalendarDays } from "react-icons/fa6";

interface CarreraProps {
  data: CarreraSectionData;
}

export default function Carrera({ data }: CarreraProps) {
  return (
    <section
      id="carrera"
      className="w-full bg-[var(--color-primary)] px-3 py-10 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-h2 text-2xl font-bold tracking-tight text-[var(--color-headers)] sm:text-4xl">
            {data.title}
          </h2>
          <p className="font-subtitle mt-2 max-w-2xl text-xs text-[var(--color-text-main)]/80 sm:mt-3 sm:text-lg">
            {data.subtitle}
          </p>
        </div>

        {/* Lista de Experiencias con Borde Lateral Destacado */}
        <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:gap-6">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between overflow-hidden rounded-lg border border-[var(--color-headers)]/20 border-l-4 border-l-[var(--color-btn-secondary)] bg-[var(--color-secondary)] p-4 shadow-md transition-all duration-300 hover:border-[var(--color-btn-secondary)]/50 sm:rounded-xl sm:p-6 sm:shadow-lg hover:sm:-translate-y-0.5"
            >
              {/* Cabecera de la Tarjeta */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                
                {/* Ícono + Rol */}
                <div className="flex items-center gap-3">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)] text-[var(--color-btn-secondary)] sm:size-10">
                    <FaBriefcase className="size-4 sm:size-5" />
                  </div>
                  <div>
                    <h3 className="font-subtitle text-base font-bold text-[var(--color-text-main)] sm:text-xl">
                      {item.role}
                    </h3>
                    <span className="font-subtitle text-xs font-semibold text-[var(--color-headers)] sm:text-sm">
                      {item.company}
                    </span>
                  </div>
                </div>

                {/* Periodo / Fecha Badge */}
                <div className="font-body inline-flex items-center gap-1.5 self-start rounded-md bg-[var(--color-primary)]/80 px-2.5 py-1 text-xs text-[var(--color-btn-secondary)] sm:self-center sm:text-sm">
                  <FaCalendarDays className="size-3" />
                  <span>
                    {item.startDate} — {item.endDate}
                  </span>
                </div>

              </div>

              {/* Descripción */}
              <p className="font-body mt-3 text-xs leading-relaxed text-[var(--color-text-main)]/80 sm:mt-4 sm:text-sm">
                {item.description}
              </p>

              {/* Habilidades Destacadas */}
              <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="font-body rounded border border-[var(--color-headers)]/30 bg-[var(--color-primary)]/60 px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-main)] sm:rounded-md sm:px-2.5 sm:py-1 sm:text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}