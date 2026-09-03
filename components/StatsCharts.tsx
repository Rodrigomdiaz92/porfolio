"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { SkillsSectionData } from "@/data/skillsData";
import { ProjectsSectionData } from "@/data/projectsData";
import { useLanguage } from "@/context/LanguageContext";
import { FaChartPie, FaChartColumn, FaArrowRight } from "react-icons/fa6";

interface StatsChartsProps {
  skillsData: SkillsSectionData;
  projectsData: ProjectsSectionData;
}

const CATEGORY_COLORS = ["#AB64F2", "#3865F2", "#35A9F2", "#7E22CE", "#EC4899"];

export default function StatsCharts({
  skillsData,
  projectsData,
}: StatsChartsProps) {
  const { language } = useLanguage();

  // Diccionario local para etiquetas según el idioma activo
  const labels = useMemo(() => {
    return language === "es"
      ? {
          title: "Resumen de Tecnologías & Proyectos",
          subtitle:
            "Visualización analítica sobre la distribución de mis habilidades y el uso de tecnologías en proyectos.",
          skillsChartTitle: "Distribución de Skills",
          skillsChartTooltipLabel: "Proporción",
          skillsBtn: "Ver detalle de Skills",
          projectsChartTitle: "Tecnologías más Usadas",
          projectsChartTooltipLabel: "Frecuencia",
          projectsChartTooltipUnit: "proyecto(s)",
          projectsBtn: "Ver todos los Proyectos",
        }
      : {
          title: "Technologies & Projects Overview",
          subtitle:
            "Analytical visualization of skills distribution and technology usage across projects.",
          skillsChartTitle: "Skills Distribution",
          skillsChartTooltipLabel: "Proportion",
          skillsBtn: "View Skills detail",
          projectsChartTitle: "Most Used Technologies",
          projectsChartTooltipLabel: "Frequency",
          projectsChartTooltipUnit: "project(s)",
          projectsBtn: "View all Projects",
        };
  }, [language]);

  const dynamicSkillsChart = useMemo(() => {
    const totalSkills = skillsData.categories.reduce(
      (acc, cat) => acc + cat.skills.length,
      0
    );

    if (totalSkills === 0) return [];

    return skillsData.categories.map((cat, index) => {
      const count = cat.skills.length;
      const percentage = Math.round((count / totalSkills) * 100);
      return {
        name: cat.categoryName,
        value: percentage,
        count,
        color: CATEGORY_COLORS[index % CATEGORY_COLORS.length],
      };
    });
  }, [skillsData]);

  const dynamicProjectsChart = useMemo(() => {
    const techCounts: Record<string, number> = {};

    projectsData.projects.forEach((project) => {
      project.technologies.forEach((tech) => {
        techCounts[tech] = (techCounts[tech] || 0) + 1;
      });
    });

    return Object.entries(techCounts)
      .map(([technology, count]) => ({ technology, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 7);
  }, [projectsData]);

  return (
    <section
      id="estadisticas"
      className="w-full bg-[var(--color-primary)] px-3 py-10 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-h2 text-2xl font-bold tracking-tight text-[var(--color-headers)] sm:text-4xl">
            {labels.title}
          </h2>
          <p className="font-subtitle mt-2 max-w-2xl text-xs text-[var(--color-text-main)]/80 sm:mt-3 sm:text-lg">
            {labels.subtitle}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {/* Tarjeta 1: Gráfico de Torta */}
          <div className="flex flex-col justify-between rounded-lg border border-[var(--color-headers)]/20 bg-[var(--color-secondary)] p-4 shadow-md sm:rounded-xl sm:p-6 sm:shadow-lg">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--color-headers)]/10 pb-3">
                <div className="flex items-center gap-2">
                  <FaChartPie className="size-4 text-[var(--color-btn-secondary)] sm:size-5" />
                  <h3 className="font-subtitle text-base font-bold text-[var(--color-text-main)] sm:text-lg">
                    {labels.skillsChartTitle}
                  </h3>
                </div>
              </div>

              <div className="mt-4 h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={dynamicSkillsChart}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {dynamicSkillsChart.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E0326",
                        borderColor: "#AB64F2",
                        borderRadius: "8px",
                        color: "#FFFFFF",
                        fontSize: "12px",
                      }}
                      formatter={(value?: unknown) => [
                        `${value ?? 0}%`,
                        labels.skillsChartTooltipLabel,
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-2 flex flex-wrap justify-center gap-3">
                {dynamicSkillsChart.map((item) => (
                  <div key={item.name} className="flex items-center gap-1.5">
                    <span
                      className="size-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-body text-xs text-[var(--color-text-main)]/80">
                      {item.name} ({item.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-headers)]/10">
              <Link
                href="#skills"
                className="font-body inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-xs font-semibold text-[var(--color-btn-secondary)] border border-[var(--color-btn-secondary)]/30 transition-all hover:bg-[var(--color-btn-secondary)] hover:text-[var(--color-primary)] sm:text-sm"
              >
                <span>{labels.skillsBtn}</span>
                <FaArrowRight className="size-3" />
              </Link>
            </div>
          </div>

          {/* Tarjeta 2: Gráfico de Barras */}
          <div className="flex flex-col justify-between rounded-lg border border-[var(--color-headers)]/20 bg-[var(--color-secondary)] p-4 shadow-md sm:rounded-xl sm:p-6 sm:shadow-lg">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--color-headers)]/10 pb-3">
                <div className="flex items-center gap-2">
                  <FaChartColumn className="size-4 text-[var(--color-btn-secondary)] sm:size-5" />
                  <h3 className="font-subtitle text-base font-bold text-[var(--color-text-main)] sm:text-lg">
                    {labels.projectsChartTitle}
                  </h3>
                </div>
              </div>

              <div className="mt-4 h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dynamicProjectsChart}
                    margin={{ top: 10, right: 10, left: -20, bottom: 25 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#AB64F2"
                      opacity={0.15}
                    />
                    <XAxis
                      dataKey="technology"
                      stroke="#FFFFFF"
                      fontSize={10}
                      tickLine={false}
                      interval={0}
                      angle={-20}
                      textAnchor="end"
                    />
                    <YAxis
                      stroke="#FFFFFF"
                      fontSize={10}
                      tickLine={false}
                      allowDecimals={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E0326",
                        borderColor: "#AB64F2",
                        borderRadius: "8px",
                        color: "#FFFFFF",
                        fontSize: "12px",
                      }}
                      formatter={(value?: unknown) => [
                        `${value ?? 0} ${labels.projectsChartTooltipUnit}`,
                        labels.projectsChartTooltipLabel,
                      ]}
                    />
                    <Bar dataKey="count" fill="#35A9F2" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-headers)]/10">
              <Link
                href="#proyectos"
                className="font-body inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-xs font-semibold text-[var(--color-btn-secondary)] border border-[var(--color-btn-secondary)]/30 transition-all hover:bg-[var(--color-btn-secondary)] hover:text-[var(--color-primary)] sm:text-sm"
              >
                <span>{labels.projectsBtn}</span>
                <FaArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}