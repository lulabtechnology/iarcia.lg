export default function ServicesSection() {
  const services = [
    {
      title: "Derecho de familia",
      description:
        "Custodia, patria potestad, reglamentación de visitas, pensión alimenticia, divorcios y acuerdos familiares.",
      featured: false
    },
    {
      title: "Registro de marca y creación de sociedades",
      description:
        "Asesoría integral para registrar tu marca y estructurar sociedades anónimas u otras figuras legales de negocio, desde la idea hasta su inscripción formal.",
      featured: true
    },
    {
      title: "Derecho penal",
      description:
        "Defensa técnica en procesos penales, asesoría desde las primeras diligencias y acompañamiento en audiencias."
    },
    {
      title: "Derecho migratorio",
      description:
        "Permisos de residencia, regularización de estatus y orientación frente a cambios normativos migratorios."
    },
    {
      title: "Registros sanitarios",
      description:
        "Tramitación de requisitos para comercializar productos que requieren aprobación y control sanitario."
    },
    {
      title: "Derecho de sucesión",
      description:
        "Herencias, sucesiones y planificación patrimonial en armonía con los intereses de tu familia."
    }
  ];

  return (
    <section
      id="servicios"
      className="section-spacing bg-brand-light/70"
      aria-labelledby="servicios-title"
    >
      <div className="section-container">
        <div className="max-w-3xl mb-10 space-y-3">
          <h2
            id="servicios-title"
            className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark"
          >
            Nuestros Servicios
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/80">
            ARCIA LEGAL GROUP ofrece una asesoría integral que combina
            conocimiento técnico con sensibilidad humana. Cada servicio se
            adapta a la realidad de la persona o empresa que nos consulta.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="card-soft group flex flex-col justify-between bg-white/90 p-5 sm:p-6"
            >
              <div className="space-y-3">
                <div
                  className={
                    service.featured
                      ? "inline-flex items-center gap-2 rounded-full bg-brand-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md"
                      : "inline-flex items-center gap-2 rounded-full bg-brand-soft/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-dark/80"
                  }
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/80" />
                  {service.featured ? "Servicio destacado" : "Servicio legal"}
                </div>
                <h3 className="font-heading text-lg font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-dark/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
