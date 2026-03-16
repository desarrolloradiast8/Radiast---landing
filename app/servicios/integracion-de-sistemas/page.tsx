import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Integración de Sistemas Empresariales | Radiast",
  description:
    "Conectamos tus sistemas para un flujo de información eficiente y sin reprocesos.",
  alternates: {
    canonical: "https://radiast.com/servicios/integracion-de-sistemas",
  },
};

export default function IntegracionDeSistemasPage() {
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
            <span>Integración de Sistemas Empresariales</span>
          </nav>
        </div>
      </section>

      <section className="relative min-h-120 overflow-hidden md:min-h-130">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(233,249,252,0.78)_0%,rgba(233,249,252,0.62)_34%,rgba(233,249,252,0.15)_68%,rgba(233,249,252,0.03)_100%)]" />

        <div className="relative mx-auto flex w-full max-w-440 items-center px-6 py-10 md:min-h-130 md:px-10 md:pl-14 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#17356a] md:text-6xl">
              Integración de Sistemas
              <br />
              Empresariales
            </h1>
            <p className="mt-5 max-w-4xl text-sm leading-relaxed text-black md:text-xl md:leading-tight">
              Conectamos tus sistemas para un flujo de información eficiente y sin reprocesos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e9eef5]">
        <div className="mx-auto w-full max-w-440 px-6 py-14 md:px-10 md:py-16">
          <h2 className="text-center text-xl font-semibold text-[#193356] mb-12 md:text-3xl md:leading-none">
            Sobre este servicio
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 [&>article]:transition [&>article]:duration-300 [&>article]:ease-out [&>article:hover]:-translate-y-2 [&>article:hover]:shadow-xl [&>article:hover]:shadow-sky-100/80">
            <article className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-center text-[#193356]">
                Análisis de sistemas empresariales
              </h3>
              <p className="text-sm leading-relaxed text-center text-slate-600">
                Evaluamos las plataformas y sistemas actuales de la empresa para identificar cómo se gestionan los datos y detectar oportunidades de integración y optimización.
              </p>
            </article>

            <article className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-center text-[#193356]">
                Integración de plataformas empresariales
              </h3>
              <p className="text-sm leading-relaxed text-center text-slate-600">
                Conectamos sistemas como ERP, CRM, plataformas contables y aplicaciones cloud para asegurar un flujo de información continuo entre las distintas áreas del negocio.
              </p>
            </article>

            <article className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 12m0 0l-4 4m4-4l4 4" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-center text-[#193356]">
                Sincronización de datos
              </h3>
              <p className="text-sm leading-relaxed text-center text-slate-600">
                Implementamos mecanismos que permiten mantener la información actualizada y consistente entre todos los sistemas, evitando inconsistencias y duplicidad de datos.
              </p>
            </article>

            <article className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-center text-[#193356]">
                Automatización de procesos entre sistemas
              </h3>
              <p className="text-sm leading-relaxed text-center text-slate-600">
                Configuramos integraciones que permiten automatizar procesos operativos entre diferentes plataformas, reduciendo tareas manuales y mejorando la eficiencia.
              </p>
            </article>

            <article className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4v2m0 4v2M12 3a9 9 0 110 18 9 9 0 010-18zm0 2a7 7 0 100 14 7 7 0 000-14z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-center text-[#193356]">
                Eliminación de duplicidad de información
              </h3>
              <p className="text-sm leading-relaxed text-center text-slate-600">
                Centralizamos los datos empresariales para evitar registros duplicados y mejorar la calidad y confiabilidad de la información.
              </p>
            </article>

            <article className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-center text-[#193356]">
                Creación de un ecosistema digital unificado
              </h3>
              <p className="text-sm leading-relaxed text-center text-slate-600">
                Transformamos sistemas aislados en una infraestructura tecnológica conectada que facilita el control operativo, la gestión de información y la eficiencia empresarial.
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
                Sincronización automática de datos
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Los datos de tus sistemas ERP, CRM y plataformas cloud se sincronizan automáticamente en tiempo real, asegurando información consistente y actualizada en toda la organización.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Eliminación de reprocesos manuales
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Suprimimos la necesidad de ingresar el mismo dato en múltiples sistemas, eliminando errores por duplicidad, retrabajo innecesario y pérdida de tiempo operativo.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Integración de Sistemas Web
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Conectamos tus aplicaciones web, portales y APIs externas con tus sistemas internos, creando un ecosistema digital unificado que responde en tiempo real a cada operación.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Mayor control administrativo
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Con sistemas integrados, la dirección obtiene visibilidad total sobre operaciones, inventarios, finanzas y clientes desde un único punto de control, sin depender de reportes fragmentados.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Flujo continuo de información empresarial
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                La información fluye sin interrupciones entre áreas: ventas, contabilidad, logística y recursos humanos trabajan sobre los mismos datos actualizados, mejorando la coordinación interdepartamental.
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
              Solicitar Consulta Gratuita →
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
                <li>Consultoría en Transformación Digital</li>
                <li>Automatización de Procesos</li>
                <li>Business Intelligence</li>
                <li>Infraestructura Cloud</li>
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
                  <span>+591 789 01234</span>
                </li>
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

