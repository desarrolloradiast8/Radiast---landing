import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../components/header";

export const metadata: Metadata = {
  title: "Nosotros - Quiénes Somos | Radiast",
  description: "Conoce a Radiast, empresa líder en transformación digital. Nuestro equipo de expertos en tecnología, misión, visión y valores que nos impulsan a innovar.",
  keywords: [
    "radiast",
    "empresa tecnología",
    "transformación digital",
    "equipo radiast",
    "consultora tecnológica",
    "innovación digital"
  ],
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: "https://radiast.com/nosotros",
    title: "Nosotros - Radiast | Transformación Digital",
    description: "Conoce nuestro equipo, misión y visión. Líderes en transformación digital y tecnología empresarial.",
    siteName: "Radiast",
  },
  alternates: {
    canonical: "https://radiast.com/nosotros"
  }
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header currentPage="nosotros" />

      <section className="relative min-h-[calc(100vh-81px)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/nosotros-hero.jpg'), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,43,0.90),rgba(6,18,43,0.80),rgba(6,18,43,0.65))]" />

        <div className="relative mx-auto flex w-full max-w-6xl items-center px-6 py-20 md:min-h-[calc(100vh-81px)] md:py-28">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold leading-[1.1] text-white md:text-6xl">
              Consultoría e Integración Tecnológica
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-100 md:text-2xl">
              Consultoría e integración tecnológica para empresas que buscan optimizar sus procesos, conectar sus sistemas y mejorar su eficiencia operativa mediante soluciones digitales modernas.
            </p>

            <div className="mt-8">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-[#facc15]/30 transition hover:-translate-y-px hover:bg-[#eab308]"
                href="/contacto"
              >
                Solicitar Diagnóstico
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-16">
          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="mb-8">
                <h2 className="font-display text-4xl font-bold text-[#193356]">
                  Quiénes somos
                </h2>
                <div className="mt-3 h-1.5 w-16 bg-[#0B56B8]"></div>
              </div>

              <h3 className="text-xl font-semibold text-[#193356]">
                Tecnología que impulsa<br />
                la transformación empresarial
              </h3>

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-800">RADIAST Tecnología Integrada</span> ayuda a las empresas a modernizar sus procesos mediante automatización, integración de sistemas y soluciones basadas en datos.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Acompañamos a las organizaciones a mejorar su eficiencia operativa, fortalecer su infraestructura tecnológica y tomar decisiones estratégicas basadas en datos.
              </p>

              <article className="mt-8 rounded-lg border-l-4 border-[#0B56B8] bg-white p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0B56B8" strokeWidth={2} className="h-6 w-6">
                      <circle cx="12" cy="12" r="1"/>
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#193356]">Nuestra misión</h4>
                    <p className="mt-2 text-base leading-relaxed text-[#193356]">
                      Brindar soluciones tecnológicas integradas que permitan a las empresas mejorar su eficiencia, competitividad e innovación.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div>
              <div className="overflow-hidden rounded-2xl shadow-lg mb-6">
                <Image src="/images/mision.png" alt="Nuestra Misión - RADIAST" width={500} height={400} className="w-full h-auto rounded-2xl" />
              </div>

              <div className="grid gap-4 grid-cols-3">
                <div className="flex flex-col items-center gap-3 rounded-xl bg-white p-4 text-center shadow-sm border border-slate-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0B56B8" className="h-6 w-6">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <div>
                    <p className="text-2xl font-bold text-[#0B56B8]">20+</p>
                    <p className="mt-2 text-xs font-medium text-[#0B56B8]">proyectos<br/>completados</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 rounded-xl bg-white p-4 text-center shadow-sm border border-slate-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0B56B8" className="h-6 w-6">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                  <div>
                    <p className="text-2xl font-bold text-[#0B56B8]">15+</p>
                    <p className="mt-2 text-xs font-medium text-[#0B56B8]">empresas<br/>asesoradas</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 rounded-xl bg-white p-4 text-center shadow-sm border border-slate-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0B56B8" className="h-6 w-6">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <div>
                    <p className="text-2xl font-bold text-[#0B56B8]">5</p>
                    <p className="mt-2 text-xs font-medium text-[#0B56B8]">años de<br/>experiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image src="/images/mision2.png" alt="Nuestra Visión - RADIAST" width={500} height={400} className="w-full h-auto rounded-2xl" />
            </div>

            <article className="rounded-lg border-l-4 border-[#0B56B8] bg-white p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0B56B8" strokeWidth={2} className="h-6 w-6">
                    <circle cx="12" cy="12" r="1"/>
                    <circle cx="9" cy="9" r="1"/>
                    <circle cx="15" cy="9" r="1"/>
                    <circle cx="9" cy="15" r="1"/>
                    <circle cx="15" cy="15" r="1"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#193356]">Nuestra Visión</h4>
                  <p className="mt-2 text-base leading-relaxed text-[#193356]">
                    Ser referente en transformación digital, automatización empresarial e inteligencia artificial aplicada en la región.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF3FB]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-[#193356] md:text-4xl">
              Nuestro Enfoque
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-[#0B56B8]" />
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
            <article className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_10px_20px_rgba(15,23,42,0.10)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-8 w-8 text-[#0B56B8]"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="12" cy="12" r="8" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-[#2B3E7F]">
                Estrategia
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Analizamos el negocio antes de implementar tecnología.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0B56B8]" />
            </article>

            <article className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_10px_20px_rgba(15,23,42,0.10)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-8 w-8 text-[#0B56B8]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21h9m0 0a3 3 0 110-6h.75a3 3 0 110 6h-.75zM2.25 9h19.5m-16.5 11.25h6m-6 0H2.25M9 11.25a3 3 0 11-6 0 3 3 0 016 0zM15 9h6M15 12a3 3 0 11-6 0 3 3 0 016 0zm6-1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
              </svg>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-[#2B3E7F]">
                Integración
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Conectamos sistemas, datos y procesos.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0B56B8]" />
            </article>

            <article className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_10px_20px_rgba(15,23,42,0.10)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-8 w-8 text-[#0B56B8]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.318l2.74-1.22m0 0l-5.94-2.702m5.94 2.702h-3.192a3 3 0 00-3 3v4.414m.8-10.646a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-[#2B3E7F]">
                Resultados
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Medimos impacto y optimizamos continuamente.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0B56B8]" />
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,18,32,0.88),rgba(11,18,32,0.75))]" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
          <div className="text-center">
            <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
              Nuestro Compromiso
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-100 md:text-lg">
              Impulsamos la innovación empresarial mediante <span className="font-semibold">soluciones prácticas, escalables y efectivas</span>, integrando tecnología con visión estratégica
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-[#00A4EF]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <p className="text-base leading-relaxed text-white md:text-lg">
                <span className="font-semibold">Análisis</span> estratégico de las necesidades de cada empresa.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-[#00A4EF]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <p className="text-base leading-relaxed text-white md:text-lg">
                <span className="font-semibold">Diseño</span> de soluciones tecnológicas a medida.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-[#00A4EF]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <p className="text-base leading-relaxed text-white md:text-lg">
                <span className="font-semibold">Implementación</span> y seguimiento continuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center font-display text-3xl font-semibold text-slate-900 md:text-4xl">
            Clientes y <span className="text-[#193356]">Aliados</span>
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-6">
            <article className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/40 min-h-[140px]">
              <Image src="/logos/ebu.png" alt="Logo EBU - Cliente Radiast" width={160} height={80} className="h-20 w-auto object-contain" />
            </article>

            <article className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/40 min-h-[140px]">
              <Image src="/logos/nibol.png" alt="Logo NIBOL - Cliente Radiast" width={160} height={80} className="h-20 w-auto object-contain" />
            </article>

            <article className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/40 min-h-[140px]">
              <Image src="/logos/salus.png" alt="Logo SALUS - Cliente Radiast" width={160} height={80} className="h-20 w-auto object-contain" />
            </article>

            <article className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/40 min-h-[140px]">
              <Image src="/logos/guabira.png" alt="Logo GUABIRA - Cliente Radiast" width={160} height={80} className="h-20 w-auto object-contain" />
            </article>

            <article className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/40 min-h-[140px]">
              <Image src="/logos/guabira2.png" alt="Logo GUABIRA 2 - Cliente Radiast" width={160} height={80} className="h-20 w-auto object-contain" />
            </article>

            <article className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/40 min-h-[140px]">
              <Image src="/logos/tata.png" alt="Logo TATA - Cliente Radiast" width={160} height={80} className="h-20 w-auto object-contain" />
            </article>
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
              <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                <span>FB</span>
                <span>IN</span>
                <span>TW</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold text-white">
                Enlaces Rápidos
              </div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link className="transition hover:text-white" href="/">
                    Inicio
                  </Link>
                </li>
                <li>
                  <a className="transition hover:text-white" href="/nosotros">
                    Nosotros
                  </a>
                </li>
                <li>
                  <Link className="transition hover:text-white" href="/#servicios">
                    Servicios
                  </Link>
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
                <li className="flex items-start gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    LOC
                  </span>
                  <span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    TEL
                  </span>
                  <span>+591 789 01234</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    MAIL
                  </span>
                  <span>contacto@radiast.com</span>
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
