import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Radiast | Transformación Digital y Tecnología Integrada",
  description: "Líderes en transformación digital, automatización RPA, inteligencia artificial, Business Intelligence y desarrollo de software. Consultoría tecnológica empresarial.",
  keywords: [
    "transformación digital",
    "automatización RPA",
    "inteligencia artificial",
    "business intelligence",
    "desarrollo software",
    "consultoría tecnológica",
    "cloud azure",
    "integración sistemas",
    "outsourcing tecnológico",
    "radiast"
  ],
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: "https://radiast.com",
    title: "Radiast | Transformación Digital",
    description: "Transformación digital, automatización e inteligencia artificial para empresas. Expertos en tecnología empresarial.",
    siteName: "Radiast",
  },
  alternates: {
    canonical: "https://radiast.com"
  }
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Radiast",
    "description": "Empresa de transformación digital y tecnología integrada",
    "url": "https://radiast.com",
    "logo": "https://radiast.com/icons/logo/logo-radiast.png",
    "address": {
      "@type": "PostalAddress",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Ventas y Soporte",
      "availableLanguage": ["es"]
    },
    "sameAs": [
      "https://facebook.com/radiast",
      "https://linkedin.com/company/radiast",
      "https://instagram.com/radiast"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "9",
      "offers": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoría en Transformación Digital",
            "description": "Estrategia tecnológica alineada al negocio"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatización de Procesos (RPA + IA)",
            "description": "Reducimos tareas repetitivas y errores"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Intelligence y Analítica",
            "description": "Decisiones reales con datos"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header currentPage="inicio" />

      <main id="inicio" className="relative h-auto overflow-hidden md:min-h-[calc(100vh-81px)]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4050294/pexels-photo-4050294.jpeg?auto=compress&cs=tinysrgb&w=1800')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,43,0.92),rgba(6,18,43,0.82),rgba(6,18,43,0.70))]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 sm:gap-6 px-6 py-16 sm:py-20 md:py-28 md:min-h-[calc(100vh-81px)] md:flex-row md:items-center md:gap-10">
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              Transformación Digital y Automatización Empresarial
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7 md:mt-6 md:text-lg">
              Impulsamos la eficiencia, integración y toma de decisiones mediante automatización, analítica e inteligencia artificial aplicadas al negocio.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-900 shadow-lg shadow-[#facc15]/30 transition hover:-translate-y-px hover:bg-[#eab308]"
                href="/contacto"
              >
                Solicitar Diagnóstico
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/30 transition hover:-translate-y-px hover:bg-[#1d4ed8]"
                href="#servicios"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#193356] md:text-3xl">
              Soluciones Tecnológicas para Empresas B2B
            </h2>
            <p className="mt-4 text-sm text-black md:text-base">
              Implementamos soluciones tecnológicas alineadas a objetivos empresariales:
            </p>
          </div>

          <div className="cards-mobile-scroll flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory md:grid md:gap-8 md:overflow-visible md:pb-0 md:snap-none md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40 hover:shadow-lg hover:border-slate-300 transition">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-[#0B56B8] text-white shadow-lg shadow-[#0B56B8]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.751.135 1.076-.06l.92-.766a1.125 1.125 0 0 1 1.59.182l1.83 1.83a1.125 1.125 0 0 1 .182 1.59l-.766.92c-.195.325-.256.752-.06 1.076.044.073.087.146.127.22.184.332.496.582.87.645l1.281.213c.542.09.94.56.94 1.11v2.592c0 .55-.398 1.02-.94 1.11l-1.281.213c-.374.063-.686.313-.87.645-.04.074-.083.147-.127.22-.196.324-.135.751.06 1.076l.766.92a1.125 1.125 0 0 1-.182 1.59l-1.83 1.83a1.125 1.125 0 0 1-1.59-.182l-.92-.766c-.325-.195-.752-.256-1.076-.06-.073.044-.146.087-.22.127-.332.184-.582.496-.645.87l-.213 1.281c-.09.542-.56.94-1.11.94h-2.592c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87-.074-.04-.147-.083-.22-.127-.324-.196-.751-.135-1.076.06l-.92.766a1.125 1.125 0 0 1-1.59-.182l-1.83-1.83a1.125 1.125 0 0 1-.182-1.59l.766-.92c.195-.325.256-.752.06-1.076-.044-.073-.087-.146-.127-.22-.184-.332-.496-.582-.87-.645l-1.281-.213c-.542-.09-.94-.56-.94-1.11v-2.592c0-.55.398-1.02.94-1.11l1.281-.213c.374-.063.686-.313.87-.645.04-.074.083-.147.127-.22.196-.324.135-.751-.06-1.076l-.766-.92a1.125 1.125 0 0 1 .182-1.59l1.83-1.83a1.125 1.125 0 0 1 1.59.182l.92.766c.325.195.752.256 1.076.06.073-.044.146-.087.22-.127.332-.184.582-.496.645-.87l.213-1.281Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Automatización de procesos (RPA e IA)
                </h3>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40 hover:shadow-lg hover:border-slate-300 transition">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-[#0B56B8] text-white shadow-lg shadow-[#0B56B8]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-2.25C3.504 16.5 3 16.496 3 15.375v-2.25ZM9.75 12c-.621 0-1.125.504-1.125 1.125v2.25c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125v-2.25c0-.621-.504-1.125-1.125-1.125h-2.25ZM15.75 12c-.621 0-1.125.504-1.125 1.125v2.25c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125v-2.25c0-.621-.504-1.125-1.125-1.125h-2.25Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75h18M3 12h18" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Business Intelligence y dashboards gerenciales
                </h3>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40 hover:shadow-lg hover:border-slate-300 transition">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-[#0B56B8] text-white shadow-lg shadow-[#0B56B8]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5-4.5a4.5 4.5 0 0 1 3.258-2.744ZM9.367 14.995l4.5-4.5a4.5 4.5 0 0 0-3.258 2.744M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Integración de sistemas ERP y CRM
                </h3>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40 hover:shadow-lg hover:border-slate-300 transition">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-[#0B56B8] text-white shadow-lg shadow-[#0B56B8]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5h12a4.5 4.5 0 0 0 4.5-4.5m-15-6h16.5v1.5H6.75V9Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Infraestructura Cloud con Microsoft Azure
                </h3>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40 hover:shadow-lg hover:border-slate-300 transition">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-[#0B56B8] text-white shadow-lg shadow-[#0B56B8]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.461-.841A6.52 6.52 0 0 0 12 3.5c-3.8 0-7.4 2.08-9.2 5.6.165.21.42.55.881 1.025m16.338-1.035a9 9 0 1 1-9-9c.467 0 .92.023 1.37.07m5.497 3.898a8.96 8.96 0 0 1 1.7 6.045c0 4.881-3.948 8.83-8.829 8.83m0-2a6.83 6.83 0 0 0 6.83-6.83 6.83 6.83 0 1 0-13.66 0 6.827 6.827 0 0 0 6.83 6.83Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Desarrollo de software a medida
                </h3>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40 hover:shadow-lg hover:border-slate-300 transition">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-[#0B56B8] text-white shadow-lg shadow-[#0B56B8]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72v-5.36m0 0a6.001 6.001 0 0 0-9.497-5.047c-.1.1-.196.203-.286.31m15.283 5.047A4.06 4.06 0 0 0 18.305 6.12m-15.063 6.61a5.996 5.996 0 0 1 9.497-5.047M9 12.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Outsourcing de desarrolladores
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[#193356] md:text-3xl">
              Soluciones Tecnológicas con Impacto
            </h2>
            <p className="mt-2 text-2xl font-semibold text-black md:text-2xl">
              Real en el Negocio
            </p>
          </div>

          <div className="cards-mobile-scroll flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory md:grid md:gap-8 md:overflow-visible md:pb-0 md:snap-none md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40 hover:shadow-lg hover:border-slate-300 transition">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B56B8] text-white shadow-lg shadow-[#0B56B8]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.751.135 1.076-.06l.92-.766a1.125 1.125 0 0 1 1.59.182l1.83 1.83a1.125 1.125 0 0 1 .182 1.59l-.766.92c-.195.325-.256.752-.06 1.076.044.073.087.146.127.22.184.332.496.582.87.645l1.281.213c.542.09.94.56.94 1.11v2.592c0 .55-.398 1.02-.94 1.11l-1.281.213c-.374.063-.686.313-.87.645-.04.074-.083.147-.127.22-.196.324-.135.751.06 1.076l.766.92a1.125 1.125 0 0 1-.182 1.59l-1.83 1.83a1.125 1.125 0 0 1-1.59-.182l-.92-.766c-.325-.195-.752-.256-1.076-.06-.073.044-.146.087-.22.127-.332.184-.582.496-.645.87l-.213 1.281c-.09.542-.56.94-1.11.94h-2.592c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87-.074-.04-.147-.083-.22-.127-.324-.196-.751-.135-1.076.06l-.92.766a1.125 1.125 0 0 1-1.59-.182l-1.83-1.83a1.125 1.125 0 0 1-.182-1.59l.766-.92c.195-.325.256-.752.06-1.076-.044-.073-.087-.146-.127-.22-.184-.332-.496-.582-.87-.645l-1.281-.213c-.542-.09-.94-.56-.94-1.11v-2.592c0-.55.398-1.02.94-1.11l1.281-.213c.374-.063.686-.313.87-.645.04-.074.083-.147.127-.22.196-.324.135-.751-.06-1.076l-.766-.92a1.125 1.125 0 0 1 .182-1.59l1.83-1.83a1.125 1.125 0 0 1 1.59.182l.92.766c.325.195.752.256 1.076.06.073-.044.146-.087.22-.127.332-.184.582-.496.645-.87l.213-1.281Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Automatización y Optimización
                </h3>
                <p className="text-sm text-slate-600">
                  Reducimos tareas manuales y mejoramos la eficiencia operativa.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40 hover:shadow-lg hover:border-slate-300 transition">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B56B8] text-white shadow-lg shadow-[#0B56B8]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75a6.75 6.75 0 00-3.75 12.36V18a.75.75 0 00.75.75h6a.75.75 0 00.75-.75v-1.89A6.75 6.75 0 0012 3.75z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21h3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 18.75h4.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Inteligencia y Datos
                </h3>
                <p className="text-sm text-slate-600">
                  Convertimos información en decisiones estratégicas.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40 hover:shadow-lg hover:border-slate-300 transition">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B56B8] text-white shadow-lg shadow-[#0B56B8]/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 014.5-4.5c.45 0 .88.07 1.29.2A5.25 5.25 0 0118.75 12a3.75 3.75 0 01-.75 7.43H6.75A4.5 4.5 0 012.25 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Infraestructura y Escalabilidad
                </h3>
                <p className="text-sm text-slate-600">
                  Diseñamos entornos tecnológicos ágiles y seguros.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-[#193356] md:text-4xl">
              Nuestros Servicios
            </h2>
          </div>

          <div className="mt-12 cards-mobile-scroll flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory md:grid md:gap-8 md:overflow-visible md:pb-0 md:snap-none md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2563eb] text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#2563eb]/30 overflow-hidden">
                  <Image
                    src="/icons/servicios/consultoria.png"
                    alt="Consultoria"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Consultoría en Transformación Digital
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Estrategia tecnológica alineada al negocio.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2563eb] text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#2563eb]/30 overflow-hidden">
                  <Image
                    src="/icons/servicios/automatización.png"
                    alt="Automatizacion"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Automatización
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Reducimos tareas repetitivas y errores.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2563eb] text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#2563eb]/30 overflow-hidden">
                  <Image
                    src="/icons/servicios/business.png"
                    alt="Business Intelligence"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Business Intelligence
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Decisiones reales con datos.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2563eb] text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#2563eb]/30 overflow-hidden">
                  <Image
                    src="/icons/servicios/integracion.png"
                    alt="Integracion"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Integración de Sistemas
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Unimos tecnologías sin disrupciones.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2563eb] text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#2563eb]/30 overflow-hidden">
                  <Image
                    src="/icons/servicios/desarrollo.png"
                    alt="Desarrollo"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Desarrollo de Software
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Soluciones adaptadas a tu operación.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2563eb] text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#2563eb]/30 overflow-hidden">
                  <Image
                    src="/icons/servicios/infraestructura.png"
                    alt="Infraestructura Cloud"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Infraestructura Cloud
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Preparamos tu infraestructura digital segura y escalable
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2563eb] text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#2563eb]/30 overflow-hidden">
                  <Image
                    src="/icons/servicios/IA.png"
                    alt="Inteligencia Artificial"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Inteligencia Artificial
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Automatización inteligente.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2563eb] text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#2563eb]/30 overflow-hidden">
                  <Image
                    src="/icons/servicios/capacitacion.png"
                    alt="Capacitacion"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Capacitación Empresarial
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Equipos preparados para la transformación.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2563eb] text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#2563eb]/30 overflow-hidden">
                  <Image
                    src="/icons/servicios/outsourcing.png"
                    alt="Outsourcing"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Outsourcing Tecnológico
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Talento tecnológico gestionado.
              </p>
            </article>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-[#193356] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#193356]/30 transition hover:-translate-y-px hover:bg-[#24456f]"
              href="#servicios"
            >
              Explorar Servicios
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50" data-no-reveal>
        <div className="mx-auto w-full max-w-7xl px-6 py-20">
          <article className="mb-12 sm:mb-16 text-center" style={{ transitionDelay: "40ms" }}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
              ¿Por qué elegir <span className="inline-block relative text-[#193356]">
                RADIAST
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-3/4 bg-[#0B56B8]"></span>
              </span>?
            </h2>
          </article>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <article className="rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 shadow-sm" style={{ transitionDelay: "100ms" }}>
              <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
                <div className="flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-full bg-[#0B56B8]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.751.135 1.076-.06l.92-.766a1.125 1.125 0 0 1 1.59.182l1.83 1.83a1.125 1.125 0 0 1 .182 1.59l-.766.92c-.195.325-.256.752-.06 1.076.044.073.087.146.127.22.184.332.496.582.87.645l1.281.213c.542.09.94.56.94 1.11v2.592c0 .55-.398 1.02-.94 1.11l-1.281.213c-.374.063-.686.313-.87.645-.04.074-.083.147-.127.22-.196.324-.135.751.06 1.076l.766.92a1.125 1.125 0 0 1-.182 1.59l-1.83 1.83a1.125 1.125 0 0 1-1.59-.182l-.92-.766c-.325-.195-.752-.256-1.076-.06-.073.044-.146.087-.22.127-.332.184-.582.496-.645.87l-.213 1.281c-.09.542-.56.94-1.11.94h-2.592c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87-.074-.04-.147-.083-.22-.127-.324-.196-.751-.135-1.076.06l-.92.766a1.125 1.125 0 0 1-1.59-.182l-1.83-1.83a1.125 1.125 0 0 1-.182-1.59l.766-.92c.195-.325.256-.752.06-1.076-.044-.073-.087-.146-.127-.22-.184-.332-.496-.582-.87-.645l-1.281-.213c-.542-.09-.94-.56-.94-1.11v-2.592c0-.55.398-1.02.94-1.11l1.281-.213c.374-.063.686-.313.87-.645.04-.074.083-.147.127-.22.196-.324.135-.751-.06-1.076l-.766-.92a1.125 1.125 0 0 1 .182-1.59l1.83-1.83a1.125 1.125 0 0 1 1.59.182l.92.766c.325.195.752.256 1.076.06.073-.044.146-.087.22-.127.332-.184.582-.496.645-.87l.213-1.281Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-[#5B6B9F] leading-tight">
                  Experiencia en automatización empresarial
                </h3>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 shadow-sm" style={{ transitionDelay: "180ms" }}>
              <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
                <div className="flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-full bg-[#0B56B8]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9V9Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-[#5B6B9F] leading-tight">
                  Integración tecnológica integral
                </h3>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 shadow-sm" style={{ transitionDelay: "260ms" }}>
              <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
                <div className="flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-full bg-[#0B56B8]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="h-8 w-8">
                    <circle cx="12" cy="12" r="3" fill="white" />
                    <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="2" />
                    <circle cx="12" cy="12" r="8" fill="none" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-[#5B6B9F] leading-tight">
                  Enfoque estratégico B2B
                </h3>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 shadow-sm" style={{ transitionDelay: "340ms" }}>
              <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
                <div className="flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-full bg-[#0B56B8]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-[#5B6B9F] leading-tight">
                  Implementaciones medibles
                </h3>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm" style={{ transitionDelay: "420ms" }}>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B56B8]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 0 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                  </svg>
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-[#5B6B9F] leading-tight">
                  Soporte continuo
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#193356] mb-4">
              Transformación digital aplicada a múltiples industrias
            </h2>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600">
              Impulsamos la transformación digital integrando automatización, datos, inteligencia artificial y soluciones tecnológicas, optimizando procesos y mejorando la toma de decisiones en cada organización.
            </p>
          </div>

          <div className="mb-12">

            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Industrial",
                  description: "Optimización de procesos operativos, integración de sistemas y control de producción mediante automatización, datos e inteligencia empresarial.",
                  benefits: ["Mejora de eficiencia operativa", "Control y trazabilidad de procesos"],
                  icon: "M4 7h3V4h10v3h3v2h-1v8h1v2h-2v2h-2v-2h-8v2H6v-2H4v-2h1V9H4V7zm2 2v8h10V9H6z"
                },
                {
                  title: "Minería",
                  description: "Implementación de soluciones para control operativo, análisis de datos y toma de decisiones estratégicas en entornos complejos.",
                  benefits: ["Dashboards y analítica en tiempo real", "Mayor control de información crítica"],
                  icon: "M21.9 18.2l-9.9-9.9c.7-1.9.4-4.1-1.1-5.6-.2-.2-.5-.4-.7-.5l-.8.8 3 3-2.1 2.1-3-3-.8.8c.1.2.3.5.5.7 1.5 1.5 3.7 1.8 5.6 1.1l9.9 9.9c.6.6 1.5.6 2.1 0 .6-.6.6-1.5 0-2.1z"
                },
                {
                  title: "Agroindustrial",
                  description: "Digitalización de operaciones productivas y administrativas, integrando datos para mejorar la gestión y planificación.",
                  benefits: ["Optimización de recursos", "Integración de información operativa"],
                  icon: "M12 3a9 9 0 00-9 9v9h9a9 9 0 009-9 9 9 0 00-9-9zM5 19v-4a7 7 0 017-7V9a7 7 0 017 7 7 7 0 01-7 7H5z"
                },
                {
                  title: "Retail",
                  description: "Automatización de procesos comerciales, gestión de clientes e integración de canales de venta y datos.",
                  benefits: ["Mejora en la gestión comercial", "Optimización del seguimiento de clientes"],
                  icon: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                },
                {
                  title: "Logística",
                  description: "Optimización de operaciones, seguimiento y control de procesos logísticos mediante integración de sistemas y analítica.",
                  benefits: ["Visibilidad en tiempo real", "Mejora en la eficiencia operativa"],
                  icon: "M18 18.5a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zM9 18.5a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zM20 8H4V4h16m0-2H4c-1.1 0-2 .9-2 2v4H0v4h2v6c0 1.1.9 2 2 2h2.5v2h3v-2H17v2h3v-2H22v-6h2v-4h-2V4c0-1.1-.9-2-2-2z"
                },
                {
                  title: "Servicios",
                  description: "Transformación digital de procesos administrativos, atención al cliente y gestión operativa, integrando automatización, datos y herramientas tecnológicas para mejorar la eficiencia y la calidad del servicio.",
                  benefits: ["Optimización de procesos y tiempos de atención", "Mejor control y seguimiento de clientes y operaciones"],
                  icon: "M10 2h4v3h-4V2zm4 19h-4v3h4v-3zm8-14h-2V4h2v3zM4 7h2v2H4V7zm14 2h2v2h-2V9zm2 4h2v2h-2v-2zm-2 4h2v2h-2v-2zm-2-4v2h2v-2h-2zm-2 0v2h2v-2h-2zM6 9v2h2V9H6zm0 4v2h2v-2H6z"
                }
              ].map((industry) => (
                <article
                  key={industry.title}
                  className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-300/60 hover:shadow-2xl hover:border-slate-200 transition flex flex-col items-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B56B8] text-white shadow-lg shadow-[#0B56B8]/40 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8">
                      <path d={industry.icon} />
                    </svg>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#193356] mb-2">
                    {industry.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="space-y-2 w-full">
                    {industry.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3 justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#0B56B8" className="h-5 w-5 shrink-0 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-slate-700 text-left">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col items-center gap-6 sm:gap-8 text-center">
            <div className="flex h-16 sm:h-20 w-16 sm:w-20 items-center justify-center rounded-3xl bg-[#0B56B8] shadow-lg shadow-[#0B56B8]/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="h-8 sm:h-10 w-8 sm:w-10">
                <path d="M19 3h-1V2h-2v1H8V2H6v1H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v5h7v-5z" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#193356]">
                Agenda una reunión estratégica
              </h2>
              <p className="mt-2 sm:mt-4 max-w-2xl text-sm sm:text-base text-slate-600">
                Si tu empresa busca mejorar eficiencia, integrar sistemas o implementar inteligencia artificial, conversemos.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-lg bg-[#193356] px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-[#193356]/30 transition hover:-translate-y-px hover:bg-[#24456f]"
              href="/contacto"
              aria-label="Agendar reunión estratégica"
            >
              Agendar reunión
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col items-center gap-6 sm:gap-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#193356]">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-black">
              Contacta con nuestro equipo de expertos y descubre cómo podemos impulsar tu negocio
            </p>
            <div className="flex flex-row gap-4 sm:gap-8 w-full flex-wrap items-center justify-center">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-full bg-[#0B56B8] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="h-5 sm:h-7 w-5 sm:w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium">Email</span>
                  <a href="mailto:contacto@radiast.com" className="text-sm sm:text-base font-semibold text-[#2B3E7F] hover:underline">
                    contacto@radiast.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-full bg-[#0B56B8] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="h-5 sm:h-7 w-5 sm:w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium">Teléfono</span>
                  <a href="tel:77802012" className="text-sm sm:text-base font-semibold text-[#2B3E7F] hover:underline">
                    77802012
                  </a>
                </div>
              </div>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-lg bg-[#f4b400] px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-900 shadow-lg shadow-[#f4b400]/30 transition hover:-translate-y-px hover:bg-[#f59e0b]"
              href="/contacto"
              aria-label="Solicitar consulta gratuita"
            >
              Solicitar Consulta Gratuita →
            </a>
          </div>
        </div>
      </section>

      <footer id="contacto" className="bg-[#193356] text-slate-300">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="space-y-4">
              <Image
                src="/icons/logo/logo-sin-fondo-2.png"
                alt="Radiast"
                width={220}
                height={70}
                className="h-12 w-auto object-contain"
              />
              <p className="text-sm leading-6 text-slate-400">
                Transformación Digital y Automatización Empresarial
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold text-white">
                Enlaces Rápidos
              </div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a className="transition hover:text-white" href="#inicio">
                    Inicio
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="/nosotros">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="#servicios">
                    Servicios
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-white" href="/contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold text-white">Servicios</div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link className="transition hover:text-white" href="/servicios/consultoria">
                    Consultoría en Transformación Digital
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="/servicios/automatizacion">
                    Automatización de Procesos
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="/servicios/business-intelligence">
                    Business Intelligence
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="/servicios/cloud">
                    Infraestructura Cloud
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold text-white">Contacto</div>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <a href="mailto:contacto@radiast.com" className="transition hover:text-white">
                    contacto@radiast.com
                  </a>
                </li>
                <li>
                  <a href="tel:77802012" className="transition hover:text-white">
                    77802012
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-3 text-slate-400">
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

          <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
            © 2026 Radiast. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}



