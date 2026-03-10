"use client";

import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  currentPage?: "inicio" | "nosotros" | "servicios" | "contacto";
}

export default function Header({ currentPage }: HeaderProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Consultoría en Transformación Digital Empresarial", href: "/servicios/consultoria" },
    { name: "Automatización de Procesos Empresariales", href: "/servicios/automatizacion" },
    { name: "Business Intelligence y Analítica Empresarial", href: "/servicios/business-intelligence" },
      { name: "Integración de Sistemas", href: "/servicios/integracion-de-sistemas" },
    { name: "Desarrollo de Software a Medida", href: "/servicios/desarrollo" },
      { name: "Infraestructura Cloud", href: "/servicios/cloud" },
    { name: "Inteligencia Artificial Aplicada", href: "/servicios/ia" },
    { name: "Capacitación Empresarial", href: "/servicios/capacitacion" },
    { name: "Outsourcing Tecnológico Gestionado", href: "/servicios/outsourcing" },
  ];

  const leftColumn = services.slice(0, 5);
  const rightColumn = services.slice(5);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 items-center justify-center">
            <a href="/">
              <Image
                src="/icons/logo/logo-radiast-sinfondo.png"
                alt="Radiast Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#193356] md:flex">
          <a
            className={`transition hover:text-[#193356] ${
              currentPage === "inicio" ? "text-[#193356]" : ""
            }`}
            href="/"
          >
            Inicio
          </a>
          <a
            className={`transition hover:text-[#193356] ${
              currentPage === "nosotros" ? "text-[#193356]" : ""
            }`}
            href="/nosotros"
          >
            Nosotros
          </a>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <a
              className={`flex items-center gap-1 transition hover:text-[#193356] ${
                currentPage === "servicios" ? "text-[#193356]" : ""
              }`}
              href="/servicios"
            >
              Servicios
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`h-4 w-4 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>

            {isServicesOpen && (
              <div className="absolute -left-96 top-full z-50 pt-3">
                <div className="min-w-175 rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-2xl">
                  <div className="grid grid-cols-2 gap-x-12 gap-y-3.5">
                    <div className="space-y-3.5">
                      {leftColumn.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                            className="block text-sm font-normal text-[#5b6b8d] transition hover:text-[#193356]"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                    <div className="space-y-3.5">
                      {rightColumn.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                            className="block text-sm font-normal text-[#5b6b8d] transition hover:text-[#193356]"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            className={`transition hover:text-[#193356] ${
              currentPage === "contacto" ? "text-[#193356]" : ""
            }`}
            href="/contacto"
          >
            Contacto
          </a>
        </nav>

        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900 md:hidden">
          Menu
        </button>
      </div>
    </header>
  );
}
