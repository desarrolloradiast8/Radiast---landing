import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Capacitación Empresarial en Transformación Digital y Tecnología | Radiast",
  description:
    "Formación estratégica en automatización, datos e inteligencia artificial.",
  alternates: {
    canonical: "https://radiast.com/servicios/capacitacion",
  },
};

export default function CapacitacionPage() {
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
            <span>Capacitación Empresarial en Transformación Digital y Tecnología</span>
          </nav>
        </div>
      </section>

      <section className="relative min-h-120 overflow-hidden md:min-h-130">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(233,249,252,0.78)_0%,rgba(233,249,252,0.62)_34%,rgba(233,249,252,0.15)_68%,rgba(233,249,252,0.03)_100%)]" />

        <div className="relative mx-auto flex w-full max-w-440 items-center px-6 py-10 md:min-h-130 md:px-10 md:pl-14 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#17356a] md:text-6xl">
              Capacitación Empresarial en
              <br />
              Transformación Digital y
              <br />
              Tecnología
            </h1>
            <p className="mt-5 max-w-4xl text-sm leading-relaxed text-black md:text-xl md:leading-tight">
              Formación estratégica en automatización, datos e inteligencia artificial.
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
                Diagnóstico de necesidades de capacitación
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Evaluamos las capacidades tecnológicas actuales del equipo para identificar las áreas donde la formación puede generar mayor impacto en la operación y estrategia del negocio.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Diseño de programas de formación empresarial
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Desarrollamos programas de capacitación adaptados a las necesidades de la organización, alineados con los objetivos de transformación digital de la empresa.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Capacitación en automatización de procesos
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Formamos a los equipos en el uso de herramientas y metodologías que permiten automatizar tareas operativas y optimizar procesos empresariales.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Formación en Business Intelligence y análisis de datos
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Entrenamos a profesionales en el uso de herramientas de análisis de datos y visualización para mejorar la interpretación de información y la toma de decisiones.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m0 8v4m8-8h-4M8 12H4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.757 7.757l2.829 2.829m2.828 2.828l2.829 2.829m0-8.486l-2.829 2.829m-2.828 2.828l-2.829 2.829" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Aplicación empresarial de inteligencia artificial
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Capacitamos a los equipos en el uso estratégico de la inteligencia artificial para optimizar procesos administrativos, operativos y de gestión.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 12h8M8 17h5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Enfoque práctico orientado al negocio
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Las capacitaciones se desarrollan con un enfoque aplicado a casos reales de la empresa, asegurando que el conocimiento adquirido pueda implementarse directamente en la operación diaria.
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
                Equipos preparados para transformación digital
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Formamos a tus equipos con los conocimientos, herramientas y mentalidad necesarios para liderar y ejecutar procesos de transformación digital dentro de la organización.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Formación en automatización y BI
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Capacitamos en herramientas de automatización de procesos (RPA, Power Automate) y Business Intelligence (Power BI), habilitando a tu equipo para optimizar operaciones y tomar decisiones basadas en datos.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Capacitación en IA empresarial
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Formamos a ejecutivos, mandos medios y equipos técnicos en conceptos, casos de uso y herramientas de inteligencia artificial aplicada al negocio, para que puedan identificar oportunidades e implementar soluciones con criterio.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Desarrollo de habilidades tecnológicas
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Fortalecemos las capacidades digitales individuales y colectivas de tu organización a través de programas prácticos y personalizados que generan un impacto medible en productividad y adopción tecnológica.
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

