"use client";

import { useRef } from "react";
import Image from "next/image";
import { CertificacionesSectionData } from "@/data/certificacionesData";
import { FaChevronLeft, FaChevronRight, FaAward } from "react-icons/fa6";

interface CertificacionesProps {
  data: CertificacionesSectionData;
}

export default function Certificaciones({ data }: CertificacionesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="certificaciones" className="w-full bg-[var(--color-primary)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado y controles de navegación */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-h2 text-2xl font-bold text-[var(--color-headers)] sm:text-4xl">
              {data.title}
            </h2>
            <p className="font-subtitle mt-2 max-w-xl text-xs text-[var(--color-text-main)]/80 sm:text-base">
              {data.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Anterior"
              className="flex size-10 items-center justify-center rounded-full border border-[var(--color-headers)]/20 bg-[var(--color-secondary)] text-[var(--color-text-main)] transition-all hover:border-[var(--color-btn-secondary)] hover:text-[var(--color-btn-secondary)]"
            >
              <FaChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Siguiente"
              className="flex size-10 items-center justify-center rounded-full border border-[var(--color-headers)]/20 bg-[var(--color-secondary)] text-[var(--color-text-main)] transition-all hover:border-[var(--color-btn-secondary)] hover:text-[var(--color-btn-secondary)]"
            >
              <FaChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Carrusel deslizable con clases para ocultar la barra de scroll (Firefox/IE/Chrome) */}
        <div
          ref={scrollContainerRef}
          className="mt-8 flex gap-6 overflow-x-auto scroll-smooth pb-4 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {data.certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative flex w-80 shrink-0 flex-col overflow-hidden rounded-xl border border-[var(--color-headers)]/20 bg-[var(--color-secondary)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-btn-secondary)]/50"
            >
              {/* Contenedor de Imagen */}
              <div className="relative h-48 w-full overflow-hidden bg-black/40">
                <Image
                  src={cert.imageSrc}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-transparent to-transparent" />
                
                {/* Overlay superior: Año y Emisor */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-semibold">
                  <span className="rounded-md bg-[var(--color-primary)]/90 px-2.5 py-1 text-[var(--color-btn-secondary)] backdrop-blur-sm">
                    {cert.issuer}
                  </span>
                  <span className="rounded-md bg-black/70 px-2.5 py-1 text-white backdrop-blur-sm">
                    {cert.year}
                  </span>
                </div>
              </div>

              {/* Contenido inferior */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div className="flex items-start gap-2">
                  <FaAward className="mt-1 size-5 shrink-0 text-[var(--color-btn-secondary)]" />
                  <h3 className="font-subtitle text-base font-bold text-[var(--color-text-main)] line-clamp-2">
                    {cert.title}
                  </h3>
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body mt-4 inline-flex items-center text-xs font-semibold text-[var(--color-btn-secondary)] underline-offset-4 hover:underline"
                  >
                    Ver Credencial →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}