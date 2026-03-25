import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Infraestructura Cloud en Microsoft Azure | Radiast",
  description:
    "Arquitectura cloud segura, escalable y preparada para crecimiento digital.",
  alternates: {
    canonical: "https://radiast.com/servicios/cloud",
  },
};

export default function CloudPage() {
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
            <span>Infraestructura Cloud Empresarial</span>
          </nav>
        </div>
      </section>

      <section className="relative min-h-120 overflow-hidden md:min-h-130">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(233,249,252,0.78)_0%,rgba(233,249,252,0.62)_34%,rgba(233,249,252,0.15)_68%,rgba(233,249,252,0.03)_100%)]" />

        <div className="relative mx-auto flex w-full max-w-440 items-center px-6 py-10 md:min-h-130 md:px-10 md:pl-14 md:py-14">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#17356a] md:text-6xl">
              Infraestructura Cloud
              <br />
              Empresarial
            </h1>
            <p className="mt-5 max-w-4xl text-sm leading-relaxed text-black md:text-xl md:leading-tight">
              Arquitectura cloud segura, escalable y preparada para crecimiento digital.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e9eef5]">
        <div className="mx-auto w-full max-w-440 px-6 py-14 md:px-10 md:py-16">
          <h2 className="mb-12 text-center text-xl font-semibold text-[#193356] md:text-3xl md:leading-none">
            Sobre este servicio
          </h2>

          <div className="cards-mobile-scroll flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory md:grid md:gap-6 md:overflow-visible md:pb-0 md:snap-none md:grid-cols-2 lg:grid-cols-3">
            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M6 3h12a3 3 0 013 3v8a3 3 0 01-3 3h-4l-2 4-2-4H6a3 3 0 01-3-3V6a3 3 0 013-3z" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Diseño de arquitectura cloud empresarial
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Diseñamos infraestructuras en la nube adaptadas a las necesidades del negocio, asegurando una arquitectura tecnológica sólida, segura y preparada para el crecimiento.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 15a4 4 0 014-4h1a5 5 0 019.584 1.379A3.5 3.5 0 0118.5 19H8a4 4 0 01-4-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v6m0 0l-3-3m3 3l3-3" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Implementación de infraestructura en Microsoft Azure
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Desplegamos entornos cloud utilizando servicios de Microsoft Azure, configurando recursos que permitan operar aplicaciones empresariales de forma eficiente y confiable.
              </p>
            </article>

            <article className="group rounded-lg bg-white p-8 shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/80">
              <div className="mb-4 flex justify-center">
                <svg className="h-10 w-10 transition duration-300 ease-out group-hover:scale-110" fill="none" stroke="#0B56B8" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-6 9 6-9 6-9-6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12v4a2 2 0 002 2h8a2 2 0 002-2v-4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14h4" />
                </svg>
              </div>
              <h3 className="mb-3 text-center text-lg font-semibold text-[#193356]">
                Configuración de redes privadas y seguridad
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Implementamos arquitecturas con redes virtuales privadas (VNet) que permiten aislar y proteger los recursos tecnológicos dentro de la infraestructura cloud.
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
                Gestión de accesos y control de permisos
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Aplicamos modelos de control de acceso basado en roles (RBAC) para garantizar que cada usuario o sistema tenga únicamente los permisos necesarios dentro de la plataforma.
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
                Protección y cifrado de datos
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Implementamos mecanismos de seguridad y cifrado que protegen la información empresarial tanto en tránsito como en almacenamiento.
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
                Infraestructura preparada para soluciones avanzadas
              </h3>
              <p className="text-center text-sm leading-relaxed text-slate-600">
                Configuramos entornos cloud preparados para soportar automatización de procesos, aplicaciones críticas del negocio y futuras implementaciones de inteligencia artificial empresarial.
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
                Seguridad cloud empresarial (Zero Trust)
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Implementamos arquitecturas Zero Trust en Azure: verificación continua de identidades, accesos mínimos necesarios, VNet privadas y microsegmentación para proteger cada capa del entorno cloud.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Protección y soberanía de datos
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Garantizamos que los datos de tu empresa permanezcan cifrados en reposo y en tránsito, con control total sobre dónde se almacenan, quién accede y bajo qué políticas de retención y cumplimiento.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Escalabilidad sin interrupciones
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                La infraestructura Azure crece con tu empresa de forma automática: más cómputo, almacenamiento y capacidad de red disponibles en minutos, sin tiempos de inactividad ni intervención manual.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Optimización de costos en Azure
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Aplicamos estrategias de FinOps: Reserved Instances, Auto Scaling, eliminación de recursos ociosos y políticas de gobernanza de costos para maximizar el valor de cada dólar invertido en Azure.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Infraestructura preparada para IA y automatización
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Configuramos entornos Azure optimizados para cargas de trabajo de IA, Machine Learning y automatización: Azure ML, Cognitive Services, Functions y pipelines de datos de alto rendimiento.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-1 w-12 bg-[#0ea5e9]" />
              <h3 className="mb-3 text-lg font-bold text-[#193356]">
                Continuidad operativa empresarial
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Diseñamos arquitecturas de alta disponibilidad con SLA 99.9%+, estrategias de backup automatizado, replicación geográfica y planes de disaster recovery para garantizar que tu operación nunca se detenga.
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

