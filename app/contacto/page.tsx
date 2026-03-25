import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../components/header";
import ContactFormWrapper from "./contact-form-wrapper";

export const metadata: Metadata = {
  title: "Contacto - Agenda una Consultoría | Radiast",
  description: "Contáctanos para transformar tu empresa. Solicita una consultoría gratuita en transformación digital, automatización RPA, IA y desarrollo de software.",
  keywords: [
    "contacto radiast",
    "consultoría tecnológica",
    "solicitar cotización",
    "agenda reunión",
    "transformación digital",
    "consultoría gratis"
  ],
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: "https://radiast.com/contacto",
    title: "Contacto - Radiast | Agenda tu Consultoría Gratuita",
    description: "Contáctanos para llevar tu empresa al siguiente nivel tecnológico. Consultoría gratuita.",
    siteName: "Radiast",
  },
  alternates: {
    canonical: "https://radiast.com/contacto"
  }
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header currentPage="contacto" />

      <main className="relative w-full bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/contacto-hero.jpg'), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,18,43,0.88),rgba(8,18,43,0.72),rgba(8,18,43,0.58))]" />

        <div className="relative mx-auto flex w-full max-w-6xl items-center px-6 py-20 md:min-h-[calc(100vh-81px)] md:py-28">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold leading-[1.1] text-white md:text-6xl">
              Contacto - Consultoría
              <br />
              Tecnologica
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-100 md:text-2xl">
              ¿Buscas automatizar procesos o mejorar la infraestructura tecnologica de tu empresa?
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-base text-slate-100 md:text-lg">
              <div className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#facc15" className="h-6 w-6 md:h-7 md:w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Contactanos</span>
              </div>

              <div className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#facc15" className="h-6 w-6 md:h-7 md:w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>77802012</span>
              </div>

              <div className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#facc15" className="h-6 w-6 md:h-7 md:w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>contacto@radiast.com</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-slate-100">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="cards-mobile-scroll flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory md:grid md:gap-6 md:overflow-visible md:pb-0 md:snap-none md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-[0_2px_8px_rgba(15,23,42,0.06)]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B56B8] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-black">
                Llámanos
              </h3>
              <p className="mt-2 text-base text-black">
                77802012
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-[0_2px_8px_rgba(15,23,42,0.06)]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B56B8] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-black">
                Escríbenos
              </h3>
              <p className="mt-2 text-base text-black">
                contacto@radiast.com
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-[0_2px_8px_rgba(15,23,42,0.06)]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B56B8] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-black">
                Encuéntranos
              </h3>
              <p className="mt-2 text-base text-black">
                Disponibles en línea
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-[#193356] md:text-4xl">
                Escríbenos
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Completa el formulario y un consultor se comunicará contigo en menos de 24 horas.
              </p>

              <ContactFormWrapper />
            </div>

            <div className="flex items-start">
              <div className="w-full rounded-2xl bg-[#193356] p-10 text-white">
                <h3 className="text-2xl font-semibold">
                  Información de contacto
                </h3>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Dirección</h4>
                      <p className="mt-1 text-sm text-slate-200">
                        Disponibles en línea
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Teléfono</h4>
                      <p className="mt-1 text-sm text-slate-200">
                        77802012
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="mt-1 text-sm text-slate-200">
                        contacto@radiast.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1e3a5f] text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <Image
                src="/icons/logo/logo-sin-fondo-2.png"
                alt="Radiast"
                width={220}
                height={70}
                className="h-12 w-auto object-contain"
              />
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Transformación Digital y Automatización Empresarial
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Enlaces Rápidos</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <a href="/nosotros" className="transition hover:text-white">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="/servicios" className="transition hover:text-white">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="transition hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Servicios</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  <Link href="/servicios/consultoria" className="transition hover:text-white">
                    Consultoría en Transformación Digital
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/automatizacion" className="transition hover:text-white">
                    Automatización de Procesos
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/business-intelligence" className="transition hover:text-white">
                    Business Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/cloud" className="transition hover:text-white">
                    Infraestructura Cloud
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Contacto</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span></span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>contacto@radiast.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span>77802012</span>
                </li>
              </ul>
              <div className="flex items-center gap-3 text-slate-300">
                <a
                  aria-label="Facebook de Radiast"
                  className="transition hover:text-white"
                  href="https://www.facebook.com/Radiast.Tecnologia.Integrada"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 22v-8H16l.5-3h-3V9.5c0-.9.3-1.5 1.6-1.5H17V5.2c-.4-.1-1.3-.2-2.5-.2-2.5 0-4 1.5-4 4.3V11H8v3h2.5v8h3z" />
                  </svg>
                </a>
                <a
                  aria-label="LinkedIn de Radiast"
                  className="transition hover:text-white"
                  href="https://www.linkedin.com/company/radiastechnology/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 10v7" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                    <circle cx="8" cy="7.5" r="1" fill="currentColor" />
                    <path d="M12 17v-4c0-1.1.9-2 2-2s2 .9 2 2v4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </a>
                <a
                  aria-label="Instagram de Radiast"
                  className="transition hover:text-white"
                  href="https://www.instagram.com/radiastechnology/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17" cy="7" r="1" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
            © 2026 Radiast. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}




