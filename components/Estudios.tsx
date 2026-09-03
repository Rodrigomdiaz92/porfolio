"use client";

import { EstudiosSectionData } from "@/data/estudiosData";
import { FaGraduationCap, FaCalendarDays } from "react-icons/fa6";

interface EstudiosProps {
  data: EstudiosSectionData;
}

export default function Estudios({ data }: EstudiosProps) {
  return (
    <section id="estudios" className="w-full bg-[var(--color-primary)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-h2 text-2xl font-bold text-[var(--color-headers)] sm:text-4xl">
            {data.title}
          </h2>
          <p className="font-subtitle mt-2 max-w-2xl text-xs text-[var(--color-text-main)]/80 sm:text-lg">
            {data.subtitle}
          </p>
        </div>

        {/* Tarjetas de estudios */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.education.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-[var(--color-headers)]/20 bg-[var(--color-secondary)] p-6 shadow-md transition-all hover:border-[var(--color-btn-secondary)]/40 hover:shadow-lg"
            >
              <div>
                {/* Badges de fecha y estado */}
                <div className="flex items-center justify-between gap-2 border-b border-[var(--color-headers)]/10 pb-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-[var(--color-text-main)]/70">
                    <FaCalendarDays className="size-3.5 text-[var(--color-btn-secondary)]" />
                    <span>{item.period}</span>
                  </div>
                  <span className="rounded-full bg-[var(--color-btn-secondary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-btn-secondary)] border border-[var(--color-btn-secondary)]/20">
                    {item.status}
                  </span>
                </div>

                {/* Título de la carrera e institución */}
                <div className="mt-4 flex items-start gap-3">
                  <div className="rounded-lg bg-[var(--color-primary)] p-2.5 text-[var(--color-btn-secondary)] border border-[var(--color-headers)]/10">
                    <FaGraduationCap className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-subtitle text-lg font-bold text-[var(--color-text-main)]">
                      {item.degree}
                    </h3>
                    <p className="font-body text-xs font-medium text-[var(--color-btn-secondary)]">
                      {item.institution}
                    </p>
                  </div>
                </div>

                {/* Descripción */}
                <p className="font-body mt-4 text-xs leading-relaxed text-[var(--color-text-main)]/80 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}