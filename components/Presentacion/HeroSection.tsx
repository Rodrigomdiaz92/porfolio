"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { HeroData } from "@/data/heroData";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const sequence = data.titles.flatMap((title) => [title, 2500]);

  return (
    <section 
      id="presentacion" 
      className="relative w-full bg-[var(--color-primary)] px-4 py-12 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
          
          {/* Avatar / Foto */}
          <div className="flex justify-center md:order-2 md:col-span-5">
            <div className="relative size-48 sm:size-64 md:size-80">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--color-headers)] to-[var(--color-btn-secondary)] opacity-70 blur-md transition-all duration-500 hover:opacity-100"></div>
              <Image
                src={data.profileImgSrc}
                alt={data.profileImgAlt}
                fill
                priority
                sizes="(max-width: 768px) 192px, (max-width: 1200px) 256px, 320px"
                className="relative rounded-full border-2 border-[var(--color-headers)] object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Textos */}
          <div className="flex flex-col items-center text-center md:order-1 md:col-span-7 md:items-start md:text-left">
            <span className="font-subtitle text-sm font-semibold tracking-wider text-[var(--color-btn-secondary)] uppercase sm:text-base">
              {data.greeting}
            </span>

            <h1 className="mt-2 font-subtitle text-4xl font-extrabold text-[var(--color-text-main)] sm:text-5xl lg:text-6xl">
              {data.name}
            </h1>

            <div className="font-h2 mt-3 min-h-[3rem] text-xl font-bold text-[var(--color-headers)] sm:text-2xl lg:text-3xl">
              <TypeAnimation
                key={data.titles.join(",")}
                sequence={sequence}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="font-body mt-4 text-base leading-relaxed text-[var(--color-text-main)]/90 sm:text-lg">
              {data.description}
            </p>

            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link
                href={data.primaryBtnHref}
                className="font-body rounded-lg bg-[var(--color-btn-primary)] px-6 py-3 text-center text-base font-semibold text-[var(--color-text-main)] transition-all hover:bg-[var(--color-btn-primary)]/80 hover:shadow-lg hover:shadow-[var(--color-btn-primary)]/20 active:scale-95"
              >
                {data.primaryBtnText}
              </Link>
              <Link
                href={data.secondaryBtnHref}
                className="font-body rounded-lg border-2 border-[var(--color-btn-secondary)] px-6 py-3 text-center text-base font-semibold text-[var(--color-btn-secondary)] transition-all hover:bg-[var(--color-btn-secondary)] hover:text-[var(--color-primary)] active:scale-95"
              >
                {data.secondaryBtnText}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}