import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Desarrollo de Software a Medida | Radiast",
  description:
    "Soluciones tecnologicas personalizadas para procesos empresariales especificos.",
  alternates: {
    canonical: "https://radiast.com/servicios/desarrollo",
  },
};

export default function DesarrolloPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header currentPage="servicios" />

      <section className="bg-[#193864] text-white">
        <div className="mx-auto w-full max-w-440 px-6 py-2.5 md:px-10">
          <nav className="flex items-center gap-2 text-xs font-semibold md:text-sm">
            <Link className="hover:text-[#9dc6ff]" href="/">
              Inicio
            </Link>
            <span className="text-white/70">›</span>
            <a className="hover:text-[#9dc6ff]" href="/servicios">
              Servicios
            </a>
            <span className="text-white/70">›</span>
            <span>Desarrollo de Software a Medida</span>
          </nav>
        </div>
      </section>

      <section className="relative min-h-120 overflow-hidden md:min-h-130">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(233,249,252,0.78)_0%,rgba(233,249,252,0.62)_34%,rgba(233,249,252,0.15)_68%,rgba(233,249,252,0.03)_100%)]" />

        <div className="relative mx-auto flex w-full max-w-440 items-center px-6 py-10 md:min-h-130 md:px-10 md:pl-14 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#17356a] md:text-6xl">
              Desarrollo de Software
              <br />
              a Medida
            </h1>
            <p className="mt-5 max-w-4xl text-sm leading-relaxed text-black md:text-xl md:leading-tight">
              Soluciones tecnologicas personalizadas para procesos empresariales especificos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e9eef5]">
        <div className="mx-auto w-full max-w-440 px-6 py-14 md:px-10 md:py-16">
          <h2 className="text-center text-xl font-semibold text-[#193356] mb-12 md:text-3xl md:leading-none">
            Sobre este servicio
          </h2>

          <div className="cards-mobile-scroll flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory md:grid md:gap-6 md:overflow-visible md:pb-0 md:snap-none md:grid-cols-2 lg:grid-cols-3 [&>article]:transition [&>article]:duration-300 [&>article]:ease-out [&>article:hover]:-translate-y-2 [&>article:hover]:shadow-xl [&>article:hover]:shadow-sky-100/80">
            <article className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-center text-[#193356]">
                Análisis de procesos empresariales
              </h3>
              <p className="text-sm leading-relaxed text-center text-slate-600">
                Evaluamos los procesos internos de la empresa para identificar necesidades específicas y definir qué tipo de solución tecnológica puede mejorar la operación.
              </p>
            </article>

            <article className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-center text-[#193356]">
                Diseño de soluciones tecnológicas personalizadas
              </h3>
              <p className="text-sm leading-relaxed text-center text-slate-600">
                Diseñamos aplicaciones empresariales adaptadas a los procesos y objetivos de la organización, asegurando que la solución responda a la operación real del negocio.
              </p>
            </article>

            <article className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-center text-[#193356]">
                Desarrollo de aplicaciones empresariales
              </h3>
              <p className="text-sm leading-relaxed text-center text-slate-600">
                Construimos sistemas y aplicaciones a medida que permiten optimizar la gestión de información, mejorar el control operativo y digitalizar procesos internos.
              </p>
            </article>

            <article className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 12m0 0l-4 4m4-4l4 4" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-center text-[#193356]">
                Integración con sistemas existentes
              </h3>
              <p className="text-sm leading-relaxed text-center text-slate-600">
                Conectamos las aplicaciones desarrolladas con sistemas actuales de la empresa, como ERP, CRM u otras plataformas, para garantizar continuidad en los flujos de información.
              </p>
            </article>

            <article className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-center text-[#193356]">
                Implementación en infraestructura cloud
              </h3>
              <p className="text-sm leading-relaxed text-center text-slate-600">
                Desplegamos las soluciones en entornos cloud que permiten mayor disponibilidad, seguridad y acceso a la información desde diferentes ubicaciones.
              </p>
            </article>

            <article className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-center text-[#193356]">
                Escalabilidad y evolución tecnológica
              </h3>
              <p className="text-sm leading-relaxed text-center text-slate-600">
                Desarrollamos soluciones tecnológicas preparadas para crecer junto con la empresa, permitiendo incorporar nuevas funcionalidades y adaptarse a futuras necesidades del negocio.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6f8] py-16 md:py-20">
        <div className="mx-auto w-full max-w-440 px-6 md:px-10">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#193356] md:text-4xl">
            Beneficios Clave
          </h2>

          <div className="cards-mobile-scroll flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory md:grid md:gap-6 md:overflow-visible md:pb-0 md:snap-none md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Software adaptado a procesos internos
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Desarrollamos aplicaciones que reflejan exactamente como opera tu empresa: flujos de aprobacion, jerarquias, reglas de negocio y particularidades operativas propias de tu sector.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Escalabilidad empresarial
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Construimos con arquitecturas modernas que crecen junto a tu empresa: mas usuarios, mas volumen de datos y nuevas funcionalidades sin necesidad de reescribir el sistema.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Integración con sistemas existentes
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Conectamos el software nuevo con tu ERP, CRM, plataformas contables y aplicaciones cloud actuales, garantizando continuidad operativa y flujo de datos sin interrupciones.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Mayor control operativo
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Cada proceso queda trazado y auditable dentro del sistema: aprobaciones, estados, responsables y tiempos, dandole a la direccion visibilidad total sobre la operacion.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Ventaja competitiva tecnologica
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Un software a medida es una herramienta exclusiva que tus competidores no tienen: optimiza lo que te hace diferente y convierte tus procesos unicos en una fortaleza de mercado.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="font-display text-3xl font-semibold text-[#2B3E7F] md:text-4xl">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              Contacta con nuestro equipo de expertos y descubre como podemos impulsar tu negocio
            </p>
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3A4A8C]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-slate-500">Email</span>
                  <a href="mailto:contacto@radiast.com" className="text-base font-semibold text-[#2B3E7F] hover:underline">
                    contacto@radiast.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3A4A8C]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-slate-500">Teléfono</span>
                  <a href="tel:77802012" className="text-base font-semibold text-[#2B3E7F] hover:underline">
                    77802012
                  </a>
                </div>
              </div>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-lg bg-[#f4b400] px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-[#f4b400]/30 transition hover:-translate-y-px hover:bg-[#f59e0b]"
              href="/contacto"
              aria-label="Solicitar consulta gratuita"
            >
              Solicitar Consulta Gratuita
            </a>
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
            </div>

            <div>
              <h4 className="font-semibold">Enlaces Rapidos</h4>
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
                    Automatizacion de Procesos
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
                <li>contacto@radiast.com</li>
                <li>77802012</li>
              </ul>
              <div className="flex items-center gap-3 text-slate-300">
                <a aria-label="Facebook de Radiast" className="transition hover:text-white" href="https://www.facebook.com/Radiast.Tecnologia.Integrada" rel="noreferrer noopener" target="_blank">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 22v-8H16l.5-3h-3V9.5c0-.9.3-1.5 1.6-1.5H17V5.2c-.4-.1-1.3-.2-2.5-.2-2.5 0-4 1.5-4 4.3V11H8v3h2.5v8h3z" />
                  </svg>
                </a>
                <a aria-label="LinkedIn de Radiast" className="transition hover:text-white" href="https://www.linkedin.com/company/radiastechnology/" rel="noreferrer noopener" target="_blank">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 10v7" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                    <circle cx="8" cy="7.5" r="1" fill="currentColor" />
                    <path d="M12 17v-4c0-1.1.9-2 2-2s2 .9 2 2v4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </a>
                <a aria-label="Instagram de Radiast" className="transition hover:text-white" href="https://www.instagram.com/radiastechnology/" rel="noreferrer noopener" target="_blank">
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




