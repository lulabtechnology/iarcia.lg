import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-dark text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-justice.jpg"
          alt="Balanza de la justicia sobre libros legales"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-brand-dark/85 to-brand-dark/95" />
      </div>

      <div className="relative section-container section-spacing flex flex-col gap-12 lg:flex-row lg:items-center">
        {/* Main text */}
        <div className="max-w-xl space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-xs font-medium text-brand-soft ring-1 ring-brand-soft/40 backdrop-blur">
            Atención legal en Panamá · Familia · Migración · Penal
          </p>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Defensa y acompañamiento legal
            <span className="block text-brand-gold">cercano a tu realidad.</span>
          </h1>

          <p className="text-sm sm:text-base text-brand-soft/90 leading-relaxed">
            La <span className="font-semibold">Licda. Idalia Arcia</span> te
            acompaña en procesos de familia, violencia doméstica, derecho penal
            y trámites migratorios en Panamá, con un enfoque humano, seguro y
            confidencial.
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

          <div className="flex flex-wrap gap-4 pt-4 text-xs sm:text-sm text-brand-soft/90">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent/30 text-brand-gold">
                ✓
              </span>
              <span>Atención confidencial y sin juicios</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent/30 text-brand-gold">
                ✓
              </span>
              <span>Consultas presenciales y virtuales</span>
            </div>
          </div>
        </div>

        {/* Side card */}
        <div className="w-full max-w-sm lg:ml-auto">
          <div className="card-soft bg-white/95 text-brand-dark">
            <div className="p-6 sm:p-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-brand-gold/70">
                  <Image
                    src="/images/idalia-profile.jpg"
                    alt="Licda. Idalia Arcia trabajando en su oficina"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading text-base font-semibold">
                    Licda. Idalia Arcia
                  </p>
                  <p className="text-xs text-brand-dark/70">
                    Abogada · ARCIA LEGAL GROUP
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-brand-dark/80">
                “Cada caso representa una historia de vida. Mi compromiso es
                escucharla con respeto, explicarte tus opciones con claridad y
                acompañarte en cada paso del proceso.”
              </p>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-brand-dark/90">
                    Áreas principales
                  </span>
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-dark/80">
                    Familia · Penal · Migración
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-brand-dark/80">
                  <div className="rounded-xl bg-brand-light px-3 py-2">
                    Reglamentación de visitas
                  </div>
                  <div className="rounded-xl bg-brand-light px-3 py-2">
                    Violencia doméstica
                  </div>
                  <div className="rounded-xl bg-brand-light px-3 py-2">
                    Procesos penales
                  </div>
                  <div className="rounded-xl bg-brand-light px-3 py-2">
                    Permisos migratorios
                  </div>
                </div>
              </div>

              <a href="#contacto" className="btn-primary w-full">
                Evaluar mi caso
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
