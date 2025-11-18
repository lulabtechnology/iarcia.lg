import Image from "next/image";

export default function DomesticViolenceSection() {
  return (
    <section
      id="violencia"
      className="section-spacing bg-brand-light"
      aria-labelledby="violencia-title"
    >
      <div className="section-container grid gap-10 lg:grid-cols-[1.2fr,0.9fr] lg:items-center">
        <div className="card-soft bg-white/95 border-l-4 border-brand-accent p-6 sm:p-7 space-y-4">
          <h2
            id="violencia-title"
            className="font-heading text-2xl sm:text-3xl font-semibold text-brand-accent"
          >
            ¿Sufres violencia doméstica?
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed">
            Nadie merece vivir con miedo. Si estás atravesando una situación de
            violencia doméstica, verbal, física o psicológica, es importante que
            sepas que existen rutas de protección y acompañamiento legal.
          </p>
          <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed">
            La Licda. Idalia Arcia te orienta sobre medidas de protección,
            denuncias, procesos penales y las alternativas disponibles para
            resguardar tu integridad y la de tu familia. La información que
            compartas será tratada con absoluta confidencialidad.
          </p>

          <div className="mt-3 grid gap-3 text-xs sm:text-sm text-brand-dark/80">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent text-[13px] text-white">
                ✓
              </span>
              Orientación sobre medidas de protección y denuncias.
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent text-[13px] text-white">
                ✓
              </span>
              Acompañamiento en procesos penales vinculados a violencia
              doméstica.
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent text-[13px] text-white">
                ✓
              </span>
              Asesoría para proteger también a niñas, niños y adolescentes.
            </div>
          </div>

          <div className="pt-5 flex flex-wrap gap-3">
            <a
              href="https://wa.me/50762009635?text=Hola%20Licda.%20Idalia,%20estoy%20atravesando%20una%20situaci%C3%B3n%20de%20violencia%20y%20necesito%20orientaci%C3%B3n%20legal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-brand-accent"
            >
              Contáctame de inmediato
            </a>
            <a
              href="#contacto"
              className="btn-secondary border-brand-accent/60 text-brand-accent hover:bg-brand-soft/70"
            >
              Ver opciones de apoyo
            </a>
          </div>
        </div>

        <div className="relative h-56 sm:h-72 lg:h-[320px]">
          <div className="absolute inset-0 rounded-2xl bg-brand-soft/60" />
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-brand-soft shadow-soft-lg">
            <Image
              src="/images/domestic-violence.jpg"
              alt="Persona acompañada en un entorno seguro y de apoyo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
