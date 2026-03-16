import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Outsourcing de Desarrolladores y Talento TI | Radiast",
  description:
    "Talento tecnologico especializado bajo gestion estrategica.",
  alternates: {
    canonical: "https://radiast.com/servicios/outsourcing",
  },
};

export default function OutsourcingPage() {
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
            <span>Outsourcing de Desarrolladores y Talento TI</span>
          </nav>
        </div>
      </section>

      <section className="relative min-h-120 overflow-hidden md:min-h-130">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(233,249,252,0.78)_0%,rgba(233,249,252,0.62)_34%,rgba(233,249,252,0.15)_68%,rgba(233,249,252,0.03)_100%)]" />

        <div className="relative mx-auto flex w-full max-w-440 items-center px-6 py-10 md:min-h-130 md:px-10 md:pl-14 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#17356a] md:text-6xl">
              Outsourcing de
              <br />
              Desarrolladores y Talento TI
            </h1>
            <p className="mt-5 max-w-4xl text-sm leading-relaxed text-black md:text-xl md:leading-tight">
              Talento tecnológico especializado bajo gestión estratégica.
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
                Análisis de necesidades tecnológicas
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Evaluamos los requerimientos del proyecto o de la organización para identificar los perfiles tecnológicos necesarios y el nivel de especialización requerido.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 21v-1a5 5 0 015-5h4a5 5 0 015 5v1" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h3m-1.5-1.5v3" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Provisión de talento tecnológico especializado
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Facilitamos profesionales como desarrolladores, arquitectos de software, analistas de datos y especialistas en tecnología para fortalecer las capacidades técnicas de la empresa.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Escalabilidad de equipos de trabajo
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Permitimos a las empresas ampliar o ajustar sus equipos tecnológicos de acuerdo con la demanda de proyectos, sin incurrir en costos fijos de contratación permanente.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Proceso de selección y validación técnica
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Gestionamos la identificación, evaluación y selección de profesionales con las competencias necesarias para integrarse eficientemente a los equipos de trabajo.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12.5l1.5 1.5 3.5-4" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Supervisión técnica y control de calidad
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Realizamos seguimiento del desempeño del equipo asignado, asegurando que el trabajo cumpla con estándares técnicos y objetivos definidos.
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
                Alineación con objetivos del negocio
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Garantizamos que el talento tecnológico proporcionado contribuya directamente al desarrollo de proyectos y a los resultados estratégicos de la empresa.
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
                Reducción de costos laborales fijos
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Accede a talento TI especializado sin cargas sociales, beneficios fijos ni costos de reclutamiento. Pagas únicamente por la capacidad productiva que necesitas, cuando la necesitas.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Acceso a desarrolladores especializados
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Incorpora desarrolladores con experiencia en tecnologías específicas: cloud, automatización, IA, integraciones o aplicaciones empresariales, sin los tiempos y costos de un proceso de selección propio.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Escalabilidad de equipos TI
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Aumenta o reduce el tamaño de tu equipo tecnológico según la demanda del negocio, sin compromisos de largo plazo. Escala proyectos rápidamente y ajusta recursos con total flexibilidad.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Supervisión técnica y control de calidad
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                RADIAST no solo provee talento: supervisa técnicamente el trabajo, garantiza estándares de calidad, realiza revisiones de código y asegura que cada entregable cumpla con los requerimientos del negocio.
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

