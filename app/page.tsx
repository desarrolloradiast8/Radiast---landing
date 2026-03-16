import Image from "next/image";
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

      <main id="inicio" className="relative min-h-[calc(100vh-81px)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4050294/pexels-photo-4050294.jpeg?auto=compress&cs=tinysrgb&w=1800')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,43,0.90),rgba(6,18,43,0.80),rgba(6,18,43,0.65))]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 md:min-h-[calc(100vh-81px)] md:flex-row md:items-center md:py-28">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
              Transformacion Digital y Automatizacion Empresarial
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 md:text-lg">
              Impulsamos la eficiencia, integracion y toma de decisiones mediante
              automatizacion, inteligencia artificial y soluciones cloud para
              empresas B2B.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-[#facc15]/30 transition hover:-translate-y-px hover:bg-[#eab308]"
                href="/contacto"
              >
                Solicitar Diagnostico Estrategico
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/30 transition hover:-translate-y-px hover:bg-[#1d4ed8]"
                href="#servicios"
              >
                Ver Nuestros Servicios
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

          <div className="grid gap-8 md:grid-cols-3">
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
            <h2 className="font-display text-3xl font-semibold text-[#193356] md:text-4xl">
              Soluciones Tecnológicas con Impacto
            </h2>
            <p className="mt-2 text-2xl font-semibold text-black md:text-2xl">
              Real en el Negocio
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
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

          <div className="mt-12 grid gap-8 md:grid-cols-3">
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
          <article className="mb-16 text-center" style={{ transitionDelay: "40ms" }}>
            <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              ¿Por qué elegir <span className="inline-block relative text-[#193356]">
                RADIAST
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-3/4 bg-[#0B56B8]"></span>
              </span>?
            </h2>
          </article>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm" style={{ transitionDelay: "100ms" }}>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B56B8]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.592c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.751.135 1.076-.06l.92-.766a1.125 1.125 0 0 1 1.59.182l1.83 1.83a1.125 1.125 0 0 1 .182 1.59l-.766.92c-.195.325-.256.752-.06 1.076.044.073.087.146.127.22.184.332.496.582.87.645l1.281.213c.542.09.94.56.94 1.11v2.592c0 .55-.398 1.02-.94 1.11l-1.281.213c-.374.063-.686.313-.87.645-.04.074-.083.147-.127.22-.196.324-.135.751.06 1.076l.766.92a1.125 1.125 0 0 1-.182 1.59l-1.83 1.83a1.125 1.125 0 0 1-1.59-.182l-.92-.766c-.325-.195-.752-.256-1.076-.06-.073.044-.146.087-.22.127-.332.184-.582.496-.645.87l-.213 1.281c-.09.542-.56.94-1.11.94h-2.592c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87-.074-.04-.147-.083-.22-.127-.324-.196-.751-.135-1.076.06l-.92.766a1.125 1.125 0 0 1-1.59-.182l-1.83-1.83a1.125 1.125 0 0 1-.182-1.59l.766-.92c.195-.325.256-.752.06-1.076-.044-.073-.087-.146-.127-.22-.184-.332-.496-.582-.87-.645l-1.281-.213c-.542-.09-.94-.56-.94-1.11v-2.592c0-.55.398-1.02.94-1.11l1.281-.213c.374-.063.686-.313.87-.645.04-.074.083-.147.127-.22.196-.324.135-.751-.06-1.076l-.766-.92a1.125 1.125 0 0 1 .182-1.59l1.83-1.83a1.125 1.125 0 0 1 1.59.182l.92.766c.325.195.752.256 1.076.06.073-.044.146-.087.22-.127.332-.184.582-.496.645-.87l.213-1.281Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-[#5B6B9F] leading-tight">
                  Experiencia en automatización empresarial
                </h3>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm" style={{ transitionDelay: "180ms" }}>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B56B8]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9V9Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-[#5B6B9F] leading-tight">
                  Integración tecnológica integral
                </h3>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm" style={{ transitionDelay: "260ms" }}>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B56B8]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="h-8 w-8">
                    <circle cx="12" cy="12" r="3" fill="white"/>
                    <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="8" fill="none" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-[#5B6B9F] leading-tight">
                  Enfoque estratégico B2B
                </h3>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm" style={{ transitionDelay: "340ms" }}>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B56B8]">
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
                <h3 className="text-sm font-medium text-[#5B6B9F] leading-tight">
                  Soporte continuo
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center font-display text-3xl font-semibold text-slate-900 md:text-4xl">
            Empresas que acompanamos
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {[
              {
                title: "Industria",
                image:
                  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=80",
              },
              {
                title: "Logistica",
                image:
                  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
              },
              {
                title: "Servicios",
                image:
                  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80",
              },
              {
                title: "Comercio",
                image:
                  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80",
              },
              {
                title: "Mineria",
                image:
                  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=500&q=80",
              },
              {
                title: "Agroindustrial",
                image:
                  "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=500&q=80",
              },
              {
                title: "Transformacion",
                image:
                  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=500&q=80",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="flex flex-col items-center gap-3"
              >
                <div className="h-20 w-full overflow-hidden rounded-2xl shadow-lg shadow-slate-200/60">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  {item.title}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#0B56B8]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="h-10 w-10">
                <path d="M19 3h-1V2h-2v1H8V2H6v1H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v5h7v-5z"/>
              </svg>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-[#193356] md:text-4xl">
                Agenda una reunión estratégica
              </h2>
              <p className="mt-4 max-w-2xl text-base text-slate-600">
                Si tu empresa busca mejorar eficiencia, integrar sistemas o implementar inteligencia artificial, conversemos.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-lg bg-[#193356] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#193356]/30 transition hover:-translate-y-px hover:bg-[#24456f]"
              href="/contacto"
              aria-label="Agendar reunión estratégica"
            >
              Agendar reunión
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="font-display text-3xl font-semibold text-[#193356] md:text-4xl">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="max-w-2xl text-base text-black">
              Contacta con nuestro equipo de expertos y descubre cómo podemos impulsar tu negocio
            </p>
            <div className="flex flex-col gap-8 sm:flex-row items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B56B8]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium">Email</span>
                  <a href="mailto:contacto@radiast.com" className="text-base font-semibold text-[#2B3E7F] hover:underline">
                    contacto@radiast.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B56B8]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium">Teléfono</span>
                  <a href="tel:+59178901234" className="text-base font-semibold text-[#2B3E7F] hover:underline">
                    +591 789 01234
                  </a>
                </div>
              </div>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-lg bg-[#f4b400] px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-[#f4b400]/30 transition hover:-translate-y-px hover:bg-[#f59e0b]"
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
                <li>Consultoría en Transformación Digital</li>
                <li>Automatización de Procesos</li>
                <li>Business Intelligence</li>
                <li>Infraestructura Cloud</li>
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
                  <a href="tel:+59178901234" className="transition hover:text-white">
                    +591 789 01234
                  </a>
                </li>
              </ul>
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
