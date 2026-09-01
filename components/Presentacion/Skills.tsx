"use client";

import { SkillsSectionData } from "@/data/skillsData";
import { FaCode, FaRobot, FaFigma, FaGear } from "react-icons/fa6";

interface SkillsProps {
  data: SkillsSectionData;
}

export default function Skills({ data }: SkillsProps) {
  const renderCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case "frontend":
        return <FaCode className="size-4 text-[var(--color-btn-secondary)] sm:size-6" />;
      case "ai-tools":
        return <FaRobot className="size-4 text-[var(--color-btn-secondary)] sm:size-6" />;
      case "ux-ui":
        return <FaFigma className="size-4 text-[var(--color-btn-secondary)] sm:size-6" />;
      case "practices":
        return <FaGear className="size-4 text-[var(--color-btn-secondary)] sm:size-6" />;
      default:
        return <FaCode className="size-4 text-[var(--color-btn-secondary)] sm:size-6" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="w-full bg-[var(--color-primary)] px-3 py-10 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Encabezado Compacto en Móvil */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-h2 text-2xl font-bold tracking-tight text-[var(--color-headers)] sm:text-4xl">
            {data.title}
          </h2>
          <p className="font-subtitle mt-2 max-w-2xl text-xs text-[var(--color-text-main)]/80 sm:mt-3 sm:text-lg">
            {data.subtitle}
          </p>
        </div>

        {/* Grid: Espaciado reducido (gap-3 en móvil, gap-6/8 en pantallas grandes) */}
        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:mt-12 md:grid-cols-2 md:gap-6 lg:gap-8">
          {data.categories.map((category) => (
            <div
              key={category.id}
              className="group relative flex flex-col justify-between rounded-lg border border-[var(--color-headers)]/20 bg-[var(--color-secondary)] p-4 shadow-md transition-all duration-300 hover:border-[var(--color-btn-secondary)]/50 sm:rounded-xl sm:p-6 sm:shadow-lg hover:sm:-translate-y-1"
            >
              <div>
                {/* Cabecera Compacta */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex size-8 items-center justify-center rounded-md bg-[var(--color-primary)] p-1.5 sm:size-12 sm:rounded-lg sm:p-2">
                    {renderCategoryIcon(category.id)}
                  </div>
                  <h3 className="font-subtitle text-base font-bold text-[var(--color-text-main)] sm:text-xl">
                    {category.categoryName}
                  </h3>
                </div>

                <p className="font-body mt-2 text-xs text-[var(--color-text-main)]/70 sm:mt-3 sm:text-sm">
                  {category.description}
                </p>

                {/* Badges Compactos */}
                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
                  {category.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="font-body rounded border border-[var(--color-headers)]/30 bg-[var(--color-primary)]/60 px-2 py-0.5 text-[11px] font-medium text-[var(--color-text-main)] transition-colors sm:rounded-md sm:px-3 sm:py-1.5 sm:text-xs hover:border-[var(--color-btn-secondary)] hover:text-[var(--color-btn-secondary)]"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}