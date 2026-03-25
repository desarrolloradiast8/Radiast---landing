"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface HeaderProps {
  currentPage?: "inicio" | "nosotros" | "servicios" | "contacto";
}

export default function Header({ currentPage }: HeaderProps) {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 items-center justify-center">
            <Link href="/">
              <Image
                src="/icons/logo/logo-radiast-sinfondo.png"
                alt="Radiast Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#193356] md:flex">
          <Link
            className={`transition hover:text-[#193356] ${
              currentPage === "inicio" ? "text-[#193356]" : ""
            }`}
            href="/"
          >
            Inicio
          </Link>
          <Link
            className={`transition hover:text-[#193356] ${
              currentPage === "nosotros" ? "text-[#193356]" : ""
            }`}
            href="/nosotros"
          >
            Nosotros
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
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
            </Link>

            {isServicesOpen && (
              <div className="absolute -left-96 top-full z-50 pt-3">
                <div className="min-w-175 rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-2xl">
                  <div className="grid grid-cols-2 gap-x-12 gap-y-3.5">
                    <div className="space-y-3.5">
                      {leftColumn.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block text-sm font-normal text-[#5b6b8d] transition hover:text-[#193356]"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <div className="space-y-3.5">
                      {rightColumn.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block text-sm font-normal text-[#5b6b8d] transition hover:text-[#193356]"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            className={`transition hover:text-[#193356] ${
              currentPage === "contacto" ? "text-[#193356]" : ""
            }`}
            href="/contacto"
          >
            Contacto
          </Link>
        </nav>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:text-slate-900 md:hidden"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-nav" className="border-t border-slate-200/80 bg-white px-6 py-5 md:hidden">
          <nav className="space-y-1 text-sm font-medium text-[#193356]">
            <Link
              className={`block rounded-lg px-3 py-2 transition hover:bg-slate-100 ${
                currentPage === "inicio" ? "bg-slate-100" : ""
              }`}
              href="/"
            >
              Inicio
            </Link>
            <Link
              className={`block rounded-lg px-3 py-2 transition hover:bg-slate-100 ${
                currentPage === "nosotros" ? "bg-slate-100" : ""
              }`}
              href="/nosotros"
            >
              Nosotros
            </Link>

            <div className="rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                aria-expanded={isMobileServicesOpen}
                className="flex w-full items-center justify-between px-3 py-2 text-left"
              >
                <span className={currentPage === "servicios" ? "font-semibold" : ""}>Servicios</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {isMobileServicesOpen && (
                <div className="border-t border-slate-200 px-2 py-2">
                  <Link href="/servicios" className="block rounded-md px-2 py-2 text-[#193356] transition hover:bg-slate-100">
                    Ver todos los servicios
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block rounded-md px-2 py-2 text-[#5b6b8d] transition hover:bg-slate-100 hover:text-[#193356]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              className={`block rounded-lg px-3 py-2 transition hover:bg-slate-100 ${
                currentPage === "contacto" ? "bg-slate-100" : ""
              }`}
              href="/contacto"
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
