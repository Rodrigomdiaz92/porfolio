"use client";

import { useState } from "react";
import Link from "next/link";
import { ContactoSectionData } from "@/data/contactoData";
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp,
  FaFileArrowDown, 
  FaPaperPlane,
  FaRocket 
} from "react-icons/fa6";

interface ContactoProps {
  data: ContactoSectionData;
}

export default function Contacto({ data }: ContactoProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent(
      formData.subject || "Consulta desde Portfolio"
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contacto"
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

        {/* Layout en Grid (2 Columnas) */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8 sm:mt-12">
          
          {/* Columna Izquierda: Datos, Canales & CVs */}
          <div className="flex flex-col justify-between gap-6 md:col-span-5">
            <div>
              {/* Tarjeta de Canales */}
              <div className="rounded-lg border border-[var(--color-headers)]/20 bg-[var(--color-secondary)] p-4 shadow-md sm:rounded-xl sm:p-6">
                <h3 className="font-subtitle text-base font-bold text-[var(--color-text-main)] sm:text-xl">
                  {data.channelsTitle}
                </h3>
                <p className="font-body mt-1 text-xs text-[var(--color-text-main)]/70 sm:text-sm">
                  {data.channelsSubtitle}
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:mt-6">
                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${data.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-[var(--color-headers)]/20 bg-[var(--color-primary)]/60 p-3 text-xs transition-colors hover:border-[var(--color-btn-secondary)] sm:text-sm"
                  >
                    <FaWhatsapp className="size-4 text-[var(--color-btn-secondary)] shrink-0" />
                    <span className="font-body text-[var(--color-text-main)]">
                      WhatsApp: {data.whatsappDisplay}
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${data.email}`}
                    className="flex items-center gap-3 rounded-lg border border-[var(--color-headers)]/20 bg-[var(--color-primary)]/60 p-3 text-xs transition-colors hover:border-[var(--color-btn-secondary)] sm:text-sm"
                  >
                    <FaEnvelope className="size-4 text-[var(--color-btn-secondary)] shrink-0" />
                    <span className="font-body truncate text-[var(--color-text-main)]">
                      {data.email}
                    </span>
                  </a>

                  {/* LinkedIn */}
                  <Link
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-[var(--color-headers)]/20 bg-[var(--color-primary)]/60 p-3 text-xs transition-colors hover:border-[var(--color-btn-secondary)] sm:text-sm"
                  >
                    <FaLinkedin className="size-4 text-[var(--color-btn-secondary)] shrink-0" />
                    <span className="font-body text-[var(--color-text-main)]">
                      {data.linkedinLabel}
                    </span>
                  </Link>

                  {/* GitHub */}
                  <Link
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-[var(--color-headers)]/20 bg-[var(--color-primary)]/60 p-3 text-xs transition-colors hover:border-[var(--color-btn-secondary)] sm:text-sm"
                  >
                    <FaGithub className="size-4 text-[var(--color-btn-secondary)] shrink-0" />
                    <span className="font-body text-[var(--color-text-main)]">
                      {data.githubLabel}
                    </span>
                  </Link>
                </div>
              </div>

              {/* Tarjeta de Descarga de CV */}
              <div className="mt-4 rounded-lg border border-[var(--color-headers)]/20 bg-[var(--color-secondary)] p-4 shadow-md sm:mt-6 sm:rounded-xl sm:p-6">
                <h3 className="font-subtitle text-base font-bold text-[var(--color-text-main)] sm:text-lg">
                  {data.cvTitle}
                </h3>
                <p className="font-body mt-1 text-xs text-[var(--color-text-main)]/70 sm:text-sm">
                  {data.cvSubtitle}
                </p>

                <div className="mt-4 flex gap-2.5 sm:gap-3">
                  <a
                    href={data.cvEsUrl}
                    download
                    className="font-body flex flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-3 py-2 text-xs font-semibold text-[var(--color-btn-secondary)] border border-[var(--color-btn-secondary)]/30 transition-all hover:bg-[var(--color-btn-secondary)] hover:text-[var(--color-primary)] sm:text-sm"
                  >
                    <FaFileArrowDown className="size-3.5" />
                    <span>CV (Español)</span>
                  </a>

                  <a
                    href={data.cvEnUrl}
                    download
                    className="font-body flex flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-3 py-2 text-xs font-semibold text-[var(--color-btn-secondary)] border border-[var(--color-btn-secondary)]/30 transition-all hover:bg-[var(--color-btn-secondary)] hover:text-[var(--color-primary)] sm:text-sm"
                  >
                    <FaFileArrowDown className="size-3.5" />
                    <span>CV (English)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mensaje de Invitación */}
            <div className="rounded-lg border border-[var(--color-btn-secondary)]/40 bg-[var(--color-secondary)] p-4 shadow-md sm:rounded-xl sm:p-5">
              <div className="flex items-start gap-3">
                <FaRocket className="size-5 text-[var(--color-btn-secondary)] shrink-0 mt-0.5" />
                <p className="font-body text-xs text-[var(--color-text-main)]/90 leading-relaxed sm:text-sm">
                  {data.closingMessage}
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Envío de Mail */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-between rounded-lg border border-[var(--color-headers)]/20 bg-[var(--color-secondary)] p-4 shadow-md sm:rounded-xl sm:p-6"
            >
              <h3 className="font-subtitle text-base font-bold text-[var(--color-text-main)] sm:text-xl">
                {data.formTitle}
              </h3>

              <div className="mt-4 flex flex-col gap-3.5 sm:mt-6 sm:gap-4">
                {/* Nombre */}
                <div>
                  <label className="font-subtitle block text-xs font-semibold text-[var(--color-text-main)] sm:text-sm">
                    {data.formLabels.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={data.formLabels.namePlaceholder}
                    className="font-body mt-1 w-full rounded-md border border-[var(--color-headers)]/30 bg-[var(--color-primary)] px-3 py-2 text-xs text-[var(--color-text-main)] outline-none transition-colors focus:border-[var(--color-btn-secondary)] sm:text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-subtitle block text-xs font-semibold text-[var(--color-text-main)] sm:text-sm">
                    {data.formLabels.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={data.formLabels.emailPlaceholder}
                    className="font-body mt-1 w-full rounded-md border border-[var(--color-headers)]/30 bg-[var(--color-primary)] px-3 py-2 text-xs text-[var(--color-text-main)] outline-none transition-colors focus:border-[var(--color-btn-secondary)] sm:text-sm"
                  />
                </div>

                {/* Asunto */}
                <div>
                  <label className="font-subtitle block text-xs font-semibold text-[var(--color-text-main)] sm:text-sm">
                    {data.formLabels.subject}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder={data.formLabels.subjectPlaceholder}
                    className="font-body mt-1 w-full rounded-md border border-[var(--color-headers)]/30 bg-[var(--color-primary)] px-3 py-2 text-xs text-[var(--color-text-main)] outline-none transition-colors focus:border-[var(--color-btn-secondary)] sm:text-sm"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label className="font-subtitle block text-xs font-semibold text-[var(--color-text-main)] sm:text-sm">
                    {data.formLabels.message}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={data.formLabels.messagePlaceholder}
                    className="font-body mt-1 w-full rounded-md border border-[var(--color-headers)]/30 bg-[var(--color-primary)] px-3 py-2 text-xs text-[var(--color-text-main)] outline-none transition-colors focus:border-[var(--color-btn-secondary)] sm:text-sm"
                  />
                </div>
              </div>

              {/* Botón Submit */}
              <button
                type="submit"
                className="font-body mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-btn-secondary)] px-4 py-3 text-xs font-bold text-[var(--color-primary)] transition-opacity hover:opacity-90 sm:text-sm"
              >
                <span>{data.formLabels.submitButton}</span>
                <FaPaperPlane className="size-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}