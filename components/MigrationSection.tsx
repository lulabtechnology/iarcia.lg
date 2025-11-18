import Image from "next/image";

export default function MigrationSection() {
  const requisitos = [
    "Pasaporte vigente con sello de entrada a Panamá.",
    "Récord policivo apostillado o debidamente legalizado.",
    "Fotografías tamaño carnet recientes.",
    "Comprobantes económicos o cheques bancarios según el tipo de permiso.",
    "Documentación que sustente la actividad económica o vínculo familiar.",
    "Formulario migratorio completo y pago de tasas correspondientes."
  ];

  return (
    <section
      id="migracion"
      className="section-spacing bg-brand-beige"
      aria-labelledby="migracion-title"
    >
      <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <h2
            id="migracion-title"
            className="font-heading text-2xl sm:text-3xl font-semibold text-brand-dark"
          >
            Permisos de Migración en Panamá
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed">
            Panamá cuenta con una normativa migratoria en constante
            actualización. La Licda. Idalia Arcia te orienta para escoger la
            figura legal correcta, preparar la documentación y presentar tu
            trámite con el menor margen de error posible.
          </p>
          <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed">
            Revisamos contigo los requisitos según tu nacionalidad, situación
            laboral, familiar o de estudios, para que comprendas cada etapa del
            proceso antes de iniciar.
          </p>

          <div className="mt-4 space-y-2 text-sm text-brand-dark/90">
            <p className="font-semibold text-brand-accent">
              Requisitos frecuentes que solemos revisar:
            </p>
            <ul className="space-y-1.5">
              {requisitos.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[4px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[10px] text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <a href="#contacto" className="btn-primary">
              Quiero asesoría en migración
            </a>
            <a
              href="https://wa.me/50762009635?text=Hola%20Licda.%20Idalia,%20quisiera%20informaci%C3%B3n%20sobre%20permisos%20migratorios%20en%20Panam%C3%A1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        <div className="relative h-64 sm:h-80 lg:h-[380px]">
          <div className="absolute inset-0 rounded-2xl bg-brand-dark/10" />
          <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-soft-lg border border-brand-soft">
            <Image
              src="/images/migration-panama.jpg"
              alt="Vista de la ciudad de Panamá y bandera panameña"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
