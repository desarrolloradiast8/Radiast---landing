import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Inteligencia Artificial Empresarial Aplicada al Negocio | Radiast",
  description:
    "IA segura y estrategica para mejorar productividad y analisis empresarial.",
  alternates: {
    canonical: "https://radiast.com/servicios/ia",
  },
};

export default function IAPage() {
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
            <span>Inteligencia Artificial Empresarial Aplicada al Negocio</span>
          </nav>
        </div>
      </section>

      <section className="relative min-h-120 overflow-hidden md:min-h-130">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(233,249,252,0.78)_0%,rgba(233,249,252,0.62)_34%,rgba(233,249,252,0.15)_68%,rgba(233,249,252,0.03)_100%)]" />

        <div className="relative mx-auto flex w-full max-w-440 items-center px-6 py-10 md:min-h-130 md:px-10 md:pl-14 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#17356a] md:text-6xl">
              Inteligencia Artificial
              <br />
              Empresarial Aplicada al
              <br />
              Negocio
            </h1>
            <p className="mt-5 max-w-4xl text-sm leading-relaxed text-black md:text-xl md:leading-tight">
              IA segura y estrategica para mejorar productividad y analisis empresarial.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e9eef5]">
        <div className="mx-auto w-full max-w-440 px-6 py-14 md:px-10 md:py-16">
          <h2 className="mb-12 text-center text-xl font-semibold text-[#193356] md:text-3xl md:leading-none">
            Sobre este servicio
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Análisis de oportunidades para inteligencia artificial
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Evaluamos los procesos empresariales para identificar áreas donde la inteligencia artificial puede generar mejoras en eficiencia, automatización y análisis de información.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Diseño de soluciones de IA empresarial
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Definimos la arquitectura y estrategia de implementación de inteligencia artificial alineada con los objetivos operativos y estratégicos de la organización.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V8a2 2 0 012-2h6a2 2 0 012 2v8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 16h14" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M12 12h.01M15 12h.01" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Integración de modelos de inteligencia artificial
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Implementamos modelos de IA que permiten analizar grandes volúmenes de datos, generar predicciones y apoyar la toma de decisiones empresariales.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-3 3v-3z" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Desarrollo de asistentes inteligentes internos
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Creamos asistentes basados en inteligencia artificial que ayudan a automatizar consultas, gestión de información y soporte en procesos administrativos.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Automatización cognitiva de procesos
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Aplicamos inteligencia artificial para automatizar tareas que requieren análisis de información, interpretación de datos y toma de decisiones operativas.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 17l4-4 4 4 8-8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 9h6v6" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Análisis predictivo para la toma de decisiones
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Utilizamos técnicas de análisis predictivo que permiten anticipar tendencias, optimizar la planificación empresarial y mejorar la estrategia del negocio basada en datos.
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Automatización inteligente de procesos
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Combinamos RPA con IA cognitiva para automatizar procesos complejos que requieren comprensión del contexto, interpretación de documentos y toma de decisiones estructuradas.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Clasificación documental automática
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Implementamos modelos de IA que leen, clasifican y enrutan documentos automáticamente: facturas, contratos, formularios y reportes, eliminando la revisión manual y acelerando los flujos documentales.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Asistentes internos empresariales
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Desarrollamos asistentes de IA entrenados con la información de tu empresa: políticas, procedimientos y datos internos, para responder consultas, apoyar a equipos y acelerar la gestión del conocimiento.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Análisis predictivo y proyecciones
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Construimos modelos predictivos que analizan datos históricos para proyectar ventas, demanda, riesgos financieros y comportamiento de clientes, habilitando una gestión empresarial anticipativa.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Mayor eficiencia operativa
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                La IA aplicada a procesos core del negocio libera capacidad humana, reduce ciclos de operación y permite que los equipos se concentren en tareas de alto valor estratégico.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Reducción de tiempos de análisis
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Lo que antes tomaba horas de revisión manual, la IA lo procesa en segundos: análisis de contratos, revisión de datos financieros, detección de anomalías y generación de reportes automatizados.
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
              Contacta con nuestro equipo de expertos y descubre cómo podemos impulsar tu negocio
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
                <li>Consultoría en Transformación Digital</li>
                <li>Automatización de Procesos</li>
                <li>Business Intelligence</li>
                <li>Infraestructura Cloud</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Contacto</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>contacto@radiast.com</li>
                <li>+591 789 01234</li>
              </ul>
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

