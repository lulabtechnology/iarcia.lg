import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-light text-brand-dark"
    >
      {/* Fondo con imagen, pero mucho más claro y sutil */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-justice.jpg"
          alt="Balanza de la justicia sobre libros legales"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-light/95 via-white/92 to-brand-soft/92" />
      </div>

      <div className="relative section-container section-spacing flex flex-col gap-12 lg:flex-row lg:items-center">
        {/* Texto principal */}
        <div className="max-w-xl space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-white/80 px-4 py-1 text-xs font-medium text-brand-dark/80 shadow-sm">
            Atención legal en Panamá · Familia · Migración · Penal · Marcas y sociedades
          </p>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-brand-dark">
            Defensa y acompañamiento legal
            <span className="block text-brand-accent">
              cercano a tu realidad.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed">
            La <span className="font-semibold">Licda. Idalia Arcia</span> te
            acompaña en procesos de familia, violencia doméstica, derecho penal
            y trámites migratorios, así como en{" "}
            <span className="font-semibold">
              registro de marca y creación de sociedades
            </span>{" "}
            en Panamá, con un enfoque humano, seguro y confidencial.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/50762009635?text=Hola%20Licda.%20Idalia,%20me%20gustar%C3%ADa%20una%20consulta%20legal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-brand-accent"
            >
              Escríbeme por WhatsApp
            </a>
            <a href="#contacto" className="btn-secondary">
              Agenda una consulta
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 text-xs sm:text-sm text-brand-dark/75">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                ✓
              </span>
              <span>Atención confidencial y sin juicios</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                ✓
              </span>
              <span>Consultas presenciales y virtuales</span>
            </div>
          </div>
        </div>

        {/* Card lateral con la abogada */}
        <div className="w-full max-w-sm lg:ml-auto">
          <
